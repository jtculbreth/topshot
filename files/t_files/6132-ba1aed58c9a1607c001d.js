"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6132],{80426:function(e,t,n){var r=n(85893),i=(n(67294),n(58826));function o(e){var t,n,o,a=e.ogData;return(0,r.jsx)(i.Z,{title:null===a||void 0===a?void 0:a.title,description:null===a||void 0===a?void 0:a.description,image:"https:".concat(null===a||void 0===a||null===(t=a.image)||void 0===t||null===(n=t.fields)||void 0===n||null===(o=n.file)||void 0===o?void 0:o.url)})}o.defaultProps={ogData:null},t.Z=o},82293:function(e,t,n){var r=n(67294);t.Z=function(e){var t=(0,r.useState)(""),n=t[0],i=t[1];return(0,r.useEffect)((function(){var t=new Image;t.src=e,t.onload=function(){return i(e)}}),[e]),n}},28467:function(e,t,n){n.d(t,{Z:function(){return L}});var r=n(92809),i=n(85893),o=n(8132),a=n(67294),s=n(79025),l=n(25730),c=n(45041),d=n(40304),p=n(11163),u=n(7090),m=n(8997),g=n(99254),f=n(56207),h=n(37089),y=n(82293),b=n(72618),v=m.ZP.section.withConfig({displayName:"Teams__StyledTeamSection",componentId:"lp3eqn-0"})(["position:relative;padding-top:",";padding-bottom:",";background-color:",";@media ","{padding-top:",";}"],g.W0[16],g.W0[16],(function(e){var t=e.$backgroundColor;return t||g.$_.black[700]}),g.w5.tablet,g.W0[40]),w=m.ZP.h2.withConfig({displayName:"Teams__StyledTitle",componentId:"lp3eqn-1"})(["margin-top:0;margin-right:auto;margin-left:auto;max-width:330px;color:",";font-weight:",";font-size:18px;text-align:center;text-transform:uppercase;@media ","{max-width:90%;font-size:31px;}"],g.$_.white,g.vC.shapiro[75],g.w5.desktop),x=m.ZP.div.withConfig({displayName:"Teams__StyledTeamListMobile",componentId:"lp3eqn-2"})(["display:block;@media ","{display:none;}"],g.w5.desktop),j=m.ZP.img.withConfig({displayName:"Teams__StyledTeamLogo",componentId:"lp3eqn-3"})(["margin-left:",";width:55px;height:auto;transition:transform 0.3s;&:hover{transform:scale(1.1);}@media ","{margin-left:0;}"],g.W0[20],g.w5.desktop),k=m.ZP.div.withConfig({displayName:"Teams__StyledTeamsContent",componentId:"lp3eqn-4"})(["display:none;@media ","{display:block;padding-bottom:42px;}"],g.w5.desktop),O=m.ZP.h3.withConfig({displayName:"Teams__StyledTeamConference",componentId:"lp3eqn-5"})(["position:relative;z-index:1;margin-top:",";margin-bottom:0;font-size:12px;font-weight:",";color:",";text-transform:uppercase;text-align:center;&::before{position:absolute;top:3px;left:0;z-index:1;width:100%;height:14px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGUlEQVQYV2P8////f0ZGRkYYzciABggLAADs3QgFZ1GRqAAAAABJRU5ErkJggg==');content:'';}"],(function(e){return e.isMarginTop?g.W0[40]:"0"}),g.vC.shapiro[65],g.$_.white),T=m.ZP.span.withConfig({displayName:"Teams__StyledText",componentId:"lp3eqn-6"})(["position:relative;z-index:2;padding:10px ",";background-color:",";"],g.W0[24],(function(e){var t=e.$backgroundColor;return t||g.$_.black[700]})),P=m.ZP.div.withConfig({displayName:"Teams__StyledNbaTeamList",componentId:"lp3eqn-7"})(["display:grid;grid-template-columns:repeat(15,1fr);margin-top:",";"],g.W0[32]),C=m.ZP.div.withConfig({displayName:"Teams__StyledWnbaTeamList",componentId:"lp3eqn-8"})(["display:grid;grid-template-columns:repeat(12,1fr);margin:"," auto 0;width:80%;"],g.W0[32]),A=m.ZP.a.withConfig({displayName:"Teams__StyledTeamAnchor",componentId:"lp3eqn-9"})(["display:flex;align-items:center;justify-content:center;"]);function _(e){return e.split(" ").splice(-1)[0].toLowerCase()}var Z=function(e){var t=e.team,n=(0,l.ws)(t),r=(0,l.Qy)(t),o=(0,l.qF)(r);return(0,i.jsx)(h.Z,{href:"/teams/[teamName]",as:"/teams/".concat(_(t)),passHref:!0,trackingId:"discovery-logged-in-team-logo",trackingProperties:{slug:n},children:(0,i.jsx)(A,{children:(0,i.jsx)(j,{alt:t,src:o,loading:"lazy"})})})};function S(e){var t=e.title,n=e.nbaTeams,r=e.wnbaTeams,o=e.backgroundColor,s=(0,u.$)().t,l=(0,p.useRouter)(),c=(0,a.useState)((null===l||void 0===l?void 0:l.asPath.indexOf("#teams"))>-1),m=function(e,t){var n=(0,a.useRef)(null);return[(0,a.useCallback)((function(r){if(r&&e){t(!1);var i=setTimeout((function(){window.scrollTo({behavior:r?"smooth":"auto",top:(null===r||void 0===r?void 0:r.offsetTop)||0})}),100);return function(){return clearTimeout(i)}}n.current=r}),[t,e])]}(c[0],c[1]),g=(0,d.Z)(m,1)[0],h=(0,y.Z)("/static/img/landing/learn-more-texture-left.svg"),j=(0,y.Z)("/static/img/landing/learn-more-texture-right.svg");return(0,i.jsxs)(v,{id:"teams",ref:g,leftBackgroundImage:h,rightBackgroundImage:j,$backgroundColor:o,children:[(0,i.jsx)(w,{children:t}),(0,i.jsx)(x,{children:(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(O,{children:(0,i.jsx)(T,{$backgroundColor:o,children:s("Discovery.Teams.text.nba")})}),(0,i.jsx)(b.Z,{imageSize:"55px",trackingId:"discovery-logged-in-team-logo"}),(0,i.jsx)(O,{isMarginTop:!0,children:(0,i.jsx)(T,{$backgroundColor:o,children:s("Discovery.Teams.text.wnba")})}),(0,i.jsx)(b.Z,{imageSize:"55px",trackingId:"discovery-logged-in-team-logo",isWnba:!0})]})}),(0,i.jsx)(k,{children:(0,i.jsxs)(f.ZP,{children:[(0,i.jsx)(O,{children:(0,i.jsx)(T,{$backgroundColor:o,children:s("Discovery.Teams.text.nba")})}),(0,i.jsx)(P,{children:n.map((function(e){return(0,i.jsx)(Z,{team:e},e)}))}),(0,i.jsx)(O,{isMarginTop:!0,children:(0,i.jsx)(T,{$backgroundColor:o,children:s("Discovery.Teams.text.wnba")})}),(0,i.jsx)(C,{children:r.map((function(e){return(0,i.jsx)(Z,{team:e},e)}))})]})})]})}S.defaultProps={backgroundColor:void 0};var I=S;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){var t,n,a,d=e.currentUser,p=e.title,m=(0,o.Z)(e,["currentUser","title"]),g=(0,u.$)().t,f=(0,s.Z)({variables:{id:null===d||void 0===d||null===(t=d.publicInfo)||void 0===t?void 0:t.dapperID},fetchPolicy:"network-only"}),h=f.currentGrowthUser,y=f.currentGrowthUserLoading,b=(0,c.a)((0,l._$)()),v=(0,c.a)((0,l.Xi)());if(d&&y)return null;var w=p,x=(0,l.NN)(null===d||void 0===d||null===(n=d.publicInfo)||void 0===n?void 0:n.favoriteTeamID);return h&&(x||(null===(a=h.following)||void 0===a?void 0:a.length)>0)&&(w=g("Growth.Discovery.Teams.text.alreadyFollowedTitle")),(0,i.jsx)(I,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:w,nbaTeams:b,wnbaTeams:v},m))}D.defaultProps={title:null,currentUser:null};var L=D},81843:function(e,t,n){n.d(t,{Z:function(){return $}});var r=n(92809),i=n(85893),o=n(8132),a=n(67294),s=n(79025),l=n(26416),c=n(40304),d=n(11163),p=n(7090),u=n(8997),m=n(99254),g=n(27765),f=n(56207),h=n(37089),y=n(25730),b=n(82293),v=n(72618),w=u.ZP.section.withConfig({displayName:"Teams__StyledTeamSection",componentId:"dpy1li-0"})(["position:relative;padding-top:",";padding-bottom:",";background-color:",";@media ","{padding-top:",";}"],m.W0[16],m.W0[16],(function(e){var t=e.$backgroundColor;return t||m.$_.black[700]}),m.w5.tablet,m.W0[40]),x=u.ZP.h2.withConfig({displayName:"Teams__StyledTitle",componentId:"dpy1li-1"})(["margin-top:0;margin-right:auto;margin-left:auto;max-width:330px;color:",";font-weight:",";font-size:18px;text-align:center;text-transform:uppercase;@media ","{max-width:90%;font-size:31px;}"],m.$_.white,m.vC.shapiro[75],m.w5.desktop),j=u.ZP.div.withConfig({displayName:"Teams__StyledTeamListMobile",componentId:"dpy1li-2"})(["display:block;@media ","{display:none;}"],m.w5.desktop),k=u.ZP.img.withConfig({displayName:"Teams__StyledTeamLogo",componentId:"dpy1li-3"})(["margin-left:",";width:55px;height:auto;transition:transform 0.3s;&:hover{transform:scale(1.1);}@media ","{margin-left:0;}"],m.W0[20],m.w5.desktop),O=u.ZP.div.withConfig({displayName:"Teams__StyledTeamsContent",componentId:"dpy1li-4"})(["display:none;@media ","{display:block;padding-bottom:42px;}"],m.w5.desktop),T=u.ZP.h3.withConfig({displayName:"Teams__StyledTeamConference",componentId:"dpy1li-5"})(["position:relative;z-index:1;margin-top:",";margin-bottom:0;font-size:12px;font-weight:",";color:",";text-transform:uppercase;text-align:center;&::before{position:absolute;top:3px;left:0;z-index:1;width:100%;height:14px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGUlEQVQYV2P8////f0ZGRkYYzciABggLAADs3QgFZ1GRqAAAAABJRU5ErkJggg==');content:'';}"],(function(e){return e.isMarginTop?m.W0[40]:"0"}),m.vC.shapiro[65],m.$_.white),P=u.ZP.span.withConfig({displayName:"Teams__StyledText",componentId:"dpy1li-6"})(["position:relative;z-index:2;padding:10px ",";background-color:",";"],m.W0[24],(function(e){var t=e.$backgroundColor;return t||m.$_.black[700]})),C=u.ZP.div.withConfig({displayName:"Teams__StyledTeamList",componentId:"dpy1li-7"})(["display:flex;justify-content:space-between;margin-top:",";"],m.W0[32]),A=u.ZP.a.withConfig({displayName:"Teams__StyledTeamAnchor",componentId:"dpy1li-8"})(["display:flex;align-items:center;justify-content:center;"]);function _(e){return e.split(" ").splice(-1)[0].toLowerCase()}var Z=function(e){var t=e.team,n=(0,y.ws)(t),r="76ers"===n?(0,g.cl)(n,g.gM):(0,g.cl)(n);return(0,i.jsx)(h.Z,{href:"/teams/[teamName]",as:"/teams/".concat(_(t)),passHref:!0,trackingId:"discovery-logged-in-team-logo",trackingProperties:{slug:n},children:(0,i.jsx)(A,{children:(0,i.jsx)(k,{alt:t,src:r,loading:"lazy"})})})};function S(e){var t=e.eastTeams,n=e.title,r=e.westTeams,o=e.backgroundColor,s=(0,p.$)().t,l=(0,d.useRouter)(),u=(0,a.useState)((null===l||void 0===l?void 0:l.asPath.indexOf("#teams"))>-1),m=function(e,t){var n=(0,a.useRef)(null);return[(0,a.useCallback)((function(r){if(r&&e){t(!1);var i=setTimeout((function(){window.scrollTo({behavior:r?"smooth":"auto",top:(null===r||void 0===r?void 0:r.offsetTop)||0})}),100);return function(){return clearTimeout(i)}}n.current=r}),[t,e])]}(u[0],u[1]),g=(0,c.Z)(m,1)[0],h=(0,b.Z)("/static/img/landing/learn-more-texture-left.svg"),y=(0,b.Z)("/static/img/landing/learn-more-texture-right.svg");return(0,i.jsxs)(w,{id:"teams",ref:g,leftBackgroundImage:h,rightBackgroundImage:y,$backgroundColor:o,children:[(0,i.jsx)(x,{children:n}),(0,i.jsx)(j,{children:(0,i.jsx)(v.Z,{imageSize:"55px",trackingId:"discovery-logged-in-team-logo"})}),(0,i.jsx)(O,{children:(0,i.jsxs)(f.ZP,{children:[(0,i.jsx)(T,{children:(0,i.jsx)(P,{$backgroundColor:o,children:s("Discovery.Teams.text.westernConference")})}),(0,i.jsx)(C,{children:r.map((function(e){return(0,i.jsx)(Z,{team:e},e)}))}),(0,i.jsx)(T,{isMarginTop:!0,children:(0,i.jsx)(P,{$backgroundColor:o,children:s("Discovery.Teams.text.easternConference")})}),(0,i.jsx)(C,{children:t.map((function(e){return(0,i.jsx)(Z,{team:e},e)}))})]})})]})}S.defaultProps={backgroundColor:void 0};var I=S,N=n(45041);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){var t,n,a,c=e.currentUser,d=e.title,u=(0,o.Z)(e,["currentUser","title"]),m=(0,p.$)().t,g=(0,s.Z)({variables:{id:null===c||void 0===c||null===(t=c.publicInfo)||void 0===t?void 0:t.dapperID},fetchPolicy:"network-only"}),f=g.currentGrowthUser,h=g.currentGrowthUserLoading,b=(0,N.a)(Object.keys(l.yR)),v=(0,N.a)(Object.keys(l.Oh));if(c&&h)return null;var w=d,x=(0,y.NN)(null===c||void 0===c||null===(n=c.publicInfo)||void 0===n?void 0:n.favoriteTeamID);return f&&(x||(null===(a=f.following)||void 0===a?void 0:a.length)>0)&&(w=m("Growth.Discovery.Teams.text.alreadyFollowedTitle")),(0,i.jsx)(I,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({eastTeams:v,title:w,westTeams:b},u))}L.defaultProps={title:null,currentUser:null};var $=L},72618:function(e,t,n){var r=n(92809),i=n(67294),o=n(85893),a=n(87157),s=n(8997),l=n(25730),c=n(37089),d=n(45041);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=s.ZP.div.withConfig({displayName:"TeamsList__StyledTeamList",componentId:"sc-1ilk36e-0"})(["display:grid;grid-template-columns:",";grid-column-gap:8px;align-items:center;padding-top:40px;padding-bottom:40px;padding-left:16px;overflow-y:auto;background-color:",";@media only screen and (min-width:800px){justify-content:",";}&::after{width:8px;height:8px;content:'';}"],(function(e){return"repeat(".concat(e.$isWnba?12:31,", ").concat(e.$gridSize,")")}),(function(e){return e.$bgColor}),(function(e){return"".concat(e.$isWnba&&"center")})),g=s.ZP.img.withConfig({displayName:"TeamsList__StyledTeamLogo",componentId:"sc-1ilk36e-1"})(["width:100%;max-width:",";transition:transform 0.3s;&:hover{transform:scale(1.1);}"],(function(e){return e.width})),f=s.ZP.a.withConfig({displayName:"TeamsList__StyledTeamAnchor",componentId:"sc-1ilk36e-2"})(["min-width:",";"],(function(e){return e.width}));function h(e){var t=e.trackingId,n=e.isLazyLoad,r=e.imageSize,s=e.backgroundColor,p=e.isWnba,h=(0,l._$)(),y=(0,l.Xi)(),b=p?(0,d.a)(y):(0,d.a)(h);return(0,o.jsx)(m,{$gridSize:r,$isWnba:p,$bgColor:s,children:b.map((function(e){var s=(0,l.ws)(e),d=(0,l.Qy)(e),p=(0,l.qF)(d),m={href:(0,a.Uv)({teamName:"[teamName]"}),as:(0,a.Uv)({teamName:s})};return(0,i.createElement)(c.Z,u(u({},m),{},{key:"teamsList-".concat(s),passHref:!0,trackingId:t,trackingProperties:{team:s}}),(0,o.jsx)(f,{children:(0,o.jsx)(g,{width:r,height:r,loading:n?"lazy":"auto",alt:e,src:p})}))}))})}h.defaultProps={trackingId:"teamList",isLazyLoad:!0,imageSize:"30px",backgroundColor:"transparent",isWnba:!1},t.Z=h},26416:function(e,t,n){n.d(t,{Oh:function(){return a},yR:function(){return s},vj:function(){return l}});var r=n(92809);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a={"Milwaukee Bucks":"MIL","Toronto Raptors":"TOR","Boston Celtics":"BOS","Miami Heat":"MIA","Indiana Pacers":"IND","Philadelphia 76ers":"PHI","Brooklyn Nets":"BKN","Orlando Magic":"ORL","Washington Wizards":"WAS","Charlotte Hornets":"CHA","Chicago Bulls":"CHI","New York Knicks":"NYK","Detroit Pistons":"DET","Atlanta Hawks":"ATL","Cleveland Cavaliers":"CLE"},s={"Los Angeles Lakers":"LAL","LA Clippers":"LAC","Denver Nuggets":"DEN","Utah Jazz":"UTA","Oklahoma City Thunder":"OKC","Houston Rockets":"HOU","Dallas Mavericks":"DAL","Memphis Grizzlies":"MEM","Portland Trail Blazers":"POR","New Orleans Pelicans":"NOP","Sacramento Kings":"SAC","San Antonio Spurs":"SAS","Phoenix Suns":"PHX","Minnesota Timberwolves":"MIN","Golden State Warriors":"GSW"},l=o(o({},a),s)}}]);