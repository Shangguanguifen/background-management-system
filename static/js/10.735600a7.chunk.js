(this.webpackJsonpa=this.webpackJsonpa||[]).push([[10],{455:function(e,t,a){"use strict";var n=a(3),r=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ListConsumer=t.ListContext=void 0;var c=r(a(51)),o=r(a(7)),i=r(a(13)),l=r(a(23)),s=r(a(27)),u=n(a(0)),d=r(a(5)),m=r(a(472)),f=r(a(446)),p=a(190),v=a(11),g=r(a(473)),y=a(456),h=r(a(483)),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=u.createContext({});t.ListContext=x;var O=x.Consumer;function C(e){var t,a=e.pagination,n=void 0!==a&&a,r=e.prefixCls,h=e.bordered,O=void 0!==h&&h,C=e.split,j=void 0===C||C,N=e.className,E=e.children,S=e.itemLayout,w=e.loadMore,P=e.grid,k=e.dataSource,I=void 0===k?[]:k,L=e.size,M=e.header,z=e.footer,T=e.loading,V=void 0!==T&&T,_=e.rowKey,q=e.renderItem,D=e.locale,A=b(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),G=n&&"object"===(0,s.default)(n)?n:{},H=u.useState(G.defaultCurrent||1),J=(0,l.default)(H,2),K=J[0],R=J[1],U=u.useState(G.defaultPageSize||10),B=(0,l.default)(U,2),W=B[0],F=B[1],Q=u.useContext(v.ConfigContext),X=Q.getPrefixCls,Y=Q.renderEmpty,Z=Q.direction,$={},ee=function(e){return function(t,a){R(t),F(a),n&&n[e]&&n[e](t,a)}},te=ee("onChange"),ae=ee("onShowSizeChange"),ne=X("list",r),re=V;"boolean"===typeof re&&(re={spinning:re});var ce=re&&re.spinning,oe="";switch(L){case"large":oe="lg";break;case"small":oe="sm"}var ie=(0,d.default)(ne,(t={},(0,i.default)(t,"".concat(ne,"-vertical"),"vertical"===S),(0,i.default)(t,"".concat(ne,"-").concat(oe),oe),(0,i.default)(t,"".concat(ne,"-split"),j),(0,i.default)(t,"".concat(ne,"-bordered"),O),(0,i.default)(t,"".concat(ne,"-loading"),ce),(0,i.default)(t,"".concat(ne,"-grid"),!!P),(0,i.default)(t,"".concat(ne,"-something-after-last-item"),!!(w||n||z)),(0,i.default)(t,"".concat(ne,"-rtl"),"rtl"===Z),t),N),le=(0,o.default)((0,o.default)((0,o.default)({},{current:1,total:0}),{total:I.length,current:K,pageSize:W}),n||{}),se=Math.ceil(le.total/le.pageSize);le.current>se&&(le.current=se);var ue=n?u.createElement("div",{className:"".concat(ne,"-pagination")},u.createElement(g.default,(0,o.default)({},le,{onChange:te,onShowSizeChange:ae}))):null,de=(0,c.default)(I);n&&I.length>(le.current-1)*le.pageSize&&(de=(0,c.default)(I).splice((le.current-1)*le.pageSize,le.pageSize));var me=(0,f.default)(),fe=u.useMemo((function(){for(var e=0;e<p.responsiveArray.length;e+=1){var t=p.responsiveArray[e];if(me[t])return t}}),[me]),pe=u.useMemo((function(){if(P){var e=fe&&P[fe]?P[fe]:P.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null===P||void 0===P?void 0:P.column,fe]),ve=ce&&u.createElement("div",{style:{minHeight:53}});if(de.length>0){var ge=de.map((function(e,t){return function(e,t){return q?((a="function"===typeof _?_(e):"string"===typeof _?e[_]:e.key)||(a="list-item-".concat(t)),$[t]=a,q(e,t)):null;var a}(e,t)})),ye=u.Children.map(ge,(function(e,t){return u.createElement("div",{key:$[t],style:pe},e)}));ve=P?u.createElement(y.Row,{gutter:P.gutter},ye):u.createElement("ul",{className:"".concat(ne,"-items")},ge)}else E||ce||(ve=function(e,t){return u.createElement("div",{className:"".concat(e,"-empty-text")},D&&D.emptyText||t("List"))}(ne,Y));var he=le.position||"bottom";return u.createElement(x.Provider,{value:{grid:P,itemLayout:S}},u.createElement("div",(0,o.default)({className:ie},A),("top"===he||"both"===he)&&ue,M&&u.createElement("div",{className:"".concat(ne,"-header")},M),u.createElement(m.default,re,ve,E),z&&u.createElement("div",{className:"".concat(ne,"-footer")},z),w||("bottom"===he||"both"===he)&&ue))}t.ListConsumer=O,C.Item=h.default;var j=C;t.default=j},456:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Col",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var r=n(a(194)),c=n(a(135)),o={useBreakpoint:n(a(446)).default};t.default=o},481:function(e,t,a){"use strict";a(35),a(482),a(457),a(465),a(466),a(193)},482:function(e,t,a){},483:function(e,t,a){"use strict";var n=a(3),r=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Meta=void 0;var c=r(a(13)),o=r(a(7)),i=n(a(0)),l=r(a(5)),s=a(455),u=a(456),d=a(11),m=a(40),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},p=function(e){var t=e.prefixCls,a=e.className,n=e.avatar,r=e.title,c=e.description,s=f(e,["prefixCls","className","avatar","title","description"]),u=(0,i.useContext(d.ConfigContext).getPrefixCls)("list",t),m=(0,l.default)("".concat(u,"-item-meta"),a),p=i.createElement("div",{className:"".concat(u,"-item-meta-content")},r&&i.createElement("h4",{className:"".concat(u,"-item-meta-title")},r),c&&i.createElement("div",{className:"".concat(u,"-item-meta-description")},c));return i.createElement("div",(0,o.default)({},s,{className:m}),n&&i.createElement("div",{className:"".concat(u,"-item-meta-avatar")},n),(r||c)&&p)};t.Meta=p;var v=function(e){var t=e.prefixCls,a=e.children,n=e.actions,r=e.extra,p=e.className,v=e.colStyle,g=f(e,["prefixCls","children","actions","extra","className","colStyle"]),y=i.useContext(s.ListContext),h=y.grid,b=y.itemLayout,x=i.useContext(d.ConfigContext).getPrefixCls,O=x("list",t),C=n&&n.length>0&&i.createElement("ul",{className:"".concat(O,"-item-action"),key:"actions"},n.map((function(e,t){return i.createElement("li",{key:"".concat(O,"-item-action-").concat(t)},e,t!==n.length-1&&i.createElement("em",{className:"".concat(O,"-item-action-split")}))}))),j=h?"div":"li",N=i.createElement(j,(0,o.default)({},g,{className:(0,l.default)("".concat(O,"-item"),(0,c.default)({},"".concat(O,"-item-no-flex"),!("vertical"===b?r:!function(){var e;return i.Children.forEach(a,(function(t){"string"===typeof t&&(e=!0)})),e&&i.Children.count(a)>1}())),p)}),"vertical"===b&&r?[i.createElement("div",{className:"".concat(O,"-item-main"),key:"content"},a,C),i.createElement("div",{className:"".concat(O,"-item-extra"),key:"extra"},r)]:[a,C,(0,m.cloneElement)(r,{key:"extra"})]);return h?i.createElement(u.Col,{flex:1,style:v},N):N};v.Meta=p;var g=v;t.default=g},484:function(e,t,a){"use strict";var n=a(60),r=a(61),c=new(a(57).a),o=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getOrderList",value:function(e){var t="",a={};return a.pageNum=e.pageNum,"list"===e.listType?t="/manage/order/list.do":"search"===e.listType&&(t="/manage/order/search.do",a.orderNo=e.orderNo),c.request({type:"post",url:t,data:a})}},{key:"getOrderDetail",value:function(e){return c.request({type:"post",url:"/manage/order/detail.do",data:{orderNo:e}})}},{key:"sendGoods",value:function(e){return c.request({type:"post",url:"/manage/order/send_goods.do",data:{orderNo:e}})}}]),e}();t.a=o},637:function(e,t,a){},649:function(e,t,a){"use strict";a.r(t);a(447);var n=a(450),r=a.n(n),c=(a(481),a(455)),o=a.n(c),i=(a(79),a(58)),l=a.n(i),s=a(59),u=a(0),d=a(484),m=a(57),f=(a(637),a(4)),p=new m.a,v=new d.a,g=[{name:"\u8ba2\u5355\u53f7",target:"orderNo",content:""},{name:"\u521b\u5efa\u65f6\u95f4",target:"createTime",content:""},{name:"\u6536\u4ef6\u4eba",target:"desc",content:""},{name:"\u8ba2\u5355\u72b6\u6001",target:"statusDesc",content:""},{name:"\u652f\u4ed8\u65b9\u5f0f",target:"paymentTypeDesc",content:""},{name:"\u8ba2\u5355\u91d1\u989d",target:"payment",content:""}],y=[{title:"\u5546\u54c1\u56fe\u7247",dataIndex:"image",key:"image",width:"10%",render:function(e){return Object(f.jsx)("img",{className:"product-image",src:e,alt:"product.img"})}},{title:"\u5546\u54c1\u4fe1\u606f",dataIndex:"productName",key:"productName"},{title:"\u5355\u4ef7 / \uffe5",dataIndex:"currentUnitPrice",key:"currentUnitPrice"},{title:"\u6570\u91cf",dataIndex:"quantity",key:"quantity"},{title:"\u5408\u8ba1 / \uffe5",dataIndex:"totalPrice",key:"totalPrice"}];t.default=function(e){var t=Object(u.useState)([]),a=Object(s.a)(t,2),n=a[0],c=a[1],i=Object(u.useState)([]),d=Object(s.a)(i,2),m=d[0],h=d[1],b=function(){window.confirm("\u662f\u5426\u786e\u8ba4\u8be5\u8ba2\u5355\u5df2\u7ecf\u53d1\u8d27\uff1f")&&v.sendGoods(e.match.params.id).then((function(t){p.successTips("\u53d1\u8d27\u6210\u529f"),x(e.match.params.id)}),(function(e){p.errorTips(e)}))},x=function(e){v.getOrderDetail(e).then((function(e){g.forEach((function(t){if("desc"===t.target)return t.content="".concat(e.shippingVo.receiverName,", ").concat(e.shippingVo.receiverProvince||"",", ").concat(e.shippingVo.receiverCity||"",", ").concat(e.shippingVo.receiverAddress||"",", ").concat(e.shippingVo.receiverMobile||e.shippingVo.receiverPhone||"");t.content=e[t.target],t.status=e.status})),c(g);var t=e.orderItemVoList;t.forEach((function(t){t.image=e.imageHost+t.productImage,t.key=t.productId})),h(t)})).catch((function(e){p.errorTips(e)}))};return Object(u.useEffect)((function(){x(e.match.params.id)}),[e.match.params.id]),Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{className:"list",itemLayout:"horizontal",dataSource:n,renderItem:function(e){return Object(f.jsxs)(o.a.Item,{children:[Object(f.jsxs)("span",{className:"list-title",children:[e.name," :"]}),e.content,"\u8ba2\u5355\u72b6\u6001"===e.name&&20===e.status?Object(f.jsx)(l.a,{type:"primary",style:{marginLeft:16},onClick:b,children:"\u7acb\u5373\u53d1\u8d27"}):null]})}}),Object(f.jsx)(r.a,{dataSource:m,columns:y}),";"]})}}}]);
//# sourceMappingURL=10.735600a7.chunk.js.map