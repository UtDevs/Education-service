(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{legacySystemHTML:'\n      <p color="#faddad" size="-2">\n        <MARQUEE>Please chose grade to continue.</MARQUEE>\n      </p>\n    ',materials:["Arabic","English","France","Math","Science","biology","physics","History","Religion","geography","Art","Sport"],flag:!1}},methods:{selectedList:function(){return this.items},SwitchFlag:function(){this.flag=!this.flag},ReturnBack:function(){this.flag=!this.flag},RouteToVideoContent:function(){this.$router.push("/videoContent")}}},c=e(24),component=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),t._l(3,function(i){return e("br")}),t._v(" "),t.flag?e("button",{staticClass:"btn",staticStyle:{"background-color":"#2196F3"},on:{click:function(n){return t.ReturnBack()}}},[e("v-icon",{attrs:{dark:""}},[t._v("arrow_back")])],1):t._e(),t._v(" "),t._l(3,function(i){return t.flag?e("br"):t._e()}),t._v(" "),e("div",{staticClass:"col-xs-12"},[t.flag?t._e():e("div",{staticClass:"card-deck"},t._l(10,function(i){return e("div",{staticClass:"col-xs-12 col-lg-4",staticStyle:{"margin-bottom":"20px"}},[e("button",{staticClass:"btn",staticStyle:{width:"100%",height:"100px","background-color":"#2196F3",margin:"2px","font-weight":"bold"},on:{click:function(n){return t.SwitchFlag()}}},[t._v(t._s(i)+t._s(1==i?"st":i>=2&&i<4?"ed":"th")+" Grade\n           ")])])}),0),t._v(" "),t.flag?e("div",{staticClass:"card-deck"},t._l(t.materials.length-1,function(i){return e("div",{staticClass:"col-xs-12 col-lg-4",staticStyle:{"margin-bottom":"20px"}},[e("button",{staticClass:"btn",staticStyle:{width:"100%",height:"100px",margin:"2px","background-color":"#2979FF","font-weight":"bold"},on:{click:function(n){return t.RouteToVideoContent()}}},[t._v(t._s(t.materials[i])+"\n            ")])])}),0):t._e()])],2)},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{staticStyle:{"font-weight":"bold"}},[this._v("Welcome To Universe "),n("span",{staticStyle:{color:"#191153"}},[this._v("Academy")])])}],!1,null,null,null);n.default=component.exports}}]);