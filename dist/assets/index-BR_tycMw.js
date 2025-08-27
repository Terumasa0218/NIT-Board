const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-DnpY8U6R.js","assets/mail-DAdWvjSC.js","assets/RegisterPage-CqXUHyJN.js","assets/DepartmentsPage-BeOPdtqF.js","assets/departments-D_nm8NIj.js","assets/TopicsPage-B7BfsC1Q.js"])))=>i.map(i=>d[i]);
function nI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function H_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var q_={exports:{}},ju={},K_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),rI=Symbol.for("react.portal"),iI=Symbol.for("react.fragment"),sI=Symbol.for("react.strict_mode"),oI=Symbol.for("react.profiler"),aI=Symbol.for("react.provider"),lI=Symbol.for("react.context"),uI=Symbol.for("react.forward_ref"),cI=Symbol.for("react.suspense"),dI=Symbol.for("react.memo"),hI=Symbol.for("react.lazy"),Pg=Symbol.iterator;function fI(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var G_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,Y_={};function ks(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||G_}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X_(){}X_.prototype=ks.prototype;function Cf(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||G_}var Af=Cf.prototype=new X_;Af.constructor=Cf;Q_(Af,ks.prototype);Af.isPureReactComponent=!0;var Cg=Array.isArray,J_=Object.prototype.hasOwnProperty,Rf={current:null},Z_={key:!0,ref:!0,__self:!0,__source:!0};function ew(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)J_.call(e,r)&&!Z_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ha,type:t,key:s,ref:o,props:i,_owner:Rf.current}}function pI(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function mI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ag=/\/+/g;function nd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mI(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case rI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nd(o,0):r,Cg(i)?(n="",t!=null&&(n=t.replace(Ag,"$&/")+"/"),wl(i,e,n,"",function(c){return c})):i!=null&&(bf(i)&&(i=pI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ag,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cg(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+nd(s,a);o+=wl(s,e,n,u,i)}else if(u=fI(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+nd(s,a++),o+=wl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ga(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},El={transition:null},vI={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:El,ReactCurrentOwner:Rf};function tw(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ga,forEach:function(t,e,n){Ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ga(t,function(){e++}),e},toArray:function(t){return Ga(t,function(e){return e})||[]},only:function(t){if(!bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ks;ee.Fragment=iI;ee.Profiler=oI;ee.PureComponent=Cf;ee.StrictMode=sI;ee.Suspense=cI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vI;ee.act=tw;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Q_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)J_.call(e,u)&&!Z_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ha,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:lI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aI,_context:t},t.Consumer=t};ee.createElement=ew;ee.createFactory=function(t){var e=ew.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:uI,render:t}};ee.isValidElement=bf;ee.lazy=function(t){return{$$typeof:hI,_payload:{_status:-1,_result:t},_init:gI}};ee.memo=function(t,e){return{$$typeof:dI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};ee.unstable_act=tw;ee.useCallback=function(t,e){return vt.current.useCallback(t,e)};ee.useContext=function(t){return vt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return vt.current.useEffect(t,e)};ee.useId=function(){return vt.current.useId()};ee.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return vt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};ee.useRef=function(t){return vt.current.useRef(t)};ee.useState=function(t){return vt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return vt.current.useTransition()};ee.version="18.3.1";K_.exports=ee;var O=K_.exports;const xf=H_(O),yI=nI({__proto__:null,default:xf},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _I=O,wI=Symbol.for("react.element"),EI=Symbol.for("react.fragment"),TI=Object.prototype.hasOwnProperty,SI=_I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,II={key:!0,ref:!0,__self:!0,__source:!0};function nw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TI.call(e,r)&&!II.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wI,type:t,key:s,ref:o,props:i,_owner:SI.current}}ju.Fragment=EI;ju.jsx=nw;ju.jsxs=nw;q_.exports=ju;var V=q_.exports,Xd={},rw={exports:{}},Lt={},iw={exports:{}},sw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,H){var Q=j.length;j.push(H);e:for(;0<Q;){var fe=Q-1>>>1,de=j[fe];if(0<i(de,H))j[fe]=H,j[Q]=de,Q=fe;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var H=j[0],Q=j.pop();if(Q!==H){j[0]=Q;e:for(var fe=0,de=j.length,Re=de>>>1;fe<Re;){var In=2*(fe+1)-1,kn=j[In],Pn=In+1,Cn=j[Pn];if(0>i(kn,Q))Pn<de&&0>i(Cn,kn)?(j[fe]=Cn,j[Pn]=Q,fe=Pn):(j[fe]=kn,j[In]=Q,fe=In);else if(Pn<de&&0>i(Cn,Q))j[fe]=Cn,j[Pn]=Q,fe=Pn;else break e}}return H}function i(j,H){var Q=j.sortIndex-H.sortIndex;return Q!==0?Q:j.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,g=!1,T=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(j){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=j)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function b(j){if(C=!1,w(j),!T)if(n(u)!==null)T=!0,Le(L);else{var H=n(c);H!==null&&He(b,H.startTime-j)}}function L(j,H){T=!1,C&&(C=!1,E(_),_=-1),g=!0;var Q=p;try{for(w(H),f=n(u);f!==null&&(!(f.expirationTime>H)||j&&!R());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,p=f.priorityLevel;var de=fe(f.expirationTime<=H);H=t.unstable_now(),typeof de=="function"?f.callback=de:f===n(u)&&r(u),w(H)}else r(u);f=n(u)}if(f!==null)var Re=!0;else{var In=n(c);In!==null&&He(b,In.startTime-H),Re=!1}return Re}finally{f=null,p=Q,g=!1}}var M=!1,S=null,_=-1,I=5,P=-1;function R(){return!(t.unstable_now()-P<I)}function x(){if(S!==null){var j=t.unstable_now();P=j;var H=!0;try{H=S(!0,j)}finally{H?A():(M=!1,S=null)}}else M=!1}var A;if(typeof v=="function")A=function(){v(x)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,ce=Ne.port2;Ne.port1.onmessage=x,A=function(){ce.postMessage(null)}}else A=function(){k(x,0)};function Le(j){S=j,M||(M=!0,A())}function He(j,H){_=k(function(){j(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){T||g||(T=!0,Le(L))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var Q=p;p=H;try{return j()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,H){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Q=p;p=j;try{return H()}finally{p=Q}},t.unstable_scheduleCallback=function(j,H,Q){var fe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?fe+Q:fe):Q=fe,j){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Q+de,j={id:h++,callback:H,priorityLevel:j,startTime:Q,expirationTime:de,sortIndex:-1},Q>fe?(j.sortIndex=Q,e(c,j),n(u)===null&&j===n(c)&&(C?(E(_),_=-1):C=!0,He(b,Q-fe))):(j.sortIndex=de,e(u,j),T||g||(T=!0,Le(L))),j},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(j){var H=p;return function(){var Q=p;p=H;try{return j.apply(this,arguments)}finally{p=Q}}}})(sw);iw.exports=sw;var kI=iw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PI=O,Dt=kI;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ow=new Set,No={};function wi(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(No[t]=e,t=0;t<e.length;t++)ow.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,CI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rg={},bg={};function AI(t){return Jd.call(bg,t)?!0:Jd.call(Rg,t)?!1:CI.test(t)?bg[t]=!0:(Rg[t]=!0,!1)}function RI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bI(t,e,n,r){if(e===null||typeof e>"u"||RI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nf,Of);Je[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nf,Of);Je[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nf,Of);Je[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Df(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bI(e,n,i,r)&&(n=null),r||i===null?AI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=PI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),Lf=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),aw=Symbol.for("react.provider"),lw=Symbol.for("react.context"),Mf=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),uw=Symbol.for("react.offscreen"),xg=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=xg&&t[xg]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,rd;function ao(t){if(rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rd=e&&e[1]||""}return`
`+rd+t}var id=!1;function sd(t,e){if(!t||id)return"";id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function xI(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=sd(t.type,!1),t;case 11:return t=sd(t.type.render,!1),t;case 1:return t=sd(t.type,!0),t;default:return""}}function nh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case Ui:return"Portal";case Zd:return"Profiler";case Lf:return"StrictMode";case eh:return"Suspense";case th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lw:return(t.displayName||"Context")+".Consumer";case aw:return(t._context.displayName||"Context")+".Provider";case Mf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vf:return e=t.displayName||null,e!==null?e:nh(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return nh(t(e))}catch{}}return null}function NI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nh(e);case 8:return e===Lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OI(t){var e=cw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=OI(t))}function dw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ng(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hw(t,e){e=e.checked,e!=null&&Df(t,"checked",e,!1)}function ih(t,e){hw(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&sh(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Og(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sh(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function Ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function oh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(lo(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function fw(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,mw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DI=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){DI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function gw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function vw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LI=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lh(t,e){if(e){if(LI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=null;function Ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,Zi=null,es=null;function Mg(t){if(t=ma(t)){if(typeof dh!="function")throw Error($(280));var e=t.stateNode;e&&(e=qu(e),dh(t.stateNode,t.type,e))}}function yw(t){Zi?es?es.push(t):es=[t]:Zi=t}function _w(){if(Zi){var t=Zi,e=es;if(es=Zi=null,Mg(t),e)for(t=0;t<e.length;t++)Mg(e[t])}}function ww(t,e){return t(e)}function Ew(){}var od=!1;function Tw(t,e,n){if(od)return t(e,n);od=!0;try{return ww(t,e,n)}finally{od=!1,(Zi!==null||es!==null)&&(Ew(),_w())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var r=qu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var hh=!1;if(Bn)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){hh=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{hh=!1}function MI(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var yo=!1,zl=null,Wl=!1,fh=null,VI={onError:function(t){yo=!0,zl=t}};function FI(t,e,n,r,i,s,o,a,u){yo=!1,zl=null,MI.apply(VI,arguments)}function UI(t,e,n,r,i,s,o,a,u){if(FI.apply(this,arguments),yo){if(yo){var c=zl;yo=!1,zl=null}else throw Error($(198));Wl||(Wl=!0,fh=c)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vg(t){if(Ei(t)!==t)throw Error($(188))}function $I(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vg(i),t;if(s===r)return Vg(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function Iw(t){return t=$I(t),t!==null?kw(t):null}function kw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kw(t);if(e!==null)return e;t=t.sibling}return null}var Pw=Dt.unstable_scheduleCallback,Fg=Dt.unstable_cancelCallback,jI=Dt.unstable_shouldYield,BI=Dt.unstable_requestPaint,xe=Dt.unstable_now,zI=Dt.unstable_getCurrentPriorityLevel,Uf=Dt.unstable_ImmediatePriority,Cw=Dt.unstable_UserBlockingPriority,Hl=Dt.unstable_NormalPriority,WI=Dt.unstable_LowPriority,Aw=Dt.unstable_IdlePriority,Bu=null,hn=null;function HI(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:GI,qI=Math.log,KI=Math.LN2;function GI(t){return t>>>=0,t===0?32:31-(qI(t)/KI|0)|0}var Ja=64,Za=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=uo(a):(s&=o,s!==0&&(r=uo(s)))}else o=n&~i,o!==0?r=uo(o):s!==0&&(r=uo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function QI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=QI(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rw(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function XI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $f(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function bw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xw,jf,Nw,Ow,Dw,mh=!1,el=[],wr=null,Er=null,Tr=null,Lo=new Map,Mo=new Map,ur=[],JI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ug(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ma(e),e!==null&&jf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZI(t,e,n,r,i){switch(e){case"focusin":return wr=Ys(wr,t,e,n,r,i),!0;case"dragenter":return Er=Ys(Er,t,e,n,r,i),!0;case"mouseover":return Tr=Ys(Tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Lo.set(s,Ys(Lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mo.set(s,Ys(Mo.get(s)||null,t,e,n,r,i)),!0}return!1}function Lw(t){var e=Xr(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=Sw(n),e!==null){t.blockedOn=e,Dw(t.priority,function(){Nw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ch=r,n.target.dispatchEvent(r),ch=null}else return e=ma(n),e!==null&&jf(e),t.blockedOn=n,!1;e.shift()}return!0}function $g(t,e,n){Tl(t)&&n.delete(e)}function ek(){mh=!1,wr!==null&&Tl(wr)&&(wr=null),Er!==null&&Tl(Er)&&(Er=null),Tr!==null&&Tl(Tr)&&(Tr=null),Lo.forEach($g),Mo.forEach($g)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,mh||(mh=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,ek)))}function Vo(t){function e(i){return Xs(i,t)}if(0<el.length){Xs(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&Xs(wr,t),Er!==null&&Xs(Er,t),Tr!==null&&Xs(Tr,t),Lo.forEach(e),Mo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)Lw(n),n.blockedOn===null&&ur.shift()}var ts=Xn.ReactCurrentBatchConfig,Kl=!0;function tk(t,e,n,r){var i=le,s=ts.transition;ts.transition=null;try{le=1,Bf(t,e,n,r)}finally{le=i,ts.transition=s}}function nk(t,e,n,r){var i=le,s=ts.transition;ts.transition=null;try{le=4,Bf(t,e,n,r)}finally{le=i,ts.transition=s}}function Bf(t,e,n,r){if(Kl){var i=gh(t,e,n,r);if(i===null)vd(t,e,r,Gl,n),Ug(t,r);else if(ZI(i,t,e,n,r))r.stopPropagation();else if(Ug(t,r),e&4&&-1<JI.indexOf(t)){for(;i!==null;){var s=ma(i);if(s!==null&&xw(s),s=gh(t,e,n,r),s===null&&vd(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vd(t,e,r,null,n)}}var Gl=null;function gh(t,e,n,r){if(Gl=null,t=Ff(r),t=Xr(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function Mw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zI()){case Uf:return 1;case Cw:return 4;case Hl:case WI:return 16;case Aw:return 536870912;default:return 16}default:return 16}}var gr=null,zf=null,Sl=null;function Vw(){if(Sl)return Sl;var t,e=zf,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sl=i.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function jg(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:jg,this.isPropagationStopped=jg,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wf=Mt(Ps),pa=Ie({},Ps,{view:0,detail:0}),rk=Mt(pa),ld,ud,Js,zu=Ie({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(ld=t.screenX-Js.screenX,ud=t.screenY-Js.screenY):ud=ld=0,Js=t),ld)},movementY:function(t){return"movementY"in t?t.movementY:ud}}),Bg=Mt(zu),ik=Ie({},zu,{dataTransfer:0}),sk=Mt(ik),ok=Ie({},pa,{relatedTarget:0}),cd=Mt(ok),ak=Ie({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),lk=Mt(ak),uk=Ie({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ck=Mt(uk),dk=Ie({},Ps,{data:0}),zg=Mt(dk),hk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pk[t])?!!e[t]:!1}function Hf(){return mk}var gk=Ie({},pa,{key:function(t){if(t.key){var e=hk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vk=Mt(gk),yk=Ie({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wg=Mt(yk),_k=Ie({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),wk=Mt(_k),Ek=Ie({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tk=Mt(Ek),Sk=Ie({},zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ik=Mt(Sk),kk=[9,13,27,32],qf=Bn&&"CompositionEvent"in window,_o=null;Bn&&"documentMode"in document&&(_o=document.documentMode);var Pk=Bn&&"TextEvent"in window&&!_o,Fw=Bn&&(!qf||_o&&8<_o&&11>=_o),Hg=" ",qg=!1;function Uw(t,e){switch(t){case"keyup":return kk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $w(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ji=!1;function Ck(t,e){switch(t){case"compositionend":return $w(e);case"keypress":return e.which!==32?null:(qg=!0,Hg);case"textInput":return t=e.data,t===Hg&&qg?null:t;default:return null}}function Ak(t,e){if(ji)return t==="compositionend"||!qf&&Uw(t,e)?(t=Vw(),Sl=zf=gr=null,ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fw&&e.locale!=="ko"?null:e.data;default:return null}}var Rk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rk[t.type]:e==="textarea"}function jw(t,e,n,r){yw(r),e=Ql(e,"onChange"),0<e.length&&(n=new Wf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,Fo=null;function bk(t){Jw(t,0)}function Wu(t){var e=Wi(t);if(dw(e))return t}function xk(t,e){if(t==="change")return e}var Bw=!1;if(Bn){var dd;if(Bn){var hd="oninput"in document;if(!hd){var Gg=document.createElement("div");Gg.setAttribute("oninput","return;"),hd=typeof Gg.oninput=="function"}dd=hd}else dd=!1;Bw=dd&&(!document.documentMode||9<document.documentMode)}function Qg(){wo&&(wo.detachEvent("onpropertychange",zw),Fo=wo=null)}function zw(t){if(t.propertyName==="value"&&Wu(Fo)){var e=[];jw(e,Fo,t,Ff(t)),Tw(bk,e)}}function Nk(t,e,n){t==="focusin"?(Qg(),wo=e,Fo=n,wo.attachEvent("onpropertychange",zw)):t==="focusout"&&Qg()}function Ok(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(Fo)}function Dk(t,e){if(t==="click")return Wu(e)}function Lk(t,e){if(t==="input"||t==="change")return Wu(e)}function Mk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:Mk;function Uo(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jd.call(e,i)||!Zt(t[i],e[i]))return!1}return!0}function Yg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xg(t,e){var n=Yg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yg(n)}}function Ww(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ww(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hw(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Vk(t){var e=Hw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ww(n.ownerDocument.documentElement,n)){if(r!==null&&Kf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xg(n,s);var o=Xg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fk=Bn&&"documentMode"in document&&11>=document.documentMode,Bi=null,vh=null,Eo=null,yh=!1;function Jg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||Bi==null||Bi!==Bl(r)||(r=Bi,"selectionStart"in r&&Kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Uo(Eo,r)||(Eo=r,r=Ql(vh,"onSelect"),0<r.length&&(e=new Wf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bi)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zi={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},fd={},qw={};Bn&&(qw=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function Hu(t){if(fd[t])return fd[t];if(!zi[t])return t;var e=zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qw)return fd[t]=e[n];return t}var Kw=Hu("animationend"),Gw=Hu("animationiteration"),Qw=Hu("animationstart"),Yw=Hu("transitionend"),Xw=new Map,Zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Xw.set(t,e),wi(e,[t])}for(var pd=0;pd<Zg.length;pd++){var md=Zg[pd],Uk=md.toLowerCase(),$k=md[0].toUpperCase()+md.slice(1);Mr(Uk,"on"+$k)}Mr(Kw,"onAnimationEnd");Mr(Gw,"onAnimationIteration");Mr(Qw,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(Yw,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jk=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function ev(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,UI(r,e,void 0,t),t.currentTarget=null}function Jw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ev(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ev(i,a,c),s=u}}}if(Wl)throw t=fh,Wl=!1,fh=null,t}function ve(t,e){var n=e[Sh];n===void 0&&(n=e[Sh]=new Set);var r=t+"__bubble";n.has(r)||(Zw(e,t,2,!1),n.add(r))}function gd(t,e,n){var r=0;e&&(r|=4),Zw(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[rl]){t[rl]=!0,ow.forEach(function(n){n!=="selectionchange"&&(jk.has(n)||gd(n,!1,t),gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,gd("selectionchange",!1,e))}}function Zw(t,e,n,r){switch(Mw(e)){case 1:var i=tk;break;case 4:i=nk;break;default:i=Bf}n=i.bind(null,e,n,t),i=void 0,!hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Tw(function(){var c=s,h=Ff(n),f=[];e:{var p=Xw.get(t);if(p!==void 0){var g=Wf,T=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":g=vk;break;case"focusin":T="focus",g=cd;break;case"focusout":T="blur",g=cd;break;case"beforeblur":case"afterblur":g=cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=sk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wk;break;case Kw:case Gw:case Qw:g=lk;break;case Yw:g=Tk;break;case"scroll":g=rk;break;case"wheel":g=Ik;break;case"copy":case"cut":case"paste":g=ck;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Wg}var C=(e&4)!==0,k=!C&&t==="scroll",E=C?p!==null?p+"Capture":null:p;C=[];for(var v=c,w;v!==null;){w=v;var b=w.stateNode;if(w.tag===5&&b!==null&&(w=b,E!==null&&(b=Do(v,E),b!=null&&C.push(jo(v,b,w)))),k)break;v=v.return}0<C.length&&(p=new g(p,T,null,n,h),f.push({event:p,listeners:C}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==ch&&(T=n.relatedTarget||n.fromElement)&&(Xr(T)||T[zn]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(T=n.relatedTarget||n.toElement,g=c,T=T?Xr(T):null,T!==null&&(k=Ei(T),T!==k||T.tag!==5&&T.tag!==6)&&(T=null)):(g=null,T=c),g!==T)){if(C=Bg,b="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=Wg,b="onPointerLeave",E="onPointerEnter",v="pointer"),k=g==null?p:Wi(g),w=T==null?p:Wi(T),p=new C(b,v+"leave",g,n,h),p.target=k,p.relatedTarget=w,b=null,Xr(h)===c&&(C=new C(E,v+"enter",T,n,h),C.target=w,C.relatedTarget=k,b=C),k=b,g&&T)t:{for(C=g,E=T,v=0,w=C;w;w=xi(w))v++;for(w=0,b=E;b;b=xi(b))w++;for(;0<v-w;)C=xi(C),v--;for(;0<w-v;)E=xi(E),w--;for(;v--;){if(C===E||E!==null&&C===E.alternate)break t;C=xi(C),E=xi(E)}C=null}else C=null;g!==null&&tv(f,p,g,C,!1),T!==null&&k!==null&&tv(f,k,T,C,!0)}}e:{if(p=c?Wi(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var L=xk;else if(Kg(p))if(Bw)L=Lk;else{L=Ok;var M=Nk}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=Dk);if(L&&(L=L(t,c))){jw(f,L,n,h);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&sh(p,"number",p.value)}switch(M=c?Wi(c):window,t){case"focusin":(Kg(M)||M.contentEditable==="true")&&(Bi=M,vh=c,Eo=null);break;case"focusout":Eo=vh=Bi=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,Jg(f,n,h);break;case"selectionchange":if(Fk)break;case"keydown":case"keyup":Jg(f,n,h)}var S;if(qf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ji?Uw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Fw&&n.locale!=="ko"&&(ji||_!=="onCompositionStart"?_==="onCompositionEnd"&&ji&&(S=Vw()):(gr=h,zf="value"in gr?gr.value:gr.textContent,ji=!0)),M=Ql(c,_),0<M.length&&(_=new zg(_,t,null,n,h),f.push({event:_,listeners:M}),S?_.data=S:(S=$w(n),S!==null&&(_.data=S)))),(S=Pk?Ck(t,n):Ak(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(h=new zg("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=S))}Jw(f,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Do(t,n),s!=null&&r.unshift(jo(t,s,i)),s=Do(t,e),s!=null&&r.push(jo(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Do(n,s),u!=null&&o.unshift(jo(n,u,a))):i||(u=Do(n,s),u!=null&&o.push(jo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Bk=/\r\n?/g,zk=/\u0000|\uFFFD/g;function nv(t){return(typeof t=="string"?t:""+t).replace(Bk,`
`).replace(zk,"")}function il(t,e,n){if(e=nv(e),nv(t)!==e&&n)throw Error($(425))}function Yl(){}var _h=null,wh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Th=typeof setTimeout=="function"?setTimeout:void 0,Wk=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,Hk=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(t){return rv.resolve(null).then(t).catch(qk)}:Th;function qk(t){setTimeout(function(){throw t})}function yd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function iv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),on="__reactFiber$"+Cs,Bo="__reactProps$"+Cs,zn="__reactContainer$"+Cs,Sh="__reactEvents$"+Cs,Kk="__reactListeners$"+Cs,Gk="__reactHandles$"+Cs;function Xr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=iv(t);t!==null;){if(n=t[on])return n;t=iv(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[on]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function qu(t){return t[Bo]||null}var Ih=[],Hi=-1;function Vr(t){return{current:t}}function ye(t){0>Hi||(t.current=Ih[Hi],Ih[Hi]=null,Hi--)}function pe(t,e){Hi++,Ih[Hi]=t.current,t.current=e}var Nr={},dt=Vr(Nr),Tt=Vr(!1),si=Nr;function cs(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function Xl(){ye(Tt),ye(dt)}function sv(t,e,n){if(dt.current!==Nr)throw Error($(168));pe(dt,e),pe(Tt,n)}function e0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,NI(t)||"Unknown",i));return Ie({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,si=dt.current,pe(dt,t),pe(Tt,Tt.current),!0}function ov(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=e0(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,ye(Tt),ye(dt),pe(dt,t)):ye(Tt),pe(Tt,n)}var On=null,Ku=!1,_d=!1;function t0(t){On===null?On=[t]:On.push(t)}function Qk(t){Ku=!0,t0(t)}function Fr(){if(!_d&&On!==null){_d=!0;var t=0,e=le;try{var n=On;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,Ku=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),Pw(Uf,Fr),i}finally{le=e,_d=!1}}return null}var qi=[],Ki=0,Zl=null,eu=0,Ft=[],Ut=0,oi=null,Dn=1,Ln="";function Kr(t,e){qi[Ki++]=eu,qi[Ki++]=Zl,Zl=t,eu=e}function n0(t,e,n){Ft[Ut++]=Dn,Ft[Ut++]=Ln,Ft[Ut++]=oi,oi=t;var r=Dn;t=Ln;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-Xt(e)+i|n<<i|r,Ln=s+t}else Dn=1<<s|n<<i|r,Ln=t}function Gf(t){t.return!==null&&(Kr(t,1),n0(t,1,0))}function Qf(t){for(;t===Zl;)Zl=qi[--Ki],qi[Ki]=null,eu=qi[--Ki],qi[Ki]=null;for(;t===oi;)oi=Ft[--Ut],Ft[Ut]=null,Ln=Ft[--Ut],Ft[Ut]=null,Dn=Ft[--Ut],Ft[Ut]=null}var xt=null,Rt=null,we=!1,Qt=null;function r0(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function av(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,Rt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:Dn,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,Rt=null,!0):!1;default:return!1}}function kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ph(t){if(we){var e=Rt;if(e){var n=e;if(!av(t,e)){if(kh(t))throw Error($(418));e=Sr(n.nextSibling);var r=xt;e&&av(t,e)?r0(r,n):(t.flags=t.flags&-4097|2,we=!1,xt=t)}}else{if(kh(t))throw Error($(418));t.flags=t.flags&-4097|2,we=!1,xt=t}}}function lv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function sl(t){if(t!==xt)return!1;if(!we)return lv(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=Rt)){if(kh(t))throw i0(),Error($(418));for(;e;)r0(t,e),e=Sr(e.nextSibling)}if(lv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=xt?Sr(t.stateNode.nextSibling):null;return!0}function i0(){for(var t=Rt;t;)t=Sr(t.nextSibling)}function ds(){Rt=xt=null,we=!1}function Yf(t){Qt===null?Qt=[t]:Qt.push(t)}var Yk=Xn.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uv(t){var e=t._init;return e(t._payload)}function s0(t){function e(E,v){if(t){var w=E.deletions;w===null?(E.deletions=[v],E.flags|=16):w.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=Cr(E,v),E.index=0,E.sibling=null,E}function s(E,v,w){return E.index=w,t?(w=E.alternate,w!==null?(w=w.index,w<v?(E.flags|=2,v):w):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,v,w,b){return v===null||v.tag!==6?(v=Pd(w,E.mode,b),v.return=E,v):(v=i(v,w),v.return=E,v)}function u(E,v,w,b){var L=w.type;return L===$i?h(E,v,w.props.children,b,w.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ar&&uv(L)===v.type)?(b=i(v,w.props),b.ref=Zs(E,v,w),b.return=E,b):(b=xl(w.type,w.key,w.props,null,E.mode,b),b.ref=Zs(E,v,w),b.return=E,b)}function c(E,v,w,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Cd(w,E.mode,b),v.return=E,v):(v=i(v,w.children||[]),v.return=E,v)}function h(E,v,w,b,L){return v===null||v.tag!==7?(v=ri(w,E.mode,b,L),v.return=E,v):(v=i(v,w),v.return=E,v)}function f(E,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Pd(""+v,E.mode,w),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:return w=xl(v.type,v.key,v.props,null,E.mode,w),w.ref=Zs(E,null,v),w.return=E,w;case Ui:return v=Cd(v,E.mode,w),v.return=E,v;case ar:var b=v._init;return f(E,b(v._payload),w)}if(lo(v)||Gs(v))return v=ri(v,E.mode,w,null),v.return=E,v;ol(E,v)}return null}function p(E,v,w,b){var L=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return L!==null?null:a(E,v,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qa:return w.key===L?u(E,v,w,b):null;case Ui:return w.key===L?c(E,v,w,b):null;case ar:return L=w._init,p(E,v,L(w._payload),b)}if(lo(w)||Gs(w))return L!==null?null:h(E,v,w,b,null);ol(E,w)}return null}function g(E,v,w,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return E=E.get(w)||null,a(v,E,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Qa:return E=E.get(b.key===null?w:b.key)||null,u(v,E,b,L);case Ui:return E=E.get(b.key===null?w:b.key)||null,c(v,E,b,L);case ar:var M=b._init;return g(E,v,w,M(b._payload),L)}if(lo(b)||Gs(b))return E=E.get(w)||null,h(v,E,b,L,null);ol(v,b)}return null}function T(E,v,w,b){for(var L=null,M=null,S=v,_=v=0,I=null;S!==null&&_<w.length;_++){S.index>_?(I=S,S=null):I=S.sibling;var P=p(E,S,w[_],b);if(P===null){S===null&&(S=I);break}t&&S&&P.alternate===null&&e(E,S),v=s(P,v,_),M===null?L=P:M.sibling=P,M=P,S=I}if(_===w.length)return n(E,S),we&&Kr(E,_),L;if(S===null){for(;_<w.length;_++)S=f(E,w[_],b),S!==null&&(v=s(S,v,_),M===null?L=S:M.sibling=S,M=S);return we&&Kr(E,_),L}for(S=r(E,S);_<w.length;_++)I=g(S,E,_,w[_],b),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?_:I.key),v=s(I,v,_),M===null?L=I:M.sibling=I,M=I);return t&&S.forEach(function(R){return e(E,R)}),we&&Kr(E,_),L}function C(E,v,w,b){var L=Gs(w);if(typeof L!="function")throw Error($(150));if(w=L.call(w),w==null)throw Error($(151));for(var M=L=null,S=v,_=v=0,I=null,P=w.next();S!==null&&!P.done;_++,P=w.next()){S.index>_?(I=S,S=null):I=S.sibling;var R=p(E,S,P.value,b);if(R===null){S===null&&(S=I);break}t&&S&&R.alternate===null&&e(E,S),v=s(R,v,_),M===null?L=R:M.sibling=R,M=R,S=I}if(P.done)return n(E,S),we&&Kr(E,_),L;if(S===null){for(;!P.done;_++,P=w.next())P=f(E,P.value,b),P!==null&&(v=s(P,v,_),M===null?L=P:M.sibling=P,M=P);return we&&Kr(E,_),L}for(S=r(E,S);!P.done;_++,P=w.next())P=g(S,E,_,P.value,b),P!==null&&(t&&P.alternate!==null&&S.delete(P.key===null?_:P.key),v=s(P,v,_),M===null?L=P:M.sibling=P,M=P);return t&&S.forEach(function(x){return e(E,x)}),we&&Kr(E,_),L}function k(E,v,w,b){if(typeof w=="object"&&w!==null&&w.type===$i&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Qa:e:{for(var L=w.key,M=v;M!==null;){if(M.key===L){if(L=w.type,L===$i){if(M.tag===7){n(E,M.sibling),v=i(M,w.props.children),v.return=E,E=v;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ar&&uv(L)===M.type){n(E,M.sibling),v=i(M,w.props),v.ref=Zs(E,M,w),v.return=E,E=v;break e}n(E,M);break}else e(E,M);M=M.sibling}w.type===$i?(v=ri(w.props.children,E.mode,b,w.key),v.return=E,E=v):(b=xl(w.type,w.key,w.props,null,E.mode,b),b.ref=Zs(E,v,w),b.return=E,E=b)}return o(E);case Ui:e:{for(M=w.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(E,v.sibling),v=i(v,w.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Cd(w,E.mode,b),v.return=E,E=v}return o(E);case ar:return M=w._init,k(E,v,M(w._payload),b)}if(lo(w))return T(E,v,w,b);if(Gs(w))return C(E,v,w,b);ol(E,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,w),v.return=E,E=v):(n(E,v),v=Pd(w,E.mode,b),v.return=E,E=v),o(E)):n(E,v)}return k}var hs=s0(!0),o0=s0(!1),tu=Vr(null),nu=null,Gi=null,Xf=null;function Jf(){Xf=Gi=nu=null}function Zf(t){var e=tu.current;ye(tu),t._currentValue=e}function Ch(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){nu=t,Xf=Gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Xf!==t)if(t={context:t,memoizedValue:e,next:null},Gi===null){if(nu===null)throw Error($(308));Gi=t,nu.dependencies={lanes:0,firstContext:t}}else Gi=Gi.next=t;return e}var Jr=null;function ep(t){Jr===null?Jr=[t]:Jr.push(t)}function a0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ep(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,ep(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}function cv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,C=a;switch(p=e,g=n,C.tag){case 1:if(T=C.payload,typeof T=="function"){f=T.call(g,f,p);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=C.payload,p=typeof T=="function"?T.call(g,f,p):T,p==null)break e;f=Ie({},f,p);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,u=f):h=h.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=f}}function dv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ga={},fn=Vr(ga),zo=Vr(ga),Wo=Vr(ga);function Zr(t){if(t===ga)throw Error($(174));return t}function np(t,e){switch(pe(Wo,e),pe(zo,t),pe(fn,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ah(e,t)}ye(fn),pe(fn,e)}function fs(){ye(fn),ye(zo),ye(Wo)}function u0(t){Zr(Wo.current);var e=Zr(fn.current),n=ah(e,t.type);e!==n&&(pe(zo,t),pe(fn,n))}function rp(t){zo.current===t&&(ye(fn),ye(zo))}var Ee=Vr(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wd=[];function ip(){for(var t=0;t<wd.length;t++)wd[t]._workInProgressVersionPrimary=null;wd.length=0}var Pl=Xn.ReactCurrentDispatcher,Ed=Xn.ReactCurrentBatchConfig,ai=0,Te=null,Me=null,Be=null,su=!1,To=!1,Ho=0,Xk=0;function it(){throw Error($(321))}function sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function op(t,e,n,r,i,s){if(ai=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?tP:nP,t=n(r,i),To){s=0;do{if(To=!1,Ho=0,25<=s)throw Error($(301));s+=1,Be=Me=null,e.updateQueue=null,Pl.current=rP,t=n(r,i)}while(To)}if(Pl.current=ou,e=Me!==null&&Me.next!==null,ai=0,Be=Me=Te=null,su=!1,e)throw Error($(300));return t}function ap(){var t=Ho!==0;return Ho=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=t:Be=Be.next=t,Be}function zt(){if(Me===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Be===null?Te.memoizedState:Be.next;if(e!==null)Be=e,Me=t;else{if(t===null)throw Error($(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?Te.memoizedState=Be=t:Be=Be.next=t}return Be}function qo(t,e){return typeof e=="function"?e(t):e}function Td(t){var e=zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((ai&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Te.lanes|=h,li|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Zt(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sd(t){var e=zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Zt(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function c0(){}function d0(t,e){var n=Te,r=zt(),i=e(),s=!Zt(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,lp(p0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ko(9,f0.bind(null,n,r,i,e),void 0,null),ze===null)throw Error($(349));ai&30||h0(n,e,i)}return i}function h0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f0(t,e,n,r){e.value=n,e.getSnapshot=r,m0(e)&&g0(t)}function p0(t,e,n){return n(function(){m0(e)&&g0(t)})}function m0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function g0(t){var e=Wn(t,1);e!==null&&Jt(e,t,1,-1)}function hv(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},e.queue=t,t=t.dispatch=eP.bind(null,Te,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function v0(){return zt().memoizedState}function Cl(t,e,n,r){var i=sn();Te.flags|=t,i.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function Gu(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&sp(r,o.deps)){i.memoizedState=Ko(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Ko(1|e,n,s,r)}function fv(t,e){return Cl(8390656,8,t,e)}function lp(t,e){return Gu(2048,8,t,e)}function y0(t,e){return Gu(4,2,t,e)}function _0(t,e){return Gu(4,4,t,e)}function w0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E0(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4,4,w0.bind(null,e,t),n)}function up(){}function T0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function S0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function I0(t,e,n){return ai&21?(Zt(n,e)||(n=Rw(),Te.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function Jk(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Ed.transition;Ed.transition={};try{t(!1),e()}finally{le=n,Ed.transition=r}}function k0(){return zt().memoizedState}function Zk(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P0(t))C0(e,n);else if(n=a0(t,e,n,r),n!==null){var i=gt();Jt(n,t,r,i),A0(n,e,r)}}function eP(t,e,n){var r=Pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P0(t))C0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Zt(a,o)){var u=e.interleaved;u===null?(i.next=i,ep(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=a0(t,e,i,r),n!==null&&(i=gt(),Jt(n,t,r,i),A0(n,e,r))}}function P0(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function C0(t,e){To=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function A0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}var ou={readContext:Bt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},tP={readContext:Bt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:fv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,w0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Zk.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:hv,useDebugValue:up,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=hv(!1),e=t[0];return t=Jk.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=sn();if(we){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),ze===null)throw Error($(349));ai&30||h0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fv(p0.bind(null,r,s,t),[t]),r.flags|=2048,Ko(9,f0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=ze.identifierPrefix;if(we){var n=Ln,r=Dn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nP={readContext:Bt,useCallback:T0,useContext:Bt,useEffect:lp,useImperativeHandle:E0,useInsertionEffect:y0,useLayoutEffect:_0,useMemo:S0,useReducer:Td,useRef:v0,useState:function(){return Td(qo)},useDebugValue:up,useDeferredValue:function(t){var e=zt();return I0(e,Me.memoizedState,t)},useTransition:function(){var t=Td(qo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:d0,useId:k0,unstable_isNewReconciler:!1},rP={readContext:Bt,useCallback:T0,useContext:Bt,useEffect:lp,useImperativeHandle:E0,useInsertionEffect:y0,useLayoutEffect:_0,useMemo:S0,useReducer:Sd,useRef:v0,useState:function(){return Sd(qo)},useDebugValue:up,useDeferredValue:function(t){var e=zt();return Me===null?e.memoizedState=t:I0(e,Me.memoizedState,t)},useTransition:function(){var t=Sd(qo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:d0,useId:k0,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qu={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Pr(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(Jt(e,t,i,r),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Pr(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(Jt(e,t,i,r),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=Pr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ir(t,i,r),e!==null&&(Jt(e,t,r,n),kl(e,t,r))}};function pv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Uo(n,r)||!Uo(i,s):!0}function R0(t,e,n){var r=!1,i=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=St(e)?si:dt.current,r=e.contextTypes,s=(r=r!=null)?cs(t,i):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qu.enqueueReplaceState(e,e.state,null)}function Rh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},tp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=St(e)?si:dt.current,i.context=cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ah(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Qu.enqueueReplaceState(i,i.state,null),ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,e){try{var n="",r=e;do n+=xI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Id(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iP=typeof WeakMap=="function"?WeakMap:Map;function b0(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,$h=r),bh(t,e)},n}function x0(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bh(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yP.bind(null,t,e,n),e.then(t,t))}function vv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var sP=Xn.ReactCurrentOwner,Et=!1;function mt(t,e,n,r){e.child=t===null?o0(e,null,n,r):hs(e,t.child,n,r)}function _v(t,e,n,r,i){n=n.render;var s=e.ref;return ns(e,i),r=op(t,e,n,r,s,i),n=ap(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(we&&n&&Gf(e),e.flags|=1,mt(t,e,r,i),e.child)}function wv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,N0(t,e,s,r,i)):(t=xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function N0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Uo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return xh(t,e,n,r,i)}function O0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Yi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Yi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Yi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Yi,At),At|=r;return mt(t,e,i,n),e.child}function D0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xh(t,e,n,r,i){var s=St(n)?si:dt.current;return s=cs(e,s),ns(e,i),n=op(t,e,n,r,s,i),r=ap(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(we&&r&&Gf(e),e.flags|=1,mt(t,e,n,i),e.child)}function Ev(t,e,n,r,i){if(St(n)){var s=!0;Jl(e)}else s=!1;if(ns(e,i),e.stateNode===null)Al(t,e),R0(e,n,r),Rh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=St(n)?si:dt.current,c=cs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&mv(e,o,r,c),lr=!1;var p=e.memoizedState;o.state=p,ru(e,r,o,i),u=e.memoizedState,a!==r||p!==u||Tt.current||lr?(typeof h=="function"&&(Ah(e,n,h,r),u=e.memoizedState),(a=lr||pv(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,l0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kt(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=St(n)?si:dt.current,u=cs(e,u));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&mv(e,o,r,u),lr=!1,p=e.memoizedState,o.state=p,ru(e,r,o,i);var T=e.memoizedState;a!==f||p!==T||Tt.current||lr?(typeof g=="function"&&(Ah(e,n,g,r),T=e.memoizedState),(c=lr||pv(e,n,c,r,p,T,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Nh(t,e,n,r,s,i)}function Nh(t,e,n,r,i,s){D0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ov(e,n,!1),Hn(t,e,s);r=e.stateNode,sP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,a,s)):mt(t,e,a,s),e.memoizedState=r.state,i&&ov(e,n,!0),e.child}function L0(t){var e=t.stateNode;e.pendingContext?sv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sv(t,e.context,!1),np(t,e.containerInfo)}function Tv(t,e,n,r,i){return ds(),Yf(i),e.flags|=256,mt(t,e,n,r),e.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function Dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function M0(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ee,i&1),t===null)return Ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ju(o,r,0,null),t=ri(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dh(n),e.memoizedState=Oh,t):cp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=ri(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Dh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Oh,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cp(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&Yf(r),hs(e,t.child,null,n),t=cp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Id(Error($(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ju({mode:"visible",children:r.children},i,0,null),s=ri(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=Dh(o),e.memoizedState=Oh,s);if(!(e.mode&1))return al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Id(s,r,void 0),al(t,e,o,r)}if(a=(o&t.childLanes)!==0,Et||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),Jt(r,t,i,-1))}return gp(),r=Id(Error($(421))),al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_P.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=Sr(i.nextSibling),xt=e,we=!0,Qt=null,t!==null&&(Ft[Ut++]=Dn,Ft[Ut++]=Ln,Ft[Ut++]=oi,Dn=t.id,Ln=t.overflow,oi=e),e=cp(e,r.children),e.flags|=4096,e)}function Sv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ch(t.return,e,n)}function kd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function V0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sv(t,n,e);else if(t.tag===19)Sv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kd(e,!0,n,null,s);break;case"together":kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aP(t,e,n){switch(e.tag){case 3:L0(e),ds();break;case 5:u0(e);break;case 1:St(e.type)&&Jl(e);break;case 4:np(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?M0(t,e,n):(pe(Ee,Ee.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);pe(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return V0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,O0(t,e,n)}return Hn(t,e,n)}var F0,Lh,U0,$0;F0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};U0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(fn.current);var s=null;switch(n){case"input":i=rh(t,i),r=rh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=oh(t,i),r=oh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}lh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(No.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(No.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$0=function(t,e,n,r){n!==r&&(e.flags|=4)};function eo(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lP(t,e,n){var r=e.pendingProps;switch(Qf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return St(e.type)&&Xl(),st(e),null;case 3:return r=e.stateNode,fs(),ye(Tt),ye(dt),ip(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(zh(Qt),Qt=null))),Lh(t,e),st(e),null;case 5:rp(e);var i=Zr(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)U0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return st(e),null}if(t=Zr(fn.current),sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[Bo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)ve(co[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Ng(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Dg(r,s),ve("invalid",r)}lh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,t),i=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ya(r),Og(r,s,!0);break;case"textarea":Ya(r),Lg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[Bo]=r,F0(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)ve(co[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Ng(t,r),i=rh(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Dg(t,r),i=oh(t,r),ve("invalid",t);break;default:i=r}lh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?vw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&mw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Oo(t,u):typeof u=="number"&&Oo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&Df(t,s,u,o))}switch(n){case"input":Ya(t),Og(t,r,!1);break;case"textarea":Ya(t),Lg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ji(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)$0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Zr(Wo.current),Zr(fn.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return st(e),null;case 13:if(ye(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Rt!==null&&e.mode&1&&!(e.flags&128))i0(),ds(),e.flags|=98560,s=!1;else if(s=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[on]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Qt!==null&&(zh(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Ue===0&&(Ue=3):gp())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return fs(),Lh(t,e),t===null&&$o(e.stateNode.containerInfo),st(e),null;case 10:return Zf(e.type._context),st(e),null;case 17:return St(e.type)&&Xl(),st(e),null;case 19:if(ye(Ee),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)eo(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,eo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>ms&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return st(e),null}else 2*xe()-s.renderingStartTime>ms&&n!==1073741824&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=Ee.current,pe(Ee,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return mp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function uP(t,e){switch(Qf(e),e.tag){case 1:return St(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),ye(Tt),ye(dt),ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rp(e),null;case 13:if(ye(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ee),null;case 4:return fs(),null;case 10:return Zf(e.type._context),null;case 22:case 23:return mp(),null;case 24:return null;default:return null}}var ll=!1,ut=!1,cP=typeof WeakSet=="function"?WeakSet:Set,z=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function Mh(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Iv=!1;function dP(t,e){if(_h=Kl,t=Hw(),Kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:t,selectionRange:n},Kl=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var C=T.memoizedProps,k=T.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?C:Kt(e.type,C),k);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){Ce(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return T=Iv,Iv=!1,T}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mh(e,n,s)}i=i.next}while(i!==r)}}function Yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j0(t){var e=t.alternate;e!==null&&(t.alternate=null,j0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[Bo],delete e[Sh],delete e[Kk],delete e[Gk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B0(t){return t.tag===5||t.tag===3||t.tag===4}function kv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}function Uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}var Ke=null,Gt=!1;function ir(t,e,n){for(n=n.child;n!==null;)z0(t,e,n),n=n.sibling}function z0(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:ut||Qi(n,e);case 6:var r=Ke,i=Gt;Ke=null,ir(t,e,n),Ke=r,Gt=i,Ke!==null&&(Gt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Gt?(t=Ke,n=n.stateNode,t.nodeType===8?yd(t.parentNode,n):t.nodeType===1&&yd(t,n),Vo(t)):yd(Ke,n.stateNode));break;case 4:r=Ke,i=Gt,Ke=n.stateNode.containerInfo,Gt=!0,ir(t,e,n),Ke=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mh(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!ut&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,ir(t,e,n),ut=r):ir(t,e,n);break;default:ir(t,e,n)}}function Pv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cP),e.forEach(function(r){var i=wP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ke=a.stateNode,Gt=!1;break e;case 3:Ke=a.stateNode.containerInfo,Gt=!0;break e;case 4:Ke=a.stateNode.containerInfo,Gt=!0;break e}a=a.return}if(Ke===null)throw Error($(160));z0(s,o,i),Ke=null,Gt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W0(e,t),e=e.sibling}function W0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),rn(t),r&4){try{So(3,t,t.return),Yu(3,t)}catch(C){Ce(t,t.return,C)}try{So(5,t,t.return)}catch(C){Ce(t,t.return,C)}}break;case 1:qt(e,t),rn(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(qt(e,t),rn(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{Oo(i,"")}catch(C){Ce(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hw(i,s),uh(a,o);var c=uh(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?vw(i,f):h==="dangerouslySetInnerHTML"?mw(i,f):h==="children"?Oo(i,f):Df(i,h,f,c)}switch(a){case"input":ih(i,s);break;case"textarea":fw(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ji(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ji(i,!!s.multiple,s.defaultValue,!0):Ji(i,!!s.multiple,s.multiple?[]:"",!1))}i[Bo]=s}catch(C){Ce(t,t.return,C)}}break;case 6:if(qt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Ce(t,t.return,C)}}break;case 3:if(qt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(C){Ce(t,t.return,C)}break;case 4:qt(e,t),rn(t);break;case 13:qt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fp=xe())),r&4&&Pv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(c=ut)||h,qt(e,t),ut=c):qt(e,t),rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(z=t,h=t.child;h!==null;){for(f=z=h;z!==null;){switch(p=z,g=p.child,p.tag){case 0:case 11:case 14:case 15:So(4,p,p.return);break;case 1:Qi(p,p.return);var T=p.stateNode;if(typeof T.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(C){Ce(r,n,C)}}break;case 5:Qi(p,p.return);break;case 22:if(p.memoizedState!==null){Av(f);continue}}g!==null?(g.return=p,z=g):Av(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=gw("display",o))}catch(C){Ce(t,t.return,C)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){Ce(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qt(e,t),rn(t),r&4&&Pv(t);break;case 21:break;default:qt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oo(i,""),r.flags&=-33);var s=kv(t);Uh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=kv(t);Fh(t,a,o);break;default:throw Error($(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hP(t,e,n){z=t,H0(t)}function H0(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ut;a=ll;var c=ut;if(ll=o,(ut=u)&&!c)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?Rv(i):u!==null?(u.return=o,z=u):Rv(i);for(;s!==null;)z=s,H0(s),s=s.sibling;z=i,ll=a,ut=c}Cv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Cv(t)}}function Cv(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}ut||e.flags&512&&Vh(e)}catch(p){Ce(e,e.return,p)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Av(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function Rv(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yu(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{Vh(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{Vh(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var fP=Math.ceil,au=Xn.ReactCurrentDispatcher,dp=Xn.ReactCurrentOwner,jt=Xn.ReactCurrentBatchConfig,ie=0,ze=null,De=null,Ye=0,At=0,Yi=Vr(0),Ue=0,Go=null,li=0,Xu=0,hp=0,Io=null,_t=null,fp=0,ms=1/0,xn=null,lu=!1,$h=null,kr=null,ul=!1,vr=null,uu=0,ko=0,jh=null,Rl=-1,bl=0;function gt(){return ie&6?xe():Rl!==-1?Rl:Rl=xe()}function Pr(t){return t.mode&1?ie&2&&Ye!==0?Ye&-Ye:Yk.transition!==null?(bl===0&&(bl=Rw()),bl):(t=le,t!==0||(t=window.event,t=t===void 0?16:Mw(t.type)),t):1}function Jt(t,e,n,r){if(50<ko)throw ko=0,jh=null,Error($(185));fa(t,n,r),(!(ie&2)||t!==ze)&&(t===ze&&(!(ie&2)&&(Xu|=n),Ue===4&&cr(t,Ye)),It(t,r),n===1&&ie===0&&!(e.mode&1)&&(ms=xe()+500,Ku&&Fr()))}function It(t,e){var n=t.callbackNode;YI(t,e);var r=ql(t,t===ze?Ye:0);if(r===0)n!==null&&Fg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fg(n),e===1)t.tag===0?Qk(bv.bind(null,t)):t0(bv.bind(null,t)),Hk(function(){!(ie&6)&&Fr()}),n=null;else{switch(bw(r)){case 1:n=Uf;break;case 4:n=Cw;break;case 16:n=Hl;break;case 536870912:n=Aw;break;default:n=Hl}n=Z0(n,q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q0(t,e){if(Rl=-1,bl=0,ie&6)throw Error($(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var r=ql(t,t===ze?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var i=ie;ie|=2;var s=G0();(ze!==t||Ye!==e)&&(xn=null,ms=xe()+500,ni(t,e));do try{gP();break}catch(a){K0(t,a)}while(!0);Jf(),au.current=s,ie=i,De!==null?e=0:(ze=null,Ye=0,e=Ue)}if(e!==0){if(e===2&&(i=ph(t),i!==0&&(r=i,e=Bh(t,i))),e===1)throw n=Go,ni(t,0),cr(t,r),It(t,xe()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!pP(i)&&(e=cu(t,r),e===2&&(s=ph(t),s!==0&&(r=s,e=Bh(t,s))),e===1))throw n=Go,ni(t,0),cr(t,r),It(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Gr(t,_t,xn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=fp+500-xe(),10<e)){if(ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Th(Gr.bind(null,t,_t,xn),e);break}Gr(t,_t,xn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fP(r/1960))-r,10<r){t.timeoutHandle=Th(Gr.bind(null,t,_t,xn),r);break}Gr(t,_t,xn);break;case 5:Gr(t,_t,xn);break;default:throw Error($(329))}}}return It(t,xe()),t.callbackNode===n?q0.bind(null,t):null}function Bh(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(ni(t,e).flags|=256),t=cu(t,e),t!==2&&(e=_t,_t=n,e!==null&&zh(e)),t}function zh(t){_t===null?_t=t:_t.push.apply(_t,t)}function pP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~hp,e&=~Xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function bv(t){if(ie&6)throw Error($(327));rs();var e=ql(t,0);if(!(e&1))return It(t,xe()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=ph(t);r!==0&&(e=r,n=Bh(t,r))}if(n===1)throw n=Go,ni(t,0),cr(t,e),It(t,xe()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,_t,xn),It(t,xe()),null}function pp(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(ms=xe()+500,Ku&&Fr())}}function ui(t){vr!==null&&vr.tag===0&&!(ie&6)&&rs();var e=ie;ie|=1;var n=jt.transition,r=le;try{if(jt.transition=null,le=1,t)return t()}finally{le=r,jt.transition=n,ie=e,!(ie&6)&&Fr()}}function mp(){At=Yi.current,ye(Yi)}function ni(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wk(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Qf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:fs(),ye(Tt),ye(dt),ip();break;case 5:rp(r);break;case 4:fs();break;case 13:ye(Ee);break;case 19:ye(Ee);break;case 10:Zf(r.type._context);break;case 22:case 23:mp()}n=n.return}if(ze=t,De=t=Cr(t.current,null),Ye=At=e,Ue=0,Go=null,hp=Xu=li=0,_t=Io=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function K0(t,e){do{var n=De;try{if(Jf(),Pl.current=ou,su){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}su=!1}if(ai=0,Be=Me=Te=null,To=!1,Ho=0,dp.current=null,n===null||n.return===null){Ue=1,Go=e,De=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ye,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=vv(o);if(g!==null){g.flags&=-257,yv(g,o,a,s,e),g.mode&1&&gv(s,c,e),e=g,u=c;var T=e.updateQueue;if(T===null){var C=new Set;C.add(u),e.updateQueue=C}else T.add(u);break e}else{if(!(e&1)){gv(s,c,e),gp();break e}u=Error($(426))}}else if(we&&a.mode&1){var k=vv(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yv(k,o,a,s,e),Yf(ps(u,a));break e}}s=u=ps(u,a),Ue!==4&&(Ue=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=b0(s,u,e);cv(s,E);break e;case 1:a=u;var v=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(kr===null||!kr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=x0(s,a,e);cv(s,b);break e}}s=s.return}while(s!==null)}Y0(n)}catch(L){e=L,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function G0(){var t=au.current;return au.current=ou,t===null?ou:t}function gp(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),ze===null||!(li&268435455)&&!(Xu&268435455)||cr(ze,Ye)}function cu(t,e){var n=ie;ie|=2;var r=G0();(ze!==t||Ye!==e)&&(xn=null,ni(t,e));do try{mP();break}catch(i){K0(t,i)}while(!0);if(Jf(),ie=n,au.current=r,De!==null)throw Error($(261));return ze=null,Ye=0,Ue}function mP(){for(;De!==null;)Q0(De)}function gP(){for(;De!==null&&!jI();)Q0(De)}function Q0(t){var e=J0(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?Y0(t):De=e,dp.current=null}function Y0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uP(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,De=null;return}}else if(n=lP(n,e,At),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Ue===0&&(Ue=5)}function Gr(t,e,n){var r=le,i=jt.transition;try{jt.transition=null,le=1,vP(t,e,n,r)}finally{jt.transition=i,le=r}return null}function vP(t,e,n,r){do rs();while(vr!==null);if(ie&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XI(t,s),t===ze&&(De=ze=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Z0(Hl,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=le;le=1;var a=ie;ie|=4,dp.current=null,dP(t,n),W0(n,t),Vk(wh),Kl=!!_h,wh=_h=null,t.current=n,hP(n),BI(),ie=a,le=o,jt.transition=s}else t.current=n;if(ul&&(ul=!1,vr=t,uu=i),s=t.pendingLanes,s===0&&(kr=null),HI(n.stateNode),It(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lu)throw lu=!1,t=$h,$h=null,t;return uu&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===jh?ko++:(ko=0,jh=t):ko=0,Fr(),null}function rs(){if(vr!==null){var t=bw(uu),e=jt.transition,n=le;try{if(jt.transition=null,le=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,uu=0,ie&6)throw Error($(331));var i=ie;for(ie|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(z=c;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:So(8,h,s)}var f=h.child;if(f!==null)f.return=h,z=f;else for(;z!==null;){h=z;var p=h.sibling,g=h.return;if(j0(h),h===c){z=null;break}if(p!==null){p.return=g,z=p;break}z=g}}}var T=s.alternate;if(T!==null){var C=T.child;if(C!==null){T.child=null;do{var k=C.sibling;C.sibling=null,C=k}while(C!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,z=E;break e}z=s.return}}var v=t.current;for(z=v;z!==null;){o=z;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,z=w;else e:for(o=v;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yu(9,a)}}catch(L){Ce(a,a.return,L)}if(a===o){z=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,z=b;break e}z=a.return}}if(ie=i,Fr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Bu,t)}catch{}r=!0}return r}finally{le=n,jt.transition=e}}return!1}function xv(t,e,n){e=ps(n,e),e=b0(t,e,1),t=Ir(t,e,1),e=gt(),t!==null&&(fa(t,1,e),It(t,e))}function Ce(t,e,n){if(t.tag===3)xv(t,t,n);else for(;e!==null;){if(e.tag===3){xv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=ps(n,t),t=x0(e,t,1),e=Ir(e,t,1),t=gt(),e!==null&&(fa(e,1,t),It(e,t));break}}e=e.return}}function yP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ye&n)===n&&(Ue===4||Ue===3&&(Ye&130023424)===Ye&&500>xe()-fp?ni(t,0):hp|=n),It(t,e)}function X0(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=gt();t=Wn(t,e),t!==null&&(fa(t,e,n),It(t,n))}function _P(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X0(t,n)}function wP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),X0(t,n)}var J0;J0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,aP(t,e,n);Et=!!(t.flags&131072)}else Et=!1,we&&e.flags&1048576&&n0(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Al(t,e),t=e.pendingProps;var i=cs(e,dt.current);ns(e,n),i=op(null,e,r,t,i,n);var s=ap();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,Jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tp(e),i.updater=Qu,e.stateNode=i,i._reactInternals=e,Rh(e,r,t,n),e=Nh(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Gf(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TP(r),t=Kt(r,t),i){case 0:e=xh(null,e,r,t,n);break e;case 1:e=Ev(null,e,r,t,n);break e;case 11:e=_v(null,e,r,t,n);break e;case 14:e=wv(null,e,r,Kt(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),xh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Ev(t,e,r,i,n);case 3:e:{if(L0(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,l0(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ps(Error($(423)),e),e=Tv(t,e,r,n,i);break e}else if(r!==i){i=ps(Error($(424)),e),e=Tv(t,e,r,n,i);break e}else for(Rt=Sr(e.stateNode.containerInfo.firstChild),xt=e,we=!0,Qt=null,n=o0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),r===i){e=Hn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return u0(e),t===null&&Ph(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Eh(r,i)?o=null:s!==null&&Eh(r,s)&&(e.flags|=32),D0(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Ph(e),null;case 13:return M0(t,e,n);case 4:return np(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hs(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),_v(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(tu,r._currentValue),r._currentValue=o,s!==null)if(Zt(s.value,o)){if(s.children===i.children&&!Tt.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ch(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ch(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ns(e,n),i=Bt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),wv(t,e,r,i,n);case 15:return N0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Al(t,e),e.tag=1,St(r)?(t=!0,Jl(e)):t=!1,ns(e,n),R0(e,r,i),Rh(e,r,i,n),Nh(null,e,r,!0,t,n);case 19:return V0(t,e,n);case 22:return O0(t,e,n)}throw Error($(156,e.tag))};function Z0(t,e){return Pw(t,e)}function EP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new EP(t,e,n,r)}function vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TP(t){if(typeof t=="function")return vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mf)return 11;if(t===Vf)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $i:return ri(n.children,i,s,e);case Lf:o=8,i|=8;break;case Zd:return t=$t(12,n,e,i|2),t.elementType=Zd,t.lanes=s,t;case eh:return t=$t(13,n,e,i),t.elementType=eh,t.lanes=s,t;case th:return t=$t(19,n,e,i),t.elementType=th,t.lanes=s,t;case uw:return Ju(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case aw:o=10;break e;case lw:o=9;break e;case Mf:o=11;break e;case Vf:o=14;break e;case ar:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=$t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ri(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function Ju(t,e,n,r){return t=$t(22,t,r,e),t.elementType=uw,t.lanes=n,t.stateNode={isHidden:!1},t}function Pd(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function Cd(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ad(0),this.expirationTimes=ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ad(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yp(t,e,n,r,i,s,o,a,u){return t=new SP(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(s),t}function IP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function eE(t){if(!t)return Nr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(St(n))return e0(t,n,e)}return e}function tE(t,e,n,r,i,s,o,a,u){return t=yp(n,r,!0,t,i,s,o,a,u),t.context=eE(null),n=t.current,r=gt(),i=Pr(n),s=Un(r,i),s.callback=e??null,Ir(n,s,i),t.current.lanes=i,fa(t,i,r),It(t,r),t}function Zu(t,e,n,r){var i=e.current,s=gt(),o=Pr(i);return n=eE(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(i,e,o),t!==null&&(Jt(t,i,o,s),kl(t,i,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _p(t,e){Nv(t,e),(t=t.alternate)&&Nv(t,e)}function kP(){return null}var nE=typeof reportError=="function"?reportError:function(t){console.error(t)};function wp(t){this._internalRoot=t}ec.prototype.render=wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Zu(t,e,null,null)};ec.prototype.unmount=wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){Zu(null,t,null,null)}),e[zn]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ow();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&Lw(t)}};function Ep(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ov(){}function PP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=du(o);s.call(c)}}var o=tE(e,r,t,0,null,!1,!1,"",Ov);return t._reactRootContainer=o,t[zn]=o.current,$o(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=du(u);a.call(c)}}var u=yp(t,0,!1,null,null,!1,!1,"",Ov);return t._reactRootContainer=u,t[zn]=u.current,$o(t.nodeType===8?t.parentNode:t),ui(function(){Zu(e,u,n,r)}),u}function nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=du(o);a.call(u)}}Zu(e,o,t,i)}else o=PP(n,e,t,i,r);return du(o)}xw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&($f(e,n|1),It(e,xe()),!(ie&6)&&(ms=xe()+500,Fr()))}break;case 13:ui(function(){var r=Wn(t,1);if(r!==null){var i=gt();Jt(r,t,1,i)}}),_p(t,1)}};jf=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=gt();Jt(e,t,134217728,n)}_p(t,134217728)}};Nw=function(t){if(t.tag===13){var e=Pr(t),n=Wn(t,e);if(n!==null){var r=gt();Jt(n,t,e,r)}_p(t,e)}};Ow=function(){return le};Dw=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};dh=function(t,e,n){switch(e){case"input":if(ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qu(r);if(!i)throw Error($(90));dw(r),ih(r,i)}}}break;case"textarea":fw(t,n);break;case"select":e=n.value,e!=null&&Ji(t,!!n.multiple,e,!1)}};ww=pp;Ew=ui;var CP={usingClientEntryPoint:!1,Events:[ma,Wi,qu,yw,_w,pp]},to={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AP={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Iw(t),t===null?null:t.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||kP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Bu=cl.inject(AP),hn=cl}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CP;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ep(e))throw Error($(200));return IP(t,e,null,n)};Lt.createRoot=function(t,e){if(!Ep(t))throw Error($(299));var n=!1,r="",i=nE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yp(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,$o(t.nodeType===8?t.parentNode:t),new wp(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=Iw(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return ui(t)};Lt.hydrate=function(t,e,n){if(!tc(e))throw Error($(200));return nc(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Ep(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=nE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tE(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,$o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ec(e)};Lt.render=function(t,e,n){if(!tc(e))throw Error($(200));return nc(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!tc(t))throw Error($(40));return t._reactRootContainer?(ui(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Lt.unstable_batchedUpdates=pp;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!tc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return nc(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function rE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rE)}catch(t){console.error(t)}}rE(),rw.exports=Lt;var RP=rw.exports,Dv=RP;Xd.createRoot=Dv.createRoot,Xd.hydrateRoot=Dv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const Lv="popstate";function bP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Wh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hu(i)}return NP(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function iE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xP(){return Math.random().toString(36).substr(2,8)}function Mv(t,e){return{usr:t.state,key:t.key,idx:e}}function Wh(t,e,n,r){return n===void 0&&(n=null),Qo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?As(e):e,{state:n,key:e&&e.key||r||xP()})}function hu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function As(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function NP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=yr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Qo({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=yr.Pop;let k=h(),E=k==null?null:k-c;c=k,u&&u({action:a,location:C.location,delta:E})}function p(k,E){a=yr.Push;let v=Wh(C.location,k,E);c=h()+1;let w=Mv(v,c),b=C.createHref(v);try{o.pushState(w,"",b)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(b)}s&&u&&u({action:a,location:C.location,delta:1})}function g(k,E){a=yr.Replace;let v=Wh(C.location,k,E);c=h();let w=Mv(v,c),b=C.createHref(v);o.replaceState(w,"",b),s&&u&&u({action:a,location:C.location,delta:0})}function T(k){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof k=="string"?k:hu(k);return v=v.replace(/ $/,"%20"),Se(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let C={get action(){return a},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Lv,f),u=k,()=>{i.removeEventListener(Lv,f),u=null}},createHref(k){return e(i,k)},createURL:T,encodeLocation(k){let E=T(k);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:p,replace:g,go(k){return o.go(k)}};return C}var Vv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vv||(Vv={}));function OP(t,e,n){return n===void 0&&(n="/"),DP(t,e,n)}function DP(t,e,n,r){let i=typeof e=="string"?As(e):e,s=gs(i.pathname||"/",n);if(s==null)return null;let o=sE(t);LP(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=qP(s);a=WP(o[u],c)}return a}function sE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Se(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ar([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sE(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:BP(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of oE(s.path))i(s,o,u)}),e}function oE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=oE(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function LP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MP=/^:[\w-]+$/,VP=3,FP=2,UP=1,$P=10,jP=-2,Fv=t=>t==="*";function BP(t,e){let n=t.split("/"),r=n.length;return n.some(Fv)&&(r+=jP),e&&(r+=FP),n.filter(i=>!Fv(i)).reduce((i,s)=>i+(MP.test(s)?VP:s===""?UP:$P),r)}function zP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WP(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=Hh({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ar([s,f.pathname]),pathnameBase:YP(Ar([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ar([s,f.pathnameBase]))}return o}function Hh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=HP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:g}=h;if(p==="*"){let C=a[f]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const T=a[f];return g&&!T?c[p]=void 0:c[p]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function HP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),iE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function qP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return iE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function gs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function KP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?As(t):t;return{pathname:n?n.startsWith("/")?n:GP(n,e):e,search:XP(r),hash:JP(i)}}function GP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ad(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Tp(t,e){let n=QP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=As(t):(i=Qo({},t),Se(!i.pathname||!i.pathname.includes("?"),Ad("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Ad("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Ad("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=KP(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ar=t=>t.join("/").replace(/\/\/+/g,"/"),YP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),XP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,JP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const aE=["post","put","patch","delete"];new Set(aE);const eC=["get",...aE];new Set(eC);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yo.apply(this,arguments)}const rc=O.createContext(null),lE=O.createContext(null),Jn=O.createContext(null),ic=O.createContext(null),Tn=O.createContext({outlet:null,matches:[],isDataRoute:!1}),uE=O.createContext(null);function tC(t,e){let{relative:n}=e===void 0?{}:e;Rs()||Se(!1);let{basename:r,navigator:i}=O.useContext(Jn),{hash:s,pathname:o,search:a}=sc(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ar([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Rs(){return O.useContext(ic)!=null}function Ti(){return Rs()||Se(!1),O.useContext(ic).location}function cE(t){O.useContext(Jn).static||O.useLayoutEffect(t)}function dE(){let{isDataRoute:t}=O.useContext(Tn);return t?gC():nC()}function nC(){Rs()||Se(!1);let t=O.useContext(rc),{basename:e,future:n,navigator:r}=O.useContext(Jn),{matches:i}=O.useContext(Tn),{pathname:s}=Ti(),o=JSON.stringify(Tp(i,n.v7_relativeSplatPath)),a=O.useRef(!1);return cE(()=>{a.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Sp(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ar([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}const rC=O.createContext(null);function iC(t){let e=O.useContext(Tn).outlet;return e&&O.createElement(rC.Provider,{value:t},e)}function n$(){let{matches:t}=O.useContext(Tn),e=t[t.length-1];return e?e.params:{}}function sc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Jn),{matches:i}=O.useContext(Tn),{pathname:s}=Ti(),o=JSON.stringify(Tp(i,r.v7_relativeSplatPath));return O.useMemo(()=>Sp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function sC(t,e){return oC(t,e)}function oC(t,e,n,r){Rs()||Se(!1);let{navigator:i}=O.useContext(Jn),{matches:s}=O.useContext(Tn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ti(),h;if(e){var f;let k=typeof e=="string"?As(e):e;u==="/"||(f=k.pathname)!=null&&f.startsWith(u)||Se(!1),h=k}else h=c;let p=h.pathname||"/",g=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let T=OP(t,{pathname:g}),C=dC(T&&T.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Ar([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Ar([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&C?O.createElement(ic.Provider,{value:{location:Yo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:yr.Pop}},C):C}function aC(){let t=mC(),e=ZP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const lC=O.createElement(aC,null);class uC extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Tn.Provider,{value:this.props.routeContext},O.createElement(uE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cC(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(rc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Tn.Provider,{value:e},r)}function dC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Se(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:g}=n,T=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let g,T=!1,C=null,k=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,C=f.route.errorElement||lC,u&&(c<0&&p===0?(vC("route-fallback"),T=!0,k=null):c===p&&(T=!0,k=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,p+1)),v=()=>{let w;return g?w=C:T?w=k:f.route.Component?w=O.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=h,O.createElement(cC,{match:f,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?O.createElement(uC,{location:n.location,revalidation:n.revalidation,component:C,error:g,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var hE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(hE||{}),fE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fE||{});function hC(t){let e=O.useContext(rc);return e||Se(!1),e}function fC(t){let e=O.useContext(lE);return e||Se(!1),e}function pC(t){let e=O.useContext(Tn);return e||Se(!1),e}function pE(t){let e=pC(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function mC(){var t;let e=O.useContext(uE),n=fC(),r=pE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function gC(){let{router:t}=hC(hE.UseNavigateStable),e=pE(fE.UseNavigateStable),n=O.useRef(!1);return cE(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Yo({fromRouteId:e},s)))},[t,e])}const Uv={};function vC(t,e,n){Uv[t]||(Uv[t]=!0)}function yC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function _C(t){let{to:e,replace:n,state:r,relative:i}=t;Rs()||Se(!1);let{future:s,static:o}=O.useContext(Jn),{matches:a}=O.useContext(Tn),{pathname:u}=Ti(),c=dE(),h=Sp(e,Tp(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return O.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function wC(t){return iC(t.context)}function at(t){Se(!1)}function EC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:s,static:o=!1,future:a}=t;Rs()&&Se(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:Yo({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=As(r));let{pathname:h="/",search:f="",hash:p="",state:g=null,key:T="default"}=r,C=O.useMemo(()=>{let k=gs(h,u);return k==null?null:{location:{pathname:k,search:f,hash:p,state:g,key:T},navigationType:i}},[u,h,f,p,g,T,i]);return C==null?null:O.createElement(Jn.Provider,{value:c},O.createElement(ic.Provider,{children:n,value:C}))}function TC(t){let{children:e,location:n}=t;return sC(qh(e),n)}new Promise(()=>{});function qh(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,qh(r.props.children,s));return}r.type!==at&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=qh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fu(){return fu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fu.apply(this,arguments)}function mE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function SC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IC(t,e){return t.button===0&&(!e||e==="_self")&&!SC(t)}const kC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],PC=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],CC="6";try{window.__reactRouterVersion=CC}catch{}const AC=O.createContext({isTransitioning:!1}),RC="startTransition",$v=yI[RC];function bC(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=bP({window:i,v5Compat:!0}));let o=s.current,[a,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=O.useCallback(f=>{c&&$v?$v(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.useEffect(()=>yC(r),[r]),O.createElement(EC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const xC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Li=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=e,p=mE(e,kC),{basename:g}=O.useContext(Jn),T,C=!1;if(typeof c=="string"&&NC.test(c)&&(T=c,xC))try{let w=new URL(window.location.href),b=c.startsWith("//")?new URL(w.protocol+c):new URL(c),L=gs(b.pathname,g);b.origin===w.origin&&L!=null?c=L+b.search+b.hash:C=!0}catch{}let k=tC(c,{relative:i}),E=DC(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:f});function v(w){r&&r(w),w.defaultPrevented||E(w)}return O.createElement("a",fu({},p,{href:T||k,onClick:C||s?r:v,ref:n,target:u}))}),jv=O.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:c,children:h}=e,f=mE(e,PC),p=sc(u,{relative:f.relative}),g=Ti(),T=O.useContext(lE),{navigator:C,basename:k}=O.useContext(Jn),E=T!=null&&LC(p)&&c===!0,v=C.encodeLocation?C.encodeLocation(p).pathname:p.pathname,w=g.pathname,b=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;i||(w=w.toLowerCase(),b=b?b.toLowerCase():null,v=v.toLowerCase()),b&&k&&(b=gs(b,k)||b);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let M=w===v||!o&&w.startsWith(v)&&w.charAt(L)==="/",S=b!=null&&(b===v||!o&&b.startsWith(v)&&b.charAt(v.length)==="/"),_={isActive:M,isPending:S,isTransitioning:E},I=M?r:void 0,P;typeof s=="function"?P=s(_):P=[s,M?"active":null,S?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(_):a;return O.createElement(Li,fu({},f,{"aria-current":I,className:P,ref:n,style:R,to:u,viewTransition:c}),typeof h=="function"?h(_):h)});var Kh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Kh||(Kh={}));var Bv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Bv||(Bv={}));function OC(t){let e=O.useContext(rc);return e||Se(!1),e}function DC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=dE(),c=Ti(),h=sc(t,{relative:o});return O.useCallback(f=>{if(IC(f,n)){f.preventDefault();let p=r!==void 0?r:hu(c)===hu(h);u(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}function LC(t,e){e===void 0&&(e={});let n=O.useContext(AC);n==null&&Se(!1);let{basename:r}=OC(Kh.useViewTransitionState),i=sc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=gs(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=gs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Hh(i.pathname,o)!=null||Hh(i.pathname,s)!=null}let MC={data:""},VC=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||MC,FC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,UC=/\/\*[^]*?\*\/|  +/g,zv=/\n+/g,dr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?dr(o,s):s+"{"+dr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=dr(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=dr.p?dr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},bn={},gE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+gE(t[n]);return e}return t},$C=(t,e,n,r,i)=>{let s=gE(t),o=bn[s]||(bn[s]=(u=>{let c=0,h=11;for(;c<u.length;)h=101*h+u.charCodeAt(c++)>>>0;return"go"+h})(s));if(!bn[o]){let u=s!==t?t:(c=>{let h,f,p=[{}];for(;h=FC.exec(c.replace(UC,""));)h[4]?p.shift():h[3]?(f=h[3].replace(zv," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][h[1]]=h[2].replace(zv," ").trim();return p[0]})(t);bn[o]=dr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let a=n&&bn.g?bn.g:null;return n&&(bn.g=bn[o]),((u,c,h,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=h?u+c.data:c.data+u)})(bn[o],e,r,a),o},jC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=u?"."+u:a&&typeof a=="object"?a.props?"":dr(a,""):a===!1?"":a}return r+i+(o??"")},"");function oc(t){let e=this||{},n=t.call?t(e.p):t;return $C(n.unshift?n.raw?jC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,VC(e.target),e.g,e.o,e.k)}let vE,Gh,Qh;oc.bind({g:1});let qn=oc.bind({k:1});function BC(t,e,n,r){dr.p=e,vE=t,Gh=n,Qh=r}function Ur(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),u=a.className||i.className;n.p=Object.assign({theme:Gh&&Gh()},a),n.o=/ *go\d+/.test(u),a.className=oc.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),Qh&&c[0]&&Qh(a),vE(c,a)}return i}}var zC=t=>typeof t=="function",pu=(t,e)=>zC(t)?t(e):t,WC=(()=>{let t=0;return()=>(++t).toString()})(),yE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),HC=20,Ip="default",_E=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return _E(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},Nl=[],wE={toasts:[],pausedAt:void 0,settings:{toastLimit:HC}},un={},EE=(t,e=Ip)=>{un[e]=_E(un[e]||wE,t),Nl.forEach(([n,r])=>{n===e&&r(un[e])})},TE=t=>Object.keys(un).forEach(e=>EE(t,e)),qC=t=>Object.keys(un).find(e=>un[e].toasts.some(n=>n.id===t)),ac=(t=Ip)=>e=>{EE(e,t)},KC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},GC=(t={},e=Ip)=>{let[n,r]=O.useState(un[e]||wE),i=O.useRef(un[e]);O.useEffect(()=>(i.current!==un[e]&&r(un[e]),Nl.push([e,r]),()=>{let o=Nl.findIndex(([a])=>a===e);o>-1&&Nl.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||KC[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},QC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||WC()}),va=t=>(e,n)=>{let r=QC(e,t,n);return ac(r.toasterId||qC(r.id))({type:2,toast:r}),r.id},Ve=(t,e)=>va("blank")(t,e);Ve.error=va("error");Ve.success=va("success");Ve.loading=va("loading");Ve.custom=va("custom");Ve.dismiss=(t,e)=>{let n={type:3,toastId:t};e?ac(e)(n):TE(n)};Ve.dismissAll=t=>Ve.dismiss(void 0,t);Ve.remove=(t,e)=>{let n={type:4,toastId:t};e?ac(e)(n):TE(n)};Ve.removeAll=t=>Ve.remove(void 0,t);Ve.promise=(t,e,n)=>{let r=Ve.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?pu(e.success,i):void 0;return s?Ve.success(s,{id:r,...n,...n==null?void 0:n.success}):Ve.dismiss(r),i}).catch(i=>{let s=e.error?pu(e.error,i):void 0;s?Ve.error(s,{id:r,...n,...n==null?void 0:n.error}):Ve.dismiss(r)}),t};var YC=1e3,XC=(t,e="default")=>{let{toasts:n,pausedAt:r}=GC(t,e),i=O.useRef(new Map).current,s=O.useCallback((f,p=YC)=>{if(i.has(f))return;let g=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},p);i.set(f,g)},[]);O.useEffect(()=>{if(r)return;let f=Date.now(),p=n.map(g=>{if(g.duration===1/0)return;let T=(g.duration||0)+g.pauseDuration-(f-g.createdAt);if(T<0){g.visible&&Ve.dismiss(g.id);return}return setTimeout(()=>Ve.dismiss(g.id,e),T)});return()=>{p.forEach(g=>g&&clearTimeout(g))}},[n,r,e]);let o=O.useCallback(ac(e),[e]),a=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=O.useCallback((f,p)=>{o({type:1,toast:{id:f,height:p}})},[o]),c=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=O.useCallback((f,p)=>{let{reverseOrder:g=!1,gutter:T=8,defaultPosition:C}=p||{},k=n.filter(w=>(w.position||C)===(f.position||C)&&w.height),E=k.findIndex(w=>w.id===f.id),v=k.filter((w,b)=>b<E&&w.visible).length;return k.filter(w=>w.visible).slice(...g?[v+1]:[0,v]).reduce((w,b)=>w+(b.height||0)+T,0)},[n]);return O.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let p=i.get(f.id);p&&(clearTimeout(p),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:a,endPause:c,calculateOffset:h}}},JC=qn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ZC=qn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,eA=qn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,tA=Ur("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${JC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ZC} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${eA} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,nA=qn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,rA=Ur("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${nA} 1s linear infinite;
`,iA=qn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,sA=qn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,oA=Ur("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${iA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${sA} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,aA=Ur("div")`
  position: absolute;
`,lA=Ur("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,uA=qn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,cA=Ur("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${uA} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,dA=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement(cA,null,e):e:n==="blank"?null:O.createElement(lA,null,O.createElement(rA,{...r}),n!=="loading"&&O.createElement(aA,null,n==="error"?O.createElement(tA,{...r}):O.createElement(oA,{...r})))},hA=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,fA=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,pA="0%{opacity:0;} 100%{opacity:1;}",mA="0%{opacity:1;} 100%{opacity:0;}",gA=Ur("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,vA=Ur("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,yA=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=yE()?[pA,mA]:[hA(n),fA(n)];return{animation:e?`${qn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${qn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},_A=O.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?yA(t.position||e||"top-center",t.visible):{opacity:0},s=O.createElement(dA,{toast:t}),o=O.createElement(vA,{...t.ariaProps},pu(t.message,t));return O.createElement(gA,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):O.createElement(O.Fragment,null,s,o))});BC(O.createElement);var wA=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=O.useCallback(o=>{if(o){let a=()=>{let u=o.getBoundingClientRect().height;r(t,u)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:s,className:e,style:n},i)},EA=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:yE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},TA=oc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,dl=16,SA=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:u,handlers:c}=XC(n,s);return O.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:dl,left:dl,right:dl,bottom:dl,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(h=>{let f=h.position||e,p=c.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),g=EA(f,p);return O.createElement(wA,{id:h.id,key:h.id,onHeightUpdate:c.updateHeight,className:h.visible?TA:"",style:g},h.type==="custom"?pu(h.message,h):i?i(h):O.createElement(_A,{toast:h,position:f}))}))},r$=Ve;const IA="modulepreload",kA=function(t){return"/"+t},Wv={},Vt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=kA(u),u in Wv)return;Wv[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":IA,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},PA={},Hv=t=>{let e;const n=new Set,r=(h,f)=>{const p=typeof h=="function"?h(e):h;if(!Object.is(p,e)){const g=e;e=f??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(T=>T(e,g))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(PA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,u);return u},CA=t=>t?Hv(t):Hv;var SE={exports:{}},IE={},kE={exports:{}},PE={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=O;function AA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var RA=typeof Object.is=="function"?Object.is:AA,bA=vs.useState,xA=vs.useEffect,NA=vs.useLayoutEffect,OA=vs.useDebugValue;function DA(t,e){var n=e(),r=bA({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return NA(function(){i.value=n,i.getSnapshot=e,Rd(i)&&s({inst:i})},[t,n,e]),xA(function(){return Rd(i)&&s({inst:i}),t(function(){Rd(i)&&s({inst:i})})},[t]),OA(n),n}function Rd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!RA(t,n)}catch{return!0}}function LA(t,e){return e()}var MA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?LA:DA;PE.useSyncExternalStore=vs.useSyncExternalStore!==void 0?vs.useSyncExternalStore:MA;kE.exports=PE;var VA=kE.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc=O,FA=VA;function UA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $A=typeof Object.is=="function"?Object.is:UA,jA=FA.useSyncExternalStore,BA=lc.useRef,zA=lc.useEffect,WA=lc.useMemo,HA=lc.useDebugValue;IE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=BA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=WA(function(){function u(g){if(!c){if(c=!0,h=g,g=r(g),i!==void 0&&o.hasValue){var T=o.value;if(i(T,g))return f=T}return f=g}if(T=f,$A(h,g))return T;var C=r(g);return i!==void 0&&i(T,C)?(h=g,T):(h=g,f=C)}var c=!1,h,f,p=n===void 0?null:n;return[function(){return u(e())},p===null?void 0:function(){return u(p())}]},[e,n,r,i]);var a=jA(t,s[0],s[1]);return zA(function(){o.hasValue=!0,o.value=a},[a]),HA(a),a};SE.exports=IE;var qA=SE.exports;const KA=H_(qA),CE={},{useDebugValue:GA}=xf,{useSyncExternalStoreWithSelector:QA}=KA;let qv=!1;const YA=t=>t;function XA(t,e=YA,n){(CE?"production":void 0)!=="production"&&n&&!qv&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),qv=!0);const r=QA(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return GA(r),r}const JA=t=>{(CE?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?CA(t):t,n=(r,i)=>XA(e,r,i);return Object.assign(n,e),n},ZA=t=>JA,eR={};function tR(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var s;const o=u=>u===null?null:JSON.parse(u,void 0),a=(s=n.getItem(i))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,s)=>n.setItem(i,JSON.stringify(s,void 0)),removeItem:i=>n.removeItem(i)}}const Xo=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Xo(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Xo(r)(n)}}}},nR=(t,e)=>(n,r,i)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:k=>k,version:0,merge:(k,E)=>({...E,...k}),...e},o=!1;const a=new Set,u=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return t((...k)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...k)},r,i);const h=Xo(s.serialize),f=()=>{const k=s.partialize({...r()});let E;const v=h({state:k,version:s.version}).then(w=>c.setItem(s.name,w)).catch(w=>{E=w});if(E)throw E;return v},p=i.setState;i.setState=(k,E)=>{p(k,E),f()};const g=t((...k)=>{n(...k),f()},r,i);let T;const C=()=>{var k;if(!c)return;o=!1,a.forEach(v=>v(r()));const E=((k=s.onRehydrateStorage)==null?void 0:k.call(s,r()))||void 0;return Xo(c.getItem.bind(c))(s.name).then(v=>{if(v)return s.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return s.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var w;return T=s.merge(v,(w=r())!=null?w:g),n(T,!0),f()}).then(()=>{E==null||E(T,void 0),o=!0,u.forEach(v=>v(T))}).catch(v=>{E==null||E(void 0,v)})};return i.persist={setOptions:k=>{s={...s,...k},k.getStorage&&(c=k.getStorage())},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>C(),hasHydrated:()=>o,onHydrate:k=>(a.add(k),()=>{a.delete(k)}),onFinishHydration:k=>(u.add(k),()=>{u.delete(k)})},C(),T||g},rR=(t,e)=>(n,r,i)=>{let s={storage:tR(()=>localStorage),partialize:C=>C,version:0,merge:(C,k)=>({...k,...C}),...e},o=!1;const a=new Set,u=new Set;let c=s.storage;if(!c)return t((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...C)},r,i);const h=()=>{const C=s.partialize({...r()});return c.setItem(s.name,{state:C,version:s.version})},f=i.setState;i.setState=(C,k)=>{f(C,k),h()};const p=t((...C)=>{n(...C),h()},r,i);i.getInitialState=()=>p;let g;const T=()=>{var C,k;if(!c)return;o=!1,a.forEach(v=>{var w;return v((w=r())!=null?w:p)});const E=((k=s.onRehydrateStorage)==null?void 0:k.call(s,(C=r())!=null?C:p))||void 0;return Xo(c.getItem.bind(c))(s.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return[!0,s.migrate(v.state,v.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var w;const[b,L]=v;if(g=s.merge(L,(w=r())!=null?w:p),n(g,!0),b)return h()}).then(()=>{E==null||E(g,void 0),g=r(),o=!0,u.forEach(v=>v(g))}).catch(v=>{E==null||E(void 0,v)})};return i.persist={setOptions:C=>{s={...s,...C},C.storage&&(c=C.storage)},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>T(),hasHydrated:()=>o,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(u.add(C),()=>{u.delete(C)})},s.skipHydration||T(),g||p},iR=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((eR?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),nR(t,e)):rR(t,e),sR=iR;var Kv={};/**
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
 */const AE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},RE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(AE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new aR;const p=s<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lR=function(t){const e=AE(t);return RE.encodeByteArray(e,!0)},mu=function(t){return lR(t).replace(/\./g,"")},bE=function(t){try{return RE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cR=()=>uR().__FIREBASE_DEFAULTS__,dR=()=>{if(typeof process>"u"||typeof Kv>"u")return;const t=Kv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bE(t[1]);return e&&JSON.parse(e)},uc=()=>{try{return cR()||dR()||hR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xE=t=>{var e,n;return(n=(e=uc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NE=t=>{const e=xE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},OE=()=>{var t;return(t=uc())===null||t===void 0?void 0:t.config},DE=t=>{var e;return(e=uc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class fR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function LE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function mR(){var t;const e=(t=uc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _R(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wR(){return!mR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ER(){try{return typeof indexedDB=="object"}catch{return!1}}function TR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const SR="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SR,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function IR(t,e){return t.replace(kR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kR=/\{\$([^}]+)}/g;function PR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gv(s)&&Gv(o)){if(!gu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gv(t){return t!==null&&typeof t=="object"}/**
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
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CR(t,e){const n=new AR(t,e);return n.subscribe.bind(n)}class AR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bd),i.error===void 0&&(i.error=bd),i.complete===void 0&&(i.complete=bd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bd(){}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class Wt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qr="[DEFAULT]";/**
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
 */class bR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NR(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xR(t){return t===Qr?void 0:t}function NR(t){return t.instantiationMode==="EAGER"}/**
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
 */class OR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const DR={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},LR=ne.INFO,MR={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},VR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let kp=class{constructor(e){this.name=e,this._logLevel=LR,this._logHandler=VR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}};const FR=(t,e)=>e.some(n=>t instanceof n);let Qv,Yv;function UR(){return Qv||(Qv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $R(){return Yv||(Yv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ME=new WeakMap,Yh=new WeakMap,VE=new WeakMap,xd=new WeakMap,Pp=new WeakMap;function jR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ME.set(n,t)}).catch(()=>{}),Pp.set(e,t),e}function BR(t){if(Yh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yh.set(t,e)}let Xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||VE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zR(t){Xh=t(Xh)}function WR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nd(this),e,...n);return VE.set(r,e.sort?e.sort():[e]),$n(r)}:$R().includes(t)?function(...e){return t.apply(Nd(this),e),$n(ME.get(this))}:function(...e){return $n(t.apply(Nd(this),e))}}function HR(t){return typeof t=="function"?WR(t):(t instanceof IDBTransaction&&BR(t),FR(t,UR())?new Proxy(t,Xh):t)}function $n(t){if(t instanceof IDBRequest)return jR(t);if(xd.has(t))return xd.get(t);const e=HR(t);return e!==t&&(xd.set(t,e),Pp.set(e,t)),e}const Nd=t=>Pp.get(t);function cc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$n(o);return r&&o.addEventListener("upgradeneeded",u=>{r($n(o.result),u.oldVersion,u.newVersion,$n(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function Od(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),$n(n).then(()=>{})}const qR=["get","getKey","getAll","getAllKeys","count"],KR=["put","add","delete","clear"],Dd=new Map;function Xv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Dd.set(e,s),s}zR(t=>({...t,get:(e,n,r)=>Xv(e,n)||t.get(e,n,r),has:(e,n)=>!!Xv(e,n)||t.has(e,n)}));/**
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
 */class GR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jh="@firebase/app",Jv="0.10.13";/**
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
 */const Kn=new kp("@firebase/app"),YR="@firebase/app-compat",XR="@firebase/analytics-compat",JR="@firebase/analytics",ZR="@firebase/app-check-compat",eb="@firebase/app-check",tb="@firebase/auth",nb="@firebase/auth-compat",rb="@firebase/database",ib="@firebase/data-connect",sb="@firebase/database-compat",ob="@firebase/functions",ab="@firebase/functions-compat",lb="@firebase/installations",ub="@firebase/installations-compat",cb="@firebase/messaging",db="@firebase/messaging-compat",hb="@firebase/performance",fb="@firebase/performance-compat",pb="@firebase/remote-config",mb="@firebase/remote-config-compat",gb="@firebase/storage",vb="@firebase/storage-compat",yb="@firebase/firestore",_b="@firebase/vertexai-preview",wb="@firebase/firestore-compat",Eb="firebase",Tb="10.14.1";/**
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
 */const Zh="[DEFAULT]",Sb={[Jh]:"fire-core",[YR]:"fire-core-compat",[JR]:"fire-analytics",[XR]:"fire-analytics-compat",[eb]:"fire-app-check",[ZR]:"fire-app-check-compat",[tb]:"fire-auth",[nb]:"fire-auth-compat",[rb]:"fire-rtdb",[ib]:"fire-data-connect",[sb]:"fire-rtdb-compat",[ob]:"fire-fn",[ab]:"fire-fn-compat",[lb]:"fire-iid",[ub]:"fire-iid-compat",[cb]:"fire-fcm",[db]:"fire-fcm-compat",[hb]:"fire-perf",[fb]:"fire-perf-compat",[pb]:"fire-rc",[mb]:"fire-rc-compat",[gb]:"fire-gcs",[vb]:"fire-gcs-compat",[yb]:"fire-fst",[wb]:"fire-fst-compat",[_b]:"fire-vertex","fire-js":"fire-js",[Eb]:"fire-js-all"};/**
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
 */const vu=new Map,Ib=new Map,ef=new Map;function Zv(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(ef.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;ef.set(e,t);for(const n of vu.values())Zv(n,t);for(const n of Ib.values())Zv(n,t);return!0}function bs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
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
 */const kb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new Si("app","Firebase",kb);/**
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
 */class Pb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=Tb;function FE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=OE()),!n)throw Rr.create("no-options");const s=vu.get(i);if(s){if(gu(n,s.options)&&gu(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new OR(i);for(const u of ef.values())o.addComponent(u);const a=new Pb(n,r,o);return vu.set(i,a),a}function Cp(t=Zh){const e=vu.get(t);if(!e&&t===Zh&&OE())return FE();if(!e)throw Rr.create("no-app",{appName:t});return e}function kt(t,e,n){var r;let i=(r=Sb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}en(new Wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Cb="firebase-heartbeat-database",Ab=1,Jo="firebase-heartbeat-store";let Ld=null;function UE(){return Ld||(Ld=cc(Cb,Ab,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Ld}async function Rb(t){try{const n=(await UE()).transaction(Jo),r=await n.objectStore(Jo).get($E(t));return await n.done,r}catch(e){if(e instanceof nn)Kn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function ey(t,e){try{const r=(await UE()).transaction(Jo,"readwrite");await r.objectStore(Jo).put(e,$E(t)),await r.done}catch(n){if(n instanceof nn)Kn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function $E(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bb=1024,xb=30*24*60*60*1e3;class Nb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Db(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ty();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=xb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ty(),{heartbeatsToSend:r,unsentEntries:i}=Ob(this._heartbeatsCache.heartbeats),s=mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kn.warn(n),""}}}function ty(){return new Date().toISOString().substring(0,10)}function Ob(t,e=bb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ny(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Db{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ER()?TR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ny(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lb(t){en(new Wt("platform-logger",e=>new GR(e),"PRIVATE")),en(new Wt("heartbeat",e=>new Nb(e),"PRIVATE")),kt(Jh,Jv,t),kt(Jh,Jv,"esm2017"),kt("fire-js","")}Lb("");function Ap(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mb=jE,BE=new Si("auth","Firebase",jE());/**
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
 */const yu=new kp("@firebase/auth");function Vb(t,...e){yu.logLevel<=ne.WARN&&yu.warn(`Auth (${Ii}): ${t}`,...e)}function Ol(t,...e){yu.logLevel<=ne.ERROR&&yu.error(`Auth (${Ii}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw Rp(t,...e)}function pn(t,...e){return Rp(t,...e)}function zE(t,e,n){const r=Object.assign(Object.assign({},Mb()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return zE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BE.create(t,...e)}function G(t,e,...n){if(!t)throw Rp(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ol(e),new Error(e)}function Gn(t,e){t||Mn(e)}/**
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
 */function tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fb(){return ry()==="http:"||ry()==="https:"}function ry(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fb()||vR()||"connection"in navigator)?navigator.onLine:!0}function $b(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _a{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=pR()||yR()}get(){return Ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bp(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class WE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bb=new _a(3e4,6e4);function Zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function er(t,e,n,r,i={}){return HE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ya(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return gR()||(c.referrerPolicy="no-referrer"),WE.fetch()(qE(t,t.config.apiHost,n,a),c)})}async function HE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jb),e);try{const i=new Wb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw hl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zE(t,h,c);tn(t,h)}}catch(i){if(i instanceof nn)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function wa(t,e,n,r,i={}){const s=await er(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bp(t.config,i):`${t.config.apiScheme}://${i}`}function zb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),Bb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pn(t,e,r);return i.customData._tokenResponse=n,i}function iy(t){return t!==void 0&&t.enterprise!==void 0}class Hb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qb(t,e){return er(t,"GET","/v2/recaptchaConfig",Zn(t,e))}/**
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
 */async function Kb(t,e){return er(t,"POST","/v1/accounts:delete",e)}async function KE(t,e){return er(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gb(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=xp(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Po(Md(i.auth_time)),issuedAtTime:Po(Md(i.iat)),expirationTime:Po(Md(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Md(t){return Number(t)*1e3}function xp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=bE(n);return i?JSON.parse(i):(Ol("Failed to decode base64 JWT payload"),null)}catch(i){return Ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sy(t){const e=xp(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&Qb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Yb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _u(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zo(t,KE(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?GE(s.providerUserInfo):[],a=Jb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Xb(t){const e=We(t);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function GE(t){return t.map(e=>{var{providerId:n}=e,r=Ap(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Zb(t,e){const n=await HE(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ex(t,e){return er(t,"POST","/v2/accounts:revokeToken",Zn(t,e))}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=sy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Zb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function sr(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ap(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gb(this,e)}reload(){return Xb(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await Zo(this,Kb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:b,isAnonymous:L,providerData:M,stsTokenManager:S}=n;G(w&&S,e,"internal-error");const _=is.fromJSON(this.name,S);G(typeof w=="string",e,"internal-error"),sr(f,e.name),sr(p,e.name),G(typeof b=="boolean",e,"internal-error"),G(typeof L=="boolean",e,"internal-error"),sr(g,e.name),sr(T,e.name),sr(C,e.name),sr(k,e.name),sr(E,e.name),sr(v,e.name);const I=new Vn({uid:w,auth:e,email:p,emailVerified:b,displayName:f,isAnonymous:L,photoURL:T,phoneNumber:g,tenantId:C,stsTokenManager:_,createdAt:E,lastLoginAt:v});return M&&Array.isArray(M)&&(I.providerData=M.map(P=>Object.assign({},P))),k&&(I._redirectEventId=k),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _u(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?GE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new is;a.updateFromIdToken(r);const u=new Vn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const oy=new Map;function Fn(t){Gn(t instanceof Function,"Expected a class definition");let e=oy.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oy.set(t,e),e)}/**
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
 */class QE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}QE.type="NONE";const ay=QE;/**
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
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(Fn(ay),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Fn(ay);const o=Dl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Vn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ss(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ss(s,e,r))}}/**
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
 */function ly(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(YE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tT(e))return"Blackberry";if(nT(e))return"Webos";if(XE(e))return"Safari";if((e.includes("chrome/")||JE(e))&&!e.includes("edge/"))return"Chrome";if(eT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function YE(t=ht()){return/firefox\//i.test(t)}function XE(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JE(t=ht()){return/crios\//i.test(t)}function ZE(t=ht()){return/iemobile/i.test(t)}function eT(t=ht()){return/android/i.test(t)}function tT(t=ht()){return/blackberry/i.test(t)}function nT(t=ht()){return/webos/i.test(t)}function Np(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tx(t=ht()){var e;return Np(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nx(){return _R()&&document.documentMode===10}function rT(t=ht()){return Np(t)||eT(t)||nT(t)||tT(t)||/windows phone/i.test(t)||ZE(t)}/**
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
 */function iT(t,e=[]){let n;switch(t){case"Browser":n=ly(ht());break;case"Worker":n=`${ly(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${r}`}/**
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
 */class rx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ix(t,e={}){return er(t,"GET","/v2/passwordPolicy",Zn(t,e))}/**
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
 */const sx=6;class ox{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ax{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uy(this),this.idTokenSubscription=new uy(this),this.beforeStateQueue=new rx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await KE(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$b()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(jn(this));const n=e?We(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ix(this),n=new ox(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ex(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Vb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $r(t){return We(t)}class uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=CR(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lx(t){dc=t}function sT(t){return dc.loadJS(t)}function ux(){return dc.recaptchaEnterpriseScript}function cx(){return dc.gapiScript}function dx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hx="recaptcha-enterprise",fx="NO_RECAPTCHA";class px{constructor(e){this.type=hx,this.auth=$r(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Hb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;iy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(fx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&iy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ux();u.length!==0&&(u+=a),sT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function cy(t,e,n,r=!1){const i=new px(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function mx(t,e){const n=bs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gu(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function gx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vx(t,e,n){const r=$r(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=oT(e),{host:o,port:a}=yx(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),_x()}function oT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yx(t){const e=oT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dy(o)}}}function dy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _x(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Op{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function wx(t,e){return er(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ex(t,e){return wa(t,"POST","/v1/accounts:signInWithPassword",Zn(t,e))}async function aT(t,e){return er(t,"POST","/v1/accounts:sendOobCode",Zn(t,e))}async function Tx(t,e){return aT(t,e)}async function Sx(t,e){return aT(t,e)}/**
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
 */async function Ix(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}async function kx(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}/**
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
 */class ea extends Op{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wu(e,n,"signInWithPassword",Ex);case"emailLink":return Ix(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wu(e,r,"signUpPassword",wx);case"emailLink":return kx(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function os(t,e){return wa(t,"POST","/v1/accounts:signInWithIdp",Zn(t,e))}/**
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
 */const Px="http://localhost";class ci extends Op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ap(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:Px,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
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
 */function Cx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ax(t){const e=ho(fo(t)).link,n=e?ho(fo(e)).deep_link_id:null,r=ho(fo(t)).deep_link_id;return(r?ho(fo(r)).link:null)||r||n||e||t}class Dp{constructor(e){var n,r,i,s,o,a;const u=ho(fo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Cx((i=u.mode)!==null&&i!==void 0?i:null);G(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ax(e);try{return new Dp(n)}catch{return null}}}/**
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
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dp.parseLink(n);return G(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ea extends lT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends Ea{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class pr extends Ea{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
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
 */class mr extends Ea{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
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
 */async function Rx(t,e){return wa(t,"POST","/v1/accounts:signUp",Zn(t,e))}/**
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
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=hy(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hy(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Eu extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Eu(e,n,r,i)}}function uT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(t,s,e,r):s})}async function bx(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
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
 */async function xx(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const s=await Zo(t,uT(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=xp(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
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
 */async function cT(t,e,n=!1){if(cn(t.app))return Promise.reject(jn(t));const r="signIn",i=await uT(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Nx(t,e){return cT($r(t),e)}/**
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
 */async function dT(t){const e=$r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ox(t,e,n){const r=$r(t);await wu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Sx)}async function Dx(t,e,n){if(cn(t.app))return Promise.reject(jn(t));const r=$r(t),o=await wu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Rx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dT(t),u}),a=await di._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Lx(t,e,n){return cn(t.app)?Promise.reject(jn(t)):Nx(We(t),xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dT(t),r})}async function fy(t,e){const n=We(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await Tx(n.auth,i);s!==t.email&&await t.reload()}function Mx(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function Vx(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function Fx(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function Ux(t){return We(t).signOut()}const Tu="__sak";/**
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
 */class hT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $x=1e3,jx=10;class fT extends hT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$x)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fT.type="LOCAL";const Bx=fT;/**
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
 */class pT extends hT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pT.type="SESSION";const mT=pT;/**
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
 */function zx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await zx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
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
 */function Lp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Wx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Lp("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function Hx(t){mn().location.href=t}/**
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
 */function gT(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function qx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gx(){return gT()?self:null}/**
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
 */const vT="firebaseLocalStorageDb",Qx=1,Su="firebaseLocalStorage",yT="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([Su],e?"readwrite":"readonly").objectStore(Su)}function Yx(){const t=indexedDB.deleteDatabase(vT);return new Ta(t).toPromise()}function rf(){const t=indexedDB.open(vT,Qx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Su,{keyPath:yT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Su)?e(r):(r.close(),await Yx(),e(await rf()))})})}async function py(t,e,n){const r=fc(t,!0).put({[yT]:e,value:n});return new Ta(r).toPromise()}async function Xx(t,e){const n=fc(t,!1).get(e),r=await new Ta(n).toPromise();return r===void 0?null:r.value}function my(t,e){const n=fc(t,!0).delete(e);return new Ta(n).toPromise()}const Jx=800,Zx=3;class _T{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(Gx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qx(),!this.activeServiceWorker)return;this.sender=new Wx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rf();return await py(e,Tu,"1"),await my(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>py(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>my(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fc(i,!1).getAll();return new Ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_T.type="LOCAL";const eN=_T;new _a(3e4,6e4);/**
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
 */function tN(t,e){return e?Fn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mp extends Op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nN(t){return cT(t.auth,new Mp(t),t.bypassAuthState)}function rN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),xx(n,new Mp(t),t.bypassAuthState)}async function iN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),bx(n,new Mp(t),t.bypassAuthState)}/**
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
 */class wT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nN;case"linkViaPopup":case"linkViaRedirect":return iN;case"reauthViaPopup":case"reauthViaRedirect":return rN;default:tn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sN=new _a(2e3,1e4);class Xi extends wT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xi.currentPopupAction&&Xi.currentPopupAction.cancel(),Xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Lp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sN.get())};e()}}Xi.currentPopupAction=null;/**
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
 */const oN="pendingRedirect",Ll=new Map;class aN extends wT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const r=await lN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ll.set(this.auth._key(),e)}return this.bypassAuthState||Ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lN(t,e){const n=dN(e),r=cN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uN(t,e){Ll.set(t._key(),e)}function cN(t){return Fn(t._redirectPersistence)}function dN(t){return Dl(oN,t.config.apiKey,t.name)}async function hN(t,e,n=!1){if(cn(t.app))return Promise.reject(jn(t));const r=$r(t),i=tN(r,e),o=await new aN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fN=10*60*1e3;class pN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ET(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fN&&this.cachedEventUids.clear(),this.cachedEventUids.has(gy(e))}saveEventToCache(e){this.cachedEventUids.add(gy(e)),this.lastProcessedEventTime=Date.now()}}function gy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ET({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ET(t);default:return!1}}/**
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
 */async function gN(t,e={}){return er(t,"GET","/v1/projects",e)}/**
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
 */const vN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yN=/^https?/;async function _N(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gN(t);for(const n of e)try{if(wN(n))return}catch{}tn(t,"unauthorized-domain")}function wN(t){const e=tf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yN.test(n))return!1;if(vN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const EN=new _a(3e4,6e4);function vy(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TN(t){return new Promise((e,n)=>{var r,i,s;function o(){vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vy(),n(pn(t,"network-request-failed"))},timeout:EN.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=dx("iframefcb");return mn()[a]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},sT(`${cx()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function SN(t){return Ml=Ml||TN(t),Ml}/**
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
 */const IN=new _a(5e3,15e3),kN="__/auth/iframe",PN="emulator/auth/iframe",CN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RN(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bp(e,PN):`https://${t.config.authDomain}/${kN}`,r={apiKey:e.apiKey,appName:t.name,v:Ii},i=AN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ya(r).slice(1)}`}async function bN(t){const e=await SN(t),n=mn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:RN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},IN.get());function u(){mn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const xN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NN=500,ON=600,DN="_blank",LN="http://localhost";class yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MN(t,e,n,r=NN,i=ON){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},xN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ht().toLowerCase();n&&(a=JE(c)?DN:n),YE(c)&&(e=e||LN,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[g,T])=>`${p}${g}=${T},`,"");if(tx(c)&&a!=="_self")return VN(e||"",a),new yy(null);const f=window.open(e||"",a,h);G(f,t,"popup-blocked");try{f.focus()}catch{}return new yy(f)}function VN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const FN="__/auth/handler",UN="emulator/auth/handler",$N=encodeURIComponent("fac");async function _y(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ii,eventId:i};if(e instanceof lT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ea){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${$N}=${encodeURIComponent(u)}`:"";return`${jN(t)}?${ya(a).slice(1)}${c}`}function jN({config:t}){return t.emulator?bp(t,UN):`https://${t.authDomain}/${FN}`}/**
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
 */const Vd="webStorageSupport";class BN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mT,this._completeRedirectFn=hN,this._overrideRedirectResult=uN}async _openPopup(e,n,r,i){var s;Gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _y(e,n,r,tf(),i);return MN(e,o,Lp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _y(e,n,r,tf(),i);return Hx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bN(e),r=new pN(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vd,{type:Vd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vd];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_N(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rT()||XE()||Np()}}const zN=BN;var wy="@firebase/auth",Ey="1.7.9";/**
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
 */class WN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qN(t){en(new Wt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iT(t)},c=new ax(r,i,s,u);return gx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),en(new Wt("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(r=>new WN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(wy,Ey,HN(t)),kt(wy,Ey,"esm2017")}/**
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
 */const KN=5*60,GN=DE("authIdTokenMaxAge")||KN;let Ty=null;const QN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GN)return;const i=n==null?void 0:n.token;Ty!==i&&(Ty=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YN(t=Cp()){const e=bs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mx(t,{popupRedirectResolver:zN,persistence:[eN,Bx,mT]}),r=DE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=QN(s.toString());Vx(n,o,()=>o(n.currentUser)),Mx(n,a=>o(a))}}const i=xE("auth");return i&&vx(n,`http://${i}`),n}function XN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qN("Browser");var Sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ii,TT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function I(){}I.prototype=_.prototype,S.D=_.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(P,R,x){for(var A=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)A[Ne-2]=arguments[Ne];return _.prototype[R].apply(P,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,I){I||(I=0);var P=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)P[R]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(R=0;16>R;++R)P[R]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=S.g[0],I=S.g[1],R=S.g[2];var x=S.g[3],A=_+(x^I&(R^x))+P[0]+3614090360&4294967295;_=I+(A<<7&4294967295|A>>>25),A=x+(R^_&(I^R))+P[1]+3905402710&4294967295,x=_+(A<<12&4294967295|A>>>20),A=R+(I^x&(_^I))+P[2]+606105819&4294967295,R=x+(A<<17&4294967295|A>>>15),A=I+(_^R&(x^_))+P[3]+3250441966&4294967295,I=R+(A<<22&4294967295|A>>>10),A=_+(x^I&(R^x))+P[4]+4118548399&4294967295,_=I+(A<<7&4294967295|A>>>25),A=x+(R^_&(I^R))+P[5]+1200080426&4294967295,x=_+(A<<12&4294967295|A>>>20),A=R+(I^x&(_^I))+P[6]+2821735955&4294967295,R=x+(A<<17&4294967295|A>>>15),A=I+(_^R&(x^_))+P[7]+4249261313&4294967295,I=R+(A<<22&4294967295|A>>>10),A=_+(x^I&(R^x))+P[8]+1770035416&4294967295,_=I+(A<<7&4294967295|A>>>25),A=x+(R^_&(I^R))+P[9]+2336552879&4294967295,x=_+(A<<12&4294967295|A>>>20),A=R+(I^x&(_^I))+P[10]+4294925233&4294967295,R=x+(A<<17&4294967295|A>>>15),A=I+(_^R&(x^_))+P[11]+2304563134&4294967295,I=R+(A<<22&4294967295|A>>>10),A=_+(x^I&(R^x))+P[12]+1804603682&4294967295,_=I+(A<<7&4294967295|A>>>25),A=x+(R^_&(I^R))+P[13]+4254626195&4294967295,x=_+(A<<12&4294967295|A>>>20),A=R+(I^x&(_^I))+P[14]+2792965006&4294967295,R=x+(A<<17&4294967295|A>>>15),A=I+(_^R&(x^_))+P[15]+1236535329&4294967295,I=R+(A<<22&4294967295|A>>>10),A=_+(R^x&(I^R))+P[1]+4129170786&4294967295,_=I+(A<<5&4294967295|A>>>27),A=x+(I^R&(_^I))+P[6]+3225465664&4294967295,x=_+(A<<9&4294967295|A>>>23),A=R+(_^I&(x^_))+P[11]+643717713&4294967295,R=x+(A<<14&4294967295|A>>>18),A=I+(x^_&(R^x))+P[0]+3921069994&4294967295,I=R+(A<<20&4294967295|A>>>12),A=_+(R^x&(I^R))+P[5]+3593408605&4294967295,_=I+(A<<5&4294967295|A>>>27),A=x+(I^R&(_^I))+P[10]+38016083&4294967295,x=_+(A<<9&4294967295|A>>>23),A=R+(_^I&(x^_))+P[15]+3634488961&4294967295,R=x+(A<<14&4294967295|A>>>18),A=I+(x^_&(R^x))+P[4]+3889429448&4294967295,I=R+(A<<20&4294967295|A>>>12),A=_+(R^x&(I^R))+P[9]+568446438&4294967295,_=I+(A<<5&4294967295|A>>>27),A=x+(I^R&(_^I))+P[14]+3275163606&4294967295,x=_+(A<<9&4294967295|A>>>23),A=R+(_^I&(x^_))+P[3]+4107603335&4294967295,R=x+(A<<14&4294967295|A>>>18),A=I+(x^_&(R^x))+P[8]+1163531501&4294967295,I=R+(A<<20&4294967295|A>>>12),A=_+(R^x&(I^R))+P[13]+2850285829&4294967295,_=I+(A<<5&4294967295|A>>>27),A=x+(I^R&(_^I))+P[2]+4243563512&4294967295,x=_+(A<<9&4294967295|A>>>23),A=R+(_^I&(x^_))+P[7]+1735328473&4294967295,R=x+(A<<14&4294967295|A>>>18),A=I+(x^_&(R^x))+P[12]+2368359562&4294967295,I=R+(A<<20&4294967295|A>>>12),A=_+(I^R^x)+P[5]+4294588738&4294967295,_=I+(A<<4&4294967295|A>>>28),A=x+(_^I^R)+P[8]+2272392833&4294967295,x=_+(A<<11&4294967295|A>>>21),A=R+(x^_^I)+P[11]+1839030562&4294967295,R=x+(A<<16&4294967295|A>>>16),A=I+(R^x^_)+P[14]+4259657740&4294967295,I=R+(A<<23&4294967295|A>>>9),A=_+(I^R^x)+P[1]+2763975236&4294967295,_=I+(A<<4&4294967295|A>>>28),A=x+(_^I^R)+P[4]+1272893353&4294967295,x=_+(A<<11&4294967295|A>>>21),A=R+(x^_^I)+P[7]+4139469664&4294967295,R=x+(A<<16&4294967295|A>>>16),A=I+(R^x^_)+P[10]+3200236656&4294967295,I=R+(A<<23&4294967295|A>>>9),A=_+(I^R^x)+P[13]+681279174&4294967295,_=I+(A<<4&4294967295|A>>>28),A=x+(_^I^R)+P[0]+3936430074&4294967295,x=_+(A<<11&4294967295|A>>>21),A=R+(x^_^I)+P[3]+3572445317&4294967295,R=x+(A<<16&4294967295|A>>>16),A=I+(R^x^_)+P[6]+76029189&4294967295,I=R+(A<<23&4294967295|A>>>9),A=_+(I^R^x)+P[9]+3654602809&4294967295,_=I+(A<<4&4294967295|A>>>28),A=x+(_^I^R)+P[12]+3873151461&4294967295,x=_+(A<<11&4294967295|A>>>21),A=R+(x^_^I)+P[15]+530742520&4294967295,R=x+(A<<16&4294967295|A>>>16),A=I+(R^x^_)+P[2]+3299628645&4294967295,I=R+(A<<23&4294967295|A>>>9),A=_+(R^(I|~x))+P[0]+4096336452&4294967295,_=I+(A<<6&4294967295|A>>>26),A=x+(I^(_|~R))+P[7]+1126891415&4294967295,x=_+(A<<10&4294967295|A>>>22),A=R+(_^(x|~I))+P[14]+2878612391&4294967295,R=x+(A<<15&4294967295|A>>>17),A=I+(x^(R|~_))+P[5]+4237533241&4294967295,I=R+(A<<21&4294967295|A>>>11),A=_+(R^(I|~x))+P[12]+1700485571&4294967295,_=I+(A<<6&4294967295|A>>>26),A=x+(I^(_|~R))+P[3]+2399980690&4294967295,x=_+(A<<10&4294967295|A>>>22),A=R+(_^(x|~I))+P[10]+4293915773&4294967295,R=x+(A<<15&4294967295|A>>>17),A=I+(x^(R|~_))+P[1]+2240044497&4294967295,I=R+(A<<21&4294967295|A>>>11),A=_+(R^(I|~x))+P[8]+1873313359&4294967295,_=I+(A<<6&4294967295|A>>>26),A=x+(I^(_|~R))+P[15]+4264355552&4294967295,x=_+(A<<10&4294967295|A>>>22),A=R+(_^(x|~I))+P[6]+2734768916&4294967295,R=x+(A<<15&4294967295|A>>>17),A=I+(x^(R|~_))+P[13]+1309151649&4294967295,I=R+(A<<21&4294967295|A>>>11),A=_+(R^(I|~x))+P[4]+4149444226&4294967295,_=I+(A<<6&4294967295|A>>>26),A=x+(I^(_|~R))+P[11]+3174756917&4294967295,x=_+(A<<10&4294967295|A>>>22),A=R+(_^(x|~I))+P[2]+718787259&4294967295,R=x+(A<<15&4294967295|A>>>17),A=I+(x^(R|~_))+P[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(R+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+x&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var I=_-this.blockSize,P=this.B,R=this.h,x=0;x<_;){if(R==0)for(;x<=I;)i(this,S,x),x+=this.blockSize;if(typeof S=="string"){for(;x<_;)if(P[R++]=S.charCodeAt(x++),R==this.blockSize){i(this,P),R=0;break}}else for(;x<_;)if(P[R++]=S[x++],R==this.blockSize){i(this,P),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var I=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=I&255,I/=256;for(this.u(S),S=Array(16),_=I=0;4>_;++_)for(var P=0;32>P;P+=8)S[I++]=this.g[_]>>>P&255;return S};function s(S,_){var I=a;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=_(S)}function o(S,_){this.h=_;for(var I=[],P=!0,R=S.length-1;0<=R;R--){var x=S[R]|0;P&&x==_||(I[R]=x,P=!1)}this.g=I}var a={};function u(S){return-128<=S&&128>S?s(S,function(_){return new o([_|0],0>_?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return k(c(-S));for(var _=[],I=1,P=0;S>=I;P++)_[P]=S/I|0,I*=4294967296;return new o(_,0)}function h(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return k(h(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),P=f,R=0;R<S.length;R+=8){var x=Math.min(8,S.length-R),A=parseInt(S.substring(R,R+x),_);8>x?(x=c(Math.pow(_,x)),P=P.j(x).add(c(A))):(P=P.j(I),P=P.add(c(A)))}return P}var f=u(0),p=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-k(this).m();for(var S=0,_=1,I=0;I<this.g.length;I++){var P=this.i(I);S+=(0<=P?P:4294967296+P)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(T(this))return"0";if(C(this))return"-"+k(this).toString(S);for(var _=c(Math.pow(S,6)),I=this,P="";;){var R=b(I,_).g;I=E(I,R.j(_));var x=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=R,T(I))return x+P;for(;6>x.length;)x="0"+x;P=x+P}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function T(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function C(S){return S.h==-1}t.l=function(S){return S=E(this,S),C(S)?-1:T(S)?0:1};function k(S){for(var _=S.g.length,I=[],P=0;P<_;P++)I[P]=~S.g[P];return new o(I,~S.h).add(p)}t.abs=function(){return C(this)?k(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],P=0,R=0;R<=_;R++){var x=P+(this.i(R)&65535)+(S.i(R)&65535),A=(x>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);P=A>>>16,x&=65535,A&=65535,I[R]=A<<16|x}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(S,_){return S.add(k(_))}t.j=function(S){if(T(this)||T(S))return f;if(C(this))return C(S)?k(this).j(k(S)):k(k(this).j(S));if(C(S))return k(this.j(k(S)));if(0>this.l(g)&&0>S.l(g))return c(this.m()*S.m());for(var _=this.g.length+S.g.length,I=[],P=0;P<2*_;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(var R=0;R<S.g.length;R++){var x=this.i(P)>>>16,A=this.i(P)&65535,Ne=S.i(R)>>>16,ce=S.i(R)&65535;I[2*P+2*R]+=A*ce,v(I,2*P+2*R),I[2*P+2*R+1]+=x*ce,v(I,2*P+2*R+1),I[2*P+2*R+1]+=A*Ne,v(I,2*P+2*R+1),I[2*P+2*R+2]+=x*Ne,v(I,2*P+2*R+2)}for(P=0;P<_;P++)I[P]=I[2*P+1]<<16|I[2*P];for(P=_;P<2*_;P++)I[P]=0;return new o(I,0)};function v(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function w(S,_){this.g=S,this.h=_}function b(S,_){if(T(_))throw Error("division by zero");if(T(S))return new w(f,f);if(C(S))return _=b(k(S),_),new w(k(_.g),k(_.h));if(C(_))return _=b(S,k(_)),new w(k(_.g),_.h);if(30<S.g.length){if(C(S)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var I=p,P=_;0>=P.l(S);)I=L(I),P=L(P);var R=M(I,1),x=M(P,1);for(P=M(P,2),I=M(I,2);!T(P);){var A=x.add(P);0>=A.l(S)&&(R=R.add(I),x=A),P=M(P,1),I=M(I,1)}return _=E(S,R.j(_)),new w(R,_)}for(R=f;0<=S.l(_);){for(I=Math.max(1,Math.floor(S.m()/_.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),x=c(I),A=x.j(_);C(A)||0<A.l(S);)I-=P,x=c(I),A=x.j(_);T(x)&&(x=p),R=R.add(x),S=E(S,A)}return new w(R,S)}t.A=function(S){return b(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],P=0;P<_;P++)I[P]=this.i(P)&S.i(P);return new o(I,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],P=0;P<_;P++)I[P]=this.i(P)|S.i(P);return new o(I,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],P=0;P<_;P++)I[P]=this.i(P)^S.i(P);return new o(I,this.h^S.h)};function L(S){for(var _=S.g.length+1,I=[],P=0;P<_;P++)I[P]=S.i(P)<<1|S.i(P-1)>>>31;return new o(I,S.h)}function M(S,_){var I=_>>5;_%=32;for(var P=S.g.length-I,R=[],x=0;x<P;x++)R[x]=0<_?S.i(x+I)>>>_|S.i(x+I+1)<<32-_:S.i(x+I);return new o(R,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,TT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ii=o}).apply(typeof Sy<"u"?Sy:typeof self<"u"?self:typeof window<"u"?window:{});var fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ST,po,IT,Vl,sf,kT,PT,CT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof fl=="object"&&fl];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var N=l[y];if(!(N in m))break e;m=m[N]}l=l[l.length-1],y=m[l],d=d(y),d!=y&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,y=!1,N={next:function(){if(!y&&m<l.length){var D=m++;return{value:d(D,l[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function T(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,N,D){for(var B=Array(arguments.length-2),he=2;he<arguments.length;he++)B[he-2]=arguments[he];return d.prototype[N].apply(y,B)}}function C(l){const d=l.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=l[y];return m}return[]}function k(l,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const N=l.length||0,D=y.length||0;l.length=N+D;for(let B=0;B<D;B++)l[N+B]=y[B]}else l.push(y)}}class E{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var L=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function M(l,d,m){for(const y in l)d.call(m,l[y],y,l)}function S(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function _(l){const d={};for(const m in l)d[m]=l[m];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,d){let m,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(m in y)l[m]=y[m];for(let D=0;D<I.length;D++)m=I[D],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function R(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function x(l){a.setTimeout(()=>{throw l},0)}function A(){var l=H;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Ne{constructor(){this.h=this.g=null}add(d,m){const y=ce.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var ce=new E(()=>new Le,l=>l.reset());class Le{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let He,j=!1,H=new Ne,Q=()=>{const l=a.Promise.resolve(void 0);He=()=>{l.then(fe)}};var fe=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(m){x(m)}var d=ce;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}j=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var In=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function kn(l,d){if(Re.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(L){e:{try{b(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Pn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&kn.aa.h.call(this)}}T(kn,Re);var Pn={2:"touch",3:"pen",4:"mouse"};kn.prototype.h=function(){kn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),k1=0;function P1(l,d,m,y,N){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=N,this.key=++k1,this.da=this.fa=!1}function ba(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function xa(l){this.src=l,this.g={},this.h=0}xa.prototype.add=function(l,d,m,y,N){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var B=Dc(l,d,y,N);return-1<B?(d=l[B],m||(d.fa=!1)):(d=new P1(d,this.src,D,!!y,N),d.fa=m,l.push(d)),d};function Oc(l,d){var m=d.type;if(m in l.g){var y=l.g[m],N=Array.prototype.indexOf.call(y,d,void 0),D;(D=0<=N)&&Array.prototype.splice.call(y,N,1),D&&(ba(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Dc(l,d,m,y){for(var N=0;N<l.length;++N){var D=l[N];if(!D.da&&D.listener==d&&D.capture==!!m&&D.ha==y)return N}return-1}var Lc="closure_lm_"+(1e6*Math.random()|0),Mc={};function Cm(l,d,m,y,N){if(Array.isArray(d)){for(var D=0;D<d.length;D++)Cm(l,d[D],m,y,N);return null}return m=bm(m),l&&l[Cn]?l.K(d,m,c(y)?!!y.capture:!1,N):C1(l,d,m,!1,y,N)}function C1(l,d,m,y,N,D){if(!d)throw Error("Invalid event type");var B=c(N)?!!N.capture:!!N,he=Fc(l);if(he||(l[Lc]=he=new xa(l)),m=he.add(d,m,y,B,D),m.proxy)return m;if(y=A1(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)In||(N=B),N===void 0&&(N=!1),l.addEventListener(d.toString(),y,N);else if(l.attachEvent)l.attachEvent(Rm(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function A1(){function l(m){return d.call(l.src,l.listener,m)}const d=R1;return l}function Am(l,d,m,y,N){if(Array.isArray(d))for(var D=0;D<d.length;D++)Am(l,d[D],m,y,N);else y=c(y)?!!y.capture:!!y,m=bm(m),l&&l[Cn]?(l=l.i,d=String(d).toString(),d in l.g&&(D=l.g[d],m=Dc(D,m,y,N),-1<m&&(ba(D[m]),Array.prototype.splice.call(D,m,1),D.length==0&&(delete l.g[d],l.h--)))):l&&(l=Fc(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Dc(d,m,y,N)),(m=-1<l?d[l]:null)&&Vc(m))}function Vc(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Cn])Oc(d.i,l);else{var m=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(m,y,l.capture):d.detachEvent?d.detachEvent(Rm(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=Fc(d))?(Oc(m,l),m.h==0&&(m.src=null,d[Lc]=null)):ba(l)}}}function Rm(l){return l in Mc?Mc[l]:Mc[l]="on"+l}function R1(l,d){if(l.da)l=!0;else{d=new kn(d,this);var m=l.listener,y=l.ha||l.src;l.fa&&Vc(l),l=m.call(y,d)}return l}function Fc(l){return l=l[Lc],l instanceof xa?l:null}var Uc="__closure_events_fn_"+(1e9*Math.random()>>>0);function bm(l){return typeof l=="function"?l:(l[Uc]||(l[Uc]=function(d){return l.handleEvent(d)}),l[Uc])}function tt(){de.call(this),this.i=new xa(this),this.M=this,this.F=null}T(tt,de),tt.prototype[Cn]=!0,tt.prototype.removeEventListener=function(l,d,m,y){Am(this,l,d,m,y)};function ft(l,d){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new Re(d,l);else if(d instanceof Re)d.target=d.target||l;else{var N=d;d=new Re(y,l),P(d,N)}if(N=!0,m)for(var D=m.length-1;0<=D;D--){var B=d.g=m[D];N=Na(B,y,!0,d)&&N}if(B=d.g=l,N=Na(B,y,!0,d)&&N,N=Na(B,y,!1,d)&&N,m)for(D=0;D<m.length;D++)B=d.g=m[D],N=Na(B,y,!1,d)&&N}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],y=0;y<m.length;y++)ba(m[y]);delete l.g[d],l.h--}}this.F=null},tt.prototype.K=function(l,d,m,y){return this.i.add(String(l),d,!1,m,y)},tt.prototype.L=function(l,d,m,y){return this.i.add(String(l),d,!0,m,y)};function Na(l,d,m,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,D=0;D<d.length;++D){var B=d[D];if(B&&!B.da&&B.capture==m){var he=B.listener,qe=B.ha||B.src;B.fa&&Oc(l.i,B),N=he.call(qe,y)!==!1&&N}}return N&&!y.defaultPrevented}function xm(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Nm(l){l.g=xm(()=>{l.g=null,l.i&&(l.i=!1,Nm(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class b1 extends de{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Nm(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ls(l){de.call(this),this.h=l,this.g={}}T(Ls,de);var Om=[];function Dm(l){M(l.g,function(d,m){this.g.hasOwnProperty(m)&&Vc(d)},l),l.g={}}Ls.prototype.N=function(){Ls.aa.N.call(this),Dm(this)},Ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $c=a.JSON.stringify,x1=a.JSON.parse,N1=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function jc(){}jc.prototype.h=null;function Lm(l){return l.h||(l.h=l.i())}function Mm(){}var Ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bc(){Re.call(this,"d")}T(Bc,Re);function zc(){Re.call(this,"c")}T(zc,Re);var Br={},Vm=null;function Oa(){return Vm=Vm||new tt}Br.La="serverreachability";function Fm(l){Re.call(this,Br.La,l)}T(Fm,Re);function Vs(l){const d=Oa();ft(d,new Fm(d))}Br.STAT_EVENT="statevent";function Um(l,d){Re.call(this,Br.STAT_EVENT,l),this.stat=d}T(Um,Re);function pt(l){const d=Oa();ft(d,new Um(d,l))}Br.Ma="timingevent";function $m(l,d){Re.call(this,Br.Ma,l),this.size=d}T($m,Re);function Fs(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Us(){this.g=!0}Us.prototype.xa=function(){this.g=!1};function O1(l,d,m,y,N,D){l.info(function(){if(l.g)if(D)for(var B="",he=D.split("&"),qe=0;qe<he.length;qe++){var se=he[qe].split("=");if(1<se.length){var nt=se[0];se=se[1];var rt=nt.split("_");B=2<=rt.length&&rt[1]=="type"?B+(nt+"="+se+"&"):B+(nt+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+d+`
`+m+`
`+B})}function D1(l,d,m,y,N,D,B){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+d+`
`+m+`
`+D+" "+B})}function Ci(l,d,m,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+M1(l,m)+(y?" "+y:"")})}function L1(l,d){l.info(function(){return"TIMEOUT: "+d})}Us.prototype.info=function(){};function M1(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return $c(m)}catch{return d}}var Da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wc;function La(){}T(La,jc),La.prototype.g=function(){return new XMLHttpRequest},La.prototype.i=function(){return{}},Wc=new La;function tr(l,d,m,y){this.j=l,this.i=d,this.l=m,this.R=y||1,this.U=new Ls(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bm}function Bm(){this.i=null,this.g="",this.h=!1}var zm={},Hc={};function qc(l,d,m){l.L=1,l.v=Ua(An(d)),l.m=m,l.P=!0,Wm(l,null)}function Wm(l,d){l.F=Date.now(),Ma(l),l.A=An(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),ig(m.i,"t",y),l.C=0,m=l.j.J,l.h=new Bm,l.g=Tg(l.j,m?d:null,!l.m),0<l.O&&(l.M=new b1(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,y=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(Om[0]=N.toString()),N=Om);for(var D=0;D<N.length;D++){var B=Cm(m,N[D],y||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Vs(),O1(l.i,l.u,l.A,l.l,l.R,l.m)}tr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Rn(l)==3?d.j():this.Y(l)},tr.prototype.Y=function(l){try{if(l==this.g)e:{const rt=Rn(this.g);var d=this.g.Ba();const bi=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||dg(this.g)))){this.J||rt!=4||d==7||(d==8||0>=bi?Vs(3):Vs(2)),Kc(this);var m=this.g.Z();this.X=m;t:if(Hm(this)){var y=dg(this.g);l="";var N=y.length,D=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),$s(this);var B="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(D&&d==N-1)});y.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=m==200,D1(this.i,this.u,this.A,this.l,this.R,rt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var he,qe=this.g;if((he=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(he)){var se=he;break t}}se=null}if(m=se)Ci(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gc(this,m);else{this.o=!1,this.s=3,pt(12),zr(this),$s(this);break e}}if(this.P){m=!0;let Ht;for(;!this.J&&this.C<B.length;)if(Ht=V1(this,B),Ht==Hc){rt==4&&(this.s=4,pt(14),m=!1),Ci(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==zm){this.s=4,pt(15),Ci(this.i,this.l,B,"[Invalid Chunk]"),m=!1;break}else Ci(this.i,this.l,Ht,null),Gc(this,Ht);if(Hm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||B.length!=0||this.h.h||(this.s=1,pt(16),m=!1),this.o=this.o&&m,!m)Ci(this.i,this.l,B,"[Invalid Chunked Response]"),zr(this),$s(this);else if(0<B.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),ed(nt),nt.M=!0,pt(11))}}else Ci(this.i,this.l,B,null),Gc(this,B);rt==4&&zr(this),this.o&&!this.J&&(rt==4?yg(this.j,this):(this.o=!1,Ma(this)))}else eI(this.g),m==400&&0<B.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),zr(this),$s(this)}}}catch{}finally{}};function Hm(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function V1(l,d){var m=l.C,y=d.indexOf(`
`,m);return y==-1?Hc:(m=Number(d.substring(m,y)),isNaN(m)?zm:(y+=1,y+m>d.length?Hc:(d=d.slice(y,y+m),l.C=y+m,d)))}tr.prototype.cancel=function(){this.J=!0,zr(this)};function Ma(l){l.S=Date.now()+l.I,qm(l,l.I)}function qm(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Fs(p(l.ba,l),d)}function Kc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}tr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(L1(this.i,this.A),this.L!=2&&(Vs(),pt(17)),zr(this),this.s=2,$s(this)):qm(this,this.S-l)};function $s(l){l.j.G==0||l.J||yg(l.j,l)}function zr(l){Kc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Dm(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Gc(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||Qc(m.h,l))){if(!l.K&&Qc(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Ha(m),za(m);else break e;Zc(m),pt(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=Fs(p(m.Za,m),6e3));if(1>=Qm(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Hr(m,11)}else if((l.K||m.g==l)&&Ha(m),!v(d))for(N=m.Da.g.parse(d),d=0;d<N.length;d++){let se=N[d];if(m.T=se[0],se=se[1],m.G==2)if(se[0]=="c"){m.K=se[1],m.ia=se[2];const nt=se[3];nt!=null&&(m.la=nt,m.j.info("VER="+m.la));const rt=se[4];rt!=null&&(m.Aa=rt,m.j.info("SVER="+m.Aa));const bi=se[5];bi!=null&&typeof bi=="number"&&0<bi&&(y=1.5*bi,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const Ht=l.g;if(Ht){const Ka=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ka){var D=y.h;D.g||Ka.indexOf("spdy")==-1&&Ka.indexOf("quic")==-1&&Ka.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Yc(D,D.h),D.h=null))}if(y.D){const td=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;td&&(y.ya=td,ge(y.I,y.D,td))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var B=l;if(y.qa=Eg(y,y.J?y.ia:null,y.W),B.K){Ym(y.h,B);var he=B,qe=y.L;qe&&(he.I=qe),he.B&&(Kc(he),Ma(he)),y.g=B}else gg(y);0<m.i.length&&Wa(m)}else se[0]!="stop"&&se[0]!="close"||Hr(m,7);else m.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Hr(m,7):Jc(m):se[0]!="noop"&&m.l&&m.l.ta(se),m.v=0)}}Vs(4)}catch{}}var F1=class{constructor(l,d){this.g=l,this.map=d}};function Km(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gm(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Qm(l){return l.h?1:l.g?l.g.size:0}function Qc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Yc(l,d){l.g?l.g.add(d):l.h=d}function Ym(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Km.prototype.cancel=function(){if(this.i=Xm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xm(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return C(l.i)}function U1(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,y=0;y<m;y++)d.push(l[y]);return d}d=[],m=0;for(y in l)d[m++]=l[y];return d}function $1(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const y in l)d[m++]=y;return d}}}function Jm(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=$1(l),y=U1(l),N=y.length,D=0;D<N;D++)d.call(void 0,y[D],m&&m[D],l)}var Zm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function j1(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),N=null;if(0<=y){var D=l[m].substring(0,y);N=l[m].substring(y+1)}else D=l[m];d(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Wr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Wr){this.h=l.h,Va(this,l.j),this.o=l.o,this.g=l.g,Fa(this,l.s),this.l=l.l;var d=l.i,m=new zs;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),eg(this,m),this.m=l.m}else l&&(d=String(l).match(Zm))?(this.h=!1,Va(this,d[1]||"",!0),this.o=js(d[2]||""),this.g=js(d[3]||"",!0),Fa(this,d[4]),this.l=js(d[5]||"",!0),eg(this,d[6]||"",!0),this.m=js(d[7]||"")):(this.h=!1,this.i=new zs(null,this.h))}Wr.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Bs(d,tg,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Bs(d,tg,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Bs(m,m.charAt(0)=="/"?W1:z1,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Bs(m,q1)),l.join("")};function An(l){return new Wr(l)}function Va(l,d,m){l.j=m?js(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Fa(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function eg(l,d,m){d instanceof zs?(l.i=d,K1(l.i,l.h)):(m||(d=Bs(d,H1)),l.i=new zs(d,l.h))}function ge(l,d,m){l.i.set(d,m)}function Ua(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function js(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Bs(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,B1),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function B1(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var tg=/[#\/\?@]/g,z1=/[#\?:]/g,W1=/[#\?]/g,H1=/[#\?@]/g,q1=/#/g;function zs(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function nr(l){l.g||(l.g=new Map,l.h=0,l.i&&j1(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=zs.prototype,t.add=function(l,d){nr(this),this.i=null,l=Ai(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function ng(l,d){nr(l),d=Ai(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function rg(l,d){return nr(l),d=Ai(l,d),l.g.has(d)}t.forEach=function(l,d){nr(this),this.g.forEach(function(m,y){m.forEach(function(N){l.call(d,N,y,this)},this)},this)},t.na=function(){nr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const N=l[y];for(let D=0;D<N.length;D++)m.push(d[y])}return m},t.V=function(l){nr(this);let d=[];if(typeof l=="string")rg(this,l)&&(d=d.concat(this.g.get(Ai(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return nr(this),this.i=null,l=Ai(this,l),rg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function ig(l,d,m){ng(l,d),0<m.length&&(l.i=null,l.g.set(Ai(l,d),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const D=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var N=D;B[y]!==""&&(N+="="+encodeURIComponent(String(B[y]))),l.push(N)}}return this.i=l.join("&")};function Ai(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function K1(l,d){d&&!l.j&&(nr(l),l.i=null,l.g.forEach(function(m,y){var N=y.toLowerCase();y!=N&&(ng(this,y),ig(this,N,m))},l)),l.j=d}function G1(l,d){const m=new Us;if(a.Image){const y=new Image;y.onload=g(rr,m,"TestLoadImage: loaded",!0,d,y),y.onerror=g(rr,m,"TestLoadImage: error",!1,d,y),y.onabort=g(rr,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=g(rr,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function Q1(l,d){const m=new Us,y=new AbortController,N=setTimeout(()=>{y.abort(),rr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(D=>{clearTimeout(N),D.ok?rr(m,"TestPingServer: ok",!0,d):rr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),rr(m,"TestPingServer: error",!1,d)})}function rr(l,d,m,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(m)}catch{}}function Y1(){this.g=new N1}function X1(l,d,m){const y=m||"";try{Jm(l,function(N,D){let B=N;c(N)&&(B=$c(N)),d.push(y+D+"="+encodeURIComponent(B))})}catch(N){throw d.push(y+"type="+encodeURIComponent("_badmap")),N}}function $a(l){this.l=l.Ub||null,this.j=l.eb||!1}T($a,jc),$a.prototype.g=function(){return new ja(this.l,this.j)},$a.prototype.i=function(l){return function(){return l}}({});function ja(l,d){tt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ja,tt),t=ja.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Hs(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function sg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ws(this):Hs(this),this.readyState==3&&sg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ws(this))},t.Qa=function(l){this.g&&(this.response=l,Ws(this))},t.ga=function(){this.g&&Ws(this)};function Ws(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Hs(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Hs(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function og(l){let d="";return M(l,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function Xc(l,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=og(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):ge(l,d,m))}function Pe(l){tt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Pe,tt);var J1=/^https?$/i,Z1=["POST","PUT"];t=Pe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wc.g(),this.v=this.o?Lm(this.o):Lm(Wc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(D){ag(this,D);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)m.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())m.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(D=>D.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Z1,d,void 0))||y||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of m)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cg(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){ag(this,D)}};function ag(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,lg(l),Ba(l)}function lg(l){l.A||(l.A=!0,ft(l,"complete"),ft(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ft(this,"complete"),ft(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ug(this):this.bb())},t.bb=function(){ug(this)};function ug(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Rn(l)!=4||l.Z()!=2)){if(l.u&&Rn(l)==4)xm(l.Ea,0,l);else if(ft(l,"readystatechange"),Rn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=B===0){var N=String(l.D).match(Zm)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!J1.test(N?N.toLowerCase():"")}m=y}if(m)ft(l,"complete"),ft(l,"success");else{l.m=6;try{var D=2<Rn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",lg(l)}}finally{Ba(l)}}}}function Ba(l,d){if(l.g){cg(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ft(l,"ready");try{m.onreadystatechange=y}catch{}}}function cg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Rn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),x1(d)}};function dg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function eI(l){const d={};l=(l.g&&2<=Rn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(v(l[y]))continue;var m=R(l[y]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const D=d[N]||[];d[N]=D,D.push(m)}S(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qs(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function hg(l){this.Aa=0,this.i=[],this.j=new Us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qs("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qs("baseRetryDelayMs",5e3,l),this.cb=qs("retryDelaySeedMs",1e4,l),this.Wa=qs("forwardChannelMaxRetries",2,l),this.wa=qs("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Km(l&&l.concurrentRequestLimit),this.Da=new Y1,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hg.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,y){pt(0),this.W=l,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Eg(this,null,this.W),Wa(this)};function Jc(l){if(fg(l),l.G==3){var d=l.U++,m=An(l.I);if(ge(m,"SID",l.K),ge(m,"RID",d),ge(m,"TYPE","terminate"),Ks(l,m),d=new tr(l,l.j,d),d.L=2,d.v=Ua(An(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Tg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ma(d)}wg(l)}function za(l){l.g&&(ed(l),l.g.cancel(),l.g=null)}function fg(l){za(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ha(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Wa(l){if(!Gm(l.h)&&!l.s){l.s=!0;var d=l.Ga;He||Q(),j||(He(),j=!0),H.add(d,l),l.B=0}}function tI(l,d){return Qm(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Fs(p(l.Ga,l,d),_g(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new tr(this,this.j,l);let D=this.o;if(this.S&&(D?(D=_(D),P(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=mg(this,N,d),m=An(this.I),ge(m,"RID",l),ge(m,"CVER",22),this.D&&ge(m,"X-HTTP-Session-Id",this.D),Ks(this,m),D&&(this.O?d="headers="+encodeURIComponent(String(og(D)))+"&"+d:this.m&&Xc(m,this.m,D)),Yc(this.h,N),this.Ua&&ge(m,"TYPE","init"),this.P?(ge(m,"$req",d),ge(m,"SID","null"),N.T=!0,qc(N,m,null)):qc(N,m,d),this.G=2}}else this.G==3&&(l?pg(this,l):this.i.length==0||Gm(this.h)||pg(this))};function pg(l,d){var m;d?m=d.l:m=l.U++;const y=An(l.I);ge(y,"SID",l.K),ge(y,"RID",m),ge(y,"AID",l.T),Ks(l,y),l.m&&l.o&&Xc(y,l.m,l.o),m=new tr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=mg(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Yc(l.h,m),qc(m,y,d)}function Ks(l,d){l.H&&M(l.H,function(m,y){ge(d,y,m)}),l.l&&Jm({},function(m,y){ge(d,y,m)})}function mg(l,d,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var N=l.i;let D=-1;for(;;){const B=["count="+m];D==-1?0<m?(D=N[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let he=!0;for(let qe=0;qe<m;qe++){let se=N[qe].g;const nt=N[qe].map;if(se-=D,0>se)D=Math.max(0,N[qe].g-100),he=!1;else try{X1(nt,B,"req"+se+"_")}catch{y&&y(nt)}}if(he){y=B.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,y}function gg(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;He||Q(),j||(He(),j=!0),H.add(d,l),l.v=0}}function Zc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Fs(p(l.Fa,l),_g(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,vg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Fs(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),za(this),vg(this))};function ed(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function vg(l){l.g=new tr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=An(l.qa);ge(d,"RID","rpc"),ge(d,"SID",l.K),ge(d,"AID",l.T),ge(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(d,"TO",l.ja),ge(d,"TYPE","xmlhttp"),Ks(l,d),l.m&&l.o&&Xc(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Ua(An(d)),m.m=null,m.P=!0,Wm(m,l)}t.Za=function(){this.C!=null&&(this.C=null,za(this),Zc(this),pt(19))};function Ha(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function yg(l,d){var m=null;if(l.g==d){Ha(l),ed(l),l.g=null;var y=2}else if(Qc(l.h,d))m=d.D,Ym(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;y=Oa(),ft(y,new $m(y,m)),Wa(l)}else gg(l);else if(N=d.s,N==3||N==0&&0<d.X||!(y==1&&tI(l,d)||y==2&&Zc(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),N){case 1:Hr(l,5);break;case 4:Hr(l,10);break;case 3:Hr(l,6);break;default:Hr(l,2)}}}function _g(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function Hr(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),y=l.Xa;const N=!y;y=new Wr(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Va(y,"https"),Ua(y),N?G1(y.toString(),m):Q1(y.toString(),m)}else pt(2);l.G=0,l.l&&l.l.sa(d),wg(l),fg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function wg(l){if(l.G=0,l.ka=[],l.l){const d=Xm(l.h);(d.length!=0||l.i.length!=0)&&(k(l.ka,d),k(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Eg(l,d,m){var y=m instanceof Wr?An(m):new Wr(m);if(y.g!="")d&&(y.g=d+"."+y.g),Fa(y,y.s);else{var N=a.location;y=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var D=new Wr(null);y&&Va(D,y),d&&(D.g=d),N&&Fa(D,N),m&&(D.l=m),y=D}return m=l.D,d=l.ya,m&&d&&ge(y,m,d),ge(y,"VER",l.la),Ks(l,y),y}function Tg(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Pe(new $a({eb:m})):new Pe(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sg(){}t=Sg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qa(){}qa.prototype.g=function(l,d){return new Ct(l,d)};function Ct(l,d){tt.call(this),this.g=new hg(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!v(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ri(this)}T(Ct,tt),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Jc(this.g)},Ct.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=$c(l),l=m);d.i.push(new F1(d.Ya++,l)),d.G==3&&Wa(d)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,Ct.aa.N.call(this)};function Ig(l){Bc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T(Ig,Bc);function kg(){zc.call(this),this.status=1}T(kg,zc);function Ri(l){this.g=l}T(Ri,Sg),Ri.prototype.ua=function(){ft(this.g,"a")},Ri.prototype.ta=function(l){ft(this.g,new Ig(l))},Ri.prototype.sa=function(l){ft(this.g,new kg)},Ri.prototype.ra=function(){ft(this.g,"b")},qa.prototype.createWebChannel=qa.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,CT=function(){return new qa},PT=function(){return Oa()},kT=Br,sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Da.NO_ERROR=0,Da.TIMEOUT=8,Da.HTTP_ERROR=6,Vl=Da,jm.COMPLETE="complete",IT=jm,Mm.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",tt.prototype.listen=tt.prototype.K,po=Mm,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,ST=Pe}).apply(typeof fl<"u"?fl:typeof self<"u"?self:typeof window<"u"?window:{});const Iy="@firebase/firestore";/**
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
 */let lt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Ns="10.14.0";/**
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
 */const hi=new kp("@firebase/firestore");function no(){return hi.logLevel}function W(t,...e){if(hi.logLevel<=ne.DEBUG){const n=e.map(Vp);hi.debug(`Firestore (${Ns}): ${t}`,...n)}}function Qn(t,...e){if(hi.logLevel<=ne.ERROR){const n=e.map(Vp);hi.error(`Firestore (${Ns}): ${t}`,...n)}}function ys(t,...e){if(hi.logLevel<=ne.WARN){const n=e.map(Vp);hi.warn(`Firestore (${Ns}): ${t}`,...n)}}function Vp(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function ue(t,e){t||X()}function Z(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class AT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class ZN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class e2{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new AT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new lt(e)}}class t2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class n2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new t2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class r2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class i2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new r2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function s2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class RT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=s2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new $e(0,0))}static max(){return new J(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends ta{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const o2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends ta{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return o2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ae.fromString(e))}static fromName(e){return new K(Ae.fromString(e).popFirst(5))}static empty(){return new K(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ae(e.slice()))}}function a2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Or(i,K.empty(),e)}function l2(t){return new Or(t.readTime,t.key,-1)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(J.min(),K.empty(),-1)}static max(){return new Or(J.max(),K.empty(),-1)}}function u2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const c2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class d2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sa(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==c2)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function h2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ia(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fp.oe=-1;function pc(t){return t==null}function Iu(t){return t===0&&1/t==-1/0}function f2(t){return typeof t=="number"&&Number.isInteger(t)&&!Iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ky(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pl(this.root,e,this.comparator,!0)}}class pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Py(this.data.getIterator())}getIteratorFrom(e){return new Py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Xe(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new xT("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const p2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=p2.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fi(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function Up(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $p(t){const e=t.mapValue.fields.__previous_value__;return Up(e)?$p(e):e}function na(t){const e=Dr(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class m2{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ml={mapValue:{}};function pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Up(t)?4:v2(t)?9007199254740991:g2(t)?10:11:X()}function _n(t,e){if(t===e)return!0;const n=pi(t);if(n!==pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Dr(i.timestampValue),a=Dr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return fi(i.bytesValue).isEqual(fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),a=be(s.doubleValue);return o===a?Iu(o)===Iu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ky(o)!==ky(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!_n(o[u],a[u])))return!1;return!0}(t,e);default:return X()}}function ia(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=pi(t),r=pi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(na(t),na(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=fi(s),u=fi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=oe(a[c],u[c]);if(h!==0)return h}return oe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=oe(be(s.latitude),be(o.latitude));return a!==0?a:oe(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ay(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=p.value)===null||u===void 0?void 0:u.arrayValue,C=oe(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:Ay(g,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ml.mapValue&&o===ml.mapValue)return 0;if(s===ml.mapValue)return 1;if(o===ml.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=oe(u[f],h[f]);if(p!==0)return p;const g=ws(a[u[f]],c[h[f]]);if(g!==0)return g}return oe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw X()}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Dr(t),r=Dr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Ay(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ws(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Es(t){return of(t)}function of(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=of(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${of(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function af(t){return!!t&&"integerValue"in t}function jp(t){return!!t&&"arrayValue"in t}function Ry(t){return!!t&&"nullValue"in t}function by(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function g2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function v2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Co(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(Co(this.value))}}function NT(t){const e=[];return ki(t.fields,(n,r)=>{const i=new Qe([n]);if(Fl(r)){const s=NT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
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
 */class ct{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,J.min(),J.min(),J.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new ct(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ct(e,2,n,J.min(),J.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,J.min(),J.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ku{constructor(e,n){this.position=e,this.inclusive=n}}function xy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ws(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ny(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function y2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class OT{}class Fe extends OT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new w2(e,n,r):n==="array-contains"?new S2(e,r):n==="in"?new I2(e,r):n==="not-in"?new k2(e,r):n==="array-contains-any"?new P2(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new E2(e,r):new T2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&pi(this.value)===pi(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends OT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new wn(e,n)}matches(e){return DT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function DT(t){return t.op==="and"}function LT(t){return _2(t)&&DT(t)}function _2(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function lf(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Es(t.value);if(LT(t))return t.filters.map(e=>lf(e)).join(",");{const e=t.filters.map(n=>lf(n)).join(",");return`${t.op}(${e})`}}function MT(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(t,e):t instanceof wn?function(r,i){return i instanceof wn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&MT(o,i.filters[a]),!0):!1}(t,e):void X()}function VT(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Es(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(VT).join(" ,")+"}"}(t):"Filter"}class w2 extends Fe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class E2 extends Fe{constructor(e,n){super(e,"in",n),this.keys=FT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class T2 extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=FT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class S2 extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jp(n)&&ia(n.arrayValue,this.value)}}class I2 extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class k2 extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ia(this.value.arrayValue,n)}}class P2 extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
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
 */class C2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Oy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new C2(t,e,n,r,i,s,o)}function Bp(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Es(r)).join(",")),e.ue=n}return e.ue}function zp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!y2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!MT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ny(t.startAt,e.startAt)&&Ny(t.endAt,e.endAt)}function uf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class mc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function A2(t,e,n,r,i,s,o,a){return new mc(t,e,n,r,i,s,o,a)}function Wp(t){return new mc(t)}function Dy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function R2(t){return t.collectionGroup!==null}function Ao(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Xe(Qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pu(s,r))}),n.has(Qe.keyField().canonicalString())||e.ce.push(new Pu(Qe.keyField(),r))}return e.ce}function gn(t){const e=Z(t);return e.le||(e.le=b2(e,Ao(t))),e.le}function b2(t,e){if(t.limitType==="F")return Oy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pu(i.field,s)});const n=t.endAt?new ku(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ku(t.startAt.position,t.startAt.inclusive):null;return Oy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cf(t,e,n){return new mc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gc(t,e){return zp(gn(t),gn(e))&&t.limitType===e.limitType}function UT(t){return`${Bp(gn(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>VT(i)).join(", ")}]`),pc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Es(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function vc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ao(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=xy(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ao(r),i)||r.endAt&&!function(o,a,u){const c=xy(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ao(r),i))}(t,e)}function x2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $T(t){return(e,n)=>{let r=!1;for(const i of Ao(t)){const s=N2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function N2(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ws(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bT(this.inner)}size(){return this.innerSize}}/**
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
 */const O2=new ke(K.comparator);function Yn(){return O2}const jT=new ke(K.comparator);function mo(...t){let e=jT;for(const n of t)e=e.insert(n.key,n);return e}function BT(t){let e=jT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return Ro()}function zT(){return Ro()}function Ro(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const D2=new ke(K.comparator),L2=new Xe(K.comparator);function te(...t){let e=L2;for(const n of t)e=e.add(n);return e}const M2=new Xe(oe);function V2(){return M2}/**
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
 */function Hp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function WT(t){return{integerValue:""+t}}function F2(t,e){return f2(e)?WT(e):Hp(t,e)}/**
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
 */class yc{constructor(){this._=void 0}}function U2(t,e,n){return t instanceof sa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Up(s)&&(s=$p(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof oa?qT(t,e):t instanceof aa?KT(t,e):function(i,s){const o=HT(i,s),a=Ly(o)+Ly(i.Pe);return af(o)&&af(i.Pe)?WT(a):Hp(i.serializer,a)}(t,e)}function $2(t,e,n){return t instanceof oa?qT(t,e):t instanceof aa?KT(t,e):n}function HT(t,e){return t instanceof Cu?function(r){return af(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class sa extends yc{}class oa extends yc{constructor(e){super(),this.elements=e}}function qT(t,e){const n=GT(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class aa extends yc{constructor(e){super(),this.elements=e}}function KT(t,e){let n=GT(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class Cu extends yc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ly(t){return be(t.integerValue||t.doubleValue)}function GT(t){return jp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class j2{constructor(e,n){this.field=e,this.transform=n}}function B2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oa&&i instanceof oa||r instanceof aa&&i instanceof aa?_s(r.elements,i.elements,_n):r instanceof Cu&&i instanceof Cu?_n(r.Pe,i.Pe):r instanceof sa&&i instanceof sa}(t.transform,e.transform)}class z2{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _c{}function QT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new XT(t.key,vn.none()):new ka(t.key,t.data,vn.none());{const n=t.data,r=wt.empty();let i=new Xe(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jr(t.key,r,new bt(i.toArray()),vn.none())}}function W2(t,e,n){t instanceof ka?function(i,s,o){const a=i.value.clone(),u=Vy(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(i,s,o){if(!Ul(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Vy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(YT(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof ka?function(s,o,a,u){if(!Ul(s.precondition,o))return a;const c=s.value.clone(),h=Fy(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(s,o,a,u){if(!Ul(s.precondition,o))return a;const c=Fy(s.fieldTransforms,u,o),h=o.data;return h.setAll(YT(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Ul(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function H2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=HT(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function My(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_s(r,i,(s,o)=>B2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ka extends _c{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jr extends _c{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function YT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vy(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$2(o,a,n[i]))}return r}function Fy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,U2(s,o,e))}return r}class XT extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q2 extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class K2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&W2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=QT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>My(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>My(n,r))}}class qp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return D2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qp(e,n,r,i)}}/**
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
 */class G2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Q2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Oe,re;function Y2(t){switch(t){default:return X();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function JT(t){if(t===void 0)return Qn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Oe.OK:return U.OK;case Oe.CANCELLED:return U.CANCELLED;case Oe.UNKNOWN:return U.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return U.INTERNAL;case Oe.UNAVAILABLE:return U.UNAVAILABLE;case Oe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Oe.NOT_FOUND:return U.NOT_FOUND;case Oe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Oe.ABORTED:return U.ABORTED;case Oe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Oe.DATA_LOSS:return U.DATA_LOSS;default:return X()}}(re=Oe||(Oe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function X2(){return new TextEncoder}/**
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
 */const J2=new ii([4294967295,4294967295],0);function Uy(t){const e=X2().encode(t),n=new TT;return n.update(e),new Uint8Array(n.digest())}function $y(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ii([n,r],0),new ii([i,s],0)]}class Kp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ii.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ii.fromNumber(r)));return i.compare(J2)===1&&(i=new ii([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Uy(e),[r,i]=$y(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Kp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Uy(e),[r,i]=$y(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wc(J.min(),i,new ke(oe),Yn(),te())}}class Pa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pa(r,n,te(),te(),te())}}/**
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
 */class $l{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class ZT{constructor(e,n){this.targetId=e,this.me=n}}class eS{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jy{constructor(){this.fe=0,this.ge=zy(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Pa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=zy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Z2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=By(),this.Qe=new ke(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(uf(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ct.newNoDocument(o,J.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=fi(r).toUint8Array()}catch(u){if(u instanceof xT)return ys("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Kp(o,i,s)}catch(u){return ys(u instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&uf(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ct.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new wc(e,n,this.Qe,this.ke,r);return this.ke=Yn(),this.qe=By(),this.Qe=new ke(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new jy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function By(){return new ke(K.comparator)}function zy(){return new ke(K.comparator)}const eO={asc:"ASCENDING",desc:"DESCENDING"},tO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nO={and:"AND",or:"OR"};class rO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function df(t,e){return t.useProto3Json||pc(e)?e:{value:e}}function Au(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iO(t,e){return Au(t,e.toTimestamp())}function yn(t){return ue(!!t),J.fromTimestamp(function(n){const r=Dr(n);return new $e(r.seconds,r.nanos)}(t))}function Gp(t,e){return hf(t,e).canonicalString()}function hf(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nS(t){const e=Ae.fromString(t);return ue(aS(e)),e}function ff(t,e){return Gp(t.databaseId,e.path)}function Fd(t,e){const n=nS(e);if(n.get(1)!==t.databaseId.projectId)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(iS(n))}function rS(t,e){return Gp(t.databaseId,e)}function sO(t){const e=nS(t);return e.length===4?Ae.emptyPath():iS(e)}function pf(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iS(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wy(t,e,n){return{name:ff(t,e),fields:n.value.mapValue.fields}}function oO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ue(h===void 0||typeof h=="string"),Ze.fromBase64String(h||"")):(ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ze.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?U.UNKNOWN:JT(c.code);return new q(h,c.message||"")}(o);n=new eS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fd(t,r.document.name),s=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):J.min(),a=new wt({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new $l(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fd(t,r.document),s=r.readTime?yn(r.readTime):J.min(),o=ct.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $l([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fd(t,r.document),s=r.removedTargetIds||[];n=new $l([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Q2(i,s),a=r.targetId;n=new ZT(a,o)}}return n}function aO(t,e){let n;if(e instanceof ka)n={update:Wy(t,e.key,e.value)};else if(e instanceof XT)n={delete:ff(t,e.key)};else if(e instanceof jr)n={update:Wy(t,e.key,e.data),updateMask:gO(e.fieldMask)};else{if(!(e instanceof q2))return X();n={verify:ff(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof sa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function lO(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?yn(i.updateTime):yn(s);return o.isEqual(J.min())&&(o=yn(s)),new z2(o,i.transformResults||[])}(n,e))):[]}function uO(t,e){return{documents:[rS(t,e.path)]}}function cO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rS(t,i);const s=function(c){if(c.length!==0)return oS(wn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Vi(p.field),direction:fO(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=df(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function dO(t){let e=sO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=sS(f);return p instanceof wn&&LT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(T){return new Pu(Fi(T.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,pc(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,g=f.values||[];return new ku(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new ku(g,p)}(n.endAt)),A2(e,i,o,s,a,"F",u,c)}function hO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fi(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fi(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fi(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fi(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(Fi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>sS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function fO(t){return eO[t]}function pO(t){return tO[t]}function mO(t){return nO[t]}function Vi(t){return{fieldPath:t.canonicalString()}}function Fi(t){return Qe.fromServerFormat(t.fieldPath)}function oS(t){return t instanceof Fe?function(n){if(n.op==="=="){if(by(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NAN"}};if(Ry(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(by(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NAN"}};if(Ry(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(n.field),op:pO(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(i=>oS(i));return r.length===1?r[0]:{compositeFilter:{op:mO(n.op),filters:r}}}(t):X()}function gO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _r{constructor(e,n,r,i,s=J.min(),o=J.min(),a=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vO{constructor(e){this.ct=e}}function yO(t){const e=dO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cf(e,e.limit,"L"):e}/**
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
 */class _O{constructor(){this.un=new wO}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Or.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class wO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xe(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(Ae.comparator)).toArray()}}/**
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
 */class Ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ts(0)}static kn(){return new Ts(-1)}}/**
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
 */class EO{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class SO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bo(r.mutation,i,bt.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=mo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yn();const o=Ro(),a=function(){return Ro()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof jr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),bo(h.mutation,c,h.mutation.getFieldMask(),$e.now())):o.set(c.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new TO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ro();let i=new ke((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||bt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||te()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=zT();h.forEach(p=>{if(!s.has(p)){const g=QT(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):R2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ei());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(h=>({batchId:a,changes:BT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=mo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,p){return new mc(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ct.newInvalidDocument(h)))});let a=mo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&bo(h.mutation,c,bt.empty(),$e.now()),vc(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class IO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:yO(i.bundledQuery),readTime:yn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class kO{constructor(){this.overlays=new ke(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ei(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ei(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ei(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new G2(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class PO{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Qp{constructor(){this.Tr=new Xe(je.Er),this.dr=new Xe(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ae([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ae([])),r=new je(n,e),i=new je(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class CO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Xe(je.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new K2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(oe);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new je(new K(s),0);let a=new Xe(oe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class AO{constructor(e){this.Mr=e,this.docs=function(){return new ke(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||u2(l2(h),r)<=0||(i.has(h.key)||vc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RO(this)}getSize(e){return F.resolve(this.size)}}class RO extends EO{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class bO{constructor(e){this.persistence=e,this.Nr=new Os(n=>Bp(n),zp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qp,this.targetCount=0,this.kr=Ts.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class xO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Fp(0),this.Kr=!1,this.Kr=!0,this.$r=new PO,this.referenceDelegate=e(this),this.Ur=new bO(this),this.indexManager=new _O,this.remoteDocumentCache=function(i){return new AO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new vO(n),this.Gr=new IO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new CO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new NO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class NO extends d2{constructor(e){super(),this.currentSequenceNumber=e}}class Yp{constructor(e){this.persistence=e,this.Jr=new Qp,this.Yr=null}static Zr(e){return new Yp(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Xp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xp(e,n.fromCache,r,i)}}/**
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
 */class OO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return wR()?8:h2(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new OO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(no()<=ne.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(no()<=ne.DEBUG&&W("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(no()<=ne.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):F.resolve())}Yi(e,n){if(Dy(n))return F.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cf(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,cf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Dy(n)||i.isEqual(J.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(no()<=ne.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.rs(e,o,n,a2(i,-1)).next(a=>a))})}ts(e,n){let r=new Xe($T(e));return n.forEach((i,s)=>{vc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return no()<=ne.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Or.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class LO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ke(oe),this._s=new Os(s=>Bp(s),zp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function MO(t,e,n,r){return new LO(t,e,n,r)}async function lS(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function VO(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let g=F.resolve();return p.forEach(T=>{g=g.next(()=>h.getEntry(u,T)).next(C=>{const k=c.docVersions.get(T);ue(k!==null),C.version.compareTo(k)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function uS(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function FO(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Ze.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(C,k,E){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(s,g))});let u=Yn(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(UO(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(J.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function UO(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function $O(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jO(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function mf(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ia(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Hy(t,e,n){const r=Z(t);let i=J.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=Z(u),p=f._s.get(h);return p!==void 0?F.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,gn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:te())).next(a=>(BO(r,x2(e),a),{documents:a,Ts:s})))}function BO(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class qy{constructor(){this.activeTargetIds=V2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zO{constructor(){this.so=new qy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new qy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WO{_o(e){}shutdown(){}}/**
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
 */class Ky{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gl=null;function Ud(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
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
 */const HO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class qO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ot="WebChannelConnection";class KO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Ud(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(W("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ys("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=HO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Ud();return new Promise((o,a)=>{const u=new ST;u.setWithCredentials(!0),u.listenOnce(IT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Vl.NO_ERROR:const h=u.getResponseJson();W(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Vl.TIMEOUT:W(ot,`RPC '${e}' ${s} timed out`),a(new q(U.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const f=u.getStatus();if(W(ot,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const T=function(k){const E=k.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(E)>=0?E:U.UNKNOWN}(g.status);a(new q(T,g.message))}else a(new q(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new q(U.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(ot,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Ud(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=CT(),a=PT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");W(ot,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let p=!1,g=!1;const T=new qO({Io:k=>{g?W(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(W(ot,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),W(ot,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},To:()=>f.close()}),C=(k,E,v)=>{k.listen(E,w=>{try{v(w)}catch(b){setTimeout(()=>{throw b},0)}})};return C(f,po.EventType.OPEN,()=>{g||(W(ot,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),C(f,po.EventType.CLOSE,()=>{g||(g=!0,W(ot,`RPC '${e}' stream ${i} transport closed`),T.So())}),C(f,po.EventType.ERROR,k=>{g||(g=!0,ys(ot,`RPC '${e}' stream ${i} transport errored:`,k),T.So(new q(U.UNAVAILABLE,"The operation could not be completed")))}),C(f,po.EventType.MESSAGE,k=>{var E;if(!g){const v=k.data[0];ue(!!v);const w=v,b=w.error||((E=w[0])===null||E===void 0?void 0:E.error);if(b){W(ot,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let M=function(I){const P=Oe[I];if(P!==void 0)return JT(P)}(L),S=b.message;M===void 0&&(M=U.INTERNAL,S="Unknown error status: "+L+" with message "+b.message),g=!0,T.So(new q(M,S)),f.close()}else W(ot,`RPC '${e}' stream ${i} received:`,v),T.bo(v)}}),C(a,kT.STAT_EVENT,k=>{k.stat===sf.PROXY?W(ot,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===sf.NOPROXY&&W(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function $d(){return typeof document<"u"?document:null}/**
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
 */function Ec(t){return new rO(t,!0)}/**
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
 */class cS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class dS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new cS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GO extends dS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=oO(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?yn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=pf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=uf(u)?{documents:uO(s,u)}:{query:cO(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tS(s,o.resumeToken);const c=df(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Au(s,o.snapshotVersion.toTimestamp());const c=df(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=hO(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=pf(this.serializer),n.removeTarget=e,this.a_(n)}}class QO extends dS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=lO(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=pf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aO(this.serializer,r))};this.a_(n)}}/**
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
 */class YO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,hf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(U.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,hf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class XO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class JO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Pi(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await Ca(c),c.q_.set("Unknown"),c.L_.delete(4),await Tc(c)}(this))})}),this.q_=new XO(r,i)}}async function Tc(t){if(Pi(t))for(const e of t.B_)await e(!0)}async function Ca(t){for(const e of t.B_)await e(!1)}function hS(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),tm(n)?em(n):Ds(n).r_()&&Zp(n,e))}function Jp(t,e){const n=Z(t),r=Ds(n);n.N_.delete(e),r.r_()&&fS(n,e),n.N_.size===0&&(r.r_()?r.o_():Pi(n)&&n.q_.set("Unknown"))}function Zp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ds(t).A_(e)}function fS(t,e){t.Q_.xe(e),Ds(t).R_(e)}function em(t){t.Q_=new Z2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ds(t).start(),t.q_.v_()}function tm(t){return Pi(t)&&!Ds(t).n_()&&t.N_.size>0}function Pi(t){return Z(t).L_.size===0}function pS(t){t.Q_=void 0}async function ZO(t){t.q_.set("Online")}async function eD(t){t.N_.forEach((e,n)=>{Zp(t,e)})}async function tD(t,e){pS(t),tm(t)?(t.q_.M_(e),em(t)):t.q_.set("Unknown")}async function nD(t,e,n){if(t.q_.set("Online"),e instanceof eS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ru(t,r)}else if(e instanceof $l?t.Q_.Ke(e):e instanceof ZT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await uS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Ze.EMPTY_BYTE_STRING,h.snapshotVersion)),fS(s,u);const f=new _r(h.target,u,c,h.sequenceNumber);Zp(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Ru(t,r)}}async function Ru(t,e,n){if(!Ia(e))throw e;t.L_.add(1),await Ca(t),t.q_.set("Offline"),n||(n=()=>uS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Tc(t)})}function mS(t,e){return e().catch(n=>Ru(t,n,e))}async function Sc(t){const e=Z(t),n=Lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;rD(e);)try{const i=await $O(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,iD(e,i)}catch(i){await Ru(e,i)}gS(e)&&vS(e)}function rD(t){return Pi(t)&&t.O_.length<10}function iD(t,e){t.O_.push(e);const n=Lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function gS(t){return Pi(t)&&!Lr(t).n_()&&t.O_.length>0}function vS(t){Lr(t).start()}async function sD(t){Lr(t).p_()}async function oD(t){const e=Lr(t);for(const n of t.O_)e.m_(n.mutations)}async function aD(t,e,n){const r=t.O_.shift(),i=qp.from(r,e,n);await mS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Sc(t)}async function lD(t,e){e&&Lr(t).V_&&await async function(r,i){if(function(o){return Y2(o)&&o!==U.ABORTED}(i.code)){const s=r.O_.shift();Lr(r).s_(),await mS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sc(r)}}(t,e),gS(t)&&vS(t)}async function Gy(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Pi(n);n.L_.add(3),await Ca(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Tc(n)}async function uD(t,e){const n=Z(t);e?(n.L_.delete(2),await Tc(n)):e||(n.L_.add(2),await Ca(n),n.q_.set("Unknown"))}function Ds(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new GO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ZO.bind(null,t),Ro:eD.bind(null,t),mo:tD.bind(null,t),d_:nD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),tm(t)?em(t):t.q_.set("Unknown")):(await t.K_.stop(),pS(t))})),t.K_}function Lr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new QO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:sD.bind(null,t),mo:lD.bind(null,t),f_:oD.bind(null,t),g_:aD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Sc(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class nm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new nm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rm(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Ia(t))return new q(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class as{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new as(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Qy{constructor(){this.W_=new ke(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ss(e,n,as.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class cD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class dD{constructor(){this.queries=Yy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Yy(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new q(U.ABORTED,"Firestore shutting down"))}}function Yy(){return new Os(t=>UT(t),gc)}async function hD(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new cD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=rm(o,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&im(n)}async function fD(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pD(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&im(n)}function mD(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function im(t){t.Y_.forEach(e=>{e.next()})}var gf,Xy;(Xy=gf||(gf={})).ea="default",Xy.Cache="cache";class gD{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==gf.Cache}}/**
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
 */class yS{constructor(e){this.key=e}}class _S{constructor(e){this.key=e}}class vD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=$T(e),this.Ra=new as(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Qy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=vc(this.query,f)?f:null,T=!!p&&this.mutatedKeys.has(p.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;p&&g?p.data.isEqual(g.data)?T!==C&&(r.track({type:3,doc:g}),k=!0):this.ga(p,g)||(r.track({type:2,doc:g}),k=!0,(u&&this.Aa(g,u)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),k=!0):p&&!g&&(r.track({type:1,doc:p}),k=!0,(u||c)&&(a=!0)),k&&(g?(o=o.add(g),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,T){const C=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return C(g)-C(T)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ss(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _S(r))}),this.da.forEach(r=>{e.has(r)||n.push(new yS(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ss.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class yD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _D{constructor(e){this.key=e,this.va=!1}}class wD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Os(a=>UT(a),gc),this.Ma=new Map,this.xa=new Set,this.Oa=new ke(K.comparator),this.Na=new Map,this.La=new Qp,this.Ba={},this.ka=new Map,this.qa=Ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ED(t,e,n=!0){const r=kS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await wS(r,e,n,!0),i}async function TD(t,e){const n=kS(t);await wS(n,e,!0,!1)}async function wS(t,e,n,r){const i=await jO(t.localStore,gn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await SD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&hS(t.remoteStore,i),a}async function SD(t,e,n,r,i){t.Ka=(f,p,g)=>async function(C,k,E,v){let w=k.view.ma(E);w.ns&&(w=await Hy(C.localStore,k.query,!1).then(({documents:S})=>k.view.ma(S,w)));const b=v&&v.targetChanges.get(k.targetId),L=v&&v.targetMismatches.get(k.targetId)!=null,M=k.view.applyChanges(w,C.isPrimaryClient,b,L);return Zy(C,k.targetId,M.wa),M.snapshot}(t,f,p,g);const s=await Hy(t.localStore,e,!0),o=new vD(e,s.Ts),a=o.ma(s.documents),u=Pa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Zy(t,n,c.wa);const h=new yD(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function ID(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!gc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Jp(r.remoteStore,i.targetId),vf(r,i.targetId)}).catch(Sa)):(vf(r,i.targetId),await mf(r.localStore,i.targetId,!0))}async function kD(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jp(n.remoteStore,r.targetId))}async function PD(t,e,n){const r=OD(t);try{const i=await function(o,a){const u=Z(o),c=$e.now(),h=a.reduce((g,T)=>g.add(T.key),te());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let T=Yn(),C=te();return u.cs.getEntries(g,h).next(k=>{T=k,T.forEach((E,v)=>{v.isValidDocument()||(C=C.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,T)).next(k=>{f=k;const E=[];for(const v of a){const w=H2(v,f.get(v.key).overlayedDocument);w!=null&&E.push(new jr(v.key,w,NT(w.value.mapValue),vn.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,E,a)}).next(k=>{p=k;const E=k.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(g,k.batchId,E)})}).then(()=>({batchId:p.batchId,changes:BT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new ke(oe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Aa(r,i.changes),await Sc(r.remoteStore)}catch(i){const s=rm(i,"Failed to persist write");n.reject(s)}}async function ES(t,e){const n=Z(t);try{const r=await FO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ue(o.va):i.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await Aa(n,r,e)}catch(r){await Sa(r)}}function Jy(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=Z(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&im(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CD(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ke(K.comparator);o=o.insert(s,ct.newNoDocument(s,J.min()));const a=te().add(s),u=new wc(J.min(),new Map,new ke(oe),o,a);await ES(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),sm(r)}else await mf(r.localStore,e,!1).then(()=>vf(r,e,n)).catch(Sa)}async function AD(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await VO(n.localStore,e);SS(n,r,null),TS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Aa(n,i)}catch(i){await Sa(i)}}async function RD(t,e,n){const r=Z(t);try{const i=await function(o,a){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ue(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);SS(r,e,n),TS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Aa(r,i)}catch(i){await Sa(i)}}function TS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function SS(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||IS(t,r)})}function IS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Jp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),sm(t))}function Zy(t,e,n){for(const r of n)r instanceof yS?(t.La.addReference(r.key,e),bD(t,r)):r instanceof _S?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||IS(t,r.key)):X()}function bD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),sm(t))}function sm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ae.fromString(e)),r=t.qa.next();t.Na.set(r,new _D(n)),t.Oa=t.Oa.insert(n,r),hS(t.remoteStore,new _r(gn(Wp(n.path)),r,"TargetPurposeLimboResolution",Fp.oe))}}async function Aa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Xp.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=Z(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,p=>F.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>F.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Ia(f))throw f;W("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),T=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(p,C)}}}(r.localStore,s))}async function xD(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await lS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new q(U.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Aa(n,r.hs)}}function ND(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function kS(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ES.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ND.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CD.bind(null,e),e.Ca.d_=pD.bind(null,e.eventManager),e.Ca.$a=mD.bind(null,e.eventManager),e}function OD(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RD.bind(null,e),e}class bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return MO(this.persistence,new DO,e.initialUser,this.serializer)}Ga(e){return new xO(Yp.Zr,this.serializer)}Wa(e){return new zO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bu.provider={build:()=>new bu};class yf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xD.bind(null,this.syncEngine),await uD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dD}()}createDatastore(e){const n=Ec(e.databaseInfo.databaseId),r=function(s){return new KO(s)}(e.databaseInfo);return function(s,o,a,u){return new YO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new JO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Jy(this.syncEngine,n,0),function(){return Ky.D()?new Ky:new WO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new wD(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ca(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}yf.provider={build:()=>new yf};/**
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
 */class DD{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class LD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=RT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jd(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MD(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Gy(e.remoteStore,i)),t._onlineComponents=e}async function MD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await jd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await jd(t,new bu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await jd(t,new bu);return t._offlineComponents}async function PS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await e_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await e_(t,new yf))),t._onlineComponents}function VD(t){return PS(t).then(e=>e.syncEngine)}async function FD(t){const e=await PS(t),n=e.eventManager;return n.onListen=ED.bind(null,e.syncEngine),n.onUnlisten=ID.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=kD.bind(null,e.syncEngine),n}function UD(t,e,n={}){const r=new br;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new DD({next:p=>{h.Za(),o.enqueueAndForget(()=>fD(s,f));const g=p.docs.has(a);!g&&p.fromCache?c.reject(new q(U.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&u&&u.source==="server"?c.reject(new q(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new gD(Wp(a.path),h,{includeMetadataChanges:!0,_a:!0});return hD(s,f)}(await FD(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function CS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const t_=new Map;/**
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
 */function $D(t,e,n){if(!n)throw new q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jD(t,e,n,r){if(e===!0&&r===!0)throw new q(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n_(t){if(!K.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function om(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function mi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=om(t);throw new q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class r_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class am{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JN;switch(r.type){case"firstParty":return new n2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=t_.get(n);r&&(W("ComponentProvider","Removing Datastore"),t_.delete(n),r.terminate())}(this),Promise.resolve()}}function BD(t,e,n,r={}){var i;const s=(t=mi(t,am))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=lt.MOCK_USER;else{a=LE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new lt(c)}t._authCredentials=new ZN(new AT(a,u))}}/**
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
 */class lm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lm(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new la(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class la extends lm{constructor(e,n,r){super(e,n,Wp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new K(e))}withConverter(e){return new la(this.firestore,e,this._path)}}function um(t,e,...n){if(t=We(t),arguments.length===1&&(e=RT.newId()),$D("doc","path",e),t instanceof am){const r=Ae.fromString(e,...n);return n_(r),new Nt(t,null,new K(r))}{if(!(t instanceof Nt||t instanceof la))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return n_(r),new Nt(t.firestore,t instanceof la?t.converter:null,new K(r))}}/**
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
 */class i_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new cS(this,"async_queue_retry"),this.Vu=()=>{const r=$d();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=$d();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=$d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new br;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ia(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=nm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Ic extends am{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new i_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new i_(e),this._firestoreClient=void 0,await e}}}function zD(t,e){const n=typeof t=="object"?t:Cp(),r=typeof t=="string"?t:"(default)",i=bs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=NE("firestore");s&&BD(i,...s)}return i}function AS(t){if(t._terminated)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||WD(t),t._firestoreClient}function WD(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new m2(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,CS(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new LD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Is(Ze.fromBase64String(e))}catch(n){throw new q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Is(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class kc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pc{constructor(e){this._methodName=e}}/**
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
 */class cm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */class dm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const HD=/^__.*__$/;class qD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ka(e,this.data,n,this.fieldTransforms)}}class RS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class hm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new hm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(bS(this.Cu)&&HD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class KD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ec(e)}Qu(e,n,r,i=!1){return new hm({Cu:e,methodName:n,qu:r,path:Qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xS(t){const e=t._freezeSettings(),n=Ec(t._databaseId);return new KD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GD(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);pm("Data must be an object, but it was:",o,r);const a=NS(r,o);let u,c;if(s.merge)u=new bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=_f(e,f,n);if(!o.contains(p))throw new q(U.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);DS(h,p)||h.push(p)}u=new bt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new qD(new wt(a),u,c)}class Cc extends Pc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cc}}class fm extends Pc{_toFieldTransform(e){return new j2(e.path,new sa)}isEqual(e){return e instanceof fm}}function QD(t,e,n,r){const i=t.Qu(1,e,n);pm("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();ki(r,(u,c)=>{const h=mm(e,u,n);c=We(c);const f=i.Nu(h);if(c instanceof Cc)s.push(h);else{const p=Ac(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new bt(s);return new RS(o,a,i.fieldTransforms)}function YD(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[_f(e,r,n)],u=[i];if(s.length%2!=0)throw new q(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(_f(e,s[p])),u.push(s[p+1]);const c=[],h=wt.empty();for(let p=a.length-1;p>=0;--p)if(!DS(c,a[p])){const g=a[p];let T=u[p];T=We(T);const C=o.Nu(g);if(T instanceof Cc)c.push(g);else{const k=Ac(T,C);k!=null&&(c.push(g),h.set(g,k))}}const f=new bt(c);return new RS(h,f,o.fieldTransforms)}function Ac(t,e){if(OS(t=We(t)))return pm("Unsupported field value:",e,t),NS(t,e);if(t instanceof Pc)return function(r,i){if(!bS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ac(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return F2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:Au(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Au(i.serializer,s)}}if(r instanceof cm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Is)return{bytesValue:tS(i.serializer,r._byteString)};if(r instanceof Nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dm)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Hp(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${om(r)}`)}(t,e)}function NS(t,e){const n={};return bT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Ac(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function OS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof cm||t instanceof Is||t instanceof Nt||t instanceof Pc||t instanceof dm)}function pm(t,e,n){if(!OS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=om(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function _f(t,e,n){if((e=We(e))instanceof kc)return e._internalPath;if(typeof e=="string")return mm(t,e);throw xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const XD=new RegExp("[~\\*/\\[\\]]");function mm(t,e,n){if(e.search(XD)>=0)throw xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kc(...e.split("."))._internalPath}catch{throw xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(U.INVALID_ARGUMENT,a+t+u)}function DS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class LS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(MS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JD extends LS{data(){return super.data()}}function MS(t,e){return typeof e=="string"?mm(t,e):e instanceof kc?e._internalPath:e._delegate._internalPath}class ZD{convertValue(e,n="none"){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new dm(s)}convertGeoPoint(e){return new cm(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$p(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);ue(aS(r));const i=new ra(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function eL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class tL{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VS extends LS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nL(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(MS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class nL extends VS{data(e={}){return super.data(e)}}/**
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
 */function rL(t){t=mi(t,Nt);const e=mi(t.firestore,Ic);return UD(AS(e),t._key).then(n=>aL(e,t,n))}class iL extends ZD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function sL(t,e,n){t=mi(t,Nt);const r=mi(t.firestore,Ic),i=eL(t.converter,e);return FS(r,[GD(xS(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,vn.none())])}function oL(t,e,n,...r){t=mi(t,Nt);const i=mi(t.firestore,Ic),s=xS(i);let o;return o=typeof(e=We(e))=="string"||e instanceof kc?YD(s,"updateDoc",t._key,e,n,r):QD(s,"updateDoc",t._key,e),FS(i,[o.toMutation(t._key,vn.exists(!0))])}function FS(t,e){return function(r,i){const s=new br;return r.asyncQueue.enqueueAndForget(async()=>PD(await VD(r),i,s)),s.promise}(AS(t),e)}function aL(t,e,n){const r=n.docs.get(e._key),i=new iL(t);return new VS(t,i,e._key,r,new tL(n.hasPendingWrites,n.fromCache),e.converter)}function wf(){return new fm("serverTimestamp")}(function(e,n=!0){(function(i){Ns=i})(Ii),en(new Wt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ic(new e2(r.getProvider("auth-internal")),new i2(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),kt(Iy,"4.7.3",e),kt(Iy,"4.7.3","esm2017")})();var lL="firebase",uL="10.14.1";/**
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
 */kt(lL,uL,"app");/**
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
 */const US="firebasestorage.googleapis.com",cL="storageBucket",dL=2*60*1e3,hL=10*60*1e3;/**
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
 */class Sn extends nn{constructor(e,n,r=0){super(Bd(e),`Firebase Storage: ${n} (${Bd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Sn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var En;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(En||(En={}));function Bd(t){return"storage/"+t}function fL(){const t="An unknown error occurred, please check the error payload for server response.";return new Sn(En.UNKNOWN,t)}function pL(){return new Sn(En.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mL(){return new Sn(En.CANCELED,"User canceled the upload/download.")}function gL(t){return new Sn(En.INVALID_URL,"Invalid URL '"+t+"'.")}function vL(t){return new Sn(En.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function s_(t){return new Sn(En.INVALID_ARGUMENT,t)}function $S(){return new Sn(En.APP_DELETED,"The Firebase app was deleted.")}function yL(t){return new Sn(En.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw vL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),T={bucket:1,path:3},C=n===US?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",E=new RegExp(`^https?://${C}/${i}/${k}`,"i"),w=[{regex:a,indices:u,postModify:s},{regex:g,indices:T,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<w.length;b++){const L=w[b],M=L.regex.exec(e);if(M){const S=M[L.indices.bucket];let _=M[L.indices.path];_||(_=""),r=new Yt(S,_),L.postModify(r);break}}if(r==null)throw gL(e);return r}}class _L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function wL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...k){c||(c=!0,e.apply(null,k))}function f(k){i=setTimeout(()=>{i=null,t(g,u())},k)}function p(){s&&clearTimeout(s)}function g(k,...E){if(c){p();return}if(k){p(),h.call(null,k,...E);return}if(u()||o){p(),h.call(null,k,...E);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let T=!1;function C(k){T||(T=!0,p(),!c&&(i!==null?(k||(a=2),clearTimeout(i),f(0)):k||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function EL(t){t(!1)}/**
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
 */function TL(t){return t!==void 0}function o_(t,e,n,r){if(r<e)throw s_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw s_(`Invalid value for '${t}'. Expected ${n} or less.`)}function SL(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Nu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nu||(Nu={}));/**
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
 */function IL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class kL{constructor(e,n,r,i,s,o,a,u,c,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,T)=>{this.resolve_=g,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new vl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nu.NO_ERROR,u=s.getStatus();if(!a||IL(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Nu.ABORT;r(!1,new vl(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new vl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());TL(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=fL();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?$S():mL();o(u)}else{const u=pL();o(u)}};this.canceled_?n(!1,new vl(!1,null,!0)):this.backoffId_=wL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&EL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function RL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bL(t,e,n,r,i,s,o=!0){const a=SL(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return AL(c,e),PL(c,n),CL(c,s),RL(c,r),new kL(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function xL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ou{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ou(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return NL(this._location.path)}get storage(){return this._service}get parent(){const e=xL(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new Ou(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yL(e)}}function a_(t,e){const n=e==null?void 0:e[cL];return n==null?null:Yt.makeFromBucketSpec(n,t)}function OL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:LE(i,t.app.options.projectId))}class DL{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=US,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dL,this._maxUploadRetryTime=hL,this._requests=new Set,i!=null?this._bucket=Yt.makeFromBucketSpec(i,this._host):this._bucket=a_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=a_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){o_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){o_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ou(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new _L($S());{const o=bL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const l_="@firebase/storage",u_="0.13.2";/**
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
 */const jS="storage";function LL(t=Cp(),e){t=We(t);const r=bs(t,jS).getImmediate({identifier:e}),i=NE("storage");return i&&ML(r,...i),r}function ML(t,e,n,r={}){OL(t,e,n,r)}function VL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new DL(n,r,i,e,Ii)}function FL(){en(new Wt(jS,VL,"PUBLIC").setMultipleInstances(!0)),kt(l_,u_,""),kt(l_,u_,"esm2017")}FL();const BS="@firebase/installations",gm="0.6.9";/**
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
 */const zS=1e4,WS=`w:${gm}`,HS="FIS_v2",UL="https://firebaseinstallations.googleapis.com/v1",$L=60*60*1e3,jL="installations",BL="Installations";/**
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
 */const zL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gi=new Si(jL,BL,zL);function qS(t){return t instanceof nn&&t.code.includes("request-failed")}/**
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
 */function KS({projectId:t}){return`${UL}/projects/${t}/installations`}function GS(t){return{token:t.token,requestStatus:2,expiresIn:HL(t.expiresIn),creationTime:Date.now()}}async function QS(t,e){const r=(await e.json()).error;return gi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function YS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function WL(t,{refreshToken:e}){const n=YS(t);return n.append("Authorization",qL(e)),n}async function XS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HL(t){return Number(t.replace("s","000"))}function qL(t){return`${HS} ${t}`}/**
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
 */async function KL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=KS(t),i=YS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:HS,appId:t.appId,sdkVersion:WS},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await XS(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:GS(c.authToken)}}else throw await QS("Create Installation",u)}/**
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
 */function JS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function GL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const QL=/^[cdef][\w-]{21}$/,Ef="";function YL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=XL(t);return QL.test(n)?n:Ef}catch{return Ef}}function XL(t){return GL(t).substr(0,22)}/**
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
 */function Rc(t){return`${t.appName}!${t.appId}`}/**
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
 */const ZS=new Map;function e1(t,e){const n=Rc(t);t1(n,e),JL(n,e)}function t1(t,e){const n=ZS.get(t);if(n)for(const r of n)r(e)}function JL(t,e){const n=ZL();n&&n.postMessage({key:t,fid:e}),eM()}let ti=null;function ZL(){return!ti&&"BroadcastChannel"in self&&(ti=new BroadcastChannel("[Firebase] FID Change"),ti.onmessage=t=>{t1(t.data.key,t.data.fid)}),ti}function eM(){ZS.size===0&&ti&&(ti.close(),ti=null)}/**
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
 */const tM="firebase-installations-database",nM=1,vi="firebase-installations-store";let zd=null;function vm(){return zd||(zd=cc(tM,nM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vi)}}})),zd}async function Du(t,e){const n=Rc(t),i=(await vm()).transaction(vi,"readwrite"),s=i.objectStore(vi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&e1(t,e.fid),e}async function n1(t){const e=Rc(t),r=(await vm()).transaction(vi,"readwrite");await r.objectStore(vi).delete(e),await r.done}async function bc(t,e){const n=Rc(t),i=(await vm()).transaction(vi,"readwrite"),s=i.objectStore(vi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&e1(t,a.fid),a}/**
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
 */async function ym(t){let e;const n=await bc(t.appConfig,r=>{const i=rM(r),s=iM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ef?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function rM(t){const e=t||{fid:YL(),registrationStatus:0};return r1(e)}function iM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(gi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=sM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oM(t)}:{installationEntry:e}}async function sM(t,e){try{const n=await KL(t,e);return Du(t.appConfig,n)}catch(n){throw qS(n)&&n.customData.serverCode===409?await n1(t.appConfig):await Du(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function oM(t){let e=await c_(t.appConfig);for(;e.registrationStatus===1;)await JS(100),e=await c_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ym(t);return r||n}return e}function c_(t){return bc(t,e=>{if(!e)throw gi.create("installation-not-found");return r1(e)})}function r1(t){return aM(t)?{fid:t.fid,registrationStatus:0}:t}function aM(t){return t.registrationStatus===1&&t.registrationTime+zS<Date.now()}/**
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
 */async function lM({appConfig:t,heartbeatServiceProvider:e},n){const r=uM(t,n),i=WL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:WS,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await XS(()=>fetch(r,a));if(u.ok){const c=await u.json();return GS(c)}else throw await QS("Generate Auth Token",u)}function uM(t,{fid:e}){return`${KS(t)}/${e}/authTokens:generate`}/**
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
 */async function _m(t,e=!1){let n;const r=await bc(t.appConfig,s=>{if(!i1(s))throw gi.create("not-registered");const o=s.authToken;if(!e&&hM(o))return s;if(o.requestStatus===1)return n=cM(t,e),s;{if(!navigator.onLine)throw gi.create("app-offline");const a=pM(s);return n=dM(t,a),a}});return n?await n:r.authToken}async function cM(t,e){let n=await d_(t.appConfig);for(;n.authToken.requestStatus===1;)await JS(100),n=await d_(t.appConfig);const r=n.authToken;return r.requestStatus===0?_m(t,e):r}function d_(t){return bc(t,e=>{if(!i1(e))throw gi.create("not-registered");const n=e.authToken;return mM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dM(t,e){try{const n=await lM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Du(t.appConfig,r),n}catch(n){if(qS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await n1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Du(t.appConfig,r)}throw n}}function i1(t){return t!==void 0&&t.registrationStatus===2}function hM(t){return t.requestStatus===2&&!fM(t)}function fM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$L}function pM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mM(t){return t.requestStatus===1&&t.requestTime+zS<Date.now()}/**
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
 */async function gM(t){const e=t,{installationEntry:n,registrationPromise:r}=await ym(e);return r?r.catch(console.error):_m(e).catch(console.error),n.fid}/**
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
 */async function vM(t,e=!1){const n=t;return await yM(n),(await _m(n,e)).token}async function yM(t){const{registrationPromise:e}=await ym(t);e&&await e}/**
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
 */function _M(t){if(!t||!t.options)throw Wd("App Configuration");if(!t.name)throw Wd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wd(t){return gi.create("missing-app-config-values",{valueName:t})}/**
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
 */const s1="installations",wM="installations-internal",EM=t=>{const e=t.getProvider("app").getImmediate(),n=_M(e),r=bs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TM=t=>{const e=t.getProvider("app").getImmediate(),n=bs(e,s1).getImmediate();return{getId:()=>gM(n),getToken:i=>vM(n,i)}};function SM(){en(new Wt(s1,EM,"PUBLIC")),en(new Wt(wM,TM,"PRIVATE"))}SM();kt(BS,gm);kt(BS,gm,"esm2017");/**
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
 */const IM="/firebase-messaging-sw.js",kM="/firebase-cloud-messaging-push-scope",o1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",PM="https://fcmregistrations.googleapis.com/v1",a1="google.c.a.c_id",CM="google.c.a.c_l",AM="google.c.a.ts",RM="google.c.a.e";var h_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(h_||(h_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ua;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ua||(ua={}));/**
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
 */function Nn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function bM(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Hd="fcm_token_details_db",xM=5,f_="fcm_token_object_Store";async function NM(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Hd))return null;let e=null;return(await cc(Hd,xM,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(f_))return;const u=o.objectStore(f_),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:Nn(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Nn(h.auth),p256dh:Nn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Nn(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Nn(h.auth),p256dh:Nn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Nn(h.vapidKey)}}}}}})).close(),await Od(Hd),await Od("fcm_vapid_details_db"),await Od("undefined"),OM(e)?e:null}function OM(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const DM="firebase-messaging-database",LM=1,ca="firebase-messaging-store";let qd=null;function l1(){return qd||(qd=cc(DM,LM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ca)}}})),qd}async function MM(t){const e=u1(t),r=await(await l1()).transaction(ca).objectStore(ca).get(e);if(r)return r;{const i=await NM(t.appConfig.senderId);if(i)return await wm(t,i),i}}async function wm(t,e){const n=u1(t),i=(await l1()).transaction(ca,"readwrite");return await i.objectStore(ca).put(e,n),await i.done,e}function u1({appConfig:t}){return t.appId}/**
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
 */const VM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ot=new Si("messaging","Messaging",VM);/**
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
 */async function FM(t,e){const n=await Tm(t),r=c1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Em(t.appConfig),i)).json()}catch(o){throw Ot.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ot.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Ot.create("token-subscribe-no-token");return s.token}async function UM(t,e){const n=await Tm(t),r=c1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Em(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Ot.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ot.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Ot.create("token-update-no-token");return s.token}async function $M(t,e){const r={method:"DELETE",headers:await Tm(t)};try{const s=await(await fetch(`${Em(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Ot.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Ot.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Em({projectId:t}){return`${PM}/projects/${t}/registrations`}async function Tm({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function c1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==o1&&(i.web.applicationPubKey=r),i}/**
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
 */const jM=7*24*60*60*1e3;async function BM(t){const e=await WM(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Nn(e.getKey("auth")),p256dh:Nn(e.getKey("p256dh"))},r=await MM(t.firebaseDependencies);if(r){if(HM(r.subscriptionOptions,n))return Date.now()>=r.createTime+jM?zM(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await $M(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return p_(t.firebaseDependencies,n)}else return p_(t.firebaseDependencies,n)}async function zM(t,e){try{const n=await UM(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await wm(t.firebaseDependencies,r),n}catch(n){throw n}}async function p_(t,e){const r={token:await FM(t,e),createTime:Date.now(),subscriptionOptions:e};return await wm(t,r),r.token}async function WM(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:bM(e)})}function HM(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function m_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return qM(e,t),KM(e,t),GM(e,t),e}function qM(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function KM(t,e){e.data&&(t.data=e.data)}function GM(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function QM(t){return typeof t=="object"&&!!t&&a1 in t}/**
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
 */function YM(t){if(!t||!t.options)throw Kd("App Configuration Object");if(!t.name)throw Kd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Kd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Kd(t){return Ot.create("missing-app-config-values",{valueName:t})}/**
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
 */class XM{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=YM(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function JM(t){try{t.swRegistration=await navigator.serviceWorker.register(IM,{scope:kM}),t.swRegistration.update().catch(()=>{})}catch(e){throw Ot.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function ZM(t,e){if(!e&&!t.swRegistration&&await JM(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ot.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function eV(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=o1)}/**
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
 */async function tV(t,e){if(!navigator)throw Ot.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ot.create("permission-blocked");return await eV(t,e==null?void 0:e.vapidKey),await ZM(t,e==null?void 0:e.serviceWorkerRegistration),BM(t)}/**
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
 */async function nV(t,e,n){const r=rV(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[a1],message_name:n[CM],message_time:n[AM],message_device_time:Math.floor(Date.now()/1e3)})}function rV(t){switch(t){case ua.NOTIFICATION_CLICKED:return"notification_open";case ua.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function iV(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ua.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(m_(n)):t.onMessageHandler.next(m_(n)));const r=n.data;QM(r)&&r[RM]==="1"&&await nV(t,n.messageType,r)}const g_="@firebase/messaging",v_="0.12.12";/**
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
 */const sV=t=>{const e=new XM(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>iV(e,n)),e},oV=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>tV(e,r)}};function aV(){en(new Wt("messaging",sV,"PUBLIC")),en(new Wt("messaging-internal",oV,"PRIVATE")),kt(g_,v_),kt(g_,v_,"esm2017")}aV();const lV={apiKey:"AIzaSyC2X3wAIyE3dbe4NtGxH0tmdvzWw-OuBNM",authDomain:"nitboard-57de2.firebaseapp.com",projectId:"nitboard-57de2",storageBucket:"nitboard-57de2.appspot.com",messagingSenderId:"317592149056",appId:"1:317592149056:web:8760a6907ce2439e2e93a5",measurementId:"G-X127WXT7T0"},Sm=FE(lV),qr=YN(Sm),Im=zD(Sm);LL(Sm);const uV=async(t,e,n)=>{const r={email:t.email,nickname:e,avatarUrl:n,suspendedUntil:void 0,followers:[],following:[],preferredLocale:"ja",createdAt:new Date,updatedAt:new Date},i=um(Im,"users",t.uid);return await sL(i,{...r,createdAt:wf(),updatedAt:wf()}),{id:t.uid,...r}},y_=async t=>{var i,s,o;const e=um(Im,"users",t),n=await rL(e);if(!n.exists())return null;const r=n.data();return{id:t,email:r.email,nickname:r.nickname,avatarUrl:r.avatarUrl,suspendedUntil:(i=r.suspendedUntil)==null?void 0:i.toDate(),followers:r.followers||[],following:r.following||[],preferredLocale:r.preferredLocale||"ja",createdAt:((s=r.createdAt)==null?void 0:s.toDate())||new Date,updatedAt:((o=r.updatedAt)==null?void 0:o.toDate())||new Date}},xc=ZA()(sR((t,e)=>({user:null,loading:!1,isGuest:!1,login:async(n,r)=>{t({loading:!0});try{const s=(await Lx(qr,n,r)).user;if(!s.emailVerified)throw new Error("EMAIL_NOT_VERIFIED");const o=await y_(s.uid);if(!o)throw new Error("USER_DOCUMENT_NOT_FOUND");if(o.suspendedUntil&&o.suspendedUntil>new Date)throw new Error("USER_SUSPENDED");t({user:o,loading:!1,isGuest:!1})}catch(i){throw t({loading:!1}),i}},register:async(n,r)=>{t({loading:!0});try{const s=(await Dx(qr,n,r)).user;await fy(s),t({loading:!1})}catch(i){throw t({loading:!1}),i}},logout:async()=>{t({loading:!0});try{await Ux(qr),t({user:null,loading:!1,isGuest:!1})}catch(n){throw t({loading:!1}),n}},sendVerificationEmail:async()=>{const{user:n}=e();if(!n)throw new Error("No user logged in");const r=qr.currentUser;if(!r)throw new Error("No Firebase user");await fy(r)},sendPasswordReset:async n=>{await Ox(qr,n)},setupProfile:async(n,r)=>{const i=qr.currentUser;if(!i)throw new Error("No Firebase user");const s=await uV(i,n,r);t({user:s,loading:!1,isGuest:!1})},updateProfile:async n=>{const{user:r}=e();if(!r)throw new Error("No user logged in");const i=um(Im,"users",r.id);await oL(i,{...n,updatedAt:wf()});const s={...r,...n,updatedAt:new Date};t({user:s})},setGuestMode:n=>{t({isGuest:n,user:null,loading:!1})},initializeAuth:()=>{console.log("AuthStore: Starting auth initialization...");const n=e();if(!n.loading&&n.user===null)return console.log("AuthStore: Already initialized, skipping..."),()=>{};t({loading:!0});const r=setTimeout(()=>{console.log("AuthStore: Auth initialization timeout, proceeding without auth"),t({user:null,loading:!1,isGuest:!1})},3e3);let i=!1;return Fx(qr,async o=>{if(i){console.log("AuthStore: Auth state change after initialization, ignoring...");return}if(i=!0,clearTimeout(r),console.log("AuthStore: Auth state changed:",!!o),o){if(!o.emailVerified){console.log("AuthStore: User email not verified"),t({loading:!1,user:null,isGuest:!1});return}try{const a=await y_(o.uid);a&&(!a.suspendedUntil||a.suspendedUntil<=new Date)?(console.log("AuthStore: User authenticated successfully"),t({user:a,loading:!1,isGuest:!1})):(console.log("AuthStore: User suspended or not found"),t({user:null,loading:!1,isGuest:!1}))}catch(a){console.error("AuthStore: Error fetching user document:",a),t({user:null,loading:!1,isGuest:!1})}}else console.log("AuthStore: No user authenticated"),t({user:null,loading:!1,isGuest:!1})})}}),{name:"nitech-board-auth",partialize:t=>({isGuest:t.isGuest,user:t.user?{id:t.user.id,email:t.user.email,nickname:t.user.nickname,preferredLocale:t.user.preferredLocale}:null})}));function cV(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const __={};function Tf(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&__[e[0]]||(typeof e[0]=="string"&&(__[e[0]]=new Date),cV(...e))}const d1=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function w_(t,e,n){t.loadNamespaces(e,d1(t,n))}function E_(t,e,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,d1(t,r))}function dV(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],i=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(a,u)=>{const c=e.services.backendConnector.state[`${a}|${u}`];return c===-1||c===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||o(r,t)&&(!i||o(s,t)))}function hV(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(Tf("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,t))return!1}}):dV(t,e,n)}const fV=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,pV={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},mV=t=>pV[t],gV=t=>t.replace(fV,mV);let Sf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:gV};function vV(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Sf={...Sf,...t}}function yV(){return Sf}let h1;function _V(t){h1=t}function wV(){return h1}const EV={type:"3rdParty",init(t){vV(t.options.react),_V(t)}},TV=O.createContext();class SV{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const IV=(t,e)=>{const n=O.useRef();return O.useEffect(()=>{n.current=t},[t,e]),n.current};function kV(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:i}=O.useContext(TV)||{},s=n||r||wV();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new SV),!s){Tf("You will need to pass in an i18next instance by using initReactI18next");const w=(L,M)=>typeof M=="string"?M:M&&typeof M=="object"&&typeof M.defaultValue=="string"?M.defaultValue:Array.isArray(L)?L[L.length-1]:L,b=[w,{},!1];return b.t=w,b.i18n={},b.ready=!1,b}s.options.react&&s.options.react.wait!==void 0&&Tf("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...yV(),...s.options.react,...e},{useSuspense:a,keyPrefix:u}=o;let c=i||s.options&&s.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(c);const h=(s.isInitialized||s.initializedStoreOnce)&&c.every(w=>hV(w,s,o));function f(){return s.getFixedT(e.lng||null,o.nsMode==="fallback"?c:c[0],u)}const[p,g]=O.useState(f);let T=c.join();e.lng&&(T=`${e.lng}${T}`);const C=IV(T),k=O.useRef(!0);O.useEffect(()=>{const{bindI18n:w,bindI18nStore:b}=o;k.current=!0,!h&&!a&&(e.lng?E_(s,e.lng,c,()=>{k.current&&g(f)}):w_(s,c,()=>{k.current&&g(f)})),h&&C&&C!==T&&k.current&&g(f);function L(){k.current&&g(f)}return w&&s&&s.on(w,L),b&&s&&s.store.on(b,L),()=>{k.current=!1,w&&s&&w.split(" ").forEach(M=>s.off(M,L)),b&&s&&b.split(" ").forEach(M=>s.store.off(M,L))}},[s,T]);const E=O.useRef(!0);O.useEffect(()=>{k.current&&!E.current&&g(f),E.current=!1},[s,u]);const v=[p,s,h];if(v.t=p,v.i18n=s,v.ready=h,h||!h&&!a)return v;throw new Promise(w=>{e.lng?E_(s,e.lng,c,()=>w()):w_(s,c,()=>w())})}function yi(t){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yi(t)}function _i(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function _e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function me(t){_e(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||yi(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function PV(t,e){_e(2,arguments);var n=me(t).getTime(),r=_i(e);return new Date(n+r)}var CV={};function Ra(){return CV}function If(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function jl(t,e){_e(2,arguments);var n=me(t),r=me(e),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function AV(t){return _e(1,arguments),t instanceof Date||yi(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function RV(t){if(_e(1,arguments),!AV(t)&&typeof t!="number")return!1;var e=me(t);return!isNaN(Number(e))}function bV(t,e){_e(2,arguments);var n=me(t),r=me(e),i=n.getFullYear()-r.getFullYear(),s=n.getMonth()-r.getMonth();return i*12+s}function xV(t,e){return _e(2,arguments),me(t).getTime()-me(e).getTime()}var NV={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},OV="trunc";function DV(t){return NV[OV]}function LV(t){_e(1,arguments);var e=me(t);return e.setHours(23,59,59,999),e}function MV(t){_e(1,arguments);var e=me(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function VV(t){_e(1,arguments);var e=me(t);return LV(e).getTime()===MV(e).getTime()}function FV(t,e){_e(2,arguments);var n=me(t),r=me(e),i=jl(n,r),s=Math.abs(bV(n,r)),o;if(s<1)o=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-i*s);var a=jl(n,r)===-i;VV(me(t))&&s===1&&jl(t,r)===1&&(a=!1),o=i*(s-Number(a))}return o===0?0:o}function UV(t,e,n){_e(2,arguments);var r=xV(t,e)/1e3;return DV()(r)}function $V(t,e){_e(2,arguments);var n=_i(e);return PV(t,-n)}var jV=864e5;function BV(t){_e(1,arguments);var e=me(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/jV)+1}function Lu(t){_e(1,arguments);var e=1,n=me(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function f1(t){_e(1,arguments);var e=me(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Lu(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=Lu(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function zV(t){_e(1,arguments);var e=f1(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Lu(n);return r}var WV=6048e5;function HV(t){_e(1,arguments);var e=me(t),n=Lu(e).getTime()-zV(e).getTime();return Math.round(n/WV)+1}function Mu(t,e){var n,r,i,s,o,a,u,c;_e(1,arguments);var h=Ra(),f=_i((n=(r=(i=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:h.weekStartsOn)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&n!==void 0?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=me(t),g=p.getUTCDay(),T=(g<f?7:0)+g-f;return p.setUTCDate(p.getUTCDate()-T),p.setUTCHours(0,0,0,0),p}function p1(t,e){var n,r,i,s,o,a,u,c;_e(1,arguments);var h=me(t),f=h.getUTCFullYear(),p=Ra(),g=_i((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:p.firstWeekContainsDate)!==null&&r!==void 0?r:(u=p.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(f+1,0,g),T.setUTCHours(0,0,0,0);var C=Mu(T,e),k=new Date(0);k.setUTCFullYear(f,0,g),k.setUTCHours(0,0,0,0);var E=Mu(k,e);return h.getTime()>=C.getTime()?f+1:h.getTime()>=E.getTime()?f:f-1}function qV(t,e){var n,r,i,s,o,a,u,c;_e(1,arguments);var h=Ra(),f=_i((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:h.firstWeekContainsDate)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&n!==void 0?n:1),p=p1(t,e),g=new Date(0);g.setUTCFullYear(p,0,f),g.setUTCHours(0,0,0,0);var T=Mu(g,e);return T}var KV=6048e5;function GV(t,e){_e(1,arguments);var n=me(t),r=Mu(n,e).getTime()-qV(n,e).getTime();return Math.round(r/KV)+1}function ae(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var or={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return ae(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):ae(r+1,2)},d:function(e,n){return ae(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return ae(e.getUTCHours()%12||12,n.length)},H:function(e,n){return ae(e.getUTCHours(),n.length)},m:function(e,n){return ae(e.getUTCMinutes(),n.length)},s:function(e,n){return ae(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),s=Math.floor(i*Math.pow(10,r-3));return ae(s,n.length)}},Ni={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},QV={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return or.y(e,n)},Y:function(e,n,r,i){var s=p1(e,i),o=s>0?s:1-s;if(n==="YY"){var a=o%100;return ae(a,2)}return n==="Yo"?r.ordinalNumber(o,{unit:"year"}):ae(o,n.length)},R:function(e,n){var r=f1(e);return ae(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return ae(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return ae(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return ae(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return or.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return ae(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var s=GV(e,i);return n==="wo"?r.ordinalNumber(s,{unit:"week"}):ae(s,n.length)},I:function(e,n,r){var i=HV(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):ae(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):or.d(e,n)},D:function(e,n,r){var i=BV(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):ae(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return ae(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return ae(o,n.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),s=i===0?7:i;switch(n){case"i":return String(s);case"ii":return ae(s,n.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),s=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),s;switch(i===12?s=Ni.noon:i===0?s=Ni.midnight:s=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),s;switch(i>=17?s=Ni.evening:i>=12?s=Ni.afternoon:i>=4?s=Ni.morning:s=Ni.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return or.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):or.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):ae(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):ae(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):or.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):or.s(e,n)},S:function(e,n){return or.S(e,n)},X:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return S_(o);case"XXXX":case"XX":return Yr(o);case"XXXXX":case"XXX":default:return Yr(o,":")}},x:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"x":return S_(o);case"xxxx":case"xx":return Yr(o);case"xxxxx":case"xxx":default:return Yr(o,":")}},O:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+T_(o,":");case"OOOO":default:return"GMT"+Yr(o,":")}},z:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+T_(o,":");case"zzzz":default:return"GMT"+Yr(o,":")}},t:function(e,n,r,i){var s=i._originalDate||e,o=Math.floor(s.getTime()/1e3);return ae(o,n.length)},T:function(e,n,r,i){var s=i._originalDate||e,o=s.getTime();return ae(o,n.length)}};function T_(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;if(s===0)return n+String(i);var o=e;return n+String(i)+o+ae(s,2)}function S_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+ae(Math.abs(t)/60,2)}return Yr(t,e)}function Yr(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),s=ae(Math.floor(i/60),2),o=ae(i%60,2);return r+s+n+o}var I_=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},m1=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},YV=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return I_(e,n);var o;switch(i){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",I_(i,n)).replace("{{time}}",m1(s,n))},XV={p:m1,P:YV},JV=["D","DD"],ZV=["YY","YYYY"];function eF(t){return JV.indexOf(t)!==-1}function tF(t){return ZV.indexOf(t)!==-1}function k_(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var nF={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},rF=function(e,n,r){var i,s=nF[e];return typeof s=="string"?i=s:n===1?i=s.one:i=s.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function ls(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var iF={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},sF={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},oF={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},aF={date:ls({formats:iF,defaultWidth:"full"}),time:ls({formats:sF,defaultWidth:"full"}),dateTime:ls({formats:oF,defaultWidth:"full"})},lF={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},uF=function(e,n,r,i){return lF[e]};function an(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):s;i=t.formattingValues[o]||t.formattingValues[s]}else{var a=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[a]}var c=t.argumentCallback?t.argumentCallback(e):e;return i[c]}}var cF={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},dF={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},hF={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},fF={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},pF={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},mF={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gF=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},vF={ordinalNumber:gF,era:an({values:cF,defaultWidth:"wide"}),quarter:an({values:dF,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:an({values:hF,defaultWidth:"wide"}),day:an({values:fF,defaultWidth:"wide"}),dayPeriod:an({values:pF,defaultWidth:"wide",formattingValues:mF,defaultFormattingWidth:"wide"})};function ln(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?_F(a,function(f){return f.test(o)}):yF(a,function(f){return f.test(o)}),c;c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;var h=e.slice(o.length);return{value:c,rest:h}}}function yF(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function _F(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function g1(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}var wF=/^(\d+)(th|st|nd|rd)?/i,EF=/\d+/i,TF={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},SF={any:[/^b/i,/^(a|c)/i]},IF={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},kF={any:[/1/i,/2/i,/3/i,/4/i]},PF={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},CF={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},AF={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},RF={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},bF={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xF={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},NF={ordinalNumber:g1({matchPattern:wF,parsePattern:EF,valueCallback:function(e){return parseInt(e,10)}}),era:ln({matchPatterns:TF,defaultMatchWidth:"wide",parsePatterns:SF,defaultParseWidth:"any"}),quarter:ln({matchPatterns:IF,defaultMatchWidth:"wide",parsePatterns:kF,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ln({matchPatterns:PF,defaultMatchWidth:"wide",parsePatterns:CF,defaultParseWidth:"any"}),day:ln({matchPatterns:AF,defaultMatchWidth:"wide",parsePatterns:RF,defaultParseWidth:"any"}),dayPeriod:ln({matchPatterns:bF,defaultMatchWidth:"any",parsePatterns:xF,defaultParseWidth:"any"})},km={code:"en-US",formatDistance:rF,formatLong:aF,formatRelative:uF,localize:vF,match:NF,options:{weekStartsOn:0,firstWeekContainsDate:1}},OF=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,DF=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,LF=/^'([^]*?)'?$/,MF=/''/g,VF=/[a-zA-Z]/;function FF(t,e,n){var r,i,s,o,a,u,c,h,f,p,g,T,C,k,E,v,w,b;_e(2,arguments);var L=String(e),M=Ra(),S=(r=(i=n==null?void 0:n.locale)!==null&&i!==void 0?i:M.locale)!==null&&r!==void 0?r:km,_=_i((s=(o=(a=(u=n==null?void 0:n.firstWeekContainsDate)!==null&&u!==void 0?u:n==null||(c=n.locale)===null||c===void 0||(h=c.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&a!==void 0?a:M.firstWeekContainsDate)!==null&&o!==void 0?o:(f=M.locale)===null||f===void 0||(p=f.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(_>=1&&_<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var I=_i((g=(T=(C=(k=n==null?void 0:n.weekStartsOn)!==null&&k!==void 0?k:n==null||(E=n.locale)===null||E===void 0||(v=E.options)===null||v===void 0?void 0:v.weekStartsOn)!==null&&C!==void 0?C:M.weekStartsOn)!==null&&T!==void 0?T:(w=M.locale)===null||w===void 0||(b=w.options)===null||b===void 0?void 0:b.weekStartsOn)!==null&&g!==void 0?g:0);if(!(I>=0&&I<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var P=me(t);if(!RV(P))throw new RangeError("Invalid time value");var R=If(P),x=$V(P,R),A={firstWeekContainsDate:_,weekStartsOn:I,locale:S,_originalDate:P},Ne=L.match(DF).map(function(ce){var Le=ce[0];if(Le==="p"||Le==="P"){var He=XV[Le];return He(ce,S.formatLong)}return ce}).join("").match(OF).map(function(ce){if(ce==="''")return"'";var Le=ce[0];if(Le==="'")return UF(ce);var He=QV[Le];if(He)return!(n!=null&&n.useAdditionalWeekYearTokens)&&tF(ce)&&k_(ce,e,String(t)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&eF(ce)&&k_(ce,e,String(t)),He(x,ce,S.localize,A);if(Le.match(VF))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Le+"`");return ce}).join("");return Ne}function UF(t){var e=t.match(LF);return e?e[1].replace(MF,"'"):t}function v1(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function $F(t){return v1({},t)}var P_=1440,jF=2520,Gd=43200,BF=86400;function zF(t,e,n){var r,i;_e(2,arguments);var s=Ra(),o=(r=(i=n==null?void 0:n.locale)!==null&&i!==void 0?i:s.locale)!==null&&r!==void 0?r:km;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var a=jl(t,e);if(isNaN(a))throw new RangeError("Invalid time value");var u=v1($F(n),{addSuffix:!!(n!=null&&n.addSuffix),comparison:a}),c,h;a>0?(c=me(e),h=me(t)):(c=me(t),h=me(e));var f=UV(h,c),p=(If(h)-If(c))/1e3,g=Math.round((f-p)/60),T;if(g<2)return n!=null&&n.includeSeconds?f<5?o.formatDistance("lessThanXSeconds",5,u):f<10?o.formatDistance("lessThanXSeconds",10,u):f<20?o.formatDistance("lessThanXSeconds",20,u):f<40?o.formatDistance("halfAMinute",0,u):f<60?o.formatDistance("lessThanXMinutes",1,u):o.formatDistance("xMinutes",1,u):g===0?o.formatDistance("lessThanXMinutes",1,u):o.formatDistance("xMinutes",g,u);if(g<45)return o.formatDistance("xMinutes",g,u);if(g<90)return o.formatDistance("aboutXHours",1,u);if(g<P_){var C=Math.round(g/60);return o.formatDistance("aboutXHours",C,u)}else{if(g<jF)return o.formatDistance("xDays",1,u);if(g<Gd){var k=Math.round(g/P_);return o.formatDistance("xDays",k,u)}else if(g<BF)return T=Math.round(g/Gd),o.formatDistance("aboutXMonths",T,u)}if(T=FV(h,c),T<12){var E=Math.round(g/Gd);return o.formatDistance("xMonths",E,u)}else{var v=T%12,w=Math.floor(T/12);return v<3?o.formatDistance("aboutXYears",w,u):v<9?o.formatDistance("overXYears",w,u):o.formatDistance("almostXYears",w+1,u)}}function WF(t,e){return _e(1,arguments),zF(t,Date.now(),e)}function HF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qF(t,e){if(yi(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function KF(t){var e=qF(t,"string");return yi(e)=="symbol"?e:e+""}function GF(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,KF(r.key),r)}}function QF(t,e,n){return e&&GF(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var YF={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}},XF=function(e,n,r){r=r||{};var i,s=YF[e];return typeof s=="string"?i=s:n===1?r.addSuffix&&s.oneWithSuffix?i=s.oneWithSuffix:i=s.one:r.addSuffix&&s.otherWithSuffix?i=s.otherWithSuffix.replace("{{count}}",String(n)):i=s.other.replace("{{count}}",String(n)),r.addSuffix?r.comparison&&r.comparison>0?i+"後":i+"前":i},JF={full:"y年M月d日EEEE",long:"y年M月d日",medium:"y/MM/dd",short:"y/MM/dd"},ZF={full:"H時mm分ss秒 zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},eU={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},tU={date:ls({formats:JF,defaultWidth:"full"}),time:ls({formats:ZF,defaultWidth:"full"}),dateTime:ls({formats:eU,defaultWidth:"full"})},nU={lastWeek:"先週のeeeeのp",yesterday:"昨日のp",today:"今日のp",tomorrow:"明日のp",nextWeek:"翌週のeeeeのp",other:"P"},rU=function(e,n,r,i){return nU[e]},iU={narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},sU={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},oU={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},aU={narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},lU={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},uU={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},cU=function(e,n){var r=Number(e),i=String(n==null?void 0:n.unit);switch(i){case"year":return"".concat(r,"年");case"quarter":return"第".concat(r,"四半期");case"month":return"".concat(r,"月");case"week":return"第".concat(r,"週");case"date":return"".concat(r,"日");case"hour":return"".concat(r,"時");case"minute":return"".concat(r,"分");case"second":return"".concat(r,"秒");default:return"".concat(r)}},dU={ordinalNumber:cU,era:an({values:iU,defaultWidth:"wide"}),quarter:an({values:sU,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:an({values:oU,defaultWidth:"wide"}),day:an({values:aU,defaultWidth:"wide"}),dayPeriod:an({values:lU,defaultWidth:"wide",formattingValues:uU,defaultFormattingWidth:"wide"})},hU=/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,fU=/\d+/i,pU={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},mU={narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},gU={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},vU={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},yU={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},_U={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},wU={narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},EU={any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},TU={any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},SU={any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},IU={ordinalNumber:g1({matchPattern:hU,parsePattern:fU,valueCallback:function(e){return parseInt(e,10)}}),era:ln({matchPatterns:pU,defaultMatchWidth:"wide",parsePatterns:mU,defaultParseWidth:"any"}),quarter:ln({matchPatterns:gU,defaultMatchWidth:"wide",parsePatterns:vU,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ln({matchPatterns:yU,defaultMatchWidth:"wide",parsePatterns:_U,defaultParseWidth:"any"}),day:ln({matchPatterns:wU,defaultMatchWidth:"wide",parsePatterns:EU,defaultParseWidth:"any"}),dayPeriod:ln({matchPatterns:TU,defaultMatchWidth:"any",parsePatterns:SU,defaultParseWidth:"any"})},kU={code:"ja",formatDistance:XF,formatLong:tU,formatRelative:rU,localize:dU,match:IU,options:{weekStartsOn:0,firstWeekContainsDate:1}};const yl={ja:kU,en:km},Pm=()=>{const{t,i18n:e}=kV(),n=a=>{e.changeLanguage(a),localStorage.setItem("nitech-board-locale",a),document.documentElement.lang=a},r=e.language;return{t,currentLocale:r,changeLanguage:n,formatDate:(a,u)=>{const c=yl[r]||yl.ja;return FF(a,u||"yyyy年M月d日",{locale:c})},formatRelativeTime:a=>{const u=yl[r]||yl.ja;return WF(a,{addSuffix:!0,locale:u})},formatNumber:a=>new Intl.NumberFormat(r).format(a)}};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PU={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CU=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Pt=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...c},h)=>O.createElement("svg",{ref:h,...PU,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${CU(t)}`,a].join(" "),...c},[...e.map(([f,p])=>O.createElement(f,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AU=Pt("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=Pt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RU=Pt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bU=Pt("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xU=Pt("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NU=Pt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OU=Pt("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DU=Pt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=Pt("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LU=Pt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MU=Pt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Pt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VU=Pt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=Pt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function FU(){const{user:t,isGuest:e}=xc(),{t:n}=Pm(),r=[{to:"/",icon:xU,label:n("common.home")},{to:"/departments",icon:A_,label:n("common.boards")},{to:"/topics",icon:bU,label:n("common.topics")},{to:"/boards",icon:NU,label:n("boards.title")},{to:"/events",icon:AU,label:n("common.events")},...t&&!e?[{to:"/messages",icon:A_,label:n("common.messages")}]:[]],i=[...t&&!e?[{to:"/profile",icon:kf,label:n("common.profile")}]:[],{to:"/settings",icon:y1,label:n("common.settings")}];return V.jsxs("div",{className:"w-64 bg-card border-r border-border flex flex-col",children:[V.jsxs("div",{className:"p-6 border-b border-border",children:[V.jsx("h1",{className:"text-xl font-semibold text-foreground",children:"NITech Board"}),V.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"名古屋工業大学掲示板"})]}),V.jsx("nav",{className:"flex-1 p-4 space-y-2",children:r.map(s=>V.jsxs(jv,{to:s.to,className:({isActive:o})=>`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${o?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-accent"}`,children:[V.jsx(s.icon,{className:"h-4 w-4"}),s.label]},s.to))}),V.jsx("div",{className:"p-4 border-t border-border space-y-2",children:i.map(s=>V.jsxs(jv,{to:s.to,className:({isActive:o})=>`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${o?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-accent"}`,children:[V.jsx(s.icon,{className:"h-4 w-4"}),s.label]},s.to))})]})}function UU(){const[t,e]=O.useState(()=>localStorage.getItem("nitech-board-theme")||"system"),[n,r]=O.useState("light");return O.useEffect(()=>{const s=()=>{if(t==="system"){const u=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";r(u)}else r(t)};s();const o=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{t==="system"&&s()};return o.addEventListener("change",a),()=>o.removeEventListener("change",a)},[t]),O.useEffect(()=>{localStorage.setItem("nitech-board-theme",t)},[t]),O.useEffect(()=>{const s=document.documentElement;s.classList.remove("light","dark"),s.classList.add(n)},[n]),{theme:t,resolvedTheme:n,setTheme:e,toggleTheme:()=>{e(s=>s==="light"?"dark":s==="dark"?"system":"light")}}}function $U(){const{user:t,isGuest:e,logout:n}=xc(),{t:r,currentLocale:i,changeLanguage:s}=Pm(),{theme:o,toggleTheme:a}=UU(),[u,c]=O.useState(!1),[h,f]=O.useState(!1),p=async()=>{try{await n(),c(!1)}catch(g){console.error("Logout failed:",g)}};return V.jsxs("header",{className:"h-16 bg-card border-b border-border flex items-center justify-between px-6",children:[V.jsx("div",{className:"flex items-center gap-4",children:V.jsx("h2",{className:"text-lg font-semibold text-foreground",children:"NITech Board"})}),V.jsxs("div",{className:"flex items-center gap-3",children:[V.jsxs("div",{className:"relative",children:[V.jsxs("button",{onClick:()=>f(!h),className:"flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",children:[V.jsx(RU,{className:"h-4 w-4"}),i==="ja"?"日本語":"English",V.jsx(C_,{className:"h-3 w-3"})]}),h&&V.jsxs("div",{className:"absolute right-0 top-full mt-1 w-32 bg-card border border-border rounded-md shadow-lg z-50",children:[V.jsx("button",{onClick:()=>{s("ja"),f(!1)},className:`w-full px-3 py-2 text-left text-sm hover:bg-accent transition-colors ${i==="ja"?"text-primary":"text-foreground"}`,children:"日本語"}),V.jsx("button",{onClick:()=>{s("en"),f(!1)},className:`w-full px-3 py-2 text-left text-sm hover:bg-accent transition-colors ${i==="en"?"text-primary":"text-foreground"}`,children:"English"})]})]}),V.jsx("button",{onClick:a,className:"p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",children:o==="dark"?V.jsx(VU,{className:"h-4 w-4"}):V.jsx(LU,{className:"h-4 w-4"})}),t&&!e&&V.jsxs(Li,{to:"/create-board",className:"btn btn-primary btn-sm",children:[V.jsx(MU,{className:"h-4 w-4 mr-2"}),r("common.newPost")]}),t&&!e?V.jsxs("div",{className:"relative",children:[V.jsxs("button",{onClick:()=>c(!u),className:"flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",children:[t.avatarUrl?V.jsx("img",{src:t.avatarUrl,alt:t.nickname,className:"h-6 w-6 rounded-full"}):V.jsx(kf,{className:"h-4 w-4"}),V.jsx("span",{className:"hidden sm:inline",children:t.nickname}),V.jsx(C_,{className:"h-3 w-3"})]}),u&&V.jsxs("div",{className:"absolute right-0 top-full mt-1 w-48 bg-card border border-border rounded-md shadow-lg z-50",children:[V.jsxs(Li,{to:"/profile",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors",children:[V.jsx(kf,{className:"h-4 w-4"}),r("common.profile")]}),V.jsxs(Li,{to:"/settings",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors",children:[V.jsx(y1,{className:"h-4 w-4"}),r("common.settings")]}),V.jsx("div",{className:"border-t border-border my-1"}),V.jsxs("button",{onClick:p,className:"flex items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-accent transition-colors w-full text-left",children:[V.jsx(DU,{className:"h-4 w-4"}),r("common.logout")]})]})]}):V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx(Li,{to:"/login",className:"btn btn-outline btn-sm",children:r("common.login")}),V.jsx(Li,{to:"/register",className:"btn btn-primary btn-sm",children:r("common.register")})]})]}),(u||h)&&V.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>{c(!1),f(!1)}})]})}function jU(){return V.jsxs("div",{className:"flex h-screen bg-background",children:[V.jsx(FU,{}),V.jsxs("div",{className:"flex-1 flex flex-col",children:[V.jsx($U,{}),V.jsx("main",{className:"flex-1 overflow-auto p-6",children:V.jsx(wC,{})})]})]})}function ro({children:t}){const{user:e,isGuest:n}=xc(),r=Ti();return!e&&!n?V.jsx(_C,{to:"/login",state:{from:r},replace:!0}):V.jsx(V.Fragment,{children:t})}function BU(){return V.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:V.jsxs("div",{className:"flex flex-col items-center gap-4",children:[V.jsx(OU,{className:"h-8 w-8 animate-spin text-primary"}),V.jsx("p",{className:"text-muted-foreground",children:"読み込み中..."})]})})}const zU=O.lazy(()=>Vt(()=>import("./LoginPage-DnpY8U6R.js"),__vite__mapDeps([0,1]))),WU=O.lazy(()=>Vt(()=>import("./RegisterPage-CqXUHyJN.js"),__vite__mapDeps([2,1]))),HU=O.lazy(()=>Vt(()=>import("./HomePage-9XVgYVCH.js"),[])),qU=O.lazy(()=>Vt(()=>import("./DepartmentsPage-BeOPdtqF.js"),__vite__mapDeps([3,4]))),KU=O.lazy(()=>Vt(()=>import("./TopicsPage-B7BfsC1Q.js"),__vite__mapDeps([5,4]))),GU=O.lazy(()=>Vt(()=>import("./BoardsPage-C-EzFXjw.js"),[])),QU=O.lazy(()=>Vt(()=>import("./BoardPage-DNDFISKp.js"),[])),R_=O.lazy(()=>Vt(()=>import("./CreateBoardPage-CaTRxbS0.js"),[])),YU=O.lazy(()=>Vt(()=>import("./EventsPage-Cpzq6a_d.js"),[])),XU=O.lazy(()=>Vt(()=>import("./MessagesPage-De3XnA_o.js"),[])),JU=O.lazy(()=>Vt(()=>import("./ProfilePage-DlUbzMJY.js"),[])),ZU=O.lazy(()=>Vt(()=>import("./SettingsPage-BceHnpSs.js"),[])),e4=O.lazy(()=>Vt(()=>import("./NotFoundPage-BASeGiN-.js"),[]));function t4(){const{user:t,loading:e,initializeAuth:n}=xc(),{changeLanguage:r}=Pm();return O.useEffect(()=>(console.log("App: Initializing auth..."),n()),[]),O.useEffect(()=>{t!=null&&t.preferredLocale&&r(t.preferredLocale)},[t==null?void 0:t.preferredLocale,r]),O.useEffect(()=>{console.log("App: Auth state changed:",{user:!!t,loading:e,isGuest:!1})},[t,e]),e?(console.log("App: Showing loading screen..."),V.jsx(BU,{})):(console.log("App: Rendering main app..."),V.jsx(O.Suspense,{fallback:V.jsx("div",{children:"Loading routes..."}),children:V.jsxs(TC,{children:[V.jsx(at,{path:"/login",element:V.jsx(zU,{})}),V.jsx(at,{path:"/register",element:V.jsx(WU,{})}),V.jsxs(at,{path:"/",element:V.jsx(jU,{}),children:[V.jsx(at,{index:!0,element:V.jsx(HU,{})}),V.jsx(at,{path:"departments",element:V.jsx(qU,{})}),V.jsx(at,{path:"topics",element:V.jsx(KU,{})}),V.jsx(at,{path:"boards",element:V.jsx(GU,{})}),V.jsx(at,{path:"boards/:boardId",element:V.jsx(QU,{})}),V.jsx(at,{path:"boards/create",element:V.jsx(ro,{children:V.jsx(R_,{})})}),V.jsx(at,{path:"create-board",element:V.jsx(ro,{children:V.jsx(R_,{})})}),V.jsx(at,{path:"events",element:V.jsx(YU,{})}),V.jsx(at,{path:"messages",element:V.jsx(ro,{children:V.jsx(XU,{})})}),V.jsx(at,{path:"profile",element:V.jsx(ro,{children:V.jsx(JU,{})})}),V.jsx(at,{path:"settings",element:V.jsx(ro,{children:V.jsx(ZU,{})})})]}),V.jsx(at,{path:"*",element:V.jsx(e4,{})})]})}))}const Y=t=>typeof t=="string",io=()=>{let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n},b_=t=>t==null?"":""+t,n4=(t,e,n)=>{t.forEach(r=>{e[r]&&(n[r]=e[r])})},r4=/###/g,x_=t=>t&&t.indexOf("###")>-1?t.replace(r4,"."):t,N_=t=>!t||Y(t),xo=(t,e,n)=>{const r=Y(e)?e.split("."):e;let i=0;for(;i<r.length-1;){if(N_(t))return{};const s=x_(r[i]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++i}return N_(t)?{}:{obj:t,k:x_(r[i])}},O_=(t,e,n)=>{const{obj:r,k:i}=xo(t,e,Object);if(r!==void 0||e.length===1){r[i]=n;return}let s=e[e.length-1],o=e.slice(0,e.length-1),a=xo(t,o,Object);for(;a.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),a=xo(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=n},i4=(t,e,n,r)=>{const{obj:i,k:s}=xo(t,e,Object);i[s]=i[s]||[],i[s].push(n)},Vu=(t,e)=>{const{obj:n,k:r}=xo(t,e);if(n)return n[r]},s4=(t,e,n)=>{const r=Vu(t,n);return r!==void 0?r:Vu(e,n)},_1=(t,e,n)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?Y(t[r])||t[r]instanceof String||Y(e[r])||e[r]instanceof String?n&&(t[r]=e[r]):_1(t[r],e[r],n):t[r]=e[r]);return t},Oi=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var o4={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const a4=t=>Y(t)?t.replace(/[&<>"'\/]/g,e=>o4[e]):t;class l4{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const u4=[" ",",","?","!",";"],c4=new l4(20),d4=(t,e,n)=>{e=e||"",n=n||"";const r=u4.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(r.length===0)return!0;const i=c4.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!i.test(t);if(!s){const o=t.indexOf(n);o>0&&!i.test(t.substring(0,o))&&(s=!0)}return s},Pf=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const r=e.split(n);let i=t;for(let s=0;s<r.length;){if(!i||typeof i!="object")return;let o,a="";for(let u=s;u<r.length;++u)if(u!==s&&(a+=n),a+=r[u],o=i[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&u<r.length-1)continue;s+=u-s+1;break}i=o}return i},Fu=t=>t&&t.replace("_","-"),h4={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Uu{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||h4,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,r,i){return i&&!this.debug?null:(Y(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Uu(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Uu(this.logger,e)}}var dn=new Uu;class Nc{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,u]=o;for(let c=0;c<u;c++)a(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,u]=o;for(let c=0;c<u;c++)a.apply(a,[e,...r])})}}class D_ extends Nc{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,n],r&&(Array.isArray(r)?a.push(...r):Y(r)&&s?a.push(...r.split(s)):a.push(r)));const u=Vu(this.data,a);return!u&&!n&&!r&&e.indexOf(".")>-1&&(e=a[0],n=a[1],r=a.slice(2).join(".")),u||!o||!Y(r)?u:Pf(this.data&&this.data[e]&&this.data[e][n],r,s)}addResource(e,n,r,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[e,n];r&&(a=a.concat(o?r.split(o):r)),e.indexOf(".")>-1&&(a=e.split("."),i=n,n=a[1]),this.addNamespaces(n),O_(this.data,a,i),s.silent||this.emit("added",e,n,r,i)}addResources(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in r)(Y(r[s])||Array.isArray(r[s]))&&this.addResource(e,n,s,r[s],{silent:!0});i.silent||this.emit("added",e,n,r)}addResourceBundle(e,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,n];e.indexOf(".")>-1&&(a=e.split("."),i=r,r=n,n=a[1]),this.addNamespaces(n);let u=Vu(this.data,a)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?_1(u,r,s):u={...u,...r},O_(this.data,a,u),o.silent||this.emit("added",e,n,r)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var w1={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,i){return t.forEach(s=>{this.processors[s]&&(e=this.processors[s].process(e,n,r,i))}),e}};const L_={};class $u extends Nc{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),n4(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=dn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const r=this.resolve(e,n);return r&&r.res!==void 0}extractFromKey(e,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=r&&e.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!d4(e,r,i);if(o&&!a){const u=e.match(this.interpolator.nestingRegexp);if(u&&u.length>0)return{key:e,namespaces:Y(s)?[s]:s};const c=e.split(r);(r!==i||r===i&&this.options.ns.indexOf(c[0])>-1)&&(s=c.shift()),e=c.join(i)}return{key:e,namespaces:Y(s)?[s]:s}}translate(e,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],n),u=a[a.length-1],c=n.lng||this.language,h=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(h){const b=n.nsSeparator||this.options.nsSeparator;return i?{res:`${u}${b}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:u,usedParams:this.getUsedParamsDetails(n)}:`${u}${b}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:u,usedParams:this.getUsedParamsDetails(n)}:o}const f=this.resolve(e,n);let p=f&&f.res;const g=f&&f.usedKey||o,T=f&&f.exactUsedKey||o,C=Object.prototype.toString.apply(p),k=["[object Number]","[object Function]","[object RegExp]"],E=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,w=!Y(p)&&typeof p!="boolean"&&typeof p!="number";if(v&&p&&w&&k.indexOf(C)<0&&!(Y(E)&&Array.isArray(p))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const b=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,p,{...n,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(f.res=b,f.usedParams=this.getUsedParamsDetails(n),f):b}if(s){const b=Array.isArray(p),L=b?[]:{},M=b?T:g;for(const S in p)if(Object.prototype.hasOwnProperty.call(p,S)){const _=`${M}${s}${S}`;L[S]=this.translate(_,{...n,joinArrays:!1,ns:a}),L[S]===_&&(L[S]=p[S])}p=L}}else if(v&&Y(E)&&Array.isArray(p))p=p.join(E),p&&(p=this.extendTranslation(p,e,n,r));else{let b=!1,L=!1;const M=n.count!==void 0&&!Y(n.count),S=$u.hasDefaultValue(n),_=M?this.pluralResolver.getSuffix(c,n.count,n):"",I=n.ordinal&&M?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",P=M&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),R=P&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${_}`]||n[`defaultValue${I}`]||n.defaultValue;!this.isValidLookup(p)&&S&&(b=!0,p=R),this.isValidLookup(p)||(L=!0,p=o);const A=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&L?void 0:p,Ne=S&&R!==p&&this.options.updateMissing;if(L||b||Ne){if(this.logger.log(Ne?"updateKey":"missingKey",c,u,o,Ne?R:p),s){const j=this.resolve(o,{...n,keySeparator:!1});j&&j.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ce=[];const Le=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Le&&Le[0])for(let j=0;j<Le.length;j++)ce.push(Le[j]);else this.options.saveMissingTo==="all"?ce=this.languageUtils.toResolveHierarchy(n.lng||this.language):ce.push(n.lng||this.language);const He=(j,H,Q)=>{const fe=S&&Q!==p?Q:A;this.options.missingKeyHandler?this.options.missingKeyHandler(j,u,H,fe,Ne,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(j,u,H,fe,Ne,n),this.emit("missingKey",j,u,H,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&M?ce.forEach(j=>{const H=this.pluralResolver.getSuffixes(j,n);P&&n[`defaultValue${this.options.pluralSeparator}zero`]&&H.indexOf(`${this.options.pluralSeparator}zero`)<0&&H.push(`${this.options.pluralSeparator}zero`),H.forEach(Q=>{He([j],o+Q,n[`defaultValue${Q}`]||R)})}):He(ce,o,R))}p=this.extendTranslation(p,e,n,f,r),L&&p===o&&this.options.appendNamespaceToMissingKey&&(p=`${u}:${o}`),(L||b)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${u}:${o}`:o,b?p:void 0):p=this.options.parseMissingKeyHandler(p))}return i?(f.res=p,f.usedParams=this.getUsedParamsDetails(n),f):p}extendTranslation(e,n,r,i,s){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const c=Y(e)&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(c){const p=e.match(this.interpolator.nestingRegexp);h=p&&p.length}let f=r.replace&&!Y(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,r.lng||this.language||i.usedLng,r),c){const p=e.match(this.interpolator.nestingRegexp),g=p&&p.length;h<g&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var p=arguments.length,g=new Array(p),T=0;T<p;T++)g[T]=arguments[T];return s&&s[0]===g[0]&&!r.context?(o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`),null):o.translate(...g,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,u=Y(a)?[a]:a;return e!=null&&u&&u.length&&r.applyPostProcessor!==!1&&(e=w1.handle(u,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,s,o,a;return Y(e)&&(e=[e]),e.forEach(u=>{if(this.isValidLookup(r))return;const c=this.extractFromKey(u,n),h=c.key;i=h;let f=c.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const p=n.count!==void 0&&!Y(n.count),g=p&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),T=n.context!==void 0&&(Y(n.context)||typeof n.context=="number")&&n.context!=="",C=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(k=>{this.isValidLookup(r)||(a=k,!L_[`${C[0]}-${k}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(L_[`${C[0]}-${k}`]=!0,this.logger.warn(`key "${i}" for languages "${C.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),C.forEach(E=>{if(this.isValidLookup(r))return;o=E;const v=[h];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(v,h,E,k,n);else{let b;p&&(b=this.pluralResolver.getSuffix(E,n.count,n));const L=`${this.options.pluralSeparator}zero`,M=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(v.push(h+b),n.ordinal&&b.indexOf(M)===0&&v.push(h+b.replace(M,this.options.pluralSeparator)),g&&v.push(h+L)),T){const S=`${h}${this.options.contextSeparator}${n.context}`;v.push(S),p&&(v.push(S+b),n.ordinal&&b.indexOf(M)===0&&v.push(S+b.replace(M,this.options.pluralSeparator)),g&&v.push(S+L))}}let w;for(;w=v.pop();)this.isValidLookup(r)||(s=w,r=this.getResource(E,k,w,n))}))})}),{res:r,usedKey:i,exactUsedKey:s,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,r,i):this.resourceStore.getResource(e,n,r,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!Y(e.replace);let i=r?e.replace:e;if(r&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const s of n)delete i[s]}return i}static hasDefaultValue(e){const n="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&n===r.substring(0,n.length)&&e[r]!==void 0)return!0;return!1}}const Qd=t=>t.charAt(0).toUpperCase()+t.slice(1);class M_{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=dn.create("languageUtils")}getScriptPartFromCode(e){if(e=Fu(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=Fu(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(Y(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=e.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Qd(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Qd(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=Qd(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(s=>{if(s===i)return s;if(!(s.indexOf("-")<0&&i.indexOf("-")<0)&&(s.indexOf("-")>0&&i.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===i||s.indexOf(i)===0&&i.length>1))return s})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),Y(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let r=e[n];return r||(r=e[this.getScriptPartFromCode(n)]),r||(r=e[this.formatLanguageCode(n)]),r||(r=e[this.getLanguagePartFromCode(n)]),r||(r=e.default),r||[]}toResolveHierarchy(e,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],s=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return Y(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):Y(e)&&s(this.formatLanguageCode(e)),r.forEach(o=>{i.indexOf(o)<0&&s(this.formatLanguageCode(o))}),i}}let f4=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],p4={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const m4=["v1","v2","v3"],g4=["v4"],V_={zero:0,one:1,two:2,few:3,many:4,other:5},v4=()=>{const t={};return f4.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:p4[e.fc]}})}),t};class y4{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=dn.create("pluralResolver"),(!this.options.compatibilityJSON||g4.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=v4(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const r=Fu(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:r,type:i});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let o;try{o=new Intl.PluralRules(r,{type:i})}catch{if(!e.match(/-|_/))return;const u=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(u,n)}return this.pluralRulesCache[s]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,r).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(e,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,s)=>V_[i]-V_[s]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(e,i,n)):[]}getSuffix(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const r=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let i=e.numbers[r];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const s=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:s():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!m4.includes(this.options.compatibilityJSON)}}const F_=function(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=s4(t,e,n);return!s&&i&&Y(n)&&(s=Pf(t,n,r),s===void 0&&(s=Pf(e,n,r))),s},Yd=t=>t.replace(/\$/g,"$$$$");class _4{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=dn.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:s,prefixEscaped:o,suffix:a,suffixEscaped:u,formatSeparator:c,unescapeSuffix:h,unescapePrefix:f,nestingPrefix:p,nestingPrefixEscaped:g,nestingSuffix:T,nestingSuffixEscaped:C,nestingOptionsSeparator:k,maxReplaces:E,alwaysFormat:v}=e.interpolation;this.escape=n!==void 0?n:a4,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=s?Oi(s):o||"{{",this.suffix=a?Oi(a):u||"}}",this.formatSeparator=c||",",this.unescapePrefix=h?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=p?Oi(p):g||Oi("$t("),this.nestingSuffix=T?Oi(T):C||Oi(")"),this.nestingOptionsSeparator=k||",",this.maxReplaces=E||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,r,i){let s,o,a;const u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=g=>{if(g.indexOf(this.formatSeparator)<0){const E=F_(n,u,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,r,{...i,...n,interpolationkey:g}):E}const T=g.split(this.formatSeparator),C=T.shift().trim(),k=T.join(this.formatSeparator).trim();return this.format(F_(n,u,C,this.options.keySeparator,this.options.ignoreJSONStructure),k,r,{...i,...n,interpolationkey:C})};this.resetRegExp();const h=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,f=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Yd(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Yd(this.escape(g)):Yd(g)}].forEach(g=>{for(a=0;s=g.regex.exec(e);){const T=s[1].trim();if(o=c(T),o===void 0)if(typeof h=="function"){const k=h(e,s,i);o=Y(k)?k:""}else if(i&&Object.prototype.hasOwnProperty.call(i,T))o="";else if(f){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${T} for interpolating ${e}`),o="";else!Y(o)&&!this.useRawValueToEscape&&(o=b_(o));const C=g.safeValue(o);if(e=e.replace(s[0],C),f?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=s[0].length):g.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,s,o;const a=(u,c)=>{const h=this.nestingOptionsSeparator;if(u.indexOf(h)<0)return u;const f=u.split(new RegExp(`${h}[ ]*{`));let p=`{${f[1]}`;u=f[0],p=this.interpolate(p,o);const g=p.match(/'/g),T=p.match(/"/g);(g&&g.length%2===0&&!T||T.length%2!==0)&&(p=p.replace(/'/g,'"'));try{o=JSON.parse(p),c&&(o={...c,...o})}catch(C){return this.logger.warn(`failed parsing options string in nesting for key ${u}`,C),`${u}${h}${p}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,u};for(;i=this.nestingRegexp.exec(e);){let u=[];o={...r},o=o.replace&&!Y(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const h=i[1].split(this.formatSeparator).map(f=>f.trim());i[1]=h.shift(),u=h,c=!0}if(s=n(a.call(this,i[1].trim(),o),o),s&&i[0]===e&&!Y(s))return s;Y(s)||(s=b_(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),s=""),c&&(s=u.reduce((h,f)=>this.format(h,f,r.lng,{...r,interpolationkey:i[1].trim()}),s.trim())),e=e.replace(i[0],s),this.regexp.lastIndex=0}return e}}const w4=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...u]=o.split(":"),c=u.join(":").trim().replace(/^'+|'+$/g,""),h=a.trim();n[h]||(n[h]=c),c==="false"&&(n[h]=!1),c==="true"&&(n[h]=!0),isNaN(c)||(n[h]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},Di=t=>{const e={};return(n,r,i)=>{let s=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(s={...s,[i.interpolationkey]:void 0});const o=r+JSON.stringify(s);let a=e[o];return a||(a=t(Fu(r),i),e[o]=a),a(n)}};class E4{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=dn.create("formatter"),this.options=e,this.formats={number:Di((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return s=>i.format(s)}),currency:Di((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return s=>i.format(s)}),datetime:Di((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return s=>i.format(s)}),relativetime:Di((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return s=>i.format(s,r.range||"day")}),list:Di((n,r)=>{const i=new Intl.ListFormat(n,{...r});return s=>i.format(s)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=Di(n)}format(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(a=>a.indexOf(")")>-1)){const a=s.findIndex(u=>u.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,a)].join(this.formatSeparator)}return s.reduce((a,u)=>{const{formatName:c,formatOptions:h}=w4(u);if(this.formats[c]){let f=a;try{const p=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},g=p.locale||p.lng||i.locale||i.lng||r;f=this.formats[c](a,g,{...h,...i,...p})}catch(p){this.logger.warn(p)}return f}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const T4=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class S4 extends Nc{constructor(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=dn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(e,n,r,i){const s={},o={},a={},u={};return e.forEach(c=>{let h=!0;n.forEach(f=>{const p=`${c}|${f}`;!r.reload&&this.store.hasResourceBundle(c,f)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?o[p]===void 0&&(o[p]=!0):(this.state[p]=1,h=!1,o[p]===void 0&&(o[p]=!0),s[p]===void 0&&(s[p]=!0),u[f]===void 0&&(u[f]=!0)))}),h||(a[c]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(u)}}loaded(e,n,r){const i=e.split("|"),s=i[0],o=i[1];n&&this.emit("failedLoading",s,o,n),!n&&r&&this.store.addResourceBundle(s,o,r,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&r&&(this.state[e]=0);const a={};this.queue.forEach(u=>{i4(u.loaded,[s],o),T4(u,e),n&&u.errors.push(n),u.pendingCount===0&&!u.done&&(Object.keys(u.loaded).forEach(c=>{a[c]||(a[c]={});const h=u.loaded[c];h.length&&h.forEach(f=>{a[c][f]===void 0&&(a[c][f]=!0)})}),u.done=!0,u.errors.length?u.callback(u.errors):u.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(u=>!u.done)}read(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:r,tried:i,wait:s,callback:o});return}this.readingCalls++;const a=(c,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(c&&h&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,r,i+1,s*2,o)},s);return}o(c,h)},u=this.backend[r].bind(this.backend);if(u.length===2){try{const c=u(e,n);c&&typeof c.then=="function"?c.then(h=>a(null,h)).catch(a):a(null,c)}catch(c){a(c)}return}return u(e,n,a)}prepareLoading(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();Y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Y(n)&&(n=[n]);const s=this.queueLoad(e,n,r,i);if(!s.toLoad.length)return s.pending.length||i(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,r){this.prepareLoading(e,n,{},r)}reload(e,n,r){this.prepareLoading(e,n,{reload:!0},r)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=e.split("|"),i=r[0],s=r[1];this.read(i,s,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${i} failed`,o),!o&&a&&this.logger.log(`${n}loaded namespace ${s} for language ${i}`,a),this.loaded(e,o,a)})}saveMissing(e,n,r,i,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const u={...o,isUpdate:s},c=this.backend.create.bind(this.backend);if(c.length<6)try{let h;c.length===5?h=c(e,n,r,i,u):h=c(e,n,r,i),h&&typeof h.then=="function"?h.then(f=>a(null,f)).catch(a):a(null,h)}catch(h){a(h)}else c(e,n,r,i,a,u)}!e||!e[0]||this.store.addResource(e[0],n,r,i)}}}const U_=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),Y(t[1])&&(e.defaultValue=t[1]),Y(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(r=>{e[r]=n[r]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),$_=t=>(Y(t.ns)&&(t.ns=[t.ns]),Y(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),Y(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),_l=()=>{},I4=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class da extends Nc{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=$_(e),this.services={},this.logger=dn,this.modules={external:[]},I4(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(Y(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=U_();this.options={...i,...this.options,...$_(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const s=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?dn.init(s(this.modules.logger),this.options):dn.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:typeof Intl<"u"&&(h=E4);const f=new M_(this.options);this.store=new D_(this.options.resources,this.options);const p=this.services;p.logger=dn,p.resourceStore=this.store,p.languageUtils=f,p.pluralResolver=new y4(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),h&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(p.formatter=s(h),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new _4(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new S4(s(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(g){for(var T=arguments.length,C=new Array(T>1?T-1:0),k=1;k<T;k++)C[k-1]=arguments[k];e.emit(g,...C)}),this.modules.languageDetector&&(p.languageDetector=s(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=s(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new $u(this.services,this.options),this.translator.on("*",function(g){for(var T=arguments.length,C=new Array(T>1?T-1:0),k=1;k<T;k++)C[k-1]=arguments[k];e.emit(g,...C)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,r||(r=_l),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=function(){return e.store[h](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=function(){return e.store[h](...arguments),e}});const u=io(),c=()=>{const h=(f,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),u.resolve(p),r(f,p)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),u}loadResources(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_l;const i=Y(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const s=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&s.indexOf(c)<0&&s.push(c)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>o(u)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(s,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(e,n,r){const i=io();return typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),r||(r=_l),this.services.backendConnector.reload(e,n,s=>{i.resolve(),r(s)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&w1.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(e,n){var r=this;this.isLanguageChangingTo=e;const i=io();this.emit("languageChanging",e);const s=u=>{this.language=u,this.languages=this.services.languageUtils.toResolveHierarchy(u),this.resolvedLanguage=void 0,this.setResolvedLanguage(u)},o=(u,c)=>{c?(s(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(u,function(){return r.t(...arguments)})},a=u=>{!e&&!u&&this.services.languageDetector&&(u=[]);const c=Y(u)?u:this.services.languageUtils.getBestMatchFromCodes(u);c&&(this.language||s(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,h=>{o(h,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),i}getFixedT(e,n,r){var i=this;const s=function(o,a){let u;if(typeof a!="object"){for(var c=arguments.length,h=new Array(c>2?c-2:0),f=2;f<c;f++)h[f-2]=arguments[f];u=i.options.overloadTranslationOptionHandler([o,a].concat(h))}else u={...a};u.lng=u.lng||s.lng,u.lngs=u.lngs||s.lngs,u.ns=u.ns||s.ns,u.keyPrefix!==""&&(u.keyPrefix=u.keyPrefix||r||s.keyPrefix);const p=i.options.keySeparator||".";let g;return u.keyPrefix&&Array.isArray(o)?g=o.map(T=>`${u.keyPrefix}${p}${T}`):g=u.keyPrefix?`${u.keyPrefix}${p}${o}`:o,i.t(g,u)};return Y(e)?s.lng=e:s.lngs=e,s.ns=n,s.keyPrefix=r,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(a,u)=>{const c=this.services.backendConnector.state[`${a}|${u}`];return c===-1||c===0||c===2};if(n.precheck){const a=n.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,e)&&(!i||o(s,e)))}loadNamespaces(e,n){const r=io();return this.options.ns?(Y(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(e,n){const r=io();Y(e)&&(e=[e]);const i=this.options.preload||[],s=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=i.concat(s),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new M_(U_());return n.indexOf(r.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new da(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_l;const r=e.forkResourceStore;r&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},s=new da(i);return(e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},r&&(s.store=new D_(this.store.data,i),s.services.resourceStore=s.store),s.translator=new $u(s.services,i),s.translator.on("*",function(a){for(var u=arguments.length,c=new Array(u>1?u-1:0),h=1;h<u;h++)c[h-1]=arguments[h];s.emit(a,...c)}),s.init(i,n),s.translator.options=i,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const et=da.createInstance();et.createInstance=da.createInstance;et.createInstance;et.dir;et.init;et.loadResources;et.reloadResources;et.use;et.changeLanguage;et.getFixedT;et.t;et.exists;et.setDefaultNamespace;et.hasLoadedNamespace;et.loadNamespaces;et.loadLanguages;var E1=[],k4=E1.forEach,P4=E1.slice;function C4(t){return k4.call(P4.call(arguments,1),function(e){if(e)for(var n in e)t[n]===void 0&&(t[n]=e[n])}),t}var j_=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,A4=function(e,n,r){var i=r||{};i.path=i.path||"/";var s=encodeURIComponent(n),o="".concat(e,"=").concat(s);if(i.maxAge>0){var a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");o+="; Max-Age=".concat(Math.floor(a))}if(i.domain){if(!j_.test(i.domain))throw new TypeError("option domain is invalid");o+="; Domain=".concat(i.domain)}if(i.path){if(!j_.test(i.path))throw new TypeError("option path is invalid");o+="; Path=".concat(i.path)}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires=".concat(i.expires.toUTCString())}if(i.httpOnly&&(o+="; HttpOnly"),i.secure&&(o+="; Secure"),i.sameSite){var u=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(u){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o},B_={create:function(e,n,r,i){var s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};r&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+r*60*1e3)),i&&(s.domain=i),document.cookie=A4(e,encodeURIComponent(n),s)},read:function(e){for(var n="".concat(e,"="),r=document.cookie.split(";"),i=0;i<r.length;i++){for(var s=r[i];s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(n)===0)return s.substring(n.length,s.length)}return null},remove:function(e){this.create(e,"",-1)}},R4={name:"cookie",lookup:function(e){var n;if(e.lookupCookie&&typeof document<"u"){var r=B_.read(e.lookupCookie);r&&(n=r)}return n},cacheUserLanguage:function(e,n){n.lookupCookie&&typeof document<"u"&&B_.create(n.lookupCookie,e,n.cookieMinutes,n.cookieDomain,n.cookieOptions)}},b4={name:"querystring",lookup:function(e){var n;if(typeof window<"u"){var r=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));for(var i=r.substring(1),s=i.split("&"),o=0;o<s.length;o++){var a=s[o].indexOf("=");if(a>0){var u=s[o].substring(0,a);u===e.lookupQuerystring&&(n=s[o].substring(a+1))}}}return n}},so=null,z_=function(){if(so!==null)return so;try{so=window!=="undefined"&&window.localStorage!==null;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{so=!1}return so},x4={name:"localStorage",lookup:function(e){var n;if(e.lookupLocalStorage&&z_()){var r=window.localStorage.getItem(e.lookupLocalStorage);r&&(n=r)}return n},cacheUserLanguage:function(e,n){n.lookupLocalStorage&&z_()&&window.localStorage.setItem(n.lookupLocalStorage,e)}},oo=null,W_=function(){if(oo!==null)return oo;try{oo=window!=="undefined"&&window.sessionStorage!==null;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{oo=!1}return oo},N4={name:"sessionStorage",lookup:function(e){var n;if(e.lookupSessionStorage&&W_()){var r=window.sessionStorage.getItem(e.lookupSessionStorage);r&&(n=r)}return n},cacheUserLanguage:function(e,n){n.lookupSessionStorage&&W_()&&window.sessionStorage.setItem(n.lookupSessionStorage,e)}},O4={name:"navigator",lookup:function(e){var n=[];if(typeof navigator<"u"){if(navigator.languages)for(var r=0;r<navigator.languages.length;r++)n.push(navigator.languages[r]);navigator.userLanguage&&n.push(navigator.userLanguage),navigator.language&&n.push(navigator.language)}return n.length>0?n:void 0}},D4={name:"htmlTag",lookup:function(e){var n,r=e.htmlTag||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(n=r.getAttribute("lang")),n}},L4={name:"path",lookup:function(e){var n;if(typeof window<"u"){var r=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(r instanceof Array)if(typeof e.lookupFromPathIndex=="number"){if(typeof r[e.lookupFromPathIndex]!="string")return;n=r[e.lookupFromPathIndex].replace("/","")}else n=r[0].replace("/","")}return n}},M4={name:"subdomain",lookup:function(e){var n=typeof e.lookupFromSubdomainIndex=="number"?e.lookupFromSubdomainIndex+1:1,r=typeof window<"u"&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[n]}},T1=!1;try{document.cookie,T1=!0}catch{}var S1=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];T1||S1.splice(1,1);function V4(){return{order:S1,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:function(e){return e}}}var I1=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};HF(this,t),this.type="languageDetector",this.detectors={},this.init(e,n)}return QF(t,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=n||{languageUtils:{}},this.options=C4(r,this.options||{},V4()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=function(s){return s.replace("-","_")}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(R4),this.addDetector(b4),this.addDetector(x4),this.addDetector(N4),this.addDetector(O4),this.addDetector(D4),this.addDetector(L4),this.addDetector(M4)}},{key:"addDetector",value:function(n){return this.detectors[n.name]=n,this}},{key:"detect",value:function(n){var r=this;n||(n=this.options.order);var i=[];return n.forEach(function(s){if(r.detectors[s]){var o=r.detectors[s].lookup(r.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.map(function(s){return r.options.convertDetectedLanguage(s)}),this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}},{key:"cacheUserLanguage",value:function(n,r){var i=this;r||(r=this.options.caches),r&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(n)>-1||r.forEach(function(s){i.detectors[s]&&i.detectors[s].cacheUserLanguage(n,i.options)}))}}])}();I1.type="languageDetector";const F4={loading:"読み込み中...",error:"エラーが発生しました",save:"保存",cancel:"キャンセル",delete:"削除",edit:"編集",close:"閉じる",back:"戻る",next:"次へ",previous:"前へ",search:"検索",filter:"フィルター",sort:"並び替え",refresh:"更新",submit:"送信",confirm:"確認",yes:"はい",no:"いいえ",ok:"OK",retry:"再試行",upload:"アップロード",download:"ダウンロード",copy:"コピー",share:"共有",report:"報告",block:"ブロック",follow:"フォロー",unfollow:"フォロー解除",like:"いいね",unlike:"いいねを取り消し",reply:"返信",quote:"引用",star:"お気に入り",unstar:"お気に入りから削除",notifications:"通知",settings:"設定",profile:"プロフィール",logout:"ログアウト",login:"ログイン",register:"登録",guest:"ゲスト",welcome:"ようこそ",home:"ホーム",boards:"掲示板",events:"イベント",messages:"メッセージ",account:"アカウント",newPost:"新規投稿",latest:"最新",popular:"人気",trending:"トレンド",recent:"最近",oldest:"古い順",newest:"新しい順",mostLiked:"いいねが多い順",mostReplied:"返信が多い順",noResults:"結果が見つかりません",noData:"データがありません",emptyState:"まだ何もありません",tryAgain:"もう一度お試しください",networkError:"ネットワークエラー",serverError:"サーバーエラー",validationError:"入力内容を確認してください",permissionDenied:"権限がありません",notFound:"見つかりません",unauthorized:"認証が必要です",forbidden:"アクセスが拒否されました",tooManyRequests:"リクエストが多すぎます",maintenance:"メンテナンス中です",offline:"オフラインです",online:"オンライン",connecting:"接続中...",connected:"接続済み",disconnected:"切断されました",reconnecting:"再接続中...",lastSeen:"最終アクセス",justNow:"今",minutesAgo:"分前",hoursAgo:"時間前",daysAgo:"日前",weeksAgo:"週前",monthsAgo:"ヶ月前",yearsAgo:"年前",today:"今日",yesterday:"昨日",tomorrow:"明日",thisWeek:"今週",lastWeek:"先週",nextWeek:"来週",thisMonth:"今月",lastMonth:"先月",nextMonth:"来月",thisYear:"今年",lastYear:"去年",nextYear:"来年",dateFormat:"yyyy年M月d日",timeFormat:"H:mm",dateTimeFormat:"yyyy年M月d日 H:mm",shortDateFormat:"M/d",shortTimeFormat:"H:mm",shortDateTimeFormat:"M/d H:mm",relativeTime:{justNow:"今",minutesAgo:"{{count}}分前",hoursAgo:"{{count}}時間前",daysAgo:"{{count}}日前",weeksAgo:"{{count}}週前",monthsAgo:"{{count}}ヶ月前",yearsAgo:"{{count}}年前"}},U4={common:F4},$4={login:"ログイン",register:"登録",logout:"ログアウト",email:"メールアドレス",password:"パスワード",confirmPassword:"パスワード確認",forgotPassword:"パスワードを忘れた場合",resetPassword:"パスワードリセット",sendResetEmail:"リセットメールを送信",emailSent:"メールを送信しました",checkEmail:"メールを確認してください",verificationEmailSent:"確認メールを送信しました",emailVerified:"メールアドレスが確認されました",emailNotVerified:"メールアドレスが確認されていません",resendVerification:"確認メールを再送信",verificationEmailResent:"確認メールを再送信しました",loginWithGoogle:"Googleでログイン",loginWithEmail:"メールアドレスでログイン",registerWithEmail:"メールアドレスで登録",alreadyHaveAccount:"すでにアカウントをお持ちですか？",dontHaveAccount:"アカウントをお持ちでないですか？",createAccount:"アカウントを作成",signIn:"サインイン",signUp:"サインアップ",signOut:"サインアウト",welcomeBack:"おかえりなさい",welcomeToNitechBoard:"NITech Boardへようこそ",enterEmail:"メールアドレスを入力してください",enterPassword:"パスワードを入力してください",enterConfirmPassword:"パスワードを再入力してください",passwordsMustMatch:"パスワードが一致しません",passwordTooShort:"パスワードは6文字以上である必要があります",invalidEmail:"有効なメールアドレスを入力してください",emailRequired:"メールアドレスは必須です",passwordRequired:"パスワードは必須です",confirmPasswordRequired:"パスワード確認は必須です",loginFailed:"ログインに失敗しました",registerFailed:"登録に失敗しました",logoutFailed:"ログアウトに失敗しました",resetPasswordFailed:"パスワードリセットに失敗しました",verificationEmailFailed:"確認メールの送信に失敗しました",invalidCredentials:"メールアドレスまたはパスワードが正しくありません",userNotFound:"ユーザーが見つかりません",emailAlreadyInUse:"このメールアドレスは既に使用されています",weakPassword:"パスワードが弱すぎます",tooManyRequests:"リクエストが多すぎます。しばらく待ってから再試行してください",networkError:"ネットワークエラーが発生しました",unknownError:"不明なエラーが発生しました",guestMode:"ゲストモード",guestModeDescription:"ログインせずに閲覧できます",continueAsGuest:"ゲストとして続行",mustBeLoggedIn:"この操作にはログインが必要です",mustBeVerified:"この操作にはメールアドレスの確認が必要です",onlyNitechEmail:"名古屋工業大学のメールアドレス（@ict.nitech.ac.jp）のみ使用できます",setupProfile:"プロフィール設定",setupProfileDescription:"アカウントの初期設定を行ってください",nickname:"ニックネーム",nicknameRequired:"ニックネームは必須です",nicknameTooShort:"ニックネームは2文字以上である必要があります",nicknameTooLong:"ニックネームは20文字以下である必要があります",avatar:"アバター",uploadAvatar:"アバターをアップロード",removeAvatar:"アバターを削除",profileSetupComplete:"プロフィール設定が完了しました",profileSetupFailed:"プロフィール設定に失敗しました",continue:"続行",skip:"スキップ",finish:"完了",profileUpdated:"プロフィールが更新されました",profileUpdateFailed:"プロフィールの更新に失敗しました"},j4={auth:$4},B4={title:"掲示板",createBoard:"掲示板を作成",editBoard:"掲示板を編集",deleteBoard:"掲示板を削除",boardTitle:"掲示板タイトル",boardDescription:"掲示板の説明",firstPost:"最初の投稿",postCount:"投稿数",latestPost:"最新投稿",createdBy:"作成者",createdAt:"作成日時",updatedAt:"更新日時",noBoards:"掲示板がありません",noBoardsInTopic:"このトピックには掲示板がありません",createFirstBoard:"最初の掲示板を作成しましょう",boardCreated:"掲示板が作成されました",boardUpdated:"掲示板が更新されました",boardDeleted:"掲示板が削除されました",boardCreationFailed:"掲示板の作成に失敗しました",boardUpdateFailed:"掲示板の更新に失敗しました",boardDeletionFailed:"掲示板の削除に失敗しました",titleRequired:"タイトルは必須です",titleTooShort:"タイトルは3文字以上である必要があります",titleTooLong:"タイトルは100文字以下である必要があります",descriptionTooLong:"説明は500文字以下である必要があります",firstPostRequired:"最初の投稿は必須です",firstPostTooShort:"最初の投稿は10文字以上である必要があります",searchBoards:"掲示板を検索",searchBoardsPlaceholder:"掲示板名で検索...",filterByTopic:"トピックでフィルター",sortBy:"並び替え",sortByLatest:"最新順",sortByPopular:"人気順",sortByTitle:"タイトル順",sortByCreated:"作成日順",allTopics:"すべてのトピック",myBoards:"自分の掲示板",starredBoards:"お気に入り掲示板",recentBoards:"最近の掲示板",popularBoards:"人気の掲示板",trendingBoards:"トレンド掲示板",archive:"アーカイブ",archiveSearch:"アーカイブ検索",archiveSearchPlaceholder:"キーワードまたは年で検索...",archiveByYear:"年別アーカイブ",archiveByKeyword:"キーワード別アーカイブ",archiveFolder:"アーカイブフォルダ",archiveImages:"アーカイブ画像",archiveCreated:"アーカイブが作成されました",archiveCreationFailed:"アーカイブの作成に失敗しました",noArchiveResults:"アーカイブの結果が見つかりません",archiveSearchFailed:"アーカイブ検索に失敗しました"},z4={title:"学科・コース",selectDepartment:"学科・コースを選択",advancedEngineering:"高度工学教育課程",creativeEngineering:"創造工学教育課程（6年一貫）",coreEngineering:"基幹工学教育課程（夜間主）5年課程",lifeScienceChemistry:"生命・応用化学科",physicalEngineering:"物理工学科",electricalMechanical:"電気・機械工学科",computerScience:"情報工学科",socialEngineering:"社会工学科",materialsEnergy:"材料エネルギーコース",computerSocial:"情報・社会コース",electricalMechanicalEvening:"電気・機械工学コース",environmentalUrban:"環境都市工学コース",noDepartmentSelected:"学科・コースが選択されていません",selectDepartmentFirst:"まず学科・コースを選択してください"},W4={title:"トピック",assignments:"授業課題",labWork:"実験課題",midterm:"中間試験",final:"期末試験",graduateExam:"大学院試験",jobHunting:"就職活動",other:"その他",allTopics:"すべてのトピック",selectTopic:"トピックを選択",noTopics:"トピックがありません",topicCreated:"トピックが作成されました",topicUpdated:"トピックが更新されました",topicDeleted:"トピックが削除されました",topicCreationFailed:"トピックの作成に失敗しました",topicUpdateFailed:"トピックの更新に失敗しました",topicDeletionFailed:"トピックの削除に失敗しました"},H4={boards:B4,departments:z4,topics:W4},q4={loading:"Loading...",error:"An error occurred",save:"Save",cancel:"Cancel",delete:"Delete",edit:"Edit",close:"Close",back:"Back",next:"Next",previous:"Previous",search:"Search",filter:"Filter",sort:"Sort",refresh:"Refresh",submit:"Submit",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",retry:"Retry",upload:"Upload",download:"Download",copy:"Copy",share:"Share",report:"Report",block:"Block",follow:"Follow",unfollow:"Unfollow",like:"Like",unlike:"Unlike",reply:"Reply",quote:"Quote",star:"Star",unstar:"Unstar",notifications:"Notifications",settings:"Settings",profile:"Profile",logout:"Logout",login:"Login",register:"Register",guest:"Guest",welcome:"Welcome",home:"Home",boards:"Boards",events:"Events",messages:"Messages",account:"Account",newPost:"New Post",latest:"Latest",popular:"Popular",trending:"Trending",recent:"Recent",oldest:"Oldest",newest:"Newest",mostLiked:"Most Liked",mostReplied:"Most Replied",noResults:"No results found",noData:"No data available",emptyState:"Nothing here yet",tryAgain:"Please try again",networkError:"Network error",serverError:"Server error",validationError:"Please check your input",permissionDenied:"Permission denied",notFound:"Not found",unauthorized:"Authentication required",forbidden:"Access denied",tooManyRequests:"Too many requests",maintenance:"Under maintenance",offline:"Offline",online:"Online",connecting:"Connecting...",connected:"Connected",disconnected:"Disconnected",reconnecting:"Reconnecting...",lastSeen:"Last seen",justNow:"Just now",minutesAgo:"minutes ago",hoursAgo:"hours ago",daysAgo:"days ago",weeksAgo:"weeks ago",monthsAgo:"months ago",yearsAgo:"years ago",today:"Today",yesterday:"Yesterday",tomorrow:"Tomorrow",thisWeek:"This week",lastWeek:"Last week",nextWeek:"Next week",thisMonth:"This month",lastMonth:"Last month",nextMonth:"Next month",thisYear:"This year",lastYear:"Last year",nextYear:"Next year",dateFormat:"MMM d, yyyy",timeFormat:"h:mm a",dateTimeFormat:"MMM d, yyyy h:mm a",shortDateFormat:"M/d",shortTimeFormat:"h:mm a",shortDateTimeFormat:"M/d h:mm a",relativeTime:{justNow:"Just now",minutesAgo:"{{count}} minutes ago",hoursAgo:"{{count}} hours ago",daysAgo:"{{count}} days ago",weeksAgo:"{{count}} weeks ago",monthsAgo:"{{count}} months ago",yearsAgo:"{{count}} years ago"}},K4={common:q4},G4={login:"Login",register:"Register",logout:"Logout",email:"Email",password:"Password",confirmPassword:"Confirm Password",forgotPassword:"Forgot Password?",resetPassword:"Reset Password",sendResetEmail:"Send Reset Email",emailSent:"Email sent",checkEmail:"Please check your email",verificationEmailSent:"Verification email sent",emailVerified:"Email verified",emailNotVerified:"Email not verified",resendVerification:"Resend verification email",verificationEmailResent:"Verification email resent",loginWithGoogle:"Login with Google",loginWithEmail:"Login with Email",registerWithEmail:"Register with Email",alreadyHaveAccount:"Already have an account?",dontHaveAccount:"Don't have an account?",createAccount:"Create Account",signIn:"Sign In",signUp:"Sign Up",signOut:"Sign Out",welcomeBack:"Welcome back",welcomeToNitechBoard:"Welcome to NITech Board",enterEmail:"Enter your email address",enterPassword:"Enter your password",enterConfirmPassword:"Re-enter your password",passwordsMustMatch:"Passwords must match",passwordTooShort:"Password must be at least 6 characters",invalidEmail:"Please enter a valid email address",emailRequired:"Email is required",passwordRequired:"Password is required",confirmPasswordRequired:"Password confirmation is required",loginFailed:"Login failed",registerFailed:"Registration failed",logoutFailed:"Logout failed",resetPasswordFailed:"Password reset failed",verificationEmailFailed:"Verification email failed",invalidCredentials:"Invalid email or password",userNotFound:"User not found",emailAlreadyInUse:"Email already in use",weakPassword:"Password is too weak",tooManyRequests:"Too many requests. Please try again later",networkError:"Network error occurred",unknownError:"Unknown error occurred",guestMode:"Guest Mode",guestModeDescription:"Browse without logging in",continueAsGuest:"Continue as Guest",mustBeLoggedIn:"You must be logged in to perform this action",mustBeVerified:"You must verify your email to perform this action",onlyNitechEmail:"Only Nagoya Institute of Technology email addresses (@ict.nitech.ac.jp) are allowed",setupProfile:"Profile Setup",setupProfileDescription:"Please complete your initial account setup",nickname:"Nickname",nicknameRequired:"Nickname is required",nicknameTooShort:"Nickname must be at least 2 characters",nicknameTooLong:"Nickname must be 20 characters or less",avatar:"Avatar",uploadAvatar:"Upload Avatar",removeAvatar:"Remove Avatar",profileSetupComplete:"Profile setup complete",profileSetupFailed:"Profile setup failed",continue:"Continue",skip:"Skip",finish:"Finish",profileUpdated:"Profile updated",profileUpdateFailed:"Profile update failed"},Q4={auth:G4},Y4={title:"Boards",createBoard:"Create Board",editBoard:"Edit Board",deleteBoard:"Delete Board",boardTitle:"Board Title",boardDescription:"Board Description",firstPost:"First Post",postCount:"Posts",latestPost:"Latest Post",createdBy:"Created by",createdAt:"Created at",updatedAt:"Updated at",noBoards:"No boards available",noBoardsInTopic:"No boards in this topic",createFirstBoard:"Create the first board",boardCreated:"Board created",boardUpdated:"Board updated",boardDeleted:"Board deleted",boardCreationFailed:"Board creation failed",boardUpdateFailed:"Board update failed",boardDeletionFailed:"Board deletion failed",titleRequired:"Title is required",titleTooShort:"Title must be at least 3 characters",titleTooLong:"Title must be 100 characters or less",descriptionTooLong:"Description must be 500 characters or less",firstPostRequired:"First post is required",firstPostTooShort:"First post must be at least 10 characters",searchBoards:"Search boards",searchBoardsPlaceholder:"Search by board name...",filterByTopic:"Filter by topic",sortBy:"Sort by",sortByLatest:"Latest",sortByPopular:"Popular",sortByTitle:"Title",sortByCreated:"Created",allTopics:"All topics",myBoards:"My boards",starredBoards:"Starred boards",recentBoards:"Recent boards",popularBoards:"Popular boards",trendingBoards:"Trending boards",archive:"Archive",archiveSearch:"Archive search",archiveSearchPlaceholder:"Search by keyword or year...",archiveByYear:"Archive by year",archiveByKeyword:"Archive by keyword",archiveFolder:"Archive folder",archiveImages:"Archive images",archiveCreated:"Archive created",archiveCreationFailed:"Archive creation failed",noArchiveResults:"No archive results found",archiveSearchFailed:"Archive search failed"},X4={title:"Departments & Courses",selectDepartment:"Select Department/Course",advancedEngineering:"Advanced Engineering Education Program",creativeEngineering:"Creative Engineering Education Program (6-year integrated)",coreEngineering:"Core Engineering Education Program (Evening, 5-year)",lifeScienceChemistry:"Life Science and Applied Chemistry",physicalEngineering:"Physical Science and Engineering",electricalMechanical:"Electrical and Mechanical Engineering",computerScience:"Computer Science",socialEngineering:"Architecture, Civil Engineering, and Industrial Management Engineering",materialsEnergy:"Materials and Energy",computerSocial:"Computer and Social Engineering",electricalMechanicalEvening:"Electrical and Mechanical Engineering",environmentalUrban:"Environmental and Urban Engineering",noDepartmentSelected:"No department selected",selectDepartmentFirst:"Please select a department first"},J4={title:"Topics",assignments:"Assignments",labWork:"Lab Work",midterm:"Midterm Exams",final:"Final Exams",graduateExam:"Graduate Exams",jobHunting:"Job Hunting",other:"Other",allTopics:"All topics",selectTopic:"Select topic",noTopics:"No topics available",topicCreated:"Topic created",topicUpdated:"Topic updated",topicDeleted:"Topic deleted",topicCreationFailed:"Topic creation failed",topicUpdateFailed:"Topic update failed",topicDeletionFailed:"Topic deletion failed"},Z4={boards:Y4,departments:X4,topics:J4},e$={ja:{common:U4,auth:j4,boards:H4},en:{common:K4,auth:Q4,boards:Z4}};et.use(I1).use(EV).init({resources:e$,fallbackLng:"ja",debug:!1,interpolation:{escapeValue:!1},detection:{order:["localStorage","navigator","htmlTag"],caches:["localStorage"],lookupLocalStorage:"nitech-board-locale"},defaultNS:"common",ns:["common","auth","boards"],react:{useSuspense:!1}});const t$=async()=>{try{console.log("Initializing i18n..."),await et.init(),console.log("i18n initialized successfully")}catch(t){console.error("Failed to initialize i18n:",t)}Xd.createRoot(document.getElementById("root")).render(V.jsx(xf.StrictMode,{children:V.jsxs(bC,{children:[V.jsx(t4,{}),V.jsx(SA,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--toast-bg)",color:"var(--toast-color)",border:"1px solid var(--toast-border)"}}})]})}))};t$();export{AU as C,xU as H,Li as L,A_ as M,MU as P,y1 as S,kf as U,Pm as a,dE as b,Ti as c,Pt as d,n$ as e,V as j,O as r,xc as u,r$ as z};
