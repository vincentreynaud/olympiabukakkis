(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(56),r=a(163),i=a(161);e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{title:"Not found"}),o.a.createElement(r.a,null,o.a.createElement("div",{className:"container container-sm"},o.a.createElement("h2",null,"NOT FOUND"),o.a.createElement("div",null,"This page doesn't exist "),o.a.createElement(l.Link,{to:"/"},o.a.createElement("div",null,"Go home")))))}},160:function(t){t.exports={data:{site:{siteMetadata:{title:"Olympia Bukkakis",author:"Vincent Reynaud <mail@vincentreynaud.de>"}}}}},161:function(t,e,a){"use strict";var n=a(162),o=a(0),l=a.n(o),r=a(1),i=a.n(r),s=a(179),c=a.n(s);function u(t){var e=t.lang,a=t.title,o=t.description,r=n.data.site,i=o||r.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:e},title:a?a+" ― "+r.siteMetadata.title:r.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:a},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:i}]})}u.defaultProps={lang:"en",meta:[],description:"Olympia Bukkakis' performer portfolio website"},u.propTypes={lang:i.a.string,title:i.a.string,meta:i.a.arrayOf(i.a.object),description:i.a.string},e.a=u},162:function(t){t.exports={data:{site:{siteMetadata:{title:"Olympia Bukkakis",description:"Olympia Bukkakis' static portfolio website",author:"Vincent Reynaud <mail@vincentreynaud.de>"}}}}},163:function(t,e,a){"use strict";var n=a(8),o=a.n(n),l=a(160),r=a(0),i=a.n(r),s=a(1),c=a.n(s),u=a(56),m=a(159),d=a.n(m),h=(a(78),a(79),a(172),a(212)),p=a(213),f=a(214),v=a(217),w=a(215),g=a(216),E=function(t){function e(e){var a;return(a=t.call(this,e)||this).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.toggleActiveClass=function(t){t.target.classList.includes("active")?t.target.classList.remove("active"):t.target.classList.add("active")},a.state={isOpen:!1},a}return o()(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.hideNav,n=void 0!==a&&a,o=t.scaleUp;return i.a.createElement(h.a,{expand:"xl",className:"flex-column align-items-start"},i.a.createElement("div",{className:"d-flex justify-content-between align-items-center w-100"},i.a.createElement(p.a,{style:o&&{fontSize:"7.2rem",left:"12vw"},href:"/about"},e),i.a.createElement(f.a,{className:"nav-link top right",onClick:this.toggle},"MENU")),i.a.createElement(v.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(w.a,{className:"navbar-nav ml-auto nav-list"},i.a.createElement(g.a,null,i.a.createElement(u.Link,{className:d()({"nav-link":!0,bottom:!0,hide:n}),to:"/#work",activeClassName:"active",partiallyActive:!0},"Work")),i.a.createElement(g.a,null,i.a.createElement(u.Link,{className:d()({"nav-link":!0,top:!0,hide:n}),to:"/events",activeClassName:"active",partiallyActive:!0},"Events")))))},e}(r.Component),y=(a(176),function(t){function e(){var e;return(e=t.call(this)||this).handleScroll=function(t){var a=t.deltaX,n=t.deltaY;Math.abs(n)>Math.abs(a)&&e.setState({scrollDown:t.deltaY>0}),e.toggleFooter(),e.setState({scrollDown:null})},e.handleTouchStart=function(t){e.setState({touchStartX:t.touches[0].screenX,touchStartY:t.touches[0].screenY})},e.handleTouchMove=function(t){if(e.state.touchStartY){var a=t.touches[0].screenX,n=t.touches[0].screenY,o=e.state.touchStartX-a,l=e.state.touchStartY-n;Math.abs(l)>Math.abs(o)&&e.setState({scrollDown:l>0}),e.toggleFooter(),e.setState({updated:!0}),e.setState({touchStartX:null,touchStartY:null,scrollDown:null})}},e.isPageBottom=function(){return window.innerHeight+window.scrollY>=document.body.offsetHeight},e.toggleFooter=function(){e.state.scrollDown&&e.isPageBottom()?e.show(e.state.footer):e.state.scrollDown||e.hide(e.state.footer)},e.show=function(t){t.classList.contains("footer-hide")&&(t.classList.remove("footer-hide"),t.classList.add("footer-show"))},e.hide=function(t){!t.classList.contains("footer-show")&&t.classList.contains("footer-hide")||(t.classList.remove("footer-show"),t.classList.add("footer-hide"))},e.state={scrollDown:!1,footer:null,updated:null,touchStartX:null,touchStartY:null},e}o()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=this;this.setState({footer:document.getElementById("footer")}),window.onwheel=function(e){t.handleScroll(e)},window.ontouchstart=function(e){t.handleTouchStart(e)},window.ontouchmove=function(e){t.handleTouchMove(e)}},a.render=function(){return i.a.createElement("footer",{className:"w-100 footer-hide row justify-content-between",id:"footer"},i.a.createElement("p",{className:"mb-1 col-12 col-sm text-nowrap"},i.a.createElement("small",null,"Olympia Bukkakis © ",(new Date).getFullYear())),i.a.createElement("p",{className:"footer-credit"},i.a.createElement("small",null,"Website by"," ",i.a.createElement("a",{rel:"noopener noreferrer",className:"text-nowrap",href:"https://www.instagram.com/collectiveanxiety/",target:"_blank"},"Vincent Reynaud"))))},e}(r.Component));var k=function(){return i.a.createElement("button",{className:"to-top bottom right",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})}},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z"})))},S=(a(177),a(178),function(t){function e(e){var a;return(a=t.call(this,e)||this).state={scrollY:0,navLinks:null},a}o()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=this;window.onscroll=function(){t.setState({scrollY:window.scrollY}),t.props.handleScroll&&t.props.handleScroll()}},a.render=function(){var t=this,e=this.props,a=e.children,n=e.themeLight,o=e.hideNav,r=e.scaleUp;return i.a.createElement(u.StaticQuery,{query:N,render:function(e){return i.a.createElement("div",{className:d()({layout:!0,"theme-dark":!n,"theme-light":n})},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-nav col-xl-4"},i.a.createElement(E,{title:e.site.siteMetadata.title,handleScroll:t.handleScroll,hideNav:o,scaleUp:r})),i.a.createElement("div",{className:"col-main col-xl-8"},i.a.createElement("main",{className:"main"},a),t.state.scrollY>600&&i.a.createElement(k,null))),i.a.createElement("div",{className:"row"},i.a.createElement(y,{authors:e.site.siteMetadata.author})))},data:l})},e}(r.Component)),N="903436763";S.propTypes={children:c.a.node.isRequired};e.a=S}}]);
//# sourceMappingURL=component---src-pages-404-jsx-d5f5651ff9686333ca28.js.map