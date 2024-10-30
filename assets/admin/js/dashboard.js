!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=jQuery,n=e.n(t),r=wp.element,l=wp.hooks,a=(0,r.createContext)(),o=function(e){var t=e.reducer,n=e.initialState,l=e.children;return wp.element.createElement(a.Provider,{value:(0,r.useReducer)(t,n)},l)},c=function(){return(0,r.useContext)(a)};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,c=[],i=!0,m=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){m=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(m)throw l}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){return wp.element.createElement("svg",{viewBox:"-21 0 512 512",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:"m186.667969 416c-49.984375 0-90.667969-40.683594-90.667969-90.667969v-218.664062h-37.332031c-32.363281 0-58.667969 26.300781-58.667969 58.664062v288c0 32.363281 26.304688 58.667969 58.667969 58.667969h266.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-37.332031zm0 0"}),wp.element.createElement("path",{d:"m469.332031 58.667969c0-32.40625-26.261719-58.667969-58.664062-58.667969h-224c-32.40625 0-58.667969 26.261719-58.667969 58.667969v266.664062c0 32.40625 26.261719 58.667969 58.667969 58.667969h224c32.402343 0 58.664062-26.261719 58.664062-58.667969zm0 0"}))},p=function(){var e=i(c(),2),t=e[0],a=e[1],o=t.buttonStyle,m=t.meta,p=o.btn_color,s=o.btn_bg_color,d=o.btn_l_padding,b=o.btn_t_padding,f=o.btn_r_padding,y=o.btn_b_padding,v=o.btn_l_margin,w=o.btn_t_margin,g=o.btn_r_margin,E=o.btn_b_margin,h=o.btn_tl_radius,O=o.btn_tr_radius,S=o.btn_br_radius,N=o.btn_bl_radius,j=o.btn_font_size,_=o.btn_line_height,C=o.btn_h_color,P=o.btn_h_bg_color,x=o.svg_icon_color,A=o.svg_icon_width,D=o.svg_icon_t_padding,k=o.svg_icon_r_padding,I=o.svg_icon_b_padding,U=o.svg_icon_l_padding,T=o.svg_icon_h_color,B=o.cover_color,z=o.cover_font_size,V=(m["button-copy-text"],m["button-position"]||""),F=m["button-text"]||"",R=m["button-title"]||"",H=(m["copy-format"],m.selector,m.style||""),W=function(){var e=n()("#ctc-style");e.length||((e=document.createElement("style")).id="ctc-style",e.type="text/css",e.media="screen",e.innerHTML="",document.head.appendChild(e),e=n()("#ctc-style"));var t="\n            #preview .ctc-style-cover .ctc-button {\n                color: ".concat(B,";\n                font-size: ").concat(z,"px;\n            }\n            #preview .ctc-style-svg-icon .ctc-button {\n                padding-top: ").concat(D,"px;\n                padding-right: ").concat(k,"px;\n                padding-bottom: ").concat(I,"px;\n                padding-left: ").concat(U,"px;\n                color: ").concat(x,";\n            }\n            #preview .ctc-style-svg-icon svg {\n                fill: ").concat(x,";\n                width: ").concat(A,"px;\n            }\n            #preview .ctc-style-svg-icon .ctc-button:hover {\n                color: ").concat(T,";\n            }\n            #preview .ctc-style-svg-icon .ctc-button:hover svg {\n                fill: ").concat(T,";\n            }\n\n            #preview .ctc-style-button .ctc-button {\n                color: ").concat(p,";\n                background-color: ").concat(s,";\n                font-size: ").concat(j,"px;\n                line-height: ").concat(_,"px;\n                padding-left: ").concat(d,"px;\n                padding-top: ").concat(b,"px;\n                padding-right: ").concat(f,"px;\n                padding-bottom: ").concat(y,"px;\n                margin-left: ").concat(v,"px;\n                margin-top: ").concat(w,"px;\n                margin-right: ").concat(g,"px;\n                margin-bottom: ").concat(E,"px;\n                border-top-left-radius: ").concat(h,"px;\n                border-top-right-radius: ").concat(O,"px;\n                border-bottom-right-radius: ").concat(S,"px;\n                border-bottom-left-radius: ").concat(N,"px;\n            }\n            #preview .ctc-style-button .ctc-button:hover {\n                color: ").concat(C,";\n                background-color: ").concat(P,";\n            }\n            #preview .ctc-style-button .ctc-button svg {\n                fill: ").concat(p,";\n                width: ").concat(j,"px;\n            }\n            #preview .ctc-style-button .ctc-button:hover svg {\n                fill: ").concat(C,";\n            }\n        ");e.html(t)};return(0,r.useEffect)((function(){!1!==M&&W()}),[o]),wp.element.createElement("div",{id:"preview",className:"ctc-preview"},wp.element.createElement("h2",null,"Preview"),wp.element.createElement("div",{className:"ctc-preview-wrap ctc-position-".concat(V," ctc-style-").concat(H)},""===H||"button"===H?wp.element.createElement(React.Fragment,null,"inside"===V?wp.element.createElement("div",{className:"ctc-preview-target"},wp.element.createElement("button",{className:"ctc-button",title:R},F),"Hello World"):null,""===V||"outside"===V?wp.element.createElement(React.Fragment,null,wp.element.createElement("button",{className:"ctc-button",title:R},F),wp.element.createElement("div",{className:"ctc-preview-target"},"Hello World")):null):null,"svg-icon"===H?wp.element.createElement(React.Fragment,null,"inside"===V?wp.element.createElement("div",{className:"ctc-preview-target"},wp.element.createElement("button",{className:"ctc-button",title:R},wp.element.createElement(u,null)),"Hello World"):null,"outside"===V?wp.element.createElement(React.Fragment,null,wp.element.createElement("button",{className:"ctc-button",title:R},wp.element.createElement(u,null)),wp.element.createElement("div",{className:"ctc-preview-target"},"Hello World")):null):null,"cover"===H?wp.element.createElement("div",{className:"ctc-preview-target"},wp.element.createElement("span",{className:"ctc-button",title:R},F),"Hello World"):null),wp.element.createElement("form",{id:"ctc-style-form",className:"".concat(!1===M?"is-free":""," ").concat(H?"style-"+H:""),onChange:function(e){e.preventDefault();var t=e.target.name,n=e.target.value;t=(t=t.replaceAll("ctc-","")).replaceAll("-","_");var r=(0,l.applyFilters)("ctc.settings.submit",!1,t,n,o);!1!==r&&(a({type:"set",buttonStyle:r,isUpdated:!0}),W())}},!1===M?wp.element.createElement("div",{className:"upgrade"},wp.element.createElement("a",{href:CopyDashboardVars.upgradeUrl},"Upgrade to Premium to Access")):null,wp.element.createElement("table",{className:"style-svg-icon widefat striped",style:{display:"svg-icon"===H?"table":"none"}},wp.element.createElement("tbody",null,wp.element.createElement("tr",null,wp.element.createElement("th",{colspan:"2"},wp.element.createElement("b",null,"Normal Style"))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Icon Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-svg-icon-color",name:"ctc-svg-icon-color",value:x}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Icon Size"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-width",name:"ctc-svg-icon-width",value:A}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Icon Padding"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-t-padding",name:"ctc-svg-icon-t-padding",value:D}),wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-r-padding",name:"ctc-svg-icon-r-padding",value:k}),wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-b-padding",name:"ctc-svg-icon-b-padding",value:I}),wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-l-padding",name:"ctc-svg-icon-l-padding",value:U}))),wp.element.createElement("tr",null,wp.element.createElement("th",{colspan:"2"},wp.element.createElement("b",null,"Hover Style"))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Icon Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-svg-icon-h-color",name:"ctc-svg-icon-h-color",value:T}))))),wp.element.createElement("table",{className:"style-cover widefat striped",style:{display:"cover"===H?"table":"none"}},wp.element.createElement("tbody",null,wp.element.createElement("tr",null,wp.element.createElement("td",null,"Text Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-cover-color",name:"ctc-cover-color",value:B}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Font Size"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-cover-font-size",name:"ctc-cover-font-size",value:z}))))),wp.element.createElement("table",{className:"style-button widefat striped",style:{display:"button"===H?"table":"none"}},wp.element.createElement("tbody",null,wp.element.createElement("tr",null,wp.element.createElement("th",{colspan:"2"},wp.element.createElement("b",null,"Normal Style"))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-btn-color",name:"ctc-btn-color",value:p}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Background Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-btn-bg-color",name:"ctc-btn-bg-color",value:s}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Font Size"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-font-size",name:"ctc-btn-font-size",value:j}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Line Height"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-line-height",name:"ctc-btn-line-height",value:_}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Padding"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-t-padding",name:"ctc-btn-t-padding",value:b}),wp.element.createElement("input",{type:"number",className:"ctc-btn-r-padding",name:"ctc-btn-r-padding",value:f}),wp.element.createElement("input",{type:"number",className:"ctc-btn-b-padding",name:"ctc-btn-b-padding",value:y}),wp.element.createElement("input",{type:"number",className:"ctc-btn-l-padding",name:"ctc-btn-l-padding",value:d}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Margin"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-t-margin",name:"ctc-btn-t-margin",value:w}),wp.element.createElement("input",{type:"number",className:"ctc-btn-r-margin",name:"ctc-btn-r-margin",value:g}),wp.element.createElement("input",{type:"number",className:"ctc-btn-b-margin",name:"ctc-btn-b-margin",value:E}),wp.element.createElement("input",{type:"number",className:"ctc-btn-l-margin",name:"ctc-btn-l-margin",value:v}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Border Radius"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-tl-radius",name:"ctc-btn-tl-radius",value:h}),wp.element.createElement("input",{type:"number",className:"ctc-btn-tr-radius",name:"ctc-btn-tr-radius",value:O}),wp.element.createElement("input",{type:"number",className:"ctc-btn-br-radius",name:"ctc-btn-br-radius",value:S}),wp.element.createElement("input",{type:"number",className:"ctc-btn-bl-radius",name:"ctc-btn-bl-radius",value:N}))),wp.element.createElement("tr",null,wp.element.createElement("th",{colspan:"2"},wp.element.createElement("b",null,"Hover Style"))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-btn-h-color",name:"ctc-btn-h-color",value:C}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Background Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-btn-h-bg-color",name:"ctc-btn-h-bg-color",value:P})))))))};function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,c=[],i=!0,m=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){m=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(m)throw l}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var w=[{name:"Button",value:"button"},{name:"Icon",value:"svg-icon"},{name:"Cover",value:"cover"}],g=[{name:"Inside",value:"inside"},{name:"Outside",value:"outside"}],E=[{name:"Default",value:"default"},{name:"Google Docs",value:"google-docs"},{name:"Email",value:"email"}],h=function(){var e=y(c(),2),t=e[0].meta,n=e[1],r=t["button-copy-text"]||"",l=t["button-position"]||"",a=t["button-text"]||"",o=t["button-title"]||"",i=t["copy-format"]||"",m=t.selector||"",u=t.style||"";return wp.element.createElement("div",{className:"ctc-settings"},wp.element.createElement("h2",null,"Settings"),wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Selector"),wp.element.createElement("input",{type:"text",value:m,placeholder:"E.g. pre, .my-class, #my-id",onChange:function(e){n({type:"set",meta:b(b({},t),{},{selector:e.target.value}),isUpdated:!0})}})),wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Format"),wp.element.createElement("select",{onChange:function(e){n({type:"set",meta:b(b({},t),{},{"copy-format":e.target.value}),isUpdated:!0})}},E.map((function(e,t){return wp.element.createElement("option",{key:t,value:e.value,selected:i===e.value},e.name)})))),wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Style"),wp.element.createElement("select",{onChange:function(e){n({type:"set",meta:b(b({},t),{},{style:e.target.value}),isUpdated:!0})}},w.map((function(e,t){return wp.element.createElement("option",{key:t,value:e.value,selected:u===e.value},e.name)})))),"cover"===u?null:wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Position"),wp.element.createElement("select",{onChange:function(e){n({type:"set",meta:b(b({},t),{},{"button-position":e.target.value}),isUpdated:!0})}},g.map((function(e,t){return wp.element.createElement("option",{key:t,value:e.value,selected:l===e.value},e.name)})))),"button"===u?wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Button Text"),wp.element.createElement("input",{type:"text",value:a,placeholder:"Copy to Clipboard",onChange:function(e){n({type:"set",meta:b(b({},t),{},{"button-text":e.target.value}),isUpdated:!0})}})):null,wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"After Copy Button Text"),wp.element.createElement("input",{type:"text",value:r,placeholder:"Copied",onChange:function(e){n({type:"set",meta:b(b({},t),{},{"button-copy-text":e.target.value}),isUpdated:!0})}})),wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Button Title"),wp.element.createElement("input",{type:"text",value:o,placeholder:"Copy to Clipboard",onChange:function(e){n({type:"set",meta:b(b({},t),{},{"button-title":e.target.value}),isUpdated:!0})}})))};function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function S(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=O(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==O(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,c=[],i=!0,m=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){m=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(m)throw l}}return c}}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){if(e){if("string"==typeof e)return x(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var A=function(e){var t=e.data,n=t.id,l=t.operator,a=t.type,o=t.value,i=C(c(),2),m=i[0].meta,u=i[1],p=m.conditions,s=C((0,r.useState)(a),2),d=s[0],b=s[1],f=CopyDashboardVars.conditions.filter((function(e){return e.key===d}));return wp.element.createElement("div",{className:"condition"},wp.element.createElement("select",{value:d,onChange:function(e){b(e.target.value),u({type:"set",isUpdated:!0,meta:j(j({},m),{},{conditions:p.map((function(t){return t.id===n?j(j({},t),{},{type:e.target.value}):t}))})})}},wp.element.createElement("option",{value:""},"Select a field"),CopyDashboardVars.conditions.map((function(e,t){return wp.element.createElement("option",{key:t,value:e.key},e.name)}))),wp.element.createElement("select",{value:l,onChange:function(e){u({type:"set",isUpdated:!0,meta:j(j({},m),{},{conditions:p.map((function(t){return t.id===n?j(j({},t),{},{operator:e.target.value}):t}))})})}},wp.element.createElement("option",{value:"="},"is equal to"),wp.element.createElement("option",{value:"!="},"is not equal to")),wp.element.createElement("select",{className:"condition-value",value:o,onChange:function(e){u({type:"set",isUpdated:!0,meta:j(j({},m),{},{conditions:p.map((function(t){return t.id===n?j(j({},t),{},{value:e.target.value}):t}))})})}},f.length>0?wp.element.createElement(React.Fragment,null,f[0].types.map((function(e,t){return wp.element.createElement("option",{key:t,value:e.value},e.name)}))):wp.element.createElement("option",{value:""},"Select a value")),wp.element.createElement("button",{className:"button button-secondary",onClick:function(){u({type:"set",isUpdated:!0,meta:j(j({},m),{},{conditions:p.filter((function(e){return e.id!==n}))})})}},"Remove"))},D=function(){var e=C(c(),2),t=e[0].meta,n=e[1],r=t.conditions;return wp.element.createElement("div",{className:"ctc-conditions"},wp.element.createElement("h2",null,"Display Conditions"),wp.element.createElement("h3",null,"Show this field group if"),wp.element.createElement("div",{className:"field-group"},wp.element.createElement("div",{className:"field"},r.map((function(e,t){return wp.element.createElement(A,{key:t,data:e})})),wp.element.createElement("button",{className:"button button-primary",onClick:function(){n({type:"set",isUpdated:!0,meta:j(j({},t),{},{conditions:[].concat(S(r),[{id:Date.now().toString(),operator:"=",type:"",value:""}])})})}},"Add Condition"))))};function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=k(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==k(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,c=[],i=!0,m=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){m=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(m)throw l}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var V=function(){var e=B(c(),2),t=e[0],l=t.isUpdated,a=t.meta,o=t.buttonStyle,i=t.post,m=e[1],u=i.post_title,s=B((0,r.useState)("Cancel"),2),d=s[0],b=s[1],f=B((0,r.useState)(CopyDashboardVars.onEdit?"Save Changes":"Create"),2),y=f[0],v=f[1],w=a["button-copy-text"]||"",g=a["button-position"]||"",E=a["button-text"]||"",O=a["button-title"]||"",S=a["copy-format"]||"",N=a.selector||"",j=a.style||"",_=a.conditions||[];return wp.element.createElement("div",null,wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"col"},wp.element.createElement("div",{className:"field post-title"},wp.element.createElement("span",{className:"label"},"Post Title"),wp.element.createElement("input",{type:"text",value:u,className:"post-title",placeholder:"Enter post title",onChange:function(e){m({type:"set",post:U(U({},i),{},{post_title:e.target.value}),isUpdated:!0})}})))),wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"col"},wp.element.createElement(h,null),wp.element.createElement(D,null)),wp.element.createElement("div",{className:"col"},wp.element.createElement(p,null))),wp.element.createElement("div",null,wp.element.createElement("button",{className:"button button-primary save-btn",disabled:!l,onClick:function(){CopyDashboardVars.onEdit?v("Saving..."):v("Creating..."),n().ajax({url:CopyDashboardVars.ajax_url,type:"POST",data:{action:"ctc_save_changes",on_edit:CopyDashboardVars.onEdit,style_type:j,position:g,format:S,btn_text:E,btn_after_copy_text:w,btn_title:O,selector:N,buttonStyle:o,post:i,conditions:_,nonce:CopyDashboardVars.nonce},success:function(e){var t;v("Redirecting..."),window.location.href=(t=e.data.edit_post_url)?t=(t=(t=t.replaceAll("&amp;","&")).replaceAll("&#215;","x")).replaceAll("&#8211;","-"):t}})}},y),wp.element.createElement("button",{className:"button",onClick:function(){b("Redirecting..."),window.location.href=CopyDashboardVars.editUrl}},d)))},F=function(){return wp.element.createElement("div",null,wp.element.createElement("h2",null,"Current Upgrade Offer"),wp.element.createElement("div",{className:"offer"},wp.element.createElement("br",null),"Get up to ",wp.element.createElement("span",null,"20% to 58% off")," by upgrading to the Premium version.",wp.element.createElement("br",null),"Don't miss out! 🛍️✨",wp.element.createElement("br",null),wp.element.createElement("a",{href:"https://clipboard.agency/#pricing",target:"_blank"},"Get Offer Now")))};function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,c=[],i=!0,m=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){m=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(m)throw l}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var M=(0,l.applyFilters)("ctc.settings.customize",!1),W=function(){var e=R(c(),2),t=e[0].tab,n=e[1],r=[{slug:"dashboard",name:"Editor",component:V,canDisplay:!0},{slug:"upgrade",name:"Upgrade to Pro",component:F,canDisplay:!1===M}];return wp.element.createElement("div",{className:"page"},wp.element.createElement("div",{className:"header"},wp.element.createElement("div",{className:"logo"}),wp.element.createElement("div",{className:"header-right"},wp.element.createElement("ul",{className:"menu menu-admin"},r.map((function(e,r){return e.canDisplay?wp.element.createElement("li",{key:r,className:"tab-".concat(e.slug," ").concat(t.slug===e.slug?"active":""),onClick:function(){n({type:"set",tab:e})}},wp.element.createElement("a",{href:"#"},e.name)):null}))),wp.element.createElement("div",{className:"flex"},wp.element.createElement("ul",{className:"menu"},wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://clipboard.agency/doc/installation/",target:"_blank"},"Knowledge Base")))))),wp.element.createElement("div",{className:"content"},wp.element.createElement(t.component,null)),wp.element.createElement("div",{className:"footer"}))};function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}var G=["type"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=$(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==$(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q={styleType:"button",position:"outside",format:"",btnText:"Copy to Clipboard",btnAfterCopyText:"Copy",btnTitle:"Copy to Clipboard",buttonStyle:CopyDashboardVars.buttonStyle,isUpdated:!1,post:CopyDashboardVars.onEdit?CopyDashboardVars.post:{post_title:""},meta:CopyDashboardVars.onEdit?CopyDashboardVars.meta:{"button-copy-text":"Copied","button-position":"outside","button-text":"Copy to Clipboard","button-title":"Copy to Clipboard","copy-format":"",selector:"pre",style:"button",conditions:[]},tab:{slug:"dashboard",name:"Editor",component:V}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(t,G);return"set"===n?L(L({},e),r):e};function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Z(r.key),r)}}function Z(e){var t=function(e,t){if("object"!=X(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=X(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==X(t)?t:t+""}var ee=function(){return wp.element.createElement(o,{reducer:J,initialState:Q},wp.element.createElement(W,null))},te=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(t=[{key:"setup",value:function(){(0,r.render)((0,r.createElement)(ee),document.getElementById("ctc-dashboard-root"))}}])&&Y(e.prototype,t),n&&Y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}();n()(document).ready((function(){window.ctcDashboard=new te,null!==document.getElementById("ctc-dashboard-root")&&window.ctcDashboard.setup()}))}();