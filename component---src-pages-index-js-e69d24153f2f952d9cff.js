(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},m=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=u(e),a=m(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+l+s+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(C,(0,o.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},C=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.onClick,m=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},p,{onLoad:l,onError:c,onClick:u,ref:t,loading:m,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,m=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,k=e.loading,N=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:O?1:0,transition:V?"opacity "+b+"ms":"none"},s),R="boolean"==typeof h?"lightgray":h,P={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&P,{},s,{},m),x={title:t,alt:this.state.isVisible?"":a,style:T,className:f,itemProp:v};if(p){var W=p,q=W[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),R&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&P)}),q.base64&&d.default.createElement(I,{src:q.base64,spreadProps:x,imageVariants:W,generateSources:w}),q.tracedSVG&&d.default.createElement(I,{src:q.tracedSVG,spreadProps:x,imageVariants:W,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(W),d.default.createElement(C,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:k,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:k},q,{imageVariants:W}))}}))}if(g){var j=g,M=j[0],_=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete _.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},R&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:R,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},V&&P)}),M.base64&&d.default.createElement(I,{src:M.base64,spreadProps:x,imageVariants:j,generateSources:w}),M.tracedSVG&&d.default.createElement(I,{src:M.tracedSVG,spreadProps:x,imageVariants:j,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(j),d.default.createElement(C,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:k,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:k},M,{imageVariants:j}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:V,sizes:z,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=O;t.default=R},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return h}));var r=a("q1tI"),n=a.n(r),i=a("uDNr"),l=a("7vrA"),s=a("3Z9Z"),o=a("JI6e"),d=(a("sg+I"),a("7oih")),c=a("vrFN"),u=a("jFb6"),m=a("Wbzz"),f=a("9eSz"),p=a.n(f);var g=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.photo.img.fluid,a=e.video.img.fluid;return n.a.createElement(d.a,{pageInfo:{pageName:"index"}},n.a.createElement(c.a,{site:u.siteMetadata,title:"Weddings"}),n.a.createElement(i.a,{images:e}),n.a.createElement("div",{className:"main-header-text"},"Vibrant. ",n.a.createElement("br",null),"Alive. ",n.a.createElement("br",null),"Modern. ",n.a.createElement("br",null),"Timeless. ",n.a.createElement("br",null)," Your love captured ",n.a.createElement("span",{className:"special"},"perfectly.")),n.a.createElement("div",{className:"black-section header-text"},n.a.createElement("h1",null,"Philadelphia Wedding Photographer | NJ Wedding Photographer")),n.a.createElement(l.a,null,n.a.createElement("div",{className:"main-info"},n.a.createElement("h2",{className:"your-engaged special"},"You're Engaged!"),n.a.createElement("div",{className:"section-divider"}),n.a.createElement("div",{className:"main-text"},n.a.createElement("p",null,"Now comes the fun part! I'm Brian K, a ",n.a.createElement("h1",null,"Philadelphia & New Jersey wedding photographer & cinematographer"),". My style is bold, vibrant, authentic, & modern.",n.a.createElement("br",null),n.a.createElement("br",null),"But enough about me.",n.a.createElement("br",null),n.a.createElement("br",null),"This is ",n.a.createElement("span",{className:"your"},"your")," day, ",n.a.createElement("span",{className:"your"},"your")," love,",n.a.createElement("span",{className:"your"}," your")," story. I want to beautifully preserve it for a lifetime.",n.a.createElement("br",null),n.a.createElement("br",null),"Wedding planning can be stressful. Lets make this part simple. I will work with you or your team to make sure your day and memories are captured in the best way possible. Take a look around and lets chat!",n.a.createElement("br",null),n.a.createElement("br",null),"- Brian K",n.a.createElement("br",null),n.a.createElement(m.Link,{className:"contact-button",to:"/contact"},"Contact Us"))))),n.a.createElement("div",{className:"gray-section"},n.a.createElement(l.a,null,n.a.createElement(s.a,null,n.a.createElement(o.a,{md:6},n.a.createElement(b,{caption:"Photography",image:t,linkTo:"/photo"})),n.a.createElement(o.a,{md:6},n.a.createElement(b,{caption:"Films",image:a,linkTo:"/video"}))))),n.a.createElement("div",{className:"black-section"},n.a.createElement(l.a,null,n.a.createElement("div",{className:"pricing main-text"},n.a.createElement("h2",{className:"investment"},"Live Video Streaming"),n.a.createElement("div",{className:"section-divider"}),n.a.createElement("p",null,"We know, times have been rough lately. Many of you have been forced to make major decisions or alterations to your plans. We are now offering live streaming services to help your loved ones connect with you during this once in a life time moment. Whether you are scaling down or thinking of going completely virtual, we've got you covered!"),n.a.createElement("br",null),n.a.createElement("p",null,n.a.createElement("b",null,"Standard Streaming")," includes one stationary camera angle streamed to platforms of your choice - starts at $750"),n.a.createElement("p",null,n.a.createElement("b",null,"Premium Streaming")," includes two stationary camera angles with graphics - starts at $1,000"),n.a.createElement("p",null,n.a.createElement("b",null,"All In Streaming")," includes two stationary camera angles with one moving camera: the full broadcast experience! - starts at $1,250")))),n.a.createElement(l.a,null,n.a.createElement("div",{className:"pricing main-text"},n.a.createElement("h2",{className:"investment",id:"investment"},"Investment"),n.a.createElement("div",{className:"section-divider"}),n.a.createElement("p",null,"I know every wedding is unique, with unique needs. Please ",n.a.createElement(m.Link,{to:"/contact"},"contact me")," to discuss your special day."),n.a.createElement("p",null,"Individual (Photography or Video) wedding packages start at $3,000 - includes 2 shooters, 6 hours of coverage, and all high resolution digital images."),n.a.createElement("p",null,"Photography & Video packages start at $5,500."),n.a.createElement("p",null,"Fully designed wedding albums and fine art wall prints are also available as package add ons.."))))},r}(n.a.Component);t.default=g;var h="2359850818",b=function(e){var t=e.image,a=e.linkTo,r=e.caption;return n.a.createElement("figure",{className:"overlay overlay4 main-link"},n.a.createElement(m.Link,{to:a},n.a.createElement("span",{className:"bg"}),n.a.createElement(p.a,{fluid:t,alt:""})),n.a.createElement("figcaption",{className:"d-flex"},n.a.createElement("div",{className:"align-self-center mx-auto"},n.a.createElement("span",{className:"header-text mb-0"},r))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e69d24153f2f952d9cff.js.map