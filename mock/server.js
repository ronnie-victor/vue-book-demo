let http = require('http')
let url = require('url')
let slider = require('./slider')
let fs = require('fs')
function read (callback) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length === 0) {
      callback([])
    } else {
      callback(JSON.parse(data))
    }
  })
}
function write (data, callback) {
  fs.writeFile('./book.json', JSON.stringify(data), callback)
}
let pageSize = 5
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.setHeader('X-Powered-By', ' 3.2.1')
  if (req.method === 'OPTIONS') return res.end()
  let {pathname, query} = url.parse(req.url, true)
  if (pathname === '/page') {
    let offset = parseInt(query.offset) || 0
    read(function (books) {
      let result = books.reverse().slice(offset, offset + pageSize)
      let hasMore = true
      if (books.length <= offset + pageSize) {
        hasMore = false
      }
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      res.end(JSON.stringify({hasMore, books: result}))
    })
  }
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    return res.end(JSON.stringify(slider))
  }
  if (pathname === '/hot') {
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    read(function (books) {
      let hot = books.reverse().slice(0, 6)
      res.end(JSON.stringify(hot))
    })
    return
  }
  if (pathname === '/book') {
    let id = parseInt(query.id)
    switch (req.method) {
      case 'GET':
        if (id) {
          res.setHeader('Content-Type', 'application/json;charset=utf-8')
          read(function (books) {
            let book = books.find(item => item.bookId === id)
            if (!book) book = {}
            res.end(JSON.stringify(book))
          })
        } else {
          res.setHeader('Content-Type', 'application/json;charset=utf-8')
          read(function (books) {
            res.end(JSON.stringify(books.reverse()))
          })
        }
        break
      case 'POST':
        let str = ''
        req.on('data', chunk => {
          str += chunk
        })
        req.on('end', () => {
          let book = JSON.parse(str)
          console.log(book)
          read(function (books) {
            book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1
            books.push(book)
            write(books, function () {
              res.end(JSON.stringify(book))
            })
          })
        })
        break
      case 'PUT':
        if (id) {
          let str = ''
          req.on('data', chunk => {
            str += chunk
          })
          req.on('end', () => {
            let book = JSON.parse(str)
            read(function (books) {
              books = books.map(item => {
                if (item.bookId === id) {
                  return book
                }
                return item
              })
              write(books, function () {
                res.end(JSON.stringify(book))
              })
            })
          })
        }
        break
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => item.bookId !== id)
          write(books, function () {
            res.end(JSON.stringify({}))
          })
        })
        break
    }
    return
  }
}).listen(9000)
