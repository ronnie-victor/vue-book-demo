webpackJsonp([2],{"0sZW":function(e,t){},"5zde":function(e,t,o){o("zQR9"),o("qyJz"),e.exports=o("FeBl").Array.from},Gu7T:function(e,t,o){"use strict";t.__esModule=!0;var r,n=o("c/Tr"),a=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return(0,a.default)(e)}},"c/Tr":function(e,t,o){e.exports={default:o("5zde"),__esModule:!0}},fBQ2:function(e,t,o){"use strict";var r=o("evD5"),n=o("X8DO");e.exports=function(e,t,o){t in e?r.f(e,t,n(0,o)):e[t]=o}},qyJz:function(e,t,o){"use strict";var r=o("+ZMJ"),n=o("kM2E"),a=o("sB3e"),s=o("msXi"),i=o("Mhyx"),c=o("QRG4"),u=o("fBQ2"),f=o("3fs2");n(n.S+n.F*!o("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,o,n,l,v=a(e),d="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,k=void 0!==h,_=0,m=f(v);if(k&&(h=r(h,b>2?arguments[2]:void 0,2)),void 0==m||d==Array&&i(m))for(o=new d(t=c(v.length));t>_;_++)u(o,_,k?h(v[_],_):v[_]);else for(l=m.call(v),o=new d;!(n=l.next()).done;_++)u(o,_,k?s(l,h,[n.value,_],!0):n.value);return o.length=_,o}})},tcnj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("Xxa5"),n=o.n(r),a=o("Gu7T"),s=o.n(a),i=o("exGp"),c=o.n(i),u=o("VbfI"),f=o("gyMJ"),l={created:function(){this.getData()},data:function(){return{books:[],offset:0,hasMore:!0}},name:"List",components:{MyHeader:u.a},methods:{loadMore:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){var t=e.$refs.scroll;t.scrollTop+t.clientHeight+20>t.scrollHeight&&e.getData()},13)},more:function(){this.getData()},getData:function(){var e=this;return c()(n.a.mark(function t(){var o,r,a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.hasMore){t.next=9;break}return t.next=3,Object(f.d)(e.offset);case 3:o=t.sent,r=o.hasMore,a=o.books,e.books=[].concat(s()(e.books),s()(a)),e.hasMore=r,e.offset=e.books.length;case 9:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;return c()(n.a.mark(function o(){return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(f.e)(e);case 2:t.books=t.books.filter(function(t){return t.bookId!==e});case 3:case"end":return o.stop()}},o,t)}))()}}},v={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("MyHeader",[e._v("列表页")]),e._v(" "),o("div",{ref:"scroll",staticClass:"content",on:{scroll:e.loadMore}},[o("ul",e._l(e.books,function(t){return o("router-link",{key:t.bookId,attrs:{to:{name:"detail",params:{bid:t.bookId}},tag:"li"}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.bookCover,expression:"book.bookCover"}],attrs:{alt:""}}),e._v(" "),o("div",[o("h4",[e._v(e._s(t.bookName))]),e._v(" "),o("p",[e._v(e._s(t.bookInfo))]),e._v(" "),o("b",[e._v(e._s(t.bookPrice))]),e._v(" "),o("button",{attrs:{type:"button"},on:{click:function(o){o.stopPropagation(),e.remove(t.bookId)}}},[e._v("删除")])])])})),e._v(" "),o("div",{staticClass:"more",on:{click:e.more}},[e._v("-加载更多-")])])],1)},staticRenderFns:[]};var d=o("VU/8")(l,v,!1,function(e){o("0sZW")},"data-v-4b3d9b12",null);t.default=d.exports}});
//# sourceMappingURL=2.29afc9f030eebc825521.js.map