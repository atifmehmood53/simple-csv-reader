(this["webpackJsonpsimple-csv-reader"]=this["webpackJsonpsimple-csv-reader"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=(a(13),a(14),a(1)),s=a(2),o=a(4),u=a(3),m=a(5),p=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"eventHandler",value:function(e){var t=this,a=e.target.files[0];a&&function(e,t){var a=new FileReader;a.onerror=function(e){console.log(e)},a.onloadend=function(e){var a=[],n=e.target.result.split("\n"),r=!0,c=!1,l=void 0;try{for(var i,s=n[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var o=i.value;a.push(o.split(","))}}catch(u){c=!0,l=u}finally{try{r||null==s.return||s.return()}finally{if(c)throw l}}t(a)},a.readAsText(e)}(a,(function(e){t.props.navigator("FileDiplayScreen",e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-group text-dark"},r.a.createElement("label",{htmlFor:"fileInput"},"Please Select a file"),r.a.createElement("input",{type:"file",className:"form-control-file",accept:".csv",onChange:this.eventHandler.bind(this),id:"fileInput"}))}}]),t}(r.a.Component);function f(e){return r.a.createElement("div",{className:"row m-0 text-white align-items-center justify-content-center"},r.a.createElement("div",{className:"main-content card p-sm-5 p-4"},r.a.createElement("h1",{className:"text-center "},r.a.createElement("span",{className:"text-danger"},"<"),r.a.createElement("span",{className:"text-success"},"CSV"),r.a.createElement("span",{className:"text-dark"},"Reader"),r.a.createElement("span",{className:"text-danger"},"/>"),r.a.createElement("div",{className:"h3 p-0 text-sm-right text-dark"}," by ",r.a.createElement("a",{href:"https://linkedin.com/atifmehmood53"},"Atif Mehmood"))),r.a.createElement("hr",{className:"bg-white"}),r.a.createElement(p,{navigator:e.navigator})))}function d(e){return r.a.createElement("th",{className:"cell"},e.value)}function h(e){return r.a.createElement("tr",null,e.values.map((function(e,t){return r.a.createElement(d,{key:t,value:e})})))}function v(e){return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered "},r.a.createElement("tbody",null,e.rows.map((function(e,t){return r.a.createElement(h,{key:t,values:e})})))))}function E(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"display-4 px-4 py-5 text-white"},"Contents of the file are shown bellow",r.a.createElement("hr",null),r.a.createElement("button",{className:"btn py-3 btn-white my-4 py-2",onClick:function(){return e.navigator("FileSelectionScreen")}},"Select a New File")),r.a.createElement("div",{className:"bg-white m-0"},r.a.createElement(v,{rows:e.screenProps})))}var b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={currentScreen:"FileSelectionScreen",screenProps:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"navigator",value:function(e,t){this.setState({currentScreen:e,screenProps:t})}},{key:"render",value:function(){return"FileSelectionScreen"===this.state.currentScreen?r.a.createElement(f,{navigator:this.navigator.bind(this)}):r.a.createElement(E,{navigator:this.navigator.bind(this),screenProps:this.state.screenProps})}}]),t}(r.a.Component);l.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2f8142cf.chunk.js.map