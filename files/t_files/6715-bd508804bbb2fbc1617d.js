"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6715],{61747:function(e,n,o){o.d(n,{Z:function(){return v}});var r=o(85893),t=(o(67294),o(228)),i=o(33806);var s=o(8997),a=o(99254),c=o(45432),l=s.ZP.div.withConfig({displayName:"Owner__StyledRoot",componentId:"sc-1qztwb8-0"})(["display:flex;align-items:center;"]),d=s.ZP.div.withConfig({displayName:"Owner__StyledAvatar",componentId:"sc-1qztwb8-1"})(["margin-right:8px;width:32px;height:32px;overflow:hidden;background-color:",";border-radius:50%;img{display:block;margin:0;padding:0;width:100%;height:auto;}"],a.ZP.color.trueBlack),u=s.ZP.div.withConfig({displayName:"Owner__StyledDetails",componentId:"sc-1qztwb8-2"})([""]),p=(0,s.ZP)(c.Z).withConfig({displayName:"Owner__StyledLabel",componentId:"sc-1qztwb8-3"})(["text-transform:uppercase;"]),h=(0,s.ZP)(c.Z).withConfig({displayName:"Owner__StyledUsername",componentId:"sc-1qztwb8-4"})([""]);function f(e){var n,o,t=e.owner,s=e.userRole,c=null===t||void 0===t||null===(n=t.publicInfo)||void 0===n?void 0:n.profileImageUrl,f=null===t||void 0===t||null===(o=t.publicInfo)||void 0===o?void 0:o.username;return(0,r.jsxs)(l,{children:[(0,r.jsx)(d,{children:(0,r.jsx)("img",{src:c,alt:"Showcase owner - ".concat(f)})}),(0,r.jsxs)(u,{children:[(0,r.jsx)(p,{size:"small",color:a.ZP.color.grey[700],children:"Created By"}),(0,r.jsxs)(h,{size:"medium",color:a.ZP.color.white,children:[f,s===i.N1.ADMIN&&(0,r.jsx)("span",{children:" (you)"})]})]})]})}f.defaultProps={owner:void 0,userRole:void 0};var w=f;var v=function(e){var n,o,s=e.owner,a=(0,t.Z)().currentUser,c=function(e){var n=e.ownerId,o=e.userId;return"string"===typeof o&&"string"===typeof n&&o===n?i.N1.ADMIN:i.N1.VIEWER}({ownerId:null===s||void 0===s||null===(n=s.publicInfo)||void 0===n?void 0:n.dapperID,userId:null===a||void 0===a||null===(o=a.publicInfo)||void 0===o?void 0:o.dapperID});return s?(0,r.jsx)(w,{owner:s,userRole:c}):null}},29409:function(e,n,o){o.d(n,{Z:function(){return pe}});var r=o(159),t=o(92809),i=o(85893),s=o(809),a=o.n(s),c=o(30266),l=o(8132),d=o(67294),u=o(46829),p=o(91717),h=o(55600),f=o(11163),w=o(8997),v=o(99254),m=o(10308),b=o(43423),k=o(37089),g=o(87157),y=o(94329),I=o(55076),j=o(57223),x=w.ZP.div.withConfig({displayName:"Title__StyledRoot",componentId:"sc-10v7h3g-0"})(["margin-bottom:",";"],v.ZP.spacing[8]),P=(0,w.ZP)(j.Z.H4).withConfig({displayName:"Title__StyledTitle",componentId:"sc-10v7h3g-1"})(["padding-bottom:",";word-break:break-word;@supports (-webkit-line-clamp:2){&{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2;}}"],v.W0[4]);function O(e){var n=e.title;return(0,i.jsx)(x,{children:(0,i.jsx)(P,{color:v.ZP.color.white,children:n})})}O.defaultProps={title:void 0};var Z=O,_=o(61747),S=o(2072),C=o(228),L=o(18578),E=o(42328),N=o(7090),D=o(20346),T=o(5012),R=o(96946),U=w.ZP.button.withConfig({displayName:"LikesCounter__StyledLabelWrapper",componentId:"aqtw2j-0"})(["display:flex;flex-flow:row nowrap;align-items:center;margin-top:",";"],v.W0[4]),$=w.ZP.span.withConfig({displayName:"LikesCounter__StyledLabel",componentId:"aqtw2j-1"})([""," font-size:",";color:",";user-select:none;"],D.Ok.button,v.JB[12],(function(e){return e.$loading?v.$_.black[300]:v.$_.white}));function q(e){var n=e.count,o=e.isLiked,r=e.trackingId,t=e.trackingProperties,s=e.onLikeClick,a=e.loading,c=(0,b.Z)().track,l=(0,N.$)().t,d=(0,T.u)(n),u=a?v.$_.black[300]:o?"transparent":"white",p=a?v.$_.black[300]:o?"#E35450":"transparent";return(0,i.jsxs)(U,{type:"button",onClick:function(){s(),c(null!==r&&void 0!==r?r:"likeCounter-action-like",t)},disabled:a,children:[(0,i.jsx)($,{$loading:a,children:d<=0?l("LikeButton.like"):d}),(0,i.jsx)(R.Z.Fire,{width:20,strokeColor:u,color:p})]})}q.defaultProps={count:0,isLiked:!1,onLikeClick:function(){},trackingId:void 0,trackingProperties:void 0,loading:!1};var z=q,M=o(76752),W=o(87445),B=o(30648),H=o(52921),F="likeShowcase",V=o(53665),A=o(70768);function K(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function Q(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?K(Object(o),!0).forEach((function(n){(0,t.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):K(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function G(e){var n,o=e.showcaseId,r=(0,l.Z)(e,["showcaseId"]),s=(0,f.useRouter)(),u=(0,p.gV)(),h=(0,d.useState)(!1),w=h[0],v=h[1],m=(0,d.useState)(!1),b=m[0],k=m[1],y=(0,g.TO)(Q(Q({},(null===u||void 0===u?void 0:u.feature_signUpRedirect)&&(0,t.Z)({},H.D9,"login")),u.showcaseLikeButton&&(0,t.Z)({},F,!0))),I=(0,W.PM)(null===s||void 0===s?void 0:s.asPath),j=!!(null===I||void 0===I?void 0:I[F]),x=(0,C.Z)(),P=x.currentUser,O=x.FS,Z=x.currentUserFsm,_=null===P||void 0===P||null===(n=P.publicInfo)||void 0===n?void 0:n.dapperID,S=function(){var e=(0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(!0);try{(0,B.D1)((0,g.eK)({showcaseId:o}))}catch(n){(0,M.Tb)(n)}s.push(y);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=(0,L.Z)({variables:{showcaseID:o,userID:_},skip:!o}),D=N.showcaseLikes,T=N.showcaseLikesLoading,R=N.showcaseLikesError,U=N.refetch,$=(0,V.Z)({variables:{showcaseID:o,userID:_},skip:!_||!o}),q=$.updateShowcaseLikes,K=$.updateShowcaseLikesLoading,G=$.updateShowcaseLikesError,J=null===D||void 0===D?void 0:D.likesCount,X=null===D||void 0===D?void 0:D.hasUserLiked;(0,d.useEffect)((function(){function e(){return(e=(0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j||!_){e.next=4;break}return e.next=3,q();case 3:(0,B.sw)([F]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j,_,q]);var Y=(0,d.useCallback)((0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z!==O.NOT_AUTHENTICATED){e.next=4;break}k(!0),e.next=7;break;case 4:return e.next=6,q();case 6:U();case 7:case"end":return e.stop()}}),e)}))),[Z,O,q,U]);return R||G?null:(0,i.jsxs)(d.Fragment,{children:[(0,i.jsx)(E.Z,{children:(0,i.jsx)(z,Q({count:J,isLiked:X,onLikeClick:Y,loading:T||K},r))}),(0,i.jsx)(A.Z,{isOpen:b,setIsModalOpen:k,onRedirectConfirmation:S,isLoading:w,buttonTrackingId:"dapperAccountCreation-showcaseLikeCounter"})]})}G.defaultProps={showcaseId:void 0};var J=G,X=w.ZP.div.withConfig({displayName:"ShowcaseThumbnail__StyledRoot",componentId:"an2lpq-0"})(["padding:20px;cursor:default;background-color:",";border-radius:8px;"],v.$_.black[700]),Y=w.ZP.div.withConfig({displayName:"ShowcaseThumbnail__StyledMomentsWrapper",componentId:"an2lpq-1"})(["cursor:pointer;"]),ee=w.ZP.div.withConfig({displayName:"ShowcaseThumbnail__StyledHeaderWrapper",componentId:"an2lpq-2"})(["display:grid;grid-template-columns:",";align-content:start;margin-bottom:",";"],(function(e){return e.$isLikesVisible?"1fr auto":"1fr"}),v.W0[8]),ne=w.ZP.div.withConfig({displayName:"ShowcaseThumbnail__StyledCounterWrapper",componentId:"an2lpq-3"})(["align-self:start;margin-right:",";margin-left:",";"],v.W0[8],v.W0[12]);function oe(e){var n,o=e.id,r=e.name,t=e.moments,s=e.owner,a=e.showcaseSection,c=(0,b.Z)().track,l=(0,m.dd)().openModal,d=(0,p.gV)(),u=(0,f.useRouter)();if(0===(null!==(n=null===t||void 0===t?void 0:t.length)&&void 0!==n?n:0))return null;var h="/showcases"===(null===u||void 0===u?void 0:u.pathname)?"?".concat(S.H):"";return(0,i.jsxs)(X,{children:[(0,i.jsx)(Y,{onClick:function(){return c("showcaseThumbnail-videoReel",{showcaseId:o,section:a}),void l({id:"VideoReel-modal",Comp:y.Z,props:{title:r,moments:null!==t&&void 0!==t?t:[],user:null===s||void 0===s?void 0:s.publicInfo,showcaseId:o,isCustomClose:!0,key:o}})},children:(0,i.jsx)(I.Z,{moments:t})}),(0,i.jsxs)(ee,{$isLikesVisible:d.showcaseLikeButton,children:[(0,i.jsx)(k.Z,{href:"".concat((0,g.eK)({showcaseId:"[id]"})).concat(h),as:"".concat((0,g.eK)({showcaseId:o})).concat(h),passHref:!0,trackingId:"showcaseThumbnail-showcasePage",children:(0,i.jsx)("a",{children:(0,i.jsx)(Z,{title:r})})}),(0,i.jsx)(ne,{children:d.showcaseLikeButton&&(0,i.jsx)(J,{showcaseId:o,trackingId:"".concat(a,"-showcaseThumbnail-likesCounter--like"),trackingProperties:{showcaseId:o}})})]}),(0,i.jsx)(_.Z,{owner:s})]})}oe.defaultProps={id:void 0,name:void 0,moments:void 0,owner:void 0};var re=oe,te=o(87783),ie=o(15101),se=o(49887),ae=o(16539);function ce(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function le(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?ce(Object(o),!0).forEach((function(n){(0,t.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ce(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function de(e){var n,o=e.showcaseId,r=e.removeShowcase,t=e.rejectedIds,s=e.isPlayable,p=(0,l.Z)(e,["showcaseId","removeShowcase","rejectedIds","isPlayable"]),f=(0,ie.Z)({query:te.u8,variables:{showcaseId:o},skip:!o}),w=f.showcase,v=f.fsm,m=(0,u.useQuery)(h.t,{variables:{showcaseOwnerId:null===w||void 0===w?void 0:w.ownerId},skip:!(null===w||void 0===w?void 0:w.ownerId)}),b=m.loading,k=m.error,g=m.data,y=null===g||void 0===g?void 0:g.getUserProfile,I=v===ae.E.SUCCESS,j=v===ae.E.ERROR,x=v===ae.E.NOT_FOUND,P=v===ae.E.FETCHING||b,O=!k&&!!w&&(null===w||void 0===w||null===(n=w.showcaseMoments)||void 0===n?void 0:n.length)>0;return(0,d.useEffect)((function(){P||I||!j&&!x||O||-1!==t.indexOf(o)||function(){var e=(0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[P,O,t]),P||!O?null:(0,i.jsx)(re,le({id:w.id,name:w.name,moments:w.showcaseMoments,owner:y,isPlayable:s},p))}function ue(e){var n,o=e.showcaseId,r=e.removeShowcase,t=e.rejectedIds,s=e.isPlayable,u=(0,l.Z)(e,["showcaseId","removeShowcase","rejectedIds","isPlayable"]),h=(0,p.gV)(),f=null===h||void 0===h?void 0:h.optimizedShowcaseQuery,w=(0,se.Z)({query:(0,te.rX)({suffix:"THUMBNAIL"}),variables:{showcaseId:o},skip:!o||!f,fetchPolicy:"network-only"}),v=w.showcase,m=w.fsm,b=null===v||void 0===v?void 0:v.owner,k=m===ae.E.SUCCESS,g=m===ae.E.ERROR,y=m===ae.E.NOT_FOUND,I=m===ae.E.FETCHING,j=!!v&&(null===v||void 0===v||null===(n=v.showcaseMoments)||void 0===n?void 0:n.length)>0;return(0,d.useEffect)((function(){I||k||!g&&!y||j||-1!==t.indexOf(o)||function(){var e=(0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[I,j,t]),I||!j?null:(0,i.jsx)(re,le({id:v.id,name:v.name,moments:v.showcaseMoments,owner:b,isPlayable:s},u))}de.defaultProps={rejectedIds:[],removeShowcase:function(){},showcaseId:void 0,isPlayable:!1},ue.defaultProps={rejectedIds:[],removeShowcase:function(){},showcaseId:void 0,isPlayable:!1};var pe=function(e){var n=(0,r.Z)({},e),o=(0,p.gV)();return(null===o||void 0===o?void 0:o.optimizedShowcaseQuery)?(0,i.jsx)(ue,le({},n)):(0,i.jsx)(de,le({},n))}},17420:function(e,n,o){var r=o(85893),t=(o(67294),o(8997)),i=o(99254),s=o(20346),a=o(37089),c=(0,t.iv)(["color:",";border-color:",";"],i.$_.trueBlack,i.$_.trueBlack),l=t.ZP.a.withConfig({displayName:"LinkUnderlined__StyledLink",componentId:"wwkqzc-0"})([""," padding:"," 0;color:",";border-bottom:2px solid ",";"," &:hover{border-bottom:2px solid ",";}"],s.Ok.button,i.W0[8],i.$_.white,i.$_.white,(function(e){return"dark"===e.variant&&c}),i.$_.black[400]);function d(e){var n=e.link,o=e.href,t=e.as,i=e.trackingId,s=e.variant,c=e.children;return(0,r.jsx)(a.Z,{link:n,href:o,as:t,passHref:!0,trackingId:i,children:(0,r.jsx)(l,{variant:s,children:c})})}d.defaultProps={href:void 0,link:void 0,as:void 0,variant:"default",trackingId:void 0},n.Z=d}}]);