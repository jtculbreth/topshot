"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9015],{21783:function(t,i,e){e.d(i,{Z:function(){return ot}});var n=e(85893),o=e(67294),r=e(96486),l=e(91717),a=e(92809),s=e(8132),d=e(46829),c=e(52209),u=e(95990),m=e(17626);function g(){var t=(0,c.Z)(['\n  query getHotEditionListings {\n    getHotEditionListings {\n      listings {\n        ... on EditionListing {\n          ...EditionFragment\n          # @NOTE: these fields support automated cache\n          # look ups for the query "getEditionListing" in:\n          # domains/momentListing/constants/defaults\n          # if you need more information here, add it to\n          # the fragment "EditionFragment"\n        }\n      }\n    }\n  }\n  ',"\n"]);return g=function(){return t},t}var p=(0,u.ZP)(g(),m.OS),h=e(55381);function f(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?f(Object(e),!0).forEach((function(i){(0,a.Z)(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var b=e(94829),x=e(7090),Z=e(39920),y=e(8997),j=e(99254),P=e(80282),w=e(72543),T=e(87985),I=e(98398),E=e(87157),L=e(56420),S=e(37089),M=e(49976),C=e(76325),O=e(83832),D=e(55828),_=e(22054),k=e(45432),H=e(8289),N=e(66040),R=y.ZP.div.withConfig({displayName:"MomentListingThumbnailHorizontal__StyledContainer",componentId:"g7phov-0"})(["padding:",";width:350px;background-color:",";"],j.ZP.spacing[4],j.ZP.color.black[800]),z=(y.ZP.div.withConfig({displayName:"MomentListingThumbnailHorizontal__ImageWrapper",componentId:"g7phov-1"})(["",""],P.TU),y.ZP.div.withConfig({displayName:"MomentListingThumbnailHorizontal__AllDetailsContainer",componentId:"g7phov-2"})(["padding-top:",";padding-left:",";",""],j.ZP.spacing[4],j.ZP.spacing[16],P.pY),y.ZP.a.withConfig({displayName:"MomentListingThumbnailHorizontal__StyledLink",componentId:"g7phov-3"})(["display:grid;grid-template-rows:1fr auto;align-items:center;width:100%;height:100%;background-color:",";"],j.ZP.color.trueBlack)),G=y.ZP.div.withConfig({displayName:"MomentListingThumbnailHorizontal__MomentThumbnailPrices",componentId:"g7phov-4"})(["display:flex;justify-content:space-between;padding:",";width:100%;background-color:",";"],j.ZP.spacing[8],j.ZP.color.black[800]),B=y.ZP.div.withConfig({displayName:"MomentListingThumbnailHorizontal__MomentThumbnailPrice",componentId:"g7phov-5"})(["text-align:",";"],(function(t){return t.isLeft?"left":"right"})),F=(0,y.ZP)(C.Z).withConfig({displayName:"MomentListingThumbnailHorizontal__StyledTextBadge",componentId:"g7phov-6"})(["margin:0;padding:"," ",";font-size:11px;font-weight:bold;background-color:red;border:none;"],j.ZP.spacing[4],j.ZP.spacing[12]),Q=function(t){var i,e,o,l,a=t.editionListing,s=void 0===a?null:a,d=t.setVisualId,c=void 0===d?null:d,u=t.isChallengeReward,m=void 0!==u&&u,g=t.children,p=void 0===g?null:g,h=(0,x.$)().t;if((0,r.isEmpty)(s))return null;var f=(0,I.WE)(s),v=(0,T.Mz)(s),b=(0,T.Wd)(s),Z=(0,I.gn)(s,L.Qq.HERO,{width:L.CA.THUMBNAIL}),y=(0,I.GQ)(s),P=c?(0,T.Xc)(c):(0,T.Xc)(null===s||void 0===s||null===(i=s.set)||void 0===i?void 0:i.setVisualId),Q=(0,I.G7)({numerator:"#",denominator:y,isRetired:null===s||void 0===s?void 0:s.flowRetired}),U=null===s||void 0===s||null===(e=s.averageSaleData)||void 0===e?void 0:e.averagePrice,q=null===s||void 0===s||null===(o=s.averageSaleData)||void 0===o?void 0:o.numDays,A=m,$=(0,I.fh)(s)?{label:h("MomentThumbnail.badge.limitedEdition"),tooltip:h("MomentThumbnail.tooltip.limitedEdition")}:{label:h("MomentThumbnail.badge.circulationCount"),tooltip:h("MomentThumbnail.tooltip.circulationCount")};return(0,n.jsx)(R,{children:(0,n.jsx)(S.Z,{link:(0,E.OM)({id:null===s||void 0===s?void 0:s.id}),passHref:!0,children:(0,n.jsxs)(z,{children:[(0,n.jsxs)(w.Z,{withGutterBottom:!0,"data-testid":"momentThumbnail",children:[(0,n.jsx)(w.Z.Image,{src:Z,alt:f}),(0,n.jsxs)(w.Z.TextContainer,{children:[(0,n.jsx)(w.Z.Subtitle,{children:(0,n.jsx)(F,{label:h("MomentDetailed.HotMoment.label.hot")})}),(0,n.jsx)(w.Z.Title,{children:f}),(0,n.jsxs)(w.Z.Description,{children:[v," ",(0,n.jsx)("br",{}),b]}),(!!y||!!P)&&(0,n.jsxs)(w.Z.Subtitle,{children:[A&&(0,n.jsx)(M.Z,{}),h(P)," ",Q,(0,n.jsx)(C.Z,{label:$.label,tooltip:$.tooltip})]}),(0,n.jsx)(O.Z.Badges,{moment:s}),p]}),(null===s||void 0===s?void 0:s.editionListingCount)&&(0,n.jsx)(w.Z.TotalListing,{children:(0,n.jsx)(D.Z,{count:null===s||void 0===s?void 0:s.editionListingCount,type:_.II.MOMENT_LISTING,showExpiredLabel:!1})})]}),(0,n.jsxs)(G,{children:[(0,n.jsxs)(B,{isLeft:!0,children:[(0,n.jsx)(k.Z,{size:"small",color:j.ZP.color.grey[700],children:h("MomentDetailed.Pricing.label.min")}),(0,n.jsx)(H.Z,{price:{value:parseFloat(null===s||void 0===s||null===(l=s.priceRange)||void 0===l?void 0:l.min),currency:"USD"},isSmall:!0})]}),!!U&&(0,n.jsxs)(B,{children:[(0,n.jsx)(k.Z,{size:"small",color:j.ZP.color.grey[700],children:h("MomentDetailed.Pricing.label.avg.full",{count:q})}),(0,n.jsx)(k.Z,{color:j.ZP.color.white,children:(0,N.T4)({value:parseFloat(U),currency:"USD"},!0)})]})]})]})})})},U=function(t){var i=t.editionListing;return(0,n.jsx)(Q,{editionListing:i})},q=e(96946),A=e(56207),$=e(57223),V=e(20346),W=y.ZP.a.withConfig({displayName:"ExploreMarketplaceLink__StyledLink",componentId:"sc-7gwh0k-0"})([""," padding:"," 0;color:",";border-bottom:2px solid ",";@media ","{align-self:flex-end;}"],V.Ok.button,j.ZP.spacing[8],j.ZP.color.white,j.ZP.color.white,j.ZP.mediaQueries.tablet),X=(0,E.gx)(),J=function(){var t=(0,x.$)().t;return(0,n.jsx)(S.Z,{href:X,as:X,passHref:!0,trackingId:"Discover-Authenticated-LatestMoments-cta",children:(0,n.jsx)(W,{children:t("HotMoments.link.cta")})})},Y=(0,y.iv)(["padding:0 0 ",";"],j.ZP.spacing[20]),K=(0,y.ZP)(A.ZP).withConfig({displayName:"HotMoments__StyledRoot",componentId:"sc-1odixk1-0"})(["display:flex;align-items:start;flex-direction:column;padding:20px 0;",""],(function(t){return t.isSearchPage?Y:""})),tt=y.ZP.div.withConfig({displayName:"HotMoments__StyledPaginatedList",componentId:"sc-1odixk1-1"})(["display:grid;grid-template-columns:auto 1fr auto;align-items:center;"]),it=(0,y.ZP)(Z.animated.div).withConfig({displayName:"HotMoments__StyledList",componentId:"sc-1odixk1-2"})(["display:grid;grid-template-rows:1fr;grid-auto-columns:","px;grid-auto-flow:column;width:auto;overflow-x:auto;overscroll-behavior-x:none;grid-gap:",";&::-webkit-scrollbar{width:0;background:transparent;}"],"340",j.ZP.spacing[24]),et=y.ZP.div.withConfig({displayName:"HotMoments__SectionHeader",componentId:"sc-1odixk1-3"})(["display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;padding-bottom:24px;width:100%;h2{padding-right:4px;}"]),nt=function(t){var i,e,r=t.moments,l=t.isSearchPage,a=(0,x.$)().t,s=(0,b.Z)(j.ZP.mediaQueries.desktop,!0),d=(0,b.Z)(j.ZP.mediaQueries.tablet,!0),c=(0,o.useRef)(null),u=(0,o.useRef)(null),m=(0,o.useState)(0),g=m[0],p=m[1],h=s?3:d?2:1,f=Number("340")+20,v=null!==(i=null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.scrollLeft)&&void 0!==i?i:0,y=l?$.Z.H5:$.Z.H3;return(0,n.jsxs)(K,{isSearchPage:l,children:[(0,n.jsxs)(et,{children:[(0,n.jsx)(y,{as:"h2",color:j.ZP.color.white,variant:"alt",children:a("HotMoments.title")}),!l&&(0,n.jsx)(J,{})]}),(0,n.jsxs)(tt,{children:[(0,n.jsx)(q.Z.Angle,{"aria-label":"page back",size:25,style:{transform:"rotate(90deg)",cursor:"pointer"},onClick:function(){p(c.current.scrollLeft-h*f)}}),(0,n.jsx)(Z.Spring,{native:!0,reset:!0,from:{x:v},to:{x:g},forwardRef:u,config:Z.config.molasses,children:function(t){return(0,n.jsx)(it,{ref:c,scrollLeft:t.x,children:null===r||void 0===r?void 0:r.map((function(t){return(0,n.jsx)(U,{editionListing:t},null===t||void 0===t?void 0:t.id)}))})}}),(0,n.jsx)(q.Z.Angle,{"aria-label":"page forward",size:25,style:{transform:"rotate(-90deg)",cursor:"pointer"},onClick:function(){p(c.current.scrollLeft+h*f)}})]})]})};var ot=function(t){var i=t.isSearchPage,e=void 0!==i&&i,a=(0,l.gV)(),c=null===a||void 0===a?void 0:a.showHotMoments,u=function(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.query,n=void 0===e?p:e,r=i.skip,l=(0,s.Z)(i,["query","skip"]),a=(0,d.useQuery)(n,v({skip:r},l)),c=a.loading,u=a.error,m=a.data,g=(0,o.useMemo)((function(){return c?h.E.FETCHING:u?h.E.ERROR:m?h.E.SUCCESS:h.E.IDLE}),[c,u,m]);return{hotEditionListings:null===m||void 0===m||null===(t=m.getHotEditionListings)||void 0===t?void 0:t.listings,fsm:g,loading:c,error:u,FS:h.E}}({skip:!c}),m=u.hotEditionListings,g=u.loading,f=u.error;return!c||(0,r.isEmpty)(m)||g||f?null:(0,n.jsx)(nt,{moments:m,isSearchPage:e})}},7702:function(t,i,e){var n=e(85893),o=(e(67294),e(1990));i.Z=function(t){var i,e,r=t.moment,l=null===r||void 0===r||null===(i=r.set)||void 0===i?void 0:i.id,a=null===r||void 0===r||null===(e=r.play)||void 0===e?void 0:e.id;return(0,n.jsx)(o.Z,{setID:l,playID:a})}},1990:function(t,i,e){e.d(i,{Z:function(){return y}});var n=e(85893),o=(e(67294),e(8997)),r=e(96486),l=e(17626),a=e(36840),s=e(7090),d=e(87157),c=e(98398),u=e(87985),m=e(56420),g=e(37089),p=e(83832),h=e(22054),f=e(76325),v=e(49976),b=function(t){var i,e,o=t.moment,r=(0,s.$)().t,l=(0,d.$t)({setID:null===o||void 0===o||null===(i=o.set)||void 0===i?void 0:i.id,playID:null===o||void 0===o||null===(e=o.play)||void 0===e?void 0:e.id}),a=(0,c.gn)(o,m.Qq.HERO,{width:m.CA.THUMBNAIL}),b=(0,c.WE)(o),x=(0,c.Rv)(o),Z=r((0,c.Xc)(o)),y=(0,c.G7)({numerator:"#",denominator:(0,c.GQ)(o),isRetired:(0,c.fh)(o)}),j=(0,c.$J)(o),P=(0,c.fh)(o)?{label:r("MomentThumbnail.badge.limitedEdition"),tooltip:r("MomentThumbnail.tooltip.limitedEdition")}:{label:r("MomentThumbnail.badge.circulationCount"),tooltip:r("MomentThumbnail.tooltip.circulationCount")},w=(0,u.Qb)(o),T=w.min,I=w.displayMinLabel?r("MomentThumbnail.Pricing.label.min"):void 0,E=(0,u.dq)(o),L=null===o||void 0===o?void 0:o.averageSaleData;return(0,n.jsx)(g.Z,{link:l,passHref:!0,trackingId:"Listing-Thumbnail",children:(0,n.jsx)("a",{children:(0,n.jsxs)(p.Z,{"data-testid":"momentThumbnail",children:[(0,n.jsx)(p.Z.TopTooltips,{children:(0,n.jsx)(p.Z.OwnedCount,{moment:o})}),(0,n.jsx)(p.Z.Image,{src:a,alt:b}),(0,n.jsxs)(p.Z.TextContainer,{children:[(0,n.jsx)(p.Z.Title,{children:b}),(0,n.jsx)(p.Z.Description,{children:x}),(0,n.jsxs)(p.Z.Subtitle,{children:[j&&(0,n.jsx)(v.Z,{}),(0,n.jsx)(p.Z.RarityTag,{children:Z}),(0,n.jsxs)(p.Z.ScarcityTag,{children:[y,(0,n.jsx)(f.Z,{label:P.label,tooltip:P.tooltip})]})]}),(0,n.jsx)(p.Z.Badges,{moment:o}),(0,n.jsx)(p.Z.PriceTag,{type:h.II.MOMENT_LISTING,price:{value:T,currency:"USD"},count:E,label:I,averageSaleData:L})]})]})})})},x=e(66417),Z=o.ZP.div.withConfig({displayName:"MomentUserListingThumbnailPresenter__Loading",componentId:"sc-1djavh5-0"})(["display:flex;flex-direction:column;flex-grow:1;justify-content:center;padding:13% 10% 7%;"]),y=function(t){var i=t.setID,e=t.playID,o=(0,a.Z)({setID:i,playID:e}),s=o.finiteState,d=o.momentListing;return s===l.Eb.IDLE||s===l.Eb.FETCHING?(0,n.jsxs)(Z,{"data-testid":"momentThumbnail-loading",children:[(0,n.jsx)(x.Z,{variant:"rect",ratio:1}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"text",height:20}),(0,n.jsx)("br",{}),(0,n.jsx)(x.Z,{variant:"text",width:40})]}):s===l.Eb.ERROR||(0,r.isEmpty)(d)?null:(0,n.jsx)(b,{moment:d})}},36840:function(t,i,e){e.d(i,{Z:function(){return g}});var n=e(92809),o=e(8132),r=e(67294),l=e(46829),a=e(91717),s=e(17626),d=e(87985),c=e(228);function u(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?u(Object(e),!0).forEach((function(i){(0,n.Z)(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function g(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.query,n=i.setID,u=i.playID,g=(0,o.Z)(i,["query","setID","playID"]),p=(0,a.gV)(),h=null!==e&&void 0!==e?e:s.P8,f=(0,l.useQuery)(h,m({variables:{input:{setID:n,playID:u}}},g)),v=f.loading,b=f.error,x=f.data,Z=f.refetch,y=(0,c.Z)(),j=y.currentUser,P=null===x||void 0===x||null===(t=x.getEditionListing)||void 0===t?void 0:t.data,w=null===j||void 0===j?void 0:j.publicInfo,T=(0,r.useMemo)((function(){return(0,d.y)(P,w,p)}),[P,w,p]),I=(0,r.useMemo)((function(){return v?s.Eb.FETCHING:b?s.Eb.ERROR:v||b?s.Eb.IDLE:s.Eb.SUCCESS}),[v,b]);return{finiteState:I,momentListing:T,error:b,refetch:Z,FS:s.Eb}}},72543:function(t,i,e){var n=e(85893),o=(e(67294),e(8997)),r=e(99254),l=e(83832),a=e(12363),s=o.ZP.img.withConfig({displayName:"MomentThumbnailHorizontalLayout__StyledImage",componentId:"sc-1b92vrl-0"})(["width:","px;"],a.nz.min),d=(0,o.ZP)(l.Z.TextContainer).withConfig({displayName:"MomentThumbnailHorizontalLayout__StyledTextContainer",componentId:"sc-1b92vrl-1"})(["margin:0;width:100%;"]),c=o.ZP.div.withConfig({displayName:"MomentThumbnailHorizontalLayout__StyledContainer",componentId:"sc-1b92vrl-2"})(["position:relative;display:flex;align-items:center;justify-content:center;padding-bottom:",";"],(function(t){return t.withGutterBottom&&r.ZP.spacing[12]})),u=o.ZP.div.withConfig({displayName:"MomentThumbnailHorizontalLayout__StyledTotalListing",componentId:"sc-1b92vrl-3"})(["position:absolute;right:10px;bottom:12px;color:",";font-size:12px;"],r.ZP.color.grey[700]);function m(t){var i=t.children,e=t.withGutterBottom;return(0,n.jsx)(c,{withGutterBottom:e,children:i})}m.defaultProps={withGutterBottom:!1},m.Image=s,m.FlowState=l.Z.FlowState,m.Title=l.Z.Title,m.Description=l.Z.Description,m.Subtitle=l.Z.Subtitle,m.TextContainer=d,m.PriceTag=l.Z.PriceTag,m.ScarcityTag=l.Z.ScarcityTag,m.TotalListing=u,i.Z=m}}]);