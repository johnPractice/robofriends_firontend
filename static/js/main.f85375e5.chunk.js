(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(22),n(23),n(6)),l=n(2),i=n(15),u=n(1),h={searchField:""},b={isPending:!1,robots:[],error:""},d=n(16),m=n(4),E=n(5),p=n(8),O=n(7),f=(n(29),function(e){var t=e.id,n=e.email,a=e.name;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-1 pointer"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"photos"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))}),g=function(e){var t=e.robots.map((function(e){return r.a.createElement(f,{email:e.email,id:e.name,name:e.name,key:e.id})}));return r.a.createElement("div",null,t)},v=function(e){var t=e.onSearchChange,n=e.value;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",value:n,onChange:t,className:"pa3 ba b--green hover-bg-lightest-blue",type:"search",placeholder:"search robots"}))},S=function(e){return r.a.createElement("div",null,e.children)},R=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(E.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState(Object(u.a)(Object(u.a)({},this.state),{},{hasError:!0}))}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"OOPS tats not good :("):this.props.children}}]),n}(r.a.Component),j=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"componentWillMount",value:function(){console.log("in component will mount")}},{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){console.log("in render");var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?r.a.createElement("h1",null,"Loading :)"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"blue fw9-ns"},"Robo Friends"),r.a.createElement(v,{onSearchChange:n,value:t}),r.a.createElement(S,null,r.a.createElement(R,null,r.a.createElement(g,{robots:c}))))}}]),n}(r.a.Component),y=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAIL",payload:t})}))}(e)}}}))(j),C=Object(i.createLogger)(),_=Object(l.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(u.a)(Object(u.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(u.a)(Object(u.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAIL":return Object(u.a)(Object(u.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),T=Object(l.d)(_,Object(l.a)(d.a,C));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:T},r.a.createElement(y,null))),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f85375e5.chunk.js.map