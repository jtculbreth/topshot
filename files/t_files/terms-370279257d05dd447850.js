(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8341],{34511:function(t,e,n){"use strict";var r=n(85893),o=(n(67294),n(8997)),i=n(99254),c=o.ZP.div.withConfig({displayName:"Background__StyledBackground",componentId:"sc-6o48am-0"})(["background-color:",";"],(function(t){return"light"===t.color?i.$_.white:i.$_.trueBlack}));function a(t){var e=t.children,n=t.color;return(0,r.jsx)(c,{color:n,children:e})}a.defaultProps={children:null,color:"light"},e.Z=a},80426:function(t,e,n){"use strict";var r=n(85893),o=(n(67294),n(58826));function i(t){var e,n,i,c=t.ogData;return(0,r.jsx)(o.Z,{title:null===c||void 0===c?void 0:c.title,description:null===c||void 0===c?void 0:c.description,image:"https:".concat(null===c||void 0===c||null===(e=c.image)||void 0===e||null===(n=e.fields)||void 0===n||null===(i=n.file)||void 0===i?void 0:i.url)})}i.defaultProps={ogData:null},e.Z=i},80150:function(t,e,n){"use strict";var r=n(85893),o=(n(67294),n(8997)),i=n(22135),c=n(99254),a=o.ZP.div.withConfig({displayName:"SectionLegal__Section",componentId:"sc-1lnmrfh-0"})(["margin-bottom:20px;color:",";a{color:",";border-bottom:1px solid;}"],c.$_.white,c.$_.black[100]);function s(t){var e=t.content;return(0,r.jsx)(a,{children:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,i.S)(e)}})})}s.defaultProps={content:null},e.Z=s},58826:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(85893),o=(n(67294),n(9008)),i=n(11163),c=n(87157);function a(t){var e=t;return t&&!/^((http|https):)/.test(t)&&(e=e="https:".concat(e)),e}var s=n(30219);function l(t){var e=t.currency,n=t.description,l=t.image,u=t.price,d=t.siteName,p=t.title,m=t.video,v=(0,i.useRouter)().asPath;return(0,r.jsxs)(o.default,{children:[p&&(0,r.jsx)("title",{children:p},"title"),d&&(0,r.jsx)("meta",{property:"og:site_name",content:d},"siteName"),n&&(0,r.jsx)("meta",{name:"description",content:n},"description"),p&&(0,r.jsx)("meta",{name:"twitter:title",content:p},"twitterTitle"),n&&(0,r.jsx)("meta",{name:"twitter:description",content:n},"twitterDescription"),l&&(0,r.jsx)("meta",{name:"twitter:image",content:a(l)},"twitterImage"),(0,r.jsx)("meta",{name:"twitter:url",content:"".concat((0,c.or)()).concat(v)},"twitterUrl"),p&&(0,r.jsx)("meta",{property:"og:title",content:p},"ogTitle"),n&&(0,r.jsx)("meta",{property:"og:description",content:n},"ogDescription"),l&&(0,r.jsx)("meta",{property:"og:image",content:l},"ogImage"),(0,r.jsx)("meta",{property:"og:url",content:"".concat((0,c.or)()).concat(v)},"ogUrl"),m&&(0,r.jsx)("meta",{property:"og:video",content:m},"video"),u&&(0,r.jsx)("meta",{property:"og:price:amount",content:u}),e&&(0,r.jsx)("meta",{property:"og:price:currency",content:e}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/static/favicon/favicon-512.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitterCard"),(0,r.jsx)("meta",{name:"facebook-domain-verification",content:(0,s.Z)("facebookDomainVerification")})]})}l.defaultProps={currency:void 0,description:void 0,image:void 0,price:void 0,siteName:void 0,title:void 0,video:void 0};var u=l},68087:function(t,e,n){"use strict";n.r(e);var r=n(809),o=n.n(r),i=n(92809),c=n(30266),a=n(85893),s=n(67294),l=n(76752),u=n(8997),d=n(84441),p=n(19627),m=n(86817),v=n(56207),f=n(45432),g=n(30121),x=n(80426),h=n(80150),j=n(34511),b=n(99254);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _=(0,u.ZP)(v.ZP).withConfig({displayName:"terms__StyledContainer",componentId:"sc-1ibccy8-0"})(["padding:",";"],b.W0[40]),k=(0,p.Z)();function P(t){var e=t.page,n=t.ogData;return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(x.Z,{ogData:n}),(0,a.jsx)(j.Z,{color:"dark",children:(0,a.jsxs)(_,{children:[(0,a.jsx)(g.ZP,{flourish:null===e||void 0===e?void 0:e.name.replace(/ .*/,""),color:"white",gutterBottom:b.W0[24],children:null===e||void 0===e?void 0:e.name}),(0,a.jsxs)(f.Z,{as:"p",gutterBottom:b.W0[32],size:"medium",color:"white",children:["Last Updated: ",(0,a.jsx)("b",{children:null===e||void 0===e?void 0:e.dateModified})]}),(0,a.jsx)(h.Z,{content:null===e||void 0===e?void 0:e.content})]})})]})}P.getInitialProps=(0,c.Z)(o().mark((function t(){var e,n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.prev=1,t.next=4,k.getEntry((0,d.$)(m.Rr));case 4:if(t.t1=n=t.sent,t.t0=null===t.t1,t.t0){t.next=8;break}t.t0=void 0===n;case 8:if(!t.t0){t.next=12;break}t.t2=void 0,t.next=13;break;case 12:t.t2=n.fields;case 13:e.ogData=t.t2,t.next=19;break;case 16:t.prev=16,t.t3=t.catch(1),(0,l.Tb)(t.t3);case 19:return t.prev=19,t.next=22,k.getEntry((0,d.$)(m.bm));case 22:if(t.t5=r=t.sent,t.t4=null===t.t5,t.t4){t.next=26;break}t.t4=void 0===r;case 26:if(!t.t4){t.next=30;break}t.t6=void 0,t.next=31;break;case 30:t.t6=r.fields;case 31:e.page=t.t6,t.next=37;break;case 34:t.prev=34,t.t7=t.catch(19),(0,l.Tb)(t.t7);case 37:return t.abrupt("return",w({},e));case 38:case"end":return t.stop()}}),t,null,[[1,16],[19,34]])}))),P.defaultProps={ogData:null,page:null},e.default=P},95032:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms",function(){return n(68087)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=95032,t(t.s=e);var e}));var e=t.O();_N_E=e}]);