(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{217:function(t,e,a){"use strict";a.r(e),a(62);var n=a(1),r=a.n(n),o=a(282),i=a.n(o),c=a(0),s=a.n(c),m=a(224),p=a(236),l=a.n(p),g=a(233),u=a.n(g),h=a(3351),d=a.n(h),f=(a(3368),a(32)),E=a.n(f),y=(a(323),a(377),function(t){function e(e){var a;return(a=t.call(this,e)||this).state={lightbox:!1,photos:JSON.parse(e.photos)},a}E()(e,t);var a=e.prototype;return a.gotoPrevLightboxImage=function(){var t=this.state.photo;this.setState({photo:t-1})},a.gotoNextLightboxImage=function(){var t=this.state.photo;this.setState({photo:t+1})},a.openLightbox=function(t,e){e.preventDefault(),this.setState({lightbox:!0,photo:t})},a.closeLightbox=function(){this.setState({lightbox:!1})},a.render=function(){var t=this,e=this.props.perline,a=this.state.photos;return r.a.createElement(l.a,{container:!0,spacing:24},a.map(function(a,n){return r.a.createElement(l.a,{item:!0,xs:12,sm:12/Number(e),key:n},r.a.createElement("a",{href:a,onClick:function(e){return t.openLightbox(n,e)}},r.a.createElement("img",{src:a})))}))},e}(n.Component));y.propTypes={photos:s.a.string.isRequired,perline:s.a.string.isRequired};var x=y,v=a(238),b=a(240),w=a(272);a.d(e,"pageQuery",function(){return R});var k=new d.a({createElement:r.a.createElement,components:{"photo-composition":x}}).Compiler;function S(t){var e=t.data,a=t.classes,n=t.pageContext,o=e.markdownRemark,c=e.site,s=n.similar,m=c.siteMetadata.siteUrl,p=o.frontmatter,g=o.htmlAst,h=o.excerpt,d=o.timeToRead,f=o.tableOfContents;return r.a.createElement(b.a,{title:"OAsome blog"},r.a.createElement(i.a,null,r.a.createElement("title",null,p.title),r.a.createElement("meta",{name:"description",content:h}),r.a.createElement("meta",{name:"keywords",content:p.tags}),r.a.createElement("meta",{property:"og:site_name",content:"OAsome secrets"}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:p.title}),r.a.createElement("meta",{property:"og:description",content:h}),r.a.createElement("meta",{property:"og:url",content:""+m+p.path}),r.a.createElement("meta",{property:"og:image",content:""+m+p.cover.childImageSharp.fluid.src}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:p.title}),r.a.createElement("meta",{name:"twitter:description",content:h}),r.a.createElement("meta",{name:"twitter:url",content:""+m+p.path}),r.a.createElement("meta",{name:"twitter:image",content:""+m+p.cover.childImageSharp.fluid.src})),r.a.createElement(l.a,{container:!0,spacing:24,className:a.spacer},r.a.createElement(l.a,{item:!0,xs:12,sm:f?10:12},r.a.createElement(w.a,{title:p.title,date:p.date,cover:p.cover,tags:p.tags,content:r.a.createElement("div",{className:a.text},k(g)),expand:!1,photos:p.photos||[],type:p.type,timeToRead:d,country:p.country})),f&&r.a.createElement(l.a,{item:!0,sm:2,className:a.toc},r.a.createElement(u.a,{variant:"title",gutterBottom:!0},"Contents"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:f}}))),s.length>0&&r.a.createElement(l.a,{container:!0,spacing:24,className:a.spacer},r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(u.a,{variant:"display1"},"Similar articles")),s.filter(function(t){return t.frontmatter.title!==p.title}).slice(0,8).map(function(t){return r.a.createElement(l.a,{item:!0,xs:12,sm:6,key:t.frontmatter.title},r.a.createElement(w.a,{title:t.frontmatter.title,date:t.frontmatter.date,cover:t.frontmatter.cover,tags:t.frontmatter.tags,timeToRead:t.timeToRead,type:t.frontmatter.type,content:r.a.createElement(u.a,{component:"p"},t.excerpt),path:t.frontmatter.path,country:p.country,expand:!0}))})))}var R="4191035648";S.propTypes={classes:s.a.shape().isRequired,data:s.a.shape().isRequired,pageContext:s.a.shape().isRequired},e.default=Object(v.a)(Object(m.withStyles)(function(t){var e;return{spacer:{marginBottom:2*t.spacing.unit,marginTop:3*t.spacing.unit},text:Object.assign({},t.typography.body1),toc:(e={top:90,width:162,flexShrink:0,order:2,position:"sticky",wordBreak:"break-word",height:"calc(100vh - 70px)",overflowY:"auto",padding:2*t.spacing.unit+"px "+2*t.spacing.unit+"px "+2*t.spacing.unit+"px 0",display:"none"},e[t.breakpoints.up("sm")]={display:"block"},e["& $ul"]={paddingLeft:2*t.spacing.unit,margin:0,listStyleType:"none"},e["& $li"]={fontSize:14,padding:t.spacing.unit/2+"px 0"},e["& $a"]={color:"rgba(0, 0, 0, 0.54)",textDecoration:"none","&:hover":{color:"black"}},e)}})(S))}}]);
//# sourceMappingURL=component---src-templates-blog-template-jsx-f6fe505215592ae36538.js.map