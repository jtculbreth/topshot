"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6514],{49510:function(e,i,t){var r=t(8132),n=t(85893),o=t(92809),a=(t(67294),t(45697)),l=t.n(a),s=t(7090),d=t(8997),c=t(99254),m=t(78215),u=t(56207),p=t(45825),h=t(51130),v=t(54469),y=t(29679),f=t(15410),g=t(40629),j=t(70083),x=t(59604),P=t(1503),b=t(49268),Z=t(71390),w=t(36326),S=t(58459);function I(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?I(Object(t),!0).forEach((function(i){(0,o.Z)(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}var H=d.ZP.div.withConfig({displayName:"MomentDetailed__HeaderWrapper",componentId:"sc-5jlx8i-0"})(["background-color:",";"],c.ZP.color.trueBlack),T=(0,d.ZP)(u.ZP).withConfig({displayName:"MomentDetailed__HeaderArea",componentId:"sc-5jlx8i-1"})(["display:grid;grid-template-columns:1fr;grid-template-areas:'headerBanner' 'headerImage' 'headerInsert';gap:",";padding:"," "," ",";width:100%;@media ","{--vPad:2vw;grid-template-columns:repeat(2,1fr);grid-template-rows:auto 1fr;grid-template-areas:'headerImage headerBanner' 'headerImage headerInsert';column-gap:70px;row-gap:40px;padding:calc(var(--vPad) + ",") ",";}@media ","{--vPad:4vw;padding-bottom:60px;}",""],c.ZP.spacing[24],c.ZP.spacing[20],c.ZP.spacing[16],c.ZP.spacing[44],c.ZP.mediaQueries.tablet,c.ZP.spacing[16],c.ZP.spacing[16],c.ZP.mediaQueries.desktop,(function(e){return!!e.$isFeaturedPlayer&&O})),O=(0,d.iv)(["grid-template-areas:'headerPlayerAvatar' 'headerBanner' 'headerImage' 'headerInsert';@media ","{grid-template-areas:'headerImage headerPlayerAvatar' 'headerImage headerBanner' 'headerImage headerInsert' 'headerImage headerInsert';row-gap:16px;}"],c.ZP.mediaQueries.tablet),_=d.ZP.div.withConfig({displayName:"MomentDetailed__HeaderImage",componentId:"sc-5jlx8i-2"})(["display:flex;grid-area:headerImage;flex-direction:column;justify-content:start;@media ","{justify-content:center;margin:"," 0;}"],c.ZP.mediaQueries.tablet,c.ZP.spacing[20]),D=(0,d.ZP)(j.Z).withConfig({displayName:"MomentDetailed__HeaderBanner",componentId:"sc-5jlx8i-3"})(["position:relative;grid-area:headerBanner;align-self:center;"]),C=d.ZP.div.withConfig({displayName:"MomentDetailed__HeaderInsert",componentId:"sc-5jlx8i-4"})(["position:relative;grid-area:headerInsert;width:100%;max-width:400px;justify-self:center;@media ","{justify-self:start;}"],c.ZP.mediaQueries.tablet),N=d.ZP.div.withConfig({displayName:"MomentDetailed__StyledAvatar",componentId:"sc-5jlx8i-5"})(["grid-area:headerPlayerAvatar;width:70px;"]),M=(0,d.ZP)(u.ZP).withConfig({displayName:"MomentDetailed__Body",componentId:"sc-5jlx8i-6"})(["grid-area:momentDetails;padding-top:",";padding-bottom:",";background-color:",";"],c.ZP.spacing[32],c.ZP.spacing[32],c.ZP.color.trueBlack);function E(e){var i=e.playerId,t=e.moment,r=e.children;return(0,n.jsx)(H,{children:(0,n.jsxs)(T,{$isFeaturedPlayer:!!i,children:[(0,n.jsx)(_,{children:(0,n.jsx)(x.Z,{moment:t})}),i&&(0,n.jsx)(N,{children:(0,n.jsx)(p.Z,{playerId:i})}),(0,n.jsx)(D,{$isFeaturedPlayer:!!i,moment:t}),(0,n.jsx)(C,{children:(0,n.jsx)(h.Z,{children:r})})]})})}function A(e){return e.children}E.defaultProps={children:void 0,playerId:null},A.propTypes={children:l().oneOfType([l().node,l().func]).isRequired},A.Loading=function(){return(0,n.jsx)(S.Z,{})},A.Error=function(){return(0,n.jsx)(v.Z,{})},A.NotFound=function(e){return(0,n.jsx)(y.default,k({},e))},A.Header=E,A.Body=M,A.Collectible=function(e){var i=e.moment,t=(0,r.Z)(e,["moment"]),o=(0,s.$)().t;return(0,n.jsx)(m.Z,k(k({summaryAs:"h2",summary:o("MomentDetailed.CollectibleDetails.title")},t),{},{children:(0,n.jsx)(f.Z,{moment:i})}))},A.StatsAndScores=function(e){var i=e.moment,t=(0,r.Z)(e,["moment"]),o=(0,s.$)().t;return(0,n.jsxs)(m.Z,k(k({summaryAs:"h2",summary:o("MomentDetailed.HighlightStats.title")},t),{},{children:[(0,n.jsx)(w.Z,{moment:i}),(0,n.jsx)(P.Z,{moment:i}),(0,n.jsx)(Z.Z,{moment:i})]}))},A.VitalsAndAverages=function(e){var i=e.moment,t=(0,r.Z)(e,["moment"]),o=(0,s.$)().t;return(0,n.jsxs)(m.Z,k(k({summaryAs:"h2",summary:o("MomentDetailed.PlayerStats.title")},t),{},{children:[(0,n.jsx)(g.Z,{moment:i}),(0,n.jsx)(b.Z,{moment:i})]}))},i.Z=A},89525:function(e,i,t){t.d(i,{Z:function(){return oe}});var r=t(85893),n=t(92809),o=t(67294),a=t(8997),l=t(99254),s=t(7090),d=t(91717),c=t(49327),m=t(57223),u=t(89892),p=t(8132),h=t(97657),v=t(91545),y=t(38878);var f=function(e){var i=e.momentIds,t=void 0===i?void 0:i,r=e.editionSetPlays,n=void 0===r?void 0:r,o=e.limit,a=void 0===o?12:o,l=e.sortBy,s=void 0===l?h.q.UPDATED_AT_DESC:l,d=e.skip,c=void 0!==d&&d,m=(0,v.Z)({variables:{input:(0,y.H)({limit:a,sortBy:s,momentIds:t,editionSetPlays:n})},skip:c});return{fsm:m.fsm,salesHistory:m.marketplaceTransactions,FS:m.FS}},g=t(45432),j=t(66417),x=t(59100),P=t(87157),b=t(98398),Z=t(66040),w=t(81856),S=t(70686),I=t(37089),k=t(96473),H=t(20346),T=t(96946),O=a.ZP.span.withConfig({displayName:"HistoryTableRow__StyledPrice",componentId:"sw0bfu-0"})(["margin-right:8px;margin-bottom:4px;color:",";"],(function(e){return e.isLowestPrice?l.ZP.color.electricGreen:l.ZP.color.white})),_=a.ZP.span.withConfig({displayName:"HistoryTableRow__StyledSerial",componentId:"sw0bfu-1"})(["color:",";"],(function(e){return e.$isJerseyNumber?l.ZP.color.brand[300]:l.ZP.color.white})),D=a.ZP.span.withConfig({displayName:"HistoryTableRow__TopSaleTag",componentId:"sw0bfu-2"})([""," padding:2px 4px;font-weight:",";color:black;background-color:white;"],H.p8.labelSmall,l.ZP.fontWeights.shapiro[65]),C=a.ZP.a.withConfig({displayName:"HistoryTableRow__PriceLink",componentId:"sw0bfu-3"})(["display:flex;flex-direction:column;align-items:start;flex-wrap:wrap;justify-content:space-between;@media ","{flex-direction:row;}"],l.ZP.mediaQueries.tablet);function N(e){var i,t,n,o,a,l,c,m,u,p,h,v,y=e.transaction,f=e.isTopSale,g=e.topSaleNumber,j=(0,s.$)().t,H=(0,d.gV)(),N=null===y||void 0===y||null===(i=y.moment)||void 0===i?void 0:i.flowSerialNumber,M=null===y||void 0===y||null===(t=y.moment)||void 0===t||null===(n=t.set)||void 0===n?void 0:n.id,E=null===y||void 0===y||null===(o=y.moment)||void 0===o||null===(a=o.play)||void 0===a?void 0:a.id,A=(0,b.aX)(null===y||void 0===y?void 0:y.moment,"short");return(0,r.jsxs)(x.TR,{highlightedRow:f,children:[(0,r.jsx)(x.vQ,{children:(0,r.jsx)(I.Z,{link:(0,P.Ab)({name:"@".concat(null===y||void 0===y||null===(l=y.buyer)||void 0===l?void 0:l.username)}),trackingId:"historyTable-goToUser",passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{alt:null===y||void 0===y||null===(c=y.buyer)||void 0===c?void 0:c.username,src:null===y||void 0===y||null===(m=y.buyer)||void 0===m?void 0:m.profileImageUrl})})})}),(0,r.jsx)(x.Yw,{children:(0,r.jsx)(I.Z,{link:(0,P.Ab)({name:"@".concat(null===y||void 0===y||null===(u=y.buyer)||void 0===u?void 0:u.username)}),trackingId:"historyTable-goToUser",passHref:!0,children:(0,r.jsx)("a",{children:null===y||void 0===y||null===(p=y.buyer)||void 0===p?void 0:p.username})})}),(0,r.jsx)(x.TD,{children:(0,r.jsx)(I.Z,{link:(0,P.OM)({id:y.moment.id}),trackingId:"historyTable-price",trackingProperties:{setID:M,playID:E,serialNumber:N},passHref:!0,children:(0,r.jsxs)(C,{children:[(0,r.jsx)(O,{children:(0,Z.T4)({value:null===y||void 0===y?void 0:y.price,currency:"USD"},!0)}),!!f&&(0,r.jsxs)(D,{children:[g?"#".concat(g," "):"",j("HistoryTable.topSale.label")]})]})})}),(0,r.jsx)(x.TD,{children:(0,r.jsx)(I.Z,{link:(0,P.OM)({id:y.moment.id}),trackingId:"historyTable-serial",trackingProperties:{setID:M,playID:E,serialNumber:N},passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(_,{$isJerseyNumber:N===(null===y||void 0===y||null===(h=y.moment)||void 0===h||null===(v=h.play.stats)||void 0===v?void 0:v.jerseyNumber),children:(0,b.I_)(null===y||void 0===y?void 0:y.moment)})})})}),(0,r.jsx)(x.TD,{children:A||"-"}),(0,r.jsx)(x.y9,{children:(0,w.Po)(null===y||void 0===y?void 0:y.updatedAt,w.I2.TRANSACTION)}),(null===H||void 0===H?void 0:H.showTxHashLink)&&(0,r.jsx)(x.TD,{children:(0,S.d)(null===y||void 0===y?void 0:y.txHash)&&(0,r.jsx)(k.Z,{href:(0,P.pe)(null===y||void 0===y?void 0:y.txHash),children:(0,r.jsx)(T.Z.ExternalLink,{color:"white",size:16})})})]},y.id)}N.defaultProps={transaction:{},isTopSale:!1,topSaleNumber:0};var M=N,E=a.ZP.div.withConfig({displayName:"HistoryTable__StyledWrapper",componentId:"imukcx-0"})(["height:100%;overflow:hidden;background:",";"],l.ZP.color.trueBlack);function A(e){var i=e.salesHistory,t=e.isTopSalesHistory,n=(0,s.$)().t,o=(0,d.gV)();return(0,r.jsx)(E,{children:(0,r.jsx)(x.fC,{children:(0,r.jsxs)(x.iA,{children:[(0,r.jsx)(x.Et,{children:(0,r.jsxs)(x.TR,{children:[(0,r.jsx)(x.wT,{}),(0,r.jsx)(x.TH,{children:n("HistoryTable.buyer")}),(0,r.jsx)(x.TH,{children:n("HistoryTable.salePrice")}),(0,r.jsx)(x.TH,{children:n("HistoryTable.serial")}),(0,r.jsx)(x.TH,{children:n("HistoryTable.series")}),(0,r.jsx)(x.TH,{children:n("HistoryTable.dateTime")}),(null===o||void 0===o?void 0:o.showTxHashLink)&&(0,r.jsx)(x.Jf,{children:n("PageTransactions.tableHeaders.tx")})]})}),(0,r.jsx)(x.XP,{children:null===i||void 0===i?void 0:i.map((function(e,i){return(0,r.jsx)(M,{transaction:e,isTopSale:t,topSaleNumber:i+1},e.id)}))})]})})})}A.defaultProps={salesHistory:void 0,isTopSalesHistory:!1};var B,L=A;function $(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?$(Object(t),!0).forEach((function(i){(0,n.Z)(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}var F="TOP_SALES",V="RECENT_SALES",U=(B={},(0,n.Z)(B,F,{limit:3,sortBy:h.q.PRICE_DESC}),(0,n.Z)(B,V,{limit:13,sortBy:h.q.UPDATED_AT_DESC}),B),q=a.ZP.div.withConfig({displayName:"SalesHistorypresenter__StyledEmpty",componentId:"sc-3ejowc-0"})(["&:not(:first-of-type){display:none;}"]);function Q(e){var i=e.type,t=e.momentIds,n=void 0===t?void 0:t,a=e.editionSetPlays,d=(0,p.Z)(e,["type","momentIds","editionSetPlays"]),c=(0,s.$)().t,m=f(R({momentIds:n,editionSetPlays:a},U[i])),u=m.fsm,h=m.FS,v=m.salesHistory;return(0,o.useMemo)((function(){switch(u){case h.IDLE:case h.FETCHING:return(0,r.jsx)(j.Z,{height:32});case h.ERROR:return(0,r.jsx)(g.Z,{color:l.ZP.color.black[100],size:"large",children:c("Moment.MomentHistory.errorFetching")});case h.SUCCESS:return 0===(null===v||void 0===v?void 0:v.length)?(0,r.jsx)(q,{children:(0,r.jsx)(g.Z,{color:l.ZP.color.black[100],size:"large",children:c("Moment.MomentHistory.noneFound")})}):(0,r.jsx)(L,R({salesHistory:null===v||void 0===v?void 0:v.slice(0,12)},d));default:return null}}),[u,h,v,d,c])}Q.defaultProps={momentIds:void 0,editionSetPlays:void 0};var W=Q,z=t(17420),G=a.ZP.div.withConfig({displayName:"AllSalesLink__LinkWrapper",componentId:"sc-1sp9thf-0"})(["margin-top:",";text-align:center;"],l.ZP.spacing[16]);var J=function(e){var i=e.editionSetPlays,t=e.isTopSalesLink,n=void 0!==t&&t,o=(0,s.$)().t,a=f({editionSetPlays:i,limit:13,sortBy:h.q.UPDATED_AT_DESC}).salesHistory;if(!i)return null;if(!a||(null===a||void 0===a?void 0:a.length)<=12)return null;var l=(0,P.jR)({setID:null===i||void 0===i?void 0:i[0].setID,playID:null===i||void 0===i?void 0:i[0].playID});return n?(0,r.jsx)(G,{children:(0,r.jsx)(z.Z,{href:"".concat(l.as,"/top-sales"),trackingId:"(Page - Listings) View Top Sales Button Clicked",children:o("Moment.MomentHistory.topSales.link")})}):(0,r.jsx)(G,{children:(0,r.jsx)(z.Z,{link:l,trackingId:"(Page - Listings) View Complete Sales Button Clicked",children:o("Moment.MomentHistory.allSales.link")})})},X=t(46829),Y=t(30083),K=a.ZP.div.withConfig({displayName:"SerialSalesLink__LinkWrapper",componentId:"sc-1glnoqw-0"})(["margin-top:",";text-align:center;"],l.ZP.spacing[16]);var ee=function(e){var i,t,n=e.momentIds,o=e.isTopSalesLink,a=void 0!==o&&o,l=(0,s.$)().t,d=f({momentIds:n,limit:13,sortBy:h.q.UPDATED_AT_DESC}).salesHistory,c=(0,X.useQuery)(Y.eU,{variables:{momentId:null===n||void 0===n?void 0:n[0]},skip:!n||0===n.length}).data;if(!d||!c)return null;var m=null===c||void 0===c||null===(i=c.getMintedMoment)||void 0===i||null===(t=i.data)||void 0===t?void 0:t.flowSerialNumber,u=(0,P.Nd)({id:null===n||void 0===n?void 0:n[0]});return a?(0,r.jsx)(K,{children:(0,r.jsx)(z.Z,{href:"".concat(u.as,"/top-sales"),trackingId:"(Page - Moments) View Top Serial Sales Button Clicked",children:l("Moment.MomentHistory.topSalesSerial.link",{serialNo:"#".concat(m)})})}):(0,r.jsx)(K,{children:(0,r.jsx)(z.Z,{link:u,trackingId:"(Page - Moments) View Complete Serial Sales Button Clicked",children:l("Moment.MomentHistory.allSalesSerial.link",{serialNo:"#".concat(m)})})})};function ie(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?ie(Object(t),!0).forEach((function(i){(0,n.Z)(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}var re=a.ZP.div.withConfig({displayName:"MomentHistory__StyledGroup",componentId:"sc-1foi1f6-0"})(["&:not(:first-of-type){margin-top:36px;}"]),ne=a.ZP.div.withConfig({displayName:"MomentHistory__StyledTable",componentId:"sc-1foi1f6-1"})(["margin-top:12px;"]);var oe=function(e){var i=e.momentIds,t=void 0===i?void 0:i,n=e.editionSetPlays,a=void 0===n?void 0:n,p=e.wrapperComponent,h=void 0===p?void 0:p,v=e.anchorRef,y=void 0===v?null:v,f=(0,s.$)().t,g=(0,d.gV)(),j=h.type,x=h.props,P=(0,c.Z)({ref:y}),b=P.wasInViewOnLoad,Z=P.isInView,w=(0,o.useState)(b),S=w[0],I=w[1];return(0,o.useEffect)((function(){Z&&!S&&I(!0)}),[Z,S]),(0,r.jsxs)(u.Z,{condition:!!h,wrapper:function(e){return(0,r.jsx)(j,te(te({},x),{},{children:e}))},children:[(null===g||void 0===g?void 0:g.momentSalesHistoryPage)&&S&&(0,r.jsxs)(o.Fragment,{children:[(null===g||void 0===g?void 0:g.momentSalesHistory)&&(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(re,{children:[(0,r.jsx)(m.Z.H5,{as:"h3",color:l.ZP.color.white,children:f("Moment.MomentHistory.topSales")}),(0,r.jsx)(ne,{children:(0,r.jsx)(W,{editionSetPlays:a,type:F,isTopSalesHistory:!0})})]}),(0,r.jsxs)(re,{children:[(0,r.jsx)(J,{isTopSalesLink:!0,editionSetPlays:a}),!!t&&(0,r.jsx)(ee,{momentIds:t,isTopSalesLink:!0})]})]}),(null===g||void 0===g?void 0:g.momentSalesHistory)&&(0,r.jsxs)(re,{children:[(0,r.jsx)(m.Z.H5,{as:"h3",color:l.ZP.color.white,children:f("Moment.MomentHistory.recentSales")}),(0,r.jsx)(ne,{children:(0,r.jsx)(W,{editionSetPlays:a,type:V})})]}),(0,r.jsxs)(re,{children:[(0,r.jsx)(J,{editionSetPlays:a}),!!t&&(0,r.jsx)(ee,{momentIds:t})]})]}),!(null===g||void 0===g?void 0:g.momentSalesHistory)&&!g.momentSalesHistoryPage&&(0,r.jsx)(m.Z.H5,{as:"h3",color:l.ZP.color.white,children:f("Moment.MomentHistory.disabled")})]})}},70686:function(e,i,t){t.d(i,{d:function(){return r}});var r=function(e){return null!=e&&""!==e}},49327:function(e,i,t){t.d(i,{Z:function(){return o}});var r=t(67294),n=t(80621);function o(e){var i=e.ref,t=void 0===i?{current:null}:i,o=e.threshold,a=void 0===o?.5:o,l=(0,r.useState)(null),s=l[0],d=l[1],c=(0,n.Z)(t,{root:null,threshold:a}),m=(null===c||void 0===c?void 0:c.intersectionRatio)>=a;return(0,r.useEffect)((function(){"boolean"!==typeof s&&c&&d(m)}),[c,m,s]),{wasInViewOnLoad:s,isInView:m}}},17420:function(e,i,t){var r=t(85893),n=(t(67294),t(8997)),o=t(99254),a=t(20346),l=t(37089),s=(0,n.iv)(["color:",";border-color:",";"],o.$_.trueBlack,o.$_.trueBlack),d=n.ZP.a.withConfig({displayName:"LinkUnderlined__StyledLink",componentId:"wwkqzc-0"})([""," padding:"," 0;color:",";border-bottom:2px solid ",";"," &:hover{border-bottom:2px solid ",";}"],a.Ok.button,o.W0[8],o.$_.white,o.$_.white,(function(e){return"dark"===e.variant&&s}),o.$_.black[400]);function c(e){var i=e.link,t=e.href,n=e.as,o=e.trackingId,a=e.variant,s=e.children;return(0,r.jsx)(l.Z,{link:i,href:t,as:n,passHref:!0,trackingId:o,children:(0,r.jsx)(d,{variant:a,children:s})})}c.defaultProps={href:void 0,link:void 0,as:void 0,variant:"default",trackingId:void 0},i.Z=c}}]);