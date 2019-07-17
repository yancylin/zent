webpackJsonp([82],{1602:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function e(n){return y.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function p(n){return y.default.createElement(e,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return y.default.createElement(e,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=s(7),u=t(l),i=s(1),k=t(i),r=s(4),d=t(r),m=s(2),g=t(m),f=s(3),v=t(f),h=s(0),y=t(h),P=s(232),E=t(P),C=s(359),M=function(){var n=C.Menu.MenuItem;return y.default.createElement(C.Popover,{position:C.Popover.Position.AutoBottomLeft,display:"inline",cushion:5},y.default.createElement(C.Popover.Trigger.Click,null,y.default.createElement(C.Button,{type:"primary"},"Click")),y.default.createElement(C.Popover.Content,null,y.default.createElement(C.Menu,null,y.default.createElement(n,null,"Food"),y.default.createElement(n,null,"Clothing"))))},b=function(){var n=C.Menu.MenuItem;return y.default.createElement(C.Popover,{position:C.Popover.Position.AutoBottomLeft,display:"inline",cushion:5},y.default.createElement(C.Popover.Trigger.Hover,null,y.default.createElement(C.Button,{type:"primary"},"Hover")),y.default.createElement(C.Popover.Content,null,y.default.createElement(C.Menu,null,y.default.createElement(n,null,"Food"),y.default.createElement(n,null,"Clothing"))))},w=function(){var n=C.Menu.MenuItem,a=function(a){function s(){var n,a,t,e;(0,k.default)(this,s);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return a=t=(0,g.default)(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(o))),t.state={visible:!1},e=a,(0,g.default)(t,e)}return(0,v.default)(s,a),(0,d.default)(s,[{key:"render",value:function(){var a=this;return y.default.createElement(C.Popover,{visible:this.state.visible,onVisibleChange:function(n){return a.setState({visible:n})},position:C.Popover.Position.AutoBottomLeft,display:"inline",cushion:5},y.default.createElement(C.Popover.Trigger.Click,null,y.default.createElement(C.Button,{type:"primary"},"Click")),y.default.createElement(C.Popover.Content,null,y.default.createElement(C.Menu,{onClick:function(){return a.setState({visible:!1})}},y.default.createElement(n,null,"Close menu"),y.default.createElement(n,null,"Close menu"))))}}]),s}(h.Component);return y.default.createElement(a,null)},_=function(n){function a(){var n,s,t,e;(0,k.default)(this,a);for(var p=arguments.length,o=Array(p),c=0;c<p;c++)o[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},e=s,(0,g.default)(t,e)}return(0,v.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return y.default.createElement("div",{className:"zandoc-react-demo"},y.default.createElement("div",{className:"zandoc-react-demo__preview"},p),y.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.default.createElement("div",{className:"zandoc-react-demo__title"},y.default.createElement("p",null,s||"")),y.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.default.createElement("pre",{className:"zandoc-react-demo__code"},y.default.createElement(e,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(h.Component),I=function(n){function a(){return(0,k.default)(this,a),(0,g.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,v.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,E.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return y.default.createElement("div",{className:"zandoc-react-container",key:null},y.default.createElement(o,{style:""}),y.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#dropdown">¶</a><a href="javascript:void(0)" id="dropdown" class="anchor-point"></a>Dropdown</h2>\n<p>A component pops down.</p>\n<p>We don\'t provide a specific component called <code>Dropdown</code>. The function of <code>Dropdown</code> component is a subset of function of <code>Popover</code> component. This doc decribes how to use <code>Popover</code> to implement a <code>Dropdown</code>.</p>\n<h3 class="anchor-heading"><a href="#usage">¶</a><a href="javascript:void(0)" id="usage" class="anchor-point"></a>Usage</h3>\n<p>Generally, the component is used for dropdown menu.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),y.default.createElement(_,{title:"Click to open",id:"Democlick",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MenuItem <span class="token punctuation">}</span> <span class="token operator">=</span> Menu<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>\n    <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>AutoBottomLeft<span class="token punctuation">}</span></span>\n    <span class="token attr-name">display</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>\n    <span class="token attr-name">cushion</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Content</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Food<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Clothing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Content</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(M)),y.default.createElement(_,{title:"Hover to open",id:"Demohover",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MenuItem <span class="token punctuation">}</span> <span class="token operator">=</span> Menu<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>\n    <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>AutoBottomLeft<span class="token punctuation">}</span></span>\n    <span class="token attr-name">display</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>\n    <span class="token attr-name">cushion</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Trigger.Hover</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Trigger.Hover</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Content</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Food<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Clothing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Content</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(b)),y.default.createElement(_,{title:"Click to close",id:"Democlose",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MenuItem <span class="token punctuation">}</span> <span class="token operator">=</span> Menu<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PopoverDemo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    visible<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Popover\n        visible<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span>\n        onVisibleChange<span class="token operator">=</span><span class="token punctuation">{</span>v <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> v <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        position<span class="token operator">=</span><span class="token punctuation">{</span>Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>AutoBottomLeft<span class="token punctuation">}</span>\n        display<span class="token operator">=</span><span class="token string">"inline"</span>\n        cushion<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Content</span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>Menu onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Close menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Close menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Content</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopoverDemo</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(w)),y.default.createElement(p,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Please refer <a href="popover#api">the api doc of <code>Popover</code></a>.</p>\n<h3 class="anchor-heading"><a href="#about-position">¶</a><a href="javascript:void(0)" id="about-position" class="anchor-point"></a>About position</h3>\n<p>It\'s recommanded to use <code>AutoXxxYxx</code> provided by <code>Popover</code> for positioning. E.g. it\'s positioned below the lower left corner, but the position will be adjusted if it\'s out of the screen.</p>\n<p>Alternative ways for positioning can be refered to <a href="popover#position%20api">the   position doc of <code>Popover</code></a>。</p>'}))}}]),a}(h.Component);a.default=I}});