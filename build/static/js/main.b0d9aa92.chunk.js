(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),s=(a(70),a(40)),i=a(6),l=a(7),u=a(10),m=a(8),p=a(11),h=a(17),d=a.n(h),f=a(64),b=a.n(f),j=a(9),O=a.n(j),v=(a(18),a(62)),g=a.n(v),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h5",{className:"address"},this.props.full_address)}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.area?r.a.createElement("h5",{className:"area"},r.a.createElement("span",{className:"label"},"\u041f\u043b\u043e\u0449\u0430\u0434\u044c: "),this.props.area,r.a.createElement("span",{className:"label"}," \u043c",r.a.createElement("sup",null,"2"))):""}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={backgroundColor:"rgba(255,255,255,.1",backgroundImage:"url(".concat(this.props.images[0],")")};return r.a.createElement("div",{className:"image",style:e,title:"\u0424\u043e\u0442\u043e "+this.props.full_address},this.props.children)}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h2",{className:"price"},"$ ",this.props.price)}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={houses:[],templates:[],templateN:0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.defaults.baseURL="https://demo4452328.mockable.io",d.a.all([d.a.get("/properties"),d.a.get("/templates")]).then(d.a.spread(function(t,a){e.setState({houses:t.data.data,templates:a.data,templateN:0}),console.dir(a)})).catch(function(e){console.log(e)}).then(function(){})}},{key:"getComponent",value:function(e){if(e)return{IMAGE:y,ADDRESS:E,PRICE:w,AREA:k}[e]}},{key:"setTemplate",value:function(e){this.setState({templateN:e})}},{key:"render",value:function(){var e=this;if(!this.state.houses.length)return r.a.createElement("img",{src:g.a,className:"loading",alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"});console.dir(this.state.templates);var t=this.state.houses.map(function(t){return r.a.createElement(O.a,{item:!0,xs:6,key:t.id},r.a.createElement("div",{className:"card"},e.state.templates[e.state.templateN].template.map(function(a){var n=a.component,c=a.field,o=a.children,i=null;return o&&(i=o.map(function(a){var n=a.component,c=a.field;return r.a.createElement(e.getComponent(n),Object(s.a)({},c,t[c]),null)})),r.a.createElement(e.getComponent(n),Object(s.a)({},c,t[c]),i)})))});return r.a.createElement(O.a,{container:!0,spacing:32},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(O.a,{container:!0,spacing:16},this.state.templates.map(function(t,a){return r.a.createElement(O.a,{item:!0,xs:1},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(t){return e.setTemplate(a)}},a+1))}))),t)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},18:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},65:function(e,t,a){e.exports=a(178)},70:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.b0d9aa92.chunk.js.map