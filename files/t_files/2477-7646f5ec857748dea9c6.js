"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2477],{6632:function(e,n,t){t.d(n,{Z:function(){return G}});var i=t(85893),a=t(67294),o=t(7090),l=t(91717),r=t(8997),d=t(99254),s=t(78215),c=t(56207),m=t(45825),u=t(51130),p=t(54469),g=t(29679),v=t(15410),y=t(40629),h=t(70083),x=t(59604),f=t(1503),P=t(49268),Z=t(71390),b=t(87157),j=t(37089),I=t(92809),w=t(8132),S=t(20346);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,I.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=r.ZP.div.withConfig({displayName:"Tag__StyledTag",componentId:"sc-1xb58ya-0"})(["padding:"," ",";color:",";line-height:",";text-align:center;background-color:",";border-radius:",";"],d.ZP.spacing[8],d.ZP.spacing[12],d.ZP.color.white,d.ZP.lineHeight.sm,d.ZP.color.brand[500],d.ZP.spacing[24]),N=r.ZP.span.withConfig({displayName:"Tag__TagText",componentId:"sc-1xb58ya-1"})(["",""],S.Ok.tag),M=r.ZP.div.withConfig({displayName:"Tag__TagsWrapper",componentId:"sc-1xb58ya-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:",";","{margin-right:",";margin-bottom:",";}"],d.ZP.spacing[8],D,d.ZP.spacing[16],d.ZP.spacing[16]),O=function(e){var n=e.children,t=(0,w.Z)(e,["children"]);return(0,i.jsx)(D,C(C({},t),{},{children:(0,i.jsx)(N,{children:n})}))},T=function(e){var n=e.tag;return n?(0,i.jsx)(j.Z,{href:(0,b.gx)({byTagNames:[n.name]}),as:(0,b.gx)({byTagNames:[n.name]}),passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(O,{children:n.name},"tag-".concat(n.id))})}):null},k=t(57223),E=function(e){var n,t=e.moment,l=(0,o.$)().t,r=null===t||void 0===t||null===(n=t.mold)||void 0===n?void 0:n.tags;return r?(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(k.Z.H1,{as:"h3",variant:"outline",gutterBottom:d.W0[12],children:l("MomentDetailed.tags.title")}),(0,i.jsx)(M,{children:r.map((function(e){return(0,i.jsx)(T,{tag:e},"tag-".concat(e.id))}))})]}):null},L=t(36326),A=t(58459),F=r.ZP.div.withConfig({displayName:"MomentDetailed_deprecated__HeaderWrapper",componentId:"sc-1qeyyn1-0"})(["background-color:",";"],d.ZP.color.trueBlack),B=(0,r.ZP)(c.ZP).withConfig({displayName:"MomentDetailed_deprecated__HeaderArea",componentId:"sc-1qeyyn1-1"})(["display:grid;grid-template-columns:1fr;grid-template-areas:'headerBanner' 'headerImage' 'headerInsert';gap:",";padding:"," "," ",";width:100%;@media ","{--vPad:2vw;grid-template-columns:repeat(2,1fr);grid-template-rows:auto 1fr;grid-template-areas:'headerImage headerBanner' 'headerImage headerInsert';column-gap:70px;row-gap:40px;padding:calc(var(--vPad) + ",") ",";}@media ","{--vPad:4vw;padding-bottom:60px;}",""],d.ZP.spacing[24],d.ZP.spacing[20],d.ZP.spacing[16],d.ZP.spacing[44],d.ZP.mediaQueries.tablet,d.ZP.spacing[16],d.ZP.spacing[16],d.ZP.mediaQueries.desktop,(function(e){return!!e.$isFeaturedPlayer&&Q})),Q=(0,r.iv)(["grid-template-areas:'headerPlayerAvatar' 'headerBanner' 'headerImage' 'headerInsert';@media ","{grid-template-areas:'headerImage headerPlayerAvatar' 'headerImage headerBanner' 'headerImage headerInsert' 'headerImage headerInsert';row-gap:16px;}"],d.ZP.mediaQueries.tablet),$=r.ZP.div.withConfig({displayName:"MomentDetailed_deprecated__HeaderImage",componentId:"sc-1qeyyn1-2"})(["display:flex;grid-area:headerImage;flex-direction:column;justify-content:start;@media ","{justify-content:center;margin:"," 0;}"],d.ZP.mediaQueries.tablet,d.ZP.spacing[20]),H=(0,r.ZP)(h.Z).withConfig({displayName:"MomentDetailed_deprecated__HeaderBanner",componentId:"sc-1qeyyn1-3"})(["position:relative;grid-area:headerBanner;align-self:center;@media ","{margin-top:",";}"],d.ZP.mediaQueries.tablet,(function(e){return e.$isFeaturedPlayer?"0":d.ZP.spacing[44]})),R=r.ZP.div.withConfig({displayName:"MomentDetailed_deprecated__HeaderInsert",componentId:"sc-1qeyyn1-4"})(["position:relative;grid-area:headerInsert;width:100%;max-width:400px;justify-self:center;@media ","{justify-self:start;}"],d.ZP.mediaQueries.tablet),q=r.ZP.div.withConfig({displayName:"MomentDetailed_deprecated__StyledMomentDetails",componentId:"sc-1qeyyn1-5"})(["grid-area:momentDetails;padding:"," 0;"],d.ZP.spacing[32]),W=r.ZP.div.withConfig({displayName:"MomentDetailed_deprecated__StyledAvatar",componentId:"sc-1qeyyn1-6"})(["grid-area:headerPlayerAvatar;width:70px;"]),U=function(e){var n=e.moment,t=e.fsm,a=e.FS,r=e.headerInsert,d=e.showDetails,h=e.headerRef,b=e.playerId,j=(0,o.$)().t,I=(0,l.gV)();return t===a.IDLE||t===a.FETCHING?(0,i.jsx)(A.Z,{"data-testid":"moment-detailed-loading"}):t===a.ERROR?(0,i.jsx)(p.Z,{"data-testid":"moment-detailed-error"}):n?(0,i.jsxs)("div",{"data-testid":"moment-detailed",children:[(0,i.jsx)(F,{ref:h,children:(0,i.jsxs)(B,{$isFeaturedPlayer:!!b,children:[(0,i.jsx)($,{children:(0,i.jsx)(x.Z,{moment:n})}),b&&(0,i.jsx)(W,{children:(0,i.jsx)(m.Z,{playerId:b})}),(0,i.jsx)(H,{$isFeaturedPlayer:!!b,moment:n}),(0,i.jsx)(R,{children:(0,i.jsx)(u.Z,{children:r})})]})}),d&&(0,i.jsx)(c.ZP,{children:(0,i.jsxs)(q,{children:[(0,i.jsx)(s.Z,{summaryAs:"h2",summary:j("MomentDetailed.CollectibleDetails.title"),children:(0,i.jsx)(v.Z,{moment:n})}),(0,i.jsxs)(s.Z,{summaryAs:"h2",summary:j("MomentDetailed.HighlightStats.title"),children:[(0,i.jsx)(L.Z,{moment:n}),(0,i.jsx)(f.Z,{moment:n}),(0,i.jsx)(Z.Z,{moment:n})]}),(0,i.jsxs)(s.Z,{summaryAs:"h2",summary:j("MomentDetailed.PlayerStats.title"),children:[(0,i.jsx)(y.Z,{moment:n}),(0,i.jsx)(P.Z,{moment:n})]}),I.tags&&(0,i.jsx)(E,{moment:n})]})})]}):(0,i.jsx)(g.default,{"data-testid":"moment-detailed-not-found"})};U.defaultProps={moment:null,FS:{IDLE:"IDLE",FETCHING:"FETCHING",SUCCESS:"SUCCESS",ERROR:"ERROR"},headerInsert:function(){},showDetails:!0,headerRef:void 0,playerId:null};var G=U},82477:function(e,n,t){t.d(n,{W:function(){return ne},Z:function(){return te}});var i=t(85893),a=t(67294),o=t(96486),l=t(46829),r=t(91717),d=t(66040),s=t(32503),c=t(98398),m=t(86817),u=t(42328),p=t(52209),g=t(89289);function v(){var e=(0,p.Z)(['\n  query MomentsExplorer($bySets: [ID], $byPlays: [ID]) {\n    searchMintedMoments(\n      input: {\n        sortBy: PRICE_USD_ASC\n        filters: { bySets: $bySets, byPlays: $byPlays, byForSale: FOR_SALE }\n        searchInput: { pagination: { cursor: "", direction: RIGHT, limit: 1 } }\n      }\n    ) {\n      data {\n        searchSummary {\n          data {\n            ... on MintedMoments {\n              size\n              data {\n                ...MomentDetails\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ',"\n"]);return v=function(){return e},e}function y(){var e=(0,p.Z)(["\n  fragment MomentDetails on MintedMoment {\n    id\n    assetPathPrefix\n    price\n    flowSerialNumber\n    tags {\n      ...TagsFragment\n    }\n    set {\n      id\n    }\n    setPlay {\n      ID\n      tags {\n        ...TagsFragment\n      }\n      circulations {\n        circulationCount\n      }\n    }\n    play {\n      id\n      stats {\n        playerID\n        playerName\n        dateOfMoment\n        playCategory\n      }\n      tags {\n        ...TagsFragment\n      }\n    }\n  }\n  ","\n"]);return y=function(){return e},e}function h(){var e=(0,p.Z)(["\n  fragment TagsFragment on Tag {\n    id\n    title\n    visible\n    level\n  }\n"]);return h=function(){return e},e}var x=(0,g.ZP)(h()),f=(0,g.ZP)(y(),x),P=(0,g.ZP)(v(),f),Z=t(8997),b=t(99254),j=t(56207),I=t(48605),w=t(19709),S=t(20346),_=t(2611),C=t(45432),D=t(75363),N=t(6632),M=t(69480),O=t(37089),T=Z.ZP.h2.withConfig({displayName:"MomentSection__StyledHeading",componentId:"sc-1ikxvxb-0"})([""," display:flex;align-items:center;margin-top:0;margin-bottom:",";text-transform:uppercase;color:",";@media ","{font-size:26px;}"],S.ZP.altHeadings.display3,b.W0[12],b.$_.white,b.w5.tablet),k=Z.ZP.span.withConfig({displayName:"MomentSection__StyledPriceLabel",componentId:"sc-1ikxvxb-1"})([""," display:block;margin-bottom:14px;color:",";"],S.ZP.body.bodySmall,b.$_.grey[700]),E=Z.ZP.span.withConfig({displayName:"MomentSection__StyledLegalText",componentId:"sc-1ikxvxb-2"})([""," color:",";"],S.ZP.body.bodyMedium,b.$_.grey[700]),L=Z.ZP.div.withConfig({displayName:"MomentSection__StyledDetails",componentId:"sc-1ikxvxb-3"})(["display:flex;flex-direction:column;width:100%;height:100%;min-height:",";"],(function(e){return e.$isPriceDisplay?"320px":"auto"})),A=Z.ZP.div.withConfig({displayName:"MomentSection__StyledButtonContainer",componentId:"sc-1ikxvxb-4"})(["margin-top:",";margin-bottom:14px;padding-bottom:10px;@media ","{margin-top:auto;}"],(function(e){return e.$isSoldOut?"12px":"auto"}),b.w5.tablet),F=(0,Z.ZP)(_.Z).withConfig({displayName:"MomentSection__StyledSoldOutButton",componentId:"sc-1ikxvxb-5"})(["width:100%;"]),B=Z.ZP.p.withConfig({displayName:"MomentSection__StyledSoldOutLabel",componentId:"sc-1ikxvxb-6"})([""," display:inline-block;margin:0 0 0 12px;padding:2px 4px;color:",";text-transform:uppercase;letter-spacing:0;background-color:#f52486;"],S.ZP.labels.labelLong,b.$_.white),Q=(0,Z.ZP)(C.Z).withConfig({displayName:"MomentSection__StyledRecentlySold",componentId:"sc-1ikxvxb-7"})(["margin-top:",";"],b.W0[12]);function $(e){var n=e.momentListing,t=e.momentSectionData,l=e.isLoading,d=(0,w.O)(),s=(0,r.gV)();return(0,i.jsx)(N.Z,{fsm:l?"FETCHING":"SUCCESS",moment:n,showDetails:!1,headerInsert:(0,i.jsxs)(L,{$isPriceDisplay:null===t||void 0===t?void 0:t.isPriceDisplay,children:[(0,i.jsxs)(T,{children:[null===t||void 0===t?void 0:t.rarity,!(null===t||void 0===t?void 0:t.price)&&(0,i.jsx)(B,{children:"Sold out"})]}),!!(null===t||void 0===t?void 0:t.serialAndCirculation)&&(0,i.jsx)(T,{children:null===t||void 0===t?void 0:t.serialAndCirculation}),(0,i.jsxs)(A,{$isSoldOut:!(null===t||void 0===t?void 0:t.price),children:[(null===t||void 0===t?void 0:t.isPriceDisplay)&&!!(null===t||void 0===t?void 0:t.price)&&(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(D.Z,{price:null===t||void 0===t?void 0:t.price}),(0,i.jsx)(k,{children:"Lowest Ask"})]}),(0,o.isEmpty)(n)?(0,i.jsx)(F,{disabled:!0,children:null===t||void 0===t?void 0:t.soldOutCtaText}):(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(O.Z,{passHref:!0,href:"/moment/".concat(null===t||void 0===t?void 0:t.momentID),children:(0,i.jsx)(_.Z,{as:"a",variant:"secondary",children:null===t||void 0===t?void 0:t.buyButtonText})}),(0,i.jsx)(M.Z,{moment:n})]})]}),(null===t||void 0===t?void 0:t.description)&&d&&(0,i.jsx)(Q,{color:b.$_.white,weight:b.vC.shapiro[65],gutterBottom:!0,dangerouslySetInnerHTML:{__html:(0,I.T)(null===t||void 0===t?void 0:t.description)}}),(0,i.jsx)(E,{children:(null===s||void 0===s?void 0:s.landingPageFA4D00)?"Officially licensed product of the WNBPA and NBPA":"Officially licensed product of the National Basketball Players Association."})]},null===t||void 0===t?void 0:t.momentID)})}$.defaultProps={momentSectionData:null,momentListing:null,isLoading:!0};var H=$,R=t(96946),q=(0,Z.iv)(["position:absolute;top:43%;z-index:9;display:flex;align-items:center;width:56px;height:70px;color:white;cursor:pointer;transform:translateY(-50%);@media ","{top:50%;}"],b.w5.tablet),W=Z.ZP.a.withConfig({displayName:"Arrows__StyledLeftButton",componentId:"sc-1oswqmg-0"})([""," left:0;justify-content:flex-end;"],q),U=Z.ZP.a.withConfig({displayName:"Arrows__StyledRightButton",componentId:"sc-1oswqmg-1"})([""," right:0;"],q),G=(0,Z.iv)([""," position:absolute;padding-bottom:4px;text-transform:uppercase;color:",";border-bottom:1px solid white;"],S.ZP.links.button,b.$_.white),z=Z.ZP.div.withConfig({displayName:"Arrows__StyledLeftButtonLabel",componentId:"sc-1oswqmg-2"})([""," left:-18px;transform:rotate(-90deg);"],G),V=Z.ZP.div.withConfig({displayName:"Arrows__StyleRightButtonLabel",componentId:"sc-1oswqmg-3"})([""," right:0;transform:rotate(90deg);"],G);function Y(e){var n=e.handlePreviousQuery,t=e.handleNextQuery;return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsxs)(W,{onClick:function(){return n()},children:[(0,i.jsx)(z,{children:"Previous"}),(0,i.jsx)(R.Z.ArrowFlat,{isCssColor:!0})]}),(0,i.jsxs)(U,{onClick:function(){return t()},children:[(0,i.jsx)(V,{children:"Next"}),(0,i.jsx)(R.Z.ArrowFlat,{flip:"x",isCssColor:!0})]})]})}Y.defaultProps={handlePreviousQuery:function(){},handleNextQuery:function(){}};var J=Y,K=(0,Z.ZP)(j.ZP).withConfig({displayName:"MomentExplorer__StyledContent",componentId:"sc-1rrfhx2-0"})(["position:relative;padding:0;@media ","{padding-right:40px;padding-left:40px;}"],b.w5.tablet);function X(e){var n=e.handlePreviousQuery,t=e.handleNextQuery,a=e.momentIndex,o=e.momentListing,l=e.momentSectionData,r=e.isLoading;return(0,i.jsxs)(K,{children:[(0,i.jsx)(J,{handlePreviousQuery:n,handleNextQuery:t,momentIndex:a}),(0,i.jsx)(H,{isLoading:r,momentListing:o,momentSectionData:l})]})}X.defaultProps={momentIndex:0,handlePreviousQuery:null,handleNextQuery:null,momentSectionData:null,momentListing:null,isLoading:!0};var ee=X;function ne(e){var n,t,r,s,m,u,p,g,v,y,h,x,f,Z,b,j,I,w,S,_,C,D,N,M,O=e.editionsCollection,T=(0,a.useState)(0),k=T[0],E=T[1],L=(0,a.useState)(null===O||void 0===O||null===(n=O[0])||void 0===n||null===(t=n.fields)||void 0===t?void 0:t.setID),A=L[0],F=L[1],B=(0,a.useState)(null===O||void 0===O||null===(r=O[0])||void 0===r||null===(s=r.fields)||void 0===s?void 0:s.playID),Q=B[0],$=B[1],H=null===O||void 0===O?void 0:O.length;(0,a.useEffect)((function(){var e,n,t,i;F(null===O||void 0===O||null===(e=O[k])||void 0===e||null===(n=e.fields)||void 0===n?void 0:n.setID),$(null===O||void 0===O||null===(t=O[k])||void 0===t||null===(i=t.fields)||void 0===i?void 0:i.playID)}),[O,k]);var R=(0,l.useQuery)(P,{variables:{bySets:[A],byPlays:[Q]},skip:!A||!Q}),q=R.loading,W=R.error,U=R.data,G=null===U||void 0===U||null===(m=U.searchMintedMoments)||void 0===m||null===(u=m.data)||void 0===u||null===(p=u.searchSummary)||void 0===p||null===(g=p.data)||void 0===g||null===(v=g.data)||void 0===v?void 0:v[0],z=(0,o.isEmpty)(G),V={momentID:null===G||void 0===G?void 0:G.id,setID:null===G||void 0===G||null===(y=G.set)||void 0===y?void 0:y.id,playID:null===G||void 0===G||null===(h=G.play)||void 0===h?void 0:h.id,price:z?null:(0,d.OT)((0,c.Qb)(G),"USD","omitUSD"),serialAndCirculation:z?null:"".concat((0,c.g5)(G),"/").concat(null===G||void 0===G||null===(x=G.setPlay)||void 0===x||null===(f=x.circulations)||void 0===f?void 0:f.circulationCount),rarity:null===O||void 0===O||null===(Z=O[k])||void 0===Z||null===(b=Z.fields)||void 0===b?void 0:b.rarity,description:null===O||void 0===O||null===(j=O[k])||void 0===j||null===(I=j.fields)||void 0===I?void 0:I.description,buyButtonText:null!==(w=null===O||void 0===O||null===(S=O[k])||void 0===S||null===(_=S.fields)||void 0===_?void 0:_.buyCtaText)&&void 0!==w?w:"check moment",soldOutCtaText:null===O||void 0===O||null===(C=O[k])||void 0===C||null===(D=C.fields)||void 0===D?void 0:D.soldOutCtaText,isPriceDisplayed:null===O||void 0===O||null===(N=O[k])||void 0===N||null===(M=N.fields)||void 0===M?void 0:M.isPriceDisplayed};return!W&&A&&Q?(0,i.jsx)(ee,{handlePreviousQuery:function(){E(0===k?H-1:k-1)},handleNextQuery:function(){E(H===k+1?0:k+1)},isLoading:q,momentIndex:0,momentListing:G,momentSectionData:V}):null}var te=function(){var e,n=(0,r.gV)(),t=(0,s.Z)("momentExplorer",m.on),a=t.data;return t.loading||(0,o.isEmpty)(a)||!(null===n||void 0===n?void 0:n.momentExplorer)?null:(0,i.jsx)(u.Z,{children:(0,i.jsx)(ne,{editionsCollection:null===a||void 0===a||null===(e=a.fields)||void 0===e?void 0:e.collection})})}}}]);