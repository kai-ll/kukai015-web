(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function r1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dv={exports:{}},ru={},hv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),s1=Symbol.for("react.portal"),i1=Symbol.for("react.fragment"),o1=Symbol.for("react.strict_mode"),a1=Symbol.for("react.profiler"),l1=Symbol.for("react.provider"),u1=Symbol.for("react.context"),c1=Symbol.for("react.forward_ref"),d1=Symbol.for("react.suspense"),h1=Symbol.for("react.memo"),f1=Symbol.for("react.lazy"),Am=Symbol.iterator;function p1(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var fv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pv=Object.assign,mv={};function oi(t,e,n){this.props=t,this.context=e,this.refs=mv,this.updater=n||fv}oi.prototype.isReactComponent={};oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gv(){}gv.prototype=oi.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=mv,this.updater=n||fv}var Ah=Th.prototype=new gv;Ah.constructor=Th;pv(Ah,oi.prototype);Ah.isPureReactComponent=!0;var Sm=Array.isArray,yv=Object.prototype.hasOwnProperty,Sh={current:null},vv={key:!0,ref:!0,__self:!0,__source:!0};function _v(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)yv.call(e,r)&&!vv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:$o,type:t,key:i,ref:o,props:s,_owner:Sh.current}}function m1(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kh(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function g1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var km=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g1(""+t.key):e.toString(36)}function Qa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $o:case s1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+gc(o,0):r,Sm(s)?(n="",t!=null&&(n=t.replace(km,"$&/")+"/"),Qa(s,e,n,"",function(d){return d})):s!=null&&(kh(s)&&(s=m1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(km,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Sm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+gc(i,l);o+=Qa(i,e,n,u,s)}else if(u=p1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+gc(i,l++),o+=Qa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ka(t,e,n){if(t==null)return t;var r=[],s=0;return Qa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function y1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ja={transition:null},v1={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:Sh};function wv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ka,forEach:function(t,e,n){ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ka(t,function(){e++}),e},toArray:function(t){return ka(t,function(e){return e})||[]},only:function(t){if(!kh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=oi;ee.Fragment=i1;ee.Profiler=a1;ee.PureComponent=Th;ee.StrictMode=o1;ee.Suspense=d1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v1;ee.act=wv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Sh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)yv.call(e,u)&&!vv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:$o,type:t.type,key:s,ref:i,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:u1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l1,_context:t},t.Consumer=t};ee.createElement=_v;ee.createFactory=function(t){var e=_v.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:c1,render:t}};ee.isValidElement=kh;ee.lazy=function(t){return{$$typeof:f1,_payload:{_status:-1,_result:t},_init:y1}};ee.memo=function(t,e){return{$$typeof:h1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ja.transition;Ja.transition={};try{t()}finally{Ja.transition=e}};ee.unstable_act=wv;ee.useCallback=function(t,e){return ht.current.useCallback(t,e)};ee.useContext=function(t){return ht.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ht.current.useEffect(t,e)};ee.useId=function(){return ht.current.useId()};ee.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ht.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ee.useRef=function(t){return ht.current.useRef(t)};ee.useState=function(t){return ht.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ht.current.useTransition()};ee.version="18.3.1";hv.exports=ee;var W=hv.exports;const _1=r1(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1=W,x1=Symbol.for("react.element"),E1=Symbol.for("react.fragment"),I1=Object.prototype.hasOwnProperty,T1=w1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A1={key:!0,ref:!0,__self:!0,__source:!0};function xv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)I1.call(e,r)&&!A1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:x1,type:t,key:i,ref:o,props:s,_owner:T1.current}}ru.Fragment=E1;ru.jsx=xv;ru.jsxs=xv;dv.exports=ru;var c=dv.exports,sd={},Ev={exports:{}},Rt={},Iv={exports:{}},Tv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var X=B.length;B.push(Q);e:for(;0<X;){var ve=X-1>>>1,ce=B[ve];if(0<s(ce,Q))B[ve]=Q,B[X]=ce,X=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],X=B.pop();if(X!==Q){B[0]=X;e:for(var ve=0,ce=B.length,Ae=ce>>>1;ve<Ae;){var gn=2*(ve+1)-1,yn=B[gn],vn=gn+1,_n=B[vn];if(0>s(yn,X))vn<ce&&0>s(_n,yn)?(B[ve]=_n,B[vn]=X,ve=vn):(B[ve]=yn,B[gn]=X,ve=gn);else if(vn<ce&&0>s(_n,X))B[ve]=_n,B[vn]=X,ve=vn;else break e}}return Q}function s(B,Q){var X=B.sortIndex-Q.sortIndex;return X!==0?X:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,g=null,v=3,_=!1,C=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=B)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function j(B){if(N=!1,T(B),!C)if(n(u)!==null)C=!0,gi(O);else{var Q=n(d);Q!==null&&mn(j,Q.startTime-B)}}function O(B,Q){C=!1,N&&(N=!1,S(m),m=-1),_=!0;var X=v;try{for(T(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||B&&!k());){var ve=g.callback;if(typeof ve=="function"){g.callback=null,v=g.priorityLevel;var ce=ve(g.expirationTime<=Q);Q=t.unstable_now(),typeof ce=="function"?g.callback=ce:g===n(u)&&r(u),T(Q)}else r(u);g=n(u)}if(g!==null)var Ae=!0;else{var gn=n(d);gn!==null&&mn(j,gn.startTime-Q),Ae=!1}return Ae}finally{g=null,v=X,_=!1}}var F=!1,x=null,m=-1,w=5,I=-1;function k(){return!(t.unstable_now()-I<w)}function R(){if(x!==null){var B=t.unstable_now();I=B;var Q=!0;try{Q=x(!0,B)}finally{Q?A():(F=!1,x=null)}}else F=!1}var A;if(typeof E=="function")A=function(){E(R)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,Sr=jt.port2;jt.port1.onmessage=R,A=function(){Sr.postMessage(null)}}else A=function(){D(R,0)};function gi(B){x=B,F||(F=!0,A())}function mn(B,Q){m=D(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){C||_||(C=!0,gi(O))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var X=v;v=Q;try{return B()}finally{v=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=v;v=B;try{return Q()}finally{v=X}},t.unstable_scheduleCallback=function(B,Q,X){var ve=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ve+X:ve):X=ve,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=X+ce,B={id:p++,callback:Q,priorityLevel:B,startTime:X,expirationTime:ce,sortIndex:-1},X>ve?(B.sortIndex=X,e(d,B),n(u)===null&&B===n(d)&&(N?(S(m),m=-1):N=!0,mn(j,X-ve))):(B.sortIndex=ce,e(u,B),C||_||(C=!0,gi(O))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var Q=v;return function(){var X=v;v=Q;try{return B.apply(this,arguments)}finally{v=X}}}})(Tv);Iv.exports=Tv;var S1=Iv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=W,bt=S1;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Av=new Set,fo={};function es(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(fo[t]=e,t=0;t<e.length;t++)Av.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),id=Object.prototype.hasOwnProperty,C1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},bm={};function b1(t){return id.call(bm,t)?!0:id.call(Cm,t)?!1:C1.test(t)?bm[t]=!0:(Cm[t]=!0,!1)}function R1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function N1(t,e,n,r){if(e===null||typeof e>"u"||R1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,bh);Qe[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,bh);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,bh);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rh(t,e,n,r){var s=Qe.hasOwnProperty(e)?Qe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(N1(e,n,s,r)&&(n=null),r||s===null?b1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ld=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),Cv=Symbol.for("react.offscreen"),Rm=Symbol.iterator;function Ri(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,yc;function Ui(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var vc=!1;function _c(t,e){if(!t||vc)return"";vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ui(t):""}function P1(t){switch(t.tag){case 5:return Ui(t.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 2:case 15:return t=_c(t.type,!1),t;case 11:return t=_c(t.type.render,!1),t;case 1:return t=_c(t.type,!0),t;default:return""}}function ud(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case xs:return"Portal";case od:return"Profiler";case Nh:return"StrictMode";case ad:return"Suspense";case ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kv:return(t.displayName||"Context")+".Consumer";case Sv:return(t._context.displayName||"Context")+".Provider";case Ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jh:return e=t.displayName||null,e!==null?e:ud(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return ud(t(e))}catch{}}return null}function j1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ud(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D1(t){var e=bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=D1(t))}function Rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cd(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nv(t,e){e=e.checked,e!=null&&Rh(t,"checked",e,!1)}function dd(t,e){Nv(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hd(t,e.type,n):e.hasOwnProperty("defaultValue")&&hd(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hd(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bi=Array.isArray;function Ds(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Bi(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Pv(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,Dv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O1=["Webkit","ms","Moz","O"];Object.keys(Ji).forEach(function(t){O1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ji[e]=Ji[t]})});function Ov(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ji.hasOwnProperty(t)&&Ji[t]?(""+e).trim():e+"px"}function Vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ov(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var V1=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(t,e){if(e){if(V1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function Dh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vd=null,Os=null,Vs=null;function Om(t){if(t=Ho(t)){if(typeof vd!="function")throw Error(L(280));var e=t.stateNode;e&&(e=lu(e),vd(t.stateNode,t.type,e))}}function Mv(t){Os?Vs?Vs.push(t):Vs=[t]:Os=t}function Lv(){if(Os){var t=Os,e=Vs;if(Vs=Os=null,Om(t),e)for(t=0;t<e.length;t++)Om(e[t])}}function Fv(t,e){return t(e)}function Uv(){}var wc=!1;function Bv(t,e,n){if(wc)return t(e,n);wc=!0;try{return Fv(t,e,n)}finally{wc=!1,(Os!==null||Vs!==null)&&(Uv(),Lv())}}function mo(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var _d=!1;if(Pn)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){_d=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{_d=!1}function M1(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Yi=!1,yl=null,vl=!1,wd=null,L1={onError:function(t){Yi=!0,yl=t}};function F1(t,e,n,r,s,i,o,l,u){Yi=!1,yl=null,M1.apply(L1,arguments)}function U1(t,e,n,r,s,i,o,l,u){if(F1.apply(this,arguments),Yi){if(Yi){var d=yl;Yi=!1,yl=null}else throw Error(L(198));vl||(vl=!0,wd=d)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vm(t){if(ts(t)!==t)throw Error(L(188))}function B1(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Vm(s),t;if(i===r)return Vm(s),e;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function $v(t){return t=B1(t),t!==null?qv(t):null}function qv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qv(t);if(e!==null)return e;t=t.sibling}return null}var Wv=bt.unstable_scheduleCallback,Mm=bt.unstable_cancelCallback,z1=bt.unstable_shouldYield,$1=bt.unstable_requestPaint,Ce=bt.unstable_now,q1=bt.unstable_getCurrentPriorityLevel,Oh=bt.unstable_ImmediatePriority,Hv=bt.unstable_UserBlockingPriority,_l=bt.unstable_NormalPriority,W1=bt.unstable_LowPriority,Gv=bt.unstable_IdlePriority,su=null,an=null;function H1(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:Q1,G1=Math.log,K1=Math.LN2;function Q1(t){return t>>>=0,t===0?32:31-(G1(t)/K1|0)|0}var Na=64,Pa=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=zi(l):(i&=o,i!==0&&(r=zi(i)))}else o=n&~s,o!==0?r=zi(o):i!==0&&(r=zi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),s=1<<n,r|=t[n],e&=~s;return r}function J1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Qt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=J1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function xd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kv(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function X1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Qt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Vh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function Qv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jv,Mh,Yv,Xv,Zv,Ed=!1,ja=[],nr=null,rr=null,sr=null,go=new Map,yo=new Map,Kn=[],Z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lm(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Pi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ho(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function eI(t,e,n,r,s){switch(e){case"focusin":return nr=Pi(nr,t,e,n,r,s),!0;case"dragenter":return rr=Pi(rr,t,e,n,r,s),!0;case"mouseover":return sr=Pi(sr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return go.set(i,Pi(go.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,yo.set(i,Pi(yo.get(i)||null,t,e,n,r,s)),!0}return!1}function e_(t){var e=Dr(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=zv(n),e!==null){t.blockedOn=e,Zv(t.priority,function(){Yv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yd=r,n.target.dispatchEvent(r),yd=null}else return e=Ho(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){Ya(t)&&n.delete(e)}function tI(){Ed=!1,nr!==null&&Ya(nr)&&(nr=null),rr!==null&&Ya(rr)&&(rr=null),sr!==null&&Ya(sr)&&(sr=null),go.forEach(Fm),yo.forEach(Fm)}function ji(t,e){t.blockedOn===e&&(t.blockedOn=null,Ed||(Ed=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,tI)))}function vo(t){function e(s){return ji(s,t)}if(0<ja.length){ji(ja[0],t);for(var n=1;n<ja.length;n++){var r=ja[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&ji(nr,t),rr!==null&&ji(rr,t),sr!==null&&ji(sr,t),go.forEach(e),yo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)e_(n),n.blockedOn===null&&Kn.shift()}var Ms=Un.ReactCurrentBatchConfig,xl=!0;function nI(t,e,n,r){var s=ae,i=Ms.transition;Ms.transition=null;try{ae=1,Lh(t,e,n,r)}finally{ae=s,Ms.transition=i}}function rI(t,e,n,r){var s=ae,i=Ms.transition;Ms.transition=null;try{ae=4,Lh(t,e,n,r)}finally{ae=s,Ms.transition=i}}function Lh(t,e,n,r){if(xl){var s=Id(t,e,n,r);if(s===null)Nc(t,e,r,El,n),Lm(t,r);else if(eI(s,t,e,n,r))r.stopPropagation();else if(Lm(t,r),e&4&&-1<Z1.indexOf(t)){for(;s!==null;){var i=Ho(s);if(i!==null&&Jv(i),i=Id(t,e,n,r),i===null&&Nc(t,e,r,El,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Nc(t,e,r,null,n)}}var El=null;function Id(t,e,n,r){if(El=null,t=Dh(r),t=Dr(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function t_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q1()){case Oh:return 1;case Hv:return 4;case _l:case W1:return 16;case Gv:return 536870912;default:return 16}default:return 16}}var Zn=null,Fh=null,Xa=null;function n_(){if(Xa)return Xa;var t,e=Fh,n=e.length,r,s="value"in Zn?Zn.value:Zn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Xa=s.slice(t,1<r?1-r:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Um(){return!1}function Nt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Da:Um,this.isPropagationStopped=Um,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=Nt(ai),Wo=xe({},ai,{view:0,detail:0}),sI=Nt(Wo),Ec,Ic,Di,iu=xe({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(Ec=t.screenX-Di.screenX,Ic=t.screenY-Di.screenY):Ic=Ec=0,Di=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Bm=Nt(iu),iI=xe({},iu,{dataTransfer:0}),oI=Nt(iI),aI=xe({},Wo,{relatedTarget:0}),Tc=Nt(aI),lI=xe({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),uI=Nt(lI),cI=xe({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dI=Nt(cI),hI=xe({},ai,{data:0}),zm=Nt(hI),fI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mI[t])?!!e[t]:!1}function Bh(){return gI}var yI=xe({},Wo,{key:function(t){if(t.key){var e=fI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bh,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vI=Nt(yI),_I=xe({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=Nt(_I),wI=xe({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bh}),xI=Nt(wI),EI=xe({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),II=Nt(EI),TI=xe({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AI=Nt(TI),SI=[9,13,27,32],zh=Pn&&"CompositionEvent"in window,Xi=null;Pn&&"documentMode"in document&&(Xi=document.documentMode);var kI=Pn&&"TextEvent"in window&&!Xi,r_=Pn&&(!zh||Xi&&8<Xi&&11>=Xi),qm=" ",Wm=!1;function s_(t,e){switch(t){case"keyup":return SI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function CI(t,e){switch(t){case"compositionend":return i_(e);case"keypress":return e.which!==32?null:(Wm=!0,qm);case"textInput":return t=e.data,t===qm&&Wm?null:t;default:return null}}function bI(t,e){if(Is)return t==="compositionend"||!zh&&s_(t,e)?(t=n_(),Xa=Fh=Zn=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return r_&&e.locale!=="ko"?null:e.data;default:return null}}var RI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RI[t.type]:e==="textarea"}function o_(t,e,n,r){Mv(r),e=Il(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zi=null,_o=null;function NI(t){y_(t,0)}function ou(t){var e=Ss(t);if(Rv(e))return t}function PI(t,e){if(t==="change")return e}var a_=!1;if(Pn){var Ac;if(Pn){var Sc="oninput"in document;if(!Sc){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),Sc=typeof Gm.oninput=="function"}Ac=Sc}else Ac=!1;a_=Ac&&(!document.documentMode||9<document.documentMode)}function Km(){Zi&&(Zi.detachEvent("onpropertychange",l_),_o=Zi=null)}function l_(t){if(t.propertyName==="value"&&ou(_o)){var e=[];o_(e,_o,t,Dh(t)),Bv(NI,e)}}function jI(t,e,n){t==="focusin"?(Km(),Zi=e,_o=n,Zi.attachEvent("onpropertychange",l_)):t==="focusout"&&Km()}function DI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(_o)}function OI(t,e){if(t==="click")return ou(e)}function VI(t,e){if(t==="input"||t==="change")return ou(e)}function MI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:MI;function wo(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!id.call(e,s)||!Xt(t[s],e[s]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,e){var n=Qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function u_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?u_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c_(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LI(t){var e=c_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&u_(n.ownerDocument.documentElement,n)){if(r!==null&&$h(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Jm(n,i);var o=Jm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FI=Pn&&"documentMode"in document&&11>=document.documentMode,Ts=null,Td=null,eo=null,Ad=!1;function Ym(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||Ts==null||Ts!==gl(r)||(r=Ts,"selectionStart"in r&&$h(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&wo(eo,r)||(eo=r,r=Il(Td,"onSelect"),0<r.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ts)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},kc={},d_={};Pn&&(d_=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function au(t){if(kc[t])return kc[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in d_)return kc[t]=e[n];return t}var h_=au("animationend"),f_=au("animationiteration"),p_=au("animationstart"),m_=au("transitionend"),g_=new Map,Xm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){g_.set(t,e),es(e,[t])}for(var Cc=0;Cc<Xm.length;Cc++){var bc=Xm[Cc],UI=bc.toLowerCase(),BI=bc[0].toUpperCase()+bc.slice(1);xr(UI,"on"+BI)}xr(h_,"onAnimationEnd");xr(f_,"onAnimationIteration");xr(p_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(m_,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zI=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function Zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,U1(r,e,void 0,t),t.currentTarget=null}function y_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Zm(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Zm(s,l,d),i=u}}}if(vl)throw t=wd,vl=!1,wd=null,t}function pe(t,e){var n=e[Rd];n===void 0&&(n=e[Rd]=new Set);var r=t+"__bubble";n.has(r)||(v_(e,t,2,!1),n.add(r))}function Rc(t,e,n){var r=0;e&&(r|=4),v_(n,t,r,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[Va]){t[Va]=!0,Av.forEach(function(n){n!=="selectionchange"&&(zI.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,Rc("selectionchange",!1,e))}}function v_(t,e,n,r){switch(t_(e)){case 1:var s=nI;break;case 4:s=rI;break;default:s=Lh}n=s.bind(null,e,n,t),s=void 0,!_d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Nc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Dr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Bv(function(){var d=i,p=Dh(n),g=[];e:{var v=g_.get(t);if(v!==void 0){var _=Uh,C=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":_=vI;break;case"focusin":C="focus",_=Tc;break;case"focusout":C="blur",_=Tc;break;case"beforeblur":case"afterblur":_=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=oI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=xI;break;case h_:case f_:case p_:_=uI;break;case m_:_=II;break;case"scroll":_=sI;break;case"wheel":_=AI;break;case"copy":case"cut":case"paste":_=dI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=$m}var N=(e&4)!==0,D=!N&&t==="scroll",S=N?v!==null?v+"Capture":null:v;N=[];for(var E=d,T;E!==null;){T=E;var j=T.stateNode;if(T.tag===5&&j!==null&&(T=j,S!==null&&(j=mo(E,S),j!=null&&N.push(Eo(E,j,T)))),D)break;E=E.return}0<N.length&&(v=new _(v,C,null,n,p),g.push({event:v,listeners:N}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",v&&n!==yd&&(C=n.relatedTarget||n.fromElement)&&(Dr(C)||C[jn]))break e;if((_||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,_?(C=n.relatedTarget||n.toElement,_=d,C=C?Dr(C):null,C!==null&&(D=ts(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(_=null,C=d),_!==C)){if(N=Bm,j="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=$m,j="onPointerLeave",S="onPointerEnter",E="pointer"),D=_==null?v:Ss(_),T=C==null?v:Ss(C),v=new N(j,E+"leave",_,n,p),v.target=D,v.relatedTarget=T,j=null,Dr(p)===d&&(N=new N(S,E+"enter",C,n,p),N.target=T,N.relatedTarget=D,j=N),D=j,_&&C)t:{for(N=_,S=C,E=0,T=N;T;T=gs(T))E++;for(T=0,j=S;j;j=gs(j))T++;for(;0<E-T;)N=gs(N),E--;for(;0<T-E;)S=gs(S),T--;for(;E--;){if(N===S||S!==null&&N===S.alternate)break t;N=gs(N),S=gs(S)}N=null}else N=null;_!==null&&eg(g,v,_,N,!1),C!==null&&D!==null&&eg(g,D,C,N,!0)}}e:{if(v=d?Ss(d):window,_=v.nodeName&&v.nodeName.toLowerCase(),_==="select"||_==="input"&&v.type==="file")var O=PI;else if(Hm(v))if(a_)O=VI;else{O=DI;var F=jI}else(_=v.nodeName)&&_.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(O=OI);if(O&&(O=O(t,d))){o_(g,O,n,p);break e}F&&F(t,v,d),t==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&hd(v,"number",v.value)}switch(F=d?Ss(d):window,t){case"focusin":(Hm(F)||F.contentEditable==="true")&&(Ts=F,Td=d,eo=null);break;case"focusout":eo=Td=Ts=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Ym(g,n,p);break;case"selectionchange":if(FI)break;case"keydown":case"keyup":Ym(g,n,p)}var x;if(zh)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Is?s_(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(r_&&n.locale!=="ko"&&(Is||m!=="onCompositionStart"?m==="onCompositionEnd"&&Is&&(x=n_()):(Zn=p,Fh="value"in Zn?Zn.value:Zn.textContent,Is=!0)),F=Il(d,m),0<F.length&&(m=new zm(m,t,null,n,p),g.push({event:m,listeners:F}),x?m.data=x:(x=i_(n),x!==null&&(m.data=x)))),(x=kI?CI(t,n):bI(t,n))&&(d=Il(d,"onBeforeInput"),0<d.length&&(p=new zm("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=x))}y_(g,e)})}function Eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=mo(t,n),i!=null&&r.unshift(Eo(t,i,s)),i=mo(t,e),i!=null&&r.push(Eo(t,i,s))),t=t.return}return r}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=mo(n,i),u!=null&&o.unshift(Eo(n,u,l))):s||(u=mo(n,i),u!=null&&o.push(Eo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $I=/\r\n?/g,qI=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace($I,`
`).replace(qI,"")}function Ma(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(L(425))}function Tl(){}var Sd=null,kd=null;function Cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,WI=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,HI=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(GI)}:bd;function GI(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);vo(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var li=Math.random().toString(36).slice(2),sn="__reactFiber$"+li,Io="__reactProps$"+li,jn="__reactContainer$"+li,Rd="__reactEvents$"+li,KI="__reactListeners$"+li,QI="__reactHandles$"+li;function Dr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[sn])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[sn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function lu(t){return t[Io]||null}var Nd=[],ks=-1;function Er(t){return{current:t}}function ge(t){0>ks||(t.current=Nd[ks],Nd[ks]=null,ks--)}function he(t,e){ks++,Nd[ks]=t.current,t.current=e}var mr={},ot=Er(mr),yt=Er(!1),$r=mr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function vt(t){return t=t.childContextTypes,t!=null}function Al(){ge(yt),ge(ot)}function sg(t,e,n){if(ot.current!==mr)throw Error(L(168));he(ot,e),he(yt,n)}function __(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(L(108,j1(t)||"Unknown",s));return xe({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,$r=ot.current,he(ot,t),he(yt,yt.current),!0}function ig(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=__(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,ge(yt),ge(ot),he(ot,t)):ge(yt),he(yt,n)}var In=null,uu=!1,jc=!1;function w_(t){In===null?In=[t]:In.push(t)}function JI(t){uu=!0,w_(t)}function Ir(){if(!jc&&In!==null){jc=!0;var t=0,e=ae;try{var n=In;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,uu=!1}catch(s){throw In!==null&&(In=In.slice(t+1)),Wv(Oh,Ir),s}finally{ae=e,jc=!1}}return null}var Cs=[],bs=0,kl=null,Cl=0,Dt=[],Ot=0,qr=null,An=1,Sn="";function Nr(t,e){Cs[bs++]=Cl,Cs[bs++]=kl,kl=t,Cl=e}function x_(t,e,n){Dt[Ot++]=An,Dt[Ot++]=Sn,Dt[Ot++]=qr,qr=t;var r=An;t=Sn;var s=32-Qt(r)-1;r&=~(1<<s),n+=1;var i=32-Qt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,An=1<<32-Qt(e)+s|n<<s|r,Sn=i+t}else An=1<<i|n<<s|r,Sn=t}function qh(t){t.return!==null&&(Nr(t,1),x_(t,1,0))}function Wh(t){for(;t===kl;)kl=Cs[--bs],Cs[bs]=null,Cl=Cs[--bs],Cs[bs]=null;for(;t===qr;)qr=Dt[--Ot],Dt[Ot]=null,Sn=Dt[--Ot],Dt[Ot]=null,An=Dt[--Ot],Dt[Ot]=null}var kt=null,At=null,ye=!1,Kt=null;function E_(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,At=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:An,overflow:Sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,At=null,!0):!1;default:return!1}}function Pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jd(t){if(ye){var e=At;if(e){var n=e;if(!og(t,e)){if(Pd(t))throw Error(L(418));e=ir(n.nextSibling);var r=kt;e&&og(t,e)?E_(r,n):(t.flags=t.flags&-4097|2,ye=!1,kt=t)}}else{if(Pd(t))throw Error(L(418));t.flags=t.flags&-4097|2,ye=!1,kt=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function La(t){if(t!==kt)return!1;if(!ye)return ag(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cd(t.type,t.memoizedProps)),e&&(e=At)){if(Pd(t))throw I_(),Error(L(418));for(;e;)E_(t,e),e=ir(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=kt?ir(t.stateNode.nextSibling):null;return!0}function I_(){for(var t=At;t;)t=ir(t.nextSibling)}function Gs(){At=kt=null,ye=!1}function Hh(t){Kt===null?Kt=[t]:Kt.push(t)}var YI=Un.ReactCurrentBatchConfig;function Oi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lg(t){var e=t._init;return e(t._payload)}function T_(t){function e(S,E){if(t){var T=S.deletions;T===null?(S.deletions=[E],S.flags|=16):T.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function s(S,E){return S=ur(S,E),S.index=0,S.sibling=null,S}function i(S,E,T){return S.index=T,t?(T=S.alternate,T!==null?(T=T.index,T<E?(S.flags|=2,E):T):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,T,j){return E===null||E.tag!==6?(E=Uc(T,S.mode,j),E.return=S,E):(E=s(E,T),E.return=S,E)}function u(S,E,T,j){var O=T.type;return O===Es?p(S,E,T.props.children,j,T.key):E!==null&&(E.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Hn&&lg(O)===E.type)?(j=s(E,T.props),j.ref=Oi(S,E,T),j.return=S,j):(j=ol(T.type,T.key,T.props,null,S.mode,j),j.ref=Oi(S,E,T),j.return=S,j)}function d(S,E,T,j){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Bc(T,S.mode,j),E.return=S,E):(E=s(E,T.children||[]),E.return=S,E)}function p(S,E,T,j,O){return E===null||E.tag!==7?(E=Br(T,S.mode,j,O),E.return=S,E):(E=s(E,T),E.return=S,E)}function g(S,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Uc(""+E,S.mode,T),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ca:return T=ol(E.type,E.key,E.props,null,S.mode,T),T.ref=Oi(S,null,E),T.return=S,T;case xs:return E=Bc(E,S.mode,T),E.return=S,E;case Hn:var j=E._init;return g(S,j(E._payload),T)}if(Bi(E)||Ri(E))return E=Br(E,S.mode,T,null),E.return=S,E;Fa(S,E)}return null}function v(S,E,T,j){var O=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return O!==null?null:l(S,E,""+T,j);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ca:return T.key===O?u(S,E,T,j):null;case xs:return T.key===O?d(S,E,T,j):null;case Hn:return O=T._init,v(S,E,O(T._payload),j)}if(Bi(T)||Ri(T))return O!==null?null:p(S,E,T,j,null);Fa(S,T)}return null}function _(S,E,T,j,O){if(typeof j=="string"&&j!==""||typeof j=="number")return S=S.get(T)||null,l(E,S,""+j,O);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ca:return S=S.get(j.key===null?T:j.key)||null,u(E,S,j,O);case xs:return S=S.get(j.key===null?T:j.key)||null,d(E,S,j,O);case Hn:var F=j._init;return _(S,E,T,F(j._payload),O)}if(Bi(j)||Ri(j))return S=S.get(T)||null,p(E,S,j,O,null);Fa(E,j)}return null}function C(S,E,T,j){for(var O=null,F=null,x=E,m=E=0,w=null;x!==null&&m<T.length;m++){x.index>m?(w=x,x=null):w=x.sibling;var I=v(S,x,T[m],j);if(I===null){x===null&&(x=w);break}t&&x&&I.alternate===null&&e(S,x),E=i(I,E,m),F===null?O=I:F.sibling=I,F=I,x=w}if(m===T.length)return n(S,x),ye&&Nr(S,m),O;if(x===null){for(;m<T.length;m++)x=g(S,T[m],j),x!==null&&(E=i(x,E,m),F===null?O=x:F.sibling=x,F=x);return ye&&Nr(S,m),O}for(x=r(S,x);m<T.length;m++)w=_(x,S,m,T[m],j),w!==null&&(t&&w.alternate!==null&&x.delete(w.key===null?m:w.key),E=i(w,E,m),F===null?O=w:F.sibling=w,F=w);return t&&x.forEach(function(k){return e(S,k)}),ye&&Nr(S,m),O}function N(S,E,T,j){var O=Ri(T);if(typeof O!="function")throw Error(L(150));if(T=O.call(T),T==null)throw Error(L(151));for(var F=O=null,x=E,m=E=0,w=null,I=T.next();x!==null&&!I.done;m++,I=T.next()){x.index>m?(w=x,x=null):w=x.sibling;var k=v(S,x,I.value,j);if(k===null){x===null&&(x=w);break}t&&x&&k.alternate===null&&e(S,x),E=i(k,E,m),F===null?O=k:F.sibling=k,F=k,x=w}if(I.done)return n(S,x),ye&&Nr(S,m),O;if(x===null){for(;!I.done;m++,I=T.next())I=g(S,I.value,j),I!==null&&(E=i(I,E,m),F===null?O=I:F.sibling=I,F=I);return ye&&Nr(S,m),O}for(x=r(S,x);!I.done;m++,I=T.next())I=_(x,S,m,I.value,j),I!==null&&(t&&I.alternate!==null&&x.delete(I.key===null?m:I.key),E=i(I,E,m),F===null?O=I:F.sibling=I,F=I);return t&&x.forEach(function(R){return e(S,R)}),ye&&Nr(S,m),O}function D(S,E,T,j){if(typeof T=="object"&&T!==null&&T.type===Es&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ca:e:{for(var O=T.key,F=E;F!==null;){if(F.key===O){if(O=T.type,O===Es){if(F.tag===7){n(S,F.sibling),E=s(F,T.props.children),E.return=S,S=E;break e}}else if(F.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Hn&&lg(O)===F.type){n(S,F.sibling),E=s(F,T.props),E.ref=Oi(S,F,T),E.return=S,S=E;break e}n(S,F);break}else e(S,F);F=F.sibling}T.type===Es?(E=Br(T.props.children,S.mode,j,T.key),E.return=S,S=E):(j=ol(T.type,T.key,T.props,null,S.mode,j),j.ref=Oi(S,E,T),j.return=S,S=j)}return o(S);case xs:e:{for(F=T.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){n(S,E.sibling),E=s(E,T.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=Bc(T,S.mode,j),E.return=S,S=E}return o(S);case Hn:return F=T._init,D(S,E,F(T._payload),j)}if(Bi(T))return C(S,E,T,j);if(Ri(T))return N(S,E,T,j);Fa(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(n(S,E.sibling),E=s(E,T),E.return=S,S=E):(n(S,E),E=Uc(T,S.mode,j),E.return=S,S=E),o(S)):n(S,E)}return D}var Ks=T_(!0),A_=T_(!1),bl=Er(null),Rl=null,Rs=null,Gh=null;function Kh(){Gh=Rs=Rl=null}function Qh(t){var e=bl.current;ge(bl),t._currentValue=e}function Dd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Rl=t,Gh=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(Gh!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Rl===null)throw Error(L(308));Rs=t,Rl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Or=null;function Jh(t){Or===null?Or=[t]:Or.push(t)}function S_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Jh(e)):(n.next=s.next,s.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function Yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Dn(t,n)}return s=r.interleaved,s===null?(e.next=e,Jh(r)):(e.next=s.next,s.next=e),r.interleaved=e,Dn(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vh(t,n)}}function ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,r){var s=t.updateQueue;Gn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;o=0,p=d=u=null,l=i;do{var v=l.lane,_=l.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(v=e,_=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){g=C.call(_,g,v);break e}g=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,v=typeof C=="function"?C.call(_,g,v):C,v==null)break e;g=xe({},g,v);break e;case 2:Gn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=s.effects,v===null?s.effects=[l]:v.push(l))}else _={eventTime:_,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=_,u=g):p=p.next=_,o|=v;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(p===null&&(u=g),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=g}}function cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(L(191,s));s.call(r)}}}var Go={},ln=Er(Go),To=Er(Go),Ao=Er(Go);function Vr(t){if(t===Go)throw Error(L(174));return t}function Xh(t,e){switch(he(Ao,e),he(To,t),he(ln,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pd(e,t)}ge(ln),he(ln,e)}function Qs(){ge(ln),ge(To),ge(Ao)}function C_(t){Vr(Ao.current);var e=Vr(ln.current),n=pd(e,t.type);e!==n&&(he(To,t),he(ln,n))}function Zh(t){To.current===t&&(ge(ln),ge(To))}var _e=Er(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function ef(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var tl=Un.ReactCurrentDispatcher,Oc=Un.ReactCurrentBatchConfig,Wr=0,we=null,Oe=null,Le=null,jl=!1,to=!1,So=0,XI=0;function et(){throw Error(L(321))}function tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function nf(t,e,n,r,s,i){if(Wr=i,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?nT:rT,t=n(r,s),to){i=0;do{if(to=!1,So=0,25<=i)throw Error(L(301));i+=1,Le=Oe=null,e.updateQueue=null,tl.current=sT,t=n(r,s)}while(to)}if(tl.current=Dl,e=Oe!==null&&Oe.next!==null,Wr=0,Le=Oe=we=null,jl=!1,e)throw Error(L(300));return t}function rf(){var t=So!==0;return So=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?we.memoizedState=Le=t:Le=Le.next=t,Le}function Bt(){if(Oe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Le===null?we.memoizedState:Le.next;if(e!==null)Le=e,Oe=t;else{if(t===null)throw Error(L(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Le===null?we.memoizedState=Le=t:Le=Le.next=t}return Le}function ko(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Oe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var p=d.lane;if((Wr&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,we.lanes|=p,Hr|=p}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,Xt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,we.lanes|=i,Hr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Xt(i,e.memoizedState)||(gt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function b_(){}function R_(t,e){var n=we,r=Bt(),s=e(),i=!Xt(r.memoizedState,s);if(i&&(r.memoizedState=s,gt=!0),r=r.queue,sf(j_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Co(9,P_.bind(null,n,r,s,e),void 0,null),Fe===null)throw Error(L(349));Wr&30||N_(n,e,s)}return s}function N_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function P_(t,e,n,r){e.value=n,e.getSnapshot=r,D_(e)&&O_(t)}function j_(t,e,n){return n(function(){D_(e)&&O_(t)})}function D_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function O_(t){var e=Dn(t,1);e!==null&&Jt(e,t,1,-1)}function dg(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=tT.bind(null,we,t),[e.memoizedState,t]}function Co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function V_(){return Bt().memoizedState}function nl(t,e,n,r){var s=rn();we.flags|=t,s.memoizedState=Co(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var s=Bt();r=r===void 0?null:r;var i=void 0;if(Oe!==null){var o=Oe.memoizedState;if(i=o.destroy,r!==null&&tf(r,o.deps)){s.memoizedState=Co(e,n,i,r);return}}we.flags|=t,s.memoizedState=Co(1|e,n,i,r)}function hg(t,e){return nl(8390656,8,t,e)}function sf(t,e){return cu(2048,8,t,e)}function M_(t,e){return cu(4,2,t,e)}function L_(t,e){return cu(4,4,t,e)}function F_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U_(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,F_.bind(null,e,t),n)}function of(){}function B_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function z_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $_(t,e,n){return Wr&21?(Xt(n,e)||(n=Kv(),we.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function ZI(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Oc.transition;Oc.transition={};try{t(!1),e()}finally{ae=n,Oc.transition=r}}function q_(){return Bt().memoizedState}function eT(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},W_(t))H_(e,n);else if(n=S_(t,e,n,r),n!==null){var s=dt();Jt(n,t,r,s),G_(n,e,r)}}function tT(t,e,n){var r=lr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(W_(t))H_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Xt(l,o)){var u=e.interleaved;u===null?(s.next=s,Jh(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=S_(t,e,s,r),n!==null&&(s=dt(),Jt(n,t,r,s),G_(n,e,r))}}function W_(t){var e=t.alternate;return t===we||e!==null&&e===we}function H_(t,e){to=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vh(t,n)}}var Dl={readContext:Ut,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},nT={readContext:Ut,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,F_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eT.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:dg,useDebugValue:of,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=dg(!1),e=t[0];return t=ZI.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,s=rn();if(ye){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Fe===null)throw Error(L(349));Wr&30||N_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,hg(j_.bind(null,r,i,t),[t]),r.flags|=2048,Co(9,P_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=rn(),e=Fe.identifierPrefix;if(ye){var n=Sn,r=An;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rT={readContext:Ut,useCallback:B_,useContext:Ut,useEffect:sf,useImperativeHandle:U_,useInsertionEffect:M_,useLayoutEffect:L_,useMemo:z_,useReducer:Vc,useRef:V_,useState:function(){return Vc(ko)},useDebugValue:of,useDeferredValue:function(t){var e=Bt();return $_(e,Oe.memoizedState,t)},useTransition:function(){var t=Vc(ko)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:b_,useSyncExternalStore:R_,useId:q_,unstable_isNewReconciler:!1},sT={readContext:Ut,useCallback:B_,useContext:Ut,useEffect:sf,useImperativeHandle:U_,useInsertionEffect:M_,useLayoutEffect:L_,useMemo:z_,useReducer:Mc,useRef:V_,useState:function(){return Mc(ko)},useDebugValue:of,useDeferredValue:function(t){var e=Bt();return Oe===null?e.memoizedState=t:$_(e,Oe.memoizedState,t)},useTransition:function(){var t=Mc(ko)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:b_,useSyncExternalStore:R_,useId:q_,unstable_isNewReconciler:!1};function Ht(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Od(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),s=lr(t),i=Rn(r,s);i.payload=e,n!=null&&(i.callback=n),e=or(t,i,s),e!==null&&(Jt(e,t,s,r),el(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),s=lr(t),i=Rn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=or(t,i,s),e!==null&&(Jt(e,t,s,r),el(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=lr(t),s=Rn(n,r);s.tag=2,e!=null&&(s.callback=e),e=or(t,s,r),e!==null&&(Jt(e,t,r,n),el(e,t,r))}};function fg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!wo(n,r)||!wo(s,i):!0}function K_(t,e,n){var r=!1,s=mr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ut(i):(s=vt(e)?$r:ot.current,r=e.contextTypes,i=(r=r!=null)?Hs(t,s):mr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Vd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Yh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ut(i):(i=vt(e)?$r:ot.current,s.context=Hs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Od(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&du.enqueueReplaceState(s,s.state,null),Nl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",r=e;do n+=P1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iT=typeof WeakMap=="function"?WeakMap:Map;function Q_(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vl||(Vl=!0,Gd=r),Md(t,e)},n}function J_(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Md(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=_T.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var oT=Un.ReactCurrentOwner,gt=!1;function ct(t,e,n,r){e.child=t===null?A_(e,null,n,r):Ks(e,t.child,n,r)}function vg(t,e,n,r,s){n=n.render;var i=e.ref;return Ls(e,s),r=nf(t,e,n,r,i,s),n=rf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,On(t,e,s)):(ye&&n&&qh(e),e.flags|=1,ct(t,e,r,s),e.child)}function _g(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!pf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Y_(t,e,i,r,s)):(t=ol(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(o,r)&&t.ref===e.ref)return On(t,e,s)}return e.flags|=1,t=ur(i,r),t.ref=e.ref,t.return=e,e.child=t}function Y_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(wo(i,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,On(t,e,s)}return Ld(t,e,n,r,s)}function X_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ps,Tt),Tt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ps,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,he(Ps,Tt),Tt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,he(Ps,Tt),Tt|=r;return ct(t,e,s,n),e.child}function Z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ld(t,e,n,r,s){var i=vt(n)?$r:ot.current;return i=Hs(e,i),Ls(e,s),n=nf(t,e,n,r,i,s),r=rf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,On(t,e,s)):(ye&&r&&qh(e),e.flags|=1,ct(t,e,n,s),e.child)}function wg(t,e,n,r,s){if(vt(n)){var i=!0;Sl(e)}else i=!1;if(Ls(e,s),e.stateNode===null)rl(t,e),K_(e,n,r),Vd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ut(d):(d=vt(n)?$r:ot.current,d=Hs(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&pg(e,o,r,d),Gn=!1;var v=e.memoizedState;o.state=v,Nl(e,r,o,s),u=e.memoizedState,l!==r||v!==u||yt.current||Gn?(typeof p=="function"&&(Od(e,n,p,r),u=e.memoizedState),(l=Gn||fg(e,n,l,r,v,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,k_(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Ht(e.type,l),o.props=d,g=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=vt(n)?$r:ot.current,u=Hs(e,u));var _=n.getDerivedStateFromProps;(p=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||v!==u)&&pg(e,o,r,u),Gn=!1,v=e.memoizedState,o.state=v,Nl(e,r,o,s);var C=e.memoizedState;l!==g||v!==C||yt.current||Gn?(typeof _=="function"&&(Od(e,n,_,r),C=e.memoizedState),(d=Gn||fg(e,n,d,r,v,C,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Fd(t,e,n,r,i,s)}function Fd(t,e,n,r,s,i){Z_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&ig(e,n,!1),On(t,e,i);r=e.stateNode,oT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,i),e.child=Ks(e,null,l,i)):ct(t,e,l,i),e.memoizedState=r.state,s&&ig(e,n,!0),e.child}function e0(t){var e=t.stateNode;e.pendingContext?sg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sg(t,e.context,!1),Xh(t,e.containerInfo)}function xg(t,e,n,r,s){return Gs(),Hh(s),e.flags|=256,ct(t,e,n,r),e.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function Bd(t){return{baseLanes:t,cachePool:null,transitions:null}}function t0(t,e,n){var r=e.pendingProps,s=_e.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),he(_e,s&1),t===null)return jd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=pu(o,r,0,null),t=Br(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Bd(n),e.memoizedState=Ud,t):af(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return aT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ur(l,i):(i=Br(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Bd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Ud,r}return i=t.child,t=i.sibling,r=ur(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function af(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,r){return r!==null&&Hh(r),Ks(e,t.child,null,n),t=af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Lc(Error(L(422))),Ua(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=pu({mode:"visible",children:r.children},s,0,null),i=Br(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=Bd(o),e.memoizedState=Ud,i);if(!(e.mode&1))return Ua(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=Lc(i,r,void 0),Ua(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=Fe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Dn(t,s),Jt(r,t,s,-1))}return ff(),r=Lc(Error(L(421))),Ua(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=wT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,At=ir(s.nextSibling),kt=e,ye=!0,Kt=null,t!==null&&(Dt[Ot++]=An,Dt[Ot++]=Sn,Dt[Ot++]=qr,An=t.id,Sn=t.overflow,qr=e),e=af(e,r.children),e.flags|=4096,e)}function Eg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dd(t.return,e,n)}function Fc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function n0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ct(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,n,e);else if(t.tag===19)Eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(_e,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Fc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Pl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Fc(e,!0,n,null,i);break;case"together":Fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lT(t,e,n){switch(e.tag){case 3:e0(e),Gs();break;case 5:C_(e);break;case 1:vt(e.type)&&Sl(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;he(bl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?t0(t,e,n):(he(_e,_e.current&1),t=On(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return n0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),he(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,X_(t,e,n)}return On(t,e,n)}var r0,zd,s0,i0;r0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zd=function(){};s0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Vr(ln.current);var i=null;switch(n){case"input":s=cd(t,s),r=cd(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=fd(t,s),r=fd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tl)}md(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(fo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(fo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&pe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};i0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vi(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uT(t,e,n){var r=e.pendingProps;switch(Wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return vt(e.type)&&Al(),tt(e),null;case 3:return r=e.stateNode,Qs(),ge(yt),ge(ot),ef(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(Jd(Kt),Kt=null))),zd(t,e),tt(e),null;case 5:Zh(e);var s=Vr(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)s0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return tt(e),null}if(t=Vr(ln.current),La(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[sn]=e,r[Io]=i,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(s=0;s<$i.length;s++)pe($i[s],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Nm(r,i),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pe("invalid",r);break;case"textarea":jm(r,i),pe("invalid",r)}md(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),s=["children",""+l]):fo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":ba(r),Pm(r,i,!0);break;case"textarea":ba(r),Dm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Tl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[Io]=r,r0(t,e,!1,!1),e.stateNode=t;e:{switch(o=gd(n,r),n){case"dialog":pe("cancel",t),pe("close",t),s=r;break;case"iframe":case"object":case"embed":pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<$i.length;s++)pe($i[s],t);s=r;break;case"source":pe("error",t),s=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),s=r;break;case"details":pe("toggle",t),s=r;break;case"input":Nm(t,r),s=cd(t,r),pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),pe("invalid",t);break;case"textarea":jm(t,r),s=fd(t,r),pe("invalid",t);break;default:s=r}md(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Vv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Dv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&po(t,u):typeof u=="number"&&po(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&pe("scroll",t):u!=null&&Rh(t,i,u,o))}switch(n){case"input":ba(t),Pm(t,r,!1);break;case"textarea":ba(t),Dm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ds(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)i0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Vr(Ao.current),Vr(ln.current),La(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(i=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return tt(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&At!==null&&e.mode&1&&!(e.flags&128))I_(),Gs(),e.flags|=98560,i=!1;else if(i=La(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(L(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[sn]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),i=!1}else Kt!==null&&(Jd(Kt),Kt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ve===0&&(Ve=3):ff())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return Qs(),zd(t,e),t===null&&xo(e.stateNode.containerInfo),tt(e),null;case 10:return Qh(e.type._context),tt(e),null;case 17:return vt(e.type)&&Al(),tt(e),null;case 19:if(ge(_e),i=e.memoizedState,i===null)return tt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Vi(i,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,Vi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ce()>Ys&&(e.flags|=128,r=!0,Vi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ye)return tt(e),null}else 2*Ce()-i.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,r=!0,Vi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ce(),e.sibling=null,n=_e.current,he(_e,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function cT(t,e){switch(Wh(e),e.tag){case 1:return vt(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),ge(yt),ge(ot),ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zh(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return Qs(),null;case 10:return Qh(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Ba=!1,st=!1,dT=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function $d(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Ig=!1;function hT(t,e){if(Sd=xl,t=c_(),$h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,g=t,v=null;t:for(;;){for(var _;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(_=g.firstChild)!==null;)v=g,g=_;for(;;){if(g===t)break t;if(v===n&&++d===s&&(l=o),v===i&&++p===r&&(u=o),(_=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kd={focusedElem:t,selectionRange:n},xl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,D=C.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Ht(e.type,N),D);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(j){Te(e,e.return,j)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return C=Ig,Ig=!1,C}function no(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&$d(e,n,i)}s=s.next}while(s!==r)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o0(t){var e=t.alternate;e!==null&&(t.alternate=null,o0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[Io],delete e[Rd],delete e[KI],delete e[QI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a0(t){return t.tag===5||t.tag===3||t.tag===4}function Tg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(r!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}function Hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}var ze=null,Gt=!1;function qn(t,e,n){for(n=n.child;n!==null;)l0(t,e,n),n=n.sibling}function l0(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:st||Ns(n,e);case 6:var r=ze,s=Gt;ze=null,qn(t,e,n),ze=r,Gt=s,ze!==null&&(Gt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Gt?(t=ze,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),vo(t)):Pc(ze,n.stateNode));break;case 4:r=ze,s=Gt,ze=n.stateNode.containerInfo,Gt=!0,qn(t,e,n),ze=r,Gt=s;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&$d(n,e,o),s=s.next}while(s!==r)}qn(t,e,n);break;case 1:if(!st&&(Ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,qn(t,e,n),st=r):qn(t,e,n);break;default:qn(t,e,n)}}function Ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dT),e.forEach(function(r){var s=xT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Gt=!1;break e;case 3:ze=l.stateNode.containerInfo,Gt=!0;break e;case 4:ze=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(ze===null)throw Error(L(160));l0(i,o,s),ze=null,Gt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Te(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u0(e,t),e=e.sibling}function u0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),nn(t),r&4){try{no(3,t,t.return),hu(3,t)}catch(N){Te(t,t.return,N)}try{no(5,t,t.return)}catch(N){Te(t,t.return,N)}}break;case 1:qt(e,t),nn(t),r&512&&n!==null&&Ns(n,n.return);break;case 5:if(qt(e,t),nn(t),r&512&&n!==null&&Ns(n,n.return),t.flags&32){var s=t.stateNode;try{po(s,"")}catch(N){Te(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Nv(s,i),gd(l,o);var d=gd(l,i);for(o=0;o<u.length;o+=2){var p=u[o],g=u[o+1];p==="style"?Vv(s,g):p==="dangerouslySetInnerHTML"?Dv(s,g):p==="children"?po(s,g):Rh(s,p,g,d)}switch(l){case"input":dd(s,i);break;case"textarea":Pv(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Ds(s,!!i.multiple,_,!1):v!==!!i.multiple&&(i.defaultValue!=null?Ds(s,!!i.multiple,i.defaultValue,!0):Ds(s,!!i.multiple,i.multiple?[]:"",!1))}s[Io]=i}catch(N){Te(t,t.return,N)}}break;case 6:if(qt(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(L(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Te(t,t.return,N)}}break;case 3:if(qt(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(N){Te(t,t.return,N)}break;case 4:qt(e,t),nn(t);break;case 13:qt(e,t),nn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(cf=Ce())),r&4&&Ag(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(st=(d=st)||p,qt(e,t),st=d):qt(e,t),nn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(g=$=p;$!==null;){switch(v=$,_=v.child,v.tag){case 0:case 11:case 14:case 15:no(4,v,v.return);break;case 1:Ns(v,v.return);var C=v.stateNode;if(typeof C.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Te(r,n,N)}}break;case 5:Ns(v,v.return);break;case 22:if(v.memoizedState!==null){kg(g);continue}}_!==null?(_.return=v,$=_):kg(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{s=g.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ov("display",o))}catch(N){Te(t,t.return,N)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(N){Te(t,t.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:qt(e,t),nn(t),r&4&&Ag(t);break;case 21:break;default:qt(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(a0(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(po(s,""),r.flags&=-33);var i=Tg(t);Hd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Tg(t);Wd(t,l,o);break;default:throw Error(L(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fT(t,e,n){$=t,c0(t)}function c0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ba;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||st;l=Ba;var d=st;if(Ba=o,(st=u)&&!d)for($=s;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Cg(s):u!==null?(u.return=o,$=u):Cg(s);for(;i!==null;)$=i,c0(i),i=i.sibling;$=s,Ba=l,st=d}Sg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):Sg(t)}}function Sg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&cg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&vo(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}st||e.flags&512&&qd(e)}catch(v){Te(e,e.return,v)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function kg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Cg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Te(e,s,u)}}var i=e.return;try{qd(e)}catch(u){Te(e,i,u)}break;case 5:var o=e.return;try{qd(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var pT=Math.ceil,Ol=Un.ReactCurrentDispatcher,lf=Un.ReactCurrentOwner,Lt=Un.ReactCurrentBatchConfig,se=0,Fe=null,Ne=null,Ge=0,Tt=0,Ps=Er(0),Ve=0,bo=null,Hr=0,fu=0,uf=0,ro=null,pt=null,cf=0,Ys=1/0,En=null,Vl=!1,Gd=null,ar=null,za=!1,er=null,Ml=0,so=0,Kd=null,sl=-1,il=0;function dt(){return se&6?Ce():sl!==-1?sl:sl=Ce()}function lr(t){return t.mode&1?se&2&&Ge!==0?Ge&-Ge:YI.transition!==null?(il===0&&(il=Kv()),il):(t=ae,t!==0||(t=window.event,t=t===void 0?16:t_(t.type)),t):1}function Jt(t,e,n,r){if(50<so)throw so=0,Kd=null,Error(L(185));qo(t,n,r),(!(se&2)||t!==Fe)&&(t===Fe&&(!(se&2)&&(fu|=n),Ve===4&&Qn(t,Ge)),_t(t,r),n===1&&se===0&&!(e.mode&1)&&(Ys=Ce()+500,uu&&Ir()))}function _t(t,e){var n=t.callbackNode;Y1(t,e);var r=wl(t,t===Fe?Ge:0);if(r===0)n!==null&&Mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mm(n),e===1)t.tag===0?JI(bg.bind(null,t)):w_(bg.bind(null,t)),HI(function(){!(se&6)&&Ir()}),n=null;else{switch(Qv(r)){case 1:n=Oh;break;case 4:n=Hv;break;case 16:n=_l;break;case 536870912:n=Gv;break;default:n=_l}n=v0(n,d0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function d0(t,e){if(sl=-1,il=0,se&6)throw Error(L(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var r=wl(t,t===Fe?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ll(t,r);else{e=r;var s=se;se|=2;var i=f0();(Fe!==t||Ge!==e)&&(En=null,Ys=Ce()+500,Ur(t,e));do try{yT();break}catch(l){h0(t,l)}while(!0);Kh(),Ol.current=i,se=s,Ne!==null?e=0:(Fe=null,Ge=0,e=Ve)}if(e!==0){if(e===2&&(s=xd(t),s!==0&&(r=s,e=Qd(t,s))),e===1)throw n=bo,Ur(t,0),Qn(t,r),_t(t,Ce()),n;if(e===6)Qn(t,r);else{if(s=t.current.alternate,!(r&30)&&!mT(s)&&(e=Ll(t,r),e===2&&(i=xd(t),i!==0&&(r=i,e=Qd(t,i))),e===1))throw n=bo,Ur(t,0),Qn(t,r),_t(t,Ce()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Pr(t,pt,En);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=cf+500-Ce(),10<e)){if(wl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=bd(Pr.bind(null,t,pt,En),e);break}Pr(t,pt,En);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Qt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pT(r/1960))-r,10<r){t.timeoutHandle=bd(Pr.bind(null,t,pt,En),r);break}Pr(t,pt,En);break;case 5:Pr(t,pt,En);break;default:throw Error(L(329))}}}return _t(t,Ce()),t.callbackNode===n?d0.bind(null,t):null}function Qd(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=pt,pt=n,e!==null&&Jd(e)),t}function Jd(t){pt===null?pt=t:pt.push.apply(pt,t)}function mT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Xt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~uf,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function bg(t){if(se&6)throw Error(L(327));Fs();var e=wl(t,0);if(!(e&1))return _t(t,Ce()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var r=xd(t);r!==0&&(e=r,n=Qd(t,r))}if(n===1)throw n=bo,Ur(t,0),Qn(t,e),_t(t,Ce()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,pt,En),_t(t,Ce()),null}function df(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Ys=Ce()+500,uu&&Ir())}}function Gr(t){er!==null&&er.tag===0&&!(se&6)&&Fs();var e=se;se|=1;var n=Lt.transition,r=ae;try{if(Lt.transition=null,ae=1,t)return t()}finally{ae=r,Lt.transition=n,se=e,!(se&6)&&Ir()}}function hf(){Tt=Ps.current,ge(Ps)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WI(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Wh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Al();break;case 3:Qs(),ge(yt),ge(ot),ef();break;case 5:Zh(r);break;case 4:Qs();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:Qh(r.type._context);break;case 22:case 23:hf()}n=n.return}if(Fe=t,Ne=t=ur(t.current,null),Ge=Tt=e,Ve=0,bo=null,uf=fu=Hr=0,pt=ro=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Or=null}return t}function h0(t,e){do{var n=Ne;try{if(Kh(),tl.current=Dl,jl){for(var r=we.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}jl=!1}if(Wr=0,Le=Oe=we=null,to=!1,So=0,lf.current=null,n===null||n.return===null){Ve=1,bo=e,Ne=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var _=gg(o);if(_!==null){_.flags&=-257,yg(_,o,l,i,e),_.mode&1&&mg(i,d,e),e=_,u=d;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){mg(i,d,e),ff();break e}u=Error(L(426))}}else if(ye&&l.mode&1){var D=gg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),yg(D,o,l,i,e),Hh(Js(u,l));break e}}i=u=Js(u,l),Ve!==4&&(Ve=2),ro===null?ro=[i]:ro.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=Q_(i,u,e);ug(i,S);break e;case 1:l=u;var E=i.type,T=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(ar===null||!ar.has(T)))){i.flags|=65536,e&=-e,i.lanes|=e;var j=J_(i,l,e);ug(i,j);break e}}i=i.return}while(i!==null)}m0(n)}catch(O){e=O,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function f0(){var t=Ol.current;return Ol.current=Dl,t===null?Dl:t}function ff(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Fe===null||!(Hr&268435455)&&!(fu&268435455)||Qn(Fe,Ge)}function Ll(t,e){var n=se;se|=2;var r=f0();(Fe!==t||Ge!==e)&&(En=null,Ur(t,e));do try{gT();break}catch(s){h0(t,s)}while(!0);if(Kh(),se=n,Ol.current=r,Ne!==null)throw Error(L(261));return Fe=null,Ge=0,Ve}function gT(){for(;Ne!==null;)p0(Ne)}function yT(){for(;Ne!==null&&!z1();)p0(Ne)}function p0(t){var e=y0(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?m0(t):Ne=e,lf.current=null}function m0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cT(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Ne=null;return}}else if(n=uT(n,e,Tt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Ve===0&&(Ve=5)}function Pr(t,e,n){var r=ae,s=Lt.transition;try{Lt.transition=null,ae=1,vT(t,e,n,r)}finally{Lt.transition=s,ae=r}return null}function vT(t,e,n,r){do Fs();while(er!==null);if(se&6)throw Error(L(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(X1(t,i),t===Fe&&(Ne=Fe=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,v0(_l,function(){return Fs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Lt.transition,Lt.transition=null;var o=ae;ae=1;var l=se;se|=4,lf.current=null,hT(t,n),u0(n,t),LI(kd),xl=!!Sd,kd=Sd=null,t.current=n,fT(n),$1(),se=l,ae=o,Lt.transition=i}else t.current=n;if(za&&(za=!1,er=t,Ml=s),i=t.pendingLanes,i===0&&(ar=null),H1(n.stateNode),_t(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Vl)throw Vl=!1,t=Gd,Gd=null,t;return Ml&1&&t.tag!==0&&Fs(),i=t.pendingLanes,i&1?t===Kd?so++:(so=0,Kd=t):so=0,Ir(),null}function Fs(){if(er!==null){var t=Qv(Ml),e=Lt.transition,n=ae;try{if(Lt.transition=null,ae=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Ml=0,se&6)throw Error(L(331));var s=se;for(se|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for($=d;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:no(8,p,i)}var g=p.child;if(g!==null)g.return=p,$=g;else for(;$!==null;){p=$;var v=p.sibling,_=p.return;if(o0(p),p===d){$=null;break}if(v!==null){v.return=_,$=v;break}$=_}}}var C=i.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:no(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,$=S;break e}$=i.return}}var E=t.current;for($=E;$!==null;){o=$;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,$=T;else e:for(o=E;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hu(9,l)}}catch(O){Te(l,l.return,O)}if(l===o){$=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,$=j;break e}$=l.return}}if(se=s,Ir(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{ae=n,Lt.transition=e}}return!1}function Rg(t,e,n){e=Js(n,e),e=Q_(t,e,1),t=or(t,e,1),e=dt(),t!==null&&(qo(t,1,e),_t(t,e))}function Te(t,e,n){if(t.tag===3)Rg(t,t,n);else for(;e!==null;){if(e.tag===3){Rg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Js(n,t),t=J_(e,t,1),e=or(e,t,1),t=dt(),e!==null&&(qo(e,1,t),_t(e,t));break}}e=e.return}}function _T(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(Ge&n)===n&&(Ve===4||Ve===3&&(Ge&130023424)===Ge&&500>Ce()-cf?Ur(t,0):uf|=n),_t(t,e)}function g0(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=dt();t=Dn(t,e),t!==null&&(qo(t,e,n),_t(t,n))}function wT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g0(t,n)}function xT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),g0(t,n)}var y0;y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,lT(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ye&&e.flags&1048576&&x_(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var s=Hs(e,ot.current);Ls(e,n),s=nf(null,e,r,t,s,n);var i=rf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(i=!0,Sl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Yh(e),s.updater=du,e.stateNode=s,s._reactInternals=e,Vd(e,r,t,n),e=Fd(null,e,r,!0,i,n)):(e.tag=0,ye&&i&&qh(e),ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=IT(r),t=Ht(r,t),s){case 0:e=Ld(null,e,r,t,n);break e;case 1:e=wg(null,e,r,t,n);break e;case 11:e=vg(null,e,r,t,n);break e;case 14:e=_g(null,e,r,Ht(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ht(r,s),Ld(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ht(r,s),wg(t,e,r,s,n);case 3:e:{if(e0(e),t===null)throw Error(L(387));r=e.pendingProps,i=e.memoizedState,s=i.element,k_(t,e),Nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Js(Error(L(423)),e),e=xg(t,e,r,n,s);break e}else if(r!==s){s=Js(Error(L(424)),e),e=xg(t,e,r,n,s);break e}else for(At=ir(e.stateNode.containerInfo.firstChild),kt=e,ye=!0,Kt=null,n=A_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===s){e=On(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return C_(e),t===null&&jd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Cd(r,s)?o=null:i!==null&&Cd(r,i)&&(e.flags|=32),Z_(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&jd(e),null;case 13:return t0(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ks(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ht(r,s),vg(t,e,r,s,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,he(bl,r._currentValue),r._currentValue=o,i!==null)if(Xt(i.value,o)){if(i.children===s.children&&!yt.current){e=On(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Rn(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Dd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ls(e,n),s=Ut(s),r=r(s),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,s=Ht(r,e.pendingProps),s=Ht(r.type,s),_g(t,e,r,s,n);case 15:return Y_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ht(r,s),rl(t,e),e.tag=1,vt(r)?(t=!0,Sl(e)):t=!1,Ls(e,n),K_(e,r,s),Vd(e,r,s,n),Fd(null,e,r,!0,t,n);case 19:return n0(t,e,n);case 22:return X_(t,e,n)}throw Error(L(156,e.tag))};function v0(t,e){return Wv(t,e)}function ET(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new ET(t,e,n,r)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IT(t){if(typeof t=="function")return pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ph)return 11;if(t===jh)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Br(n.children,s,i,e);case Nh:o=8,s|=8;break;case od:return t=Vt(12,n,e,s|2),t.elementType=od,t.lanes=i,t;case ad:return t=Vt(13,n,e,s),t.elementType=ad,t.lanes=i,t;case ld:return t=Vt(19,n,e,s),t.elementType=ld,t.lanes=i,t;case Cv:return pu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sv:o=10;break e;case kv:o=9;break e;case Ph:o=11;break e;case jh:o=14;break e;case Hn:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Br(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=Cv,t.lanes=n,t.stateNode={isHidden:!1},t}function Uc(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function mf(t,e,n,r,s,i,o,l,u){return t=new TT(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Vt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yh(i),t}function AT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _0(t){if(!t)return mr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(vt(n))return __(t,n,e)}return e}function w0(t,e,n,r,s,i,o,l,u){return t=mf(n,r,!0,t,s,i,o,l,u),t.context=_0(null),n=t.current,r=dt(),s=lr(n),i=Rn(r,s),i.callback=e??null,or(n,i,s),t.current.lanes=s,qo(t,s,r),_t(t,r),t}function mu(t,e,n,r){var s=e.current,i=dt(),o=lr(s);return n=_0(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(s,e,o),t!==null&&(Jt(t,s,o,i),el(t,s,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ng(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gf(t,e){Ng(t,e),(t=t.alternate)&&Ng(t,e)}function ST(){return null}var x0=typeof reportError=="function"?reportError:function(t){console.error(t)};function yf(t){this._internalRoot=t}gu.prototype.render=yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));mu(t,e,null,null)};gu.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){mu(null,t,null,null)}),e[jn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&e_(t)}};function vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pg(){}function kT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Fl(o);i.call(d)}}var o=w0(e,r,t,0,null,!1,!1,"",Pg);return t._reactRootContainer=o,t[jn]=o.current,xo(t.nodeType===8?t.parentNode:t),Gr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=Fl(u);l.call(d)}}var u=mf(t,0,!1,null,null,!1,!1,"",Pg);return t._reactRootContainer=u,t[jn]=u.current,xo(t.nodeType===8?t.parentNode:t),Gr(function(){mu(e,u,n,r)}),u}function vu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Fl(o);l.call(u)}}mu(e,o,t,s)}else o=kT(n,e,t,s,r);return Fl(o)}Jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zi(e.pendingLanes);n!==0&&(Vh(e,n|1),_t(e,Ce()),!(se&6)&&(Ys=Ce()+500,Ir()))}break;case 13:Gr(function(){var r=Dn(t,1);if(r!==null){var s=dt();Jt(r,t,1,s)}}),gf(t,1)}};Mh=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=dt();Jt(e,t,134217728,n)}gf(t,134217728)}};Yv=function(t){if(t.tag===13){var e=lr(t),n=Dn(t,e);if(n!==null){var r=dt();Jt(n,t,e,r)}gf(t,e)}};Xv=function(){return ae};Zv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};vd=function(t,e,n){switch(e){case"input":if(dd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=lu(r);if(!s)throw Error(L(90));Rv(r),dd(r,s)}}}break;case"textarea":Pv(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};Fv=df;Uv=Gr;var CT={usingClientEntryPoint:!1,Events:[Ho,Ss,lu,Mv,Lv,df]},Mi={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bT={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$v(t),t===null?null:t.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||ST,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{su=$a.inject(bT),an=$a}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CT;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vf(e))throw Error(L(200));return AT(t,e,null,n)};Rt.createRoot=function(t,e){if(!vf(t))throw Error(L(299));var n=!1,r="",s=x0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=mf(t,1,!1,null,null,n,!1,r,s),t[jn]=e.current,xo(t.nodeType===8?t.parentNode:t),new yf(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=$v(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Gr(t)};Rt.hydrate=function(t,e,n){if(!yu(e))throw Error(L(200));return vu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!vf(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=x0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=w0(e,null,t,1,n??null,s,!1,i,o),t[jn]=e.current,xo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new gu(e)};Rt.render=function(t,e,n){if(!yu(e))throw Error(L(200));return vu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!yu(t))throw Error(L(40));return t._reactRootContainer?(Gr(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Rt.unstable_batchedUpdates=df;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return vu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function E0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E0)}catch(t){console.error(t)}}E0(),Ev.exports=Rt;var RT=Ev.exports,jg=RT;sd.createRoot=jg.createRoot,sd.hydrateRoot=jg.hydrateRoot;var Dg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},NT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},T0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,p=i>>2,g=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,_=d&63;u||(_=64,o||(v=64)),r.push(n[p],n[g],n[v],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||g==null)throw new PT;const v=i<<2|l>>4;if(r.push(v),d!==64){const _=l<<4&240|d>>2;if(r.push(_),g!==64){const C=d<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jT=function(t){const e=I0(t);return T0.encodeByteArray(e,!0)},Ul=function(t){return jT(t).replace(/\./g,"")},A0=function(t){try{return T0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=()=>DT().__FIREBASE_DEFAULTS__,VT=()=>{if(typeof process>"u"||typeof Dg>"u")return;const t=Dg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&A0(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return OT()||VT()||MT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},S0=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LT=t=>{const e=S0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},k0=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},C0=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ul(JSON.stringify(n)),Ul(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function zT(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $T(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _f(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WT(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HT(){return!zT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wf(){try{return typeof indexedDB=="object"}catch{return!1}}function xf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function b0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GT,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?KT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new tn(s,l,r)}}function KT(t,e){return t.replace(QT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QT=/\{\$([^}]+)}/g;function JT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Og(i)&&Og(o)){if(!Ro(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Og(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Wi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function YT(t,e){const n=new XT(t,e);return n.subscribe.bind(n)}class XT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zc),s.error===void 0&&(s.error=zc),s.complete===void 0&&(s.complete=zc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=1e3,tA=2,nA=4*60*60*1e3,rA=.5;function Vg(t,e=eA,n=tA){const r=e*Math.pow(n,t),s=Math.round(rA*r*(Math.random()-.5)*2);return Math.min(nA,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oA(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iA(t){return t===jr?void 0:t}function oA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const lA={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},uA=ne.INFO,cA={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},dA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wu{constructor(e){this.name=e,this._logLevel=uA,this._logHandler=dA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const hA=(t,e)=>e.some(n=>t instanceof n);let Mg,Lg;function fA(){return Mg||(Mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pA(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R0=new WeakMap,Yd=new WeakMap,N0=new WeakMap,$c=new WeakMap,Ef=new WeakMap;function mA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&R0.set(n,t)}).catch(()=>{}),Ef.set(e,t),e}function gA(t){if(Yd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yd.set(t,e)}let Xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yA(t){Xd=t(Xd)}function vA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qc(this),e,...n);return N0.set(r,e.sort?e.sort():[e]),cr(r)}:pA().includes(t)?function(...e){return t.apply(qc(this),e),cr(R0.get(this))}:function(...e){return cr(t.apply(qc(this),e))}}function _A(t){return typeof t=="function"?vA(t):(t instanceof IDBTransaction&&gA(t),hA(t,fA())?new Proxy(t,Xd):t)}function cr(t){if(t instanceof IDBRequest)return mA(t);if($c.has(t))return $c.get(t);const e=_A(t);return e!==t&&($c.set(t,e),Ef.set(e,t)),e}const qc=t=>Ef.get(t);function P0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const wA=["get","getKey","getAll","getAllKeys","count"],xA=["put","add","delete","clear"],Wc=new Map;function Fg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wc.get(e))return Wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return Wc.set(e,i),i}yA(t=>({...t,get:(e,n,r)=>Fg(e,n)||t.get(e,n,r),has:(e,n)=>!!Fg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",Ug="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new wu("@firebase/app"),TA="@firebase/app-compat",AA="@firebase/analytics-compat",SA="@firebase/analytics",kA="@firebase/app-check-compat",CA="@firebase/app-check",bA="@firebase/auth",RA="@firebase/auth-compat",NA="@firebase/database",PA="@firebase/data-connect",jA="@firebase/database-compat",DA="@firebase/functions",OA="@firebase/functions-compat",VA="@firebase/installations",MA="@firebase/installations-compat",LA="@firebase/messaging",FA="@firebase/messaging-compat",UA="@firebase/performance",BA="@firebase/performance-compat",zA="@firebase/remote-config",$A="@firebase/remote-config-compat",qA="@firebase/storage",WA="@firebase/storage-compat",HA="@firebase/firestore",GA="@firebase/vertexai-preview",KA="@firebase/firestore-compat",QA="firebase",JA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="[DEFAULT]",YA={[Zd]:"fire-core",[TA]:"fire-core-compat",[SA]:"fire-analytics",[AA]:"fire-analytics-compat",[CA]:"fire-app-check",[kA]:"fire-app-check-compat",[bA]:"fire-auth",[RA]:"fire-auth-compat",[NA]:"fire-rtdb",[PA]:"fire-data-connect",[jA]:"fire-rtdb-compat",[DA]:"fire-fn",[OA]:"fire-fn-compat",[VA]:"fire-iid",[MA]:"fire-iid-compat",[LA]:"fire-fcm",[FA]:"fire-fcm-compat",[UA]:"fire-perf",[BA]:"fire-perf-compat",[zA]:"fire-rc",[$A]:"fire-rc-compat",[qA]:"fire-gcs",[WA]:"fire-gcs-compat",[HA]:"fire-fst",[KA]:"fire-fst-compat",[GA]:"fire-vertex","fire-js":"fire-js",[QA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map,XA=new Map,th=new Map;function Bg(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(th.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;th.set(e,t);for(const n of Bl.values())Bg(n,t);for(const n of XA.values())Bg(n,t);return!0}function rs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new ns("app","Firebase",ZA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=JA;function j0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dr.create("bad-app-name",{appName:String(s)});if(n||(n=k0()),!n)throw dr.create("no-options");const i=Bl.get(s);if(i){if(Ro(n,i.options)&&Ro(r,i.config))return i;throw dr.create("duplicate-app",{appName:s})}const o=new aA(s);for(const u of th.values())o.addComponent(u);const l=new eS(n,r,o);return Bl.set(s,l),l}function If(t=eh){const e=Bl.get(t);if(!e&&t===eh&&k0())return j0();if(!e)throw dr.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let s=(r=YA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}fn(new Zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="firebase-heartbeat-database",nS=1,No="firebase-heartbeat-store";let Hc=null;function D0(){return Hc||(Hc=P0(tS,nS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function rS(t){try{const n=(await D0()).transaction(No),r=await n.objectStore(No).get(O0(t));return await n.done,r}catch(e){if(e instanceof tn)Vn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function zg(t,e){try{const r=(await D0()).transaction(No,"readwrite");await r.objectStore(No).put(e,O0(t)),await r.done}catch(n){if(n instanceof tn)Vn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function O0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=1024,iS=30*24*60*60*1e3;class oS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$g();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=iS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$g(),{heartbeatsToSend:r,unsentEntries:s}=aS(this._heartbeatsCache.heartbeats),i=Ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Vn.warn(n),""}}}function $g(){return new Date().toISOString().substring(0,10)}function aS(t,e=sS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wf()?xf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qg(t){return Ul(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){fn(new Zt("platform-logger",e=>new EA(e),"PRIVATE")),fn(new Zt("heartbeat",e=>new oS(e),"PRIVATE")),Ft(Zd,Ug,t),Ft(Zd,Ug,"esm2017"),Ft("fire-js","")}uS("");function Tf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function V0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cS=V0,M0=new ns("auth","Firebase",V0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new wu("@firebase/auth");function dS(t,...e){zl.logLevel<=ne.WARN&&zl.warn(`Auth (${ui}): ${t}`,...e)}function al(t,...e){zl.logLevel<=ne.ERROR&&zl.error(`Auth (${ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Sf(t,...e)}function Yt(t,...e){return Sf(t,...e)}function Af(t,e,n){const r=Object.assign(Object.assign({},cS()),{[e]:n});return new ns("auth","Firebase",r).create(e,{appName:t.name})}function hr(t){return Af(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zt(t,"argument-error"),Af(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M0.create(t,...e)}function G(t,e,...n){if(!t)throw Sf(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function Mn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fS(){return Wg()==="http:"||Wg()==="https:"}function Wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fS()||_f()||"connection"in navigator)?navigator.onLine:!0}function mS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=BT()||qT()}get(){return pS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new Qo(3e4,6e4);function ss(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,r,s={}){return F0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return $T()||(d.referrerPolicy="no-referrer"),L0.fetch()(U0(t,t.config.apiHost,n,l),d)})}async function F0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gS),e);try{const s=new _S(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw qa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw qa(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Af(t,p,d);zt(t,p)}}catch(s){if(s instanceof tn)throw s;zt(t,"network-request-failed",{message:String(s)})}}async function xu(t,e,n,r,s={}){const i=await Tr(t,e,n,r,s);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function U0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?kf(t.config,s):`${t.config.apiScheme}://${s}`}function vS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _S{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),yS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yt(t,e,r);return s.customData._tokenResponse=n,s}function Hg(t){return t!==void 0&&t.enterprise!==void 0}class wS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xS(t,e){return Tr(t,"GET","/v2/recaptchaConfig",ss(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function B0(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IS(t,e=!1){const n=De(t),r=await n.getIdToken(e),s=Cf(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:io(Gc(s.auth_time)),issuedAtTime:io(Gc(s.iat)),expirationTime:io(Gc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Gc(t){return Number(t)*1e3}function Cf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const s=A0(n);return s?JSON.parse(s):(al("Failed to decode base64 JWT payload"),null)}catch(s){return al("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gg(t){const e=Cf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&TS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Po(t,B0(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?z0(i.providerUserInfo):[],l=kS(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new rh(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function SS(t){const e=De(t);await $l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function z0(t){return t.map(e=>{var{providerId:n}=e,r=Tf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e){const n=await F0(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=U0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",L0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bS(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",ss(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Gg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await CS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Tf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IS(this,e)}reload(){return SS(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(hr(this.auth));const e=await this.getIdToken();return await Po(this,ES(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,d,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(d=n.createdAt)!==null&&d!==void 0?d:void 0,E=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:T,emailVerified:j,isAnonymous:O,providerData:F,stsTokenManager:x}=n;G(T&&x,e,"internal-error");const m=Us.fromJSON(this.name,x);G(typeof T=="string",e,"internal-error"),Wn(g,e.name),Wn(v,e.name),G(typeof j=="boolean",e,"internal-error"),G(typeof O=="boolean",e,"internal-error"),Wn(_,e.name),Wn(C,e.name),Wn(N,e.name),Wn(D,e.name),Wn(S,e.name),Wn(E,e.name);const w=new Cn({uid:T,auth:e,email:v,emailVerified:j,displayName:g,isAnonymous:O,photoURL:C,phoneNumber:_,tenantId:N,stsTokenManager:m,createdAt:S,lastLoginAt:E});return F&&Array.isArray(F)&&(w.providerData=F.map(I=>Object.assign({},I))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $l(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?z0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Us;l.updateFromIdToken(r);const u=new Cn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new rh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;function bn(t){Mn(t instanceof Function,"Expected a class definition");let e=Kg.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$0.type="NONE";const Qg=$0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ll(this.userKey,s.apiKey,i),this.fullPersistenceKey=ll("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(bn(Qg),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||bn(Qg);const o=ll(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const g=Cn._fromJSON(e,p);d!==i&&(l=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Bs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Bs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q0(e))return"Blackberry";if(J0(e))return"Webos";if(W0(e))return"Safari";if((e.includes("chrome/")||H0(e))&&!e.includes("edge/"))return"Chrome";if(K0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function q0(t=at()){return/firefox\//i.test(t)}function W0(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H0(t=at()){return/crios\//i.test(t)}function G0(t=at()){return/iemobile/i.test(t)}function K0(t=at()){return/android/i.test(t)}function Q0(t=at()){return/blackberry/i.test(t)}function J0(t=at()){return/webos/i.test(t)}function bf(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RS(t=at()){var e;return bf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NS(){return WT()&&document.documentMode===10}function Y0(t=at()){return bf(t)||K0(t)||J0(t)||Q0(t)||/windows phone/i.test(t)||G0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t,e=[]){let n;switch(t){case"Browser":n=Jg(at());break;case"Worker":n=`${Jg(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",ss(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=6;class OS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yg(this),this.idTokenSubscription=new Yg(this),this.beforeStateQueue=new PS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await B0(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(hr(this));const n=e?De(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jS(this),n=new OS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function is(t){return De(t)}class Yg{constructor(e){this.auth=e,this.observer=null,this.addObserver=YT(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MS(t){Eu=t}function Z0(t){return Eu.loadJS(t)}function LS(){return Eu.recaptchaEnterpriseScript}function FS(){return Eu.gapiScript}function US(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BS="recaptcha-enterprise",zS="NO_RECAPTCHA";class $S{constructor(e){this.type=BS,this.auth=is(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{xS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new wS(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Hg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(zS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Hg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=LS();u.length!==0&&(u+=l),Z0(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Xg(t,e,n,r=!1){const s=new $S(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zg(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Xg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t,e){const n=rs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ro(i,e??{}))return s;zt(s,"already-initialized")}return n.initialize({options:e})}function WS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HS(t,e,n){const r=is(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ew(e),{host:o,port:l}=GS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),KS()}function ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GS(t){const e=ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ey(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ey(o)}}}function ey(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function QS(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e){return xu(t,"POST","/v1/accounts:signInWithPassword",ss(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return xu(t,"POST","/v1/accounts:signInWithEmailLink",ss(t,e))}async function XS(t,e){return xu(t,"POST","/v1/accounts:signInWithEmailLink",ss(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Rf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zg(e,n,"signInWithPassword",JS);case"emailLink":return YS(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zg(e,r,"signUpPassword",QS);case"emailLink":return XS(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return xu(t,"POST","/v1/accounts:signInWithIdp",ss(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="http://localhost";class Kr extends Rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Tf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:ZS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t2(t){const e=qi(Wi(t)).link,n=e?qi(Wi(e)).deep_link_id:null,r=qi(Wi(t)).deep_link_id;return(r?qi(Wi(r)).link:null)||r||n||e||t}class Nf{constructor(e){var n,r,s,i,o,l;const u=qi(Wi(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=e2((s=u.mode)!==null&&s!==void 0?s:null);G(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=t2(e);try{return new Nf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,n){return jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nf.parseLink(n);return G(r,"argument-error"),jo._fromEmailAndCode(e,r.code,r.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Jo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Jo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Jo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=ty(r);return new Xs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ty(r);return new Xs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ty(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends tn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ql(e,n,r,s)}}function tw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,i,e,r):i})}async function n2(t,e,n=!1){const r=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(hr(r));const s="reauthenticate";try{const i=await Po(t,tw(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=Cf(i.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Xs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(t,e,n=!1){if(on(t.app))return Promise.reject(hr(t));const r="signIn",s=await tw(t,r,e),i=await Xs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function s2(t,e){return nw(is(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t){const e=is(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function o2(t,e,n){return on(t.app)?Promise.reject(hr(t)):s2(De(t),ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&i2(t),r})}function a2(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function l2(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function u2(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function c2(t){return De(t).signOut()}const Wl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=1e3,h2=10;class sw extends rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Y0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,h2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},d2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sw.type="LOCAL";const f2=sw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw extends rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iw.type="SESSION";const ow=iw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await p2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=jf("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function g2(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function y2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _2(){return aw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="firebaseLocalStorageDb",w2=1,Hl="firebaseLocalStorage",uw="fbase_key";class Yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tu(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function x2(){const t=indexedDB.deleteDatabase(lw);return new Yo(t).toPromise()}function sh(){const t=indexedDB.open(lw,w2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:uw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await x2(),e(await sh()))})})}async function ny(t,e,n){const r=Tu(t,!0).put({[uw]:e,value:n});return new Yo(r).toPromise()}async function E2(t,e){const n=Tu(t,!1).get(e),r=await new Yo(n).toPromise();return r===void 0?null:r.value}function ry(t,e){const n=Tu(t,!0).delete(e);return new Yo(n).toPromise()}const I2=800,T2=3;class cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>T2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(_2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await y2(),!this.activeServiceWorker)return;this.sender=new m2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sh();return await ny(e,Wl,"1"),await ry(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ny(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>E2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ry(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Tu(s,!1).getAll();return new Yo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cw.type="LOCAL";const A2=cw;new Qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t,e){return e?bn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends Rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function S2(t){return nw(t.auth,new Df(t),t.bypassAuthState)}function k2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),r2(n,new Df(t),t.bypassAuthState)}async function C2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),n2(n,new Df(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S2;case"linkViaPopup":case"linkViaRedirect":return C2;case"reauthViaPopup":case"reauthViaRedirect":return k2;default:zt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=new Qo(2e3,1e4);async function R2(t,e,n){if(on(t.app))return Promise.reject(Yt(t,"operation-not-supported-in-this-environment"));const r=is(t);hS(t,e,Pf);const s=dw(r,n);return new Mr(r,"signInViaPopup",e,s).executeNotNull()}class Mr extends hw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,b2.get())};e()}}Mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2="pendingRedirect",ul=new Map;class P2 extends hw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await j2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function j2(t,e){const n=V2(e),r=O2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function D2(t,e){ul.set(t._key(),e)}function O2(t){return bn(t._redirectPersistence)}function V2(t){return ll(N2,t.config.apiKey,t.name)}async function M2(t,e,n=!1){if(on(t.app))return Promise.reject(hr(t));const r=is(t),s=dw(r,e),o=await new P2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=10*60*1e3;class F2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!U2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L2&&this.cachedEventUids.clear(),this.cachedEventUids.has(sy(e))}saveEventToCache(e){this.cachedEventUids.add(sy(e)),this.lastProcessedEventTime=Date.now()}}function sy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function U2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$2=/^https?/;async function q2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B2(t);for(const n of e)try{if(W2(n))return}catch{}zt(t,"unauthorized-domain")}function W2(t){const e=nh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$2.test(n))return!1;if(z2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=new Qo(3e4,6e4);function iy(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function G2(t){return new Promise((e,n)=>{var r,s,i;function o(){iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iy(),n(Yt(t,"network-request-failed"))},timeout:H2.get()})}if(!((s=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const l=US("iframefcb");return un()[l]=()=>{gapi.load?o():n(Yt(t,"network-request-failed"))},Z0(`${FS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw cl=null,e})}let cl=null;function K2(t){return cl=cl||G2(t),cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=new Qo(5e3,15e3),J2="__/auth/iframe",Y2="emulator/auth/iframe",X2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ek(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kf(e,Y2):`https://${t.config.authDomain}/${J2}`,r={apiKey:e.apiKey,appName:t.name,v:ui},s=Z2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ko(r).slice(1)}`}async function tk(t){const e=await K2(t),n=un().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:ek(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),l=un().setTimeout(()=>{i(o)},Q2.get());function u(){un().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rk=500,sk=600,ik="_blank",ok="http://localhost";class oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ak(t,e,n,r=rk,s=sk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},nk),{width:r.toString(),height:s.toString(),top:i,left:o}),d=at().toLowerCase();n&&(l=H0(d)?ik:n),q0(d)&&(e=e||ok,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[_,C])=>`${v}${_}=${C},`,"");if(RS(d)&&l!=="_self")return lk(e||"",l),new oy(null);const g=window.open(e||"",l,p);G(g,t,"popup-blocked");try{g.focus()}catch{}return new oy(g)}function lk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="__/auth/handler",ck="emulator/auth/handler",dk=encodeURIComponent("fac");async function ay(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:s};if(e instanceof Pf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof Jo){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${dk}=${encodeURIComponent(u)}`:"";return`${hk(t)}?${Ko(l).slice(1)}${d}`}function hk({config:t}){return t.emulator?kf(t,ck):`https://${t.authDomain}/${uk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="webStorageSupport";class fk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ow,this._completeRedirectFn=M2,this._overrideRedirectResult=D2}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ay(e,n,r,nh(),s);return ak(e,o,jf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ay(e,n,r,nh(),s);return g2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tk(e),r=new F2(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kc,{type:Kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Kc];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=q2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Y0()||W0()||bf()}}const pk=fk;var ly="@firebase/auth",uy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yk(t){fn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X0(t)},d=new VS(r,s,i,u);return WS(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fn(new Zt("auth-internal",e=>{const n=is(e.getProvider("auth").getImmediate());return(r=>new mk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(ly,uy,gk(t)),Ft(ly,uy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=5*60,_k=C0("authIdTokenMaxAge")||vk;let cy=null;const wk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_k)return;const s=n==null?void 0:n.token;cy!==s&&(cy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xk(t=If()){const e=rs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qS(t,{popupRedirectResolver:pk,persistence:[A2,f2,ow]}),r=C0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wk(i.toString());l2(n,o,()=>o(n.currentUser)),a2(n,l=>o(l))}}const s=S0("auth");return s&&HS(n,`http://${s}`),n}function Ek(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Yt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ek().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yk("Browser");var Ik="firebase",Tk="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(Ik,Tk,"app");var dy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zr,pw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,m){function w(){}w.prototype=m.prototype,x.D=m.prototype,x.prototype=new w,x.prototype.constructor=x,x.C=function(I,k,R){for(var A=Array(arguments.length-2),jt=2;jt<arguments.length;jt++)A[jt-2]=arguments[jt];return m.prototype[k].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,m,w){w||(w=0);var I=Array(16);if(typeof m=="string")for(var k=0;16>k;++k)I[k]=m.charCodeAt(w++)|m.charCodeAt(w++)<<8|m.charCodeAt(w++)<<16|m.charCodeAt(w++)<<24;else for(k=0;16>k;++k)I[k]=m[w++]|m[w++]<<8|m[w++]<<16|m[w++]<<24;m=x.g[0],w=x.g[1],k=x.g[2];var R=x.g[3],A=m+(R^w&(k^R))+I[0]+3614090360&4294967295;m=w+(A<<7&4294967295|A>>>25),A=R+(k^m&(w^k))+I[1]+3905402710&4294967295,R=m+(A<<12&4294967295|A>>>20),A=k+(w^R&(m^w))+I[2]+606105819&4294967295,k=R+(A<<17&4294967295|A>>>15),A=w+(m^k&(R^m))+I[3]+3250441966&4294967295,w=k+(A<<22&4294967295|A>>>10),A=m+(R^w&(k^R))+I[4]+4118548399&4294967295,m=w+(A<<7&4294967295|A>>>25),A=R+(k^m&(w^k))+I[5]+1200080426&4294967295,R=m+(A<<12&4294967295|A>>>20),A=k+(w^R&(m^w))+I[6]+2821735955&4294967295,k=R+(A<<17&4294967295|A>>>15),A=w+(m^k&(R^m))+I[7]+4249261313&4294967295,w=k+(A<<22&4294967295|A>>>10),A=m+(R^w&(k^R))+I[8]+1770035416&4294967295,m=w+(A<<7&4294967295|A>>>25),A=R+(k^m&(w^k))+I[9]+2336552879&4294967295,R=m+(A<<12&4294967295|A>>>20),A=k+(w^R&(m^w))+I[10]+4294925233&4294967295,k=R+(A<<17&4294967295|A>>>15),A=w+(m^k&(R^m))+I[11]+2304563134&4294967295,w=k+(A<<22&4294967295|A>>>10),A=m+(R^w&(k^R))+I[12]+1804603682&4294967295,m=w+(A<<7&4294967295|A>>>25),A=R+(k^m&(w^k))+I[13]+4254626195&4294967295,R=m+(A<<12&4294967295|A>>>20),A=k+(w^R&(m^w))+I[14]+2792965006&4294967295,k=R+(A<<17&4294967295|A>>>15),A=w+(m^k&(R^m))+I[15]+1236535329&4294967295,w=k+(A<<22&4294967295|A>>>10),A=m+(k^R&(w^k))+I[1]+4129170786&4294967295,m=w+(A<<5&4294967295|A>>>27),A=R+(w^k&(m^w))+I[6]+3225465664&4294967295,R=m+(A<<9&4294967295|A>>>23),A=k+(m^w&(R^m))+I[11]+643717713&4294967295,k=R+(A<<14&4294967295|A>>>18),A=w+(R^m&(k^R))+I[0]+3921069994&4294967295,w=k+(A<<20&4294967295|A>>>12),A=m+(k^R&(w^k))+I[5]+3593408605&4294967295,m=w+(A<<5&4294967295|A>>>27),A=R+(w^k&(m^w))+I[10]+38016083&4294967295,R=m+(A<<9&4294967295|A>>>23),A=k+(m^w&(R^m))+I[15]+3634488961&4294967295,k=R+(A<<14&4294967295|A>>>18),A=w+(R^m&(k^R))+I[4]+3889429448&4294967295,w=k+(A<<20&4294967295|A>>>12),A=m+(k^R&(w^k))+I[9]+568446438&4294967295,m=w+(A<<5&4294967295|A>>>27),A=R+(w^k&(m^w))+I[14]+3275163606&4294967295,R=m+(A<<9&4294967295|A>>>23),A=k+(m^w&(R^m))+I[3]+4107603335&4294967295,k=R+(A<<14&4294967295|A>>>18),A=w+(R^m&(k^R))+I[8]+1163531501&4294967295,w=k+(A<<20&4294967295|A>>>12),A=m+(k^R&(w^k))+I[13]+2850285829&4294967295,m=w+(A<<5&4294967295|A>>>27),A=R+(w^k&(m^w))+I[2]+4243563512&4294967295,R=m+(A<<9&4294967295|A>>>23),A=k+(m^w&(R^m))+I[7]+1735328473&4294967295,k=R+(A<<14&4294967295|A>>>18),A=w+(R^m&(k^R))+I[12]+2368359562&4294967295,w=k+(A<<20&4294967295|A>>>12),A=m+(w^k^R)+I[5]+4294588738&4294967295,m=w+(A<<4&4294967295|A>>>28),A=R+(m^w^k)+I[8]+2272392833&4294967295,R=m+(A<<11&4294967295|A>>>21),A=k+(R^m^w)+I[11]+1839030562&4294967295,k=R+(A<<16&4294967295|A>>>16),A=w+(k^R^m)+I[14]+4259657740&4294967295,w=k+(A<<23&4294967295|A>>>9),A=m+(w^k^R)+I[1]+2763975236&4294967295,m=w+(A<<4&4294967295|A>>>28),A=R+(m^w^k)+I[4]+1272893353&4294967295,R=m+(A<<11&4294967295|A>>>21),A=k+(R^m^w)+I[7]+4139469664&4294967295,k=R+(A<<16&4294967295|A>>>16),A=w+(k^R^m)+I[10]+3200236656&4294967295,w=k+(A<<23&4294967295|A>>>9),A=m+(w^k^R)+I[13]+681279174&4294967295,m=w+(A<<4&4294967295|A>>>28),A=R+(m^w^k)+I[0]+3936430074&4294967295,R=m+(A<<11&4294967295|A>>>21),A=k+(R^m^w)+I[3]+3572445317&4294967295,k=R+(A<<16&4294967295|A>>>16),A=w+(k^R^m)+I[6]+76029189&4294967295,w=k+(A<<23&4294967295|A>>>9),A=m+(w^k^R)+I[9]+3654602809&4294967295,m=w+(A<<4&4294967295|A>>>28),A=R+(m^w^k)+I[12]+3873151461&4294967295,R=m+(A<<11&4294967295|A>>>21),A=k+(R^m^w)+I[15]+530742520&4294967295,k=R+(A<<16&4294967295|A>>>16),A=w+(k^R^m)+I[2]+3299628645&4294967295,w=k+(A<<23&4294967295|A>>>9),A=m+(k^(w|~R))+I[0]+4096336452&4294967295,m=w+(A<<6&4294967295|A>>>26),A=R+(w^(m|~k))+I[7]+1126891415&4294967295,R=m+(A<<10&4294967295|A>>>22),A=k+(m^(R|~w))+I[14]+2878612391&4294967295,k=R+(A<<15&4294967295|A>>>17),A=w+(R^(k|~m))+I[5]+4237533241&4294967295,w=k+(A<<21&4294967295|A>>>11),A=m+(k^(w|~R))+I[12]+1700485571&4294967295,m=w+(A<<6&4294967295|A>>>26),A=R+(w^(m|~k))+I[3]+2399980690&4294967295,R=m+(A<<10&4294967295|A>>>22),A=k+(m^(R|~w))+I[10]+4293915773&4294967295,k=R+(A<<15&4294967295|A>>>17),A=w+(R^(k|~m))+I[1]+2240044497&4294967295,w=k+(A<<21&4294967295|A>>>11),A=m+(k^(w|~R))+I[8]+1873313359&4294967295,m=w+(A<<6&4294967295|A>>>26),A=R+(w^(m|~k))+I[15]+4264355552&4294967295,R=m+(A<<10&4294967295|A>>>22),A=k+(m^(R|~w))+I[6]+2734768916&4294967295,k=R+(A<<15&4294967295|A>>>17),A=w+(R^(k|~m))+I[13]+1309151649&4294967295,w=k+(A<<21&4294967295|A>>>11),A=m+(k^(w|~R))+I[4]+4149444226&4294967295,m=w+(A<<6&4294967295|A>>>26),A=R+(w^(m|~k))+I[11]+3174756917&4294967295,R=m+(A<<10&4294967295|A>>>22),A=k+(m^(R|~w))+I[2]+718787259&4294967295,k=R+(A<<15&4294967295|A>>>17),A=w+(R^(k|~m))+I[9]+3951481745&4294967295,x.g[0]=x.g[0]+m&4294967295,x.g[1]=x.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+R&4294967295}r.prototype.u=function(x,m){m===void 0&&(m=x.length);for(var w=m-this.blockSize,I=this.B,k=this.h,R=0;R<m;){if(k==0)for(;R<=w;)s(this,x,R),R+=this.blockSize;if(typeof x=="string"){for(;R<m;)if(I[k++]=x.charCodeAt(R++),k==this.blockSize){s(this,I),k=0;break}}else for(;R<m;)if(I[k++]=x[R++],k==this.blockSize){s(this,I),k=0;break}}this.h=k,this.o+=m},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var m=1;m<x.length-8;++m)x[m]=0;var w=8*this.o;for(m=x.length-8;m<x.length;++m)x[m]=w&255,w/=256;for(this.u(x),x=Array(16),m=w=0;4>m;++m)for(var I=0;32>I;I+=8)x[w++]=this.g[m]>>>I&255;return x};function i(x,m){var w=l;return Object.prototype.hasOwnProperty.call(w,x)?w[x]:w[x]=m(x)}function o(x,m){this.h=m;for(var w=[],I=!0,k=x.length-1;0<=k;k--){var R=x[k]|0;I&&R==m||(w[k]=R,I=!1)}this.g=w}var l={};function u(x){return-128<=x&&128>x?i(x,function(m){return new o([m|0],0>m?-1:0)}):new o([x|0],0>x?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return g;if(0>x)return D(d(-x));for(var m=[],w=1,I=0;x>=w;I++)m[I]=x/w|0,w*=4294967296;return new o(m,0)}function p(x,m){if(x.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(x.charAt(0)=="-")return D(p(x.substring(1),m));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(m,8)),I=g,k=0;k<x.length;k+=8){var R=Math.min(8,x.length-k),A=parseInt(x.substring(k,k+R),m);8>R?(R=d(Math.pow(m,R)),I=I.j(R).add(d(A))):(I=I.j(w),I=I.add(d(A)))}return I}var g=u(0),v=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var x=0,m=1,w=0;w<this.g.length;w++){var I=this.i(w);x+=(0<=I?I:4294967296+I)*m,m*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(C(this))return"0";if(N(this))return"-"+D(this).toString(x);for(var m=d(Math.pow(x,6)),w=this,I="";;){var k=j(w,m).g;w=S(w,k.j(m));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(x);if(w=k,C(w))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function C(x){if(x.h!=0)return!1;for(var m=0;m<x.g.length;m++)if(x.g[m]!=0)return!1;return!0}function N(x){return x.h==-1}t.l=function(x){return x=S(this,x),N(x)?-1:C(x)?0:1};function D(x){for(var m=x.g.length,w=[],I=0;I<m;I++)w[I]=~x.g[I];return new o(w,~x.h).add(v)}t.abs=function(){return N(this)?D(this):this},t.add=function(x){for(var m=Math.max(this.g.length,x.g.length),w=[],I=0,k=0;k<=m;k++){var R=I+(this.i(k)&65535)+(x.i(k)&65535),A=(R>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);I=A>>>16,R&=65535,A&=65535,w[k]=A<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(x,m){return x.add(D(m))}t.j=function(x){if(C(this)||C(x))return g;if(N(this))return N(x)?D(this).j(D(x)):D(D(this).j(x));if(N(x))return D(this.j(D(x)));if(0>this.l(_)&&0>x.l(_))return d(this.m()*x.m());for(var m=this.g.length+x.g.length,w=[],I=0;I<2*m;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<x.g.length;k++){var R=this.i(I)>>>16,A=this.i(I)&65535,jt=x.i(k)>>>16,Sr=x.i(k)&65535;w[2*I+2*k]+=A*Sr,E(w,2*I+2*k),w[2*I+2*k+1]+=R*Sr,E(w,2*I+2*k+1),w[2*I+2*k+1]+=A*jt,E(w,2*I+2*k+1),w[2*I+2*k+2]+=R*jt,E(w,2*I+2*k+2)}for(I=0;I<m;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=m;I<2*m;I++)w[I]=0;return new o(w,0)};function E(x,m){for(;(x[m]&65535)!=x[m];)x[m+1]+=x[m]>>>16,x[m]&=65535,m++}function T(x,m){this.g=x,this.h=m}function j(x,m){if(C(m))throw Error("division by zero");if(C(x))return new T(g,g);if(N(x))return m=j(D(x),m),new T(D(m.g),D(m.h));if(N(m))return m=j(x,D(m)),new T(D(m.g),m.h);if(30<x.g.length){if(N(x)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var w=v,I=m;0>=I.l(x);)w=O(w),I=O(I);var k=F(w,1),R=F(I,1);for(I=F(I,2),w=F(w,2);!C(I);){var A=R.add(I);0>=A.l(x)&&(k=k.add(w),R=A),I=F(I,1),w=F(w,1)}return m=S(x,k.j(m)),new T(k,m)}for(k=g;0<=x.l(m);){for(w=Math.max(1,Math.floor(x.m()/m.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=d(w),A=R.j(m);N(A)||0<A.l(x);)w-=I,R=d(w),A=R.j(m);C(R)&&(R=v),k=k.add(R),x=S(x,A)}return new T(k,x)}t.A=function(x){return j(this,x).h},t.and=function(x){for(var m=Math.max(this.g.length,x.g.length),w=[],I=0;I<m;I++)w[I]=this.i(I)&x.i(I);return new o(w,this.h&x.h)},t.or=function(x){for(var m=Math.max(this.g.length,x.g.length),w=[],I=0;I<m;I++)w[I]=this.i(I)|x.i(I);return new o(w,this.h|x.h)},t.xor=function(x){for(var m=Math.max(this.g.length,x.g.length),w=[],I=0;I<m;I++)w[I]=this.i(I)^x.i(I);return new o(w,this.h^x.h)};function O(x){for(var m=x.g.length+1,w=[],I=0;I<m;I++)w[I]=x.i(I)<<1|x.i(I-1)>>>31;return new o(w,x.h)}function F(x,m){var w=m>>5;m%=32;for(var I=x.g.length-w,k=[],R=0;R<I;R++)k[R]=0<m?x.i(R+w)>>>m|x.i(R+w+1)<<32-m:x.i(R+w);return new o(k,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,zr=o}).apply(typeof dy<"u"?dy:typeof self<"u"?self:typeof window<"u"?window:{});var Wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mw,Hi,gw,dl,ih,yw,vw,_w;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wa=="object"&&Wa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var b=a[y];if(!(b in f))break e;f=f[b]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,y=!1,b={next:function(){if(!y&&f<a.length){var P=f++;return{value:h(P,a[P]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function p(a,h,f){return a.call.apply(a.bind,arguments)}function g(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function v(a,h,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,v.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,b,P){for(var U=Array(arguments.length-2),de=2;de<arguments.length;de++)U[de-2]=arguments[de];return h.prototype[b].apply(y,U)}}function N(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function D(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const b=a.length||0,P=y.length||0;a.length=b+P;for(let U=0;U<P;U++)a[b+U]=y[U]}else a.push(y)}}class S{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var O=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function F(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function x(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function m(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(f in y)a[f]=y[f];for(let P=0;P<w.length;P++)f=w[P],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class jt{constructor(){this.h=this.g=null}add(h,f){const y=Sr.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var Sr=new S(()=>new gi,a=>a.reset());class gi{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let mn,B=!1,Q=new jt,X=()=>{const a=l.Promise.resolve(void 0);mn=()=>{a.then(ve)}};var ve=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){R(f)}var h=Sr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function yn(a,h){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(O){e:{try{j(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}C(yn,Ae);var vn={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _n="closure_listenable_"+(1e6*Math.random()|0),SE=0;function kE(a,h,f,y,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=b,this.key=++SE,this.da=this.fa=!1}function ua(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ca(a){this.src=a,this.g={},this.h=0}ca.prototype.add=function(a,h,f,y,b){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var U=Ku(a,h,y,b);return-1<U?(h=a[U],f||(h.fa=!1)):(h=new kE(h,this.src,P,!!y,b),h.fa=f,a.push(h)),h};function Gu(a,h){var f=h.type;if(f in a.g){var y=a.g[f],b=Array.prototype.indexOf.call(y,h,void 0),P;(P=0<=b)&&Array.prototype.splice.call(y,b,1),P&&(ua(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ku(a,h,f,y){for(var b=0;b<a.length;++b){var P=a[b];if(!P.da&&P.listener==h&&P.capture==!!f&&P.ha==y)return b}return-1}var Qu="closure_lm_"+(1e6*Math.random()|0),Ju={};function Sp(a,h,f,y,b){if(Array.isArray(h)){for(var P=0;P<h.length;P++)Sp(a,h[P],f,y,b);return null}return f=bp(f),a&&a[_n]?a.K(h,f,d(y)?!!y.capture:!1,b):CE(a,h,f,!1,y,b)}function CE(a,h,f,y,b,P){if(!h)throw Error("Invalid event type");var U=d(b)?!!b.capture:!!b,de=Xu(a);if(de||(a[Qu]=de=new ca(a)),f=de.add(h,f,y,U,P),f.proxy)return f;if(y=bE(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)gn||(b=U),b===void 0&&(b=!1),a.addEventListener(h.toString(),y,b);else if(a.attachEvent)a.attachEvent(Cp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function bE(){function a(f){return h.call(a.src,a.listener,f)}const h=RE;return a}function kp(a,h,f,y,b){if(Array.isArray(h))for(var P=0;P<h.length;P++)kp(a,h[P],f,y,b);else y=d(y)?!!y.capture:!!y,f=bp(f),a&&a[_n]?(a=a.i,h=String(h).toString(),h in a.g&&(P=a.g[h],f=Ku(P,f,y,b),-1<f&&(ua(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete a.g[h],a.h--)))):a&&(a=Xu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ku(h,f,y,b)),(f=-1<a?h[a]:null)&&Yu(f))}function Yu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[_n])Gu(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Cp(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Xu(h))?(Gu(f,a),f.h==0&&(f.src=null,h[Qu]=null)):ua(a)}}}function Cp(a){return a in Ju?Ju[a]:Ju[a]="on"+a}function RE(a,h){if(a.da)a=!0;else{h=new yn(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&Yu(a),a=f.call(y,h)}return a}function Xu(a){return a=a[Qu],a instanceof ca?a:null}var Zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function bp(a){return typeof a=="function"?a:(a[Zu]||(a[Zu]=function(h){return a.handleEvent(h)}),a[Zu])}function Ye(){ce.call(this),this.i=new ca(this),this.M=this,this.F=null}C(Ye,ce),Ye.prototype[_n]=!0,Ye.prototype.removeEventListener=function(a,h,f,y){kp(this,a,h,f,y)};function lt(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Ae(h,a);else if(h instanceof Ae)h.target=h.target||a;else{var b=h;h=new Ae(y,a),I(h,b)}if(b=!0,f)for(var P=f.length-1;0<=P;P--){var U=h.g=f[P];b=da(U,y,!0,h)&&b}if(U=h.g=a,b=da(U,y,!0,h)&&b,b=da(U,y,!1,h)&&b,f)for(P=0;P<f.length;P++)U=h.g=f[P],b=da(U,y,!1,h)&&b}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)ua(f[y]);delete a.g[h],a.h--}}this.F=null},Ye.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Ye.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function da(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,P=0;P<h.length;++P){var U=h[P];if(U&&!U.da&&U.capture==f){var de=U.listener,Be=U.ha||U.src;U.fa&&Gu(a.i,U),b=de.call(Be,y)!==!1&&b}}return b&&!y.defaultPrevented}function Rp(a,h,f){if(typeof a=="function")f&&(a=v(a,f));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Np(a){a.g=Rp(()=>{a.g=null,a.i&&(a.i=!1,Np(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class NE extends ce{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Np(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(a){ce.call(this),this.h=a,this.g={}}C(yi,ce);var Pp=[];function jp(a){F(a.g,function(h,f){this.g.hasOwnProperty(f)&&Yu(h)},a),a.g={}}yi.prototype.N=function(){yi.aa.N.call(this),jp(this)},yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ec=l.JSON.stringify,PE=l.JSON.parse,jE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function tc(){}tc.prototype.h=null;function Dp(a){return a.h||(a.h=a.i())}function Op(){}var vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nc(){Ae.call(this,"d")}C(nc,Ae);function rc(){Ae.call(this,"c")}C(rc,Ae);var kr={},Vp=null;function ha(){return Vp=Vp||new Ye}kr.La="serverreachability";function Mp(a){Ae.call(this,kr.La,a)}C(Mp,Ae);function _i(a){const h=ha();lt(h,new Mp(h))}kr.STAT_EVENT="statevent";function Lp(a,h){Ae.call(this,kr.STAT_EVENT,a),this.stat=h}C(Lp,Ae);function ut(a){const h=ha();lt(h,new Lp(h,a))}kr.Ma="timingevent";function Fp(a,h){Ae.call(this,kr.Ma,a),this.size=h}C(Fp,Ae);function wi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function xi(){this.g=!0}xi.prototype.xa=function(){this.g=!1};function DE(a,h,f,y,b,P){a.info(function(){if(a.g)if(P)for(var U="",de=P.split("&"),Be=0;Be<de.length;Be++){var ie=de[Be].split("=");if(1<ie.length){var Xe=ie[0];ie=ie[1];var Ze=Xe.split("_");U=2<=Ze.length&&Ze[1]=="type"?U+(Xe+"="+ie+"&"):U+(Xe+"=redacted&")}}else U=null;else U=P;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+h+`
`+f+`
`+U})}function OE(a,h,f,y,b,P,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+h+`
`+f+`
`+P+" "+U})}function hs(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ME(a,f)+(y?" "+y:"")})}function VE(a,h){a.info(function(){return"TIMEOUT: "+h})}xi.prototype.info=function(){};function ME(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var U=1;U<b.length;U++)b[U]=""}}}}return ec(f)}catch{return h}}var fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Up={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sc;function pa(){}C(pa,tc),pa.prototype.g=function(){return new XMLHttpRequest},pa.prototype.i=function(){return{}},sc=new pa;function Bn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new yi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bp}function Bp(){this.i=null,this.g="",this.h=!1}var zp={},ic={};function oc(a,h,f){a.L=1,a.v=va(wn(h)),a.m=f,a.P=!0,$p(a,null)}function $p(a,h){a.F=Date.now(),ma(a),a.A=wn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),rm(f.i,"t",y),a.C=0,f=a.j.J,a.h=new Bp,a.g=xm(a.j,f?h:null,!a.m),0<a.O&&(a.M=new NE(v(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Pp[0]=b.toString()),b=Pp);for(var P=0;P<b.length;P++){var U=Sp(f,b[P],y||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),_i(),DE(a.i,a.u,a.A,a.l,a.R,a.m)}Bn.prototype.ca=function(a){a=a.target;const h=this.M;h&&xn(a)==3?h.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=xn(this.g);var h=this.g.Ba();const ms=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||cm(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=ms?_i(3):_i(2)),ac(this);var f=this.g.Z();this.X=f;t:if(qp(this)){var y=cm(this.g);a="";var b=y.length,P=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Ei(this);var U="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(P&&h==b-1)});y.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,OE(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Be=this.g;if((de=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(de)){var ie=de;break t}}ie=null}if(f=ie)hs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lc(this,f);else{this.o=!1,this.s=3,ut(12),Cr(this),Ei(this);break e}}if(this.P){f=!0;let $t;for(;!this.J&&this.C<U.length;)if($t=LE(this,U),$t==ic){Ze==4&&(this.s=4,ut(14),f=!1),hs(this.i,this.l,null,"[Incomplete Response]");break}else if($t==zp){this.s=4,ut(15),hs(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else hs(this.i,this.l,$t,null),lc(this,$t);if(qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||U.length!=0||this.h.h||(this.s=1,ut(16),f=!1),this.o=this.o&&f,!f)hs(this.i,this.l,U,"[Invalid Chunked Response]"),Cr(this),Ei(this);else if(0<U.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),pc(Xe),Xe.M=!0,ut(11))}}else hs(this.i,this.l,U,null),lc(this,U);Ze==4&&Cr(this),this.o&&!this.J&&(Ze==4?ym(this.j,this):(this.o=!1,ma(this)))}else t1(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Cr(this),Ei(this)}}}catch{}finally{}};function qp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function LE(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?ic:(f=Number(h.substring(f,y)),isNaN(f)?zp:(y+=1,y+f>h.length?ic:(h=h.slice(y,y+f),a.C=y+f,h)))}Bn.prototype.cancel=function(){this.J=!0,Cr(this)};function ma(a){a.S=Date.now()+a.I,Wp(a,a.I)}function Wp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=wi(v(a.ba,a),h)}function ac(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(VE(this.i,this.A),this.L!=2&&(_i(),ut(17)),Cr(this),this.s=2,Ei(this)):Wp(this,this.S-a)};function Ei(a){a.j.G==0||a.J||ym(a.j,a)}function Cr(a){ac(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,jp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function lc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||uc(f.h,a))){if(!a.K&&uc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ta(f),Ea(f);else break e;fc(f),ut(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=wi(v(f.Za,f),6e3));if(1>=Kp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Rr(f,11)}else if((a.K||f.g==a)&&Ta(f),!E(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let ie=b[h];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const Xe=ie[3];Xe!=null&&(f.la=Xe,f.j.info("VER="+f.la));const Ze=ie[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const ms=ie[5];ms!=null&&typeof ms=="number"&&0<ms&&(y=1.5*ms,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const $t=a.g;if($t){const Sa=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var P=y.h;P.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(cc(P,P.h),P.h=null))}if(y.D){const mc=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;mc&&(y.ya=mc,fe(y.I,y.D,mc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var U=a;if(y.qa=wm(y,y.J?y.ia:null,y.W),U.K){Qp(y.h,U);var de=U,Be=y.L;Be&&(de.I=Be),de.B&&(ac(de),ma(de)),y.g=U}else mm(y);0<f.i.length&&Ia(f)}else ie[0]!="stop"&&ie[0]!="close"||Rr(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Rr(f,7):hc(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}_i(4)}catch{}}var FE=class{constructor(a,h){this.g=a,this.map=h}};function Hp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Kp(a){return a.h?1:a.g?a.g.size:0}function uc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function cc(a,h){a.g?a.g.add(h):a.h=h}function Qp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Hp.prototype.cancel=function(){if(this.i=Jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return N(a.i)}function UE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function BE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function Yp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=BE(a),y=UE(a),b=y.length,P=0;P<b;P++)h.call(void 0,y[P],f&&f[P],a)}var Xp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zE(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),b=null;if(0<=y){var P=a[f].substring(0,y);b=a[f].substring(y+1)}else P=a[f];h(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof br){this.h=a.h,ga(this,a.j),this.o=a.o,this.g=a.g,ya(this,a.s),this.l=a.l;var h=a.i,f=new Ai;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Zp(this,f),this.m=a.m}else a&&(h=String(a).match(Xp))?(this.h=!1,ga(this,h[1]||"",!0),this.o=Ii(h[2]||""),this.g=Ii(h[3]||"",!0),ya(this,h[4]),this.l=Ii(h[5]||"",!0),Zp(this,h[6]||"",!0),this.m=Ii(h[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ti(h,em,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ti(h,em,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ti(f,f.charAt(0)=="/"?WE:qE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ti(f,GE)),a.join("")};function wn(a){return new br(a)}function ga(a,h,f){a.j=f?Ii(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ya(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Zp(a,h,f){h instanceof Ai?(a.i=h,KE(a.i,a.h)):(f||(h=Ti(h,HE)),a.i=new Ai(h,a.h))}function fe(a,h,f){a.i.set(h,f)}function va(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ii(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ti(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,$E),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $E(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var em=/[#\/\?@]/g,qE=/[#\?:]/g,WE=/[#\?]/g,HE=/[#\?@]/g,GE=/#/g;function Ai(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zn(a){a.g||(a.g=new Map,a.h=0,a.i&&zE(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ai.prototype,t.add=function(a,h){zn(this),this.i=null,a=fs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function tm(a,h){zn(a),h=fs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function nm(a,h){return zn(a),h=fs(a,h),a.g.has(h)}t.forEach=function(a,h){zn(this),this.g.forEach(function(f,y){f.forEach(function(b){a.call(h,b,y,this)},this)},this)},t.na=function(){zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const b=a[y];for(let P=0;P<b.length;P++)f.push(h[y])}return f},t.V=function(a){zn(this);let h=[];if(typeof a=="string")nm(this,a)&&(h=h.concat(this.g.get(fs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return zn(this),this.i=null,a=fs(this,a),nm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function rm(a,h,f){tm(a,h),0<f.length&&(a.i=null,a.g.set(fs(a,h),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const P=encodeURIComponent(String(y)),U=this.V(y);for(y=0;y<U.length;y++){var b=P;U[y]!==""&&(b+="="+encodeURIComponent(String(U[y]))),a.push(b)}}return this.i=a.join("&")};function fs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function KE(a,h){h&&!a.j&&(zn(a),a.i=null,a.g.forEach(function(f,y){var b=y.toLowerCase();y!=b&&(tm(this,y),rm(this,b,f))},a)),a.j=h}function QE(a,h){const f=new xi;if(l.Image){const y=new Image;y.onload=_($n,f,"TestLoadImage: loaded",!0,h,y),y.onerror=_($n,f,"TestLoadImage: error",!1,h,y),y.onabort=_($n,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=_($n,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function JE(a,h){const f=new xi,y=new AbortController,b=setTimeout(()=>{y.abort(),$n(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(P=>{clearTimeout(b),P.ok?$n(f,"TestPingServer: ok",!0,h):$n(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),$n(f,"TestPingServer: error",!1,h)})}function $n(a,h,f,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(f)}catch{}}function YE(){this.g=new jE}function XE(a,h,f){const y=f||"";try{Yp(a,function(b,P){let U=b;d(b)&&(U=ec(b)),h.push(y+P+"="+encodeURIComponent(U))})}catch(b){throw h.push(y+"type="+encodeURIComponent("_badmap")),b}}function _a(a){this.l=a.Ub||null,this.j=a.eb||!1}C(_a,tc),_a.prototype.g=function(){return new wa(this.l,this.j)},_a.prototype.i=function(a){return function(){return a}}({});function wa(a,h){Ye.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(wa,Ye),t=wa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ki(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Si(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ki(this)),this.g&&(this.readyState=3,ki(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Si(this):ki(this),this.readyState==3&&sm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Si(this))},t.Qa=function(a){this.g&&(this.response=a,Si(this))},t.ga=function(){this.g&&Si(this)};function Si(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ki(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ki(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function im(a){let h="";return F(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function dc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=im(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):fe(a,h,f))}function Ie(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ie,Ye);var ZE=/^https?$/i,e1=["POST","PUT"];t=Ie.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sc.g(),this.v=this.o?Dp(this.o):Dp(sc),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(P){om(this,P);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)f.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const P of y.keys())f.set(P,y.get(P));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(e1,h,void 0))||y||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,U]of f)this.g.setRequestHeader(P,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{um(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){om(this,P)}};function om(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,am(a),xa(a)}function am(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xa(this,!0)),Ie.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lm(this):this.bb())},t.bb=function(){lm(this)};function lm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)Rp(a.Ea,0,a);else if(lt(a,"readystatechange"),xn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=U===0){var b=String(a.D).match(Xp)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),y=!ZE.test(b?b.toLowerCase():"")}f=y}if(f)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var P=2<xn(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",am(a)}}finally{xa(a)}}}}function xa(a,h){if(a.g){um(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||lt(a,"ready");try{f.onreadystatechange=y}catch{}}}function um(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),PE(h)}};function cm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function t1(a){const h={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(E(a[y]))continue;var f=k(a[y]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=h[b]||[];h[b]=P,P.push(f)}x(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ci(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function dm(a){this.Aa=0,this.i=[],this.j=new xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ci("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ci("baseRetryDelayMs",5e3,a),this.cb=Ci("retryDelaySeedMs",1e4,a),this.Wa=Ci("forwardChannelMaxRetries",2,a),this.wa=Ci("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hp(a&&a.concurrentRequestLimit),this.Da=new YE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){ut(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=wm(this,null,this.W),Ia(this)};function hc(a){if(hm(a),a.G==3){var h=a.U++,f=wn(a.I);if(fe(f,"SID",a.K),fe(f,"RID",h),fe(f,"TYPE","terminate"),bi(a,f),h=new Bn(a,a.j,h),h.L=2,h.v=va(wn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=xm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ma(h)}_m(a)}function Ea(a){a.g&&(pc(a),a.g.cancel(),a.g=null)}function hm(a){Ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ia(a){if(!Gp(a.h)&&!a.s){a.s=!0;var h=a.Ga;mn||X(),B||(mn(),B=!0),Q.add(h,a),a.B=0}}function n1(a,h){return Kp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=wi(v(a.Ga,a,h),vm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Bn(this,this.j,a);let P=this.o;if(this.S&&(P?(P=m(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=pm(this,b,h),f=wn(this.I),fe(f,"RID",a),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),bi(this,f),P&&(this.O?h="headers="+encodeURIComponent(String(im(P)))+"&"+h:this.m&&dc(f,this.m,P)),cc(this.h,b),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",h),fe(f,"SID","null"),b.T=!0,oc(b,f,null)):oc(b,f,h),this.G=2}}else this.G==3&&(a?fm(this,a):this.i.length==0||Gp(this.h)||fm(this))};function fm(a,h){var f;h?f=h.l:f=a.U++;const y=wn(a.I);fe(y,"SID",a.K),fe(y,"RID",f),fe(y,"AID",a.T),bi(a,y),a.m&&a.o&&dc(y,a.m,a.o),f=new Bn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=pm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cc(a.h,f),oc(f,y,h)}function bi(a,h){a.H&&F(a.H,function(f,y){fe(h,y,f)}),a.l&&Yp({},function(f,y){fe(h,y,f)})}function pm(a,h,f){f=Math.min(a.i.length,f);var y=a.l?v(a.l.Na,a.l,a):null;e:{var b=a.i;let P=-1;for(;;){const U=["count="+f];P==-1?0<f?(P=b[0].g,U.push("ofs="+P)):P=0:U.push("ofs="+P);let de=!0;for(let Be=0;Be<f;Be++){let ie=b[Be].g;const Xe=b[Be].map;if(ie-=P,0>ie)P=Math.max(0,b[Be].g-100),de=!1;else try{XE(Xe,U,"req"+ie+"_")}catch{y&&y(Xe)}}if(de){y=U.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function mm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;mn||X(),B||(mn(),B=!0),Q.add(h,a),a.v=0}}function fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=wi(v(a.Fa,a),vm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=wi(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Ea(this),gm(this))};function pc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function gm(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),bi(a,h),a.m&&a.o&&dc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=va(wn(h)),f.m=null,f.P=!0,$p(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ea(this),fc(this),ut(19))};function Ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ym(a,h){var f=null;if(a.g==h){Ta(a),pc(a),a.g=null;var y=2}else if(uc(a.h,h))f=h.D,Qp(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;y=ha(),lt(y,new Fp(y,f)),Ia(a)}else mm(a);else if(b=h.s,b==3||b==0&&0<h.X||!(y==1&&n1(a,h)||y==2&&fc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),b){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function vm(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Rr(a,h){if(a.j.info("Error code "+h),h==2){var f=v(a.fb,a),y=a.Xa;const b=!y;y=new br(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ga(y,"https"),va(y),b?QE(y.toString(),f):JE(y.toString(),f)}else ut(2);a.G=0,a.l&&a.l.sa(h),_m(a),hm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function _m(a){if(a.G=0,a.ka=[],a.l){const h=Jp(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function wm(a,h,f){var y=f instanceof br?wn(f):new br(f);if(y.g!="")h&&(y.g=h+"."+y.g),ya(y,y.s);else{var b=l.location;y=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var P=new br(null);y&&ga(P,y),h&&(P.g=h),b&&ya(P,b),f&&(P.l=f),y=P}return f=a.D,h=a.ya,f&&h&&fe(y,f,h),fe(y,"VER",a.la),bi(a,y),y}function xm(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ie(new _a({eb:f})):new Ie(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Em(){}t=Em.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Aa(){}Aa.prototype.g=function(a,h){return new It(a,h)};function It(a,h){Ye.call(this),this.g=new dm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!E(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ps(this)}C(It,Ye),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){hc(this.g)},It.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ec(a),a=f);h.i.push(new FE(h.Ya++,a)),h.G==3&&Ia(h)},It.prototype.N=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,It.aa.N.call(this)};function Im(a){nc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Im,nc);function Tm(){rc.call(this),this.status=1}C(Tm,rc);function ps(a){this.g=a}C(ps,Em),ps.prototype.ua=function(){lt(this.g,"a")},ps.prototype.ta=function(a){lt(this.g,new Im(a))},ps.prototype.sa=function(a){lt(this.g,new Tm)},ps.prototype.ra=function(){lt(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,_w=function(){return new Aa},vw=function(){return ha()},yw=kr,ih={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fa.NO_ERROR=0,fa.TIMEOUT=8,fa.HTTP_ERROR=6,dl=fa,Up.COMPLETE="complete",gw=Up,Op.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,Hi=Op,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,mw=Ie}).apply(typeof Wa<"u"?Wa:typeof self<"u"?self:typeof window<"u"?window:{});const hy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new wu("@firebase/firestore");function Li(){return Qr.logLevel}function q(t,...e){if(Qr.logLevel<=ne.DEBUG){const n=e.map(Of);Qr.debug(`Firestore (${di}): ${t}`,...n)}}function Ln(t,...e){if(Qr.logLevel<=ne.ERROR){const n=e.map(Of);Qr.error(`Firestore (${di}): ${t}`,...n)}}function Zs(t,...e){if(Qr.logLevel<=ne.WARN){const n=e.map(Of);Qr.warn(`Firestore (${di}): ${t}`,...n)}}function Of(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${di}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function le(t,e){t||K()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class Sk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kk{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new ww(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new rt(e)}}class Ck{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ck(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new Rk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Pk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new ue(0,0))}static max(){return new J(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Do.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Do?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Do{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new me(n)}static emptyPath(){return new me([])}}const jk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Do{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return jk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(me.fromString(e))}static fromName(e){return new H(me.fromString(e).popFirst(5))}static empty(){return new H(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new me(e.slice()))}}function Dk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new ue(n+1,0):new ue(n,r));return new gr(s,H.empty(),e)}function Ok(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(J.min(),H.empty(),-1)}static max(){return new gr(J.max(),H.empty(),-1)}}function Vk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==Mk)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Fk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vf.oe=-1;function Au(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function Uk(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ew(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ha(this.root,e,this.comparator,!0)}}class Ha{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $e(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new py(this.data.getIterator())}getIteratorFrom(e){return new py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new St([])}unionWith(e){let n=new Ke(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iw("Invalid base64 string: "+i):i}}(e);return new Je(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const Bk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(le(!!t),typeof t=="string"){let e=0;const n=Bk.exec(t);if(le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lf(t){const e=t.mapValue.fields.__previous_value__;return Mf(e)?Lf(e):e}function Oo(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r,s,i,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Vo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={mapValue:{}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mf(t)?4:qk(t)?9007199254740991:$k(t)?10:11:K()}function pn(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yr(s.timestampValue),l=yr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Jr(s.bytesValue).isEqual(Jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Se(s.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Se(s.integerValue)===Se(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Se(s.doubleValue),l=Se(i.doubleValue);return o===l?Gl(o)===Gl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fy(o)!==fy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!pn(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function Mo(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Se(i.integerValue||i.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return my(t.timestampValue,e.timestampValue);case 4:return my(Oo(t),Oo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Jr(i),u=Jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=oe(l[d],u[d]);if(p!==0)return p}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=oe(Se(i.latitude),Se(o.latitude));return l!==0?l:oe(Se(i.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return gy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,p;const g=i.fields||{},v=o.fields||{},_=(l=g.value)===null||l===void 0?void 0:l.arrayValue,C=(u=v.value)===null||u===void 0?void 0:u.arrayValue,N=oe(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:gy(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ga.mapValue&&o===Ga.mapValue)return 0;if(i===Ga.mapValue)return 1;if(o===Ga.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const v=oe(u[g],p[g]);if(v!==0)return v;const _=ti(l[u[g]],d[p[g]]);if(_!==0)return _}return oe(u.length,p.length)}(t.mapValue,e.mapValue);default:throw K()}}function my(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=yr(t),r=yr(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function gy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ti(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function ni(t){return oh(t)}function oh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=oh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${oh(n.fields[o])}`;return s+"}"}(t.mapValue):K()}function yy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ah(t){return!!t&&"integerValue"in t}function Ff(t){return!!t&&"arrayValue"in t}function vy(t){return!!t&&"nullValue"in t}function _y(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hl(t){return!!t&&"mapValue"in t}function $k(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oo(n)}setAll(e){let n=We.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=oo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];hl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){os(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(oo(this.value))}}function Tw(t){const e=[];return os(t.fields,(n,r)=>{const s=new We([n]);if(hl(r)){const i=Tw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,r,s){return new it(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new it(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.position=e,this.inclusive=n}}function wy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Wk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{}class Pe extends Aw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Gk(e,n,r):n==="array-contains"?new Jk(e,r):n==="in"?new Yk(e,r):n==="not-in"?new Xk(e,r):n==="array-contains-any"?new Zk(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Kk(e,r):new Qk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends Aw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new en(e,n)}matches(e){return Sw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sw(t){return t.op==="and"}function kw(t){return Hk(t)&&Sw(t)}function Hk(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function lh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(kw(t))return t.filters.map(e=>lh(e)).join(",");{const e=t.filters.map(n=>lh(n)).join(",");return`${t.op}(${e})`}}function Cw(t,e){return t instanceof Pe?function(r,s){return s instanceof Pe&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Cw(o,s.filters[l]),!0):!1}(t,e):void K()}function bw(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${ni(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(bw).join(" ,")+"}"}(t):"Filter"}class Gk extends Pe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kk extends Pe{constructor(e,n){super(e,"in",n),this.keys=Rw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Qk extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=Rw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Rw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Jk extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ff(n)&&Mo(n.arrayValue,this.value)}}class Yk extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class Xk extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mo(this.value.arrayValue,n)}}class Zk extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ey(t,e=null,n=[],r=[],s=null,i=null,o=null){return new eC(t,e,n,r,s,i,o)}function Uf(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.ue=n}return e.ue}function Bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Wk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xy(t.startAt,e.startAt)&&xy(t.endAt,e.endAt)}function uh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tC(t,e,n,r,s,i,o,l){return new hi(t,e,n,r,s,i,o,l)}function zf(t){return new hi(t)}function Iy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Nw(t){return t.collectionGroup!==null}function ao(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Lo(i,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new Lo(We.keyField(),r))}return e.ce}function cn(t){const e=Y(t);return e.le||(e.le=nC(e,ao(t))),e.le}function nC(t,e){if(t.limitType==="F")return Ey(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Lo(s.field,i)});const n=t.endAt?new Kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Kl(t.startAt.position,t.startAt.inclusive):null;return Ey(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ch(t,e){const n=t.filters.concat([e]);return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dh(t,e,n){return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Su(t,e){return Bf(cn(t),cn(e))&&t.limitType===e.limitType}function Pw(t){return`${Uf(cn(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>bw(s)).join(", ")}]`),Au(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ni(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ni(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ao(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=wy(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,ao(r),s)||r.endAt&&!function(o,l,u){const d=wy(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,ao(r),s))}(t,e)}function rC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jw(t){return(e,n)=>{let r=!1;for(const s of ao(t)){const i=sC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sC(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?ti(u,d):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ew(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new Ee(H.comparator);function Fn(){return iC}const Dw=new Ee(H.comparator);function Gi(...t){let e=Dw;for(const n of t)e=e.insert(n.key,n);return e}function Ow(t){let e=Dw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return lo()}function Vw(){return lo()}function lo(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const oC=new Ee(H.comparator),aC=new Ke(H.comparator);function te(...t){let e=aC;for(const n of t)e=e.add(n);return e}const lC=new Ke(oe);function uC(){return lC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function Mw(t){return{integerValue:""+t}}function cC(t,e){return Uk(e)?Mw(e):$f(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this._=void 0}}function dC(t,e,n){return t instanceof Ql?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mf(i)&&(i=Lf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Fo?Fw(t,e):t instanceof Uo?Uw(t,e):function(s,i){const o=Lw(s,i),l=Ty(o)+Ty(s.Pe);return ah(o)&&ah(s.Pe)?Mw(l):$f(s.serializer,l)}(t,e)}function hC(t,e,n){return t instanceof Fo?Fw(t,e):t instanceof Uo?Uw(t,e):n}function Lw(t,e){return t instanceof Jl?function(r){return ah(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ql extends Cu{}class Fo extends Cu{constructor(e){super(),this.elements=e}}function Fw(t,e){const n=Bw(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends Cu{constructor(e){super(),this.elements=e}}function Uw(t,e){let n=Bw(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class Jl extends Cu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ty(t){return Se(t.integerValue||t.doubleValue)}function Bw(t){return Ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Fo&&s instanceof Fo||r instanceof Uo&&s instanceof Uo?ei(r.elements,s.elements,pn):r instanceof Jl&&s instanceof Jl?pn(r.Pe,s.Pe):r instanceof Ql&&s instanceof Ql}(t.transform,e.transform)}class pC{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bu{}function zw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qw(t.key,dn.none()):new ea(t.key,t.data,dn.none());{const n=t.data,r=mt.empty();let s=new Ke(We.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ar(t.key,r,new St(s.toArray()),dn.none())}}function mC(t,e,n){t instanceof ea?function(s,i,o){const l=s.value.clone(),u=Sy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(s,i,o){if(!fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Sy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll($w(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n,r){return t instanceof ea?function(i,o,l,u){if(!fl(i.precondition,o))return l;const d=i.value.clone(),p=ky(i.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(i,o,l,u){if(!fl(i.precondition,o))return l;const d=ky(i.fieldTransforms,u,o),p=o.data;return p.setAll($w(i)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,l){return fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function gC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Lw(r.transform,s||null);i!=null&&(n===null&&(n=mt.empty()),n.set(r.field,i))}return n||null}function Ay(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ei(r,s,(i,o)=>fC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends bu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ar extends bu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $w(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sy(t,e,n){const r=new Map;le(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,hC(o,l,n[s]))}return r}function ky(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,dC(i,o,e))}return r}class qw extends bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yC extends bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=zw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,r)=>Ay(n,r))&&ei(this.baseMutations,e.baseMutations,(n,r)=>Ay(n,r))}}class qf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){le(e.mutations.length===r.length);let s=function(){return oC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new qf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,re;function xC(t){switch(t){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Ww(t){if(t===void 0)return Ln("GRPC error has no .code"),V.UNKNOWN;switch(t){case Re.OK:return V.OK;case Re.CANCELLED:return V.CANCELLED;case Re.UNKNOWN:return V.UNKNOWN;case Re.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Re.INTERNAL:return V.INTERNAL;case Re.UNAVAILABLE:return V.UNAVAILABLE;case Re.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Re.NOT_FOUND:return V.NOT_FOUND;case Re.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Re.ABORTED:return V.ABORTED;case Re.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Re.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(re=Re||(Re={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new zr([4294967295,4294967295],0);function Cy(t){const e=EC().encode(t),n=new pw;return n.update(e),new Uint8Array(n.digest())}function by(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zr([n,r],0),new zr([s,i],0)]}class Wf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ki(`Invalid padding: ${n}`);if(r<0)throw new Ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ki(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=zr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(zr.fromNumber(r)));return s.compare(IC)===1&&(s=new zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Cy(e),[r,s]=by(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Cy(e),[r,s]=by(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ru(J.min(),s,new Ee(oe),Fn(),te())}}class ta{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Hw{constructor(e,n){this.targetId=e,this.me=n}}class Gw{constructor(e,n,r=Je.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ry{constructor(){this.fe=0,this.ge=Py(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new ta(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Py()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=Ny(),this.Qe=new Ee(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(uh(i))if(r===0){const o=new H(i.path);this.Ue(n,o,it.newNoDocument(o,J.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Jr(r).toUint8Array()}catch(u){if(u instanceof Iw)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Wf(o,s,i)}catch(u){return Zs(u instanceof Ki?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&uh(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,it.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=te();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ru(e,n,this.Qe,this.ke,r);return this.ke=Fn(),this.qe=Ny(),this.Qe=new Ee(oe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ry,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ke(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ry),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ny(){return new Ee(H.comparator)}function Py(){return new Ee(H.comparator)}const AC={asc:"ASCENDING",desc:"DESCENDING"},SC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kC={and:"AND",or:"OR"};class CC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hh(t,e){return t.useProto3Json||Au(e)?e:{value:e}}function Yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bC(t,e){return Yl(t,e.toTimestamp())}function hn(t){return le(!!t),J.fromTimestamp(function(n){const r=yr(n);return new ue(r.seconds,r.nanos)}(t))}function Hf(t,e){return fh(t,e).canonicalString()}function fh(t,e){const n=function(s){return new me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qw(t){const e=me.fromString(t);return le(ex(e)),e}function ph(t,e){return Hf(t.databaseId,e.path)}function Qc(t,e){const n=Qw(e);if(n.get(1)!==t.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Yw(n))}function Jw(t,e){return Hf(t.databaseId,e)}function RC(t){const e=Qw(t);return e.length===4?me.emptyPath():Yw(e)}function mh(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yw(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jy(t,e,n){return{name:ph(t,e),fields:n.value.mapValue.fields}}function NC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(le(p===void 0||typeof p=="string"),Je.fromBase64String(p||"")):(le(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Je.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?V.UNKNOWN:Ww(d.code);return new z(p,d.message||"")}(o);n=new Gw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qc(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):J.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(s,i,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new pl(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qc(t,r.document),i=r.readTime?hn(r.readTime):J.min(),o=it.newNoDocument(s,i),l=r.removedTargetIds||[];n=new pl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qc(t,r.document),i=r.removedTargetIds||[];n=new pl([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new wC(s,i),l=r.targetId;n=new Hw(l,o)}}return n}function PC(t,e){let n;if(e instanceof ea)n={update:jy(t,e.key,e.value)};else if(e instanceof qw)n={delete:ph(t,e.key)};else if(e instanceof Ar)n={update:jy(t,e.key,e.data),updateMask:BC(e.fieldMask)};else{if(!(e instanceof yC))return K();n={verify:ph(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Jl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function jC(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(J.min())&&(o=hn(i)),new pC(o,s.transformResults||[])}(n,e))):[]}function DC(t,e){return{documents:[Jw(t,e.path)]}}function OC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Jw(t,s);const i=function(d){if(d.length!==0)return Zw(en.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:_s(v.field),direction:LC(v.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function VC(t){let e=RC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){le(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(g){const v=Xw(g);return v instanceof en&&kw(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(v=>function(C){return new Lo(ws(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,Au(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(g){const v=!!g.before,_=g.values||[];return new Kl(_,v)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const v=!g.before,_=g.values||[];return new Kl(_,v)}(n.endAt)),tC(e,s,o,i,l,"F",u,d)}function MC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ws(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ws(n.unaryFilter.field);return Pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ws(n.unaryFilter.field);return Pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(ws(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>Xw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function LC(t){return AC[t]}function FC(t){return SC[t]}function UC(t){return kC[t]}function _s(t){return{fieldPath:t.canonicalString()}}function ws(t){return We.fromServerFormat(t.fieldPath)}function Zw(t){return t instanceof Pe?function(n){if(n.op==="=="){if(_y(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(vy(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_y(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(vy(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:FC(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>Zw(s));return r.length===1?r[0]:{compositeFilter:{op:UC(n.op),filters:r}}}(t):K()}function BC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ex(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,s,i=J.min(),o=J.min(),l=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.ct=e}}function $C(t){const e=VC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.un=new WC}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(gr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class WC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ri(0)}static kn(){return new ri(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&uo(r.mutation,s,St.empty(),ue.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=Lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Gi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Fn();const o=lo(),l=function(){return lo()}();return n.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Ar)?i=i.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),uo(p.mutation,d,p.mutation.getFieldMask(),ue.now())):o.set(d.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var g;return l.set(d,new GC(p,(g=o.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=lo();let s=new Ee((o,l)=>o-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||St.empty();p=l.applyToLocalView(d,p),r.set(u,p);const g=(s.get(l.batchId)||te()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,g=Vw();p.forEach(v=>{if(!i.has(v)){const _=zw(n.get(v),r.get(v));_!==null&&g.set(v,_),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Nw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Lr());let l=-1,u=i;return o.next(d=>M.forEach(d,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,te())).next(p=>({batchId:l,changes:Ow(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Gi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Gi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const d=function(g,v){return new hi(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((g,v)=>{o=o.insert(g,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,it.newInvalidDocument(p)))});let l=Gi();return o.forEach((u,d)=>{const p=i.get(u);p!==void 0&&uo(p.mutation,d,St.empty(),ue.now()),ku(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:$C(s.bundledQuery),readTime:hn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.overlays=new Ee(H.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Lr(),i=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Lr(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Lr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return M.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _C(n,r));let i=this.Ir.get(n);i===void 0&&(i=te(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.Tr=new Ke(Me.Er),this.dr=new Ke(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new me([])),r=new Me(n,e),s=new Me(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new me([])),r=new Me(n,e),s=new Me(n,e+1);let i=te();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ke(Me.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Me(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),s=new Me(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(oe);return n.forEach(s=>{const i=new Me(s,0),o=new Me(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Me(new H(i),0);let l=new Ke(oe);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,s=>{const i=new Me(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),s=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.Mr=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Vk(Ok(p),r)<=0||(s.has(p.key)||ku(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eb(this)}getSize(e){return M.resolve(this.size)}}class eb extends HC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.persistence=e,this.Nr=new fi(n=>Uf(n),Bf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Gf,this.targetCount=0,this.kr=ri.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Vf(0),this.Kr=!1,this.Kr=!0,this.$r=new YC,this.referenceDelegate=e(this),this.Ur=new tb(this),this.indexManager=new qC,this.remoteDocumentCache=function(s){return new ZC(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new zC(n),this.Gr=new QC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new XC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new rb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class rb extends Lk{constructor(e){super(),this.currentSequenceNumber=e}}class Kf{constructor(e){this.persistence=e,this.Jr=new Gf,this.Yr=null}static Zr(e){return new Kf(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=H.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return HT()?8:Fk(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sb;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Li()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Li()<=ne.DEBUG&&q("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Li()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):M.resolve())}Yi(e,n){if(Iy(n))return M.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=dh(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,dh(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return Iy(n)||s.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?M.resolve(null):(Li()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vs(n)),this.rs(e,o,n,Dk(s,-1)).next(l=>l))})}ts(e,n){let r=new Ke(jw(e));return n.forEach((s,i)=>{ku(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Li()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",vs(n)),this.Ji.getDocumentsMatchingQuery(e,n,gr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ee(oe),this._s=new fi(i=>Uf(i),Bf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ab(t,e,n,r){return new ob(t,e,n,r)}async function tx(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=te();for(const d of s){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function lb(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const g=d.batch,v=g.keys();let _=M.resolve();return v.forEach(C=>{_=_.next(()=>p.getEntry(u,C)).next(N=>{const D=d.docVersions.get(C);le(D!==null),N.version.compareTo(D)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function nx(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ub(t,e){const n=Y(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,g)=>{const v=s.get(g);if(!v)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,g)));let _=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?_=_.withResumeToken(Je.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(p.resumeToken,r)),s=s.insert(g,_),function(N,D,S){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(v,_,p)&&l.push(n.Ur.updateTargetData(i,_))});let u=Fn(),d=te();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(cb(i,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(J.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function cb(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Fn();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function db(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hb(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function gh(t,e,n){const r=Y(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Dy(t,e,n){const r=Y(t);let s=J.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const g=Y(u),v=g._s.get(p);return v!==void 0?M.resolve(g.os.get(v)):g.Ur.getTargetData(d,p)}(r,o,cn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:te())).next(l=>(fb(r,rC(e),l),{documents:l,Ts:i})))}function fb(t,e,n){let r=t.us.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Oy{constructor(){this.activeTargetIds=uC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pb{constructor(){this.so=new Oy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Oy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka=null;function Jc(){return Ka===null?Ka=function(){return 268435456+Math.round(2147483648*Math.random())}():Ka++,"0x"+Ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class vb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Jc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(p=>(q("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Zs("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+di}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=gb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Jc();return new Promise((o,l)=>{const u=new mw;u.setWithCredentials(!0),u.listenOnce(gw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case dl.NO_ERROR:const p=u.getResponseJson();q(nt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case dl.TIMEOUT:q(nt,`RPC '${e}' ${i} timed out`),l(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const g=u.getStatus();if(q(nt,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const _=v==null?void 0:v.error;if(_&&_.status&&_.message){const C=function(D){const S=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(S)>=0?S:V.UNKNOWN}(_.status);l(new z(C,_.message))}else l(new z(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{q(nt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);q(nt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=Jc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_w(),l=vw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");q(nt,`Creating RPC '${e}' stream ${s}: ${p}`,u);const g=o.createWebChannel(p,u);let v=!1,_=!1;const C=new yb({Io:D=>{_?q(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(v||(q(nt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),v=!0),q(nt,`RPC '${e}' stream ${s} sending:`,D),g.send(D))},To:()=>g.close()}),N=(D,S,E)=>{D.listen(S,T=>{try{E(T)}catch(j){setTimeout(()=>{throw j},0)}})};return N(g,Hi.EventType.OPEN,()=>{_||(q(nt,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),N(g,Hi.EventType.CLOSE,()=>{_||(_=!0,q(nt,`RPC '${e}' stream ${s} transport closed`),C.So())}),N(g,Hi.EventType.ERROR,D=>{_||(_=!0,Zs(nt,`RPC '${e}' stream ${s} transport errored:`,D),C.So(new z(V.UNAVAILABLE,"The operation could not be completed")))}),N(g,Hi.EventType.MESSAGE,D=>{var S;if(!_){const E=D.data[0];le(!!E);const T=E,j=T.error||((S=T[0])===null||S===void 0?void 0:S.error);if(j){q(nt,`RPC '${e}' stream ${s} received error:`,j);const O=j.status;let F=function(w){const I=Re[w];if(I!==void 0)return Ww(I)}(O),x=j.message;F===void 0&&(F=V.INTERNAL,x="Unknown error status: "+O+" with message "+j.message),_=!0,C.So(new z(F,x)),g.close()}else q(nt,`RPC '${e}' stream ${s} received:`,E),C.bo(E)}}),N(l,yw.STAT_EVENT,D=>{D.stat===ih.PROXY?q(nt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===ih.NOPROXY&&q(nt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Yc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new CC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rx(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _b extends sx{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=NC(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?hn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=mh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=uh(u)?{documents:DC(i,u)}:{query:OC(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Kw(i,o.resumeToken);const d=hh(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Yl(i,o.snapshotVersion.toTimestamp());const d=hh(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=MC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=mh(this.serializer),n.removeTarget=e,this.a_(n)}}class wb extends sx{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=jC(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=mh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PC(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,fh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(V.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,fh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Eb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ln(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{as(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=Y(u);d.L_.add(4),await na(d),d.q_.set("Unknown"),d.L_.delete(4),await Pu(d)}(this))})}),this.q_=new Eb(r,s)}}async function Pu(t){if(as(t))for(const e of t.B_)await e(!0)}async function na(t){for(const e of t.B_)await e(!1)}function ix(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Zf(n)?Xf(n):pi(n).r_()&&Yf(n,e))}function Jf(t,e){const n=Y(t),r=pi(n);n.N_.delete(e),r.r_()&&ox(n,e),n.N_.size===0&&(r.r_()?r.o_():as(n)&&n.q_.set("Unknown"))}function Yf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}pi(t).A_(e)}function ox(t,e){t.Q_.xe(e),pi(t).R_(e)}function Xf(t){t.Q_=new TC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),pi(t).start(),t.q_.v_()}function Zf(t){return as(t)&&!pi(t).n_()&&t.N_.size>0}function as(t){return Y(t).L_.size===0}function ax(t){t.Q_=void 0}async function Tb(t){t.q_.set("Online")}async function Ab(t){t.N_.forEach((e,n)=>{Yf(t,e)})}async function Sb(t,e){ax(t),Zf(t)?(t.q_.M_(e),Xf(t)):t.q_.set("Unknown")}async function kb(t,e,n){if(t.q_.set("Online"),e instanceof Gw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xl(t,r)}else if(e instanceof pl?t.Q_.Ke(e):e instanceof Hw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await nx(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(Je.EMPTY_BYTE_STRING,p.snapshotVersion)),ox(i,u);const g=new tr(p.target,u,d,p.sequenceNumber);Yf(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Xl(t,r)}}async function Xl(t,e,n){if(!Zo(e))throw e;t.L_.add(1),await na(t),t.q_.set("Offline"),n||(n=()=>nx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Pu(t)})}function lx(t,e){return e().catch(n=>Xl(t,n,e))}async function ju(t){const e=Y(t),n=vr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Cb(e);)try{const s=await db(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,bb(e,s)}catch(s){await Xl(e,s)}ux(e)&&cx(e)}function Cb(t){return as(t)&&t.O_.length<10}function bb(t,e){t.O_.push(e);const n=vr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ux(t){return as(t)&&!vr(t).n_()&&t.O_.length>0}function cx(t){vr(t).start()}async function Rb(t){vr(t).p_()}async function Nb(t){const e=vr(t);for(const n of t.O_)e.m_(n.mutations)}async function Pb(t,e,n){const r=t.O_.shift(),s=qf.from(r,e,n);await lx(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ju(t)}async function jb(t,e){e&&vr(t).V_&&await async function(r,s){if(function(o){return xC(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();vr(r).s_(),await lx(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ju(r)}}(t,e),ux(t)&&cx(t)}async function My(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=as(n);n.L_.add(3),await na(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Pu(n)}async function Db(t,e){const n=Y(t);e?(n.L_.delete(2),await Pu(n)):e||(n.L_.add(2),await na(n),n.q_.set("Unknown"))}function pi(t){return t.K_||(t.K_=function(n,r,s){const i=Y(n);return i.w_(),new _b(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Tb.bind(null,t),Ro:Ab.bind(null,t),mo:Sb.bind(null,t),d_:kb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Zf(t)?Xf(t):t.q_.set("Unknown")):(await t.K_.stop(),ax(t))})),t.K_}function vr(t){return t.U_||(t.U_=function(n,r,s){const i=Y(n);return i.w_(),new wb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Rb.bind(null,t),mo:jb.bind(null,t),f_:Nb.bind(null,t),g_:Pb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ju(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ep(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tp(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Zo(t))return new z(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Gi(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.W_=new Ee(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class si{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new si(e,n,$s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Vb{constructor(){this.queries=Fy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Y(n),i=s.queries;s.queries=Fy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function Fy(){return new fi(t=>Pw(t),Su)}async function dx(t,e){const n=Y(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Ob,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=tp(o,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&np(n)}async function hx(t,e){const n=Y(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Mb(t,e){const n=Y(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&np(n)}function Lb(t,e,n){const r=Y(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function np(t){t.Y_.forEach(e=>{e.next()})}var yh,Uy;(Uy=yh||(yh={})).ea="default",Uy.Cache="cache";class fx{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==yh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.key=e}}class mx{constructor(e){this.key=e}}class Fb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=jw(e),this.Ra=new $s(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ly,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const v=s.get(p),_=ku(this.query,g)?g:null,C=!!v&&this.mutatedKeys.has(v.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;v&&_?v.data.isEqual(_.data)?C!==N&&(r.track({type:3,doc:_}),D=!0):this.ga(v,_)||(r.track({type:2,doc:_}),D=!0,(u&&this.Aa(_,u)>0||d&&this.Aa(_,d)<0)&&(l=!0)):!v&&_?(r.track({type:0,doc:_}),D=!0):v&&!_&&(r.track({type:1,doc:v}),D=!0,(u||d)&&(l=!0)),D&&(_?(o=o.add(_),i=N?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,g)=>function(_,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return N(_)-N(C)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new si(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ly,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new mx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new px(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ub{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Bb{constructor(e){this.key=e,this.va=!1}}class zb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fi(l=>Pw(l),Su),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(H.comparator),this.Na=new Map,this.La=new Gf,this.Ba={},this.ka=new Map,this.qa=ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $b(t,e,n=!0){const r=xx(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await gx(r,e,n,!0),s}async function qb(t,e){const n=xx(t);await gx(n,e,!0,!1)}async function gx(t,e,n,r){const s=await hb(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Wb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ix(t.remoteStore,s),l}async function Wb(t,e,n,r,s){t.Ka=(g,v,_)=>async function(N,D,S,E){let T=D.view.ma(S);T.ns&&(T=await Dy(N.localStore,D.query,!1).then(({documents:x})=>D.view.ma(x,T)));const j=E&&E.targetChanges.get(D.targetId),O=E&&E.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(T,N.isPrimaryClient,j,O);return zy(N,D.targetId,F.wa),F.snapshot}(t,g,v,_);const i=await Dy(t.localStore,e,!0),o=new Fb(e,i.Ts),l=o.ma(i.documents),u=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);zy(t,n,d.wa);const p=new Ub(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function Hb(t,e,n){const r=Y(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Su(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await gh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Jf(r.remoteStore,s.targetId),vh(r,s.targetId)}).catch(Xo)):(vh(r,s.targetId),await gh(r.localStore,s.targetId,!0))}async function Gb(t,e){const n=Y(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jf(n.remoteStore,r.targetId))}async function Kb(t,e,n){const r=tR(t);try{const s=await function(o,l){const u=Y(o),d=ue.now(),p=l.reduce((_,C)=>_.add(C.key),te());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Fn(),N=te();return u.cs.getEntries(_,p).next(D=>{C=D,C.forEach((S,E)=>{E.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,C)).next(D=>{g=D;const S=[];for(const E of l){const T=gC(E,g.get(E.key).overlayedDocument);T!=null&&S.push(new Ar(E.key,T,Tw(T.value.mapValue),dn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,d,S,l)}).next(D=>{v=D;const S=D.applyToLocalDocumentSet(g,N);return u.documentOverlayCache.saveOverlays(_,D.batchId,S)})}).then(()=>({batchId:v.batchId,changes:Ow(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Ee(oe)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await ra(r,s.changes),await ju(r.remoteStore)}catch(s){const i=tp(s,"Failed to persist write");n.reject(i)}}async function yx(t,e){const n=Y(t);try{const r=await ub(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?le(o.va):s.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await ra(n,r,e)}catch(r){await Xo(r)}}function By(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let d=!1;u.queries.forEach((p,g)=>{for(const v of g.j_)v.Z_(l)&&(d=!0)}),d&&np(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qb(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ee(H.comparator);o=o.insert(i,it.newNoDocument(i,J.min()));const l=te().add(i),u=new Ru(J.min(),new Map,new Ee(oe),o,l);await yx(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),rp(r)}else await gh(r.localStore,e,!1).then(()=>vh(r,e,n)).catch(Xo)}async function Jb(t,e){const n=Y(t),r=e.batch.batchId;try{const s=await lb(n.localStore,e);_x(n,r,null),vx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,s)}catch(s){await Xo(s)}}async function Yb(t,e,n){const r=Y(t);try{const s=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(le(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);_x(r,e,n),vx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,s)}catch(s){await Xo(s)}}function vx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function _x(t,e,n){const r=Y(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function vh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||wx(t,r)})}function wx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Jf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),rp(t))}function zy(t,e,n){for(const r of n)r instanceof px?(t.La.addReference(r.key,e),Xb(t,r)):r instanceof mx?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||wx(t,r.key)):K()}function Xb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),rp(t))}function rp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(me.fromString(e)),r=t.qa.next();t.Na.set(r,new Bb(n)),t.Oa=t.Oa.insert(n,r),ix(t.remoteStore,new tr(cn(zf(n.path)),r,"TargetPurposeLimboResolution",Vf.oe))}}async function ra(t,e,n){const r=Y(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Qf.Wi(u.targetId,d);i.push(g)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const p=Y(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(d,v=>M.forEach(v.$i,_=>p.persistence.referenceDelegate.addReference(g,v.targetId,_)).next(()=>M.forEach(v.Ui,_=>p.persistence.referenceDelegate.removeReference(g,v.targetId,_)))))}catch(g){if(!Zo(g))throw g;q("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const _=p.os.get(v),C=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(C);p.os=p.os.insert(v,N)}}}(r.localStore,i))}async function Zb(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await tx(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(V.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.hs)}}function eR(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let s=te();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function xx(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qb.bind(null,e),e.Ca.d_=Mb.bind(null,e.eventManager),e.Ca.$a=Lb.bind(null,e.eventManager),e}function tR(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}class Zl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return ab(this.persistence,new ib,e.initialUser,this.serializer)}Ga(e){return new nb(Kf.Zr,this.serializer)}Wa(e){return new pb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zl.provider={build:()=>new Zl};class _h{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>By(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zb.bind(null,this.syncEngine),await Db(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Vb}()}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=function(i){return new vb(i)}(e.databaseInfo);return function(i,o,l,u){return new xb(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Ib(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>By(this.syncEngine,n,0),function(){return Vy.D()?new Vy:new mb}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,p){const g=new zb(s,i,o,l,u,d);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Y(s);q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await na(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}_h.provider={build:()=>new _h};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=xw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tx(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $y(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rR(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>My(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>My(e.remoteStore,s)),t._onlineComponents=e}async function rR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await Xc(t,new Zl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Xc(t,new Zl);return t._offlineComponents}async function Ix(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await $y(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await $y(t,new _h))),t._onlineComponents}function sR(t){return Ix(t).then(e=>e.syncEngine)}async function Tx(t){const e=await Ix(t),n=e.eventManager;return n.onListen=$b.bind(null,e.syncEngine),n.onUnlisten=Hb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Gb.bind(null,e.syncEngine),n}function iR(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const p=new Ex({next:v=>{p.Za(),o.enqueueAndForget(()=>hx(i,g));const _=v.docs.has(l);!_&&v.fromCache?d.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&v.fromCache&&u&&u.source==="server"?d.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new fx(zf(l.path),p,{includeMetadataChanges:!0,_a:!0});return dx(i,g)}(await Tx(t),t.asyncQueue,e,n,r)),r.promise}function oR(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const p=new Ex({next:v=>{p.Za(),o.enqueueAndForget(()=>hx(i,g)),v.fromCache&&u.source==="server"?d.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new fx(l,p,{includeMetadataChanges:!0,_a:!0});return dx(i,g)}(await Tx(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t,e,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aR(t,e,n,r){if(e===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wy(t){if(!H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hy(t){if(H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function _r(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Du(t);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ax((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ou{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ak;switch(r.type){case"firstParty":return new bk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qy.get(n);r&&(q("ComponentProvider","Removing Datastore"),qy.delete(n),r.terminate())}(this),Promise.resolve()}}function lR(t,e,n,r={}){var s;const i=(t=_r(t,Ou))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=rt.MOCK_USER;else{l=UT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(d)}t._authCredentials=new Sk(new ww(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class fr extends ls{constructor(e,n,r){super(e,n,zf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new H(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function Et(t,e,...n){if(t=De(t),Sx("collection","path",e),t instanceof Ou){const r=me.fromString(e,...n);return Hy(r),new fr(t,null,r)}{if(!(t instanceof wt||t instanceof fr))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Hy(r),new fr(t.firestore,null,r)}}function us(t,e,...n){if(t=De(t),arguments.length===1&&(e=xw.newId()),Sx("doc","path",e),t instanceof Ou){const r=me.fromString(e,...n);return Wy(r),new wt(t,null,new H(r))}{if(!(t instanceof wt||t instanceof fr))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Wy(r),new wt(t.firestore,t instanceof fr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rx(this,"async_queue_retry"),this.Vu=()=>{const r=Yc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Yc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Nn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Zo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=ep.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class sa extends Ou{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ky,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ky(e),this._firestoreClient=void 0,await e}}}function uR(t,e){const n=typeof t=="object"?t:If(),r=typeof t=="string"?t:"(default)",s=rs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=LT("firestore");i&&lR(s,...i)}return s}function sp(t){if(t._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cR(t),t._firestoreClient}function cR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,d,p){return new zk(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Ax(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new nR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(Je.fromBase64String(e))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ii(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=/^__.*__$/;class hR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class kx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Cx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class lp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new lp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return eu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Cx(this.Cu)&&dR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class fR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}Qu(e,n,r,s=!1){return new lp({Cu:e,methodName:n,qu:r,path:We.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function up(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new fR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pR(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);cp("Data must be an object, but it was:",o,r);const l=bx(r,o);let u,d;if(i.merge)u=new St(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const v=wh(e,g,n);if(!o.contains(v))throw new z(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Nx(p,v)||p.push(v)}u=new St(p),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new hR(new mt(l),u,d)}class Mu extends ip{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mu}}function mR(t,e,n,r){const s=t.Qu(1,e,n);cp("Data must be an object, but it was:",s,r);const i=[],o=mt.empty();os(r,(u,d)=>{const p=dp(e,u,n);d=De(d);const g=s.Nu(p);if(d instanceof Mu)i.push(p);else{const v=ia(d,g);v!=null&&(i.push(p),o.set(p,v))}});const l=new St(i);return new kx(o,l,s.fieldTransforms)}function gR(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[wh(e,r,n)],u=[s];if(i.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(wh(e,i[v])),u.push(i[v+1]);const d=[],p=mt.empty();for(let v=l.length-1;v>=0;--v)if(!Nx(d,l[v])){const _=l[v];let C=u[v];C=De(C);const N=o.Nu(_);if(C instanceof Mu)d.push(_);else{const D=ia(C,N);D!=null&&(d.push(_),p.set(_,D))}}const g=new St(d);return new kx(p,g,o.fieldTransforms)}function yR(t,e,n,r=!1){return ia(n,t.Qu(r?4:3,e))}function ia(t,e){if(Rx(t=De(t)))return cp("Unsupported field value:",e,t),bx(t,e);if(t instanceof ip)return function(r,s){if(!Cx(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=ia(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ue.fromDate(r);return{timestampValue:Yl(s.serializer,i)}}if(r instanceof ue){const i=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yl(s.serializer,i)}}if(r instanceof op)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ii)return{bytesValue:Kw(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ap)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return $f(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Du(r)}`)}(t,e)}function bx(t,e){const n={};return Ew(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,s)=>{const i=ia(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Rx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ue||t instanceof op||t instanceof ii||t instanceof wt||t instanceof ip||t instanceof ap)}function cp(t,e,n){if(!Rx(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Du(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function wh(t,e,n){if((e=De(e))instanceof Vu)return e._internalPath;if(typeof e=="string")return dp(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const vR=new RegExp("[~\\*/\\[\\]]");function dp(t,e,n){if(e.search(vR)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vu(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new z(V.INVALID_ARGUMENT,l+t+u)}function Nx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _R(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _R extends Px{data(){return super.data()}}function Lu(t,e){return typeof e=="string"?dp(t,e):e instanceof Vu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hp{}class jx extends hp{}function cs(t,e,...n){let r=[];e instanceof hp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof fp).length,l=i.filter(u=>u instanceof Fu).length;if(o>1||o>0&&l>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Fu extends jx{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fu(e,n,r)}_apply(e){const n=this._parse(e);return Ox(e._query,n),new ls(e.firestore,e.converter,ch(e._query,n))}_parse(e){const n=up(e.firestore);return function(i,o,l,u,d,p,g){let v;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Jy(g,p);const _=[];for(const C of g)_.push(Qy(u,i,C));v={arrayValue:{values:_}}}else v=Qy(u,i,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Jy(g,p),v=yR(l,o,g,p==="in"||p==="not-in");return Pe.create(d,p,v)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Dx(t,e,n){const r=e,s=Lu("where",t);return Fu._create(s,r,n)}class fp extends hp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Ox(o,u),o=ch(o,u)}(e._query,n),new ls(e.firestore,e.converter,ch(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pp extends jx{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new pp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Lo(i,o)}(e._query,this._field,this._direction);return new ls(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new hi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function oa(t,e="asc"){const n=e,r=Lu("orderBy",t);return pp._create(r,n)}function Qy(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nw(e)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!H.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yy(t,new H(r))}if(n instanceof wt)return yy(t,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Du(n)}.`)}function Jy(t,e){if(!Array.isArray(t)||t.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ox(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class xR{convertValue(e,n="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Se(o.doubleValue));return new ap(i)}convertGeoPoint(e){return new op(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=yr(e);return new ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);le(ex(r));const s=new Vo(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vx extends Px{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends Vx{data(e={}){return super.data(e)}}class IR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new Qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new ml(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ml(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:TR(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t){t=_r(t,wt);const e=_r(t.firestore,sa);return iR(sp(e),t._key).then(n=>AR(e,t,n))}class Mx extends xR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function wr(t){t=_r(t,ls);const e=_r(t.firestore,sa),n=sp(e),r=new Mx(e);return wR(t._query),oR(n,t._query).then(s=>new IR(e,r,t,s))}function Uu(t,e,n,...r){t=_r(t,wt);const s=_r(t.firestore,sa),i=up(s);let o;return o=typeof(e=De(e))=="string"||e instanceof Vu?gR(i,"updateDoc",t._key,e,n,r):mR(i,"updateDoc",t._key,e),Lx(s,[o.toMutation(t._key,dn.exists(!0))])}function ds(t,e){const n=_r(t.firestore,sa),r=us(t),s=ER(t.converter,e);return Lx(n,[pR(up(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function Lx(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>Kb(await sR(r),s,i)),i.promise}(sp(t),e)}function AR(t,e,n){const r=n.docs.get(e._key),s=new Mx(t);return new Vx(t,s,e._key,r,new Qi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){di=s})(ui),fn(new Zt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new sa(new kk(r.getProvider("auth-internal")),new Nk(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(d.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ft(hy,"4.7.3",e),Ft(hy,"4.7.3","esm2017")})();const Fx="@firebase/installations",gp="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=1e4,Bx=`w:${gp}`,zx="FIS_v2",SR="https://firebaseinstallations.googleapis.com/v1",kR=60*60*1e3,CR="installations",bR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xr=new ns(CR,bR,RR);function $x(t){return t instanceof tn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx({projectId:t}){return`${SR}/projects/${t}/installations`}function Wx(t){return{token:t.token,requestStatus:2,expiresIn:PR(t.expiresIn),creationTime:Date.now()}}async function Hx(t,e){const r=(await e.json()).error;return Xr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Gx({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function NR(t,{refreshToken:e}){const n=Gx(t);return n.append("Authorization",jR(e)),n}async function Kx(t){const e=await t();return e.status>=500&&e.status<600?t():e}function PR(t){return Number(t.replace("s","000"))}function jR(t){return`${zx} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qx(t),s=Gx(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:n,authVersion:zx,appId:t.appId,sdkVersion:Bx},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await Kx(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Wx(d.authToken)}}else throw await Hx("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=/^[cdef][\w-]{21}$/,xh="";function MR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=LR(t);return VR.test(n)?n:xh}catch{return xh}}function LR(t){return OR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=new Map;function Yx(t,e){const n=Bu(t);Xx(n,e),FR(n,e)}function Xx(t,e){const n=Jx.get(t);if(n)for(const r of n)r(e)}function FR(t,e){const n=UR();n&&n.postMessage({key:t,fid:e}),BR()}let Fr=null;function UR(){return!Fr&&"BroadcastChannel"in self&&(Fr=new BroadcastChannel("[Firebase] FID Change"),Fr.onmessage=t=>{Xx(t.data.key,t.data.fid)}),Fr}function BR(){Jx.size===0&&Fr&&(Fr.close(),Fr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="firebase-installations-database",$R=1,Zr="firebase-installations-store";let Zc=null;function yp(){return Zc||(Zc=P0(zR,$R,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zr)}}})),Zc}async function tu(t,e){const n=Bu(t),s=(await yp()).transaction(Zr,"readwrite"),i=s.objectStore(Zr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Yx(t,e.fid),e}async function Zx(t){const e=Bu(t),r=(await yp()).transaction(Zr,"readwrite");await r.objectStore(Zr).delete(e),await r.done}async function zu(t,e){const n=Bu(t),s=(await yp()).transaction(Zr,"readwrite"),i=s.objectStore(Zr),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&Yx(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t){let e;const n=await zu(t.appConfig,r=>{const s=qR(r),i=WR(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===xh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qR(t){const e=t||{fid:MR(),registrationStatus:0};return eE(e)}function WR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Xr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=HR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:GR(t)}:{installationEntry:e}}async function HR(t,e){try{const n=await DR(t,e);return tu(t.appConfig,n)}catch(n){throw $x(n)&&n.customData.serverCode===409?await Zx(t.appConfig):await tu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function GR(t){let e=await Yy(t.appConfig);for(;e.registrationStatus===1;)await Qx(100),e=await Yy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vp(t);return r||n}return e}function Yy(t){return zu(t,e=>{if(!e)throw Xr.create("installation-not-found");return eE(e)})}function eE(t){return KR(t)?{fid:t.fid,registrationStatus:0}:t}function KR(t){return t.registrationStatus===1&&t.registrationTime+Ux<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR({appConfig:t,heartbeatServiceProvider:e},n){const r=JR(t,n),s=NR(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:Bx,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await Kx(()=>fetch(r,l));if(u.ok){const d=await u.json();return Wx(d)}else throw await Hx("Generate Auth Token",u)}function JR(t,{fid:e}){return`${qx(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e=!1){let n;const r=await zu(t.appConfig,i=>{if(!tE(i))throw Xr.create("not-registered");const o=i.authToken;if(!e&&ZR(o))return i;if(o.requestStatus===1)return n=YR(t,e),i;{if(!navigator.onLine)throw Xr.create("app-offline");const l=tN(i);return n=XR(t,l),l}});return n?await n:r.authToken}async function YR(t,e){let n=await Xy(t.appConfig);for(;n.authToken.requestStatus===1;)await Qx(100),n=await Xy(t.appConfig);const r=n.authToken;return r.requestStatus===0?_p(t,e):r}function Xy(t){return zu(t,e=>{if(!tE(e))throw Xr.create("not-registered");const n=e.authToken;return nN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function XR(t,e){try{const n=await QR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await tu(t.appConfig,r),n}catch(n){if($x(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zx(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await tu(t.appConfig,r)}throw n}}function tE(t){return t!==void 0&&t.registrationStatus===2}function ZR(t){return t.requestStatus===2&&!eN(t)}function eN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+kR}function tN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nN(t){return t.requestStatus===1&&t.requestTime+Ux<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t){const e=t,{installationEntry:n,registrationPromise:r}=await vp(e);return r?r.catch(console.error):_p(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e=!1){const n=t;return await iN(n),(await _p(n,e)).token}async function iN(t){const{registrationPromise:e}=await vp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){if(!t||!t.options)throw ed("App Configuration");if(!t.name)throw ed("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ed(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ed(t){return Xr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="installations",aN="installations-internal",lN=t=>{const e=t.getProvider("app").getImmediate(),n=oN(e),r=rs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uN=t=>{const e=t.getProvider("app").getImmediate(),n=rs(e,nE).getImmediate();return{getId:()=>rN(n),getToken:s=>sN(n,s)}};function cN(){fn(new Zt(nE,lN,"PUBLIC")),fn(new Zt(aN,uN,"PRIVATE"))}cN();Ft(Fx,gp);Ft(Fx,gp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="analytics",dN="firebase_id",hN="origin",fN=60*1e3,pN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new wu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new ns("analytics","Analytics",mN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){if(!t.startsWith(wp)){const e=Ct.create("invalid-gtag-resource",{gtagURL:t});return xt.warn(e.message),""}return t}function rE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function yN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function vN(t,e){const n=yN("firebase-js-sdk-policy",{createScriptURL:gN}),r=document.createElement("script"),s=`${wp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function _N(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wN(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await rE(n)).find(d=>d.measurementId===s);u&&await e[u.appId]}}catch(l){xt.error(l)}t("config",s,i)}async function xN(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await rE(n);for(const u of o){const d=l.find(g=>g.measurementId===u),p=d&&e[d.appId];if(p)i.push(p);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){xt.error(i)}}function EN(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await xN(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await wN(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){xt.error(l)}}return s}function IN(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=EN(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function TN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=30,SN=1e3;class kN{constructor(e={},n=SN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sE=new kN;function CN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function bN(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:CN(r)},i=pN.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function RN(t,e=sE,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ct.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ct.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new jN;return setTimeout(async()=>{l.abort()},fN),iE({appId:r,apiKey:s,measurementId:i},o,l,e)}async function iE(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=sE){var i;const{appId:o,measurementId:l}=t;try{await NN(r,e)}catch(u){if(l)return xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await bN(t);return s.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!PN(d)){if(s.deleteThrottleMetadata(o),l)return xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const p=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?Vg(n,s.intervalMillis,AN):Vg(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return s.setThrottleMetadata(o,g),xt.debug(`Calling attemptFetch again in ${p} millis`),iE(t,g,r,s)}}function NN(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function PN(t){if(!(t instanceof tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function DN(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(){if(wf())try{await xf()}catch(t){return xt.warn(Ct.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return xt.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function VN(t,e,n,r,s,i,o){var l;const u=RN(t);u.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&xt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>xt.error(_)),e.push(u);const d=ON().then(_=>{if(_)return r.getId()}),[p,g]=await Promise.all([u,d]);TN(i)||vN(i,p.measurementId),s("js",new Date);const v=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return v[hN]="firebase",v.update=!0,g!=null&&(v[dN]=g),s("config",p.measurementId,v),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.app=e}_delete(){return delete co[this.app.options.appId],Promise.resolve()}}let co={},Zy=[];const ev={};let td="dataLayer",LN="gtag",tv,oE,nv=!1;function FN(){const t=[];if(_f()&&t.push("This is a browser extension environment."),b0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});xt.warn(n.message)}}function UN(t,e,n){FN();const r=t.options.appId;if(!r)throw Ct.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(co[r]!=null)throw Ct.create("already-exists",{id:r});if(!nv){_N(td);const{wrappedGtag:i,gtagCore:o}=IN(co,Zy,ev,td,LN);oE=i,tv=o,nv=!0}return co[r]=VN(t,Zy,ev,e,tv,td,n),new MN(t)}function BN(t=If()){t=De(t);const e=rs(t,nu);return e.isInitialized()?e.getImmediate():zN(t)}function zN(t,e={}){const n=rs(t,nu);if(n.isInitialized()){const s=n.getImmediate();if(Ro(e,n.getOptions()))return s;throw Ct.create("already-initialized")}return n.initialize({options:e})}async function $N(){if(_f()||!b0()||!wf())return!1;try{return await xf()}catch{return!1}}function qN(t,e,n,r){t=De(t),DN(oE,co[t.app.options.appId],e,n,r).catch(s=>xt.error(s))}const rv="@firebase/analytics",sv="0.10.8";function WN(){fn(new Zt(nu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return UN(r,s,n)},"PUBLIC")),fn(new Zt("analytics-internal",t,"PRIVATE")),Ft(rv,sv),Ft(rv,sv,"esm2017");function t(e){try{const n=e.getProvider(nu).getImmediate();return{logEvent:(r,s,i)=>qN(n,r,s,i)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}WN();const aE={apiKey:"AIzaSyDqvTW5rds0gwsHKsEvhMnyA-_qwxZTCy0",authDomain:"leokai001.firebaseapp.com",projectId:"leokai001",storageBucket:"leokai001.firebasestorage.app",messagingSenderId:"81897618557",appId:"1:81897618557:web:2b6f5744ed15dfb3b00514",measurementId:"G-2VBJXM6FF4",region:"asia-northeast3"},xp=j0(aE),js=xk(xp),je=uR(xp),Ep=new Tn;Ep.addScope("profile");Ep.addScope("email");$N().then(t=>{t&&BN(xp)}).catch(t=>{console.warn("Firebase Analytics not supported:",t)});aE.region;const HN=()=>{const t=js.currentUser;if(!t)throw new Error("User must be authenticated to perform this action");return t.uid},be={USERS:"jkai011_users",PROJECTS:"jkai011_projects",JOBS:"jkai011_jobs",USER_SHARED:"jkai011_user_shared",PLANS:"jkai011_plans",BASELINE_SNAPSHOTS:"jkai011_baseline_snapshots",DIRECTIONS:"jkai011_directions",ACTIONS:"jkai011_actions",FORECASTS:"jkai011_forecasts",REPORTS:"jkai011_reports",AUTOMATION_RULES:"jkai011_automation_rules",COST_LEDGER:"jkai011_cost_ledger"},Pt={QUERIES:"jkai011_queries",ANSWERS:"jkai011_answers",METRICS:"jkai011_metrics",CONTENTS:"jkai011_contents",PROBLEMS:"jkai011_problems"},GN=async(t,e,n,r)=>{const s=Et(je,be.USERS),i=cs(s,Dx("uid","==",t)),o=await wr(i),l=ue.now();if(o.empty)return(await ds(s,{uid:t,email:e,displayName:n||null,photoURL:r||null,createdAt:l,lastLoginAt:l})).id;{const u=o.docs[0];return await Uu(u.ref,{email:e,displayName:n||null,photoURL:r||null,lastLoginAt:l}),u.id}},lE=async(t,e)=>{const n=ue.now();return(await ds(Et(je,be.PROJECTS,t,Pt.QUERIES),{...e,projectId:t,createdAt:n,updatedAt:n})).id},KN=async(t,e)=>(await ds(Et(je,be.PROJECTS,t,Pt.ANSWERS),{...e,createdAt:ue.now()})).id,QN=async(t,e)=>(await ds(Et(je,be.PROJECTS,t,Pt.METRICS),{...e,createdAt:ue.now()})).id,iv=async(t,e)=>{const n=ue.now();return(await ds(Et(je,be.PROJECTS,t,Pt.CONTENTS),{...e,createdAt:n,updatedAt:n})).id},JN=async(t,e)=>{const n=ue.now();return(await ds(Et(je,be.PROJECTS,t,Pt.PROBLEMS),{...e,createdAt:n,updatedAt:n})).id},Eh=async t=>{const e=cs(Et(je,be.PROJECTS,t,Pt.PROBLEMS),oa("score","desc"));return(await wr(e)).docs.map(r=>({id:r.id,...r.data()}))},uE=async(t,e,n)=>{const r=us(je,be.PROJECTS,t,Pt.PROBLEMS,e);await Uu(r,{...n,updatedAt:ue.now()})},cE=async t=>{const e=ue.now();return(await ds(Et(je,be.JOBS),{...t,createdAt:e,updatedAt:e})).id},qs=async(t,e)=>{const n=us(je,be.JOBS,t);await Uu(n,{...e,updatedAt:ue.now()})},dE=async t=>{const e=us(je,be.PROJECTS,t),n=await mp(e);return n.exists()?{id:n.id,...n.data()}:null},hE=async(t,e)=>{const n=us(je,be.PROJECTS,t,Pt.QUERIES,e),r=await mp(n);return r.exists()?{id:r.id,...r.data()}:null},YN=async t=>{const e=cs(Et(je,be.PROJECTS,t,Pt.QUERIES),oa("createdAt","desc"));return(await wr(e)).docs.map(r=>({id:r.id,...r.data()}))},XN=async t=>{const e=cs(Et(je,be.PROJECTS,t,Pt.METRICS),oa("createdAt","desc"));return(await wr(e)).docs.map(r=>({id:r.id,...r.data()}))},ov=async t=>{const e=cs(Et(je,be.PROJECTS,t,Pt.ANSWERS),oa("createdAt","desc"));return(await wr(e)).docs.map(r=>({id:r.id,...r.data()}))},av=async t=>{const e=cs(Et(je,be.PROJECTS,t,Pt.CONTENTS),oa("createdAt","desc"));return(await wr(e)).docs.map(r=>({id:r.id,...r.data()}))},ZN=async()=>{const t=HN(),e=js.currentUser,n=cs(Et(je,be.PROJECTS),Dx("userId","==",t)),s=(await wr(n)).docs.map(u=>({id:u.id,...u.data()})),i=[];if(e!=null&&e.email)try{const u=Et(je,be.USER_SHARED,e.email,be.PROJECTS),d=await wr(u);for(const p of d.docs)try{const g=p.data().projectId,v=await mp(us(je,be.PROJECTS,g));v.exists()&&i.push({id:v.id,...v.data()})}catch{}}catch{}const o=[...s,...i];return Array.from(new Map(o.map(u=>[u.id,u])).values()).sort((u,d)=>d.createdAt.seconds-u.createdAt.seconds)},fE=W.createContext(void 0),Ip=()=>{const t=W.useContext(fE);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},eP=({children:t})=>{const[e,n]=W.useState(null),[r,s]=W.useState(!0);W.useEffect(()=>u2(js,async p=>{if(n(p),p&&p.email)try{await GN(p.uid,p.email,p.displayName||void 0,p.photoURL||void 0)}catch(g){console.error("Error saving user to database:",g)}s(!1)}),[]);const u={user:e,loading:r,signInWithGoogle:async()=>{try{await R2(js,Ep)}catch(d){throw console.error("Error signing in with Google:",d),d}},signInWithEmail:async(d,p)=>{try{await o2(js,d,p)}catch(g){throw console.error("Error signing in with email:",g),g}},signOut:async()=>{try{await c2(js)}catch(d){throw console.error("Error signing out:",d),d}}};return c.jsx(fE.Provider,{value:u,children:t})};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Z=(t,e)=>{const n=W.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...d},p)=>W.createElement("svg",{ref:p,...tP,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${nP(t)}`,l].join(" "),...d},[...e.map(([g,v])=>W.createElement(g,v)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=Z("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=Z("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=Z("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=Z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=Z("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=Z("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=Z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=Z("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=Z("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=Z("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=Z("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=Z("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=Z("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=Z("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=Z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=Z("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=Z("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=Z("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=Z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=Z("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=Z("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=Z("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=Z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=Z("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=Z("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=Z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=Z("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=Z("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=Z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=Z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=Z("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=Z("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=Z("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=Z("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=Z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=Z("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=Z("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),wP=!1,xP=()=>{const{signInWithGoogle:t,signInWithEmail:e}=Ip(),[n,r]=W.useState(!1),[s,i]=W.useState(null),o=async()=>{r(!0),i(null);try{await t()}catch(l){i("로그인에 실패했습니다. 다시 시도해주세요."),console.error("Login error:",l)}finally{r(!1)}};return c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4",children:c.jsxs("div",{className:"max-w-md w-full",children:[c.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[c.jsxs("div",{className:"flex flex-col items-center mb-8",children:[c.jsx("div",{className:"bg-blue-600 rounded-full p-4 mb-4",children:c.jsx(pE,{className:"w-12 h-12 text-white"})}),c.jsx("h1",{className:"text-3xl font-bold text-slate-900 mb-2",children:"GEO Insight"}),c.jsx("p",{className:"text-slate-600 text-center",children:"AI 기반 검색 답변 최적화 플랫폼"})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("button",{onClick:o,disabled:n,className:"w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-slate-700 font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:n?c.jsx("div",{className:"w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"}):c.jsxs(c.Fragment,{children:[c.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),c.jsx("span",{children:"Google로 로그인"})]})}),wP,s&&c.jsx("div",{className:"p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center",children:s})]}),c.jsx("div",{className:"mt-8 pt-6 border-t border-slate-200",children:c.jsxs("div",{className:"flex items-start gap-2 text-sm text-slate-600",children:[c.jsx(pP,{className:"w-4 h-4 mt-0.5 flex-shrink-0"}),c.jsx("p",{children:"로그인하여 검색 쿼리 분석, AI 답변 시뮬레이션, 콘텐츠 최적화 등 모든 기능을 이용하실 수 있습니다."})]})})]}),c.jsx("p",{className:"text-center text-slate-600 text-sm mt-6",children:"계속 진행하면 서비스 이용약관에 동의하는 것으로 간주됩니다."})]})})};function EP({currentPage:t,onNavigate:e,projectName:n,projectSub:r,problemCount:s,queryCount:i,actionCount:o,jobCount:l}){const u=[{page:"plan",label:"1. Plan",icon:c.jsx(vP,{size:16})},{page:"analysis",label:"2. Analysis",icon:c.jsx(iP,{size:16})},{page:"action",label:"3. Action",icon:c.jsx(zo,{size:16})},{page:"reporting",label:"4. Reporting",icon:c.jsx(yE,{size:16})}],d=[{page:"queries",label:"Queries",icon:c.jsx(_E,{size:16}),badge:i,badgeBlue:!1},{page:"ai-answers",label:"AI Answers",icon:c.jsx(mE,{size:16})},{page:"problems",label:"Problems",icon:c.jsx(sP,{size:16}),badge:s},{page:"actions",label:"Actions",icon:c.jsx(rP,{size:16}),badge:o,badgeBlue:!0},{page:"jobs",label:"Jobs",icon:c.jsx(Wu,{size:16}),badge:l,badgeBlue:!0},{page:"automation",label:"Automation",icon:c.jsx(wE,{size:16})}],p=g=>{const v=t===g.page;return c.jsxs("button",{onClick:()=>e(g.page),className:`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all relative mb-0.5 ${v?"bg-blue-500/10 text-blue-400 font-semibold":"text-[#9CA3AF] hover:bg-[#1F2937] hover:text-[#E5E7EB]"}`,children:[v&&c.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-blue-500 rounded-r"}),c.jsx("span",{className:"w-[18px] flex justify-center",children:g.icon}),c.jsx("span",{className:"flex-1 text-left",children:g.label}),g.badge!=null&&Number(g.badge)>0&&c.jsx("span",{className:`text-[10px] font-bold px-1.5 py-[1px] rounded-full min-w-[20px] text-center ${g.badgeBlue?"bg-blue-500/10 text-blue-400":"bg-red-500 text-white"}`,children:g.badge})]},g.page)};return c.jsxs("nav",{className:"w-60 bg-[#111827] border-r border-[#1F2937] flex flex-col h-screen fixed left-0 top-0 z-30",children:[c.jsxs("div",{className:"px-5 py-4 border-b border-[#1F2937] flex items-center gap-2.5",children:[c.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center",children:c.jsx(pE,{size:14,className:"text-white"})}),c.jsxs("div",{children:[c.jsx("span",{className:"text-base font-bold text-white",children:"GEO Insight"}),c.jsx("span",{className:"text-[11px] text-blue-400 font-medium ml-1.5",children:"v3"})]})]}),n&&c.jsxs("button",{className:"mx-2 mt-3 px-3 py-2.5 bg-[#1F2937] border border-[#374151] rounded-lg flex items-center justify-between hover:border-blue-500/40 transition-colors",children:[c.jsxs("div",{className:"text-left",children:[c.jsx("div",{className:"text-xs font-semibold text-white truncate max-w-[160px]",children:n}),r&&c.jsx("div",{className:"text-[10px] text-[#6B7280] mt-0.5",children:r})]}),c.jsx(la,{size:12,className:"text-[#6B7280]"})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto px-2 pt-4",children:[c.jsx("div",{className:"text-[10px] font-bold text-[#6B7280] tracking-[1.5px] uppercase px-3 mb-2",children:"Workflow"}),u.map(p),c.jsx("div",{className:"text-[10px] font-bold text-[#6B7280] tracking-[1.5px] uppercase px-3 mt-5 mb-2",children:"Data"}),d.map(p)]}),c.jsxs("button",{onClick:()=>e("onboarding"),className:"mx-2 mb-3 px-3 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-semibold hover:bg-blue-500/20 transition-colors flex items-center gap-2",children:[c.jsx(uP,{size:14}),"New Project"]})]})}const IP={blue:"bg-blue-500",green:"bg-emerald-500",orange:"bg-amber-500",red:"bg-red-500"};function IE({items:t}){return c.jsx("div",{className:"border-l-2 border-[#1F2937] pl-5 space-y-4",children:t.map((e,n)=>c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:`absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full ${IP[e.color??"blue"]}`}),c.jsx("div",{className:"text-[11px] text-[#6B7280] uppercase tracking-wide",children:e.label}),c.jsx("div",{className:"text-sm font-semibold text-white mt-0.5",children:e.title}),e.body&&c.jsx("div",{className:"text-xs text-[#6B7280] mt-0.5",children:e.body})]},n))})}const TP=[{label:"Clinic / Hospital",icon:"🏥"},{label:"Cafe / F&B",icon:"☕"},{label:"Law Firm",icon:"⚖️"},{label:"B2B SaaS",icon:"🏢"},{label:"Hotel",icon:"🏨"}];function uv({onComplete:t}){const[e,n]=W.useState(""),[r,s]=W.useState(!1),[i,o]=W.useState([]),[l,u]=W.useState(null),d=async()=>{if(!e.trim())return;s(!0),u(null);const p=[{label:"Step 1",title:"Crawling website & extracting brand info",body:"",color:"blue",done:!1},{label:"Step 2",title:"Classifying industry & target customers",body:"",color:"blue",done:!1},{label:"Step 3",title:"Scanning AI engines (5 engines)",body:"",color:"orange",done:!1},{label:"Step 4",title:"Generating recommended queries",body:"",color:"green",done:!1}];o([...p]);for(let g=0;g<p.length;g++)await new Promise(v=>setTimeout(v,800+Math.random()*600)),p[g].done=!0,g===0&&(p[g].body=`Domain: ${e.includes(".")?e:e+".com"}`),g===1&&(p[g].body="Digital Marketing / AI Platform - Seoul - SMB"),g===2&&(p[g].body="ChatGPT / Gemini / Perplexity / Naver AI / Claude"),g===3&&(p[g].body="30 queries generated"),o([...p]);u({industry:"Digital Marketing / AI Platform",region:"Seoul",target:"SMB / Mid-size Companies"}),await new Promise(g=>setTimeout(g,500)),t("demo-project-id")};return r?c.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",children:c.jsx("div",{className:"max-w-lg w-full animate-in",children:c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[l?c.jsx($u,{size:20,className:"text-emerald-400"}):c.jsx(Bo,{size:20,className:"text-blue-400 animate-spin"}),c.jsx("h2",{className:"text-base font-bold text-white",children:l?"Profile Complete":`Analyzing ${e}...`})]}),c.jsx(IE,{items:i.map(p=>({label:p.done?"Done":"Processing...",title:p.title,body:p.body,color:p.done?"green":"blue"}))}),l&&c.jsxs("div",{className:"mt-5 grid grid-cols-3 gap-3",children:[c.jsxs("div",{className:"bg-[#1F2937] rounded-lg p-3",children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-[#6B7280] mb-1",children:[c.jsx(lP,{size:11})," Industry"]}),c.jsx("div",{className:"text-xs font-semibold text-white",children:l.industry})]}),c.jsxs("div",{className:"bg-[#1F2937] rounded-lg p-3",children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-[#6B7280] mb-1",children:[c.jsx(vE,{size:11})," Region"]}),c.jsx("div",{className:"text-xs font-semibold text-white",children:l.region})]}),c.jsxs("div",{className:"bg-[#1F2937] rounded-lg p-3",children:[c.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-[#6B7280] mb-1",children:[c.jsx(EE,{size:11})," Target"]}),c.jsx("div",{className:"text-xs font-semibold text-white",children:l.target})]})]})]})})}):c.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",children:c.jsxs("div",{className:"max-w-xl w-full text-center animate-in",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-[11px] font-semibold px-3 py-1 rounded-full mb-6",children:[c.jsx(hP,{size:12})," GEO Insight v3"]}),c.jsxs("h1",{className:"text-3xl font-extrabold text-white mb-3 leading-tight",children:["Is your brand showing up",c.jsx("br",{}),"in AI search results?"]}),c.jsx("p",{className:"text-[#9CA3AF] text-sm mb-8",children:"Enter your brand name or website URL -- we handle analysis through execution."}),c.jsxs("div",{className:"max-w-[520px] mx-auto flex gap-2 bg-[#111827] p-1.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[#1F2937]",children:[c.jsx("input",{type:"text",value:e,onChange:p=>n(p.target.value),onKeyDown:p=>p.key==="Enter"&&d(),placeholder:"e.g. iting.co.kr or Brand Name",className:"flex-1 bg-transparent text-white text-[15px] px-4 py-3 outline-none placeholder:text-[#6B7280]"}),c.jsxs("button",{onClick:d,disabled:!e.trim(),className:"px-5 py-2.5 bg-blue-500 hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5",children:["Start ",c.jsx(aa,{size:14})]})]}),c.jsx("div",{className:"flex gap-2 justify-center flex-wrap mt-5",children:TP.map((p,g)=>c.jsxs("button",{onClick:()=>n(p.label),className:"bg-[#111827] border border-[#1F2937] px-3 py-1.5 rounded-full text-xs text-[#9CA3AF] hover:border-blue-500/40 hover:text-blue-300 transition-colors",children:[p.icon," ",p.label]},g))})]})})}function Ue({title:t,subtitle:e,actions:n}){return c.jsxs("div",{className:"h-14 border-b border-[#1F2937] flex items-center px-6 gap-4 shrink-0 bg-[#0B0F1A]",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h1",{className:"text-lg font-bold text-white",children:t}),e&&c.jsx("div",{className:"text-xs text-[#6B7280]",children:e})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[n,c.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-lg bg-[#1F2937] border border-[#374151] text-[#9CA3AF] hover:text-blue-400 hover:border-blue-500/40 transition-colors",children:c.jsx(_E,{size:14})}),c.jsx("button",{className:"w-8 h-8 flex items-center justify-center rounded-lg bg-[#1F2937] border border-[#374151] text-[#9CA3AF] hover:text-blue-400 hover:border-blue-500/40 transition-colors",children:c.jsx(oP,{size:14})})]})]})}const AP={high:"bg-red-500/10 text-red-300",medium:"bg-amber-500/10 text-amber-300",low:"bg-emerald-500/10 text-emerald-300",ai:"bg-blue-500/10 text-blue-300",human:"bg-amber-500/10 text-amber-300",done:"bg-emerald-500/10 text-emerald-300",running:"bg-blue-500/10 text-blue-300",pending:"bg-gray-500/15 text-[#6B7280]",essential:"bg-red-500/10 text-red-300",recommended:"bg-amber-500/10 text-amber-300",optional:"bg-blue-500/10 text-blue-300",auto:"bg-blue-500/10 text-blue-300",semi_auto:"bg-amber-500/10 text-amber-300",consult:"bg-pink-500/10 text-pink-300"};function ke({variant:t,children:e}){return c.jsx("span",{className:`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-semibold ${AP[t]}`,children:e})}const SP={blue:"bg-blue-500",green:"bg-emerald-500",orange:"bg-amber-500",red:"bg-red-500",cyan:"bg-cyan-500"};function Ap({items:t,maxValue:e}){const n=e??Math.max(...t.map(r=>r.value),1);return c.jsx("div",{className:"space-y-1.5",children:t.map((r,s)=>c.jsxs("div",{className:"flex items-center text-[11px]",children:[c.jsx("div",{className:"w-[90px] text-[#9CA3AF] shrink-0",children:r.label}),c.jsx("div",{className:"flex-1 bg-[#1F2937] h-3.5 rounded-sm overflow-hidden",children:c.jsx("div",{className:`h-full ${SP[r.color??"blue"]} rounded-sm`,style:{width:`${r.value/n*100}%`}})}),c.jsxs("div",{className:"w-11 text-right font-semibold text-white",children:[r.value,"%"]})]},s))})}const nd={industry:"Digital Marketing / AI Platform",region:"Seoul",target:"SMB / Mid-size Companies"},kP=[{id:"1",text:"GEO Agency Recommendation",volume:"2.4K",coverage:"National",cost:68e3,priority:"essential",selected:!0},{id:"2",text:"AI Search Optimization Service",volume:"1.1K",coverage:"National",cost:54e3,priority:"essential",selected:!0},{id:"3",text:"SMB Digital Ad Agency",volume:"8.2K",coverage:"Seoul",cost:92e3,priority:"recommended",selected:!0},{id:"4",text:"Small Business Marketing Platform",volume:"1.8K",coverage:"National",cost:48e3,priority:"recommended",selected:!0},{id:"5",text:"Seoul Digital Ad Agency",volume:"15K",coverage:"Seoul Metro",cost:184e3,priority:"optional",selected:!1}];function CP({onStartAnalysis:t}){const[e,n]=W.useState(kP),[r,s]=W.useState(35),[i,o]=W.useState(12),[l,u]=W.useState(5e5),d=e.filter(_=>_.selected),p=d.reduce((_,C)=>_+C.cost,0),g=_=>{n(C=>C.map(N=>N.id===_?{...N,selected:!N.selected}:N))},v=[{label:"Week 1-4",value:14,color:"orange"},{label:"Week 5-8",value:26,color:"blue"},{label:"Week 9-12",value:37,color:"green"}];return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Plan",subtitle:"Set queries, budget, and goals"}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium",children:"Brand Profile (auto-extracted, editable)"}),c.jsxs("button",{className:"text-[11px] text-blue-400 flex items-center gap-1 hover:text-blue-300",children:[c.jsx(cP,{size:11})," Edit"]})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] text-[#6B7280] uppercase tracking-wide",children:"Industry"}),c.jsx("div",{className:"text-sm font-semibold text-white mt-0.5",children:nd.industry})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] text-[#6B7280] uppercase tracking-wide",children:"Region"}),c.jsx("div",{className:"text-sm font-semibold text-white mt-0.5",children:nd.region})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] text-[#6B7280] uppercase tracking-wide",children:"Target"}),c.jsx("div",{className:"text-sm font-semibold text-white mt-0.5",children:nd.target})]})]})]}),c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-3",children:"Recommended Queries & Cost Estimator"}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-[13px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"text-[11px] text-[#6B7280] uppercase tracking-wide border-b border-[#1F2937]",children:[c.jsx("th",{className:"text-left py-2 px-3",children:"Priority"}),c.jsx("th",{className:"text-left py-2 px-3",children:"Query"}),c.jsx("th",{className:"text-left py-2 px-3",children:"Volume"}),c.jsx("th",{className:"text-left py-2 px-3",children:"Coverage"}),c.jsx("th",{className:"text-right py-2 px-3",children:"Monthly Cost"}),c.jsx("th",{className:"text-center py-2 px-3",children:"Select"})]})}),c.jsx("tbody",{children:e.map(_=>c.jsxs("tr",{className:"border-b border-[#1F2937]/50 hover:bg-white/[0.02]",children:[c.jsx("td",{className:"py-3 px-3",children:c.jsx(ke,{variant:_.priority,children:_.priority==="essential"?"Essential":_.priority==="recommended"?"Recommended":"Optional"})}),c.jsx("td",{className:"py-3 px-3 font-medium text-white",children:_.text}),c.jsx("td",{className:"py-3 px-3 text-[#9CA3AF]",children:_.volume}),c.jsx("td",{className:"py-3 px-3 text-[#9CA3AF]",children:_.coverage}),c.jsxs("td",{className:"py-3 px-3 text-right text-amber-400 font-medium",children:[(_.cost/1e3).toFixed(0),"K KRW"]}),c.jsx("td",{className:"py-3 px-3 text-center",children:c.jsx("button",{onClick:()=>g(_.id),className:`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${_.selected?"bg-blue-500 border-blue-500 text-white":"border-[#374151] text-transparent"}`,children:_.selected&&c.jsx("span",{className:"text-xs",children:"✓"})})})]},_.id))})]})}),c.jsxs("div",{className:"mt-4 bg-[#1F2937]/50 border-l-3 border-l-amber-500 rounded-lg p-3 text-[12px] text-[#9CA3AF]",children:[c.jsx("strong",{className:"text-white",children:d.length})," queries selected -- Monthly ",c.jsxs("strong",{className:"text-amber-400",children:[(p/1e3).toFixed(0),"K KRW"]})," / Budget ",(l/1e3).toFixed(0),"K KRW -- Coverage ",c.jsxs("strong",{className:"text-white",children:[d.length>3?"72":Math.round(d.length/e.length*100),"%"]})]})]}),c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-4",children:"Goal Setting & Forecast Preview"}),c.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-5",children:[c.jsxs("div",{className:"bg-[#1F2937] rounded-lg p-3",children:[c.jsx("label",{className:"text-[10px] text-[#6B7280] uppercase tracking-wide block mb-1",children:"Target Mention Rate"}),c.jsxs("div",{className:"flex items-baseline gap-2",children:[c.jsx("input",{type:"number",value:r,onChange:_=>s(Number(_.target.value)),className:"w-16 bg-transparent text-xl font-bold text-white outline-none"}),c.jsx("span",{className:"text-[#6B7280] text-sm",children:"%"})]}),c.jsx("div",{className:"text-[10px] text-[#6B7280] mt-1",children:"Current: 8%"})]}),c.jsxs("div",{className:"bg-[#1F2937] rounded-lg p-3",children:[c.jsx("label",{className:"text-[10px] text-[#6B7280] uppercase tracking-wide block mb-1",children:"Period"}),c.jsxs("div",{className:"flex items-baseline gap-2",children:[c.jsx("input",{type:"number",value:i,onChange:_=>o(Number(_.target.value)),className:"w-16 bg-transparent text-xl font-bold text-white outline-none"}),c.jsx("span",{className:"text-[#6B7280] text-sm",children:"weeks"})]}),c.jsx("div",{className:"text-[10px] text-[#6B7280] mt-1",children:"Apr ~ Jul 2026"})]}),c.jsxs("div",{className:"bg-[#1F2937] rounded-lg p-3",children:[c.jsx("label",{className:"text-[10px] text-[#6B7280] uppercase tracking-wide block mb-1",children:"Monthly Budget"}),c.jsxs("div",{className:"flex items-baseline gap-2",children:[c.jsx("input",{type:"number",value:l/1e3,onChange:_=>u(Number(_.target.value)*1e3),className:"w-20 bg-transparent text-xl font-bold text-white outline-none"}),c.jsx("span",{className:"text-[#6B7280] text-sm",children:"K KRW"})]}),c.jsx("div",{className:"text-[10px] text-[#6B7280] mt-1",children:"Content + Indexing"})]})]}),c.jsxs("div",{className:"text-[10px] text-[#6B7280] mb-2 flex items-center gap-1",children:[c.jsx(xE,{size:11})," Forecast (based on 3 similar cases)"]}),c.jsx(Ap,{items:v,maxValue:50})]}),c.jsxs("div",{className:"flex justify-end gap-3 pb-4",children:[c.jsx("button",{className:"px-4 py-2 bg-transparent border border-[#374151] text-[#9CA3AF] text-xs font-semibold rounded-lg hover:border-[#6B7280] transition-colors",children:"Save Draft"}),c.jsxs("button",{onClick:t,className:"px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5",children:["Start Analysis ",c.jsx(aa,{size:14})]})]})]})]})}const bP={blue:{border:"border-t-blue-500",bar:"bg-blue-500"},green:{border:"border-t-emerald-500",bar:"bg-emerald-500"},orange:{border:"border-t-amber-500",bar:"bg-amber-500"},red:{border:"border-t-red-500",bar:"bg-red-500"},cyan:{border:"border-t-cyan-500",bar:"bg-cyan-500"}};function Mt({label:t,value:e,change:n,changeDirection:r="neutral",color:s="blue",miniChart:i}){const o=bP[s];return c.jsxs("div",{className:`bg-[#111827] border border-[#1F2937] ${o.border} border-t-[3px] rounded-xl p-4 relative overflow-hidden`,children:[c.jsx("div",{className:"text-[11px] text-[#6B7280] font-medium mb-1.5",children:t}),c.jsx("div",{className:"text-[26px] font-extrabold text-white leading-none",children:e}),n&&c.jsx("div",{className:`text-[11px] font-semibold mt-1.5 ${r==="up"?"text-emerald-400":r==="down"?"text-red-400":"text-[#9CA3AF]"}`,children:n}),i&&i.length>0&&c.jsx("div",{className:"flex items-end gap-[3px] mt-2.5 h-[50px]",children:i.map((l,u)=>c.jsx("div",{className:`flex-1 ${o.bar} rounded-t-sm opacity-60 hover:opacity-100 transition-opacity`,style:{height:`${l}%`}},u))})]})}const RP=[{id:"1",severity:"high",title:"Naver AI entity not registered (company name ↔ domain not linked)",queries:"4/4",layer:"Technical"},{id:"2",severity:"high",title:'"SMB Ad Agency" query shows only competitors',queries:"1/4",layer:"Content"},{id:"3",severity:"medium",title:"Trust signal deficit (external citations: 13 vs competitor avg: 47)",queries:"All",layer:"Trust"},{id:"4",severity:"medium",title:"No Q&A format content -- hard for AI to cite",queries:"3/4",layer:"Content"},{id:"5",severity:"low",title:"Missing Schema.org markup (Organization, FAQPage)",queries:"All",layer:"Technical"}];function NP({onGoToAction:t}){return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Analysis",subtitle:"Baseline snapshot & problem discovery"}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[c.jsxs("div",{className:"grid grid-cols-4 gap-3 animate-in",children:[c.jsx(Mt,{label:"Mention Rate",value:"8%",change:"Baseline",color:"blue"}),c.jsx(Mt,{label:"AI Share of Voice",value:"2.1%",change:"vs competitors",color:"green"}),c.jsx(Mt,{label:"Sentiment",value:"+0.3",change:"Neutral bias",color:"orange"}),c.jsx(Mt,{label:"Problems Found",value:"7",change:"High 2 / Med 3 / Low 2",color:"red"})]}),c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-3",children:"AI Engine Visibility"}),c.jsx(Ap,{items:[{label:"ChatGPT",value:12,color:"blue"},{label:"Gemini",value:6,color:"blue"},{label:"Perplexity",value:18,color:"blue"},{label:"Naver AI",value:3,color:"orange"},{label:"Claude",value:9,color:"blue"}],maxValue:30})]}),c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-3",children:"Discovered Problems (by priority)"}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-[13px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"text-[11px] text-[#6B7280] uppercase tracking-wide border-b border-[#1F2937]",children:[c.jsx("th",{className:"text-left py-2 px-3",children:"Priority"}),c.jsx("th",{className:"text-left py-2 px-3",children:"Problem"}),c.jsx("th",{className:"text-left py-2 px-3",children:"Affected Queries"}),c.jsx("th",{className:"text-left py-2 px-3",children:"Layer"}),c.jsx("th",{className:"text-right py-2 px-3"})]})}),c.jsx("tbody",{children:RP.map(e=>c.jsxs("tr",{className:"border-b border-[#1F2937]/50 hover:bg-white/[0.02]",children:[c.jsx("td",{className:"py-3 px-3",children:c.jsx(ke,{variant:e.severity,children:e.severity.charAt(0).toUpperCase()+e.severity.slice(1)})}),c.jsx("td",{className:"py-3 px-3 text-white font-medium",children:e.title}),c.jsx("td",{className:"py-3 px-3 text-[#9CA3AF]",children:e.queries}),c.jsx("td",{className:"py-3 px-3 text-[#9CA3AF]",children:e.layer}),c.jsx("td",{className:"py-3 px-3 text-right",children:c.jsx("button",{onClick:t,className:"text-blue-400 hover:text-blue-300 text-xs font-medium",children:"Solve →"})})]},e.id))})]})})]}),c.jsxs("div",{className:"bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 text-xs text-blue-300 animate-in",children:[c.jsx("strong",{className:"text-blue-200",children:"Direction Note:"}),' The "competitors-only" problem may require repositioning strategy. This will proceed in ',c.jsx(ke,{variant:"consult",children:"Consult"})," mode during the Action phase."]}),c.jsx("div",{className:"flex justify-end pb-4",children:c.jsxs("button",{onClick:t,className:"px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5",children:["Go to Action ",c.jsx(aa,{size:14})]})})]})]})}const PP={blue:"bg-blue-500",green:"bg-emerald-500",orange:"bg-amber-500",red:"bg-red-500"};function TE({value:t,color:e="blue"}){return c.jsx("div",{className:"h-1.5 bg-[#1F2937] rounded-full overflow-hidden",children:c.jsx("div",{className:`h-full rounded-full transition-all duration-300 ${PP[e]}`,style:{width:`${Math.min(100,Math.max(0,t))}%`}})})}const ys={severity:"high",title:"Naver AI entity not registered (company name <> domain not linked)",layer:"Technical",affectedQueries:"4/4"},jP=[{type:"auto",label:"Auto",icon:c.jsx(zo,{size:20}),title:"Full Automation",description:"AI handles everything. Schema deployment, IndexNow ping, structured data injection.",actions:["Deploy Schema.org markup","Submit IndexNow request","Generate entity linking content"],duration:"~2 hours",color:"text-blue-400 bg-blue-500/10 border-blue-500/20",iconColor:"text-blue-400"},{type:"semi_auto",label:"Semi-Auto",icon:c.jsx(mE,{size:20}),title:"AI Draft + Human Review",description:"AI creates drafts & recommendations. You review and approve before execution.",actions:["Draft entity registration guide","Prepare Q&A content (review needed)","Suggest external citation targets"],duration:"~1 day",color:"text-amber-400 bg-amber-500/10 border-amber-500/20",iconColor:"text-amber-400"},{type:"consult",label:"Consult",icon:c.jsx(EE,{size:20}),title:"Expert Consultation",description:"Complex strategy change needed. AI provides analysis, expert guides execution.",actions:["Brand repositioning analysis","Competitive landscape report","Strategy recommendation brief"],duration:"~1 week",color:"text-pink-400 bg-pink-500/10 border-pink-500/20",iconColor:"text-pink-400"}],DP=[{id:"1",title:"Deploy Schema.org Organization markup",type:"technical",mode:"ai",effect:"+3% entity recognition",status:"completed"},{id:"2",title:'Generate Q&A content for "GEO Agency"',type:"content",mode:"ai",effect:"+5% mention rate on target query",status:"running"},{id:"3",title:"Submit IndexNow for updated pages",type:"technical",mode:"ai",effect:"Faster re-indexing (~24h)",status:"pending"},{id:"4",title:"Create comparison article (vs competitors)",type:"content",mode:"hybrid",effect:"+2% AI SoV",status:"pending"}],cv=[{id:"1",type:"Schema Deployment",progress:100,status:"completed"},{id:"2",type:"Q&A Content Generation",progress:67,status:"running"}];function OP({onGoToReport:t}){const[e,n]=W.useState("auto"),[r,s]=W.useState(!1),i=()=>{s(!0),setTimeout(()=>s(!1),1500)};return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Action",subtitle:"Solve problems with AI-powered actions"}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-3",children:"Selected Problem"}),c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx(ke,{variant:ys.severity,children:ys.severity.charAt(0).toUpperCase()+ys.severity.slice(1)}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"text-sm font-semibold text-white",children:ys.title}),c.jsxs("div",{className:"text-xs text-[#6B7280] mt-1",children:["Layer: ",ys.layer," -- Affected queries: ",ys.affectedQueries]})]})]})]}),c.jsxs("div",{className:"animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-3",children:"Choose Direction"}),c.jsx("div",{className:"grid grid-cols-3 gap-3",children:jP.map(o=>{const l=e===o.type;return c.jsxs("button",{onClick:()=>n(o.type),className:`text-left p-4 rounded-xl border-2 transition-all ${l?`${o.color} ring-1 ring-current`:"bg-[#111827] border-[#1F2937] hover:border-[#374151]"}`,children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[c.jsx("span",{className:l?o.iconColor:"text-[#6B7280]",children:o.icon}),c.jsx(ke,{variant:o.type,children:o.label})]}),c.jsx("div",{className:`text-sm font-semibold mb-1 ${l?"text-white":"text-[#9CA3AF]"}`,children:o.title}),c.jsx("div",{className:"text-xs text-[#6B7280] mb-3",children:o.description}),c.jsx("div",{className:"space-y-1",children:o.actions.map((u,d)=>c.jsxs("div",{className:"text-[11px] text-[#9CA3AF] flex items-center gap-1.5",children:[c.jsx("span",{className:"w-1 h-1 rounded-full bg-[#374151] shrink-0"}),u]},d))}),c.jsxs("div",{className:"mt-3 text-[10px] text-[#6B7280]",children:["Est. duration: ",o.duration]})]},o.type)})})]}),e&&c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium",children:"Recommended Actions"}),c.jsxs("button",{onClick:i,disabled:r,className:"px-4 py-1.5 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5",children:[r?c.jsx(Bo,{size:12,className:"animate-spin"}):c.jsx(Ih,{size:12}),"Execute All"]})]}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-[13px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"text-[11px] text-[#6B7280] uppercase tracking-wide border-b border-[#1F2937]",children:[c.jsx("th",{className:"text-left py-2 px-3",children:"Action"}),c.jsx("th",{className:"text-left py-2 px-3",children:"Type"}),c.jsx("th",{className:"text-left py-2 px-3",children:"Mode"}),c.jsx("th",{className:"text-left py-2 px-3",children:"Expected Effect"}),c.jsx("th",{className:"text-center py-2 px-3",children:"Status"})]})}),c.jsx("tbody",{children:DP.map(o=>c.jsxs("tr",{className:"border-b border-[#1F2937]/50 hover:bg-white/[0.02]",children:[c.jsx("td",{className:"py-3 px-3 text-white font-medium",children:o.title}),c.jsx("td",{className:"py-3 px-3",children:c.jsx(ke,{variant:o.type==="technical"?"auto":"semi_auto",children:o.type})}),c.jsx("td",{className:"py-3 px-3",children:c.jsx(ke,{variant:o.mode==="ai"?"ai":"human",children:o.mode==="ai"?"AI":"Hybrid"})}),c.jsx("td",{className:"py-3 px-3 text-[#9CA3AF] text-xs",children:o.effect}),c.jsxs("td",{className:"py-3 px-3 text-center",children:[o.status==="completed"&&c.jsx(ke,{variant:"done",children:"Done"}),o.status==="running"&&c.jsx(ke,{variant:"running",children:"Running"}),o.status==="pending"&&c.jsx(ke,{variant:"pending",children:"Pending"})]})]},o.id))})]})})]}),cv.length>0&&c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-3",children:"Running Jobs"}),c.jsx("div",{className:"space-y-3",children:cv.map(o=>c.jsxs("div",{className:"flex items-center gap-3",children:[o.status==="completed"?c.jsx($u,{size:16,className:"text-emerald-400 shrink-0"}):o.status==="running"?c.jsx(Bo,{size:16,className:"text-blue-400 animate-spin shrink-0"}):c.jsx(Wu,{size:16,className:"text-[#6B7280] shrink-0"}),c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"flex items-center justify-between mb-1",children:[c.jsx("span",{className:"text-xs font-medium text-white",children:o.type}),c.jsxs("span",{className:"text-[11px] text-[#6B7280]",children:[o.progress,"%"]})]}),c.jsx(TE,{value:o.progress,color:o.status==="completed"?"green":"blue"})]})]},o.id))})]}),c.jsx("div",{className:"flex justify-end pb-4",children:c.jsxs("button",{onClick:t,className:"px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5",children:["Go to Reporting ",c.jsx(aa,{size:14})]})})]})]})}const Wt={mentionRate:{before:8,after:23},aiSov:{before:2.1,after:8.7},sentiment:{before:.3,after:.7},problemsResolved:{resolved:5,total:7}},rd=[{label:"Week 1-4",forecast:14,actual:12},{label:"Week 5-8",forecast:26,actual:28},{label:"Week 9-12",forecast:37,actual:23}],VP=[{label:"Week 1",title:"Schema.org markup deployed",body:"Organization + FAQPage structured data added to 12 pages",color:"green"},{label:"Week 2",title:"Entity registration detected by ChatGPT",body:"Brand name now linked to domain in ChatGPT responses",color:"green"},{label:"Week 4",title:"Q&A content published (8 articles)",body:"Mention rate increased from 8% to 15%",color:"blue"},{label:"Week 6",title:"Perplexity citation achieved",body:"First organic citation in Perplexity AI answers",color:"blue"},{label:"Week 8",title:"Naver AI entity recognized",body:"Brand now appears in Naver AI search results",color:"green"},{label:"Week 12",title:"Loop 1 completed",body:"Target partially achieved (23% vs 35% target)",color:"orange"}],MP=["Increase external citations (current: 28, target: 50+)",'Create comparison content for "SMB Ad Agency" query cluster',"Target Claude and Gemini engines specifically (lowest visibility)","Consider brand repositioning strategy (Consult mode recommended)"];function LP({onStartNewLoop:t}){const e=Math.round(rd.reduce((n,r)=>n+(1-Math.abs(r.forecast-r.actual)/r.forecast),0)/rd.length*100);return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Reporting",subtitle:"Loop 1 results and next steps"}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[c.jsxs("div",{className:"animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-3",children:"Before / After Comparison"}),c.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[c.jsx(Mt,{label:"Mention Rate",value:`${Wt.mentionRate.after}%`,change:`${Wt.mentionRate.before}% -> ${Wt.mentionRate.after}%`,changeDirection:"up",color:"blue"}),c.jsx(Mt,{label:"AI Share of Voice",value:`${Wt.aiSov.after}%`,change:`${Wt.aiSov.before}% -> ${Wt.aiSov.after}%`,changeDirection:"up",color:"green"}),c.jsx(Mt,{label:"Sentiment Score",value:`+${Wt.sentiment.after}`,change:`+${Wt.sentiment.before} -> +${Wt.sentiment.after}`,changeDirection:"up",color:"orange"}),c.jsx(Mt,{label:"Problems Resolved",value:`${Wt.problemsResolved.resolved}/${Wt.problemsResolved.total}`,change:"71% resolution rate",changeDirection:"up",color:"cyan"})]})]}),c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium",children:"Forecast vs Actual"}),c.jsxs("span",{className:"text-[11px] text-[#6B7280]",children:["Accuracy: ",c.jsxs("strong",{className:e>=80?"text-emerald-400":"text-amber-400",children:[e,"%"]})]})]}),c.jsx("div",{className:"space-y-3",children:rd.map((n,r)=>c.jsxs("div",{children:[c.jsx("div",{className:"text-[11px] text-[#6B7280] mb-1.5",children:n.label}),c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center text-[11px]",children:[c.jsx("div",{className:"w-[70px] text-[#6B7280] shrink-0",children:"Forecast"}),c.jsx("div",{className:"flex-1 bg-[#1F2937] h-3 rounded-sm overflow-hidden",children:c.jsx("div",{className:"h-full bg-blue-500/40 rounded-sm",style:{width:`${n.forecast/50*100}%`}})}),c.jsxs("div",{className:"w-10 text-right font-semibold text-blue-300",children:[n.forecast,"%"]})]}),c.jsxs("div",{className:"flex items-center text-[11px]",children:[c.jsx("div",{className:"w-[70px] text-[#6B7280] shrink-0",children:"Actual"}),c.jsx("div",{className:"flex-1 bg-[#1F2937] h-3 rounded-sm overflow-hidden",children:c.jsx("div",{className:`h-full rounded-sm ${n.actual>=n.forecast?"bg-emerald-500":"bg-amber-500"}`,style:{width:`${n.actual/50*100}%`}})}),c.jsx("div",{className:"w-10 text-right font-semibold flex items-center justify-end gap-1",children:n.actual>=n.forecast?c.jsxs(c.Fragment,{children:[c.jsx(xE,{size:10,className:"text-emerald-400"}),c.jsxs("span",{className:"text-emerald-400",children:[n.actual,"%"]})]}):c.jsxs(c.Fragment,{children:[c.jsx(_P,{size:10,className:"text-amber-400"}),c.jsxs("span",{className:"text-amber-400",children:[n.actual,"%"]})]})})]})]})]},r))})]}),c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-3",children:"Engine Visibility (After)"}),c.jsx(Ap,{items:[{label:"ChatGPT",value:28,color:"green"},{label:"Gemini",value:12,color:"blue"},{label:"Perplexity",value:32,color:"green"},{label:"Naver AI",value:18,color:"green"},{label:"Claude",value:14,color:"blue"}],maxValue:40})]}),c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-4",children:"Activity Timeline"}),c.jsx(IE,{items:VP})]}),c.jsxs("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl p-5 animate-in",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[c.jsx(gP,{size:14,className:"text-blue-400"}),c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium",children:"Next Loop Recommendations"})]}),c.jsx("div",{className:"space-y-2",children:MP.map((n,r)=>c.jsxs("div",{className:"flex items-start gap-2 text-xs text-[#9CA3AF]",children:[c.jsxs("span",{className:"text-blue-400 font-bold mt-0.5",children:[r+1,"."]}),c.jsx("span",{children:n})]},r))})]}),c.jsxs("div",{className:"flex justify-end gap-3 pb-4",children:[c.jsx("button",{className:"px-4 py-2 bg-transparent border border-[#374151] text-[#9CA3AF] text-xs font-semibold rounded-lg hover:border-[#6B7280] transition-colors",children:"Export PDF"}),c.jsxs("button",{onClick:t,className:"px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5",children:["Start Loop 2 ",c.jsx(aa,{size:14})]})]})]})]})}const AE=W.createContext(null);function FP({children:t}){const{user:e}=Ip(),[n,r]=W.useState([]),[s,i]=W.useState(null),[o,l]=W.useState(!0),u=async()=>{if(!e){r([]),l(!1);return}try{l(!0);const p=await ZN(),g=await Promise.all(p.map(async v=>{const[_,C]=await Promise.all([XN(v.id).catch(N=>(console.error(`[jkai011_projects/${v.id}/jkai011_metrics] permission error:`,N),[])),YN(v.id).catch(N=>(console.error(`[jkai011_projects/${v.id}/jkai011_queries] permission error:`,N),[]))]);return{project:v,metrics:_,queries:C}}));r(g),i(v=>v&&g.find(_=>_.project.id===v)?v:g.length>0?g[0].project.id:null)}catch(p){console.error("Error loading projects [jkai011_projects]:",p)}finally{l(!1)}};W.useEffect(()=>{u()},[e]);const d=n.find(p=>p.project.id===s);return c.jsx(AE.Provider,{value:{projects:n,selectedProjectId:s,selectedProject:d,setSelectedProjectId:i,loading:o,reload:u},children:t})}function Hu(){const t=W.useContext(AE);if(!t)throw new Error("useProject must be used within ProjectProvider");return t}const UP=()=>{throw new Error("OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your environment variables.")},mi=async(t,e)=>{var n,r;try{const s=UP(),i=[];return e&&i.push({role:"system",content:e}),i.push({role:"user",content:t}),((r=(n=(await s.chat.completions.create({model:"gpt-4o-mini",messages:i,temperature:.7,max_tokens:2e3})).choices[0])==null?void 0:n.message)==null?void 0:r.content)||""}catch(s){throw console.error("OpenAI API Error:",s),new Error(`Failed to get response from OpenAI: ${s}`)}},BP=async t=>{const e=`다음 키워드와 관련된 검색 질문 30개를 생성해주세요: "${t}"

요구사항:
- 실제 사용자가 검색할 법한 자연스러운 질문
- 다양한 검색 의도 포함 (정보 탐색, 비교, 추천 등)
- 지역 기반 질문 포함
- 각 질문은 한 줄로 작성
- 번호나 불릿 없이 질문만 작성

예시 형식:
${t} 추천
${t} 가격 비교
근처 ${t} 어디가 좋을까요`;return(await mi(e)).split(`
`).map(s=>s.trim()).filter(s=>s.length>0).slice(0,30)},zP=async t=>await mi(t,"당신은 사용자의 질문에 정확하고 유용한 답변을 제공하는 AI 어시스턴트입니다."),$P=async(t,e,n)=>{let r="";switch(n){case"qa":r=`다음 질문에 대한 상세한 Q&A 콘텐츠를 작성해주세요.
질문: ${t}
브랜드: ${e}

요구사항:
- 질문에 대한 명확한 답변
- ${e}를 자연스럽게 언급
- 실용적이고 유용한 정보 제공
- 블로그 포스트 형식`;break;case"list":r=`다음 주제에 대한 추천 리스트 콘텐츠를 작성해주세요.
주제: ${t}
포함 브랜드: ${e}

요구사항:
- 5-7개의 추천 항목 리스트
- ${e}를 상위권에 포함
- 각 항목에 대한 간단한 설명
- 객관적이고 신뢰할 수 있는 톤`;break;case"compare":r=`다음 주제에 대한 비교 콘텐츠를 작성해주세요.
주제: ${t}
비교 대상: ${e} 포함

요구사항:
- 3-5개 옵션 비교
- ${e}의 장점 강조
- 객관적인 비교 기준 제시
- 표 형식 또는 구조화된 비교`;break}return await mi(r)},qP=async(t,e=3)=>{const n=`다음 콘텐츠의 변형 버전 ${e}개를 생성해주세요.

원본 콘텐츠:
${t}

요구사항:
- 핵심 메시지는 유지
- 표현과 구조를 다르게
- 각 변형은 "---VARIATION---"으로 구분
- 자연스럽고 독창적인 내용`;return(await mi(n)).split("---VARIATION---").map(i=>i.trim()).filter(i=>i.length>0).slice(0,e)},WP=async t=>{try{const{keyword:e,projectId:n}=t,r=await BP(e),s=[];for(const i of r){const o=await lE(n,{text:i});s.push(o)}return{success:!0,queryIds:s,queries:r}}catch(e){return console.error("Error generating queries:",e),{success:!1,queryIds:[],queries:[],error:String(e)}}};async function HP(t){const n=`다음 질문 목록을 분석하여 각 질문의 분류 정보를 JSON 배열로 반환해주세요.

질문 목록:
${t.map((i,o)=>`${o+1}. [${i.id}] ${i.text}`).join(`
`)}

각 항목에 대해 다음 정보를 추출하세요:
- queryId: 질문 ID (대괄호 안의 값)
- cluster: 다음 중 하나 선택
  - "region_extension": 지역 확장 관련 질문 (특정 지역 언급)
  - "attribute_focused": 속성/특징 관련 질문 (특정 기능, 특성 문의)
  - "comparison": 비교 관련 질문 (vs, 차이, 비교)
  - "recommendation": 추천 관련 질문 (추천, 어디가 좋은지, 어디로 가야 하는지)
- intent: 다음 중 하나 선택
  - "recommendation": 추천을 원함
  - "comparison": 비교를 원함
  - "information": 정보를 원함
- regionPrimary: 질문에서 언급된 주요 지역 (없으면 null)
- regionSecondary: 질문에서 언급된 보조 지역 (없으면 null)
- importanceWeight: 0.1~1.0 사이의 중요도 (추천/비교 질문은 높게, 정보성은 낮게)

반드시 JSON 배열만 반환하세요. 다른 텍스트 없이.
예시: [{"queryId":"abc123","cluster":"recommendation","intent":"recommendation","regionPrimary":"강남","regionSecondary":null,"importanceWeight":0.9}]`,s=(await mi(n)).match(/\[[\s\S]*\]/);if(!s)throw new Error("AI 응답에서 JSON을 파싱할 수 없습니다");return JSON.parse(s[0])}async function GP(t,e){for(const n of e){const r=us(je,be.PROJECTS,t,Pt.QUERIES,n.queryId),s={cluster:n.cluster,intent:n.intent,importanceWeight:n.importanceWeight};n.regionPrimary&&(s.regionPrimary=n.regionPrimary),n.regionSecondary&&(s.regionSecondary=n.regionSecondary),await Uu(r,s)}}const KP={region_extension:{label:"Region",variant:"auto"},attribute_focused:{label:"Attribute",variant:"recommended"},comparison:{label:"Compare",variant:"optional"},recommendation:{label:"Recommend",variant:"essential"}},QP={recommendation:"Recommend",comparison:"Compare",information:"Info"};function JP(){const{selectedProject:t,selectedProjectId:e,loading:n,reload:r}=Hu(),[s,i]=W.useState(!1),[o,l]=W.useState(!1),[u,d]=W.useState(!1),[p,g]=W.useState(""),[v,_]=W.useState(""),[C,N]=W.useState(null),D=(t==null?void 0:t.queries)??[],S=async()=>{if(!(!e||!t)){i(!0),_("Generating queries with AI...");try{const O=await WP({keyword:t.project.targetKeyword,projectId:e});O.success?(_(`${O.queries.length} queries generated.`),await r()):_(`Error: ${O.error}`)}finally{i(!1),setTimeout(()=>_(""),3e3)}}},E=async()=>{if(!(!e||D.length===0)){l(!0),_("Classifying queries...");try{const O=D.map(x=>({id:x.id,text:x.text})),F=await HP(O);await GP(e,F),_(`${F.length} queries classified.`),await r()}catch(O){_(`Error: ${O instanceof Error?O.message:String(O)}`)}finally{l(!1),setTimeout(()=>_(""),3e3)}}},T=async()=>{if(!(!e||!p.trim()))try{await lE(e,{text:p.trim()}),g(""),d(!1),await r()}catch(O){_(`Error: ${O instanceof Error?O.message:String(O)}`)}};if(n)return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Queries",subtitle:"Query management"}),c.jsx("div",{className:"flex-1 flex items-center justify-center",children:c.jsx(He,{className:"w-6 h-6 animate-spin text-blue-400"})})]});if(!t)return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Queries",subtitle:"Query management"}),c.jsx("div",{className:"flex-1 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx(lv,{className:"w-12 h-12 mx-auto mb-3 text-[#374151]"}),c.jsx("p",{className:"text-[#6B7280] text-sm",children:"Select a project first."})]})})]});const j=Object.entries(D.reduce((O,F)=>{const x=F.cluster||"unclassified";return O[x]||(O[x]=[]),O[x].push(F),O},{}));return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Queries",subtitle:`${t.project.name} -- ${D.length} queries`,actions:c.jsxs("div",{className:"flex gap-2",children:[D.length>0&&c.jsxs("button",{onClick:E,disabled:o,className:"flex items-center gap-1.5 px-3 py-1.5 text-xs border border-[#374151] rounded-lg text-[#9CA3AF] hover:text-blue-400 hover:border-blue-500/40 disabled:opacity-50 transition-colors",children:[o?c.jsx(He,{className:"w-3.5 h-3.5 animate-spin"}):c.jsx(yP,{className:"w-3.5 h-3.5"}),"Classify"]}),c.jsxs("button",{onClick:()=>d(O=>!O),className:"flex items-center gap-1.5 px-3 py-1.5 text-xs border border-[#374151] rounded-lg text-[#9CA3AF] hover:text-blue-400 hover:border-blue-500/40 transition-colors",children:[c.jsx(mP,{className:"w-3.5 h-3.5"}),"Add"]}),c.jsxs("button",{onClick:S,disabled:s,className:"flex items-center gap-1.5 px-3 py-1.5 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-lg disabled:opacity-50 transition-colors font-semibold",children:[s?c.jsx(He,{className:"w-3.5 h-3.5 animate-spin"}):c.jsx(zo,{className:"w-3.5 h-3.5"}),"AI Generate"]})]})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[v&&c.jsx("div",{className:"px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs",children:v}),u&&c.jsxs("div",{className:"p-4 bg-[#111827] rounded-xl border border-[#1F2937] flex gap-2",children:[c.jsx("input",{type:"text",value:p,onChange:O=>g(O.target.value),onKeyDown:O=>O.key==="Enter"&&T(),placeholder:"Enter query manually",className:"flex-1 px-3 py-2 bg-[#1F2937] border border-[#374151] rounded-lg text-sm text-white placeholder:text-[#6B7280] focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none",autoFocus:!0}),c.jsx("button",{onClick:T,disabled:!p.trim(),className:"px-4 py-2 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 disabled:opacity-40 transition-colors font-semibold",children:"Add"}),c.jsx("button",{onClick:()=>d(!1),className:"px-3 py-2 border border-[#374151] text-[#9CA3AF] text-xs rounded-lg hover:border-[#6B7280] transition-colors",children:"Cancel"})]}),D.length===0?c.jsxs("div",{className:"bg-[#111827] rounded-xl border border-[#1F2937] p-12 text-center",children:[c.jsx(lv,{className:"w-12 h-12 mx-auto mb-4 text-[#374151]"}),c.jsx("h3",{className:"text-base font-semibold text-white mb-2",children:"No queries yet"}),c.jsx("p",{className:"text-[#6B7280] text-sm mb-6",children:"Generate keyword-based queries with AI."}),c.jsxs("button",{onClick:S,disabled:s,className:"inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors text-xs font-semibold",children:[s?c.jsx(He,{className:"w-4 h-4 animate-spin"}):c.jsx(zo,{className:"w-4 h-4"}),"AI Generate"]})]}):c.jsx("div",{className:"space-y-3",children:j.map(([O,F])=>{const x=KP[O];return c.jsxs("div",{className:"bg-[#111827] rounded-xl border border-[#1F2937] overflow-hidden",children:[c.jsxs("div",{className:"px-5 py-3 border-b border-[#1F2937] flex items-center gap-2",children:[x?c.jsx(ke,{variant:x.variant,children:x.label}):c.jsx(ke,{variant:"pending",children:"Unclassified"}),c.jsx("span",{className:"text-xs text-[#6B7280]",children:F.length})]}),c.jsx("div",{className:"divide-y divide-[#1F2937]/50",children:F.map(m=>c.jsxs("div",{className:"px-5 py-3 hover:bg-white/[0.02]",children:[c.jsxs("div",{className:"flex items-start justify-between cursor-pointer",onClick:()=>N(C===m.id?null:m.id),children:[c.jsx("p",{className:"text-sm text-white flex-1 pr-4",children:m.text}),c.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[m.intent&&c.jsx("span",{className:"text-[11px] text-[#6B7280]",children:QP[m.intent]??m.intent}),m.importanceWeight!==void 0&&c.jsx("span",{className:"text-[11px] font-mono text-[#6B7280]",children:m.importanceWeight.toFixed(1)}),C===m.id?c.jsx(qu,{className:"w-4 h-4 text-[#6B7280]"}):c.jsx(la,{className:"w-4 h-4 text-[#6B7280]"})]})]}),C===m.id&&c.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[m.regionPrimary&&c.jsxs("span",{className:"flex items-center gap-1 text-[11px] text-[#9CA3AF] bg-[#1F2937] px-2 py-1 rounded",children:[c.jsx(vE,{className:"w-3 h-3"}),m.regionPrimary,m.regionSecondary&&` -- ${m.regionSecondary}`]}),m.status&&c.jsx("span",{className:`text-[11px] px-2 py-1 rounded ${m.status==="active"?"bg-emerald-500/10 text-emerald-400":"bg-[#1F2937] text-[#6B7280]"}`,children:m.status==="active"?"Active":"Inactive"})]})]},m.id))})]},O)})})]})]})}const YP=(t,e,n=[])=>{const r=[e,...n],s=[];for(const i of r)new RegExp(i,"gi").test(t)&&s.push(i);return s},XP=(t,e)=>{const n={},r=t.split(/[.!?]\s+/);for(const s of e)for(let i=0;i<r.length;i++)if(new RegExp(s,"gi").test(r[i])){n[s]=i+1;break}return n},ZP=(t,e)=>{const n=["추천","좋다","최고","인기","베스트","우수","탁월"],r=t.split(/[.!?]\s+/);for(const s of r)if(new RegExp(e,"gi").test(s)){for(const o of n)if(s.includes(o))return!0}return!1},ej=(t,e,n)=>{let r=0;return t&&(r+=40),e!==null&&(e<=3?r+=40:e<=5?r+=20:r+=10),n&&(r+=20),r},qe={info:async(t,e)=>{console.log(`[INFO] ${e}`)},error:async(t,e)=>{console.error(`[ERROR] ${e}`)}},tj=async t=>{const{jobId:e,projectId:n,queryId:r,competitors:s=[]}=t;try{await qe.info(e,`Processing answer for query: ${r}`);const i=await hE(n,r);if(!i)throw new Error(`Query not found: ${r}`);const o=await dE(n);if(!o)throw new Error(`Project not found: ${n}`);const l=o.targetKeyword;await qe.info(e,`Simulating AI answer for: ${i.text}`);const u=await zP(i.text),d=YP(u,l,s),p=XP(u,d),g=d.includes(l),v=g?ZP(u,l):!1,_=await KN(n,{queryId:r,platform:"other",rawAnswer:u,mentionedEntities:d,targetMentioned:g,recommendationPresence:v,comparisonPresence:!1,entityPositions:p});await qe.info(e,`Answer created: ${_}`);const C=p[l]||null,N=ej(g,C,v),D=await QN(n,{queryId:r,platform:"other",mention:g,position:C,isRecommended:v,competitors:d.filter(S=>S!==l),score:N});return await qe.info(e,`Metric created: ${D}, Score: ${N}`),{answerId:_,metricId:D,mention:g,score:N}}catch(i){throw await qe.error(e,`Failed to process answer: ${i}`),i}},nj=async(t,e,n,r=[])=>{const s=[];for(const i of n)try{const o=await tj({jobId:t,projectId:e,queryId:i,competitors:r});s.push({queryId:i,success:!0,...o})}catch(o){s.push({queryId:i,success:!1,error:String(o)})}return s},rj=async t=>{let e=null;try{const{projectId:n,queryIds:r,competitors:s=[]}=t;e=await cE({projectId:n,jobType:"answer_simulation",status:"queued",triggerSource:"user",requestedBy:""}),await qe.info(e,`Starting simulation for ${r.length} queries`),await qs(e,{status:"running"});const i=await nj(e,n,r,s),o=i.filter(u=>u.success).length,l=i.filter(u=>!u.success).length;return await qs(e,{status:"done"}),await qe.info(e,`Simulation completed: ${o} success, ${l} failed`),{success:!0,jobId:e,status:"done",results:i}}catch(n){return console.error("Error running simulation:",n),e&&(await qs(e,{status:"error"}),await qe.error(e,`Simulation failed: ${n}`)),{success:!1,jobId:e||"",status:"error",error:String(n)}}};function sj(){const{selectedProject:t,selectedProjectId:e,loading:n}=Hu(),[r,s]=W.useState([]),[i,o]=W.useState(!1),[l,u]=W.useState(!1),[d,p]=W.useState(new Set);W.useEffect(()=>{e&&(o(!0),ov(e).then(T=>s(T)).finally(()=>o(!1)))},[e]);const g=T=>{p(j=>{const O=new Set(j);return O.has(T)?O.delete(T):O.add(T),O})},v=async()=>{if(!t||!e)return;const T=t.queries.map(j=>j.id).filter(j=>!!j);u(!0);try{await rj({projectId:e,queryIds:T});const j=await ov(e);s(j)}finally{u(!1)}};if(n)return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"AI Answers",subtitle:"Simulation results"}),c.jsx("div",{className:"flex-1 flex items-center justify-center",children:c.jsx(He,{className:"w-6 h-6 animate-spin text-blue-400"})})]});if(!t)return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"AI Answers",subtitle:"Simulation results"}),c.jsx("div",{className:"flex-1 flex items-center justify-center",children:c.jsx("p",{className:"text-[#6B7280] text-sm",children:"Select a project first."})})]});const _=r.length,C=r.filter(T=>T.targetMentioned).length,N=_>0?Math.round(C/_*100):0,D=r.filter(T=>T.recommendationPresence).length,S=_>0?Math.round(D/_*100):0,E=T=>{const j=t.queries.find(O=>O.id===T);return j?j.text:T};return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"AI Answers",subtitle:t.project.name,actions:c.jsxs("button",{onClick:v,disabled:l,className:"flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-60 transition-colors",children:[l?c.jsx(He,{className:"w-3.5 h-3.5 animate-spin"}):c.jsx(Ih,{className:"w-3.5 h-3.5"}),"Run Simulation"]})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[_>0&&c.jsxs("div",{className:"grid grid-cols-4 gap-3 animate-in",children:[c.jsx(Mt,{label:"Total Answers",value:String(_),color:"blue"}),c.jsx(Mt,{label:"Mention Rate",value:`${N}%`,color:"green"}),c.jsx(Mt,{label:"Recommend Rate",value:`${S}%`,color:"orange"}),c.jsx(Mt,{label:"Queries Covered",value:String(t.queries.length),color:"cyan"})]}),i?c.jsx("div",{className:"flex items-center justify-center h-48",children:c.jsx(He,{className:"w-6 h-6 animate-spin text-blue-400"})}):r.length===0?c.jsxs("div",{className:"flex flex-col items-center justify-center h-64 bg-[#111827] rounded-xl border border-[#1F2937]",children:[c.jsx("p",{className:"text-[#6B7280] text-sm mb-4",children:"No simulation results yet."}),c.jsxs("button",{onClick:v,disabled:l,className:"flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-60 transition-colors",children:[l?c.jsx(He,{className:"w-4 h-4 animate-spin"}):c.jsx(Ih,{className:"w-4 h-4"}),"Run Simulation"]})]}):c.jsx("div",{className:"space-y-3",children:r.map(T=>{const j=d.has(T.id??"");return c.jsxs("div",{className:"bg-[#111827] rounded-xl border border-[#1F2937] p-4 hover:bg-white/[0.01] transition-colors",children:[c.jsxs("div",{className:"flex items-start justify-between gap-4 mb-3",children:[c.jsx("p",{className:"text-sm font-medium text-white flex-1",children:E(T.queryId)}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[T.targetMentioned?c.jsxs("span",{className:"flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[11px] rounded-full font-medium",children:[c.jsx(gE,{className:"w-3 h-3"}),"Mentioned"]}):c.jsxs("span",{className:"flex items-center gap-1 px-2 py-0.5 bg-red-500/10 text-red-400 text-[11px] rounded-full font-medium",children:[c.jsx(Tp,{className:"w-3 h-3"}),"Not mentioned"]}),T.recommendationPresence&&c.jsx("span",{className:"px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[11px] rounded-full font-medium",children:"Recommended"})]})]}),c.jsx("div",{className:"text-sm text-[#9CA3AF]",children:j?c.jsx("p",{className:"whitespace-pre-wrap",children:T.rawAnswer}):c.jsx("p",{className:"line-clamp-2",children:T.rawAnswer})}),T.rawAnswer&&T.rawAnswer.length>150&&c.jsx("button",{onClick:()=>g(T.id??""),className:"flex items-center gap-1 mt-2 text-xs text-blue-400 hover:text-blue-300",children:j?c.jsxs(c.Fragment,{children:[c.jsx(qu,{className:"w-3 h-3"})," Collapse"]}):c.jsxs(c.Fragment,{children:[c.jsx(la,{className:"w-3 h-3"})," Show more"]})}),T.mentionedEntities&&T.mentionedEntities.length>0&&c.jsx("div",{className:"flex flex-wrap gap-1 mt-3",children:T.mentionedEntities.map((O,F)=>c.jsx("span",{className:"px-2 py-0.5 bg-[#1F2937] text-[#6B7280] text-[11px] rounded",children:O},F))})]},T.id)})})]})]})}function ij(t,e){const n=[];if(t.length===0)return n;const r=t.filter(d=>d.mention).length/t.length,s=t.filter(d=>d.isRecommended).length/t.length;r<.3&&n.push({problemType:"coverage_gap",title:"전반적인 AI 노출 부족",summary:`현재 AI 답변의 ${(r*100).toFixed(0)}%에서만 노출되고 있습니다. 전체적인 온라인 신호 강화가 필요합니다.`,severity:r<.1?"critical":"high",score:Math.round((1-r)*100),tags:["노출률","신호부족"],recommendedNextActionType:"generate_content",recommendedNextActionPayload:{contentType:"qa",targetMentionRate:.6}}),r>=.3&&s<.2&&n.push({problemType:"recommendation_phrase_gap",title:"추천 문구 부재",summary:`노출은 되고 있으나 추천 형태로 언급되는 비율이 ${(s*100).toFixed(0)}%에 불과합니다. 추천 맥락의 콘텐츠 생산이 필요합니다.`,severity:"high",score:Math.round((1-s)*80),tags:["추천부족","콘텐츠"],recommendedNextActionType:"generate_content",recommendedNextActionPayload:{contentType:"list",includeRecommendationPhrases:!0}});const i={};t.forEach(d=>{d.competitors.forEach(p=>{i[p]=(i[p]||0)+1})});const o=Object.entries(i).filter(([,d])=>d>t.length*.5).map(([d])=>d);o.length>0&&n.push({problemType:"competitor_dominance",title:`경쟁사 지배적 노출: ${o.join(", ")}`,summary:`${o.join(", ")}가 AI 답변의 50% 이상에서 언급되고 있습니다. 비교 콘텐츠를 통한 차별화가 필요합니다.`,severity:"high",score:75,tags:["경쟁사","차별화"],recommendedNextActionType:"generate_content",recommendedNextActionPayload:{contentType:"compare",competitors:o}});const l=e.filter(d=>d.regionPrimary),u=t.filter((d,p)=>{const g=e[p];return g&&g.regionPrimary});if(l.length>0&&u.length>0){const d=u.filter(p=>p.mention).length/u.length;if(d<r*.7){const p=[...new Set(l.map(g=>g.regionPrimary))];n.push({problemType:"region_signal_gap",title:`지역 신호 부족: ${p.slice(0,3).join(", ")}`,summary:`지역 기반 질문에서의 노출률(${(d*100).toFixed(0)}%)이 전체 평균보다 낮습니다. 지역 특화 콘텐츠 보강이 필요합니다.`,severity:"medium",score:60,tags:["지역","로컬SEO"],recommendedNextActionType:"generate_content",recommendedNextActionPayload:{contentType:"qa",regions:p}})}}return n}async function oj(t){const{projectId:e,queries:n,metrics:r}=t,s=ij(r,n);if(s.length===0)return[];const i=await Eh(e),o=ue.now(),l=[];for(const u of s){const d=i.find(p=>p.problemType===u.problemType&&p.status!=="resolved");if(d&&d.id)await uE(e,d.id,{score:u.score,severity:u.severity,summary:u.summary,lastDetectedAt:o}),l.push(d.id);else{const p=await JN(e,{problemType:u.problemType,scopeType:u.scopeType,scopeKey:u.scopeKey,title:u.title,summary:u.summary,severity:u.severity,score:u.score,status:"active",tags:u.tags,recommendedNextActionType:u.recommendedNextActionType,recommendedNextActionPayload:u.recommendedNextActionPayload,firstDetectedAt:o,lastDetectedAt:o,resolvedAt:null});l.push(p)}}return l}async function aj(t,e){const n=`다음 GEO(Generative Engine Optimization) 문제에 대한 해결 전략을 제안해주세요.

비즈니스: ${e}
문제 유형: ${t.problemType}
문제 제목: ${t.title}
문제 설명: ${t.summary}

다음 내용을 포함하는 구체적인 해결 전략을 300자 이내로 작성해주세요:
1. 핵심 원인
2. 즉시 실행 가능한 액션 1-2가지
3. 기대 효과`;return mi(n)}function lj(){const{selectedProject:t,selectedProjectId:e,loading:n}=Hu(),[r,s]=W.useState([]),[i,o]=W.useState(!1),[l,u]=W.useState(!1),[d,p]=W.useState(new Set),[g,v]=W.useState({}),[_,C]=W.useState(new Set);W.useEffect(()=>{e&&(o(!0),Eh(e).then(m=>s(m)).finally(()=>o(!1)))},[e]);const N=async()=>{if(!(!t||!e)){u(!0);try{await oj({projectId:e,targetKeyword:t.project.targetKeyword,queries:t.queries,metrics:t.metrics});const m=await Eh(e);s(m)}finally{u(!1)}}},D=m=>{p(w=>{const I=new Set(w);return I.has(m)?I.delete(m):I.add(m),I})},S=async m=>{if(g[m]){D(m);return}C(w=>new Set(w).add(m));try{const w=r.find(k=>k.id===m),I=w?await aj({title:w.title,summary:w.summary??"",problemType:w.problemType},t.project.targetKeyword):"";v(k=>({...k,[m]:I})),p(k=>new Set(k).add(m))}finally{C(w=>{const I=new Set(w);return I.delete(m),I})}},E=async(m,w)=>{await uE(e,m,{status:w}),s(I=>I.map(k=>k.id===m?{...k,status:w}:k))},T={critical:"high",high:"high",medium:"medium",low:"low"},j={critical:"Critical",high:"High",medium:"Medium",low:"Low"},O={active:"Active",improving:"Improving",resolved:"Resolved",ignored:"Ignored"},F={active:"pending",improving:"running",resolved:"done",ignored:"pending"},x={critical:r.filter(m=>m.severity==="critical").length,high:r.filter(m=>m.severity==="high").length,medium:r.filter(m=>m.severity==="medium").length,low:r.filter(m=>m.severity==="low").length};return n?c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Problems",subtitle:"Issue tracking"}),c.jsx("div",{className:"flex-1 flex items-center justify-center",children:c.jsx(He,{className:"w-6 h-6 animate-spin text-blue-400"})})]}):t?c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Problems",subtitle:t.project.name,actions:c.jsxs("button",{onClick:N,disabled:l,className:"flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-60 transition-colors",children:[l?c.jsx(He,{className:"w-3.5 h-3.5 animate-spin"}):c.jsx(ho,{className:"w-3.5 h-3.5"}),"Analyze"]})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[r.length>0&&c.jsx("div",{className:"flex gap-2 animate-in",children:Object.entries(x).filter(([,m])=>m>0).map(([m,w])=>c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx(ke,{variant:T[m]??"low",children:j[m]}),c.jsx("span",{className:"text-xs font-bold text-white",children:w})]},m))}),i?c.jsx("div",{className:"flex items-center justify-center h-48",children:c.jsx(He,{className:"w-6 h-6 animate-spin text-blue-400"})}):r.length===0?c.jsxs("div",{className:"flex flex-col items-center justify-center h-64 bg-[#111827] rounded-xl border border-[#1F2937]",children:[c.jsx(ho,{className:"w-10 h-10 text-[#374151] mb-3"}),c.jsx("p",{className:"text-[#6B7280] text-sm mb-4",children:"No problems found."}),c.jsxs("button",{onClick:N,disabled:l,className:"flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-60 transition-colors",children:[l?c.jsx(He,{className:"w-4 h-4 animate-spin"}):c.jsx(ho,{className:"w-4 h-4"}),"Run Analysis"]})]}):c.jsx("div",{className:"space-y-3",children:r.map(m=>{const w=d.has(m.id??""),I=g[m.id??""],k=_.has(m.id??"");return c.jsxs("div",{className:"bg-[#111827] rounded-xl border border-[#1F2937] p-4 hover:bg-white/[0.01] transition-colors",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3 mb-2",children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx(ke,{variant:T[m.severity]??"low",children:j[m.severity]??m.severity}),m.score!==void 0&&c.jsxs("span",{className:"px-2 py-0.5 bg-[#1F2937] text-[#9CA3AF] text-[11px] rounded font-medium",children:[m.score,"pts"]}),c.jsx(ke,{variant:F[m.status]??"pending",children:O[m.status]??m.status})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[c.jsx("button",{onClick:()=>E(m.id??"","ignored"),className:"px-2.5 py-1 text-[11px] text-[#6B7280] border border-[#374151] rounded-lg hover:border-[#6B7280] transition-colors",children:"Ignore"}),c.jsxs("button",{onClick:()=>E(m.id??"","resolved"),className:"flex items-center gap-1 px-2.5 py-1 text-[11px] text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 transition-colors",children:[c.jsx(gE,{className:"w-3 h-3"}),"Resolved"]})]})]}),c.jsx("h3",{className:"text-sm font-semibold text-white mb-1",children:m.title}),c.jsx("p",{className:"text-sm text-[#6B7280] line-clamp-2",children:m.summary}),c.jsxs("div",{className:"mt-3",children:[c.jsxs("button",{onClick:()=>S(m.id??""),disabled:k,className:"flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium",children:[k?c.jsx(He,{className:"w-3 h-3 animate-spin"}):w&&I?c.jsx(qu,{className:"w-3 h-3"}):c.jsx(la,{className:"w-3 h-3"}),"AI Strategy"]}),w&&I&&c.jsx("div",{className:"mt-2 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg text-sm text-blue-200",children:I})]})]},m.id)})})]})]}):c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Problems",subtitle:"Issue tracking"}),c.jsx("div",{className:"flex-1 flex items-center justify-center",children:c.jsx("p",{className:"text-[#6B7280] text-sm",children:"Select a project first."})})]})}const uj=async t=>{const{jobId:e,projectId:n,queryId:r,contentType:s,generateVariations:i=!1}=t;try{await qe.info(e,`Processing content for query: ${r}, type: ${s}`);const o=await hE(n,r);if(!o)throw new Error(`Query not found: ${r}`);const l=await dE(n);if(!l)throw new Error(`Project not found: ${n}`);const u=l.targetKeyword;await qe.info(e,`Generating ${s} content for: ${o.text}`);const d=await $P(o.text,u,s),p=await iv(n,{queryId:r,type:s,content:d,status:"generated"});await qe.info(e,`Content created: ${p}`);const g=[];if(i){await qe.info(e,"Generating content variations");const v=await qP(d,3);for(let _=0;_<v.length;_++){const C=await iv(n,{queryId:r,type:s,content:v[_],variationIndex:_+1,status:"generated"});g.push(C)}await qe.info(e,`Created ${v.length} variations`)}return{contentId:p,variationIds:g}}catch(o){throw await qe.error(e,`Failed to process content: ${o}`),o}},cj=async(t,e,n,r,s=!1)=>{const i=[];for(const o of n)try{const l=await uj({jobId:t,projectId:e,queryId:o,contentType:r,generateVariations:s});i.push({queryId:o,success:!0,...l})}catch(l){i.push({queryId:o,success:!1,error:String(l)})}return i},dj=async t=>{let e=null;try{const{projectId:n,queryIds:r,contentType:s,generateVariations:i=!1}=t;e=await cE({projectId:n,jobType:"content_generation",status:"queued",triggerSource:"user",requestedBy:""}),await qe.info(e,`Starting content generation for ${r.length} queries`),await qs(e,{status:"running"});const o=await cj(e,n,r,s,i),l=o.filter(d=>d.success).length,u=o.filter(d=>!d.success).length;return await qs(e,{status:"done"}),await qe.info(e,`Content generation completed: ${l} success, ${u} failed`),{success:!0,jobId:e,status:"done",results:o}}catch(n){return console.error("Error generating content:",n),e&&(await qs(e,{status:"error"}),await qe.error(e,`Content generation failed: ${n}`)),{success:!1,jobId:e||"",status:"error",error:String(n)}}},hj=[{type:"qa",label:"Q&A Content",description:"Natural question-answer format",icon:c.jsx(yE,{className:"w-5 h-5"})},{type:"list",label:"Recommendation List",description:"Curated list featuring your brand",icon:c.jsx(fP,{className:"w-5 h-5"})},{type:"compare",label:"Comparison Content",description:"Highlight strengths vs competitors",icon:c.jsx(dP,{className:"w-5 h-5"})},{type:"qa",label:"Article",description:"Informational article format",icon:c.jsx(aP,{className:"w-5 h-5"})}],fj={qa:"Q&A",list:"List",compare:"Compare"};function pj(){const{selectedProject:t,selectedProjectId:e,loading:n}=Hu(),[r,s]=W.useState([]),[i,o]=W.useState(!1),[l,u]=W.useState(null),[d,p]=W.useState(new Set);W.useEffect(()=>{e&&(o(!0),av(e).then(_=>s(_)).finally(()=>o(!1)))},[e]);const g=async(_,C)=>{if(!t||!e)return;const N=t.queries.map(S=>S.id),D=`${_}-${C}`;u(D);try{await dj({projectId:e,queryIds:N.filter(E=>!!E),contentType:_});const S=await av(e);s(S)}finally{u(null)}},v=_=>{p(C=>{const N=new Set(C);return N.has(_)?N.delete(_):N.add(_),N})};return n?c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Actions",subtitle:"Content generation"}),c.jsx("div",{className:"flex-1 flex items-center justify-center",children:c.jsx(He,{className:"w-6 h-6 animate-spin text-blue-400"})})]}):t?c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Actions",subtitle:t.project.name}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[c.jsx("div",{className:"grid grid-cols-2 gap-3 animate-in",children:hj.map((_,C)=>{const N=`${_.type}-${_.label}`,D=l===N;return c.jsxs("div",{className:"bg-[#111827] rounded-xl border border-[#1F2937] p-5 flex flex-col gap-3",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"p-2 bg-blue-500/10 text-blue-400 rounded-lg",children:_.icon}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-sm font-semibold text-white",children:_.label}),c.jsx("p",{className:"text-[11px] text-[#6B7280] mt-0.5",children:_.description})]})]}),c.jsxs("button",{onClick:()=>g(_.type,_.label),disabled:D||l!==null,className:"flex items-center justify-center gap-2 w-full py-2 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors",children:[D&&c.jsx(He,{className:"w-3.5 h-3.5 animate-spin"}),"Generate"]})]},C)})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xs text-[#6B7280] font-medium mb-3",children:"Generated Content"}),i?c.jsx("div",{className:"flex items-center justify-center h-32",children:c.jsx(He,{className:"w-5 h-5 animate-spin text-blue-400"})}):r.length===0?c.jsx("div",{className:"flex items-center justify-center h-32 bg-[#111827] rounded-xl border border-[#1F2937]",children:c.jsx("p",{className:"text-[#6B7280] text-sm",children:"No content generated yet."})}):c.jsx("div",{className:"space-y-3",children:r.map(_=>{var E,T;const C=d.has(_.id??""),N=fj[_.type]??_.type,D=((E=_.content)==null?void 0:E.slice(0,200))??"",S=(((T=_.content)==null?void 0:T.length)??0)>200;return c.jsxs("div",{className:"bg-[#111827] rounded-xl border border-[#1F2937] p-4",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[c.jsx(ke,{variant:"auto",children:N}),c.jsx(ke,{variant:_.status==="distributed"?"done":_.status==="archived"?"pending":"running",children:_.status==="distributed"?"Distributed":_.status==="archived"?"Archived":"Generated"})]}),c.jsxs("p",{className:"text-sm text-[#9CA3AF] whitespace-pre-wrap",children:[C?_.content:D,!C&&S&&"..."]}),S&&c.jsx("button",{onClick:()=>v(_.id??""),className:"flex items-center gap-1 mt-2 text-xs text-blue-400 hover:text-blue-300",children:C?c.jsxs(c.Fragment,{children:[c.jsx(qu,{className:"w-3 h-3"})," Collapse"]}):c.jsxs(c.Fragment,{children:[c.jsx(la,{className:"w-3 h-3"})," Show all"]})})]},_.id)})})]})]})]}):c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Actions",subtitle:"Content generation"}),c.jsx("div",{className:"flex-1 flex items-center justify-center",children:c.jsx("p",{className:"text-[#6B7280] text-sm",children:"Select a project first."})})]})}const Fi=[{id:"1",type:"baseline_scan",label:"Baseline Scan",status:"completed",progress:100,total:20,startedAt:"2026-04-22 14:30",duration:"3m 24s"},{id:"2",type:"problem_find",label:"Problem Analysis",status:"completed",progress:100,total:20,startedAt:"2026-04-22 14:34",duration:"1m 12s"},{id:"3",type:"content_generate",label:"Q&A Content Generation",status:"running",progress:67,total:8,startedAt:"2026-04-23 09:15",duration:"-- running"},{id:"4",type:"solve_run",label:"Schema.org Deployment",status:"completed",progress:100,total:1,startedAt:"2026-04-23 09:00",duration:"45s"},{id:"5",type:"report_generate",label:"Weekly Report",status:"pending",progress:0,total:1,startedAt:"--",duration:"--"},{id:"6",type:"baseline_scan",label:"Re-scan (Post-Action)",status:"failed",progress:45,total:20,startedAt:"2026-04-21 16:00",duration:"-- failed",error:"Naver AI API rate limit exceeded"}],mj={baseline_scan:"Scan",problem_find:"Analysis",solve_run:"Solve",content_generate:"Content",report_generate:"Report"},gj=t=>{switch(t){case"completed":return c.jsx($u,{size:16,className:"text-emerald-400"});case"running":return c.jsx(Bo,{size:16,className:"text-blue-400 animate-spin"});case"failed":return c.jsx(Tp,{size:16,className:"text-red-400"});default:return c.jsx(Wu,{size:16,className:"text-[#6B7280]"})}},yj=t=>{switch(t){case"completed":return c.jsx(ke,{variant:"done",children:"Done"});case"running":return c.jsx(ke,{variant:"running",children:"Running"});case"failed":return c.jsx(ke,{variant:"high",children:"Failed"});default:return c.jsx(ke,{variant:"pending",children:"Pending"})}};function vj(){const t=Fi.filter(s=>s.status==="running").length,e=Fi.filter(s=>s.status==="completed").length,n=Fi.filter(s=>s.status==="failed").length,r=Fi.filter(s=>s.status==="pending").length;return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Jobs",subtitle:"Background task queue",actions:c.jsxs("button",{className:"px-3 py-1.5 bg-[#1F2937] border border-[#374151] rounded-lg text-xs text-[#9CA3AF] hover:text-blue-400 hover:border-blue-500/40 transition-colors flex items-center gap-1.5",children:[c.jsx(He,{size:12}),"Refresh"]})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[c.jsxs("div",{className:"flex gap-3 animate-in",children:[c.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-[#111827] border border-[#1F2937] rounded-lg text-xs",children:[c.jsx(Bo,{size:12,className:"text-blue-400 animate-spin"}),c.jsx("span",{className:"text-[#9CA3AF]",children:"Running"}),c.jsx("span",{className:"font-bold text-white",children:t})]}),c.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-[#111827] border border-[#1F2937] rounded-lg text-xs",children:[c.jsx($u,{size:12,className:"text-emerald-400"}),c.jsx("span",{className:"text-[#9CA3AF]",children:"Done"}),c.jsx("span",{className:"font-bold text-white",children:e})]}),c.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-[#111827] border border-[#1F2937] rounded-lg text-xs",children:[c.jsx(Tp,{size:12,className:"text-red-400"}),c.jsx("span",{className:"text-[#9CA3AF]",children:"Failed"}),c.jsx("span",{className:"font-bold text-white",children:n})]}),c.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-[#111827] border border-[#1F2937] rounded-lg text-xs",children:[c.jsx(Wu,{size:12,className:"text-[#6B7280]"}),c.jsx("span",{className:"text-[#9CA3AF]",children:"Pending"}),c.jsx("span",{className:"font-bold text-white",children:r})]})]}),c.jsx("div",{className:"bg-[#111827] border border-[#1F2937] rounded-xl overflow-hidden animate-in",children:c.jsxs("table",{className:"w-full text-[13px]",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"text-[11px] text-[#6B7280] uppercase tracking-wide border-b border-[#1F2937]",children:[c.jsx("th",{className:"text-left py-3 px-4",children:"Status"}),c.jsx("th",{className:"text-left py-3 px-4",children:"Job"}),c.jsx("th",{className:"text-left py-3 px-4",children:"Type"}),c.jsx("th",{className:"text-left py-3 px-4",children:"Progress"}),c.jsx("th",{className:"text-left py-3 px-4",children:"Started"}),c.jsx("th",{className:"text-right py-3 px-4",children:"Duration"})]})}),c.jsx("tbody",{children:Fi.map(s=>c.jsxs("tr",{className:"border-b border-[#1F2937]/50 hover:bg-white/[0.02]",children:[c.jsx("td",{className:"py-3 px-4",children:c.jsxs("div",{className:"flex items-center gap-2",children:[gj(s.status),yj(s.status)]})}),c.jsxs("td",{className:"py-3 px-4",children:[c.jsx("div",{className:"text-white font-medium",children:s.label}),s.error&&c.jsx("div",{className:"text-[11px] text-red-400 mt-0.5",children:s.error})]}),c.jsx("td",{className:"py-3 px-4 text-[#9CA3AF]",children:mj[s.type]??s.type}),c.jsx("td",{className:"py-3 px-4 w-40",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"flex-1",children:c.jsx(TE,{value:s.progress,color:s.status==="completed"?"green":s.status==="failed"?"red":"blue"})}),c.jsxs("span",{className:"text-[11px] text-[#6B7280] w-8 text-right",children:[s.progress,"%"]})]})}),c.jsx("td",{className:"py-3 px-4 text-[#6B7280] text-xs",children:s.startedAt}),c.jsx("td",{className:"py-3 px-4 text-right text-[#9CA3AF] text-xs",children:s.duration})]},s.id))})]})})]})]})}const _j=[{id:"simulation",title:"Auto Simulation",description:"Run AI answer simulations on a schedule",icon:c.jsx(zo,{className:"w-5 h-5"})},{id:"analysis",title:"Auto Problem Analysis",description:"Detect problems from AI answer data periodically",icon:c.jsx(ho,{className:"w-5 h-5"})},{id:"content",title:"Auto Content Generation",description:"Generate content based on detected problems automatically",icon:c.jsx(wE,{className:"w-5 h-5"}),hasContentType:!0}],wj=[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],xj=[{value:"qa",label:"Q&A"},{value:"list",label:"List"},{value:"compare",label:"Compare"}];function Ej(){const[t,e]=W.useState({simulation:!1,analysis:!1,content:!1}),[n,r]=W.useState({simulation:"weekly",analysis:"weekly",content:"weekly"}),[s,i]=W.useState("qa"),o=u=>{e(d=>({...d,[u]:!d[u]}))},l=(u,d)=>{r(p=>({...p,[u]:d}))};return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsx(Ue,{title:"Automation",subtitle:"Schedule and rule management"}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[_j.map(u=>c.jsxs("div",{className:"bg-[#111827] rounded-xl border border-[#1F2937] p-5 animate-in",children:[c.jsxs("div",{className:"flex items-start justify-between gap-4",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"p-2 bg-[#1F2937] text-[#9CA3AF] rounded-lg mt-0.5",children:u.icon}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-semibold text-white",children:u.title}),c.jsx("p",{className:"text-[11px] text-[#6B7280] mt-0.5",children:u.description})]})]}),c.jsx("button",{onClick:()=>o(u.id),className:`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${t[u.id]?"bg-blue-500":"bg-[#374151]"}`,children:c.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${t[u.id]?"translate-x-6":"translate-x-1"}`})})]}),c.jsxs("div",{className:"mt-4 flex items-center gap-4",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("label",{className:"text-[11px] text-[#6B7280]",children:"Frequency"}),c.jsx("select",{value:n[u.id],onChange:d=>l(u.id,d.target.value),disabled:!t[u.id],className:"text-xs bg-[#1F2937] border border-[#374151] rounded-lg px-2 py-1.5 text-white disabled:opacity-40 disabled:text-[#6B7280] focus:outline-none focus:ring-1 focus:ring-blue-500",children:wj.map(d=>c.jsx("option",{value:d.value,children:d.label},d.value))})]}),u.hasContentType&&c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("label",{className:"text-[11px] text-[#6B7280]",children:"Content type"}),c.jsx("select",{value:s,onChange:d=>i(d.target.value),disabled:!t[u.id],className:"text-xs bg-[#1F2937] border border-[#374151] rounded-lg px-2 py-1.5 text-white disabled:opacity-40 disabled:text-[#6B7280] focus:outline-none focus:ring-1 focus:ring-blue-500",children:xj.map(d=>c.jsx("option",{value:d.value,children:d.label},d.value))})]}),c.jsxs("div",{className:"ml-auto text-[11px] text-[#6B7280]",children:["Last run: ",c.jsx("span",{className:"font-medium text-[#9CA3AF]",children:"Never"})]})]})]},u.id)),c.jsxs("div",{className:"flex items-start gap-2 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300 animate-in",children:[c.jsx(ho,{className:"w-4 h-4 mt-0.5 shrink-0 text-blue-400"}),"Automation features require Firebase Cloud Functions integration."]})]})]})}function Ij(){const{user:t,loading:e}=Ip(),[n,r]=W.useState("onboarding"),[s,i]=W.useState();if(e)return c.jsx("div",{className:"min-h-screen flex items-center justify-center",children:c.jsxs("div",{className:"flex flex-col items-center gap-4",children:[c.jsx("div",{className:"w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"}),c.jsx("p",{className:"text-[#6B7280] text-sm",children:"Loading..."})]})});if(!t)return c.jsx(xP,{});const o=u=>{i("iting.co.kr"),r("plan")},l=()=>{switch(n){case"onboarding":return c.jsx(uv,{onComplete:o});case"plan":return c.jsx(CP,{onStartAnalysis:()=>r("analysis")});case"analysis":return c.jsx(NP,{onGoToAction:()=>r("action")});case"action":return c.jsx(OP,{onGoToReport:()=>r("reporting")});case"reporting":return c.jsx(LP,{onStartNewLoop:()=>r("plan")});case"queries":return c.jsx(JP,{});case"ai-answers":return c.jsx(sj,{});case"problems":return c.jsx(lj,{});case"actions":return c.jsx(pj,{});case"jobs":return c.jsx(vj,{});case"automation":return c.jsx(Ej,{});default:return c.jsx(uv,{onComplete:o})}};return n==="onboarding"?l():c.jsxs("div",{className:"min-h-screen flex",children:[c.jsx(EP,{currentPage:n,onNavigate:r,projectName:s,projectSub:s?"Digital Marketing / Seoul":void 0,problemCount:7,queryCount:12,actionCount:3,jobCount:2}),c.jsx("main",{className:"flex-1 ml-60",children:l()})]})}function Tj(){return c.jsx(eP,{children:c.jsx(FP,{children:c.jsx(Ij,{})})})}sd.createRoot(document.getElementById("root")).render(c.jsx(_1.StrictMode,{children:c.jsx(Tj,{})}));
//# sourceMappingURL=index-CWky95Wc.js.map
