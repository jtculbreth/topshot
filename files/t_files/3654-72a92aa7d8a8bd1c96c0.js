"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3654],{99351:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(92809),o=r(8132),l=r(67294),i=r(46829),a=r(73588),s=r(52209),c=r(95990);function d(){var e=(0,s.Z)(["\n  query GetMyCompletedChallenges {\n    getMyCompletedChallenges {\n      completedUserChallenges {\n        challenge {\n          id\n        }\n      }\n    }\n  }\n"]);return d=function(){return e},e}var u="IDLE",p="FETCHING",f="ERROR",g="SUCCESS",h=(0,c.ZP)(d());function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.query,s=void 0===n?h:n,c=(0,o.Z)(r,["query"]),d=(0,l.useState)(u),v=d[0],y=d[1],O=(0,i.useQuery)(s,b({},c)),j=O.loading,m=O.error,P=O.data;(0,l.useEffect)((function(){y(j?p:m?f:g)}),[j,m,P]);var w=null===P||void 0===P||null===(e=P.getMyCompletedChallenges)||void 0===e||null===(t=e.completedUserChallenges)||void 0===t?void 0:t.map((function(e){return(0,a.ZP)({challenge:null===e||void 0===e?void 0:e.challenge,rewardStatus:null===e||void 0===e?void 0:e.rewardStatus})}));return{completedChallenges:w,fsm:v,error:m}}},23654:function(e,t,r){r.d(t,{Z:function(){return F}});var n=r(92809),o=r(85893),l=r(159),i=r(67294),a=r(58545),s=r(30790),c=r(70644),d=r(228),u=r(68392),p=r(71459),f=r(56794),g=r(76753),h=r(54469),v=r(3849),b=r(11163),y=r(87157),O=r(91717),j=r(7090),m=r(38591),P={AVAILABLE:"AVAILABLE",COMPLETED:"COMPLETED",PREVIOUS:"PREVIOUS"},w=r(8997),C=r(99254),E=r(30121),x=r(45432),Z=r(32813),I=r(43423),S=r(55403),D=w.ZP.div.withConfig({displayName:"Tabs__StyledRoot",componentId:"sc-14p1adh-0"})(["display:flex;justify-content:flex-start;margin-top:",";margin-bottom:",";"],C.W0[20],C.W0[48]),_=(0,w.iv)(["transform:translate(-50%,-50%) scaleX(1);"]),R=(0,w.iv)(["&::after{","}"],_),A=(0,w.ZP)(S.Z).withConfig({displayName:"Tabs__StyledLabel",componentId:"sc-14p1adh-1"})(["position:relative;padding-bottom:",";cursor:pointer;&::after{position:absolute;top:100%;left:50%;width:100%;height:4px;background-color:",";content:'';transform:translate(-50%,-50%) scaleX(0);transition:transform 0.2s;}@media ","{&:hover::after{","}}"," & + &{margin-left:4%;@media ","{margin-left:",";}}"],C.W0[12],C.$_.brand[500],C.w5.tablet,_,(function(e){return e.$isActive&&R}),C.w5.tablet,C.W0[40]);function L(e){var t=e.activeTab,r=e.setActiveTab,n=e.isAuthenticated,l=(0,j.$)().t,i=(0,I.Z)().track,a=n?Object.keys(P):[Object.keys(P)[0]];return(0,o.jsx)(D,{children:a.map((function(e){return(0,o.jsx)(A,{variant:"labelLarge",color:t===P[e]?C.$_.white:"inherit",$isActive:t===P[e],onClick:function(){i("challenges-tab-click",{tab:P[e]}),r(P[e])},children:l("Challenges.Tabs.".concat(e.toLocaleLowerCase()))},e)}))})}L.defaultProps={activeTab:P.AVAILABLE,setActiveTab:function(){},isAuthenticated:!1};var k=L,T=r(99351);var N=function(){var e=(0,T.Z)({query:a.MyCompletedChallengesQuery,fetchPolicy:"network-only"}),t=e.completedChallenges,r=e.fsm;return r===p.E.IDLE?null:r===p.E.FETCHING?(0,o.jsx)(v.Z,{}):r===p.E.ERROR?(0,o.jsx)(h.Z,{"data-testid":"page-challenges-error"}):(0,o.jsx)(Z.Z,{challenges:t})},U=r(96438),$=r(12766);var W=function(){var e,t,r=(0,d.Z)().currentUser,n=(0,U.Z)({byUserID:null===r||void 0===r||null===(e=r.publicInfo)||void 0===e?void 0:e.dapperID,byChallengeCompletionState:$.Vn.NOT_COMPLETED,byChallengeExpiryState:$.LY.EXPIRED,fetchPolicy:"network-only",skip:!(null===r||void 0===r||null===(t=r.publicInfo)||void 0===t?void 0:t.dapperID)}),l=n.challenges,i=n.fsm;return i===$.Eb.IDLE?null:i===$.Eb.FETCHING?(0,o.jsx)(v.Z,{}):i===$.Eb.ERROR?(0,o.jsx)(h.Z,{"data-testid":"page-challenges-previous-error"}):(0,o.jsx)(Z.Z,{challenges:l})},V=(0,w.ZP)(x.Z).withConfig({displayName:"Challenges__StyledSubheading",componentId:"hwm4t9-0"})(["margin-top:",";"],C.W0[16]);function Q(e){var t=e.activeChallenges,r=e.isAuthenticated,l=(0,O.gV)(),a=(0,j.$)().t,s=(0,b.useRouter)(),c=P.AVAILABLE;r&&(null===s||void 0===s?void 0:s.asPath.includes("completed"))?c=P.COMPLETED:r&&(null===s||void 0===s?void 0:s.asPath.includes("previous"))&&(c=P.PREVIOUS);var d=(0,i.useState)(c),u=d[0],p=d[1];(0,i.useEffect)((function(){if(!r){if(null===s||void 0===s?void 0:s.asPath.includes("completed")){var e=l.showcaseQuestsIndex?(0,y.$1)():(0,y.Q5)(),t=l.showcaseQuestsIndex?(0,y.go)():(0,y.b5)();s.replace(e,t,{shallow:!0})}if(null===s||void 0===s?void 0:s.asPath.includes("previous")){var n=l.showcaseQuestsIndex?(0,y.Tf)():(0,y.f8)(),o=l.showcaseQuestsIndex?(0,y.go)():(0,y.b5)();s.replace(n,o,{shallow:!0})}}}));return(0,o.jsxs)(m.Z,{bgColor:"dark","data-testid":"page-challenges",children:[!l.showcaseQuestsIndex&&(0,o.jsxs)(m.Z.Header,{children:[(0,o.jsx)(E.ZP,{flourish:a("Challenges.pageTitleFlourish"),color:"#fff",children:a("Challenges.pageTitle")}),(0,o.jsx)(V,{size:"large",color:C.$_.white,children:a("Challenges.pageDescription")})]}),(0,o.jsxs)(m.Z.Body,{isPadded:!1,children:[(0,o.jsx)(k,{activeTab:u,setActiveTab:function(e){p(e);var t=function(e){var t,r;return e?(r={},(0,n.Z)(r,P.AVAILABLE,(0,y.go)()),(0,n.Z)(r,P.COMPLETED,(0,y.$1)()),(0,n.Z)(r,P.PREVIOUS,(0,y.Tf)()),r):(t={},(0,n.Z)(t,P.AVAILABLE,(0,y.b5)()),(0,n.Z)(t,P.COMPLETED,(0,y.Q5)()),(0,n.Z)(t,P.PREVIOUS,(0,y.f8)()),t)}(l.showcaseQuestsIndex)[e],r=l.showcaseQuestsIndex?(0,y.go)():(0,y.b5)();s.replace(r,t,{shallow:!0})},isAuthenticated:r}),u===P.AVAILABLE&&(0,o.jsx)(Z.Z,{challenges:t}),u===P.COMPLETED&&!!r&&(0,o.jsx)(N,{}),u===P.PREVIOUS&&!!r&&(0,o.jsx)(W,{})]})]})}Q.defaultProps={activeChallenges:void 0,isAuthenticated:!1};var M=Q;function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var B=function(e){var t=(0,l.Z)({},e),r=(0,s.Z)({query:a.MyActiveChallengesQuery,fetchPolicy:"network-only"}),i=r.activeChallenges,c=r.fsm;return c===p.E.IDLE?null:c===p.E.FETCHING?(0,o.jsx)(v.Z,{}):c===p.E.ERROR?(0,o.jsx)(h.Z,{"data-testid":"page-challenges-error"}):(0,o.jsx)(M,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({activeChallenges:(0,u.mu)(i)},t))},q=function(){var e=(0,c.Z)({query:a.UnauthActiveChallengesQuery,fetchPolicy:"network-only"}),t=e.activeChallenges,r=e.fsm;return r===f.Eb.IDLE?null:r===f.Eb.FETCHING?(0,o.jsx)(v.Z,{}):r===f.Eb.ERROR?(0,o.jsx)(h.Z,{"data-testid":"page-challenges-error"}):(0,o.jsx)(M,{activeChallenges:(0,u.mu)(t)})},F=function(){var e=(0,d.Z)(),t=e.currentUser,r=e.currentUserFsm;return r===g.Eb.IDLE||r===g.Eb.FETCHING?(0,o.jsx)(v.Z,{}):r===g.Eb.ERROR?(0,o.jsx)(h.Z,{"data-testid":"page-challenges-error"}):t?(0,o.jsx)(B,{isAuthenticated:!0}):(0,o.jsx)(q,{})}},32813:function(e,t,r){r.d(t,{Z:function(){return X}});var n=r(85893),o=(r(67294),r(91717)),l=r(41664),i=r(8997),a=r(99254),s=r(87157),c=r(7090),d=r(11163),u=r(25431),p=r(28250),f=r(55403),g=r(96946),h=i.ZP.div.withConfig({displayName:"Header__StyledRoot",componentId:"sc-1wy5lps-0"})(["grid-area:header;margin-top:",";margin-bottom:",";"],a.W0[12],a.W0[24]);function v(e){var t,r=e.challenge,o=(0,c.$)().t;return(0,n.jsx)(h,{children:(0,n.jsx)(p.Z.Header,{title:null===r||void 0===r?void 0:r.name,subtitle:o("Challenges.subtitle",{slotsSize:null!==(t=null===r||void 0===r?void 0:r.totalCount)&&void 0!==t?t:0})})})}v.defaultProps={challenge:void 0};var b=v,y=r(92809),O=r(8132),j=r(94813);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=i.ZP.div.withConfig({displayName:"Reward__StyledRoot",componentId:"s721-0"})(["margin-bottom:",";"],a.W0[40]);function C(e){var t=e.reward,r=(0,O.Z)(e,["reward"]);return(0,n.jsx)(w,{children:(0,n.jsx)(j.Z,P({setId:null===t||void 0===t?void 0:t.setId,playId:null===t||void 0===t?void 0:t.playId},r))})}C.defaultProps={reward:void 0};var E=C,x=r(159),Z=r(58971);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=i.ZP.div.withConfig({displayName:"Expiration__StyledRoot",componentId:"sc-1xygot-0"})(["position:absolute;top:0;left:",";transform:translateY(-50%);"],a.W0[32]);var _=function(e){var t=(0,x.Z)({},e);return(0,n.jsx)(D,{children:(0,n.jsx)(Z.Z,S({},t))})},R=r(92285);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,y.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=i.ZP.div.withConfig({displayName:"Progress__StyledRoot",componentId:"sc-1f7dcf3-0"})([""]);function T(e){var t=(0,x.Z)({},e);return(0,n.jsx)(k,{children:(0,n.jsx)(R.Z,L({},t))})}T.defaultProps={fill:0,total:0};var N=T,U=i.ZP.div.withConfig({displayName:"ChallengeCard__StyledWrapper",componentId:"sc-4dlxw0-0"})(["position:relative;"]),$=i.ZP.div.withConfig({displayName:"ChallengeCard__StyledCTA",componentId:"sc-4dlxw0-1"})(["display:flex;justify-content:",";align-items:center;margin-top:",";"],(function(e){return e.$isPreviousChallenge?"space-between":"flex-end"}),a.W0[20]),W=i.ZP.div.withConfig({displayName:"ChallengeCard__StyledCTALink",componentId:"sc-4dlxw0-2"})(["display:flex;align-items:center;justify-content:flex-end;width:fit-content;"]),V=(0,i.ZP)(f.Z).withConfig({displayName:"ChallengeCard__StyledCTALabel",componentId:"sc-4dlxw0-3"})(["display:none;@media ","{display:inline-block;}"],a.w5.desktop),Q=(0,i.ZP)(f.Z).withConfig({displayName:"ChallengeCard__StyledNumUsersCompleted",componentId:"sc-4dlxw0-4"})(["margin-right:",";text-transform:none;@media ","{max-width:50%;}"],a.W0[4],a.w5.desktop);function M(e){var t=e.challenge,r=(0,c.$)().t,o=(null===t||void 0===t?void 0:t.timerStatus)===u.v.EXPIRED&&(null===t||void 0===t?void 0:t.challengeStatus)===u.qu.INCOMPLETE;return(0,n.jsxs)(U,{children:[(0,n.jsx)(_,{expirationDate:null===t||void 0===t?void 0:t.expirationDate,challengeStatus:null===t||void 0===t?void 0:t.challengeStatus,timerStatus:null===t||void 0===t?void 0:t.timerStatus}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(b,{challenge:t}),(0,n.jsx)(E,{reward:null===t||void 0===t?void 0:t.reward,challengeStatus:null===t||void 0===t?void 0:t.challengeStatus}),!o&&(0,n.jsx)(N,{fill:null===t||void 0===t?void 0:t.fillCount,total:null===t||void 0===t?void 0:t.totalCount,challengeStatus:null===t||void 0===t?void 0:t.challengeStatus,timerStatus:null===t||void 0===t?void 0:t.timerStatus}),(0,n.jsxs)($,{$isPreviousChallenge:o,children:[o&&(0,n.jsx)(Q,{variant:"labelSmall",color:a.$_.grey[700],children:r("ChallengeCard.numUsersCompleted",{numUsersCompleted:null===t||void 0===t?void 0:t.numUsersCompleted})}),(0,n.jsxs)(W,{children:[(0,n.jsx)(V,{variant:"labelSmall",color:a.$_.grey[700],children:r("ChallengeCard.cta")}),(0,n.jsx)(g.Z.Angle,{size:25,style:{transform:"rotate(-90deg)",marginRight:"-".concat(a.W0[8]),marginLeft:a.W0[12]}})]})]})]})]})}M.defaultProps={challenge:void 0};var H=M,B=r(51270),q=i.ZP.div.withConfig({displayName:"ChallengesList__StyledRoot",componentId:"sc-1xr0krl-0"})(["display:grid;grid-gap:",";@media ","{grid-template-columns:repeat(2,1fr);grid-template-rows:auto;}@media ","{","{padding-right:4%;padding-left:4%;}}"],a.W0[32],a.w5.tablet,a.w5.mobileOnly,B.Dn),F=i.ZP.a.withConfig({displayName:"ChallengesList__StyledItem",componentId:"sc-1xr0krl-1"})(["display:block;"]);function G(e){var t=e.challenges,r=e.isOwnProfile,i=e.username,a=(0,c.$)().t,u=(0,o.gV)(),p=(0,d.useRouter)();if(0===(null===t||void 0===t?void 0:t.length))return(0,n.jsx)(q,{children:a("Challenges.noChallenges")});var f=(null===u||void 0===u?void 0:u.showcaseQuestsIndex)?s.vN:s.tR;return(0,n.jsx)(q,{children:t.map((function(e){var t,o=(null===p||void 0===p||null===(t=p.query)||void 0===t?void 0:t.nameOrId)&&!r?(0,s.Bb)({nickname:"@".concat(i),id:null===e||void 0===e?void 0:e.id}):{href:f({id:"[id]"}),as:f({id:null===e||void 0===e?void 0:e.id})};return(0,n.jsx)(l.default,{href:o.href,as:o.as,passHref:!0,trackingId:"Challenges-ChallengeCard--view",children:(0,n.jsx)(F,{children:(0,n.jsx)(H,{challenge:e})})},e.id)}))})}G.defaultProps={challenges:[],isOwnProfile:!1,username:void 0};var X=G},3849:function(e,t,r){var n=r(85893),o=(r(67294),r(7090)),l=r(46511);t.Z=function(){var e=(0,o.$)().t;return(0,n.jsx)(l.Z,{bgColor:"dark",children:(0,n.jsx)("div",{"data-testid":"page-challenges-loading",children:e("general.loading")})})}},38591:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(92809),o=r(85893),l=r(8132),i=(r(67294),r(46511)),a=r(8997),s=r(99254);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=a.ZP.div.withConfig({displayName:"Header__StyledRoot",componentId:"sc-10abl2w-0"})(["padding:"," 0;border-bottom:solid 1px ",";"],s.W0[32],s.$_.black[500]);function p(e){var t=e.children,r=(0,l.Z)(e,["children"]);return(0,o.jsx)(u,d(d({},r),{},{children:t}))}p.defaultProps={children:null};var f=p,g=a.ZP.div.withConfig({displayName:"Body__StyledRoot",componentId:"lgjjep-0"})(["",""],(function(e){return!!e.isPadded&&"padding: ".concat(s.W0[48]," 0")}));function h(e){var t=e.children,r=e.isPadded;return(0,o.jsx)(g,{isPadded:r,children:t})}h.defaultProps={children:null,isPadded:!0};var v=h;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){var t=e.children,r=(0,l.Z)(e,["children"]);return(0,o.jsx)(i.Z,y(y({},r),{},{children:t}))}O.defaultProps={children:null},O.Header=f,O.Body=v;var j=O}}]);