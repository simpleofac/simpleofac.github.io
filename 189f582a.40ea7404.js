(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(137)),c={id:"tutorial",title:"5 minutes tutorial",hide_table_of_contents:!0},i={id:"ofac/tutorial",isDocsHomePage:!1,title:"5 minutes tutorial",description:"SimpleOFAC is a pure-Java server-side web application.",source:"@site/docs/ofac/tutorial.md",permalink:"/docs/ofac/tutorial"},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"SimpleOFAC is a pure-Java server-side web application.\nIt runs on any platform (Windows, Unix, Linux ) and supports most Relational Databases (Oracle, MYSQL, Microsoft SQL). "),Object(o.b)("p",null,"Please follow the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.simpleofac.com/ofac/help/en/install.html"}),"Installation manual")," to set it up and running. "),Object(o.b)("p",null,"Login with the admin ID and begin the test drive following these easy steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Add or Upload your sanction List"),Object(o.b)("br",{parentName:"p"}),"\n","You can either manually add the sanction list via List management ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.simpleofac.com/ofac/help/en/list/listentry.html#list-listentry-new"}),"Add new Sanction Entry"),",\nor get the sanction list from various government websites,\nsuch as OFAC SDN List, NS-PLC list and then upload the list via ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.simpleofac.com/ofac/help/en/list/listupload.html"}),"List Upload Screen"),". ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Create Screening Instance"),Object(o.b)("br",{parentName:"p"}),"\n","Create a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.simpleofac.com/ofac/help/en/screen/screeninstance.html#screen-instance-new"}),"new Screening instance"),' via Screening management screen\nand then use "Configure" function to configure the sanction lists to be included in the screening index.\nFinally, use the "Build Index" function to build the index.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Free text search or File Screening"),Object(o.b)("br",{parentName:"p"}),"\n","You are ready to go. You can search your customer or transaction via\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.simpleofac.com/ofac/help/en/screen/freetextlookup.html"}),"Free Text Lookup screen"),"\nor batch ","[file scan]"," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.simpleofac.com/ofac/help/en/screen/filescan.html"}),"https://www.simpleofac.com/ofac/help/en/screen/filescan.html"),") ."))),Object(o.b)("p",null,"For more information on SimpleOFAC, please check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.simpleofac.com/ofac/help/en/"}),"Online documetation"),"."))}s.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);