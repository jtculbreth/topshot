(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2465],{47734:function(e,t,r){"use strict";r.d(t,{Z:function(){return z}});var i=r(85893),n=r(92809),o=r(67294),a=r(89194),l=r(54925),s=r(25730),d=r(8132),c=r(8997),p=r(7090),u=r(99254),m=r(37089),g=r(20346),f=r(87157),y=r(7702),h=c.ZP.div.withConfig({displayName:"Moments__StyledMomentsList",componentId:"sc-3iwffu-0"})(["display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));grid-gap:16px;width:100%;@media ","{grid-template-columns:repeat(3,minmax(150px,1fr));}@media ","{grid-template-columns:repeat(4,minmax(150px,1fr));}"],u.w5.tablet,u.w5.desktop);function v(e){var t=e.moments,r=e.favoriteTeam,n=(0,p.$)().t;return 0===(null===t||void 0===t?void 0:t.length)?n(r?"PageDiscovery.Authenticated.LatestMoments.empty.favorite":"PageDiscovery.Authenticated.LatestMoments.empty.noFavorite"):(0,i.jsx)(h,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,i.jsx)(y.Z,{moment:e},e.id)}))})}v.defaultProps={moments:void 0,favoriteTeam:void 0};var b=v,x=r(66417),w=r(56207),P=r(57223);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=c.ZP.div.withConfig({displayName:"LatestMoments__StyledRoot",componentId:"sc-1lmxrq-0"})(["padding:"," 0;background-color:",";"],u.W0[40],u.$_.trueBlack),k=(0,c.ZP)(w.ZP).withConfig({displayName:"LatestMoments__StyledContainer",componentId:"sc-1lmxrq-1"})(["@media ","{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:auto 1fr;grid-template-areas:'title link' 'moments moments';align-items:center;grid-gap:20px;}"],u.w5.desktop),O=c.ZP.div.withConfig({displayName:"LatestMoments__StyledTitle",componentId:"sc-1lmxrq-2"})(["display:grid;grid-template-columns:",";grid-area:title;grid-gap:24px;align-items:center;margin-bottom:",";@media ","{grid-template-columns:",";margin-bottom:0;}"],(function(e){return e.displayLogo?"50px 1fr":"1fr"}),u.W0[12],u.w5.desktop,(function(e){return e.displayLogo?"60px 1fr":"1fr"})),C=c.ZP.img.withConfig({displayName:"LatestMoments__StyledImage",componentId:"sc-1lmxrq-3"})(["width:100%;"]),Z=c.ZP.div.withConfig({displayName:"LatestMoments__StyledLinkWrapper",componentId:"sc-1lmxrq-4"})(["grid-area:link;margin-top:",";@media ","{margin-top:0;justify-self:end;}"],u.W0[28],u.w5.desktop),I=c.ZP.a.withConfig({displayName:"LatestMoments__StyledLink",componentId:"sc-1lmxrq-5"})([""," padding:"," 0;color:",";border-bottom:2px solid ",";"],g.Ok.button,u.W0[8],u.$_.white,u.$_.white),T=c.ZP.div.withConfig({displayName:"LatestMoments__StyledMoments",componentId:"sc-1lmxrq-6"})(["grid-area:moments;"]);function N(e){var t=e.favoriteTeam,r=e.loading,n=(0,d.Z)(e,["favoriteTeam","loading"]),a=(0,p.$)().t,l=(0,s.Tg)(t),c=(0,s.Vz)(t),g=(0,s.qF)(c),y=c?(0,f.gx)({byTeams:[c]}):(0,f.gx)();return(0,i.jsx)(S,{children:(0,i.jsxs)(k,{children:[r?(0,i.jsx)(x.Z,{height:60}):(0,i.jsx)(O,{displayLogo:!!t,children:(0,i.jsxs)(o.Fragment,{children:[!!t&&(0,i.jsx)(C,{src:g,alt:"".concat(l," logo")}),(0,i.jsx)(P.Z.H3,{as:"h1",variant:"alt",color:u.$_.white,children:a("PageDiscovery.Authenticated.LatestMoments.title.favorite",{teamName:l})})]})}),(0,i.jsx)(T,{children:(0,i.jsx)(b,_({favoriteTeam:t},n))}),(0,i.jsx)(Z,{children:(0,i.jsx)(m.Z,{href:y,as:y,passHref:!0,trackingId:"Discover-Authenticated-LatestMoments-cta",children:(0,i.jsx)(I,{children:a("PageDiscovery.Authenticated.LatestMoments.cta")})})})]})})}N.defaultProps={favoriteTeam:void 0,loading:!1};var E=N;function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e){var t,r,n=e.currentUser,o=e.team,d=e.limit,c=null===n||void 0===n||null===(t=n.publicInfo)||void 0===t?void 0:t.favoriteTeamID,p=(0,s.Vz)(o),u=null!==(r=(0,s.NN)(c))&&void 0!==r?r:o,m=[];c?m=[c]:p&&(m=[p]);var g=(0,l.Z)({variables:M(M({},a.qi),{},{byTeams:m,searchInput:{pagination:{cursor:"",direction:"RIGHT",limit:null!==d&&void 0!==d?d:4}}}),fetchPolicy:"network-only"}),f=g.moments,y=g.loading;return(0,i.jsx)(E,{moments:f,favoriteTeam:u,loading:y})}L.defaultProps={currentUser:void 0,team:null,limit:null};var z=L},95203:function(e,t,r){"use strict";var i=r(85893),n=(r(67294),r(8997)),o=r(31179),a=r(10294),l=(0,n.iv)(["filter:grayscale(100%);"]),s=n.ZP.div.withConfig({displayName:"Media__StyledImage",componentId:"owbfob-0"})(["",""],(function(e){var t=e.completionStatus;return e.isCodexSetCard&&t===o.v.IDLE&&l}));function d(e){var t=e.set,r=e.completionStatus,n=e.bannerText,o=e.isCodexSetCard;return(0,i.jsxs)(a.Z.MediaContainer,{image:null===t||void 0===t?void 0:t.image,bannerText:n,children:[n&&(0,i.jsx)(a.Z.Banner,{children:n}),(0,i.jsx)(s,{completionStatus:r,isCodexSetCard:o,children:(0,i.jsx)(a.Z.Media,{image:null===t||void 0===t?void 0:t.image,title:null===t||void 0===t?void 0:t.title})})]})}d.defaultProps={set:void 0,completionStatus:void 0,bannerText:void 0,isCodexSetCard:!1},t.Z=d},14214:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var i=r(67294),n=r(46829),o=r(16086),a={IDLE:"IDLE",FETCHING:"FETCHING",ERROR:"ERROR",SUCCESS:"SUCCESS"};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,r=void 0===t?o.GetCodex:t,l=e.options,s=void 0===l?{variables:{input:{}}}:l,d=(0,i.useState)(a.IDLE),c=d[0],p=d[1],u=(0,n.useQuery)(r,s),m=u.loading,g=u.error,f=u.data,y=null===f||void 0===f?void 0:f.getCodex;return(0,i.useEffect)((function(){s.skip||p(m?a.FETCHING:g||!y?a.ERROR:a.SUCCESS)}),[s.skip,m,g,y]),{codex:y,fsm:c,FS:a}}},72970:function(e,t,r){"use strict";var i=r(92809),n=r(69334),o=r(44328);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t;if(e){var r=null===(t=(0,o.qd)(e))||void 0===t?void 0:t.map((function(e){var t=null===e||void 0===e?void 0:e.set,r=null===e||void 0===e?void 0:e.filledEditionSlots,i=null===e||void 0===e?void 0:e.totalEditionSlots,a=null===e||void 0===e?void 0:e.uniqueMoments,s=null===e||void 0===e?void 0:e.hasChallengeReward,d=(0,o.op)(r,i);return l(l({},e),{},{fillCount:r,totalCount:i,uniqueMoments:a,hasChallengeReward:s,completionStatus:d,set:l(l({},t),{},{title:null===t||void 0===t?void 0:t.flowName,image:null===t||void 0===t?void 0:t.assetPath,status:(null===t||void 0===t?void 0:t.flowLocked)?n._.LOCKED:n._.UNLOCKED})})})),i=(0,o.XC)((0,o.QJ)(r)),a=null===e||void 0===e?void 0:e.numSetsInProgress,s=null===e||void 0===e?void 0:e.numSetsCompleted,d=null===e||void 0===e?void 0:e.totalUniqueEditionsOwned;return{codexSets:i,totalSets:null===r||void 0===r?void 0:r.length,inProgressSets:a,completeSets:s,uniqueMoments:d}}}},69843:function(e,t,r){"use strict";r.d(t,{_W:function(){return l},yJ:function(){return s},Oq:function(){return d},Wp:function(){return c}});var i=r(92809),n=r(96486);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={byPrice:{type:"range"},byPower:{type:"range"},byGameDate:{type:"date"},byCreatedAt:{type:"date"},byPrimaryPlayerPosition:{type:"array"},byPlayCategory:{type:"array"},byActiveChallenge:{type:"array"},bySets:{type:"array"},bySeries:{type:"array"},bySetVisuals:{type:"array"},byPlayStyle:{type:"array"},bySkill:{type:"array"},byLeagues:{type:"array"},byPlayers:{type:"array"},byTagNames:{type:"array"},byPlayTagIDs:{type:"array"},bySetPlayTagIDs:{type:"array"},byTeams:{type:"array"},byPlayIDs:{type:"array"},searchInput:{type:"object"}},s={bySets:{type:"array"},bySeries:{type:"array"},bySetVisuals:{type:"array"},byLeagues:{type:"array"},byPlayers:{type:"array"},byTeams:{type:"array"},byPlays:{type:"array"},byPlayCategory:{type:"array"},byForSale:{type:"string"},byPlayTagIDs:{type:"array"},bySetPlayTagIDs:{type:"array"},byPrimaryPlayerPosition:{type:"array"},byActiveChallenge:{type:"array"},sortBy:{type:"sort"}},d=(0,n.merge)(a({},s),a({},l)),c="orderBy"},23741:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return gt}});var i=r(85893),n=r(67294),o=r(8997),a=r(99254),l=r(41119),s=r(86817),d=r(32503),c=r(91717),p=r(7090),u=r(99372),m=r(54925),g=r(60582),f=r(77626),y=r(20346),h=r(97788),v=r(56207),b=o.ZP.section.withConfig({displayName:"Search__StyledSection",componentId:"sc-1akk1k7-0"})(["padding-top:16px;padding-bottom:40px;background-color:",";@media ","{padding-top:80px;padding-bottom:84px;}@media ","{background-image:url('/img/textures/circle_full.svg'),url('/img/textures/circle_full.svg');background-position:bottom -10px left -210px,top -90px right -262px;background-repeat:no-repeat;background-size:654px;}"],a.$_.trueBlack,a.w5.tablet,a.w5.desktop),x=o.ZP.h2.withConfig({displayName:"Search__StyledHeading",componentId:"sc-1akk1k7-1"})([""," position:relative;z-index:2;margin-top:0;margin-bottom:16px;color:",";text-transform:uppercase;text-align:center;@media ","{margin-bottom:36px;}"],y.ZP.altHeadings.display2,a.$_.white,a.w5.tablet),w=o.ZP.div.withConfig({displayName:"Search__StyledInputWrapper",componentId:"sc-1akk1k7-2"})(["position:relative;z-index:2;margin:0 auto;max-width:800px;"]),P=(0,o.ZP)(v.ZP).withConfig({displayName:"Search__StyledContainer",componentId:"sc-1akk1k7-3"})(["position:relative;&::before{@media ","{position:absolute;top:-60px;left:40px;width:125px;height:38px;background-image:url('/img/textures/stars.svg');background-repeat:no-repeat;background-size:125px;content:'';}}"],a.w5.desktop),j=o.ZP.p.withConfig({displayName:"Search__StyledVerticalText",componentId:"sc-1akk1k7-4"})(["display:none;pointer-events:none;@media ","{position:absolute;top:0;right:10px;z-index:1;display:block;margin:0;width:10px;overflow:hidden;color:",";font-family:",";font-size:10px;letter-spacing:25px;line-height:46px;text-transform:uppercase;white-space:normal;overflow-wrap:break-word;}"],a.w5.desktop,a.$_.white,a.Vl.shapiro);function _(e){var t=e.placeholder,r=e.isLoading,n=e.options,o=e.onChange;return(0,i.jsxs)(b,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(x,{children:"Explore the marketplace"}),(0,i.jsx)(w,{children:(0,i.jsx)(h.J,{id:"search-tags",instanceId:"search-tags",placeholder:t,isLoading:r,options:n,onChange:o})})]}),(0,i.jsx)(j,{children:"NBA TOPSHOT"})]})}_.defaultProps={placeholder:null,isLoading:!0,options:null,onChange:function(){}};var S=_;var k=function(){var e=(0,c.gV)(),t=(0,p.$)().t,r=(0,f.Z)({isRedirectSearchPage:!0}),n=r.urlQuery,o=r.onUpdateQuery,a=(0,m.Z)({urlQuery:n,onUpdateQuery:o,withUrl:!0,fetchPolicy:"network-only"}),l=a.filters,s=a.onFiltersChange,d=[u.vK.TEAMS,u.vK.PLAYERS,u.vK.SETS];e.tags&&d.push(u.vK.TAGS);var y=(0,g.Z)({filters:l,onFiltersChange:s,types:d,t:t}),h=y.multiSelectFsm,v=y.multiSelectOptions,b=y.onMultiSelectChange;return(0,i.jsx)(S,{placeholder:t("PageSearch.tagsInput.placeholder"),isLoading:h===u.Eb.FETCHING,options:v,onChange:b})},O=r(96486),C=r(27765),Z=r(228),I=r(25730),T=r(18239),N=r(37089),E=o.ZP.section.withConfig({displayName:"SuggestedSearches__StyledSection",componentId:"sc-1gq0hc5-0"})(["margin-bottom:",";padding-top:44px;padding-bottom:52px;overflow:hidden;background-color:",";background-image:url('/img/textures/grey-texture.png');background-position:left center;background-repeat:no-repeat;background-size:auto 100%;@media ","{margin-bottom:",";}"],a.W0[40],a.$_.black[700],a.w5.tablet,a.W0[64]),D=o.ZP.a.withConfig({displayName:"SuggestedSearches__StyledBlock",componentId:"sc-1gq0hc5-1"})(["width:100%;min-width:240px;"]),M=o.ZP.div.withConfig({displayName:"SuggestedSearches__StyledImage",componentId:"sc-1gq0hc5-2"})(["display:flex;align-items:center;justify-content:center;width:100%;height:245px;overflow:hidden;@media ","{height:205px;}& > img{width:100%;height:100%;object-fit:cover;transition:transform 0.3s;}&:hover > img{transform:scale(1.5);}"],a.w5.tablet),L=o.ZP.p.withConfig({displayName:"SuggestedSearches__StyledLabel",componentId:"sc-1gq0hc5-3"})([""," margin-top:12px;margin-bottom:0;width:100%;overflow:hidden;color:",";text-overflow:ellipsis;"],y.ZP.headings.h4,a.$_.white),z=o.ZP.div.withConfig({displayName:"SuggestedSearches__StyledGrid",componentId:"sc-1gq0hc5-4"})(["display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:12px;overflow-x:auto;@media ","{column-gap:24px;overflow:hidden;}"],a.w5.tablet),R=o.ZP.span.withConfig({displayName:"SuggestedSearches__StyledTeamName",componentId:"sc-1gq0hc5-5"})(["text-transform:capitalize;"]),B=o.ZP.div.withConfig({displayName:"SuggestedSearches__StyledTeamBackground",componentId:"sc-1gq0hc5-6"})(["position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:245px;overflow:hidden;background-color:",";background-image:",";background-position:center right -40px;background-repeat:no-repeat;background-size:300px;@media ","{height:205px;}& > img{position:relative;z-index:2;width:100%;max-width:105px;transition:transform 0.3s;}&:hover > img{transform:scale(1.5);}&::before{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background-color:",";content:'';opacity:0.6;}"],(function(e){var t=e.$teamColor;return t&&t}),(function(e){var t=e.$teamLogo;return t&&"url(".concat(t,")")}),a.w5.tablet,(function(e){var t=e.$teamColor;return t&&t}));function F(e){var t=e.contentfulData,r=e.teamData;return(0,i.jsx)(E,{children:(0,i.jsxs)(v.ZP,{children:[(0,i.jsx)(T.Z,{children:"What are you looking for?"}),(0,i.jsxs)(z,{children:[t.map((function(e){var t,r,n,o,a,l,s,d=null===e||void 0===e?void 0:e.fields;return(0,i.jsx)(N.Z,{href:null===d||void 0===d?void 0:d.url,trackingId:"marketplace-SuggestedSearches-block",trackingProperties:{title:null===d||void 0===d?void 0:d.title,image:null===d||void 0===d||null===(r=d.image)||void 0===r||null===(n=r.fields)||void 0===n||null===(o=n.file)||void 0===o?void 0:o.url},passHref:!0,children:(0,i.jsxs)(D,{children:[(0,i.jsx)(M,{children:(0,i.jsx)("img",{alt:null===d||void 0===d?void 0:d.title,src:null===d||void 0===d||null===(a=d.image)||void 0===a||null===(l=a.fields)||void 0===l||null===(s=l.file)||void 0===s?void 0:s.url})}),(0,i.jsx)(L,{children:null===d||void 0===d?void 0:d.title})]})},null===e||void 0===e||null===(t=e.sys)||void 0===t?void 0:t.id)})),!r&&(0,i.jsx)(D,{children:(0,i.jsx)(B,{$teamColor:a.$_.black[500]})}),r&&(0,i.jsx)(N.Z,{href:"/search?byTeams=".concat(null===r||void 0===r?void 0:r.id),trackingId:"marketplace-SuggestedSearches-block",trackingProperties:{title:null===r||void 0===r?void 0:r.slug},passHref:!0,children:(0,i.jsxs)(D,{children:[(0,i.jsx)(B,{$teamColor:null===r||void 0===r?void 0:r.color,$teamLogo:null===r||void 0===r?void 0:r.logo,children:(0,i.jsx)("img",{alt:null===r||void 0===r?void 0:r.slug,src:null===r||void 0===r?void 0:r.logo})}),(0,i.jsxs)(L,{children:[(0,i.jsx)(R,{children:null===r||void 0===r?void 0:r.slug})," Moments"]})]})})]})]})})}F.defaultProps={teamData:void 0};var W=F;function H(e){var t=e.contentfulData,r=(0,Z.Z)(),n=function(e){var t,r=e.currentUser,i=e.currentUserFsm,n=e.currentUserFS,o=(0,I.Nk)();if(i!==n.FETCHING){var a=(0,I.NN)(null===r||void 0===r||null===(t=r.publicInfo)||void 0===t?void 0:t.favoriteTeamID);return a?{id:(0,I.Vz)(a),slug:a,color:(0,I.Ae)(a),logo:(0,C.cl)(a,C.gM)}:{id:(0,I.Vz)(null===o||void 0===o?void 0:o.slug),slug:null===o||void 0===o?void 0:o.slug,color:null===o||void 0===o?void 0:o.color,logo:(0,C.cl)(null===o||void 0===o?void 0:o.slug,C.gM)}}}({currentUser:r.currentUser,currentUserFsm:r.currentUserFsm,currentUserFS:r.FS});return(0,O.isEmpty)(t)?null:(0,i.jsx)(W,{contentfulData:t,teamData:n})}H.defaultProps={contentfulData:null};var $=H,q=r(30121),U=r(92809),V=r(85271);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,U.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q={width:500,quality:80},K=o.ZP.div.withConfig({displayName:"Tier__StyledTier",componentId:"nwwtk-0"})(["display:flex;align-items:center;flex-direction:column;padding:20px;width:","px;height:100%;overflow:hidden;border:"," solid ",";@media ","{width:","px;}"],312,a.ZP.spacing[8],a.ZP.color.black[800],a.ZP.mediaQueries.tablet,282),J=o.ZP.div.withConfig({displayName:"Tier__TierImageContainer",componentId:"nwwtk-1"})(["position:relative;margin-top:20px;margin-bottom:20px;width:250px;height:180px;background-color:#1b1b1b;"]),X=o.ZP.img.withConfig({displayName:"Tier__TierImage",componentId:"nwwtk-2"})(["position:absolute;top:50%;left:50%;width:100%;max-width:250px;height:auto;transform:translate(-50%,-50%);"]),Y=o.ZP.img.withConfig({displayName:"Tier__TierIcon",componentId:"nwwtk-3"})(["display:inline-block;margin-right:8px;width:18px;height:18px;"]),ee=o.ZP.h3.withConfig({displayName:"Tier__TierHeading",componentId:"nwwtk-4"})([""," position:relative;display:flex;align-items:center;margin:0;color:",";font-size:16px;@media ","{font-size:16px;}"],y.ZP.altHeadings.display2,a.ZP.color.white,a.ZP.mediaQueries.tablet),te=o.ZP.hr.withConfig({displayName:"Tier__Divider",componentId:"nwwtk-5"})(["margin-top:16px;margin-bottom:16px;width:100%;border-color:",";"],a.ZP.color.black[300]),re=o.ZP.div.withConfig({displayName:"Tier__EditionGroup",componentId:"nwwtk-6"})(["display:flex;flex-direction:column;align-items:center;"]),ie=o.ZP.span.withConfig({displayName:"Tier__EditionLabel",componentId:"nwwtk-7"})([""," position:relative;color:",";font-size:10px;"],y.ZP.labels.labelVertical,a.ZP.color.grey[800]),ne=o.ZP.div.withConfig({displayName:"Tier__EditionRange",componentId:"nwwtk-8"})(["display:flex;justify-content:center;width:140px;"]),oe=o.ZP.span.withConfig({displayName:"Tier__EditionSize",componentId:"nwwtk-9"})([""," margin-top:6px;margin-bottom:2px;font-size:30px;color:",";@media ","{font-size:30px;}"],y.ZP.altHeadings.jersey,a.ZP.color.white,a.ZP.mediaQueries.tablet),ae=(0,o.ZP)(oe).withConfig({displayName:"Tier__EditionDash",componentId:"nwwtk-10"})(["margin-right:12px;margin-left:12px;"]),le=function(e){var t,r,o,a=e.rarity,l=(0,c.gV)(),s=(0,p.$)().t,d=function(e,t){var r={common:{heading:"MarketplacePage.SearchByTiers.Common.heading",image:"https://assets.nbatopshot.com/resize/editions/1_base_set_common/f552b506-b41d-4e7c-ac5a-59427f9e96e6/play_f552b506-b41d-4e7c-ac5a-59427f9e96e6_1_base_set_common_capture_Hero_2880_2880_Black.jpg",icon:"/static/img/momentRarity/RarityCommon.svg",edition:{min:"MarketplacePage.SearchByTiers.Common.min"},href:"search?bySetVisuals=SET_VISUAL_COMMON"}};return t&&(r.fandom={heading:"MarketplacePage.SearchByTiers.Fandom.heading",image:"https://assets.nbatopshot.com/editions/3_summer_of_21_fandom/e8ce7991-48c3-4753-9732-f3a0ee42360d/play_e8ce7991-48c3-4753-9732-f3a0ee42360d_3_summer_of_21_fandom_capture_Hero_2880_2880_Black.jpg",icon:"/static/img/momentRarity/RarityFandom.svg",href:"search?bySetVisuals=SET_VISUAL_FANDOM"}),(r=G(G({},r),{},{rare:{heading:"MarketplacePage.SearchByTiers.Rare.heading",image:"https://assets.nbatopshot.com/resize/editions/1_metallic_gold_le_rare/46b46192-21f7-4b69-bf9c-b70eec06f83d/play_46b46192-21f7-4b69-bf9c-b70eec06f83d_1_metallic_gold_le_rare_capture_Hero_2880_2880_Black.jpg",icon:"/static/img/momentRarity/RarityRare.svg",edition:{min:"MarketplacePage.SearchByTiers.Rare.min"},href:"search?bySetVisuals=SET_VISUAL_RARE"},legendary:{heading:"MarketplacePage.SearchByTiers.Legendary.heading",image:"https://assets.nbatopshot.com/resize/editions/1_holo_mmxx_legendary/de32d3fb-0e6a-447e-b42a-08bbf1607b7d/play_de32d3fb-0e6a-447e-b42a-08bbf1607b7d_1_holo_mmxx_legendary_capture_Hero_2880_2880_Black.jpg",icon:"/static/img/momentRarity/RarityLegendary.svg",edition:{min:"MarketplacePage.SearchByTiers.Legendary.min"},href:"search?bySetVisuals=SET_VISUAL_LEGENDARY"}}))[e]}(a,l.tierFandom),u=s("MarketplacePage.SearchByTiers.EditionSize"),m=s("MarketplacePage.SearchByTiers.Fandom.dynamic"),g=s("MarketplacePage.SearchByTiers.Min"),f=s("MarketplacePage.SearchByTiers.Max"),y=s(d.heading),h=s(null===(t=d.edition)||void 0===t?void 0:t.min),v=(null===(r=d.edition)||void 0===r?void 0:r.max)?s(null===(o=d.edition)||void 0===o?void 0:o.max):void 0;return(0,i.jsx)(N.Z,{href:d.href,passHref:!0,trackingId:"Marketplace-ByTiers",children:(0,i.jsx)("a",{children:(0,i.jsxs)(K,{children:[(0,i.jsx)(J,{children:(0,i.jsx)(X,{src:(0,V.gJ)(d.image,Q),alt:y})}),(0,i.jsxs)(ee,{children:[(0,i.jsx)(Y,{src:d.icon,alt:y}),y]}),(0,i.jsx)(te,{}),(0,i.jsx)(ie,{children:u}),(0,i.jsxs)(ne,{children:[(0,i.jsxs)(re,{children:[(0,i.jsx)(oe,{children:"fandom"===a?m:h}),"fandom"!==a&&(0,i.jsx)(ie,{children:g})]}),v&&(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)(ae,{children:"-"}),(0,i.jsxs)(re,{children:[(0,i.jsx)(oe,{children:v}),(0,i.jsx)(ie,{children:f})]})]})]})]})})})},se=(0,o.ZP)(v.ZP).withConfig({displayName:"Tiers__Root",componentId:"sc-1yd1vln-0"})(["margin-top:20px;padding-bottom:48px;@media ","{margin-top:40px;}"],a.ZP.mediaQueries.tablet),de=o.ZP.div.withConfig({displayName:"Tiers__Grid",componentId:"sc-1yd1vln-1"})(["display:grid;grid-template-columns:",";width:100%;overflow:auto;@media ","{grid-gap:",";}"],(function(e){var t=e.isFlagTierFandom;return"repeat(".concat(t?4:3,", 1fr)")}),a.ZP.mediaQueries.tablet,a.ZP.spacing[24]),ce=function(){var e=(0,c.gV)(),t=(0,p.$)().t;return(0,i.jsxs)(se,{children:[(0,i.jsx)(q.ZP,{as:"h2",variant:"h3",color:"white",gutterBottom:a.ZP.spacing[24],children:t("MarketplacePage.SearchByTiers.Heading")}),(0,i.jsxs)(de,{isFlagTierFandom:e.tierFandom,children:[(0,i.jsx)(le,{rarity:"common"}),e.tierFandom&&(0,i.jsx)(le,{rarity:"fandom"}),(0,i.jsx)(le,{rarity:"rare"}),(0,i.jsx)(le,{rarity:"legendary"})]})]})},pe=r(47734),ue=function(){var e=(0,Z.Z)().currentUser;return(0,i.jsx)(pe.Z,{currentUser:e})},me=r(45432),ge=r(14214),fe=r(72970),ye=r(809),he=r.n(ye),ve=r(30266),be=r(76752),xe=r(87157),we=r(84441),Pe=r(19627),je=r(10294),_e=r(8132),Se=r(55403),ke=r(56420);function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(r),!0).forEach((function(t){(0,U.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ze=(0,o.ZP)(je.Z.Title).withConfig({displayName:"Header__StyledTitle",componentId:"sc-14ciuff-0"})(["& h3{margin-bottom:",";font-size:21px;}"],a.W0[4]),Ie=(0,o.ZP)(Se.Z).withConfig({displayName:"Header__StyledLabel",componentId:"sc-14ciuff-1"})(["font-weight:bold;"]);function Te(e){var t=e.set,r=e.totalCount,n=(0,_e.Z)(e,["set","totalCount"]),o=(0,p.$)().t,l=ke.zC[t.setVisualId];return(0,i.jsxs)(je.Z.Header,Ce(Ce({},n),{},{children:[(0,i.jsx)(Ze,{title:null===t||void 0===t?void 0:t.title}),(0,i.jsxs)(Ie,{variant:"labelSmall",color:a.$_.white,children:[r||""," ",o(l)," ",o("SearchBySets.SetCard.Header.moments",{count:r})]})]}))}Te.defaultProps={totalCount:0};var Ne=Te,Ee=r(95203),De=(0,o.ZP)(je.Z.ContentContainer).withConfig({displayName:"SetCard__StyledContentContainer",componentId:"duz0zz-0"})(["grid-template-areas:'media header';grid-template-columns:8fr 10fr;grid-gap:",";@media ","{grid-template-areas:'media' 'header';grid-template-columns:1fr;}"],a.eC.gap,a.w5.tablet);function Me(e){var t=e.set,r=e.setsInformation,o=e.totalCount,a=e.isCodexSetCard,l=(0,n.useMemo)((function(){var e;if(!(0,O.isEmpty)(null===r||void 0===r?void 0:r.setData))return r.setData[t.id]&&(null===(e=r.setData[t.id])||void 0===e?void 0:e.banner)?r.setData[t.id].banner:null}),[r,t.id]);return(0,i.jsxs)(De,{children:[(0,i.jsx)(Ee.Z,{set:t,bannerText:l,isCodexSetCard:a}),(0,i.jsx)(Ne,{set:t,totalCount:o})]})}Me.defaultProps={setsInformation:void 0,isCodexSetCard:void 0,totalCount:void 0};var Le=Me;function ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(r),!0).forEach((function(t){(0,U.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Be=(0,Pe.Z)(),Fe=o.ZP.div.withConfig({displayName:"Sets__StyledRoot",componentId:"sc-10d3tyk-0"})(["display:grid;grid-gap:"," ",";padding:0 ",";@media ","{grid-template-columns:repeat(4,1fr);}@media ","{grid-gap:"," ",";}"],a.W0[48],a.W0[24],a.W0[16],a.w5.tablet,a.w5.mobileOnly,a.W0[40],a.W0[24]);var We=function(e){var t,r=e.codexSets,o=(0,n.useState)({}),a=o[0],l=o[1];(0,n.useEffect)((function(){function e(){return(e=(0,ve.Z)(he().mark((function e(){var t;return he().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Be.getEntry((0,we.$)(s.fc));case 3:t=e.sent,l(t.fields),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,be.Tb)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var d=(0,n.useRef)((0,O.shuffle)(r).slice(0,4));return(0,i.jsx)(Fe,{children:null===(t=d.current)||void 0===t?void 0:t.map((function(e){var t=e.set,r=(0,xe.gx)({bySets:[t.id]});return(0,i.jsx)(N.Z,{href:r,as:r,passHref:!0,trackingId:"Marketplace-SetCard-Clicked",trackingProperties:{setId:t.id},children:(0,i.jsx)("a",{children:(0,i.jsx)(Le,Re({setsInformation:a},e))})},t.id)}))})},He=function(){var e,t=(0,ge.Z)({}),r=t.codex,n=t.fsm,o=t.FS;return n===o.IDLE||n===o.FETCHING||n===o.ERROR?null:(0,i.jsx)(We,{codexSets:null===(e=(0,fe.Z)(r))||void 0===e?void 0:e.codexSets})},$e=o.ZP.div.withConfig({displayName:"SearchBySets__StyledRoot",componentId:"nccwio-0"})(["padding-top:",";padding-bottom:",";background-color:",";@media ","{padding-top:",";padding-bottom:",";}"],a.W0[40],a.W0[40],a.$_.black[700],a.w5.tablet,a.W0[80],a.W0[120]),qe=o.ZP.div.withConfig({displayName:"SearchBySets__StyledTitleContainer",componentId:"nccwio-1"})(["margin-bottom:",";padding-right:",";padding-left:",";"],a.W0[28],a.W0[16],a.W0[16]);var Ue=function(){var e=(0,p.$)().t;return(0,i.jsx)($e,{children:(0,i.jsxs)(v.ZP,{children:[(0,i.jsxs)(qe,{children:[(0,i.jsx)(q.ZP,{gutterBottom:a.W0[16],color:a.$_.white,as:"h2",variant:"h3",children:e("MarketplacePage.SearchBySets.title")}),(0,i.jsx)(me.Z,{color:a.$_.white,children:e("MarketplacePage.SearchBySets.description")})]}),(0,i.jsx)(He,{})]})})},Ve=o.ZP.div.withConfig({displayName:"PlayerCardStyles__StyledPlayerCard",componentId:"o7lry3-0"})(["position:relative;padding-top:130%;width:100%;overflow:hidden;&:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;display:block;background-color:rgba(13,13,15,0.25);content:' ';}",""],(function(e){return e.hover&&(0,o.iv)(["&:hover{","{transform:scale(1.1);}}"],Ae)})),Ae=o.ZP.img.withConfig({displayName:"PlayerCardStyles__StyledImg",componentId:"o7lry3-1"})(["position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;object-fit:cover;transition:transform 0.3s;"]),Ge=o.ZP.a.withConfig({displayName:"PlayerCardStyles__StyledLink",componentId:"o7lry3-2"})(["display:block;"]),Qe=o.ZP.div.withConfig({displayName:"PlayerCardStyles__StyledContent",componentId:"o7lry3-3"})(["position:absolute;top:0;left:0;z-index:5;display:flex;align-items:center;flex-direction:column;justify-content:center;padding:10px;width:100%;height:100%;color:white;text-shadow:0 2px 4px rgba(0,0,0,0.5);"]),Ke=o.ZP.span.withConfig({displayName:"PlayerCardStyles__StyledNumber",componentId:"o7lry3-4"})(["margin-bottom:auto;width:100%;font-family:",";font-size:35px;letter-spacing:2px;text-align:right;@media ","{font-size:43px;}"],a.Vl.aldoTheApache,a.w5.tablet),Je=o.ZP.span.withConfig({displayName:"PlayerCardStyles__StyledPosition",componentId:"o7lry3-5"})(["width:100%;font-family:",";font-size:14px;text-transform:uppercase;@media ","{font-size:16px;}"],a.Vl.shapiro,a.w5.tablet),Xe=o.ZP.span.withConfig({displayName:"PlayerCardStyles__StyledName",componentId:"o7lry3-6"})(["position:relative;margin-bottom:10px;padding-bottom:14px;width:100%;font-weight:",";font-size:12px;text-transform:uppercase;@media ","{font-size:18px;}&::after{position:absolute;bottom:0;left:0;width:18px;height:5px;background-color:white;content:'';box-shadow:0 2px 4px 0 rgba(0,0,0,0.5);}"],a.vC.shapiro[65],a.w5.desktop);function Ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function et(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(r),!0).forEach((function(t){(0,U.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function tt(e){var t=e.player;if(!t)return null;var r=t.link,n=t.img,o=t.name,a=t.number,l=t.position,s=t.id,d=function(){return(0,i.jsxs)(Qe,{children:[(0,i.jsx)(Ke,{children:a}),(0,i.jsx)(Je,{children:l}),(0,i.jsx)(Xe,{children:o})]})},c="/search?byPlayers=".concat(s);return(0,i.jsxs)(Ve,{hover:!!r,children:[(0,i.jsx)(Ae,{src:n,alt:o}),r?(0,i.jsx)(N.Z,{as:c,href:c,passHref:!0,trackingId:"TeamsPage-Player-Click",trackingProperties:et({},t),children:(0,i.jsx)(Ge,{children:d()})}):d()]})}tt.defaultProps={};var rt=tt,it=o.ZP.div.withConfig({displayName:"PlayersGrid__StyledPlayerGrid",componentId:"sc-1e0fuva-0"})(["display:grid;grid-template-columns:repeat(2,1fr);gap:",";@media ","{grid-template-columns:repeat(5,1fr);column-gap:10px;}"],a.W0[20],a.w5.tablet),nt=o.ZP.div.withConfig({displayName:"PlayersGrid__StyledCardContainer",componentId:"sc-1e0fuva-1"})(["&:nth-child(6){@media ","{display:none;}}"],a.w5.tablet);function ot(e){var t=e.featuredPlayers;return(0,i.jsx)(it,{children:null===t||void 0===t?void 0:t.players.map((function(e){var t,r,n=e.fields,o=n.link,a=n.name,l=n.playerNumber,s=n.id,d=n.position,c=n.photo;return(0,i.jsx)(nt,{children:(0,i.jsx)(rt,{player:{id:s,link:o,img:null===c||void 0===c||null===(t=c.fields)||void 0===t||null===(r=t.file)||void 0===r?void 0:r.url,name:a,number:l,position:d}})},"".concat(a,"-").concat(l,"-").concat(d))}))})}ot.defaultProps={featuredPlayers:null};var at=ot,lt=(0,Pe.Z)(),st=function(e){var t=e.slug,r=(0,n.useState)(null),o=r[0],a=r[1];return(0,n.useEffect)((function(){(function(){var e=(0,ve.Z)(he().mark((function e(){var r,i,n;return he().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,lt.getEntries({"fields.slug":t,content_type:"bestPlayers"});case 3:if(e.t1=r=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===r;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=null===(i=r.items[0])||void 0===i?void 0:i.fields;case 12:(n=e.t2)&&a(n),e.next=19;break;case 16:e.prev=16,e.t3=e.catch(0),(0,be.Tb)(e.t3);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),(0,O.isEmpty)(o)||o.players.length<=4?null:(0,i.jsx)(at,{featuredPlayers:o})},dt=o.ZP.div.withConfig({displayName:"SearchByPlayers__StyledRoot",componentId:"zio5jq-0"})(["padding-top:",";padding-bottom:",";@media ","{padding-top:",";padding-bottom:",";}"],a.W0[40],a.W0[48],a.w5.tablet,a.W0[80],a.W0[120]),ct=o.ZP.div.withConfig({displayName:"SearchByPlayers__StyledTitleContainer",componentId:"zio5jq-1"})(["margin-bottom:",";padding-right:",";"],a.W0[28],a.W0[16]);var pt=function(){var e=(0,p.$)().t;return(0,i.jsx)(dt,{children:(0,i.jsxs)(v.ZP,{children:[(0,i.jsx)(ct,{children:(0,i.jsx)(q.ZP,{gutterBottom:a.W0[16],color:a.$_.white,as:"h2",variant:"h3",children:e("MarketplacePage.SearchByPlayers.title")})}),(0,i.jsx)(st,{slug:"marketplace"})]})})},ut=r(21783),mt=o.ZP.div.withConfig({displayName:"marketplace__MarketplacePage",componentId:"jlx37j-0"})(["flex:1;background-color:",";"],a.ZP.color.trueBlack);var gt=function(){var e,t=(0,d.Z)(l.u2,s.Nl).data;return(0,i.jsxs)(mt,{children:[(0,i.jsx)(k,{}),(0,i.jsx)($,{contentfulData:null===t||void 0===t||null===(e=t.fields)||void 0===e?void 0:e.preFiltersSection}),(0,i.jsx)(ut.Z,{}),(0,i.jsx)(ce,{}),(0,i.jsx)(Ue,{}),(0,i.jsx)(pt,{}),(0,i.jsx)(ue,{})]})}},18239:function(e,t,r){"use strict";var i=r(8997),n=r(99254),o=r(20346),a=i.ZP.h2.withConfig({displayName:"ArrowHeading",componentId:"cacf6h-0"})([""," position:relative;margin:0 auto 40px;max-width:300px;text-transform:uppercase;text-align:center;color:",";@media ","{max-width:fit-content;}&::before,&::after{position:absolute;top:0;width:54px;height:37.5px;background-image:url('/img/textures/arrows.svg');background-repeat:no-repeat;content:'';}&::before{left:-25px;@media ","{left:-60px;}@media ","{left:-80px;}}&::after{right:-25px;transform:rotate(180deg);@media ","{right:-60px;}@media ","{right:-80px;}}"],o.ZP.altHeadings.display3,(function(e){return e.color||n.$_.white}),n.w5.tablet,n.w5.tablet,n.w5.desktop,n.w5.tablet,n.w5.desktop);t.Z=a},83650:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketplace",function(){return r(23741)}])},37176:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(67294);function n(e){var t=(0,i.useRef)();return(0,i.useEffect)((function(){t.current=e})),t.current}}},function(e){e.O(0,[5504,4925,7430,9015,9774,2888,179],(function(){return t=83650,e(e.s=t);var t}));var t=e.O();_N_E=t}]);