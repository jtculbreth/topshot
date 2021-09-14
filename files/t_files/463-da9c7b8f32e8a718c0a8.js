"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{97657:function(n,e,t){t.d(e,{q:function(){return i},E:function(){return o}});var i=(0,t(45041).nR)(["UPDATED_AT_ASC","UPDATED_AT_DESC","PRICE_ASC","PRICE_DESC"]),o={IDLE:"IDLE",FETCHING:"FETCHING",FETCHING_MORE:"FETCHING_MORE",LOADING:"LOADING",ERROR:"ERROR",SUCCESS:"SUCCESS"}},91545:function(n,e,t){t.d(e,{Z:function(){return m}});var i=t(20273),o=t(92809),r=t(8132),a=t(67294),l=t(71180),c=t(38878),s=t(55381),d=t(46829),u=t(96486);function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function m(){var n,e,t,o,p,m,h,y,g,b,v,w,T,P,k,S=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_=S.query,I=void 0===_?l.V:_,C=S.variables,Z=S.skip,N=void 0!==Z&&Z,O=(0,r.Z)(S,["query","variables","skip"]),E=(0,d.useQuery)(I,f({variables:C,skip:N},O)),D=E.error,x=E.data,M=E.loading,R=E.refetch,j=E.fetchMore,A=null===C||void 0===C||null===(n=C.input)||void 0===n||null===(e=n.searchInput)||void 0===e||null===(t=e.pagination)||void 0===t?void 0:t.limit,H=(0,a.useState)(!1),U=H[0],q=H[1],F=null===x||void 0===x||null===(o=x.searchMarketplaceTransactions)||void 0===o||null===(p=o.data)||void 0===p||null===(m=p.searchSummary)||void 0===m||null===(h=m.data)||void 0===h?void 0:h.data,z=null===x||void 0===x||null===(y=x.searchMarketplaceTransactions)||void 0===y||null===(g=y.data)||void 0===g||null===(b=g.searchSummary)||void 0===b||null===(v=b.data)||void 0===v?void 0:v.size,G=null===x||void 0===x||null===(w=x.searchMarketplaceTransactions)||void 0===w||null===(T=w.data)||void 0===T||null===(P=T.searchSummary)||void 0===P||null===(k=P.pagination)||void 0===k?void 0:k.rightCursor,B=function(){var n,e,t,o,r;if(!U){q(!0);var a=(0,c.H)({filters:null===C||void 0===C||null===(n=C.input)||void 0===n?void 0:n.filters,sortBy:null===C||void 0===C||null===(e=C.input)||void 0===e?void 0:e.sortBy,limit:null===C||void 0===C||null===(t=C.input)||void 0===t||null===(o=t.searchInput)||void 0===o||null===(r=o.pagination)||void 0===r?void 0:r.limit,cursor:G});j({query:I,variables:{input:a},updateQuery:function(n,e){var t,o,r,a=e.fetchMoreResult,l="searchMarketplaceTransactions.data.searchSummary",c=(0,u.get)(a,l),s=(0,u.get)(n,l),d={searchMarketplaceTransactions:{data:{searchSummary:{pagination:{rightCursor:c.data.size===(null===C||void 0===C||null===(t=C.input)||void 0===t||null===(o=t.searchInput)||void 0===o||null===(r=o.pagination)||void 0===r?void 0:r.limit)?c.pagination.rightCursor:null},data:f(f(f({},s.data),c.data),{},{size:s.data.size+c.data.size,data:[].concat((0,i.Z)(s.data.data),(0,i.Z)(c.data.data))})}}}},p=(0,u.merge)({},n,d);return q(!1),p}})}},L=(0,a.useMemo)((function(){return M?s.E.FETCHING:U?s.E.FETCHING_MORE:D?s.E.ERROR:F?s.E.SUCCESS:s.E.IDLE}),[M,D,F,U]);return{marketplaceTransactions:F,isFetchingMore:U,error:D,size:z,fsm:L,getMoreMarketplaceTransactions:B,hasMoreMarketplaceTransactions:z>=A&&!!G,refetch:R,FS:s.E}}},38878:function(n,e,t){t.d(e,{H:function(){return l}});var i=t(92809),o=t(97657);function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.sortBy,t=void 0===e?o.q.UPDATED_AT_DESC:e,i=n.cursor,r=void 0===i?"":i,l=n.limit,c=void 0===l?12:l,s=n.momentIds,d=void 0===s?null:s,u=n.editionSetPlays,p=void 0===u?null:u,f=n.filters,m=void 0===f?{}:f;return{sortBy:t,filters:a(a(a({},m),d?{byMoments:d}:{}),p?{byEditions:p}:{}),searchInput:{pagination:{cursor:r,direction:"RIGHT",limit:c}}}}},71180:function(n,e,t){t.d(e,{V:function(){return l}});var i=t(52209),o=t(95990),r=t(37563);function a(){var n=(0,i.Z)(["\n  query SearchMarketplaceTransactions(\n    $input: SearchMarketplaceTransactionsInput!\n  ) {\n    searchMarketplaceTransactions(input: $input) {\n      data {\n        searchSummary {\n          pagination {\n            rightCursor\n          }\n          data {\n            ... on MarketplaceTransactions {\n              size\n              data {\n                ... on MarketplaceTransaction {\n                  id\n                  sortID\n                  seller {\n                    ...UserFragment\n                  }\n                  buyer {\n                    ...UserFragment\n                  }\n                  price\n                  moment {\n                    assetPathPrefix\n                    flowSerialNumber\n                    id\n                    play {\n                      id\n                      stats {\n                        playerName\n                        dateOfMoment\n                        playCategory\n                        teamAtMomentNbaId\n                        teamAtMoment\n                        jerseyNumber\n                      }\n                    }\n                    set {\n                      id\n                      flowName\n                      flowSeriesNumber\n                      setVisualId\n                    }\n                    setPlay {\n                      ID\n                      circulationCount\n                      flowRetired\n                    }\n                  }\n                  txHash\n                  updatedAt\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ","\n"]);return a=function(){return n},n}var l=(0,o.ZP)(a(),r.m)},37563:function(n,e,t){t.d(e,{m:function(){return r}});var i=t(52209);function o(){var n=(0,i.Z)(["\n  fragment UserFragment on UserPublicInfo {\n    dapperID\n    username\n    profileImageUrl\n    twitterHandle\n    createdAt\n    flowAddress\n    favoriteTeamID\n  }\n"]);return o=function(){return n},n}var r=(0,t(95990).ZP)(o())},59100:function(n,e,t){t.d(e,{fC:function(){return s},iA:function(){return d},Et:function(){return u},TH:function(){return p},wT:function(){return f},Jf:function(){return m},XP:function(){return h},TR:function(){return y},hq:function(){return g},TD:function(){return b},ZV:function(){return w},oY:function(){return T},aT:function(){return P},vQ:function(){return k},R0:function(){return S},qe:function(){return _},vf:function(){return I},Yw:function(){return C},c1:function(){return Z},y9:function(){return N},Nd:function(){return O},Wl:function(){return E},uD:function(){return D}});var i=t(8997),o=t(99254),r=t(20346),a=t(30121),l="#18181c",c=o.ZP.color.black[900],s=i.ZP.div.withConfig({displayName:"TableStyles__Root",componentId:"sc-1saikeo-0"})(["position:relative;flex:0 0 auto;width:100%;height:100%;overflow:auto;overscroll-behavior-x:none;background-color:transparent;"]),d=i.ZP.table.withConfig({displayName:"TableStyles__Table",componentId:"sc-1saikeo-1"})(["position:relative;width:100%;color:white;background-color:",";border-collapse:separate;border-spacing:0;"],l),u=i.ZP.thead.withConfig({displayName:"TableStyles__THead",componentId:"sc-1saikeo-2"})([""]),p=i.ZP.th.withConfig({displayName:"TableStyles__TH",componentId:"sc-1saikeo-3"})([""," padding:"," "," ",";min-width:",";color:",";text-align:left;white-space:nowrap;background-color:",";border:0;border-bottom:8px solid ",";"],r.In.titleUpper,o.ZP.spacing[12],o.ZP.spacing[12],o.ZP.spacing[16],(function(n){return n.minWidth&&"140px"}),o.ZP.color.grey[400],c,l),f=(0,i.ZP)(p).withConfig({displayName:"TableStyles__THBlank",componentId:"sc-1saikeo-4"})(["position:sticky;left:0;z-index:1;min-width:0;background-color:",";"],c),m=(0,i.ZP)(p).withConfig({displayName:"TableStyles__THNarrow",componentId:"sc-1saikeo-5"})(["min-width:unset;"]),h=i.ZP.tbody.withConfig({displayName:"TableStyles__TBody",componentId:"sc-1saikeo-6"})([""]),y=i.ZP.tr.withConfig({displayName:"TableStyles__TR",componentId:"sc-1saikeo-7"})(["background-color:",";&:hover{background-color:",";}"],(function(n){return n.highlightedRow?l:c}),l),g=(0,i.ZP)(y).withConfig({displayName:"TableStyles__TRSticky",componentId:"sc-1saikeo-8"})(["th{position:sticky;top:0;left:0;z-index:1;}"]),b=i.ZP.td.withConfig({displayName:"TableStyles__TD",componentId:"sc-1saikeo-9"})([""," padding:",";width:",";max-width:140px;text-align:",";border-bottom:4px solid ",";&:first-of-type{border-left:8px solid ",";}&:last-of-type{border-right:8px solid ",";}",":last-of-type &{border-bottom:8px solid ",";}a{color:white;}a:hover,a:focus{text-decoration:underline;}"],r.d1.bodySmall,(function(n){var e=n.verticalPadding?o.ZP.spacing[n.verticalPadding]:o.ZP.spacing[4];return"".concat(e," ").concat(o.ZP.spacing[12])}),(function(n){return n.width||"auto"}),(function(n){return n.textAlign||"unset"}),l,l,l,y,l),v=(0,i.iv)(["cursor:pointer;&:hover,&:focus{text-decoration:underline;}"]),w=(0,i.ZP)(b).withConfig({displayName:"TableStyles__TDClickable",componentId:"sc-1saikeo-10"})(["",""],v),T=(0,i.ZP)(b).withConfig({displayName:"TableStyles__TDMomentImage",componentId:"sc-1saikeo-11"})(["position:sticky;left:0;z-index:1;padding:0;height:64px;background-color:inherit;img{width:60px;height:auto;vertical-align:middle;}"]),P=(0,i.ZP)(b).withConfig({displayName:"TableStyles__TDPackImage",componentId:"sc-1saikeo-12"})(["width:40px;img{width:40px;}"]),k=(0,i.ZP)(b).withConfig({displayName:"TableStyles__TDUserImage",componentId:"sc-1saikeo-13"})(["width:40px;img{width:40px;border-radius:100%;}"]),S=(0,i.ZP)(b).withConfig({displayName:"TableStyles__TDPlayerName",componentId:"sc-1saikeo-14"})([""," padding:"," ",";min-width:186px;max-width:186px;line-height:16px;white-space:normal;"],r.p8.labelVertical,o.ZP.spacing[4],o.ZP.spacing[12]),_=(0,i.ZP)(b).withConfig({displayName:"TableStyles__TDPrice",componentId:"sc-1saikeo-15"})([""," white-space:nowrap;"],r.qY.h5),I=(0,i.ZP)(_).withConfig({displayName:"TableStyles__TDPriceClickable",componentId:"sc-1saikeo-16"})([""," ",""],r.qY.h5,v),C=(0,i.ZP)(b).withConfig({displayName:"TableStyles__TDUser",componentId:"sc-1saikeo-17"})(["max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold;"]),Z=(0,i.ZP)(C).withConfig({displayName:"TableStyles__TDBuyer",componentId:"sc-1saikeo-18"})(["",""],r.qY.h6),N=(0,i.ZP)(b).withConfig({displayName:"TableStyles__TDTime",componentId:"sc-1saikeo-19"})(["min-width:160px;max-width:160px;"]),O=(0,i.ZP)(g).withConfig({displayName:"TableStyles__StyledTRSticky",componentId:"sc-1saikeo-20"})(["background-color:",";","{background-color:",";}"],o.ZP.color.black[700],p,o.ZP.color.black[700]),E=(0,i.ZP)(a.ZP).withConfig({displayName:"TableStyles__StyledDisplayHeading",componentId:"sc-1saikeo-21"})(["margin-right:32px;text-transform:uppercase;"]),D=i.ZP.span.withConfig({displayName:"TableStyles__StyledSerial",componentId:"sc-1saikeo-22"})(["color:",";"],(function(n){return n.$isJerseyNumber?o.ZP.color.brand[300]:o.ZP.color.white}))}}]);