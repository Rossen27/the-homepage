(function(){"use strict";var e={39:function(e,t,a){var n=a(963),o=a(252);function s(e,t,a,n,s,r){const l=(0,o.up)("Navbar"),i=(0,o.up)("router-view"),c=(0,o.up)("FooTer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",null,[(0,o.Wm)(l),(0,o._)("div",null,[(0,o._)("div",null,[(0,o._)("div",null,[(0,o.Wm)(i)])])]),(0,o.Wm)(c)])])}const r={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},i=(0,o._)("img",{src:"https://rossen.w3spaces.com/Logomark_-_White.png?bypass-cache=22383025",width:"50"},null,-1),c=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},f=(0,o.Uk)("公司介紹"),v={class:"nav-item dropdown"},m=(0,o._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"服務宣告",-1),b={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},h=(0,o._)("div",{class:"dropdown-item",href:"#"},"服務條款",-1),g=(0,o._)("div",{class:"dropdown-item",href:"#"},"隱私政策",-1),w=(0,o._)("li",null,[(0,o._)("hr",{class:"dropdown-divider"})],-1),_=(0,o._)("div",{class:"dropdown-item",href:"#"},"著作權/智慧財產權",-1),y={class:"nav-item dropdown"},x=(0,o._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"會員中心",-1),k={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},C=(0,o._)("div",{class:"dropdown-item",href:"#"},"產品下載",-1),S=(0,o._)("li",null,[(0,o._)("hr",{class:"dropdown-divider"})],-1),A=(0,o._)("div",{class:"dropdown-item",href:"#"},"結果",-1),j={class:"nav-item dropdown"},W=(0,o._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"付款",-1),E={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},T=(0,o._)("div",{class:"dropdown-item",href:"#"},"購買商品",-1),O=(0,o._)("div",{class:"dropdown-item",href:"#"},"付款頁面",-1),P=(0,o._)("li",null,[(0,o._)("hr",{class:"dropdown-divider"})],-1),N=(0,o._)("div",{class:"dropdown-item",href:"#"},"結果",-1),z=(0,o.Uk)("聯絡我們"),D=(0,o._)("form",{class:"d-flex"},[(0,o._)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),(0,o._)("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1);function H(e,t,a,s,H,F){const V=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",r,[(0,o._)("div",l,[(0,o.Wm)(V,{to:"/",class:"navbar-brand"},{default:(0,o.w5)((()=>[i])),_:1}),c,(0,o._)("div",d,[(0,o._)("ul",u,[(0,o._)("li",p,[(0,o.Wm)(V,{to:"/about",class:"nav-link active"},{default:(0,o.w5)((()=>[f])),_:1})]),(0,o._)("li",v,[m,(0,o._)("ul",b,[(0,o._)("li",null,[(0,o.Wm)(V,{to:"/serve1"},{default:(0,o.w5)((()=>[h])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(V,{to:"/serve2"},{default:(0,o.w5)((()=>[g])),_:1})]),w,(0,o._)("li",null,[(0,o.Wm)(V,{to:"/serve3"},{default:(0,o.w5)((()=>[_])),_:1})])])]),(0,o._)("li",y,[x,(0,o._)("ul",k,[(0,o._)("li",null,[(0,o.Wm)(V,{to:"/userInfo"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:"",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>F.logout&&F.logout(...e)),["prevent"])),class:"dropdown-item"},"Logout")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(V,{to:"/productpage"},{default:(0,o.w5)((()=>[C])),_:1})]),S,(0,o._)("li",null,[(0,o.Wm)(V,{to:"/about"},{default:(0,o.w5)((()=>[A])),_:1})])])]),(0,o._)("li",j,[W,(0,o._)("ul",E,[(0,o._)("li",null,[(0,o.Wm)(V,{to:"/about"},{default:(0,o.w5)((()=>[T])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(V,{to:"/about"},{default:(0,o.w5)((()=>[O])),_:1})]),P,(0,o._)("li",null,[(0,o.Wm)(V,{to:"/about"},{default:(0,o.w5)((()=>[N])),_:1})])])]),(0,o.Wm)(V,{to:"/",class:"nav-link active"},{default:(0,o.w5)((()=>[z])),_:1})]),D])])])}var F={methods:{logout(){localStorage.removeItem("token"),this.$router.push("/login")}}},V=a(744);const L=(0,V.Z)(F,[["render",H]]);var M=L;const B={class:"container"},U=(0,o.uE)('<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"><div class="col-md-4 d-flex align-items-center"><a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap" viewBox="0 0 16 16"><path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z"></path><path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"></path></svg></a><span class="text-muted">© 2022 JustHomeWork, Inc</span></div><ul class="nav col-md-4 justify-content-end list-unstyled d-flex"><li class="ms-3"><a class="text-muted" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></a></li><li class="ms-3"><a class="text-muted" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg></a></li><li class="ms-3"><a class="text-muted" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg></a></li></ul></footer>',1),Z=[U];function I(e,t,a,n,s,r){return(0,o.wg)(),(0,o.iD)("div",B,Z)}var q={};const R=(0,V.Z)(q,[["render",I]]);var K=R,G={name:"App",components:{Navbar:M,FooTer:K}};const J=(0,V.Z)(G,[["render",s]]);var Q=J,Y=a(119);function $(e,t,a,n,s,r){const l=(0,o.up)("HomePage");return(0,o.wg)(),(0,o.j4)(l)}const X=(0,o.uE)('<div class="bg-gray-50"><div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"><span class="block">Ready to dive in?</span><span class="block text-indigo-600">Start your free trial today.</span></h2><div class="mt-8 flex lg:mt-0 lg:flex-shrink-0"><div class="inline-flex rounded-md shadow"><a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Get started</a></div><div class="ml-3 inline-flex rounded-md shadow"><a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">Learn more</a></div></div></div></div><div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active" data-bs-interval="3000"><img src="https://picsum.photos/3000/1000?random=1" class="d-block w-100" alt="..."></div><div class="carousel-item" data-bs-interval="3000"><img src="https://picsum.photos/3000/1000?random=2" class="d-block w-100" alt="..."></div><div class="carousel-item" data-bs-interval="3000"><img src="https://picsum.photos/3000/1000?random=3" class="d-block w-100" alt="..."></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div><figure class="text-end"><blockquote class="blockquote"><p>Trust yourself you know more than you think you do.</p></blockquote><figcaption class="blockquote-footer"> Benjamin Spock, <cite title="Source Title">Pediatrician</cite></figcaption></figure>',3);function ee(e,t){return X}const te={},ae=(0,V.Z)(te,[["render",ee]]);var ne=ae,oe={name:"HomeView",components:{HomePage:ne}};const se=(0,V.Z)(oe,[["render",$]]);var re=se;const le={class:"login-wrap"},ie=(0,o._)("div",{class:"login-html"},[(0,o._)("input",{id:"tab-1",type:"radio",name:"tab",class:"sign-in",checked:""}),(0,o._)("label",{for:"tab-1",class:"tab"}," Sign In "),(0,o._)("input",{id:"tab-2",type:"radio",name:"tab",class:"sign-up"}),(0,o._)("label",{for:"tab-2",class:"tab"},"Sign Up"),(0,o._)("div",{class:"login-form"},[(0,o._)("div",{class:"sign-in-htm"},[(0,o._)("div",{class:"group"},[(0,o._)("label",{for:"userName",class:"label"},"Username"),(0,o._)("input",{id:"userName",type:"text",class:"input"})]),(0,o._)("div",{class:"group"},[(0,o._)("label",{for:"password",class:"label"},"Password"),(0,o._)("input",{id:"password",type:"password",class:"input","data-type":"password"})]),(0,o._)("div",{class:"group"},[(0,o._)("input",{id:"check",type:"checkbox",class:"check",checked:""}),(0,o._)("label",{for:"check"},[(0,o._)("span",{class:"icon"}),(0,o.Uk)(" Keep me Signed in ")])]),(0,o._)("div",{class:"google center"},[(0,o._)("form",{action:"?",method:"POST"},[(0,o._)("div",{class:"g-recaptcha","data-sitekey":"6LfhYgIfAAAAABR6Z5WLeSV-oT54UtNfaVodQ_Fl"}),(0,o._)("br")])]),(0,o._)("div",{class:"group"},[(0,o._)("input",{type:"submit",class:"button",value:"Sign In"})]),(0,o._)("div",{class:"hr"}),(0,o._)("div",{class:"foot-lnk"},[(0,o._)("a",{href:"#forgot"},"Forgot Password?")])]),(0,o._)("div",{class:"sign-up-htm"},[(0,o._)("div",{class:"group"},[(0,o._)("label",{for:"user",class:"label"},"Username"),(0,o._)("input",{id:"user",type:"text",class:"input"})]),(0,o._)("div",{class:"group"},[(0,o._)("label",{for:"pass",class:"label"},"Password"),(0,o._)("input",{id:"pass",type:"password",class:"input","data-type":"password"})]),(0,o._)("div",{class:"group"},[(0,o._)("label",{for:"pass",class:"label"},"Repeat Password"),(0,o._)("input",{id:"pass",type:"password",class:"input","data-type":"password"})]),(0,o._)("div",{class:"group"},[(0,o._)("label",{for:"pass",class:"label"},"Email Address"),(0,o._)("input",{id:"pass",type:"text",class:"input"})]),(0,o._)("div",{class:"group"},[(0,o._)("input",{type:"submit",class:"button",value:"Sign Up"})]),(0,o._)("div",{class:"hr"}),(0,o._)("div",{class:"foot-lnk"},[(0,o._)("label",{for:"tab-1"},"Already Member?")])])])],-1),ce=[ie];function de(e,t){return(0,o.wg)(),(0,o.iD)("div",le,ce)}const ue={},pe=(0,V.Z)(ue,[["render",de]]);var fe=pe;const ve=[{path:"/",name:"home",component:re},{path:"/about",name:"about",component:function(){return a.e(720).then(a.bind(a,720))}},{path:"/serve1",name:"serve1",component:function(){return a.e(263).then(a.bind(a,263))}},{path:"/serve2",name:"serve2",component:function(){return a.e(442).then(a.bind(a,442))}},{path:"/serve3",name:"serve3",component:function(){return a.e(699).then(a.bind(a,699))}},{path:"/login",component:fe},{path:"/productpage",name:"productpage",component:function(){return a.e(261).then(a.bind(a,261))}}],me=(0,Y.p7)({history:(0,Y.r5)(),routes:ve});var be=me,he=a(907),ge=(0,he.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),we=(a(244),a(968));(0,n.ri)(Q).use(ge).use(be).use(we.Z).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,s){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],s=e[d][2];for(var l=!0,i=0;i<n.length;i++)(!1&s||r>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(l=!1,s<r&&(r=s));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,o,s]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{261:"c12cee55",263:"5190a53f",442:"d2eba9ce",699:"3e43d23a",720:"6f923a6d"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{263:"39c3dfb8",442:"39c3dfb8",699:"39c3dfb8"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="the-homepage:";a.l=function(n,o,s,r){if(e[n])e[n].push(o);else{var l,i;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){l=u;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+s),l.src=n),e[n]=[o];var p=function(t,a){l.onerror=l.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/the-homepage/"}(),function(){var e=function(e,t,a,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(s){if(o.onerror=o.onload=null,"load"===s.type)a();else{var r=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=r,i.request=l,o.parentNode.removeChild(o),n(i)}};return o.onerror=o.onload=s,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){o=r[n],s=o.getAttribute("data-href");if(s===e||s===t)return o}},n=function(n){return new Promise((function(o,s){var r=a.miniCssF(n),l=a.p+r;if(t(r,l))return o();e(n,l,o,s)}))},o={143:0};a.f.miniCss=function(e,t){var a={263:1,442:1,699:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var s=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=s);var r=a.p+a.u(t),l=new Error,i=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,o[1](l)}};a.l(r,i,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,r=n[0],l=n[1],i=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(i)var d=i(a)}for(t&&t(n);c<r.length;c++)s=r[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},n=self["webpackChunkthe_homepage"]=self["webpackChunkthe_homepage"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(39)}));n=a.O(n)})();
//# sourceMappingURL=app.a83571ae.js.map