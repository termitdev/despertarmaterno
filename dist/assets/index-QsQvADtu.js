(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function fc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ga={exports:{}},tl={},Za={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),dc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),wc=Symbol.for("react.memo"),kc=Symbol.for("react.lazy"),Di=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=Di&&e[Di]||e["@@iterator"],typeof e=="function"?e:null)}var Ja={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ba=Object.assign,qa={};function ln(e,t,n){this.props=e,this.context=t,this.refs=qa,this.updater=n||Ja}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function es(){}es.prototype=ln.prototype;function Bo(e,t,n){this.props=e,this.context=t,this.refs=qa,this.updater=n||Ja}var Vo=Bo.prototype=new es;Vo.constructor=Bo;ba(Vo,ln.prototype);Vo.isPureReactComponent=!0;var Fi=Array.isArray,ts=Object.prototype.hasOwnProperty,Wo={current:null},ns={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ts.call(t,r)&&!ns.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Gn,type:e,key:o,ref:i,props:l,_owner:Wo.current}}function Ec(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function Cc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ui=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Gn:case dc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+wl(i,0):r,Fi(l)?(n="",e!=null&&(n=e.replace(Ui,"$&/")+"/"),xr(l,t,n,"",function(f){return f})):l!=null&&($o(l)&&(l=Ec(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ui,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Fi(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+wl(o,a);i+=xr(o,t,n,s,l)}else if(s=Sc(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+wl(o,a++),i+=xr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Nc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},jc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Wo};function ls(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=ln;P.Fragment=pc;P.Profiler=hc;P.PureComponent=Bo;P.StrictMode=mc;P.Suspense=xc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jc;P.act=ls;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ba({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Wo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ts.call(t,s)&&!ns.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:Gn,type:e.type,key:l,ref:o,props:r,_owner:i}};P.createContext=function(e){return e={$$typeof:vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gc,_context:e},e.Consumer=e};P.createElement=rs;P.createFactory=function(e){var t=rs.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:yc,render:e}};P.isValidElement=$o;P.lazy=function(e){return{$$typeof:kc,_payload:{_status:-1,_result:e},_init:Nc}};P.memo=function(e,t){return{$$typeof:wc,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};P.unstable_act=ls;P.useCallback=function(e,t){return se.current.useCallback(e,t)};P.useContext=function(e){return se.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return se.current.useDeferredValue(e)};P.useEffect=function(e,t){return se.current.useEffect(e,t)};P.useId=function(){return se.current.useId()};P.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return se.current.useMemo(e,t)};P.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};P.useRef=function(e){return se.current.useRef(e)};P.useState=function(e){return se.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return se.current.useTransition()};P.version="18.3.1";Za.exports=P;var O=Za.exports;const zc=fc(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=O,Lc=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),Tc=Object.prototype.hasOwnProperty,Ic=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oc={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Tc.call(t,r)&&!Oc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Lc,type:e,key:o,ref:i,props:l,_owner:Ic.current}}tl.Fragment=Pc;tl.jsx=os;tl.jsxs=os;Ga.exports=tl;var u=Ga.exports,Xl={},is={exports:{}},xe={},as={exports:{}},ss={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,_){var L=C.length;C.push(_);e:for(;0<L;){var Q=L-1>>>1,Z=C[Q];if(0<l(Z,_))C[Q]=_,C[L]=Z,L=Q;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var _=C[0],L=C.pop();if(L!==_){C[0]=L;e:for(var Q=0,Z=C.length,er=Z>>>1;Q<er;){var gt=2*(Q+1)-1,xl=C[gt],vt=gt+1,tr=C[vt];if(0>l(xl,L))vt<Z&&0>l(tr,xl)?(C[Q]=tr,C[vt]=L,Q=vt):(C[Q]=xl,C[gt]=L,Q=gt);else if(vt<Z&&0>l(tr,L))C[Q]=tr,C[vt]=L,Q=vt;else break e}}return _}function l(C,_){var L=C.sortIndex-_.sortIndex;return L!==0?L:C.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],f=[],g=1,h=null,m=3,x=!1,w=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var _=n(f);_!==null;){if(_.callback===null)r(f);else if(_.startTime<=C)r(f),_.sortIndex=_.expirationTime,t(s,_);else break;_=n(f)}}function v(C){if(k=!1,p(C),!w)if(n(s)!==null)w=!0,vl(E);else{var _=n(f);_!==null&&yl(v,_.startTime-C)}}function E(C,_){w=!1,k&&(k=!1,d(z),z=-1),x=!0;var L=m;try{for(p(_),h=n(s);h!==null&&(!(h.expirationTime>_)||C&&!ze());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,m=h.priorityLevel;var Z=Q(h.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(s)&&r(s),p(_)}else r(s);h=n(s)}if(h!==null)var er=!0;else{var gt=n(f);gt!==null&&yl(v,gt.startTime-_),er=!1}return er}finally{h=null,m=L,x=!1}}var N=!1,j=null,z=-1,H=5,T=-1;function ze(){return!(e.unstable_now()-T<H)}function sn(){if(j!==null){var C=e.unstable_now();T=C;var _=!0;try{_=j(!0,C)}finally{_?un():(N=!1,j=null)}}else N=!1}var un;if(typeof c=="function")un=function(){c(sn)};else if(typeof MessageChannel<"u"){var Mi=new MessageChannel,cc=Mi.port2;Mi.port1.onmessage=sn,un=function(){cc.postMessage(null)}}else un=function(){M(sn,0)};function vl(C){j=C,N||(N=!0,un())}function yl(C,_){z=M(function(){C(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,vl(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var L=m;m=_;try{return C()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,_){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=m;m=C;try{return _()}finally{m=L}},e.unstable_scheduleCallback=function(C,_,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,C={id:g++,callback:_,priorityLevel:C,startTime:L,expirationTime:Z,sortIndex:-1},L>Q?(C.sortIndex=L,t(f,C),n(s)===null&&C===n(f)&&(k?(d(z),z=-1):k=!0,yl(v,L-Q))):(C.sortIndex=Z,t(s,C),w||x||(w=!0,vl(E))),C},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(C){var _=m;return function(){var L=m;m=_;try{return C.apply(this,arguments)}finally{m=L}}}})(ss);as.exports=ss;var Rc=as.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=O,ye=Rc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var us=new Set,In={};function Pt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(In[e]=t,e=0;e<t.length;e++)us.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,Dc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ai={},Bi={};function Fc(e){return Yl.call(Bi,e)?!0:Yl.call(Ai,e)?!1:Dc.test(e)?Bi[e]=!0:(Ai[e]=!0,!1)}function Uc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ac(e,t,n,r){if(t===null||typeof t>"u"||Uc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ho=/[\-:]([a-z])/g;function Qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ho,Qo);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ho,Qo);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ho,Qo);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xo(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ac(t,n,l,r)&&(n=null),r||l===null?Fc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),cs=Symbol.for("react.provider"),fs=Symbol.for("react.context"),Ko=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),ds=Symbol.for("react.offscreen"),Vi=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Vi&&e[Vi]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,kl;function yn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var Sl=!1;function El(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Bc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case Ot:return"Portal";case Kl:return"Profiler";case Yo:return"StrictMode";case Gl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fs:return(e.displayName||"Context")+".Consumer";case cs:return(e._context.displayName||"Context")+".Provider";case Ko:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Go:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function Vc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wc(e){var t=ps(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Wc(e))}function ms(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ps(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hs(e,t){t=t.checked,t!=null&&Xo(e,"checked",t,!1)}function ql(e,t){hs(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eo(e,t.type,n):t.hasOwnProperty("defaultValue")&&eo(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $i(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eo(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function to(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(xn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function gs(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$c=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){$c.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function xs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=xs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Hc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(Hc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function lo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Xt=null,Yt=null;function Xi(e){if(e=bn(e)){if(typeof io!="function")throw Error(y(280));var t=e.stateNode;t&&(t=il(t),io(e.stateNode,e.type,t))}}function ks(e){Xt?Yt?Yt.push(e):Yt=[e]:Xt=e}function Ss(){if(Xt){var e=Xt,t=Yt;if(Yt=Xt=null,Xi(e),t)for(e=0;e<t.length;e++)Xi(t[e])}}function Es(e,t){return e(t)}function Cs(){}var Cl=!1;function Ns(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Es(e,t,n)}finally{Cl=!1,(Xt!==null||Yt!==null)&&(Cs(),Ss())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ao=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ao=!1}function Qc(e,t,n,r,l,o,i,a,s){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var En=!1,Ir=null,Or=!1,so=null,Xc={onError:function(e){En=!0,Ir=e}};function Yc(e,t,n,r,l,o,i,a,s){En=!1,Ir=null,Qc.apply(Xc,arguments)}function Kc(e,t,n,r,l,o,i,a,s){if(Yc.apply(this,arguments),En){if(En){var f=Ir;En=!1,Ir=null}else throw Error(y(198));Or||(Or=!0,so=f)}}function Tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function js(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yi(e){if(Tt(e)!==e)throw Error(y(188))}function Gc(e){var t=e.alternate;if(!t){if(t=Tt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Yi(l),e;if(o===r)return Yi(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function zs(e){return e=Gc(e),e!==null?_s(e):null}function _s(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_s(e);if(t!==null)return t;e=e.sibling}return null}var Ls=ye.unstable_scheduleCallback,Ki=ye.unstable_cancelCallback,Zc=ye.unstable_shouldYield,Jc=ye.unstable_requestPaint,X=ye.unstable_now,bc=ye.unstable_getCurrentPriorityLevel,Jo=ye.unstable_ImmediatePriority,Ps=ye.unstable_UserBlockingPriority,Rr=ye.unstable_NormalPriority,qc=ye.unstable_LowPriority,Ts=ye.unstable_IdlePriority,nl=null,Ue=null;function ef(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:rf,tf=Math.log,nf=Math.LN2;function rf(e){return e>>>=0,e===0?32:31-(tf(e)/nf|0)|0}var ir=64,ar=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=wn(a):(o&=i,o!==0&&(r=wn(o)))}else i=n&~l,i!==0?r=wn(i):o!==0&&(r=wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function lf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function of(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ie(o),a=1<<i,s=l[i];s===-1?(!(a&n)||a&r)&&(l[i]=lf(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Is(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function af(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function bo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Os(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rs,qo,Ms,Ds,Fs,co=!1,sr=[],rt=null,lt=null,ot=null,Mn=new Map,Dn=new Map,qe=[],sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gi(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function dn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=bn(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function uf(e,t,n,r,l){switch(t){case"focusin":return rt=dn(rt,e,t,n,r,l),!0;case"dragenter":return lt=dn(lt,e,t,n,r,l),!0;case"mouseover":return ot=dn(ot,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Mn.set(o,dn(Mn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Dn.set(o,dn(Dn.get(o)||null,e,t,n,r,l)),!0}return!1}function Us(e){var t=wt(e.target);if(t!==null){var n=Tt(t);if(n!==null){if(t=n.tag,t===13){if(t=js(n),t!==null){e.blockedOn=t,Fs(e.priority,function(){Ms(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oo=r,n.target.dispatchEvent(r),oo=null}else return t=bn(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function Zi(e,t,n){kr(e)&&n.delete(t)}function cf(){co=!1,rt!==null&&kr(rt)&&(rt=null),lt!==null&&kr(lt)&&(lt=null),ot!==null&&kr(ot)&&(ot=null),Mn.forEach(Zi),Dn.forEach(Zi)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,cf)))}function Fn(e){function t(l){return pn(l,e)}if(0<sr.length){pn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),ot!==null&&pn(ot,e),Mn.forEach(t),Dn.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)Us(n),n.blockedOn===null&&qe.shift()}var Kt=Ge.ReactCurrentBatchConfig,Dr=!0;function ff(e,t,n,r){var l=R,o=Kt.transition;Kt.transition=null;try{R=1,ei(e,t,n,r)}finally{R=l,Kt.transition=o}}function df(e,t,n,r){var l=R,o=Kt.transition;Kt.transition=null;try{R=4,ei(e,t,n,r)}finally{R=l,Kt.transition=o}}function ei(e,t,n,r){if(Dr){var l=fo(e,t,n,r);if(l===null)Ml(e,t,r,Fr,n),Gi(e,r);else if(uf(l,e,t,n,r))r.stopPropagation();else if(Gi(e,r),t&4&&-1<sf.indexOf(e)){for(;l!==null;){var o=bn(l);if(o!==null&&Rs(o),o=fo(e,t,n,r),o===null&&Ml(e,t,r,Fr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ml(e,t,r,null,n)}}var Fr=null;function fo(e,t,n,r){if(Fr=null,e=Zo(r),e=wt(e),e!==null)if(t=Tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=js(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function As(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bc()){case Jo:return 1;case Ps:return 4;case Rr:case qc:return 16;case Ts:return 536870912;default:return 16}default:return 16}}var tt=null,ti=null,Sr=null;function Bs(){if(Sr)return Sr;var e,t=ti,n=t.length,r,l="value"in tt?tt.value:tt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Ji(){return!1}function we(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:Ji,this.isPropagationStopped=Ji,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=we(on),Jn=W({},on,{view:0,detail:0}),pf=we(Jn),jl,zl,mn,rl=W({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(jl=e.screenX-mn.screenX,zl=e.screenY-mn.screenY):zl=jl=0,mn=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),bi=we(rl),mf=W({},rl,{dataTransfer:0}),hf=we(mf),gf=W({},Jn,{relatedTarget:0}),_l=we(gf),vf=W({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),yf=we(vf),xf=W({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wf=we(xf),kf=W({},on,{data:0}),qi=we(kf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cf[e])?!!t[e]:!1}function ri(){return Nf}var jf=W({},Jn,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ef[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zf=we(jf),_f=W({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ea=we(_f),Lf=W({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),Pf=we(Lf),Tf=W({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),If=we(Tf),Of=W({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rf=we(Of),Mf=[9,13,27,32],li=Qe&&"CompositionEvent"in window,Cn=null;Qe&&"documentMode"in document&&(Cn=document.documentMode);var Df=Qe&&"TextEvent"in window&&!Cn,Vs=Qe&&(!li||Cn&&8<Cn&&11>=Cn),ta=" ",na=!1;function Ws(e,t){switch(e){case"keyup":return Mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function Ff(e,t){switch(e){case"compositionend":return $s(t);case"keypress":return t.which!==32?null:(na=!0,ta);case"textInput":return e=t.data,e===ta&&na?null:e;default:return null}}function Uf(e,t){if(Mt)return e==="compositionend"||!li&&Ws(e,t)?(e=Bs(),Sr=ti=tt=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vs&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function Hs(e,t,n,r){ks(r),t=Ur(t,"onChange"),0<t.length&&(n=new ni("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nn=null,Un=null;function Bf(e){tu(e,0)}function ll(e){var t=Ut(e);if(ms(t))return e}function Vf(e,t){if(e==="change")return t}var Qs=!1;if(Qe){var Ll;if(Qe){var Pl="oninput"in document;if(!Pl){var la=document.createElement("div");la.setAttribute("oninput","return;"),Pl=typeof la.oninput=="function"}Ll=Pl}else Ll=!1;Qs=Ll&&(!document.documentMode||9<document.documentMode)}function oa(){Nn&&(Nn.detachEvent("onpropertychange",Xs),Un=Nn=null)}function Xs(e){if(e.propertyName==="value"&&ll(Un)){var t=[];Hs(t,Un,e,Zo(e)),Ns(Bf,t)}}function Wf(e,t,n){e==="focusin"?(oa(),Nn=t,Un=n,Nn.attachEvent("onpropertychange",Xs)):e==="focusout"&&oa()}function $f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Un)}function Hf(e,t){if(e==="click")return ll(t)}function Qf(e,t){if(e==="input"||e==="change")return ll(t)}function Xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Xf;function An(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yl.call(t,l)||!Re(e[l],t[l]))return!1}return!0}function ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aa(e,t){var n=ia(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ia(n)}}function Ys(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ys(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ks(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yf(e){var t=Ks(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ys(n.ownerDocument.documentElement,n)){if(r!==null&&oi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=aa(n,o);var i=aa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kf=Qe&&"documentMode"in document&&11>=document.documentMode,Dt=null,po=null,jn=null,mo=!1;function sa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mo||Dt==null||Dt!==Tr(r)||(r=Dt,"selectionStart"in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&An(jn,r)||(jn=r,r=Ur(po,"onSelect"),0<r.length&&(t=new ni("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dt)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Tl={},Gs={};Qe&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function ol(e){if(Tl[e])return Tl[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gs)return Tl[e]=t[n];return e}var Zs=ol("animationend"),Js=ol("animationiteration"),bs=ol("animationstart"),qs=ol("transitionend"),eu=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){eu.set(e,t),Pt(t,[e])}for(var Il=0;Il<ua.length;Il++){var Ol=ua[Il],Gf=Ol.toLowerCase(),Zf=Ol[0].toUpperCase()+Ol.slice(1);pt(Gf,"on"+Zf)}pt(Zs,"onAnimationEnd");pt(Js,"onAnimationIteration");pt(bs,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(qs,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function ca(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kc(r,t,void 0,e),e.currentTarget=null}function tu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,f=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;ca(l,a,f),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,f=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;ca(l,a,f),o=s}}}if(Or)throw e=so,Or=!1,so=null,e}function F(e,t){var n=t[xo];n===void 0&&(n=t[xo]=new Set);var r=e+"__bubble";n.has(r)||(nu(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),nu(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[fr]){e[fr]=!0,us.forEach(function(n){n!=="selectionchange"&&(Jf.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Rl("selectionchange",!1,t))}}function nu(e,t,n,r){switch(As(t)){case 1:var l=ff;break;case 4:l=df;break;default:l=ei}n=l.bind(null,t,n,e),l=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ml(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=wt(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}Ns(function(){var f=o,g=Zo(n),h=[];e:{var m=eu.get(e);if(m!==void 0){var x=ni,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":x=zf;break;case"focusin":w="focus",x=_l;break;case"focusout":w="blur",x=_l;break;case"beforeblur":case"afterblur":x=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=bi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=hf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Pf;break;case Zs:case Js:case bs:x=yf;break;case qs:x=If;break;case"scroll":x=pf;break;case"wheel":x=Rf;break;case"copy":case"cut":case"paste":x=wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ea}var k=(t&4)!==0,M=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var c=f,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Rn(c,d),v!=null&&k.push(Vn(c,v,p)))),M)break;c=c.return}0<k.length&&(m=new x(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==oo&&(w=n.relatedTarget||n.fromElement)&&(wt(w)||w[Xe]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=f,w=w?wt(w):null,w!==null&&(M=Tt(w),w!==M||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=f),x!==w)){if(k=bi,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=ea,v="onPointerLeave",d="onPointerEnter",c="pointer"),M=x==null?m:Ut(x),p=w==null?m:Ut(w),m=new k(v,c+"leave",x,n,g),m.target=M,m.relatedTarget=p,v=null,wt(g)===f&&(k=new k(d,c+"enter",w,n,g),k.target=p,k.relatedTarget=M,v=k),M=v,x&&w)t:{for(k=x,d=w,c=0,p=k;p;p=It(p))c++;for(p=0,v=d;v;v=It(v))p++;for(;0<c-p;)k=It(k),c--;for(;0<p-c;)d=It(d),p--;for(;c--;){if(k===d||d!==null&&k===d.alternate)break t;k=It(k),d=It(d)}k=null}else k=null;x!==null&&fa(h,m,x,k,!1),w!==null&&M!==null&&fa(h,M,w,k,!0)}}e:{if(m=f?Ut(f):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var E=Vf;else if(ra(m))if(Qs)E=Qf;else{E=$f;var N=Wf}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Hf);if(E&&(E=E(e,f))){Hs(h,E,n,g);break e}N&&N(e,m,f),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&eo(m,"number",m.value)}switch(N=f?Ut(f):window,e){case"focusin":(ra(N)||N.contentEditable==="true")&&(Dt=N,po=f,jn=null);break;case"focusout":jn=po=Dt=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,sa(h,n,g);break;case"selectionchange":if(Kf)break;case"keydown":case"keyup":sa(h,n,g)}var j;if(li)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Mt?Ws(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Vs&&n.locale!=="ko"&&(Mt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Mt&&(j=Bs()):(tt=g,ti="value"in tt?tt.value:tt.textContent,Mt=!0)),N=Ur(f,z),0<N.length&&(z=new qi(z,e,null,n,g),h.push({event:z,listeners:N}),j?z.data=j:(j=$s(n),j!==null&&(z.data=j)))),(j=Df?Ff(e,n):Uf(e,n))&&(f=Ur(f,"onBeforeInput"),0<f.length&&(g=new qi("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:f}),g.data=j))}tu(h,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Rn(e,n),o!=null&&r.unshift(Vn(e,o,l)),o=Rn(e,t),o!=null&&r.push(Vn(e,o,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,f=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&f!==null&&(a=f,l?(s=Rn(n,o),s!=null&&i.unshift(Vn(n,s,a))):l||(s=Rn(n,o),s!=null&&i.push(Vn(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var bf=/\r\n?/g,qf=/\u0000|\uFFFD/g;function da(e){return(typeof e=="string"?e:""+e).replace(bf,`
`).replace(qf,"")}function dr(e,t,n){if(t=da(t),da(e)!==t&&n)throw Error(y(425))}function Ar(){}var ho=null,go=null;function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,ed=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,td=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(e){return pa.resolve(null).then(e).catch(nd)}:yo;function nd(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Fe="__reactFiber$"+an,Wn="__reactProps$"+an,Xe="__reactContainer$"+an,xo="__reactEvents$"+an,rd="__reactListeners$"+an,ld="__reactHandles$"+an;function wt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ma(e);e!==null;){if(n=e[Fe])return n;e=ma(e)}return t}e=n,n=e.parentNode}return null}function bn(e){return e=e[Fe]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function il(e){return e[Wn]||null}var wo=[],At=-1;function mt(e){return{current:e}}function U(e){0>At||(e.current=wo[At],wo[At]=null,At--)}function D(e,t){At++,wo[At]=e.current,e.current=t}var dt={},oe=mt(dt),de=mt(!1),Nt=dt;function bt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function Br(){U(de),U(oe)}function ha(e,t,n){if(oe.current!==dt)throw Error(y(168));D(oe,t),D(de,n)}function ru(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Vc(e)||"Unknown",l));return W({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,Nt=oe.current,D(oe,e),D(de,de.current),!0}function ga(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ru(e,t,Nt),r.__reactInternalMemoizedMergedChildContext=e,U(de),U(oe),D(oe,e)):U(de),D(de,n)}var Ve=null,al=!1,Fl=!1;function lu(e){Ve===null?Ve=[e]:Ve.push(e)}function od(e){al=!0,lu(e)}function ht(){if(!Fl&&Ve!==null){Fl=!0;var e=0,t=R;try{var n=Ve;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,al=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Ls(Jo,ht),l}finally{R=t,Fl=!1}}return null}var Bt=[],Vt=0,Wr=null,$r=0,ke=[],Se=0,jt=null,We=1,$e="";function yt(e,t){Bt[Vt++]=$r,Bt[Vt++]=Wr,Wr=e,$r=t}function ou(e,t,n){ke[Se++]=We,ke[Se++]=$e,ke[Se++]=jt,jt=e;var r=We;e=$e;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var o=32-Ie(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,We=1<<32-Ie(t)+l|n<<l|r,$e=o+e}else We=1<<o|n<<l|r,$e=e}function ii(e){e.return!==null&&(yt(e,1),ou(e,1,0))}function ai(e){for(;e===Wr;)Wr=Bt[--Vt],Bt[Vt]=null,$r=Bt[--Vt],Bt[Vt]=null;for(;e===jt;)jt=ke[--Se],ke[Se]=null,$e=ke[--Se],ke[Se]=null,We=ke[--Se],ke[Se]=null}var ve=null,ge=null,A=!1,Te=null;function iu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function va(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(A){var t=ge;if(t){var n=t;if(!va(e,t)){if(ko(e))throw Error(y(418));t=it(n.nextSibling);var r=ve;t&&va(e,t)?iu(r,n):(e.flags=e.flags&-4097|2,A=!1,ve=e)}}else{if(ko(e))throw Error(y(418));e.flags=e.flags&-4097|2,A=!1,ve=e}}}function ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function pr(e){if(e!==ve)return!1;if(!A)return ya(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vo(e.type,e.memoizedProps)),t&&(t=ge)){if(ko(e))throw au(),Error(y(418));for(;t;)iu(e,t),t=it(t.nextSibling)}if(ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?it(e.stateNode.nextSibling):null;return!0}function au(){for(var e=ge;e;)e=it(e.nextSibling)}function qt(){ge=ve=null,A=!1}function si(e){Te===null?Te=[e]:Te.push(e)}var id=Ge.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xa(e){var t=e._init;return t(e._payload)}function su(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function l(d,c){return d=ct(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,v){return c===null||c.tag!==6?(c=Hl(p,d.mode,v),c.return=d,c):(c=l(c,p),c.return=d,c)}function s(d,c,p,v){var E=p.type;return E===Rt?g(d,c,p.props.children,v,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&xa(E)===c.type)?(v=l(c,p.props),v.ref=hn(d,c,p),v.return=d,v):(v=Pr(p.type,p.key,p.props,null,d.mode,v),v.ref=hn(d,c,p),v.return=d,v)}function f(d,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ql(p,d.mode,v),c.return=d,c):(c=l(c,p.children||[]),c.return=d,c)}function g(d,c,p,v,E){return c===null||c.tag!==7?(c=Ct(p,d.mode,v,E),c.return=d,c):(c=l(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Hl(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case rr:return p=Pr(c.type,c.key,c.props,null,d.mode,p),p.ref=hn(d,null,c),p.return=d,p;case Ot:return c=Ql(c,d.mode,p),c.return=d,c;case Je:var v=c._init;return h(d,v(c._payload),p)}if(xn(c)||cn(c))return c=Ct(c,d.mode,p,null),c.return=d,c;mr(d,c)}return null}function m(d,c,p,v){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(d,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===E?s(d,c,p,v):null;case Ot:return p.key===E?f(d,c,p,v):null;case Je:return E=p._init,m(d,c,E(p._payload),v)}if(xn(p)||cn(p))return E!==null?null:g(d,c,p,v,null);mr(d,p)}return null}function x(d,c,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,a(c,d,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return d=d.get(v.key===null?p:v.key)||null,s(c,d,v,E);case Ot:return d=d.get(v.key===null?p:v.key)||null,f(c,d,v,E);case Je:var N=v._init;return x(d,c,p,N(v._payload),E)}if(xn(v)||cn(v))return d=d.get(p)||null,g(c,d,v,E,null);mr(c,v)}return null}function w(d,c,p,v){for(var E=null,N=null,j=c,z=c=0,H=null;j!==null&&z<p.length;z++){j.index>z?(H=j,j=null):H=j.sibling;var T=m(d,j,p[z],v);if(T===null){j===null&&(j=H);break}e&&j&&T.alternate===null&&t(d,j),c=o(T,c,z),N===null?E=T:N.sibling=T,N=T,j=H}if(z===p.length)return n(d,j),A&&yt(d,z),E;if(j===null){for(;z<p.length;z++)j=h(d,p[z],v),j!==null&&(c=o(j,c,z),N===null?E=j:N.sibling=j,N=j);return A&&yt(d,z),E}for(j=r(d,j);z<p.length;z++)H=x(j,d,z,p[z],v),H!==null&&(e&&H.alternate!==null&&j.delete(H.key===null?z:H.key),c=o(H,c,z),N===null?E=H:N.sibling=H,N=H);return e&&j.forEach(function(ze){return t(d,ze)}),A&&yt(d,z),E}function k(d,c,p,v){var E=cn(p);if(typeof E!="function")throw Error(y(150));if(p=E.call(p),p==null)throw Error(y(151));for(var N=E=null,j=c,z=c=0,H=null,T=p.next();j!==null&&!T.done;z++,T=p.next()){j.index>z?(H=j,j=null):H=j.sibling;var ze=m(d,j,T.value,v);if(ze===null){j===null&&(j=H);break}e&&j&&ze.alternate===null&&t(d,j),c=o(ze,c,z),N===null?E=ze:N.sibling=ze,N=ze,j=H}if(T.done)return n(d,j),A&&yt(d,z),E;if(j===null){for(;!T.done;z++,T=p.next())T=h(d,T.value,v),T!==null&&(c=o(T,c,z),N===null?E=T:N.sibling=T,N=T);return A&&yt(d,z),E}for(j=r(d,j);!T.done;z++,T=p.next())T=x(j,d,z,T.value,v),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?z:T.key),c=o(T,c,z),N===null?E=T:N.sibling=T,N=T);return e&&j.forEach(function(sn){return t(d,sn)}),A&&yt(d,z),E}function M(d,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Rt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var E=p.key,N=c;N!==null;){if(N.key===E){if(E=p.type,E===Rt){if(N.tag===7){n(d,N.sibling),c=l(N,p.props.children),c.return=d,d=c;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&xa(E)===N.type){n(d,N.sibling),c=l(N,p.props),c.ref=hn(d,N,p),c.return=d,d=c;break e}n(d,N);break}else t(d,N);N=N.sibling}p.type===Rt?(c=Ct(p.props.children,d.mode,v,p.key),c.return=d,d=c):(v=Pr(p.type,p.key,p.props,null,d.mode,v),v.ref=hn(d,c,p),v.return=d,d=v)}return i(d);case Ot:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=l(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Ql(p,d.mode,v),c.return=d,d=c}return i(d);case Je:return N=p._init,M(d,c,N(p._payload),v)}if(xn(p))return w(d,c,p,v);if(cn(p))return k(d,c,p,v);mr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=l(c,p),c.return=d,d=c):(n(d,c),c=Hl(p,d.mode,v),c.return=d,d=c),i(d)):n(d,c)}return M}var en=su(!0),uu=su(!1),Hr=mt(null),Qr=null,Wt=null,ui=null;function ci(){ui=Wt=Qr=null}function fi(e){var t=Hr.current;U(Hr),e._currentValue=t}function Eo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Qr=e,ui=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ui!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Qr===null)throw Error(y(308));Wt=e,Qr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var kt=null;function di(e){kt===null?kt=[e]:kt.push(e)}function cu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,di(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,di(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bo(e,n)}}function wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xr(e,t,n,r){var l=e.updateQueue;be=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,f=s.next;s.next=null,i===null?o=f:i.next=f,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=f:a.next=f,g.lastBaseUpdate=s))}if(o!==null){var h=l.baseState;i=0,g=f=s=null,a=o;do{var m=a.lane,x=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=W({},h,m);break e;case 2:be=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(f=g=x,s=h):g=g.next=x,i|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(s=h),l.baseState=s,l.firstBaseUpdate=f,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);_t|=i,e.lanes=i,e.memoizedState=h}}function ka(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var qn={},Ae=mt(qn),$n=mt(qn),Hn=mt(qn);function St(e){if(e===qn)throw Error(y(174));return e}function mi(e,t){switch(D(Hn,t),D($n,e),D(Ae,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}U(Ae),D(Ae,t)}function tn(){U(Ae),U($n),U(Hn)}function du(e){St(Hn.current);var t=St(Ae.current),n=no(t,e.type);t!==n&&(D($n,e),D(Ae,n))}function hi(e){$n.current===e&&(U(Ae),U($n))}var B=mt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function gi(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Nr=Ge.ReactCurrentDispatcher,Al=Ge.ReactCurrentBatchConfig,zt=0,V=null,K=null,J=null,Kr=!1,zn=!1,Qn=0,ad=0;function ne(){throw Error(y(321))}function vi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function yi(e,t,n,r,l,o){if(zt=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nr.current=e===null||e.memoizedState===null?fd:dd,e=n(r,l),zn){o=0;do{if(zn=!1,Qn=0,25<=o)throw Error(y(301));o+=1,J=K=null,t.updateQueue=null,Nr.current=pd,e=n(r,l)}while(zn)}if(Nr.current=Gr,t=K!==null&&K.next!==null,zt=0,J=K=V=null,Kr=!1,t)throw Error(y(300));return e}function xi(){var e=Qn!==0;return Qn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?V.memoizedState=J=e:J=J.next=e,J}function je(){if(K===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=J===null?V.memoizedState:J.next;if(t!==null)J=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?V.memoizedState=J=e:J=J.next=e}return J}function Xn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=je(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,f=o;do{var g=f.lane;if((zt&g)===g)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(a=s=h,i=r):s=s.next=h,V.lanes|=g,_t|=g}f=f.next}while(f!==null&&f!==o);s===null?i=r:s.next=a,Re(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,V.lanes|=o,_t|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=je(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Re(o,t.memoizedState)||(fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pu(){}function mu(e,t){var n=V,r=je(),l=t(),o=!Re(r.memoizedState,l);if(o&&(r.memoizedState=l,fe=!0),r=r.queue,wi(vu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Yn(9,gu.bind(null,n,r,l,t),void 0,null),b===null)throw Error(y(349));zt&30||hu(n,t,l)}return l}function hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gu(e,t,n,r){t.value=n,t.getSnapshot=r,yu(t)&&xu(e)}function vu(e,t,n){return n(function(){yu(t)&&xu(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function xu(e){var t=Ye(e,1);t!==null&&Oe(t,e,1,-1)}function Sa(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=cd.bind(null,V,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wu(){return je().memoizedState}function jr(e,t,n,r){var l=De();V.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=je();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&vi(r,i.deps)){l.memoizedState=Yn(t,n,o,r);return}}V.flags|=e,l.memoizedState=Yn(1|t,n,o,r)}function Ea(e,t){return jr(8390656,8,e,t)}function wi(e,t){return sl(2048,8,e,t)}function ku(e,t){return sl(4,2,e,t)}function Su(e,t){return sl(4,4,e,t)}function Eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,Eu.bind(null,t,e),n)}function ki(){}function Nu(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ju(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zu(e,t,n){return zt&21?(Re(n,t)||(n=Is(),V.lanes|=n,_t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function sd(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{R=n,Al.transition=r}}function _u(){return je().memoizedState}function ud(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lu(e))Pu(t,n);else if(n=cu(e,t,n,r),n!==null){var l=ae();Oe(n,e,r,l),Tu(n,t,r)}}function cd(e,t,n){var r=ut(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Pu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Re(a,i)){var s=t.interleaved;s===null?(l.next=l,di(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=cu(e,t,l,r),n!==null&&(l=ae(),Oe(n,e,r,l),Tu(n,t,r))}}function Lu(e){var t=e.alternate;return e===V||t!==null&&t===V}function Pu(e,t){zn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bo(e,n)}}var Gr={readContext:Ne,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},fd={readContext:Ne,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:Ea,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jr(4194308,4,Eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return jr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ud.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Sa,useDebugValue:ki,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Sa(!1),t=e[0];return e=sd.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=De();if(A){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),b===null)throw Error(y(349));zt&30||hu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ea(vu.bind(null,r,o,e),[e]),r.flags|=2048,Yn(9,gu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=De(),t=b.identifierPrefix;if(A){var n=$e,r=We;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ad++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dd={readContext:Ne,useCallback:Nu,useContext:Ne,useEffect:wi,useImperativeHandle:Cu,useInsertionEffect:ku,useLayoutEffect:Su,useMemo:ju,useReducer:Bl,useRef:wu,useState:function(){return Bl(Xn)},useDebugValue:ki,useDeferredValue:function(e){var t=je();return zu(t,K.memoizedState,e)},useTransition:function(){var e=Bl(Xn)[0],t=je().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:mu,useId:_u,unstable_isNewReconciler:!1},pd={readContext:Ne,useCallback:Nu,useContext:Ne,useEffect:wi,useImperativeHandle:Cu,useInsertionEffect:ku,useLayoutEffect:Su,useMemo:ju,useReducer:Vl,useRef:wu,useState:function(){return Vl(Xn)},useDebugValue:ki,useDeferredValue:function(e){var t=je();return K===null?t.memoizedState=e:zu(t,K.memoizedState,e)},useTransition:function(){var e=Vl(Xn)[0],t=je().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:mu,useId:_u,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Co(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ut(e),o=He(r,l);o.payload=t,n!=null&&(o.callback=n),t=at(e,o,l),t!==null&&(Oe(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ut(e),o=He(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=at(e,o,l),t!==null&&(Oe(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ut(e),l=He(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Oe(t,e,r,n),Cr(t,e,r))}};function Ca(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!An(n,r)||!An(l,o):!0}function Iu(e,t,n){var r=!1,l=dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(l=pe(t)?Nt:oe.current,r=t.contextTypes,o=(r=r!=null)?bt(e,l):dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Na(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function No(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},pi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ne(o):(o=pe(t)?Nt:oe.current,l.context=bt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Co(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),Xr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Bc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var md=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=He(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Do=r),jo(e,t)},n}function Ru(e,t,n){n=He(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){jo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){jo(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ja(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new md;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=_d.bind(null,e,t,n),t.then(e,e))}function za(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _a(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=He(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var hd=Ge.ReactCurrentOwner,fe=!1;function ie(e,t,n,r){t.child=e===null?uu(t,null,n,r):en(t,e.child,n,r)}function La(e,t,n,r,l){n=n.render;var o=t.ref;return Gt(t,l),r=yi(e,t,n,r,o,l),n=xi(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(A&&n&&ii(t),t.flags|=1,ie(e,t,r,l),t.child)}function Pa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Li(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mu(e,t,o,r,l)):(e=Pr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:An,n(i,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=ct(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(An(o,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return zo(e,t,n,r,l)}function Du(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Ht,he),he|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Ht,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Ht,he),he|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Ht,he),he|=r;return ie(e,t,l,n),t.child}function Fu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zo(e,t,n,r,l){var o=pe(n)?Nt:oe.current;return o=bt(t,o),Gt(t,l),n=yi(e,t,n,r,o,l),r=xi(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(A&&r&&ii(t),t.flags|=1,ie(e,t,n,l),t.child)}function Ta(e,t,n,r,l){if(pe(n)){var o=!0;Vr(t)}else o=!1;if(Gt(t,l),t.stateNode===null)zr(e,t),Iu(t,n,r),No(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ne(f):(f=pe(n)?Nt:oe.current,f=bt(t,f));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==f)&&Na(t,i,r,f),be=!1;var m=t.memoizedState;i.state=m,Xr(t,r,i,l),s=t.memoizedState,a!==r||m!==s||de.current||be?(typeof g=="function"&&(Co(t,n,g,r),s=t.memoizedState),(a=be||Ca(t,n,a,r,m,s,f))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=f,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,fu(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:Le(t.type,a),i.props=f,h=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ne(s):(s=pe(n)?Nt:oe.current,s=bt(t,s));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Na(t,i,r,s),be=!1,m=t.memoizedState,i.state=m,Xr(t,r,i,l);var w=t.memoizedState;a!==h||m!==w||de.current||be?(typeof x=="function"&&(Co(t,n,x,r),w=t.memoizedState),(f=be||Ca(t,n,f,r,m,w,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=f):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return _o(e,t,n,r,o,l)}function _o(e,t,n,r,l,o){Fu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ga(t,n,!1),Ke(e,t,o);r=t.stateNode,hd.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=en(t,e.child,null,o),t.child=en(t,null,a,o)):ie(e,t,a,o),t.memoizedState=r.state,l&&ga(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?ha(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ha(e,t.context,!1),mi(e,t.containerInfo)}function Ia(e,t,n,r,l){return qt(),si(l),t.flags|=256,ie(e,t,n,r),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function Po(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,n){var r=t.pendingProps,l=B.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(B,l&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=dl(i,r,0,null),e=Ct(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Po(n),t.memoizedState=Lo,e):Si(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return gd(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ct(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=ct(a,o):(o=Ct(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Po(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Lo,r}return o=e.child,e=o.sibling,r=ct(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Si(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&si(r),en(t,e.child,null,n),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gd(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(y(422))),hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=dl({mode:"visible",children:r.children},l,0,null),o=Ct(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&en(t,e.child,null,i),t.child.memoizedState=Po(i),t.memoizedState=Lo,o);if(!(t.mode&1))return hr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=Wl(o,r,void 0),hr(e,t,i,r)}if(a=(i&e.childLanes)!==0,fe||a){if(r=b,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ye(e,l),Oe(r,e,l,-1))}return _i(),r=Wl(Error(y(421))),hr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ld.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ge=it(l.nextSibling),ve=t,A=!0,Te=null,e!==null&&(ke[Se++]=We,ke[Se++]=$e,ke[Se++]=jt,We=e.id,$e=e.overflow,jt=t),t=Si(t,r.children),t.flags|=4096,t)}function Oa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eo(e.return,t,n)}function $l(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Bu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ie(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oa(e,n,t);else if(e.tag===19)Oa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),$l(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}$l(t,!0,n,null,o);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vd(e,t,n){switch(t.tag){case 3:Uu(t),qt();break;case 5:du(t);break;case 1:pe(t.type)&&Vr(t);break;case 4:mi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Au(e,t,n):(D(B,B.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);D(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n)}return Ke(e,t,n)}var Vu,To,Wu,$u;Vu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};To=function(){};Wu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(Ae.current);var o=null;switch(n){case"input":l=bl(e,l),r=bl(e,r),o=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":l=to(e,l),r=to(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}ro(n,r);var i;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var a=l[f];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(In.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var s=r[f];if(a=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&s!==a&&(s!=null||a!=null))if(f==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(f,n)),n=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(In.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&F("scroll",e),o||a===s||(o=[])):(o=o||[]).push(f,s))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};$u=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yd(e,t,n){var r=t.pendingProps;switch(ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&Br(),re(t),null;case 3:return r=t.stateNode,tn(),U(de),U(oe),gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Ao(Te),Te=null))),To(e,t),re(t),null;case 5:hi(t);var l=St(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)Wu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return re(t),null}if(e=St(Ae.current),pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Fe]=t,r[Wn]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)F(kn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Wi(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":Hi(r,o),F("invalid",r)}ro(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",""+a]):In.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&F("scroll",r)}switch(n){case"input":lr(r),$i(r,o,!0);break;case"textarea":lr(r),Qi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ar)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Fe]=t,e[Wn]=r,Vu(e,t,!1,!1),t.stateNode=e;e:{switch(i=lo(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)F(kn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Wi(e,r),l=bl(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),F("invalid",e);break;case"textarea":Hi(e,r),l=to(e,r),F("invalid",e);break;default:l=r}ro(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?ws(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ys(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&On(e,s):typeof s=="number"&&On(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(In.hasOwnProperty(o)?s!=null&&o==="onScroll"&&F("scroll",e):s!=null&&Xo(e,o,s,i))}switch(n){case"input":lr(e),$i(e,r,!1);break;case"textarea":lr(e),Qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Qt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ar)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)$u(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=St(Hn.current),St(Ae.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(o=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return re(t),null;case 13:if(U(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ge!==null&&t.mode&1&&!(t.flags&128))au(),qt(),t.flags|=98560,o=!1;else if(o=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Fe]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),o=!1}else Te!==null&&(Ao(Te),Te=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?G===0&&(G=3):_i())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tn(),To(e,t),e===null&&Bn(t.stateNode.containerInfo),re(t),null;case 10:return fi(t.type._context),re(t),null;case 17:return pe(t.type)&&Br(),re(t),null;case 19:if(U(B),o=t.memoizedState,o===null)return re(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)gn(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Yr(e),i!==null){for(t.flags|=128,gn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>rn&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!A)return re(t),null}else 2*X()-o.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=B.current,D(B,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return zi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function xd(e,t){switch(ai(t),t.tag){case 1:return pe(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),U(de),U(oe),gi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hi(t),null;case 13:if(U(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(B),null;case 4:return tn(),null;case 10:return fi(t.type._context),null;case 22:case 23:return zi(),null;case 24:return null;default:return null}}var gr=!1,le=!1,wd=typeof WeakSet=="function"?WeakSet:Set,S=null;function $t(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function Io(e,t,n){try{n()}catch(r){$(e,t,r)}}var Ra=!1;function kd(e,t){if(ho=Dr,e=Ks(),oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,f=0,g=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(a=i+l),h!==o||r!==0&&h.nodeType!==3||(s=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++f===l&&(a=i),m===o&&++g===r&&(s=i),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Dr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,M=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Le(t.type,k),M);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){$(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Ra,Ra=!1,w}function _n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Io(t,n,o)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Wn],delete t[xo],delete t[rd],delete t[ld])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function Ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}function Mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}var q=null,Pe=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Xu(e,t,n),n=n.sibling}function Xu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:le||$t(n,t);case 6:var r=q,l=Pe;q=null,Ze(e,t,n),q=r,Pe=l,q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),Fn(e)):Dl(q,n.stateNode));break;case 4:r=q,l=Pe,q=n.stateNode.containerInfo,Pe=!0,Ze(e,t,n),q=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Io(n,t,i),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!le&&($t(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ze(e,t,n),le=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wd),t.forEach(function(r){var l=Pd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:q=a.stateNode,Pe=!1;break e;case 3:q=a.stateNode.containerInfo,Pe=!0;break e;case 4:q=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(q===null)throw Error(y(160));Xu(o,i,l),q=null,Pe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(f){$(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}function Yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Me(e),r&4){try{_n(3,e,e.return),cl(3,e)}catch(k){$(e,e.return,k)}try{_n(5,e,e.return)}catch(k){$(e,e.return,k)}}break;case 1:_e(t,e),Me(e),r&512&&n!==null&&$t(n,n.return);break;case 5:if(_e(t,e),Me(e),r&512&&n!==null&&$t(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(k){$(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hs(l,o),lo(a,i);var f=lo(a,o);for(i=0;i<s.length;i+=2){var g=s[i],h=s[i+1];g==="style"?ws(l,h):g==="dangerouslySetInnerHTML"?ys(l,h):g==="children"?On(l,h):Xo(l,g,h,f)}switch(a){case"input":ql(l,o);break;case"textarea":gs(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Qt(l,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Qt(l,!!o.multiple,o.defaultValue,!0):Qt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Wn]=o}catch(k){$(e,e.return,k)}}break;case 6:if(_e(t,e),Me(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){$(e,e.return,k)}}break;case 3:if(_e(t,e),Me(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(k){$(e,e.return,k)}break;case 4:_e(t,e),Me(e);break;case 13:_e(t,e),Me(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ni=X())),r&4&&Da(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(le=(f=le)||g,_e(t,e),le=f):_e(t,e),Me(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(h=S=g;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:_n(4,m,m.return);break;case 1:$t(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){$(r,n,k)}}break;case 5:$t(m,m.return);break;case 22:if(m.memoizedState!==null){Ua(h);continue}}x!==null?(x.return=m,S=x):Ua(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,s=h.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=xs("display",i))}catch(k){$(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(k){$(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_e(t,e),Me(e),r&4&&Da(e);break;case 21:break;default:_e(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var o=Ma(e);Mo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ma(e);Ro(e,a,i);break;default:throw Error(y(161))}}catch(s){$(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sd(e,t,n){S=e,Ku(e)}function Ku(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||gr;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||le;a=gr;var f=le;if(gr=i,(le=s)&&!f)for(S=l;S!==null;)i=S,s=i.child,i.tag===22&&i.memoizedState!==null?Aa(l):s!==null?(s.return=i,S=s):Aa(l);for(;o!==null;)S=o,Ku(o),o=o.sibling;S=l,gr=a,le=f}Fa(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Fa(e)}}function Fa(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ka(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ka(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Fn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}le||t.flags&512&&Oo(t)}catch(m){$(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ua(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Aa(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(s){$(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){$(t,l,s)}}var o=t.return;try{Oo(t)}catch(s){$(t,o,s)}break;case 5:var i=t.return;try{Oo(t)}catch(s){$(t,i,s)}}}catch(s){$(t,t.return,s)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var Ed=Math.ceil,Zr=Ge.ReactCurrentDispatcher,Ei=Ge.ReactCurrentOwner,Ce=Ge.ReactCurrentBatchConfig,I=0,b=null,Y=null,ee=0,he=0,Ht=mt(0),G=0,Kn=null,_t=0,fl=0,Ci=0,Ln=null,ce=null,Ni=0,rn=1/0,Be=null,Jr=!1,Do=null,st=null,vr=!1,nt=null,br=0,Pn=0,Fo=null,_r=-1,Lr=0;function ae(){return I&6?X():_r!==-1?_r:_r=X()}function ut(e){return e.mode&1?I&2&&ee!==0?ee&-ee:id.transition!==null?(Lr===0&&(Lr=Is()),Lr):(e=R,e!==0||(e=window.event,e=e===void 0?16:As(e.type)),e):1}function Oe(e,t,n,r){if(50<Pn)throw Pn=0,Fo=null,Error(y(185));Zn(e,n,r),(!(I&2)||e!==b)&&(e===b&&(!(I&2)&&(fl|=n),G===4&&et(e,ee)),me(e,r),n===1&&I===0&&!(t.mode&1)&&(rn=X()+500,al&&ht()))}function me(e,t){var n=e.callbackNode;of(e,t);var r=Mr(e,e===b?ee:0);if(r===0)n!==null&&Ki(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ki(n),t===1)e.tag===0?od(Ba.bind(null,e)):lu(Ba.bind(null,e)),td(function(){!(I&6)&&ht()}),n=null;else{switch(Os(r)){case 1:n=Jo;break;case 4:n=Ps;break;case 16:n=Rr;break;case 536870912:n=Ts;break;default:n=Rr}n=nc(n,Gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gu(e,t){if(_r=-1,Lr=0,I&6)throw Error(y(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Mr(e,e===b?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var l=I;I|=2;var o=Ju();(b!==e||ee!==t)&&(Be=null,rn=X()+500,Et(e,t));do try{jd();break}catch(a){Zu(e,a)}while(!0);ci(),Zr.current=o,I=l,Y!==null?t=0:(b=null,ee=0,t=G)}if(t!==0){if(t===2&&(l=uo(e),l!==0&&(r=l,t=Uo(e,l))),t===1)throw n=Kn,Et(e,0),et(e,r),me(e,X()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!Cd(l)&&(t=qr(e,r),t===2&&(o=uo(e),o!==0&&(r=o,t=Uo(e,o))),t===1))throw n=Kn,Et(e,0),et(e,r),me(e,X()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:xt(e,ce,Be);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Ni+500-X(),10<t)){if(Mr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yo(xt.bind(null,e,ce,Be),t);break}xt(e,ce,Be);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Ie(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ed(r/1960))-r,10<r){e.timeoutHandle=yo(xt.bind(null,e,ce,Be),r);break}xt(e,ce,Be);break;case 5:xt(e,ce,Be);break;default:throw Error(y(329))}}}return me(e,X()),e.callbackNode===n?Gu.bind(null,e):null}function Uo(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=qr(e,t),e!==2&&(t=ce,ce=n,t!==null&&Ao(t)),e}function Ao(e){ce===null?ce=e:ce.push.apply(ce,e)}function Cd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Re(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ci,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Ba(e){if(I&6)throw Error(y(327));Zt();var t=Mr(e,0);if(!(t&1))return me(e,X()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=uo(e);r!==0&&(t=r,n=Uo(e,r))}if(n===1)throw n=Kn,Et(e,0),et(e,t),me(e,X()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,ce,Be),me(e,X()),null}function ji(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(rn=X()+500,al&&ht())}}function Lt(e){nt!==null&&nt.tag===0&&!(I&6)&&Zt();var t=I;I|=1;var n=Ce.transition,r=R;try{if(Ce.transition=null,R=1,e)return e()}finally{R=r,Ce.transition=n,I=t,!(I&6)&&ht()}}function zi(){he=Ht.current,U(Ht)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ed(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:tn(),U(de),U(oe),gi();break;case 5:hi(r);break;case 4:tn();break;case 13:U(B);break;case 19:U(B);break;case 10:fi(r.type._context);break;case 22:case 23:zi()}n=n.return}if(b=e,Y=e=ct(e.current,null),ee=he=t,G=0,Kn=null,Ci=fl=_t=0,ce=Ln=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}kt=null}return e}function Zu(e,t){do{var n=Y;try{if(ci(),Nr.current=Gr,Kr){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Kr=!1}if(zt=0,J=K=V=null,zn=!1,Qn=0,Ei.current=null,n===null||n.return===null){G=1,Kn=t,Y=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=ee,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=za(i);if(x!==null){x.flags&=-257,_a(x,i,a,o,t),x.mode&1&&ja(o,f,t),t=x,s=f;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){ja(o,f,t),_i();break e}s=Error(y(426))}}else if(A&&a.mode&1){var M=za(i);if(M!==null){!(M.flags&65536)&&(M.flags|=256),_a(M,i,a,o,t),si(nn(s,a));break e}}o=s=nn(s,a),G!==4&&(G=2),Ln===null?Ln=[o]:Ln.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Ou(o,s,t);wa(o,d);break e;case 1:a=s;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(st===null||!st.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Ru(o,a,t);wa(o,v);break e}}o=o.return}while(o!==null)}qu(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Ju(){var e=Zr.current;return Zr.current=Gr,e===null?Gr:e}function _i(){(G===0||G===3||G===2)&&(G=4),b===null||!(_t&268435455)&&!(fl&268435455)||et(b,ee)}function qr(e,t){var n=I;I|=2;var r=Ju();(b!==e||ee!==t)&&(Be=null,Et(e,t));do try{Nd();break}catch(l){Zu(e,l)}while(!0);if(ci(),I=n,Zr.current=r,Y!==null)throw Error(y(261));return b=null,ee=0,G}function Nd(){for(;Y!==null;)bu(Y)}function jd(){for(;Y!==null&&!Zc();)bu(Y)}function bu(e){var t=tc(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?qu(e):Y=t,Ei.current=null}function qu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xd(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Y=null;return}}else if(n=yd(n,t,he),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);G===0&&(G=5)}function xt(e,t,n){var r=R,l=Ce.transition;try{Ce.transition=null,R=1,zd(e,t,n,r)}finally{Ce.transition=l,R=r}return null}function zd(e,t,n,r){do Zt();while(nt!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(af(e,o),e===b&&(Y=b=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,nc(Rr,function(){return Zt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var i=R;R=1;var a=I;I|=4,Ei.current=null,kd(e,n),Yu(n,e),Yf(go),Dr=!!ho,go=ho=null,e.current=n,Sd(n),Jc(),I=a,R=i,Ce.transition=o}else e.current=n;if(vr&&(vr=!1,nt=e,br=l),o=e.pendingLanes,o===0&&(st=null),ef(n.stateNode),me(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Do,Do=null,e;return br&1&&e.tag!==0&&Zt(),o=e.pendingLanes,o&1?e===Fo?Pn++:(Pn=0,Fo=e):Pn=0,ht(),null}function Zt(){if(nt!==null){var e=Os(br),t=Ce.transition,n=R;try{if(Ce.transition=null,R=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,br=0,I&6)throw Error(y(331));var l=I;for(I|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var f=a[s];for(S=f;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:_n(8,g,o)}var h=g.child;if(h!==null)h.return=g,S=h;else for(;S!==null;){g=S;var m=g.sibling,x=g.return;if(Hu(g),g===f){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var M=k.sibling;k.sibling=null,k=M}while(k!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_n(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,S=d;break e}S=o.return}}var c=e.current;for(S=c;S!==null;){i=S;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,S=p;else e:for(i=c;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(E){$(a,a.return,E)}if(a===i){S=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,S=v;break e}S=a.return}}if(I=l,ht(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{R=n,Ce.transition=t}}return!1}function Va(e,t,n){t=nn(n,t),t=Ou(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(Zn(e,1,t),me(e,t))}function $(e,t,n){if(e.tag===3)Va(e,e,n);else for(;t!==null;){if(t.tag===3){Va(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=nn(n,e),e=Ru(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(Zn(t,1,e),me(t,e));break}}t=t.return}}function _d(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(ee&n)===n&&(G===4||G===3&&(ee&130023424)===ee&&500>X()-Ni?Et(e,0):Ci|=n),me(e,t)}function ec(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ae();e=Ye(e,t),e!==null&&(Zn(e,t,n),me(e,n))}function Ld(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ec(e,n)}function Pd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),ec(e,n)}var tc;tc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,vd(e,t,n);fe=!!(e.flags&131072)}else fe=!1,A&&t.flags&1048576&&ou(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var l=bt(t,oe.current);Gt(t,n),l=yi(null,t,r,e,l,n);var o=xi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(o=!0,Vr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,pi(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,No(t,r,e,n),t=_o(null,t,r,!0,o,n)):(t.tag=0,A&&o&&ii(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Id(r),e=Le(r,e),l){case 0:t=zo(null,t,r,e,n);break e;case 1:t=Ta(null,t,r,e,n);break e;case 11:t=La(null,t,r,e,n);break e;case 14:t=Pa(null,t,r,Le(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),zo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ta(e,t,r,l,n);case 3:e:{if(Uu(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,fu(e,t),Xr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=nn(Error(y(423)),t),t=Ia(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(y(424)),t),t=Ia(e,t,r,n,l);break e}else for(ge=it(t.stateNode.containerInfo.firstChild),ve=t,A=!0,Te=null,n=uu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),r===l){t=Ke(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return du(t),e===null&&So(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,vo(r,l)?i=null:o!==null&&vo(r,o)&&(t.flags|=32),Fu(e,t),ie(e,t,i,n),t.child;case 6:return e===null&&So(t),null;case 13:return Au(e,t,n);case 4:return mi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),La(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,D(Hr,r._currentValue),r._currentValue=i,o!==null)if(Re(o.value,i)){if(o.children===l.children&&!de.current){t=Ke(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=He(-1,n&-n),s.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Eo(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Eo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Gt(t,n),l=Ne(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Pa(e,t,r,l,n);case 15:return Mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),zr(e,t),t.tag=1,pe(r)?(e=!0,Vr(t)):e=!1,Gt(t,n),Iu(t,r,l),No(t,r,l,n),_o(null,t,r,!0,e,n);case 19:return Bu(e,t,n);case 22:return Du(e,t,n)}throw Error(y(156,t.tag))};function nc(e,t){return Ls(e,t)}function Td(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Td(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Id(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ko)return 11;if(e===Go)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Li(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Rt:return Ct(n.children,l,o,t);case Yo:i=8,l|=8;break;case Kl:return e=Ee(12,n,t,l|2),e.elementType=Kl,e.lanes=o,e;case Gl:return e=Ee(13,n,t,l),e.elementType=Gl,e.lanes=o,e;case Zl:return e=Ee(19,n,t,l),e.elementType=Zl,e.lanes=o,e;case ds:return dl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cs:i=10;break e;case fs:i=9;break e;case Ko:i=11;break e;case Go:i=14;break e;case Je:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ee(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ct(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=ds,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Od(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Pi(e,t,n,r,l,o,i,a,s){return e=new Od(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pi(o),e}function Rd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rc(e){if(!e)return dt;e=e._reactInternals;e:{if(Tt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(pe(n))return ru(e,n,t)}return t}function lc(e,t,n,r,l,o,i,a,s){return e=Pi(n,r,!0,e,l,o,i,a,s),e.context=rc(null),n=e.current,r=ae(),l=ut(n),o=He(r,l),o.callback=t??null,at(n,o,l),e.current.lanes=l,Zn(e,l,r),me(e,r),e}function pl(e,t,n,r){var l=t.current,o=ae(),i=ut(l);return n=rc(n),t.context===null?t.context=n:t.pendingContext=n,t=He(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,i),e!==null&&(Oe(e,l,i,o),Cr(e,l,i)),i}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ti(e,t){Wa(e,t),(e=e.alternate)&&Wa(e,t)}function Md(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ii(e){this._internalRoot=e}ml.prototype.render=Ii.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));pl(e,t,null,null)};ml.prototype.unmount=Ii.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){pl(null,e,null,null)}),t[Xe]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ds();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&Us(e)}};function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $a(){}function Dd(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=el(i);o.call(f)}}var i=lc(t,r,e,0,null,!1,!1,"",$a);return e._reactRootContainer=i,e[Xe]=i.current,Bn(e.nodeType===8?e.parentNode:e),Lt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var f=el(s);a.call(f)}}var s=Pi(e,0,!1,null,null,!1,!1,"",$a);return e._reactRootContainer=s,e[Xe]=s.current,Bn(e.nodeType===8?e.parentNode:e),Lt(function(){pl(t,s,n,r)}),s}function gl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=el(i);a.call(s)}}pl(t,i,e,l)}else i=Dd(n,t,e,l,r);return el(i)}Rs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(bo(t,n|1),me(t,X()),!(I&6)&&(rn=X()+500,ht()))}break;case 13:Lt(function(){var r=Ye(e,1);if(r!==null){var l=ae();Oe(r,e,1,l)}}),Ti(e,1)}};qo=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ae();Oe(t,e,134217728,n)}Ti(e,134217728)}};Ms=function(e){if(e.tag===13){var t=ut(e),n=Ye(e,t);if(n!==null){var r=ae();Oe(n,e,t,r)}Ti(e,t)}};Ds=function(){return R};Fs=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};io=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(y(90));ms(r),ql(r,l)}}}break;case"textarea":gs(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};Es=ji;Cs=Lt;var Fd={usingClientEntryPoint:!1,Events:[bn,Ut,il,ks,Ss,ji]},vn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ud={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zs(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Md,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{nl=yr.inject(Ud),Ue=yr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fd;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oi(t))throw Error(y(200));return Rd(e,t,null,n)};xe.createRoot=function(e,t){if(!Oi(e))throw Error(y(299));var n=!1,r="",l=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Pi(e,1,!1,null,null,n,!1,r,l),e[Xe]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Ii(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=zs(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Lt(e)};xe.hydrate=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Oi(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=oc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=lc(t,null,e,1,n??null,l,!1,o,i),e[Xe]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};xe.render=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!hl(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};xe.unstable_batchedUpdates=ji;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),is.exports=xe;var Ad=is.exports,Ha=Ad;Xl.createRoot=Ha.createRoot,Xl.hydrateRoot=Ha.hydrateRoot;const Ri="Despertar Materno",Bd="Guia para uma criação consciente de 0 a 6 anos",Tn="Cristina Martinez & Vivian Cirineu",Qa="05 de maio de 2025 • 18h às 21h",Xa="Livraria da Vila Lorena — São Paulo, SP",Vd="https://i.ibb.co/HTdm50dZ/capa-cris-martinez.png",ac="https://tbksdqcauadfknqbjqch.supabase.co",Ya="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRia3NkcWNhdWFkZmtucWJqcWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTM4MTEsImV4cCI6MjA5MTA2OTgxMX0.hu6HKwjCAbSMs4vd1wO3uvG76303f54Q7-cHzJlTWus",Ka="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRia3NkcWNhdWFkZmtucWJqcWNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTQ5MzgxMSwiZXhwIjoyMDkxMDY5ODExfQ.rNWJKYpI_Vcx5I2WcQ9dFe7eY2A-bMdlF2u6t2vJpP0",Wd="@despertar",$d="#Meulivro2026@";async function Hd(e){return(await fetch(`${ac}/rest/v1/registrations`,{method:"POST",headers:{"Content-Type":"application/json",apikey:Ya,Authorization:`Bearer ${Ya}`,Prefer:"return=minimal"},body:JSON.stringify(e)})).ok}async function sc(){const e=await fetch(`${ac}/rest/v1/registrations?select=*&order=created_at.desc`,{headers:{apikey:Ka,Authorization:`Bearer ${Ka}`}});return e.ok?e.json():[]}const Qd=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:  #ffffff;
    --cream:  #ffffff;
    --orange: #e65019;
    --teal:   #195f71;
    --teal-dark: #103d49;
    --text:   #1a1a1a;
    --muted:  #6b6b6b;
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body:    'Outfit', sans-serif;
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--cream);
    color: var(--text);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Noise grain overlay ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.4;
  }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(-3deg); }
    50%       { transform: translateY(-18px) rotate(-1.5deg); }
  }
  @keyframes floatShadow {
    0%, 100% { transform: scaleX(1) translateY(0); opacity: 0.3; }
    50%       { transform: scaleX(0.85) translateY(10px); opacity: 0.15; }
  }
  @keyframes lineExpand {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(230,80,25,0.4); }
    50%       { box-shadow: 0 0 0 12px rgba(230,80,25,0); }
  }
  @keyframes countUp {
    from { opacity: 0; transform: scale(0.6); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .animate-fade-up   { animation: fadeUp 0.9s var(--ease-out-expo) both; }
  .animate-fade-in   { animation: fadeIn 1s ease both; }
  .animate-slide-right { animation: slideInRight 0.9s var(--ease-out-expo) both; }
  .d-100 { animation-delay: 0.1s; }
  .d-200 { animation-delay: 0.2s; }
  .d-300 { animation-delay: 0.3s; }
  .d-400 { animation-delay: 0.4s; }
  .d-500 { animation-delay: 0.5s; }
  .d-600 { animation-delay: 0.6s; }
  .d-700 { animation-delay: 0.7s; }
  .d-800 { animation-delay: 0.8s; }

  /* ── Reveal on scroll ── */
  .reveal { opacity: 0; transform: translateY(50px); transition: opacity 0.9s var(--ease-out-expo), transform 0.9s var(--ease-out-expo); }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-left { opacity: 0; transform: translateX(-50px); transition: opacity 0.9s var(--ease-out-expo), transform 0.9s var(--ease-out-expo); }
  .reveal-left.visible { opacity: 1; transform: translateX(0); }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--cream); }
  ::-webkit-scrollbar-thumb { background: var(--orange); border-radius: 2px; }

  /* ── Nav ── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 60px;
    transition: all 0.4s ease;
  }
  .nav.scrolled {
    background: rgba(255,249,244,0.92);
    backdrop-filter: blur(20px);
    padding: 14px 60px;
    border-bottom: 1px solid rgba(230,80,25,0.12);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: var(--teal);
    cursor: pointer;
    text-decoration: none;
  }
  .nav-links { display: flex; gap: 36px; align-items: center; }
  .nav-link {
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text);
    cursor: pointer;
    text-decoration: none;
    position: relative;
    padding-bottom: 2px;
  }
  .nav-link::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 100%; height: 1px; background: var(--orange);
    transform: scaleX(0); transform-origin: right;
    transition: transform 0.3s ease;
  }
  .nav-link:hover::after { transform: scaleX(1); transform-origin: left; }
  .nav-cta {
    padding: 10px 24px;
    background: var(--orange);
    color: white;
    border-radius: 2px;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
  }
  .nav-cta:hover { background: var(--teal); transform: translateY(-1px); }

  @media (max-width: 768px) {
    .nav { padding: 16px 24px; }
    .nav.scrolled { padding: 12px 24px; }
    .nav-links { gap: 16px; }
    .nav-cta { display: none; }
  }

  /* ── Hero ── */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 120px 60px 80px;
    position: relative;
    overflow: hidden;
    background: var(--cream);
  }
  .hero::after {
    content: '';
    position: absolute;
    top: -20%; right: -10%;
    width: 60vw; height: 60vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(25,95,113,0.07) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-text { padding-right: 40px; }
  .hero-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 28px;
  }
  .hero-label::before {
    content: ''; display: block;
    width: 32px; height: 1px; background: var(--orange);
  }
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 7vw, 7rem);
    font-weight: 600;
    line-height: 0.95;
    letter-spacing: -0.02em;
    color: var(--teal-dark);
    margin-bottom: 24px;
  }
  .hero-title em {
    font-style: italic;
    color: var(--orange);
  }
  .hero-subtitle {
    font-family: var(--font-display);
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    font-style: italic;
    color: var(--muted);
    margin-bottom: 40px;
    line-height: 1.6;
  }
  .hero-meta {
    display: flex; flex-direction: column; gap: 10px;
    margin-bottom: 48px;
  }
  .hero-meta-item {
    display: flex; align-items: center; gap: 10px;
    font-size: 0.85rem; color: var(--muted); font-weight: 400;
  }
  .hero-meta-icon {
    width: 16px; height: 16px;
    color: var(--orange); flex-shrink: 0;
  }
  .hero-meta-item strong { color: var(--text); font-weight: 500; }
  .hero-author {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: var(--teal);
  }
  .hero-author span { color: var(--muted); font-size: 0.85rem; font-family: var(--font-body); }

  .hero-book {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .book-wrapper {
    position: relative;
    animation: float 5s ease-in-out infinite;
    transform-style: preserve-3d;
  }
  .book-cover {
    width: clamp(200px, 28vw, 340px);
    aspect-ratio: 2/3;
    border-radius: 4px 12px 12px 4px;
    overflow: hidden;
    position: relative;
    transform: perspective(1000px) rotateY(-8deg);
    transition: transform 0.4s ease;
  }
  .book-cover:hover {
    transform: perspective(1000px) rotateY(0deg);
  }
  .book-cover-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
  }
  .book-cover-placeholder {
    width: 100%; height: 100%;
    background: linear-gradient(145deg, var(--teal) 0%, var(--teal-dark) 50%, #0c2830 100%);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 32px 24px; text-align: center;
    position: relative; overflow: hidden;
  }
  .book-cover-placeholder::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.015) 2px,
      rgba(255,255,255,0.015) 4px
    );
  }
  .book-cover-placeholder::after {
    content: '';
    position: absolute;
    top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(circle at 30% 30%, rgba(230,80,25,0.2), transparent 60%);
  }
  .book-cover-title {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2vw, 1.6rem);
    font-weight: 600;
    color: white;
    letter-spacing: 0.02em;
    line-height: 1.2;
    position: relative; z-index: 1;
    margin-bottom: 12px;
  }
  .book-cover-divider {
    width: 40px; height: 1px;
    background: var(--orange);
    margin: 12px auto;
    position: relative; z-index: 1;
  }
  .book-cover-author-text {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    position: relative; z-index: 1;
  }
  .book-cover-label {
    font-family: var(--font-body);
    font-size: 0.62rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,249,244,0.35);
    position: absolute; bottom: 16px;
    z-index: 1;
  }
  .book-spine {
    position: absolute;
    left: -14px; top: 0; bottom: 0;
    width: 14px;
    background: linear-gradient(to right, #0c2830, var(--teal-dark));
    border-radius: 4px 0 0 4px;
    transform: perspective(1000px) rotateY(-75deg);
    transform-origin: right center;
  }
  .book-shadow {
    width: 80%;
    height: 20px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.25), transparent 70%);
    margin-top: 20px;
    animation: floatShadow 5s ease-in-out infinite;
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 100px 24px 60px;
      text-align: center;
    }
    .hero-label { justify-content: center; }
    .hero-label::before { display: none; }
    .hero-text { padding-right: 0; order: 2; }
    .hero-book { order: 1; margin-bottom: 48px; }
    .hero-meta { align-items: center; }
    .hero-meta-item { justify-content: center; }
  }

  /* ── Marquee strip ── */
  .marquee-strip {
    background: var(--teal);
    padding: 14px 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .marquee-inner {
    display: inline-block;
    animation: marqueeScroll 25s linear infinite;
  }
  @keyframes marqueeScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .marquee-item {
    display: inline-flex; align-items: center; gap: 20px;
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,249,244,0.8);
    padding: 0 40px;
  }
  .marquee-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--orange);
    display: inline-block;
  }

  /* ── About section ── */
  .section-about {
    background: var(--white);
    padding: 120px 60px;
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    gap: 80px;
    align-items: center;
  }
  .divider-line {
    background: linear-gradient(to bottom, transparent, var(--orange), transparent);
    height: 200px;
    align-self: center;
  }
  .about-quote {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 300;
    font-style: italic;
    line-height: 1.35;
    color: var(--teal-dark);
  }
  .about-quote strong {
    font-style: normal;
    font-weight: 600;
    color: var(--orange);
  }
  .about-text {
    font-size: 0.95rem;
    line-height: 1.85;
    color: var(--muted);
    font-weight: 300;
  }
  .about-text p + p { margin-top: 16px; }
  .about-tag {
    display: inline-block;
    padding: 5px 14px;
    border: 1px solid var(--teal);
    color: var(--teal);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    .section-about {
      grid-template-columns: 1fr;
      gap: 48px;
      padding: 80px 24px;
    }
    .divider-line { display: none; }
  }

  /* ── Form section ── */
  .section-form {
    background: var(--cream);
    padding: 120px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: start;
    position: relative;
    overflow: hidden;
  }
  .section-form::before {
    content: '';
    position: absolute; bottom: -100px; left: -100px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(230,80,25,0.06), transparent 70%);
    pointer-events: none;
  }
  .form-eyebrow {
    display: flex; align-items: center; gap: 12px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 20px;
  }
  .form-eyebrow::after {
    content: ''; flex: 1;
    height: 1px; background: rgba(230,80,25,0.3);
    max-width: 60px;
  }
  .form-title {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 600;
    line-height: 1.1;
    color: var(--teal-dark);
    margin-bottom: 20px;
  }
  .form-desc {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--muted);
    font-weight: 300;
    margin-bottom: 40px;
  }
  .form-stats {
    display: flex; gap: 40px;
  }
  .form-stat-number {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--teal);
    line-height: 1;
  }
  .form-stat-label {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 4px;
  }

  .form-card {
    background: var(--white);
    border: 1px solid rgba(25,95,113,0.1);
    border-radius: 4px;
    padding: 52px 48px;
    position: relative;
  }
  .form-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--orange), var(--teal));
  }
  .form-field {
    margin-bottom: 28px;
    position: relative;
  }
  .form-label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 8px;
  }
  .form-input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1.5px solid rgba(25,95,113,0.25);
    padding: 10px 0;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
    outline: none;
    transition: border-color 0.3s ease;
    border-radius: 0;
  }
  .form-input::placeholder { color: rgba(107,107,107,0.5); font-size: 0.9rem; }
  .form-input:focus { border-bottom-color: var(--orange); }
  .form-input-line {
    position: absolute; bottom: 0; left: 0;
    height: 1.5px; width: 0;
    background: var(--orange);
    transition: width 0.4s var(--ease-out-expo);
  }
  .form-input:focus ~ .form-input-line { width: 100%; }

  .btn-submit {
    width: 100%;
    padding: 18px 32px;
    background: var(--orange);
    color: white;
    border: none;
    border-radius: 2px;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.35s var(--ease-out-expo);
    position: relative;
    overflow: hidden;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .btn-submit::before {
    content: '';
    position: absolute; inset: 0;
    background: var(--teal);
    transform: translateX(-101%);
    transition: transform 0.4s var(--ease-out-expo);
  }
  .btn-submit:hover::before { transform: translateX(0); }
  .btn-submit span { position: relative; z-index: 1; }
  .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
  .btn-submit:disabled::before { display: none; }

  /* Loading spinner */
  .spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    position: relative; z-index: 1;
  }

  /* Success message */
  .success-card {
    text-align: center;
    padding: 48px 32px;
    animation: fadeUp 0.7s var(--ease-out-expo) both;
  }
  .success-icon {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--teal), var(--teal-dark));
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 24px;
    animation: pulse 2.5s ease infinite;
  }
  .success-icon svg { color: white; }
  .success-title {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 600;
    color: var(--teal-dark);
    margin-bottom: 12px;
  }
  .success-text {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.7;
    font-weight: 300;
  }
  .success-divider {
    width: 40px; height: 2px;
    background: var(--orange);
    margin: 20px auto;
  }

  .form-error {
    font-size: 0.78rem;
    color: #e53e3e;
    margin-top: 6px;
    letter-spacing: 0.02em;
  }

  @media (max-width: 900px) {
    .section-form {
      grid-template-columns: 1fr;
      gap: 60px;
      padding: 80px 24px;
    }
    .form-card { padding: 36px 28px; }
  }

  /* ── Footer ── */
  .footer {
    background: var(--teal-dark);
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
  }
  .footer-logo {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--cream);
    letter-spacing: 0.04em;
  }
  .footer-text {
    font-size: 0.78rem;
    color: rgba(255,249,244,0.4);
    letter-spacing: 0.1em;
    text-align: center;
  }
  .footer-collab {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--orange);
    cursor: pointer;
    transition: color 0.3s;
  }
  .footer-collab:hover { color: var(--cream); }
  @media (max-width: 768px) {
    .footer { padding: 40px 24px; flex-direction: column; text-align: center; }
  }

  /* ══════════════════════════════════════════════════════════
     COLLABORATORS PAGE
     ══════════════════════════════════════════════════════════ */
  .collab-page {
    min-height: 100vh;
    background: var(--teal-dark);
    padding: 0;
  }
  .collab-header {
    background: var(--teal-dark);
    padding: 100px 60px 60px;
    position: relative;
    overflow: hidden;
  }
  .collab-header::after {
    content: '';
    position: absolute; bottom: -1px; left: 0; right: 0;
    height: 80px;
    background: var(--cream);
    clip-path: ellipse(55% 80px at 50% 100%);
  }
  .collab-back {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,249,244,0.5);
    cursor: pointer;
    border: none; background: none;
    margin-bottom: 40px;
    transition: color 0.3s;
  }
  .collab-back:hover { color: var(--cream); }
  .collab-back svg { transition: transform 0.3s; }
  .collab-back:hover svg { transform: translateX(-4px); }
  .collab-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 600;
    color: var(--cream);
    line-height: 1;
    margin-bottom: 12px;
  }
  .collab-subtitle {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.1rem;
    color: rgba(255,249,244,0.5);
  }

  .collab-body {
    background: var(--cream);
    padding: 80px 60px;
  }

  .stats-row {
    display: flex; gap: 24px;
    margin-bottom: 60px;
    flex-wrap: wrap;
  }
  .stat-card {
    flex: 1; min-width: 180px;
    background: var(--white);
    border: 1px solid rgba(25,95,113,0.1);
    border-radius: 4px;
    padding: 32px 28px;
    position: relative;
    overflow: hidden;
    animation: countUp 0.7s var(--ease-out-expo) both;
  }
  .stat-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--orange), var(--teal));
  }
  .stat-number {
    font-family: var(--font-display);
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--teal);
    line-height: 1;
    margin-bottom: 8px;
  }
  .stat-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .collab-table-wrap {
    background: var(--white);
    border: 1px solid rgba(25,95,113,0.1);
    border-radius: 4px;
    overflow: hidden;
  }
  .table-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    border-bottom: 1px solid rgba(25,95,113,0.08);
  }
  .table-title {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--teal-dark);
  }
  .table-search {
    padding: 8px 16px;
    border: 1.5px solid rgba(25,95,113,0.2);
    border-radius: 2px;
    font-family: var(--font-body);
    font-size: 0.82rem;
    outline: none;
    background: var(--cream);
    color: var(--text);
    min-width: 220px;
    transition: border-color 0.3s;
  }
  .table-search:focus { border-color: var(--orange); }
  .table-search::placeholder { color: rgba(107,107,107,0.5); }

  .data-table { width: 100%; border-collapse: collapse; }
  .data-table th {
    padding: 14px 32px;
    text-align: left;
    font-size: 0.67rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    border-bottom: 1px solid rgba(25,95,113,0.1);
    background: rgba(25,95,113,0.03);
  }
  .data-table td {
    padding: 18px 32px;
    font-size: 0.88rem;
    color: var(--text);
    border-bottom: 1px solid rgba(25,95,113,0.06);
    font-weight: 300;
  }
  .data-table tr:last-child td { border-bottom: none; }
  .data-table tbody tr {
    transition: background 0.2s;
    cursor: default;
    animation: fadeUp 0.5s var(--ease-out-expo) both;
  }
  .data-table tbody tr:hover { background: rgba(25,95,113,0.03); }
  .td-name { font-weight: 500; color: var(--teal-dark); }
  .td-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 3px 10px;
    background: rgba(25,95,113,0.08);
    border-radius: 2px;
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--teal);
    letter-spacing: 0.05em;
  }
  .td-date { color: var(--muted); font-size: 0.8rem; }
  .empty-state {
    text-align: center;
    padding: 80px 32px;
    color: var(--muted);
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.1rem;
  }
  .loading-state {
    display: flex; align-items: center; justify-content: center; gap: 12px;
    padding: 80px 32px;
    color: var(--muted);
    font-size: 0.85rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: 768px) {
    .collab-header { padding: 80px 24px 60px; }
    .collab-body { padding: 40px 16px; }
    .table-header-row { flex-direction: column; gap: 16px; align-items: stretch; }
    .table-search { min-width: unset; width: 100%; }
    .data-table th, .data-table td { padding: 12px 16px; }
  }

  /* ══════════════════════════════════════════════════════════
     LOGIN PAGE
     ══════════════════════════════════════════════════════════ */
  .login-page {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--cream);
  }

  /* Left panel */
  .login-left {
    background: var(--teal-dark);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 60px 56px;
    position: relative;
    overflow: hidden;
  }
  .login-left::before {
    content: '';
    position: absolute; top: -20%; right: -20%;
    width: 70%; height: 70%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(230,80,25,0.12), transparent 70%);
    pointer-events: none;
  }
  .login-left::after {
    content: '';
    position: absolute; bottom: -10%; left: -10%;
    width: 50%; height: 50%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,249,244,0.04), transparent 70%);
    pointer-events: none;
  }
  .login-brand {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--cream);
    letter-spacing: 0.04em;
    position: relative; z-index: 1;
  }
  .login-left-main { position: relative; z-index: 1; }
  .login-left-tag {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--orange);
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 24px;
  }
  .login-left-tag::before {
    content: ''; width: 28px; height: 1px; background: var(--orange);
  }
  .login-left-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 600;
    color: var(--cream);
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .login-left-title em { font-style: italic; color: var(--orange); }
  .login-left-desc {
    font-size: 0.85rem;
    color: rgba(255,249,244,0.45);
    line-height: 1.8;
    font-weight: 300;
    max-width: 360px;
  }
  .login-left-footer {
    font-size: 0.7rem;
    color: rgba(255,249,244,0.25);
    letter-spacing: 0.1em;
    position: relative; z-index: 1;
  }
  /* Small book decoration on left panel */
  .login-deco-book {
    width: 80px;
    aspect-ratio: 2/3;
    border-radius: 2px 6px 6px 2px;
    background: linear-gradient(145deg, rgba(255,249,244,0.08), rgba(255,249,244,0.02));
    border: 1px solid rgba(255,249,244,0.08);
    position: absolute;
    bottom: 80px; right: 56px;
    transform: rotate(6deg);
    z-index: 1;
    animation: float 6s ease-in-out infinite;
  }
  .login-deco-book::after {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 6px;
    background: rgba(230,80,25,0.25);
    border-radius: 2px 0 0 2px;
  }

  /* Right panel */
  .login-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 56px;
    background: var(--cream);
  }
  .login-box {
    width: 100%;
    max-width: 400px;
  }
  .login-eyebrow {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 12px;
    display: flex; align-items: center; gap: 8px;
  }
  .login-eyebrow::after {
    content: ''; height: 1px; background: rgba(230,80,25,0.3);
    flex: 1; max-width: 40px;
  }
  .login-title {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 600;
    color: var(--teal-dark);
    line-height: 1.1;
    margin-bottom: 8px;
  }
  .login-subtitle {
    font-size: 0.82rem;
    color: var(--muted);
    font-weight: 300;
    margin-bottom: 48px;
    line-height: 1.6;
  }
  .login-field {
    margin-bottom: 32px;
    position: relative;
  }
  .login-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 8px;
  }
  .login-input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1.5px solid rgba(25,95,113,0.22);
    padding: 10px 0;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
    outline: none;
    transition: border-color 0.3s;
    letter-spacing: 0.02em;
  }
  .login-input:focus { border-bottom-color: var(--orange); }
  .login-input::placeholder { color: rgba(107,107,107,0.4); font-size: 0.88rem; letter-spacing: 0; }
  .login-input-bar {
    position: absolute; bottom: 0; left: 0;
    height: 1.5px; width: 0;
    background: var(--orange);
    transition: width 0.4s var(--ease-out-expo);
  }
  .login-input:focus ~ .login-input-bar { width: 100%; }
  .login-error {
    background: rgba(230,80,25,0.06);
    border: 1px solid rgba(230,80,25,0.25);
    border-left: 3px solid var(--orange);
    border-radius: 2px;
    padding: 12px 16px;
    font-size: 0.78rem;
    color: var(--orange);
    margin-bottom: 24px;
    display: flex; align-items: center; gap: 8px;
    animation: fadeUp 0.4s ease both;
  }
  .login-btn {
    width: 100%;
    padding: 17px 32px;
    background: var(--teal-dark);
    color: white;
    border: none;
    border-radius: 2px;
    font-family: var(--font-body);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.35s var(--ease-out-expo);
    position: relative;
    overflow: hidden;
    display: flex; align-items: center; justify-content: center; gap: 10px;
  }
  .login-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: var(--orange);
    transform: translateX(-101%);
    transition: transform 0.4s var(--ease-out-expo);
  }
  .login-btn:hover::before { transform: translateX(0); }
  .login-btn span { position: relative; z-index: 1; }
  .login-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .login-btn:disabled::before { display: none; }
  .login-back {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 24px;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    cursor: pointer;
    background: none; border: none;
    font-family: var(--font-body);
    transition: color 0.3s;
    width: 100%; justify-content: center;
  }
  .login-back:hover { color: var(--teal); }
  .login-lock-icon {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: rgba(25,95,113,0.08);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 32px;
  }
  /* Shake animation for wrong password */
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-8px); }
    40%       { transform: translateX(8px); }
    60%       { transform: translateX(-6px); }
    80%       { transform: translateX(6px); }
  }
  .shake { animation: shake 0.45s ease both; }

  /* Logout button in nav */
  .nav-logout {
    display: flex; align-items: center; gap: 6px;
    padding: 8px 18px;
    border: 1.5px solid rgba(25,95,113,0.3);
    background: transparent;
    color: var(--teal);
    border-radius: 2px;
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
  }
  .nav-logout:hover { background: var(--teal); color: white; border-color: var(--teal); }

  @media (max-width: 768px) {
    .login-page { grid-template-columns: 1fr; }
    .login-left { display: none; }
    .login-right { padding: 80px 28px 48px; min-height: 100vh; }
    .login-box { max-width: 100%; }
  }
`;function Xd(){O.useEffect(()=>{const e=document.querySelectorAll(".reveal, .reveal-left"),t=new IntersectionObserver(n=>n.forEach(r=>r.isIntersecting&&r.target.classList.add("visible")),{threshold:.12,rootMargin:"0px 0px -40px 0px"});return e.forEach(n=>t.observe(n)),()=>t.disconnect()},[])}function Yd(){const[e,t]=O.useState(!1);return O.useEffect(()=>{const n=()=>t(window.scrollY>40);return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),e}function Kd({onSuccess:e,onBack:t}){const[n,r]=O.useState(""),[l,o]=O.useState(""),[i,a]=O.useState(""),[s,f]=O.useState(!1),[g,h]=O.useState(!1),[m,x]=O.useState(!1),w=O.useRef(null),k=()=>{if(!n.trim()||!l.trim()){a("Preencha usuário e senha."),M();return}f(!0),setTimeout(()=>{n.trim()===Wd&&l===$d?(f(!1),e()):(f(!1),a("Usuário ou senha incorretos."),o(""),M())},600)},M=()=>{h(!0),setTimeout(()=>h(!1),500)},d=c=>{c.key==="Enter"&&k()};return u.jsxs("div",{className:"login-page",children:[u.jsxs("div",{className:"login-left",children:[u.jsx("span",{className:"login-brand",children:Tn}),u.jsxs("div",{className:"login-left-main",children:[u.jsx("div",{className:"login-left-tag",children:"Acesso restrito"}),u.jsxs("h2",{className:"login-left-title",children:["Área das",u.jsx("br",{}),u.jsx("em",{children:"Autoras"})]}),u.jsx("p",{className:"login-left-desc",children:"Espaço exclusivo para a equipe acompanhar em tempo real as confirmações de presença no lançamento do livro."}),u.jsx("div",{className:"login-deco-book"})]}),u.jsxs("span",{className:"login-left-footer",children:["© ",new Date().getFullYear()," — ",Ri]})]}),u.jsx("div",{className:"login-right",children:u.jsxs("div",{className:`login-box${g?" shake":""}`,ref:w,children:[u.jsx("div",{className:"login-eyebrow",children:"Login"}),u.jsxs("h1",{className:"login-title",children:["Bem-vindo",u.jsx("br",{}),"de volta"]}),u.jsx("p",{className:"login-subtitle",children:"Insira suas credenciais para acessar o painel de colaboradores."}),u.jsxs("div",{className:"login-field",children:[u.jsxs("label",{className:"login-label",children:[u.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Usuário"]}),u.jsx("input",{className:"login-input",type:"text",placeholder:"@usuario",value:n,onChange:c=>{r(c.target.value),a("")},onKeyDown:d,autoComplete:"username"}),u.jsx("div",{className:"login-input-bar"})]}),u.jsxs("div",{className:"login-field",style:{position:"relative"},children:[u.jsxs("label",{className:"login-label",children:[u.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),"Senha"]}),u.jsxs("div",{style:{position:"relative"},children:[u.jsx("input",{className:"login-input",type:m?"text":"password",placeholder:"••••••••••",value:l,onChange:c=>{o(c.target.value),a("")},onKeyDown:d,autoComplete:"current-password",style:{paddingRight:"36px"}}),u.jsx("div",{className:"login-input-bar"}),u.jsx("button",{onClick:()=>x(!m),style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--muted)",padding:"4px",display:"flex",alignItems:"center"},children:m?u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"}),u.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]})]}),i&&u.jsxs("div",{className:"login-error",children:[u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),i]}),u.jsx("button",{className:"login-btn",onClick:k,disabled:s,children:s?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"spinner"}),u.jsx("span",{children:"Verificando..."})]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"Entrar"}),u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"relative",zIndex:1},children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})}),u.jsxs("button",{className:"login-back",onClick:t,children:[u.jsx(uc,{})," Voltar ao site"]})]})})]})}const Gd=()=>u.jsxs("svg",{className:"hero-meta-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),u.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),Zd=()=>u.jsxs("svg",{className:"hero-meta-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"}),u.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),Jd=()=>u.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}),uc=()=>u.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"15 18 9 12 15 6"})}),bd=()=>u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),qd=()=>u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]});function ep({onNavigate:e,page:t,isAuth:n,onLogout:r}){const l=Yd();return u.jsxs("nav",{className:`nav${l?" scrolled":""}`,children:[u.jsx("span",{className:"nav-logo",onClick:()=>e("home"),style:{cursor:"pointer"},children:Tn}),u.jsxs("div",{className:"nav-links",children:[t==="home"&&u.jsxs(u.Fragment,{children:[u.jsx("a",{className:"nav-link",href:"#sobre",children:"Sobre"}),u.jsx("a",{className:"nav-link",href:"#inscricao",children:"Inscrição"}),u.jsx("button",{className:"nav-cta",onClick:()=>e("login"),children:"Área do Colaborador"})]}),t==="login"&&u.jsx("button",{className:"nav-cta",onClick:()=>e("home"),children:"← Voltar ao site"}),t==="collaborators"&&u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"nav-cta",onClick:()=>e("home"),children:"← Voltar ao site"}),u.jsxs("button",{className:"nav-logout",onClick:r,children:[u.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Sair"]})]})]})]})}function tp(){const[e,t]=O.useState({name:"",phone:"",email:""}),[n,r]=O.useState({}),[l,o]=O.useState(!1),[i,a]=O.useState(!1),[s,f]=O.useState(""),g=()=>{const m={};return e.name.trim()||(m.name="Nome é obrigatório"),e.phone.trim()||(m.phone="Celular é obrigatório"),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(m.email="E-mail inválido"):m.email="E-mail é obrigatório",m},h=async()=>{const m=g();if(Object.keys(m).length){r(m);return}o(!0),f("");const x=await Hd({name:e.name.trim(),phone:e.phone.trim(),email:e.email.trim()});o(!1),x?a(!0):f("Erro ao enviar. Tente novamente.")};return i?u.jsx("div",{className:"form-card",children:u.jsxs("div",{className:"success-card",children:[u.jsx("div",{className:"success-icon",children:u.jsx(Jd,{})}),u.jsx("p",{style:{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--orange)",marginBottom:"12px"},children:"Inscrição confirmada"}),u.jsx("h3",{className:"success-title",children:"Até lá!"}),u.jsx("div",{className:"success-divider"}),u.jsxs("p",{className:"success-text",children:["Obrigado pela sua presença confirmada, ",u.jsx("strong",{children:e.name}),".",u.jsx("br",{}),"Você receberá mais detalhes em breve."]})]})}):u.jsxs("div",{className:"form-card",children:[["name","phone","email"].map(m=>u.jsxs("div",{className:"form-field",children:[u.jsx("label",{className:"form-label",children:m==="name"?"Nome completo":m==="phone"?"Celular (WhatsApp)":"E-mail"}),u.jsx("input",{className:"form-input",type:m==="email"?"email":m==="phone"?"tel":"text",placeholder:m==="name"?"Seu nome":m==="phone"?"(11) 99999-9999":"seu@email.com",value:e[m],onChange:x=>{t({...e,[m]:x.target.value}),r({...n,[m]:""})}}),u.jsx("div",{className:"form-input-line"}),n[m]&&u.jsx("p",{className:"form-error",children:n[m]})]},m)),s&&u.jsx("p",{className:"form-error",style:{marginBottom:"12px"},children:s}),u.jsx("button",{className:"btn-submit",onClick:h,disabled:l,children:l?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"spinner"}),u.jsx("span",{children:"Enviando..."})]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"Confirmar presença"}),u.jsx(qd,{})]})})]})}function np({onNavigate:e}){Xd();const[t,n]=O.useState("—");O.useEffect(()=>{sc().then(o=>{Array.isArray(o)&&n(o.length)})},[]);const l=["Lançamento Literário","•",Tn,"•",Qa,"•",Xa,"•","Reserve seu lugar","•"].join(" ◆ ");return u.jsxs("div",{children:[u.jsxs("section",{className:"hero",children:[u.jsxs("div",{className:"hero-text",children:[u.jsx("p",{className:"hero-label animate-fade-up",children:"Lançamento Literário"}),u.jsx("h1",{className:"hero-title animate-fade-up d-200",children:Ri.split(" ").map((o,i)=>i===0?u.jsxs("em",{children:[o," "]},i):o+" ")}),u.jsx("p",{className:"hero-subtitle animate-fade-up d-300",children:Bd}),u.jsxs("div",{className:"hero-meta animate-fade-up d-400",children:[u.jsxs("div",{className:"hero-meta-item",children:[u.jsx(Gd,{}),u.jsx("strong",{children:Qa})]}),u.jsxs("div",{className:"hero-meta-item",children:[u.jsx(Zd,{}),Xa]})]}),u.jsxs("p",{className:"hero-author animate-fade-up d-500",children:[u.jsx("span",{children:"Escrito por "}),Tn]})]}),u.jsx("div",{className:"hero-book animate-fade-in d-300",children:u.jsxs("div",{className:"book-wrapper",children:[u.jsxs("div",{className:"book-cover",children:[u.jsx("img",{src:Vd,alt:"Capa do livro",className:"book-cover-img"}),u.jsx("div",{className:"book-spine"})]}),u.jsx("div",{className:"book-shadow"})]})})]}),u.jsx("div",{className:"marquee-strip",children:u.jsx("div",{className:"marquee-inner",children:[0,1].map(o=>u.jsx("span",{children:l.split(" ◆ ").map((i,a)=>u.jsxs("span",{className:"marquee-item",children:[i," ",a<l.split(" ◆ ").length-1&&u.jsx("span",{className:"marquee-dot"})]},a))},o))})}),u.jsxs("section",{id:"sobre",className:"section-about",children:[u.jsxs("div",{className:"reveal-left",children:[u.jsx("span",{className:"about-tag",children:"Sobre o livro"}),u.jsxs("blockquote",{className:"about-quote",children:["Uma obra que vai mudar a forma como você vê"," ",u.jsx("strong",{children:"a maternidade."})]})]}),u.jsx("div",{className:"divider-line"}),u.jsx("div",{className:"reveal",children:u.jsxs("div",{className:"about-text",children:[u.jsx("p",{children:"Esta obra, de Cristina Martinez e Vivian Cirineu, é um convite para mães que desejam educar seus filhos com amor, firmeza e presença emocional, sem culpa, sem perfeccionismo e sem repetir padrões que machucam."}),u.jsx("p",{children:"Com linguagem acessível e embasamento científico, o livro conduz a mãe ao desenvolvimento da autorregulação emocional, da comunicação empática e de uma presença mais consciente na relação com os filhos, favorecendo respostas claras e acolhedoras em lugar de reações automáticas."}),u.jsx("p",{children:"Desafios cotidianos deixam de ser fonte de exaustão e passam a se transformar em oportunidades de vínculo, escuta e conexão."})]})})]}),u.jsxs("section",{id:"inscricao",className:"section-form",children:[u.jsxs("div",{children:[u.jsx("div",{className:"form-eyebrow reveal",children:"Garanta sua vaga"}),u.jsxs("h2",{className:"form-title reveal d-100",children:["Confirme",u.jsx("br",{}),"sua",u.jsx("br",{}),u.jsx("em",{style:{fontFamily:"var(--font-display)",fontStyle:"italic",color:"var(--orange)"},children:"presença"})]}),u.jsx("p",{className:"form-desc reveal d-200",children:"O evento é gratuito e as vagas são limitadas. Preencha o formulário ao lado para garantir seu lugar nessa noite especial."}),u.jsxs("div",{className:"form-stats reveal d-300",children:[u.jsx("div",{}),u.jsxs("div",{children:[u.jsx("div",{className:"form-stat-number",style:{color:"var(--orange)"}}),u.jsx("div",{className:"form-stat-label",children:"noite única"})]})]})]}),u.jsx("div",{className:"reveal d-200",children:u.jsx(tp,{})})]}),u.jsxs("footer",{className:"footer",children:[u.jsx("span",{className:"footer-logo",children:Tn}),u.jsxs("p",{className:"footer-text",children:["© ",new Date().getFullYear()," — Lançamento Despertar Materno"]}),u.jsx("span",{className:"footer-collab",onClick:()=>e("login"),children:"Área do Colaborador →"})]})]})}function rp({onNavigate:e}){const[t,n]=O.useState([]),[r,l]=O.useState(!0),[o,i]=O.useState(""),[a,s]=O.useState(!1);O.useEffect(()=>{window.scrollTo(0,0),sc().then(h=>{n(Array.isArray(h)?h:[]),l(!1)}).catch(()=>{s(!0),l(!1)})},[]);const f=t.filter(h=>[h.name,h.email,h.phone].some(m=>m==null?void 0:m.toLowerCase().includes(o.toLowerCase()))),g=h=>h?new Date(h).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—";return u.jsxs("div",{className:"collab-page",children:[u.jsxs("div",{className:"collab-header",children:[u.jsxs("button",{className:"collab-back",onClick:()=>e("home"),children:[u.jsx(uc,{})," Voltar"]}),u.jsxs("h1",{className:"collab-title",children:["Área dos",u.jsx("br",{}),u.jsx("em",{style:{fontStyle:"italic"},children:"Colaboradores"})]}),u.jsxs("p",{className:"collab-subtitle",children:["Lista de confirmados — ",Ri]})]}),u.jsxs("div",{className:"collab-body",children:[u.jsx("div",{className:"stats-row",children:[{number:t.length,label:"Total confirmado"},{number:f.length!==t.length?f.length:"—",label:"Resultado da busca"}].map((h,m)=>u.jsxs("div",{className:"stat-card",style:{animationDelay:`${m*.1}s`},children:[u.jsx("div",{className:"stat-number",children:h.number}),u.jsx("div",{className:"stat-label",children:h.label})]},m))}),u.jsxs("div",{className:"collab-table-wrap",children:[u.jsxs("div",{className:"table-header-row",children:[u.jsx("span",{className:"table-title",children:"Inscrições"}),u.jsx("input",{className:"table-search",placeholder:"Buscar por nome, e-mail ou celular…",value:o,onChange:h=>i(h.target.value)})]}),r?u.jsxs("div",{className:"loading-state",children:[u.jsx("div",{className:"spinner",style:{borderTopColor:"var(--teal)",borderColor:"rgba(25,95,113,0.2)"}}),"Carregando inscrições…"]}):a?u.jsx("div",{className:"empty-state",children:"Erro ao carregar dados. Verifique as configurações do Supabase."}):f.length===0?u.jsx("div",{className:"empty-state",children:o?"Nenhum resultado encontrado.":"Nenhuma inscrição ainda."}):u.jsx("div",{style:{overflowX:"auto"},children:u.jsxs("table",{className:"data-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"#"}),u.jsx("th",{children:"Nome"}),u.jsx("th",{children:"Celular"}),u.jsx("th",{children:"E-mail"}),u.jsx("th",{children:"Data"})]})}),u.jsx("tbody",{children:f.map((h,m)=>u.jsxs("tr",{style:{animationDelay:`${Math.min(m*.04,.5)}s`},children:[u.jsx("td",{children:u.jsxs("span",{className:"td-badge",children:[u.jsx(bd,{}),m+1]})}),u.jsx("td",{className:"td-name",children:h.name}),u.jsx("td",{children:h.phone}),u.jsx("td",{children:h.email}),u.jsx("td",{className:"td-date",children:g(h.created_at)})]},h.id))})]})})]})]})]})}function lp(){const[e,t]=O.useState("home"),[n,r]=O.useState(!1),l=O.useCallback(a=>{if(a==="collaborators"&&!n){t("login");return}t(a),window.scrollTo({top:0,behavior:"smooth"})},[n]),o=O.useCallback(()=>{r(!0),t("collaborators"),window.scrollTo({top:0,behavior:"smooth"})},[]),i=O.useCallback(()=>{r(!1),t("home"),window.scrollTo({top:0,behavior:"smooth"})},[]);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Qd}),e!=="login"&&u.jsx(ep,{onNavigate:l,page:e,isAuth:n,onLogout:i}),e==="home"&&u.jsx(np,{onNavigate:l}),e==="login"&&u.jsx(Kd,{onSuccess:o,onBack:()=>{t("home"),window.scrollTo({top:0})}}),e==="collaborators"&&n&&u.jsx(rp,{onNavigate:l})]})}Xl.createRoot(document.getElementById("root")).render(u.jsx(zc.StrictMode,{children:u.jsx(lp,{})}));
