import{S as e,i as t,s,u as l,l as a,e as n,a as r,t as o,b as i,f as c,c as g,g as d,d as f,j as v,h,k,m as u,o as m,p,r as b,v as j,q as E,n as D,w as y}from"./client.f6028052.js";function T(e,t,s){const l=e.slice();return l[19]=t[s],l[21]=s,l}function I(e,t,s){const l=e.slice();return l[19]=t[s],l[23]=s,l}function V(e){let t,s,l,j,E,D,y,T,I,V,S,x,A,w,J,N,M,B,O,U,C,H=e[19].text+"";return{c(){t=n("div"),s=n("img"),j=r(),E=n("div"),D=n("div"),y=n("span"),T=o(e[3]),I=n("div"),V=o("✖"),S=r(),x=n("div"),A=o(e[0]),w=r(),J=n("div"),N=o(H),M=o(" - "),B=n("a"),O=o(e[2]),this.h()},l(l){t=i(l,"DIV",{style:!0,class:!0});var a=c(t);s=i(a,"IMG",{src:!0,alt:!0,class:!0}),j=g(a),E=i(a,"DIV",{style:!0,class:!0});var n=c(E);D=i(n,"DIV",{class:!0});var r=c(D);y=i(r,"SPAN",{});var o=c(y);T=d(o,e[3]),o.forEach(f),I=i(r,"DIV",{class:!0});var v=c(I);V=d(v,"✖"),v.forEach(f),r.forEach(f),S=g(n),x=i(n,"DIV",{});var h=c(x);A=d(h,e[0]),h.forEach(f),n.forEach(f),w=g(a),J=i(a,"DIV",{class:!0});var k=c(J);N=d(k,H),M=d(k," - "),B=i(k,"A",{class:!0});var u=c(B);O=d(u,e[2]),u.forEach(f),k.forEach(f),a.forEach(f),this.h()},h(){v(s.src,l=e[19].content)||h(s,"src",l),h(s,"alt","balls"),h(s,"class","svelte-keosfj"),h(I,"class","X svelte-keosfj"),h(D,"class","descHeader svelte-keosfj"),k(E,"display",e[1]),h(E,"class","bildeDesc svelte-keosfj"),h(B,"class","svelte-keosfj"),h(J,"class","bildeTekst svelte-keosfj"),k(t,"background",e[19].bg),h(t,"class","slide svelte-keosfj")},m(l,n){a(l,t,n),u(t,s),u(t,j),u(t,E),u(E,D),u(D,y),u(y,T),u(D,I),u(I,V),u(E,S),u(E,x),u(x,A),u(t,w),u(t,J),u(J,N),u(J,M),u(J,B),u(B,O),U||(C=[m(s,"click",e[8](e[23])),m(I,"click",e[12]),m(B,"click",e[13])],U=!0)},p(t,s){e=t,8&s&&p(T,e[3]),1&s&&p(A,e[0]),2&s&&k(E,"display",e[1]),4&s&&p(O,e[2])},d(e){e&&f(t),U=!1,b(C)}}}function S(e){let t,s=e[23]===e[4]&&V(e);return{c(){s&&s.c(),t=l()},l(e){s&&s.l(e),t=l()},m(e,l){s&&s.m(e,l),a(e,t,l)},p(e,l){e[23]===e[4]?s?s.p(e,l):(s=V(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(e){s&&s.d(e),e&&f(t)}}}function x(e){let t,s,l,r,g=e[21]+1+"";function v(){return e[16](e[21])}return{c(){t=n("button"),s=o(g),this.h()},l(e){t=i(e,"BUTTON",{class:!0});var l=c(t);s=d(l,g),l.forEach(f),this.h()},h(){h(t,"class","dot svelte-keosfj"),j(t,"selected",e[4]==e[21])},m(e,n){a(e,t,n),u(t,s),l||(r=m(t,"click",v),l=!0)},p(s,l){e=s,16&l&&j(t,"selected",e[4]==e[21])},d(e){e&&f(t),l=!1,r()}}}function A(e){let t,s,l,v,k,p,j,V,A,w,J,N,M,B,O,U=e[5],C=[];for(let t=0;t<U.length;t+=1)C[t]=S(I(e,U,t));let H=e[5],q=[];for(let t=0;t<H.length;t+=1)q[t]=x(T(e,H,t));return{c(){t=r(),s=n("div"),l=n("div"),v=n("div");for(let e=0;e<C.length;e+=1)C[e].c();k=r(),p=n("div"),j=n("button"),V=o("<"),A=r(),w=n("button"),J=o(">"),N=r(),M=n("div");for(let e=0;e<q.length;e+=1)q[e].c();this.h()},l(e){E('[data-svelte="svelte-172vdw1"]',document.head).forEach(f),t=g(e),s=i(e,"DIV",{class:!0});var a=c(s);l=i(a,"DIV",{class:!0});var n=c(l);v=i(n,"DIV",{class:!0});var r=c(v);for(let e=0;e<C.length;e+=1)C[e].l(r);k=g(r),p=i(r,"DIV",{class:!0});var o=c(p);j=i(o,"BUTTON",{class:!0});var h=c(j);V=d(h,"<"),h.forEach(f),A=g(o),w=i(o,"BUTTON",{class:!0});var u=c(w);J=d(u,">"),u.forEach(f),o.forEach(f),r.forEach(f),n.forEach(f),a.forEach(f),N=g(e),M=i(e,"DIV",{class:!0});var m=c(M);for(let e=0;e<q.length;e+=1)q[e].l(m);m.forEach(f),this.h()},h(){document.title="Work",h(j,"class","svelte-keosfj"),h(w,"class","svelte-keosfj"),h(p,"class","controls svelte-keosfj"),h(v,"class","inner-wrapper svelte-keosfj"),h(l,"class","outer-wrapper svelte-keosfj"),h(s,"class","extra-outer-wrapper svelte-keosfj"),h(M,"class","dots svelte-keosfj")},m(n,r){a(n,t,r),a(n,s,r),u(s,l),u(l,v);for(let e=0;e<C.length;e+=1)C[e].m(v,null);u(v,k),u(v,p),u(p,j),u(j,V),u(p,A),u(p,w),u(w,J),a(n,N,r),a(n,M,r);for(let e=0;e<q.length;e+=1)q[e].m(M,null);B||(O=[m(window,"keyup",e[11]),m(j,"click",e[14]),m(w,"click",e[15])],B=!0)},p(e,[t]){if(447&t){let s;for(U=e[5],s=0;s<U.length;s+=1){const l=I(e,U,s);C[s]?C[s].p(l,t):(C[s]=S(l),C[s].c(),C[s].m(v,k))}for(;s<C.length;s+=1)C[s].d(1);C.length=U.length}if(80&t){let s;for(H=e[5],s=0;s<H.length;s+=1){const l=T(e,H,s);q[s]?q[s].p(l,t):(q[s]=x(l),q[s].c(),q[s].m(M,null))}for(;s<q.length;s+=1)q[s].d(1);q.length=H.length}},i:D,o:D,d(e){e&&f(t),e&&f(s),y(C,e),e&&f(N),e&&f(M),y(q,e),B=!1,b(O)}}}function w(e,t,s){let l=0,a="none",n="les mer",r=0,o=[{content:"buss.jpg",bg:"gray",text:"Jobbuke i Tide AS"},{content:"maling.jpg",bg:"gray",text:"Jeg malte et hus"},{content:"placeholder.jpg",bg:"gray",text:"Jeg er daglig leder i Teo AS"},{content:"skolen.jpg",bg:"linear-gradient(270deg, rgb(253,230,194), rgb(233,214,200))",text:"Elevbedrift Steinerskolen"}],i=0;function c(e){s(4,i=e)}function g(){"inline"==a?(s(1,a="none"),s(2,n="les mer")):"none"==a&&(s(1,a="inline"),s(2,n="les mindre"))}const d=(e,t,s)=>Math.min(Math.max(e,t),s);function f(e){s(4,i=d(s(4,--i),0,o.length-1))}function v(e){s(4,i=d(s(4,++i),0,o.length-1))}return[l,a,n,r,i,o,c,g,e=>{0===e?(s(0,l='Jeg jobbet i Tide AS i en uke på ungdomskolen da vi hadde noe som het "Jobbuke", det bestod av at vi valgte en bedrift og spurte om vi kunne jobbe der i en uke for å få en følelse av hvordan arbeidslivet er. Hos Tide jobbet jeg med enkle greier som å legge inn riktig data på når og hvor ting som har med busser skjer.'),s(3,r="Tide AS")):1===e?(s(0,l="Sist sommer malte jeg moren min sitt hus, det var en grei mulighet til å tjene penger. Jobben inkluderte å vaske og skrape den gamle malingen, også male to strøk med ny maling. Det var gøy i starten men ikke på slutten så jeg kommer ikke til å gjøre det igjen på en stund!"),s(3,r="Maling")):2===e?(s(0,l="Da jeg ble 18 år gammel, startet jeg mitt eget AS, der jeg er eier og daglig leder. Foreløpig miner jeg kryptovaluta, men skal utvide til andre typer investering/spekulering i fremtiden. Det er ganske gøy men en del arbeid."),s(3,r="Teo AS")):3===e?(s(0,l="Da jeg gikk på steinerskolen laget vi en elevbedrift som gikk ut på å lage naturlig såpe og selge den på eventuelle markeder, jeg jobbet med salg og pakking. Vi tjente greit med penger på det, men såpen var en complete scam altså."),s(3,r="Elevbedrift")):s(0,l="not a page?")},f,v,function(e){37===e.keyCode&&f(),39===e.keyCode&&v()},()=>g(),()=>g(),()=>f(),()=>v(),e=>c(e)]}class J extends e{constructor(e){super(),t(this,e,w,A,s,{})}}export{J as default};
