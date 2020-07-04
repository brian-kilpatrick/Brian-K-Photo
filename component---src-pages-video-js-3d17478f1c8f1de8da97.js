(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{CnBM:function(e,t,o){"use strict";o("91GP"),o("VRzm"),o("XfO3"),o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("8+KV"),o("LK8F"),o("/SS/"),o("hHhE"),o("rE2o"),o("ioFf");var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=o("q1tI"),u=o("17x9"),c=[],s=[];function d(e){var t=e(),o={loading:!0,loaded:null,error:null};return o.promise=t.then((function(e){return o.loading=!1,o.loaded=e,e})).catch((function(e){throw o.loading=!1,o.error=e,e})),o}function p(e){var t={loading:!1,loaded:{},error:null},o=[];try{Object.keys(e).forEach((function(n){var r=d(e[n]);r.loading?t.loading=!0:(t.loaded[n]=r.loaded,t.error=r.error),o.push(r.promise),r.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(o).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function f(e,t){return l.createElement((o=e)&&o.__esModule?o.default:o,t);var o}function h(e,t){var d,p;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var h=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:f,webpack:null,modules:null},t),m=null;function y(){return m||(m=e(h.loader)),m.promise}return c.push(y),"function"==typeof h.webpack&&s.push((function(){if(e=h.webpack,"object"===n(o.m)&&e().every((function(e){return void 0!==e&&void 0!==o.m[e]})))return y();var e})),p=d=function(t){function o(n){r(this,o);var a=i(this,t.call(this,n));return a.retry=function(){a.setState({error:null,loading:!0,timedOut:!1}),m=e(h.loader),a._loadModule()},y(),a.state={error:m.error,pastDelay:!1,timedOut:!1,loading:m.loading,loaded:m.loaded},a}return a(o,t),o.preload=function(){return y()},o.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},o.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(h.modules)&&h.modules.forEach((function(t){e.context.loadable.report(t)})),m.loading){"number"==typeof h.delay&&(0===h.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),h.delay)),"number"==typeof h.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),h.timeout));var t=function(){e._mounted&&(e.setState({error:m.error,loaded:m.loaded,loading:m.loading}),e._clearTimeouts())};m.promise.then((function(){t()})).catch((function(e){t()}))}},o.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},o.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},o.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(h.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?h.render(this.state.loaded,this.props):null},o}(l.Component),d.contextTypes={loadable:u.shape({report:u.func.isRequired})},p}function m(e){return h(d,e)}m.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return h(p,e)};var y=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return l.Children.only(this.props.children)},t}(l.Component);function b(e){for(var t=[];e.length;){var o=e.pop();t.push(o())}return Promise.all(t).then((function(){if(e.length)return b(e)}))}y.propTypes={report:u.func.isRequired},y.childContextTypes={loadable:u.shape({report:u.func.isRequired}).isRequired},m.Capture=y,m.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},m.preloadReady=function(){return new Promise((function(e,t){b(s).then(e,e)}))},e.exports=m},smcw:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n),i=(o("uDNr"),o("7vrA")),a=(o("sg+I"),o("7oih")),l=o("vrFN"),u=o("jFb6"),c=o("CnBM"),s=o.n(c);o("TTHh");var d=s()({loader:function(){return Promise.all([o.e(0),o.e(8)]).then(o.t.bind(null,"kmvY",7))},loading:function(){return r.a.createElement("div",null)}}),p=function(e){var t,o;function n(){return e.apply(this,arguments)||this}return o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,n.prototype.render=function(){this.props.data;return r.a.createElement(a.a,{pageInfo:{pageName:"index"}},r.a.createElement(l.a,{site:u.siteMetadata,title:"Wedding Videography"}),r.a.createElement("div",{className:"black-section sub-intro"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"header-text sub-header"},"Films"))),r.a.createElement(i.a,null,r.a.createElement(d,{type:"vimeo",videoId:"383367094"}),r.a.createElement(d,{type:"vimeo",videoId:"374926472"}),r.a.createElement(d,{type:"vimeo",videoId:"370508327"})))},n}(r.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-video-js-3d17478f1c8f1de8da97.js.map