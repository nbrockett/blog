(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return b});n(50),n(182),n(183);var a=n(7),o=n.n(a),r=n(0),i=n.n(r),s=n(162),c=n(4),l=n.n(c),u=n(184),d=n.n(u),m=n(361),p=n(164),f=n(225),h=n(174),y=(n(366),n(171)),g=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.location,a=e.pageContext,o=t.markdownRemark,r=o.id,c=o.frontmatter,l=o.html,u=o.excerpt,g=t.site.siteMetadata.title,b=c.title,v=c.tags,w=a.previous,E=a.next,C=c.tags.concat(c.keywords).toString(),_={identifier:r,title:g},k=v.map(function(e,t){return i.a.createElement("span",{key:"tag-"+t},"#",e)});return i.a.createElement(y.a,{location:n},i.a.createElement(d.a,{title:""+b,meta:[{name:"keywords",content:C},{name:"og:title",content:b},{name:"og:description",content:u}]}),i.a.createElement("div",{className:"blog-post-container"},i.a.createElement("div",{className:"blog-post"},i.a.createElement("div",{className:"post-header"},i.a.createElement("h1",{className:"title"},""+b),i.a.createElement("div",{className:"date"},i.a.createElement(p.a,{icon:f.a,fixedWidth:!0}),c.date),i.a.createElement("div",{className:"tags"},k)),i.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:l}})),i.a.createElement("div",{className:"blog-post-nav"},w&&i.a.createElement("div",{className:"prev"},i.a.createElement("div",{className:"nav-wrap"},i.a.createElement("div",{className:"angle"},i.a.createElement(p.a,{icon:h.a,fixedWidth:!0})),i.a.createElement(s.Link,{to:w.fields.slug,rel:"prev"},i.a.createElement("div",null,i.a.createElement("p",null,"Previous Post"),i.a.createElement("span",null,w.frontmatter.title))))),E&&i.a.createElement("div",{className:"next"},i.a.createElement("div",{className:"nav-wrap"},i.a.createElement(s.Link,{to:E.fields.slug,rel:"next"},i.a.createElement("div",null,i.a.createElement("p",null,"Next Post"),i.a.createElement("span",null,E.frontmatter.title))),i.a.createElement("div",{className:"angle"},i.a.createElement(p.a,{icon:h.b,fixedWidth:!0})))))),i.a.createElement("div",{className:"comments"},i.a.createElement(m.DiscussionEmbed,{shortname:"dev-hundred-blog",config:_})))},t}(i.a.Component);g.propTypes={data:l.a.object.isRequired,location:l.a.object.isRequired,pageContext:l.a.object.isRequired},t.default=g;var b="1815311691"},159:function(e,t,n){var a;e.exports=(a=n(165))&&a.default||a},162:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),o=n.n(a),r=n(4),i=n.n(r),s=n(158),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(25);n.d(t,"waitForRouteChange",function(){return l.c});var u=n(159),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var m=n(35);n.d(t,"parsePath",function(){return m.a});var p=o.a.createContext({}),f=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},165:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),s=n(51),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},166:function(e){e.exports={data:{site:{siteMetadata:{title:"hundred"}}}}},167:function(e,t,n){},169:function(e,t,n){e.exports={title:"hundred",author:"Junho Baik",description:"Junho Baik's blog",siteUrl:"https://junhobaik.github.io",titleLogo:function(){return n(170)},titleLogoShow:!1,googleAnalyticsTrackingId:"UA-103592668-4"}},170:function(e,t,n){e.exports=n.p+"static/profile-84a4704395a2596be588c30aae784e41.png"},171:function(e,t,n){"use strict";var a=n(166),o=n(0),r=n.n(o),i=n(4),s=n.n(i),c=n(184),l=n.n(c),u=n(162),d=n(164),m=n(174),p=(n(167),n(7)),f=n.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{className:"copyright"},r.a.createElement("span",null,"© 2018 Junho Baik"),r.a.createElement("a",{href:"mailto:junhobaik@gmail.com"},"<junhobaik@gmail.com>")),r.a.createElement("div",{className:"submenu"}))},t}(o.Component),y=n(169),g=n.n(y),b=(n(187),n(26),n(188),n(50),n(182),n(183),n(189)),v=new(n.n(b).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Nanum Gothic Coding"]}),w=[{name:"Nanum Gothic Coding",bold:[400,700]},{name:"Nanum Gothic",bold:[400,700]}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),E=(v.rhythm,v.scale,function(e){var t=e.children,n=(e.data,e.location);return r.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){var a;a=n?n.href:g.a.siteUrl;var o=g.a.titleLogoShow?{display:"inline-block"}:{display:"none"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:g.a.description},{name:"og:type",content:"website"},{name:"og:title",content:g.a.title},{name:"og:description",content:g.a.description},{name:"og:image",content:g.a.titleLogo()},{name:"og:url",content:a}]},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+w,rel:"stylesheet"})),r.a.createElement("div",{id:"wrap"},r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"title"},r.a.createElement(u.Link,{to:"/"},r.a.createElement("div",{className:"logo-img",style:o},r.a.createElement("img",{src:g.a.titleLogo(),alt:"logo"})),r.a.createElement("h1",null,g.a.title))),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"home"},r.a.createElement(u.Link,{to:"/"},r.a.createElement(d.a,{icon:m.c,fixedWidth:!0,transform:"down-1"}),r.a.createElement("span",null,"Home"))),r.a.createElement("div",{className:"tags"},r.a.createElement(u.Link,{to:"/taglist"},r.a.createElement(d.a,{icon:m.f,fixedWidth:!0,transform:"down-1"}),r.a.createElement("span",null,"Tags"))),r.a.createElement("div",{className:"search"},r.a.createElement(u.Link,{to:"/search"},r.a.createElement(d.a,{icon:m.d,fixedWidth:!0,transform:"down-1"}),r.a.createElement("span",null,"Search"))))),r.a.createElement("article",{id:"article"},t)),r.a.createElement(h,null))},data:a})});E.propTypes={children:s.a.node.isRequired,location:s.a.object.isRequired};t.a=E},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a=void 0;return function(){var o=this,r=arguments,i=n&&!a;window.clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(o,r)},t),i&&e.apply(o,r)}}},361:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var a=n(362),o=n(363),r=n(364);t.CommentCount=a.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=r.DiscussionEmbed;var i={CommentCount:a.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:r.DiscussionEmbed};t.default=i},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a},s=n(282);var c=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?c():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a},s=n(282);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()},366:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-js-1a28e4742228c5bbb11f.js.map