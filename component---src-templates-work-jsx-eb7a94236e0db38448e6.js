(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return d});a(84),a(169);var r=a(0),n=a.n(r),o=a(163),i=a(174),s=a(166),l=a.n(s),c=a(161);t.default=function(e){var t=e.data,a=t.work,r=t.pictures,s=new RegExp(a.frontmatter.id,"i"),d=r.edges.filter(function(e){return e.node.base.match(s)});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:a.frontmatter.title}),n.a.createElement(o.a,null,n.a.createElement(i.a,null),n.a.createElement("article",{className:"work container container-sm"},n.a.createElement("div",{className:"work-header"},n.a.createElement("h1",null,a.frontmatter.title),n.a.createElement("h3",{className:"muted font-weight-normal"},a.frontmatter.startDate,""!==a.frontmatter.endDate&&n.a.createElement("span",null," – ",a.frontmatter.endDate))),n.a.createElement("div",{className:"work-text",dangerouslySetInnerHTML:{__html:a.html}}),n.a.createElement("div",{className:"work-gallery"},""!==a.frontmatter.video&&n.a.createElement("div",{className:"work-video"},n.a.createElement("iframe",{src:a.frontmatter.video,title:a.frontmatter.title+" trailer",width:"100%",height:"100%",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})),d.map(function(e){var t=e.node;return n.a.createElement(l.a,{key:t.id,fluid:t.childImageSharp.fluid,title:a.frontmatter.title+" photograph",alt:a.frontmatter.title+" photograph",style:{width:"100%",marginBottom:"0.75rem",display:"inline-block"},imgStyle:{height:"auto"}})})),a.frontmatter.photographer&&n.a.createElement("div",{className:"work-credits"},n.a.createElement("small",null,"Photography: ",a.frontmatter.photographer)))))};var d="1010572045"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Olympia Bukkakis",author:"Vincent Reynaud <mail@vincentreynaud.de>"}}}}},161:function(e,t,a){"use strict";var r=a(162),n=a(0),o=a.n(n),i=a(1),s=a.n(i),l=a(179),c=a.n(l);function d(e){var t=e.lang,a=e.title,n=e.description,i=r.data.site,s=n||i.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:t},title:a?a+" ― "+i.siteMetadata.title:i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:a},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:s}]})}d.defaultProps={lang:"en",meta:[],description:"Olympia Bukkakis' performer portfolio website"},d.propTypes={lang:s.a.string,title:s.a.string,meta:s.a.arrayOf(s.a.object),description:s.a.string},t.a=d},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Olympia Bukkakis",description:"Olympia Bukkakis' static portfolio website",author:"Vincent Reynaud <mail@vincentreynaud.de>"}}}}},163:function(e,t,a){"use strict";var r=a(8),n=a.n(r),o=a(160),i=a(0),s=a.n(i),l=a(1),c=a.n(l),d=a(56),u=a(159),f=a.n(u),p=(a(79),a(80),a(175),a(217)),m=a(218),h=a(219),g=a(220),v=a(221),w=a(222),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.toggleActiveClass=function(e){e.target.classList.includes("active")?e.target.classList.remove("active"):e.target.classList.add("active")},a.state={isOpen:!1},a}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.hideNav,r=void 0!==a&&a,n=e.scaleUp;return s.a.createElement(p.a,{expand:"xl",className:"flex-column align-items-start"},s.a.createElement("div",{className:"d-flex justify-content-between align-items-center w-100"},s.a.createElement(m.a,{style:n&&{fontSize:"7.2rem",left:"12vw"},href:"/about"},t),s.a.createElement(h.a,{className:"nav-link top right",onClick:this.toggle},"MENU")),s.a.createElement(g.a,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(v.a,{className:"navbar-nav ml-auto nav-list"},s.a.createElement(w.a,null,s.a.createElement(d.Link,{className:f()({"nav-link":!0,bottom:!0,hide:r}),to:"/#work",activeClassName:"active",partiallyActive:!0},"Work")),s.a.createElement(w.a,null,s.a.createElement(d.Link,{className:f()({"nav-link":!0,top:!0,hide:r}),to:"/events",activeClassName:"active",partiallyActive:!0},"Events")))))},t}(i.Component),b=(a(176),function(e){function t(){var t;return(t=e.call(this)||this).handleScroll=function(e){var a=e.deltaX,r=e.deltaY;Math.abs(r)>Math.abs(a)&&t.setState({scrollDown:e.deltaY>0}),t.toggleFooter(),t.setState({scrollDown:null})},t.handleTouchStart=function(e){t.setState({touchStartX:e.touches[0].screenX,touchStartY:e.touches[0].screenY})},t.handleTouchMove=function(e){if(t.state.touchStartY){var a=e.touches[0].screenX,r=e.touches[0].screenY,n=t.state.touchStartX-a,o=t.state.touchStartY-r;Math.abs(o)>Math.abs(n)&&t.setState({scrollDown:o>0}),t.toggleFooter(),t.setState({updated:!0}),t.setState({touchStartX:null,touchStartY:null,scrollDown:null})}},t.isPageBottom=function(){return window.innerHeight+window.scrollY>=document.body.offsetHeight},t.toggleFooter=function(){t.state.scrollDown&&t.isPageBottom()?t.show(t.state.footer):t.state.scrollDown||t.hide(t.state.footer)},t.show=function(e){e.classList.contains("footer-hide")&&(e.classList.remove("footer-hide"),e.classList.add("footer-show"))},t.hide=function(e){!e.classList.contains("footer-show")&&e.classList.contains("footer-hide")||(e.classList.remove("footer-show"),e.classList.add("footer-hide"))},t.state={scrollDown:!1,footer:null,updated:null,touchStartX:null,touchStartY:null},t}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({footer:document.getElementById("footer")}),window.onwheel=function(t){e.handleScroll(t)},window.ontouchstart=function(t){e.handleTouchStart(t)},window.ontouchmove=function(t){e.handleTouchMove(t)}},a.render=function(){return s.a.createElement("footer",{className:"w-100 footer-hide row justify-content-between",id:"footer"},s.a.createElement("p",{className:"mb-1 col-12 col-sm text-nowrap"},s.a.createElement("small",null,"Olympia Bukkakis © ",(new Date).getFullYear())),s.a.createElement("p",{className:"footer-credit"},s.a.createElement("small",null,"Website by"," ",s.a.createElement("a",{rel:"noopener noreferrer",className:"text-nowrap",href:"https://www.instagram.com/collectiveanxiety/",target:"_blank"},"Vincent Reynaud"))))},t}(i.Component));var E=function(){return s.a.createElement("button",{className:"to-top bottom right",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.a.createElement("path",{d:"M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z"})))},S=(a(177),a(178),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={scrollY:0,navLinks:null},a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.onscroll=function(){e.setState({scrollY:window.scrollY}),e.props.handleScroll&&e.props.handleScroll()}},a.render=function(){var e=this,t=this.props,a=t.children,r=t.themeLight,n=t.hideNav,i=t.scaleUp;return s.a.createElement(d.StaticQuery,{query:L,render:function(t){return s.a.createElement("div",{className:f()({layout:!0,"theme-dark":!r,"theme-light":r})},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-nav col-xl-4"},s.a.createElement(y,{title:t.site.siteMetadata.title,handleScroll:e.handleScroll,hideNav:n,scaleUp:i})),s.a.createElement("div",{className:"col-main col-xl-8"},s.a.createElement("main",{className:"main"},a),e.state.scrollY>600&&s.a.createElement(E,null))),s.a.createElement("div",{className:"row"},s.a.createElement(b,{authors:t.site.siteMetadata.author})))},data:o})},t}(i.Component)),L="903436763";S.propTypes={children:c.a.node.isRequired};t.a=S},166:function(e,t,a){"use strict";var r=a(9);t.__esModule=!0,t.default=void 0;var n,o=r(a(8)),i=r(a(36)),s=r(a(78)),l=r(a(77)),c=r(a(0)),d=r(a(1)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,g=h&&window.IntersectionObserver,v=new WeakMap;var w=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+l+a+n+t+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,o=e.style,i=e.onLoad,d=e.onError,u=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},f,{onLoad:i,onError:d,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&g&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)((0,i.default)(a))),a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,o=void 0===n?{}:n,i=e.imgStyle,s=void 0===i?{}:i,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,g=e.backgroundColor,v=e.durationFadeIn,w=e.Tag,E=e.itemProp,S=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:L?1:0,transition:k?"opacity "+v+"ms":"none"},s),O="boolean"==typeof g?"lightgray":g,R={transitionDelay:v+"ms"},I=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&R,s,f),x={title:t,alt:this.state.isVisible?"":a,style:I,className:p};if(m){var M=m;return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),O&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&R)}),M.base64&&c.default.createElement(b,(0,l.default)({src:M.base64},x)),M.tracedSVG&&c.default.createElement(b,(0,l.default)({src:M.tracedSVG},x)),this.state.isVisible&&c.default.createElement("picture",null,M.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:a,title:t,loading:S},M))}}))}if(h){var z=h,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},o);return"inherit"===o.display&&delete C.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},O&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:O,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},k&&R)}),z.base64&&c.default.createElement(b,(0,l.default)({src:z.base64},x)),z.tracedSVG&&c.default.createElement(b,(0,l.default)({src:z.tracedSVG},x)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(b,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:a,title:t,loading:S},z))}}))}return null},t}(c.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:S,sizes:L,fixed:S,fluid:L,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var k=E;t.default=k},169:function(e,t,a){var r=a(6),n=a(170),o=a(26).f,i=a(173).f,s=a(59),l=a(81),c=r.RegExp,d=c,u=c.prototype,f=/a/g,p=/a/g,m=new c(f)!==f;if(a(15)&&(!m||a(20)(function(){return p[a(4)("match")]=!1,c(f)!=f||c(p)==p||"/a/i"!=c(f,"i")}))){c=function(e,t){var a=this instanceof c,r=s(e),o=void 0===t;return!a&&r&&e.constructor===c&&o?e:n(m?new d(r&&!o?e.source:e,t):d((r=e instanceof c)?e.source:e,r&&o?l.call(e):t),a?this:u,c)};for(var h=function(e){e in c||o(c,e,{configurable:!0,get:function(){return d[e]},set:function(t){d[e]=t}})},g=i(d),v=0;g.length>v;)h(g[v++]);u.constructor=c,c.prototype=u,a(16)(r,"RegExp",c)}a(87)("RegExp")},170:function(e,t,a){var r=a(12),n=a(171).set;e.exports=function(e,t,a){var o,i=t.constructor;return i!==a&&"function"==typeof i&&(o=i.prototype)!==a.prototype&&r(o)&&n&&n(e,o),e}},171:function(e,t,a){var r=a(12),n=a(5),o=function(e,t){if(n(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=a(21)(Function.call,a(172).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,a){return o(e,a),t?e.__proto__=a:r(e,a),e}}({},!1):void 0),check:o}},172:function(e,t,a){var r=a(86),n=a(57),o=a(37),i=a(83),s=a(27),l=a(82),c=Object.getOwnPropertyDescriptor;t.f=a(15)?c:function(e,t){if(e=o(e),t=i(t,!0),l)try{return c(e,t)}catch(a){}if(s(e,t))return n(!r.f.call(e,t),e[t])}},173:function(e,t,a){var r=a(85),n=a(58).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,n)}},174:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(){return n.a.createElement("button",{className:"back top right",onClick:function(){return window.history.back()}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.a.createElement("path",{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"})))}}}]);
//# sourceMappingURL=component---src-templates-work-jsx-eb7a94236e0db38448e6.js.map