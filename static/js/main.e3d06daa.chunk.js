(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(48),s=a.n(c),o=(a(56),a(4)),i=a(5),l=a(8),u=a(6),m=a(9),p=(a(16),a(7)),d=a.n(p),h=a(15),f=a.n(h),b=a(49),j=a.n(b),O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h5",{className:"address"},this.props.full_address)}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.area?r.a.createElement("h5",null,"\u041f\u043b\u043e\u0449\u0430\u0434\u044c: ",this.props.area):""}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={backgroundColor:"rgba(255,255,255,.1",backgroundImage:"url(".concat(this.props.images[0],")")};return r.a.createElement("div",{className:"image",style:e,title:"\u0424\u043e\u0442\u043e "+this.props.full_address}," ")}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h3",null,"$ ",this.props.price)}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={houses:[],templates:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.defaults.baseURL="http://demo4452328.mockable.io",f.a.all([f.a.get("/properties"),f.a.get("/templates")]).then(f.a.spread(function(t,a){e.setState({houses:t.data.data,templates:a.data}),console.dir(a)})).catch(function(e){console.log(e)}).then(function(){})}},{key:"render",value:function(){if(!this.state.houses.length)return r.a.createElement("img",{src:j.a,className:"loading",alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"});var e;return console.dir(this.state.templates),e=this.state.houses.map(function(e){var t=e.full_address,a=e.images,n=e.price,c=e.area,s=e.id;return r.a.createElement(d.a,{item:!0,xs:6,key:s},r.a.createElement("div",{className:"card"},r.a.createElement(O,{full_address:t}),r.a.createElement(v,{full_address:t,images:a}),r.a.createElement(d.a,{container:!0},r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(E,{price:n})),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(g,{area:c})))))}),r.a.createElement(d.a,{container:!0,spacing:32},e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},16:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},51:function(e,t,a){e.exports=a(152)},56:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.e3d06daa.chunk.js.map