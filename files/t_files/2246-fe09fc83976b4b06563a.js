"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2246],{76972:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(59910),a=n(13882),s=36e5;function u(t,e){(0,a.Z)(2,arguments);var n=(0,r.Z)(t,e)/s;return n>0?Math.floor(n):Math.ceil(n)}},83918:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(19013),a=n(13882);function s(t,e){(0,a.Z)(2,arguments);var n=(0,r.Z)(t),s=(0,r.Z)(e),u=n.getFullYear()-s.getFullYear(),o=n.getMonth()-s.getMonth();return 12*u+o}var u=n(49474);function o(t){(0,a.Z)(1,arguments);var e=(0,r.Z)(t);return e.setHours(23,59,59,999),e}function i(t){(0,a.Z)(1,arguments);var e=(0,r.Z)(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function Z(t){(0,a.Z)(1,arguments);var e=(0,r.Z)(t);return o(e).getTime()===i(e).getTime()}function h(t,e){(0,a.Z)(2,arguments);var n,o=(0,r.Z)(t),i=(0,r.Z)(e),h=(0,u.Z)(o,i),c=Math.abs(s(o,i));if(c<1)n=0;else{1===o.getMonth()&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-h*c);var v=(0,u.Z)(o,i)===-h;Z((0,r.Z)(t))&&1===c&&1===(0,u.Z)(t,i)&&(v=!1),n=h*(c-Number(v))}return 0===n?0:n}},11699:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(59910),a=n(13882);function s(t,e){(0,a.Z)(2,arguments);var n=(0,r.Z)(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}},82246:function(t,e,n){n.d(e,{Z:function(){return F}});var r=n(49474),a=n(70696),s=n(83918),u=n(19013),o=n(24262),i=n(13882);function Z(t){(0,i.Z)(1,arguments);var e=(0,u.Z)(t);return e.setHours(0,0,0,0),e}var h=864e5;function c(t,e){(0,i.Z)(2,arguments);var n=Z(t),r=Z(e),a=n.getTime()-(0,o.Z)(n),s=r.getTime()-(0,o.Z)(r);return Math.round((a-s)/h)}function v(t,e){var n=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return n<0?-1:n>0?1:n}function f(t,e){(0,i.Z)(2,arguments);var n=(0,u.Z)(t),r=(0,u.Z)(e),a=v(n,r),s=Math.abs(c(n,r));n.setDate(n.getDate()-a*s);var o=Number(v(n,r)===-a),Z=a*(s-o);return 0===Z?0:Z}var g=n(76972),l=n(69690),M=n(11699),d=n(12274),m=n(83946),b=n(77349);function y(t,e){(0,i.Z)(2,arguments);var n=(0,m.Z)(e);return(0,b.Z)(t,-n)}var w=n(11640);function D(t,e){(0,i.Z)(2,arguments);var n=(0,m.Z)(e);return(0,w.Z)(t,-n)}function k(t,e){if((0,i.Z)(2,arguments),!e||"object"!==typeof e)return new Date(NaN);var n="years"in e?(0,m.Z)(e.years):0,r="months"in e?(0,m.Z)(e.months):0,a="weeks"in e?(0,m.Z)(e.weeks):0,s="days"in e?(0,m.Z)(e.days):0,o="hours"in e?(0,m.Z)(e.hours):0,Z="minutes"in e?(0,m.Z)(e.minutes):0,h="seconds"in e?(0,m.Z)(e.seconds):0,c=D((0,u.Z)(t),r+12*n),v=y(c,s+7*a),f=Z+60*o,g=h+60*f,l=1e3*g,M=new Date(v.getTime()-l);return M}function F(t){var e=t.start,n=t.end;(0,i.Z)(1,arguments);var o=(0,u.Z)(e),Z=(0,u.Z)(n);if(!(0,d.Z)(o))throw new RangeError("Start Date is invalid");if(!(0,d.Z)(Z))throw new RangeError("End Date is invalid");var h={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},c=(0,r.Z)(o,Z);h.years=Math.abs((0,a.Z)(o,Z));var v=k(o,{years:c*h.years});h.months=Math.abs((0,s.Z)(v,Z));var m=k(v,{months:c*h.months});h.days=Math.abs(f(m,Z));var b=k(m,{days:c*h.days});h.hours=Math.abs((0,g.Z)(b,Z));var y=k(b,{hours:c*h.hours});h.minutes=Math.abs((0,l.Z)(y,Z));var w=k(y,{minutes:c*h.minutes});return h.seconds=Math.abs((0,M.Z)(w,Z)),h}}}]);