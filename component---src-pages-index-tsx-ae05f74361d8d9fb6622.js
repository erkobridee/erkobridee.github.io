(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Kfvu:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0,t.OutboundLink=u,t.trackCustomEvent=function(e){var t=e.category,n=e.action,r=e.label,a=e.value,l=e.nonInteraction,o=void 0!==l&&l,i=e.transport,u=e.hitCallback,c=e.callbackTimeout,m=void 0===c?1e3:c;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:n,eventLabel:r,eventValue:a,nonInteraction:o,transport:i};u&&"function"==typeof u&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,r=function(){n||(n=!0,e())};return setTimeout(r,t),r}(u,m)),window.ga("send","event",d)}};var a=r(n("j8BX")),l=r(n("uDP2")),o=r(n("q1tI")),i=r(n("17x9"));function u(e){var t=e.eventCategory,n=e.eventAction,r=e.eventLabel,i=e.eventValue,u=(0,l.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,a.default)({},u,{onClick:function(a){"function"==typeof e.onClick&&e.onClick(a);var l=!0;return(0!==a.button||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey||a.defaultPrevented)&&(l=!1),e.target&&"_self"!==e.target.toLowerCase()&&(l=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:r||e.href,eventValue:i,transport:l?"beacon":"",hitCallback:function(){l&&(document.location=e.href)}}):l&&(document.location=e.href),!1}}))}u.propTypes={href:i.default.string,target:i.default.string,eventCategory:i.default.string,eventAction:i.default.string,eventLabel:i.default.string,eventValue:i.default.number,onClick:i.default.func}},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("24R3"),o=n("Kfvu"),i=n("VXBa"),u=n("6o60"),c=n("nHTZ");t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(l.a,{id:"home.pagetitle",defaultMessage:"Home"},(function(e){return a.a.createElement(u.a,{title:e})})),a.a.createElement("p",null,a.a.createElement(l.a,{id:"who.i.am",defaultMessage:"I'm a mad computer scientist, but with bachelor's degree \\o/"})),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.OutboundLink,{href:"https://sourcerer.io/erkobridee",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:"https://sourcerer.io/icons/logo-sharing.svg",height:"16px",alt:"Sourcerer"})," sourcerer.io")),a.a.createElement("li",null,a.a.createElement(c.a,{name:"github"})," ",a.a.createElement(o.OutboundLink,{href:"https://github.com/erkobridee",target:"_blank",rel:"noopener noreferrer"},"GitHub")," ","|"," ",a.a.createElement(o.OutboundLink,{href:"https://gist.github.com/erkobridee",target:"_blank",rel:"noopener noreferrer"},"Gist")),a.a.createElement("li",null,a.a.createElement(c.a,{name:"codesandbox"})," ",a.a.createElement(o.OutboundLink,{href:"https://codesandbox.io/u/erkobridee/",target:"_blank",rel:"noopener noreferrer"},"Code Sandbox")),a.a.createElement("li",null,a.a.createElement(c.a,{name:"codepen"})," ",a.a.createElement(o.OutboundLink,{href:"https://codepen.io/erkobridee",target:"_blank",rel:"noopener noreferrer"},"Codepen")),a.a.createElement("li",null,a.a.createElement(c.a,{name:"repl"})," ",a.a.createElement(o.OutboundLink,{href:"https://repl.it/@erkobridee",target:"_blank",rel:"noopener noreferrer"},"Repl.it")),a.a.createElement("li",null,a.a.createElement(c.a,{name:"linkedin"})," ",a.a.createElement(o.OutboundLink,{href:"https://linkedin.com/in/erkobridee/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),a.a.createElement("li",null,a.a.createElement(c.a,{name:"udemy"})," ",a.a.createElement(o.OutboundLink,{href:"https://www.udemy.com/user/erko-bridee-de-almeida-cabrera/",target:"_blank",rel:"noopener noreferrer"},"Udemy")),a.a.createElement("li",null,a.a.createElement(c.a,{name:"twitter"})," ",a.a.createElement(o.OutboundLink,{href:"https://twitter.com/ErkoBridee",target:"_blank",rel:"noopener noreferrer"},"Twitter")),a.a.createElement("li",null,a.a.createElement(c.a,{name:"instagram"})," ",a.a.createElement(o.OutboundLink,{href:"https://www.instagram.com/erkobridee/",target:"_blank",rel:"noopener noreferrer"},"Instagram")),a.a.createElement("li",null,a.a.createElement(c.a,{name:"medium"})," ",a.a.createElement(o.OutboundLink,{href:"https://medium.com/@erkobridee",target:"_blank",rel:"noopener noreferrer"},"Medium")))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ae05f74361d8d9fb6622.js.map