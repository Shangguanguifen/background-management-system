(this.webpackJsonpa=this.webpackJsonpa||[]).push([[4],{453:function(e,t,n){"use strict";var a=n(3),r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(13)),u=r(n(7)),o=a(n(0)),c=r(n(5)),i=r(n(462)),s=n(454),d=n(11),f=r(n(28)),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e,t){var n,a=e.prefixCls,r=e.className,v=e.children,b=e.indeterminate,h=void 0!==b&&b,y=e.style,O=e.onMouseEnter,m=e.onMouseLeave,g=e.skipGroup,x=void 0!==g&&g,C=p(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),k=o.useContext(d.ConfigContext),j=k.getPrefixCls,E=k.direction,P=o.useContext(s.GroupContext),w=o.useRef(C.value);o.useEffect((function(){null===P||void 0===P||P.registerValue(C.value),(0,f.default)("checked"in C||!!P||!("value"in C),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),o.useEffect((function(){if(!x)return C.value!==w.current&&(null===P||void 0===P||P.cancelValue(w.current),null===P||void 0===P||P.registerValue(C.value)),function(){return null===P||void 0===P?void 0:P.cancelValue(C.value)}}),[C.value]);var N=j("checkbox",a),K=(0,u.default)({},C);P&&!x&&(K.onChange=function(){C.onChange&&C.onChange.apply(C,arguments),P.toggleOption&&P.toggleOption({label:v,value:C.value})},K.name=P.name,K.checked=-1!==P.value.indexOf(C.value),K.disabled=C.disabled||P.disabled);var S=(0,c.default)((n={},(0,l.default)(n,"".concat(N,"-wrapper"),!0),(0,l.default)(n,"".concat(N,"-rtl"),"rtl"===E),(0,l.default)(n,"".concat(N,"-wrapper-checked"),K.checked),(0,l.default)(n,"".concat(N,"-wrapper-disabled"),K.disabled),n),r),I=(0,c.default)((0,l.default)({},"".concat(N,"-indeterminate"),h));return o.createElement("label",{className:S,style:y,onMouseEnter:O,onMouseLeave:m},o.createElement(i.default,(0,u.default)({},K,{prefixCls:N,className:I,ref:t})),void 0!==v&&o.createElement("span",null,v))},b=o.forwardRef(v);b.displayName="Checkbox";var h=b;t.default=h},454:function(e,t,n){"use strict";var a=n(3),r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GroupContext=void 0;var l=r(n(7)),u=r(n(13)),o=r(n(51)),c=r(n(23)),i=a(n(0)),s=r(n(5)),d=r(n(42)),f=r(n(453)),p=n(11),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=i.createContext(null);t.GroupContext=b;var h=function(e,t){var n=e.defaultValue,a=e.children,r=e.options,h=void 0===r?[]:r,y=e.prefixCls,O=e.className,m=e.style,g=e.onChange,x=v(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),C=i.useContext(p.ConfigContext),k=C.getPrefixCls,j=C.direction,E=i.useState(x.value||n||[]),P=(0,c.default)(E,2),w=P[0],N=P[1],K=i.useState([]),S=(0,c.default)(K,2),I=S[0],M=S[1];i.useEffect((function(){"value"in x&&N(x.value||[])}),[x.value]);var V=function(){return h.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},_=k("checkbox",y),F="".concat(_,"-group"),D=(0,d.default)(x,["value","disabled"]);h&&h.length>0&&(a=V().map((function(e){return i.createElement(f.default,{prefixCls:_,key:e.value.toString(),disabled:"disabled"in e?e.disabled:x.disabled,value:e.value,checked:-1!==w.indexOf(e.value),onChange:e.onChange,className:"".concat(F,"-item"),style:e.style},e.label)})));var G={toggleOption:function(e){var t=w.indexOf(e.value),n=(0,o.default)(w);-1===t?n.push(e.value):n.splice(t,1),"value"in x||N(n);var a=V();null===g||void 0===g||g(n.filter((function(e){return-1!==I.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:w,disabled:x.disabled,name:x.name,registerValue:function(e){M((function(t){return[].concat((0,o.default)(t),[e])}))},cancelValue:function(e){M((function(t){return t.filter((function(t){return t!==e}))}))}},B=(0,s.default)(F,(0,u.default)({},"".concat(F,"-rtl"),"rtl"===j),O);return i.createElement("div",(0,l.default)({className:B,style:m},D,{ref:t}),i.createElement(b.Provider,{value:G},a))},y=i.forwardRef(h),O=i.memo(y);t.default=O},461:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(453)),l=a(n(454)),u=r.default;u.Group=l.default,u.__ANT_CHECKBOX=!0;var o=u;t.default=o},462:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(6),l=n(21),u=n(1),o=n(12),c=n(14),i=n(16),s=n(17),d=n(0),f=n.n(d),p=n(5),v=n.n(p),b=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:Object(u.a)(Object(u.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return Object(c.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,u=t.className,o=t.style,c=t.name,i=t.id,s=t.type,d=t.disabled,p=t.readOnly,b=t.tabIndex,h=t.onClick,y=t.onFocus,O=t.onBlur,m=t.onKeyDown,g=t.onKeyPress,x=t.onKeyUp,C=t.autoFocus,k=t.value,j=t.required,E=Object(l.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),w=this.state.checked,N=v()(n,u,(e={},Object(r.a)(e,"".concat(n,"-checked"),w),Object(r.a)(e,"".concat(n,"-disabled"),d),e));return f.a.createElement("span",{className:N,style:o},f.a.createElement("input",Object(a.a)({name:c,id:i,type:s,required:j,readOnly:p,disabled:d,tabIndex:b,className:"".concat(n,"-input"),checked:!!w,onClick:h,onFocus:y,onBlur:O,onKeyUp:x,onKeyDown:m,onKeyPress:g,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},P)),f.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(u.a)(Object(u.a)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);b.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.default=b},463:function(e,t,n){"use strict";n(35),n(464)},464:function(e,t,n){},657:function(e,t,n){"use strict";n.r(t);n(463);var a=n(461),r=n.n(a),l=(n(0),n(93)),u=n(178),o=n(4);t.default=function(){var e=Object(l.c)((function(e){return e.roles})),t=Object(l.b)();return Object(o.jsxs)("div",{style:{fontSize:14},children:[Object(o.jsxs)("div",{style:{marginBottom:16,letterSpacing:1},children:["\u4f60\u7684\u6743\u9650: ",JSON.stringify(e)]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{style:{display:"inline-block",marginRight:16},children:"\u5207\u6362\u6743\u9650\u8def\u7531:"}),Object(o.jsx)(r.a.Group,{defaultValue:e,onChange:function(e){t(function(e){return{type:u.a,value:e}}(e))},children:["user","admin"].map((function(t){var n=!(!(e.indexOf(t)>-1)||1!==e.length);return Object(o.jsx)(r.a,{value:t,disabled:n,children:t},t)}))})]})]})}}}]);
//# sourceMappingURL=4.21b5cb44.chunk.js.map