webpackJsonp([84],{1633:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function o(n){return v.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function e(n){return v.default.createElement(o,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function p(n){return v.default.createElement(o,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=s(7),u=t(l),i=s(1),r=t(i),d=s(4),k=t(d),g=s(2),f=t(g),h=s(3),m=t(h),y=s(0),v=t(y),w=s(230),D=t(w),b=s(354),C=s(5),_=t(C),E=function(){var n=function(n){function a(){var n,s,t,o;(0,r.default)(this,a);for(var e=arguments.length,p=Array(e),c=0;c<e;c++)p[c]=arguments[c];return s=t=(0,f.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),t.state={visible:!1},t.triggerDialog=function(n){t.setState({visible:n})},o=s,(0,f.default)(t,o)}return(0,m.default)(a,n),(0,k.default)(a,[{key:"render",value:function(){var n=this;return v.default.createElement("div",null,v.default.createElement(b.Button,{type:"primary",onClick:function(){return n.triggerDialog(!0)}},"Show Dialog"),v.default.createElement(b.Dialog,{visible:this.state.visible,onClose:function(){return n.triggerDialog(!1)},title:"Dialog"},v.default.createElement("p",null,"content"),v.default.createElement("p",null,"other content")))}}]),a}(v.default.Component);return v.default.createElement(n,null)},x=function(){var n=b.Dialog.openDialog,a=b.Dialog.closeDialog,s="my_dialog",t=function(){n({dialogId:s,title:"Open the dialog through openDialog",children:v.default.createElement("div",null,"Hello World"),footer:v.default.createElement(b.Button,{onClick:function(){return a(s)}},"Close"),onClose:function(){}})};return v.default.createElement(b.Button,{type:"primary",onClick:t},"Open")},j=function(){var n=b.Dialog.openDialog,a=function(n){function a(){return(0,r.default)(this,a),(0,f.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m.default)(a,n),(0,k.default)(a,[{key:"getChildContext",value:function(){return{shared:"This is from context"}}},{key:"render",value:function(){return v.default.createElement("div",null,this.props.children)}}]),a}(v.default.Component);a.childContextTypes={shared:_.default.string};var s=function(n){function a(){return(0,r.default)(this,a),(0,f.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m.default)(a,n),(0,k.default)(a,[{key:"render",value:function(){return v.default.createElement("span",null,this.context.shared)}}]),a}(v.default.Component);s.contextTypes={shared:_.default.string};var t=function(a){function t(){var a,o,e,p;(0,r.default)(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return o=e=(0,f.default)(this,(a=t.__proto__||Object.getPrototypeOf(t)).call.apply(a,[this].concat(l))),e.open=function(){n({parentComponent:e,title:"openDialog support context",children:v.default.createElement(s,null)})},p=o,(0,f.default)(e,p)}return(0,m.default)(t,a),(0,k.default)(t,[{key:"render",value:function(){return v.default.createElement(b.Button,{type:"primary",onClick:this.open},"Show")}}]),t}(v.default.Component);return v.default.createElement(a,null,v.default.createElement(t,null))},O=function(n){function a(){var n,s,t,o;(0,r.default)(this,a);for(var e=arguments.length,p=Array(e),c=0;c<e;c++)p[c]=arguments[c];return s=t=(0,f.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},o=s,(0,f.default)(t,o)}return(0,m.default)(a,n),(0,k.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return v.default.createElement("div",{className:"zandoc-react-demo"},v.default.createElement("div",{className:"zandoc-react-demo__preview"},e),v.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.default.createElement("div",{className:"zandoc-react-demo__title"},v.default.createElement("p",null,s||"")),v.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.default.createElement("pre",{className:"zandoc-react-demo__code"},v.default.createElement(o,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),B=function(n){function a(){return(0,r.default)(this,a),(0,f.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m.default)(a,n),(0,k.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,D.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return v.default.createElement("div",{className:"zandoc-react-container",key:null},v.default.createElement(p,{style:""}),v.default.createElement(e,{html:'<h2 class="anchor-heading"><a href="#dialog">¶</a><a href="javascript:void(0)" id="dialog" class="anchor-point"></a>Dialog</h2>\n<p>Dialog is used for opening a floating layer.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>\n<p>Imperative, call <code>openDialog</code> function.</p>\n</li>\n<li>\n<p>Component-based, show/hide the dialog  through <code>visible</code> prop.</p>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),v.default.createElement(O,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">triggerDialog</span> <span class="token operator">=</span> visible <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          Show Dialog\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Dialog<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>other content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(E)),v.default.createElement(O,{title:"Set up with openDialog",id:"Demoopen",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog<span class="token punctuation">,</span> closeDialog <span class="token punctuation">}</span> <span class="token operator">=</span> Dialog<span class="token punctuation">;</span>\n<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token string">\'my_dialog\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    dialogId<span class="token punctuation">:</span> id<span class="token punctuation">,</span> <span class="token comment">// id is used to close the dialog</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Open the dialog through openDialog\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    footer<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">closeDialog</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'outer dialog closed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Open<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(x)),v.default.createElement(O,{title:"openDialog with context",id:"Democontext",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog <span class="token punctuation">}</span> <span class="token operator">=</span> Dialog<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ContextProvider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    shared<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      shared<span class="token punctuation">:</span> <span class="token string">\'This is from context\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ContextConsumer</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    shared<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>shared<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'openDialog support context\'</span><span class="token punctuation">,</span>\n      children<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContextConsumer</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>open<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Show<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContextProvider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContextProvider</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(j)),v.default.createElement(e,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Props</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>custom dialog title</td>\n<td>node</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>content of the dialog: \n<code>&#x3C;Dialog>xxxx&#x3C;/Dialog></code></td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>footer</td>\n<td>content of the dialog footer</td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>visibility of the dialog</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>visibility of the close button at the upper right corner</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>close callback</td>\n<td>func</td>\n<td><code>noop</code></td>\n</tr>\n<tr>\n<td>mask</td>\n<td>visibility of the mask</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>wether click on the mask is to close the dialog</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom classname</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>custom style object</td>\n<td>object</td>\n<td><code>{}</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#opendialog">¶</a><a href="javascript:void(0)" id="opendialog" class="anchor-point"></a>openDialog</h4>\n<p><code>openDialog(options: object): function</code></p>\n<p><strong><code>options</code> can contain all props above in addition to <code>visible</code> as well as the following parameters：</strong> </p>\n<table class="table">\n<thead>\n<tr>\n<th>parameter</th>\n<th>description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dialogId</td>\n<td>Optional, the id of dialog. The dialog can be closed throuth \n<code>closeDialog(dialogId)</code>\n.</td>\n<td>string</td>\n<td><code>\'random-id\'</code></td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>Optional, the reference of dialog\'s parent, used to correlate the \n<code>context</code></td>\n<td>ReactInstance</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>A <code>ref</code> function passed to <code>openDialog</code> can provide a reference to the instance, <strong><code>ref</code> in string format is non-supported.</strong></p>\n<blockquote>\n<p>The return value of <code>openDialog</code> is a function which can close the dialog manually, and close the dialog with this function won\'t trigger <code>onClose</code>. <strong>It is recommended to use <code>closeDialog</code>.</strong></p>\n</blockquote>\n<h4 class="anchor-heading"><a href="#closedialog">¶</a><a href="javascript:void(0)" id="closedialog" class="anchor-point"></a>closeDialog</h4>\n<p><code>closeDialog(dialogId: string, options: object): void</code></p>\n<p>If <code>options.triggerOnClose</code> is <code>true</code>, <code>onClose</code> will be triggered when the dialog is closed.</p>\n<h4 class="anchor-heading"><a href="#specify-the-width-of-the-dialo">¶</a><a href="javascript:void(0)" id="specify-the-width-of-the-dialo" class="anchor-point"></a>Specify the width of the Dialog</h4>\n<p>Set a <code>style</code> prop on Dialog can specify its width, e.g. <code>style={{ width: \'600px\' }}</code>.</p>\n<p>By default the pop-up window width will adapt its content, meanwhile it has a minimum width and maximum width.</p>'}))}}]),a}(y.Component);a.default=B}});