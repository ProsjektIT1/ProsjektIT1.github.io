function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function i(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}let u,f=!1;function d(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function p(t,e){if(f){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const s=e[t].claim_order,a=(o>0&&e[n[o]].claim_order<=s?o+1:d(1,o,(t=>e[n[t]].claim_order),s))-1;r[t]=n[a]+1;const c=a+1;n[c]=t,o=Math.max(c,o)}const s=[],a=[];let c=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(s.push(e[t-1]);c>=t;c--)a.push(e[c]);c--}for(;c>=0;c--)a.push(e[c]);s.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<s.length&&a[e].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;t.insertBefore(a[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function h(t,e,n){f&&!n?p(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function $(){return v(" ")}function b(){return v("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function S(t,e,n,r,o=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,o||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,o?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function w(t,e,n){return function(t,e,n,r){return S(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const o=t.attributes[r];n[o.name]||e.push(o.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}(t,e,n,_)}function N(t,e){return S(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>v(e)),!0)}function P(t){return N(t," ")}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function R(t,e,n){t.classList[n?"add":"remove"](e)}function j(t,e=document.body){return Array.from(e.querySelectorAll(t))}function k(t){u=t}function I(){if(!u)throw new Error("Function called outside component initialization");return u}const C=[],O=[],T=[],q=[],U=Promise.resolve();let J=!1;function B(t){T.push(t)}const M=new Set;let K=0;function V(){const t=u;do{for(;K<C.length;){const t=C[K];K++,k(t),z(t.$$)}for(k(null),C.length=0,K=0;O.length;)O.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];M.has(e)||(M.add(e),e())}T.length=0}while(C.length);for(;q.length;)q.pop()();J=!1,M.clear(),k(t)}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const D=new Set;let H;function W(){H={r:0,c:[],p:H}}function Y(){H.r||o(H.c),H=H.p}function F(t,e){t&&t.i&&(D.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),H.c.push((()=>{D.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function X(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e){t&&t.l(e)}function et(t,e,r,a){const{fragment:c,on_mount:i,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,r),a||B((()=>{const e=i.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(B)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(C.push(t),J||(J=!0,U.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,s,a,c,i,l,d=[-1]){const p=u;k(e);const h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:r(),dirty:d,skip_bound:!1,root:n.target||p.$$.root};l&&l(h.root);let g=!1;if(h.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&rt(e,t)),n})):[],h.update(),g=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){f=!0;const t=x(n.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();n.intro&&F(e.$$.fragment),et(e,n.target,n.anchor,n.customElement),f=!1,V()}k(p)}class st{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function ct(e,n=t){let r;const o=new Set;function s(t){if(a(e,t)&&(e=t,r)){const t=!at.length;for(const t of o)t[1](),at.push(t,e);if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.add(i),1===o.size&&(r=n(s)||t),a(e),()=>{o.delete(i),0===o.size&&(r(),r=null)}}}}const it={};function lt(e){let n,r,o,s,a,c,i,l,u,f,d,g,b,y,S,A,L,R,j,k,I,C,O,T,q,U;return{c(){n=_("nav"),r=_("ul"),o=_("li"),s=_("a"),a=v("home"),i=$(),l=_("li"),u=_("a"),f=v("about"),g=$(),b=_("li"),y=_("a"),S=v("work"),L=$(),R=_("li"),j=_("a"),k=v("contact"),C=$(),O=_("li"),T=_("a"),q=v("youtube"),this.h()},l(t){n=w(t,"NAV",{class:!0});var e=x(n);r=w(e,"UL",{class:!0});var c=x(r);o=w(c,"LI",{class:!0});var d=x(o);s=w(d,"A",{"aria-current":!0,href:!0,class:!0});var p=x(s);a=N(p,"home"),p.forEach(m),d.forEach(m),i=P(c),l=w(c,"LI",{class:!0});var h=x(l);u=w(h,"A",{"aria-current":!0,href:!0,class:!0});var _=x(u);f=N(_,"about"),_.forEach(m),h.forEach(m),g=P(c),b=w(c,"LI",{class:!0});var v=x(b);y=w(v,"A",{"aria-current":!0,href:!0,class:!0});var $=x(y);S=N($,"work"),$.forEach(m),v.forEach(m),L=P(c),R=w(c,"LI",{class:!0});var E=x(R);j=w(E,"A",{"aria-current":!0,href:!0,class:!0});var A=x(j);k=N(A,"contact"),A.forEach(m),E.forEach(m),C=P(c),O=w(c,"LI",{class:!0});var I=x(O);T=w(I,"A",{"aria-current":!0,href:!0,class:!0});var U=x(T);q=N(U,"youtube"),U.forEach(m),I.forEach(m),c.forEach(m),e.forEach(m),this.h()},h(){E(s,"aria-current",c=void 0===e[0]?"page":void 0),E(s,"href","."),E(s,"class","svelte-1dbd5up"),E(o,"class","svelte-1dbd5up"),E(u,"aria-current",d="about"===e[0]?"page":void 0),E(u,"href","about"),E(u,"class","svelte-1dbd5up"),E(l,"class","svelte-1dbd5up"),E(y,"aria-current",A="work"===e[0]?"page":void 0),E(y,"href","work"),E(y,"class","svelte-1dbd5up"),E(b,"class","svelte-1dbd5up"),E(j,"aria-current",I="contact"===e[0]?"page":void 0),E(j,"href","contact"),E(j,"class","svelte-1dbd5up"),E(R,"class","svelte-1dbd5up"),E(T,"aria-current",U="youtube"===e[0]?"page":void 0),E(T,"href","youtube"),E(T,"class","svelte-1dbd5up"),E(O,"class","svelte-1dbd5up"),E(r,"class","svelte-1dbd5up"),E(n,"class","svelte-1dbd5up")},m(t,e){h(t,n,e),p(n,r),p(r,o),p(o,s),p(s,a),p(r,i),p(r,l),p(l,u),p(u,f),p(r,g),p(r,b),p(b,y),p(y,S),p(r,L),p(r,R),p(R,j),p(j,k),p(r,C),p(r,O),p(O,T),p(T,q)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&E(s,"aria-current",c),1&e&&d!==(d="about"===t[0]?"page":void 0)&&E(u,"aria-current",d),1&e&&A!==(A="work"===t[0]?"page":void 0)&&E(y,"aria-current",A),1&e&&I!==(I="contact"===t[0]?"page":void 0)&&E(j,"aria-current",I),1&e&&U!==(U="youtube"===t[0]?"page":void 0)&&E(T,"aria-current",U)},i:t,o:t,d(t){t&&m(n)}}}function ut(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ft extends st{constructor(t){super(),ot(this,t,ut,lt,a,{segment:0})}}function dt(t){let e,n,r,o;e=new ft({props:{segment:t[0]}});const s=t[2].default,a=function(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){Z(e.$$.fragment),n=$(),r=_("main"),a&&a.c(),this.h()},l(t){tt(e.$$.fragment,t),n=P(t),r=w(t,"MAIN",{class:!0});var o=x(r);a&&a.l(o),o.forEach(m),this.h()},h(){E(r,"class","svelte-1uhnsl8")},m(t,s){et(e,t,s),h(t,n,s),h(t,r,s),a&&a.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&(!o||2&n)&&function(t,e,n,r,o,s){if(o){const a=l(e,n,r,s);t.p(a,o)}}(a,s,t,t[1],o?function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(s,t[1],n,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){o||(F(e.$$.fragment,t),F(a,t),o=!0)},o(t){G(e.$$.fragment,t),G(a,t),o=!1},d(t){nt(e,t),t&&m(n),t&&m(r),a&&a.d(t)}}}function pt(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class ht extends st{constructor(t){super(),ot(this,t,pt,dt,a,{segment:0})}}function mt(t){let e,n,r=t[1].stack+"";return{c(){e=_("pre"),n=v(r)},l(t){e=w(t,"PRE",{});var o=x(e);n=N(o,r),o.forEach(m)},m(t,r){h(t,e,r),p(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&A(n,r)},d(t){t&&m(e)}}}function gt(e){let n,r,o,s,a,c,i,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&mt(e);return{c(){r=$(),o=_("h1"),s=v(e[0]),a=$(),c=_("p"),i=v(f),l=$(),d&&d.c(),u=b(),this.h()},l(t){j('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(m),r=P(t),o=w(t,"H1",{class:!0});var n=x(o);s=N(n,e[0]),n.forEach(m),a=P(t),c=w(t,"P",{class:!0});var p=x(c);i=N(p,f),p.forEach(m),l=P(t),d&&d.l(t),u=b(),this.h()},h(){E(o,"class","svelte-8od9u6"),E(c,"class","svelte-8od9u6")},m(t,e){h(t,r,e),h(t,o,e),p(o,s),h(t,a,e),h(t,c,e),p(c,i),h(t,l,e),d&&d.m(t,e),h(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&A(s,t[0]),2&e&&f!==(f=t[1].message+"")&&A(i,f),t[2]&&t[1].stack?d?d.p(t,e):(d=mt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&m(r),t&&m(o),t&&m(a),t&&m(c),t&&m(l),d&&d.d(t),t&&m(u)}}}function _t(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class vt extends st{constructor(t){super(),ot(this,t,_t,gt,a,{status:0,error:1})}}function $t(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&Z(n.$$.fragment),r=b()},l(t){n&&tt(n.$$.fragment,t),r=b()},m(t,e){n&&et(n,t,e),h(t,r,e),o=!0},p(t,e){const o=16&e?X(s,[Q(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){W();const t=n;G(t.$$.fragment,1,0,(()=>{nt(t,1)})),Y()}a?(n=new a(c()),Z(n.$$.fragment),F(n.$$.fragment,1),et(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&F(n.$$.fragment,t),o=!0)},o(t){n&&G(n.$$.fragment,t),o=!1},d(t){t&&m(r),n&&nt(n,t)}}}function bt(t){let e,n;return e=new vt({props:{error:t[0],status:t[1]}}),{c(){Z(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function yt(t){let e,n,r,o;const s=[bt,$t],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=b()},l(t){n.l(t),r=b()},m(t,n){a[e].m(t,n),h(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(W(),G(a[i],1,1,(()=>{a[i]=null})),Y(),n=a[e],n?n.p(t,o):(n=a[e]=s[e](t),n.c()),F(n,1),n.m(r.parentNode,r))},i(t){o||(F(n),o=!0)},o(t){G(n),o=!1},d(t){a[e].d(t),t&&m(r)}}}function Et(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[yt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ht({props:s}),{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,e){et(n,t,e),r=!0},p(t,[e]){const r=12&e?X(o,[4&e&&{segment:t[2][0]},8&e&&Q(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){G(n.$$.fragment,t),r=!1},d(t){nt(n,t)}}}function xt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,d;return u=l,I().$$.after_update.push(u),f=it,d=r,I().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class St extends st{constructor(t){super(),ot(this,t,xt,Et,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const wt=[/^\/hslide\/?$/],Nt=[{js:()=>Promise.all([import("./index.6b99e8c1.js"),__inject_styles(["client-e118e612.css","index-af75e8f5.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./contact.ffeeaea1.js"),__inject_styles(["client-e118e612.css","contact-b7fada0a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./youtube.8efb6fba.js"),__inject_styles(["client-e118e612.css","youtube-907fbafe.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.cbb9a9ce.js"),__inject_styles(["client-e118e612.css","about-aa16587d.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./work.e351da31.js"),__inject_styles(["client-e118e612.css","work-dd253b39.css"])]).then((function(t){return t[0]}))}],Pt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contact\/?$/,parts:[{i:1}]},{pattern:/^\/youtube\/?$/,parts:[{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/work\/?$/,parts:[{i:4}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function At(t,e,n,r){return new(n||(n=Promise))((function(o,s){function a(t){try{i(r.next(t))}catch(t){s(t)}}function c(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}i((r=r.apply(t,e||[])).next())}))}function Lt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Rt,jt=1;const kt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},It={};let Ct,Ot;function Tt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ct))return null;let e=t.pathname.slice(Ct.length);if(""===e&&(e="/"),!wt.some((t=>t.test(e))))for(let n=0;n<Pt.length;n+=1){const r=Pt[n],o=r.pattern.exec(e);if(o){const n=Tt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Ut(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Lt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=qt(o);if(s){Mt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),kt.pushState({id:Rt},"",o.href)}}function Jt(){return{x:pageXOffset,y:pageYOffset}}function Bt(t){if(It[Rt]=Jt(),t.state){const e=qt(new URL(location.href));e?Mt(e,t.state.id):location.href=location.href}else jt=jt+1,function(t){Rt=t}(jt),kt.replaceState({id:Rt},"",location.href)}function Mt(t,e,n,r){return At(this,void 0,void 0,(function*(){const o=!!e;if(o)Rt=e;else{const t=Jt();It[Rt]=t,Rt=e=++jt,It[Rt]=n?t:{x:0,y:0}}if(yield Ot(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=It[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),It[Rt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Kt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Vt,zt=null;function Dt(t){const e=Lt(t.target);e&&"prefetch"===e.rel&&function(t){const e=qt(new URL(t,Kt(document)));if(e)zt&&t===zt.href||(zt={href:t,promise:ie(e)}),zt.promise}(e.href)}function Ht(t){clearTimeout(Vt),Vt=setTimeout((()=>{Dt(t)}),20)}function Wt(t,e={noscroll:!1,replaceState:!1}){const n=qt(new URL(t,Kt(document)));return n?(kt[e.replaceState?"replaceState":"pushState"]({id:Rt},"",t),Mt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Yt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ft,Gt,Xt,Qt=!1,Zt=[],te="{}";const ee={page:function(t){const e=ct(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:ct(null),session:ct(Yt&&Yt.session)};let ne,re,oe;function se(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ae(t){return At(this,void 0,void 0,(function*(){Ft&&ee.preloading.set(!0);const e=function(t){return zt&&zt.href===t.href?zt.promise:ie(t)}(t),n=Gt={},r=yield e,{redirect:o}=r;if(n===Gt)if(o)yield Wt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ce(n,e,se(e,t.page))}}))}function ce(t,e,n){return At(this,void 0,void 0,(function*(){ee.page.set(n),ee.preloading.set(!1),Ft?Ft.$set(e):(e.stores={page:{subscribe:ee.page.subscribe},preloading:{subscribe:ee.preloading.subscribe},session:ee.session},e.level0={props:yield Xt},e.notify=ee.page.notify,Ft=new St({target:oe,props:e,hydrate:!0})),Zt=t,te=JSON.stringify(n.query),Qt=!0,re=!1}))}function ie(t){return At(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Xt){const t=()=>({});Xt=Yt.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},ne)}let c,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>At(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==te)return!0;const o=Zt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const d=i++;if(!re&&!u&&Zt[c]&&Zt[c].part===e.i)return Zt[c];u=!1;const{default:p,preload:h}=yield Nt[e.i].js();let m;return m=Qt||!Yt.preloaded[c+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ne):{}:Yt.preloaded[c+1],s[`level${d}`]={component:p,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var le,ue,fe;ee.session.subscribe((t=>At(void 0,void 0,void 0,(function*(){if(ne=t,!Qt)return;re=!0;const e=qt(new URL(location.href)),n=Gt={},{redirect:r,props:o,branch:s}=yield ie(e);n===Gt&&(r?yield Wt(r.location,{replaceState:!0}):yield ce(s,o,se(o,e.page)))})))),le={target:document.querySelector("#sapper")},ue=le.target,oe=ue,fe=Yt.baseUrl,Ct=fe,Ot=ae,"scrollRestoration"in kt&&(kt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{kt.scrollRestoration="auto"})),addEventListener("load",(()=>{kt.scrollRestoration="manual"})),addEventListener("click",Ut),addEventListener("popstate",Bt),addEventListener("touchstart",Dt),addEventListener("mousemove",Ht),Yt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:a}=Yt;Xt||(Xt=o&&o[0]);const c={error:a,status:s,session:r,level0:{props:Xt},level1:{props:{status:s,error:a},component:vt},segments:o},i=Tt(n);ce([],c,{host:t,path:e,query:i,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;kt.replaceState({id:jt},"",e);const n=qt(new URL(location.href));if(n)return Mt(n,jt,!0,t)}));export{st as S,$ as a,w as b,P as c,m as d,_ as e,x as f,N as g,E as h,ot as i,i as j,L as k,h as l,p as m,t as n,y as o,A as p,j as q,o as r,a as s,v as t,b as u,R as v,g as w};

import __inject_styles from './inject_styles.5607aec6.js';