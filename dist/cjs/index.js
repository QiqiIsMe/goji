"use strict";var e=require("react/jsx-runtime"),l=require("react"),t=require("framer-motion"),o=require("react-dom");function i(e,l){void 0===l&&(l={});var t=l.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var s={upload:"upload-module_upload__sdJ3u",fileList:"upload-module_fileList__r72T1",fileItem:"upload-module_fileItem__-GDPm",deleteItem:"upload-module_deleteItem__S1XS3"};i(".upload-module_upload__sdJ3u{cursor:pointer;display:inline-block;position:relative}.upload-module_upload__sdJ3u input{opacity:0;position:absolute;width:200px}.upload-module_upload__sdJ3u .upload-module_fileList__r72T1{margin:0;padding-left:0}.upload-module_upload__sdJ3u .upload-module_fileList__r72T1 li{list-style:none}.upload-module_upload__sdJ3u .upload-module_fileList__r72T1 .upload-module_fileItem__-GDPm{position:relative}.upload-module_upload__sdJ3u .upload-module_fileList__r72T1 .upload-module_fileItem__-GDPm .upload-module_deleteItem__S1XS3{position:absolute}");var n={modal:"modal-module_modal__6lMO2",mask:"modal-module_mask__4ikYm",modalContent:"modal-module_modalContent__h8nfh"};i(".modal-module_modal__6lMO2{bottom:0;left:0;position:fixed;right:0;top:0;width:100%}.modal-module_modal__6lMO2 .modal-module_mask__4ikYm{background-color:rgba(92,93,93,.385);bottom:0;left:0;position:fixed;right:0;top:0;z-index:10000}.modal-module_modal__6lMO2 .modal-module_modalContent__h8nfh{background-color:#fff;left:0;margin:0 auto;min-height:200px;position:absolute;right:0;top:100px;z-index:10001}");var a={tab:"tab-module_tab__OCzxZ",title:"tab-module_title__7nE0l",tabContent:"tab-module_tabContent__zUPX9"};i(".tab-module_tab__OCzxZ .tab-module_title__7nE0l li{cursor:pointer;list-style:none;padding:10px}.tab-module_tab__OCzxZ .tab-module_tabContent__zUPX9{color:inherit}");var d={flex:"flex-module_flex__cvL3B"};i(".flex-module_flex__cvL3B{display:flex}"),exports.Flex=function({children:l,style:t,className:o}){return e.jsx("div",Object.assign({style:t,className:`${d.flex} ${o}`},{children:l}))},exports.FlexItem=function({children:l,className:t,style:o}){return e.jsx("div",Object.assign({className:t,style:o},{children:l}))},exports.Modal=function(l){const{width:o=800,children:i,dontDestroyOnClose:s=!1,visible:a,onClose:d,style:r={},motionConfig:u={initial:{opacity:.1,y:0,scale:.2},animate:{opacity:1,y:100,scale:1}}}=l,c={};if(s)c.display=a?"block":"none";else if(!a)return null;return e.jsxs("div",Object.assign({style:Object.assign({},c),className:n.modal},{children:[e.jsx("div",{onClick:()=>{null==d||d()},className:n.mask}),e.jsx(t.motion.div,Object.assign({},u,{style:Object.assign({width:`${o}px`},r),className:n.modalContent},{children:i}))]}))},exports.Tab=function(i){const{items:s,className:n,defaultActiveKey:d,motionConfig:r,extension:u,extSelector:c,tabContentVisible:m=!0,onTabChange:_,hiddenStyle:p={display:"none"}}=i,[f,h]=l.useState(0),[b,x]=l.useState(),j=l.useRef(null);return l.useEffect((()=>{var e;if(!j)return;if(!u)return;if(!c)throw new Error("'extSelector' not provide!");const l=null===(e=j.current)||void 0===e?void 0:e.querySelector(c);l&&x(l)}),[j.current]),console.log(p),e.jsxs("div",Object.assign({ref:j,className:`${a.tab} ${n}`},{children:[b?o.createPortal(u,b):null,e.jsx(t.motion.ul,Object.assign({"aria-label":"tab",className:a.title},{children:null==s?void 0:s.map(((l,o)=>e.jsx(t.motion.li,Object.assign({"aria-label":"tab-title",onClick:()=>{h(o),null==_||_(l)}},{children:l.title}),l.key)))})),m?e.jsx(t.motion.div,Object.assign({"aria-label":"tab-content"},r,{className:a.tabContent},{children:null==s?void 0:s[f].children})):null]}))},exports.Table=function(t){const{data:o,cols:i,className:s}=t,n=l.useMemo((()=>null==i?void 0:i.map((l=>e.jsx("td",{children:null==l?void 0:l.title},null==l?void 0:l.key)))),[i]);return e.jsxs("table",Object.assign({className:s},{children:[e.jsx("thead",{children:e.jsx("tr",{children:n})}),e.jsx("tbody",{children:null==o?void 0:o.map((l=>e.jsx("tr",{children:null==i?void 0:i.map((t=>t.render?e.jsx("td",{children:t.render(l)},t.key):e.jsx("td",{children:l[t.key]},t.key)))},l.id)))})]}))},exports.Upload=function(t){const{beforeUpload:o,children:i,uploadUrl:n,onComplete:a,customList:d,valueFilter:r}=t,u=l.useRef();let[c,m]=l.useState([]);const _=e=>{const l=[];for(let t=0;t<e.length;t++)l.push(new Promise(((l,o)=>{const i=new XMLHttpRequest,s=new FormData;s.append("file",e[t]),i.open("POST",n),i.send(s),i.onerror=e=>{o(e)},i.onload=()=>{let o;try{o=JSON.parse(i.response)}catch(e){o=i.response}const s={lastModified:(n=e[t]).lastModified,name:n.name,size:n.size,type:n.type,originFileObj:n};var n;const a=Object.assign({response:o},s);l(a)}})));Promise.all(l).then((e=>{c=c.concat(e),m([...c]),null==a||a(c)}))},p=l.useMemo((()=>d?d(c):c.map(((l,t)=>(console.log("Abc",l),e.jsxs("li",Object.assign({className:s.fileItem},{children:[l.type,e.jsx("img",{src:l,style:{width:"100px"}}),e.jsx("span",Object.assign({onClick:()=>{null==c||c.splice(t,1),m([...c])},className:s.deleteItem},{children:"delete"}))]})))))),[c]);return e.jsxs("span",Object.assign({className:s.upload},{children:[e.jsx("input",{multiple:!0,onChange:e=>{var l;e.target.files&&(l=e.target.files,null==o||o(l).then((e=>{_(l)})).catch((e=>{console.log(e)})))},ref:u,type:"file"}),e.jsxs("ul",Object.assign({className:s.fileList},{children:[e.jsx("li",{children:e.jsx("span",Object.assign({onClick:()=>{u.current.click()}},{children:i}))}),p]}))]}))};
//# sourceMappingURL=index.js.map
