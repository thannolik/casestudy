(this.webpackJsonpcasestudy=this.webpackJsonpcasestudy||[]).push([[0],{24:function(e,t,a){e.exports=a(57)},29:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){},33:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),s=(a(29),a(30),a(31),a(32),a(3)),i=a(4),m=a(6),o=a(5),u=a(7),E=(a(33),a(21)),d=a.n(E),p=(a(50),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={search:"",characterlist:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container charlist-container"},l.a.createElement("div",{className:"row"},this.props.characterlist.map((function(e,t){return l.a.createElement("div",{className:"col-lg-3 char-container"},l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{src:e.image,border:"0"}),l.a.createElement("div",{className:"name-tile"},l.a.createElement("p",{className:"item-name"},e.name),l.a.createElement("p",{className:"item-id"},"ID:\xa0",e.id,"\xa0- Created\xa0",e.created))),l.a.createElement("div",{className:"desc-tile"},l.a.createElement("div",{className:"desc-row"},l.a.createElement("p",{className:"desc-col-title"},"STATUS"),l.a.createElement("p",{className:"desc-col-value"},e.status)),l.a.createElement("div",{className:"desc-row"},l.a.createElement("p",{className:"desc-col-title"},"SPECIES"),l.a.createElement("p",{className:"desc-col-value"},e.species)),l.a.createElement("div",{className:"desc-row"},l.a.createElement("p",{className:"desc-col-title"},"GENDER"),l.a.createElement("p",{className:"desc-col-value"},e.gender)),l.a.createElement("div",{className:"desc-row"},l.a.createElement("p",{className:"desc-col-title"},"ORIGIN"),l.a.createElement("p",{className:"desc-col-value"},l.a.createElement("a",{href:e.origin.url},e.origin.name))),l.a.createElement("div",{className:"desc-row"},l.a.createElement("p",{className:"desc-col-title"},"LAST LOCATION"),l.a.createElement("p",{className:"desc-col-value"},l.a.createElement("a",{href:e.location.url},e.location.name)))))}))))}}]),t}(l.a.Component)),h=(a(51),l.a.Component,a(52),l.a.Component,a(22)),v=a(23),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){a.setState({search:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t=a.state.search,n=a.state.characterlist;n=n.filter((function(e){return-1!==e.name.toLowerCase().search(t.toLowerCase())})),console.log(n),a.setState({characterlist:n})},a.handleClick=function(e){var t=e.target.value;t=t.toLowerCase();var n=a.state.characterlist;0!=(n=n.filter((function(e){var a=e.species.toLowerCase();a.search(t);return-1!==a.search(t)}))).length?(document.getElementById("filters").innerText="",document.getElementById("buttonText").style.display="inline-block",document.getElementById("speciesName").innerText=t):(document.getElementById("filters").innerText="",document.getElementById("buttonText").style.display="inline-block",document.getElementById("speciesName").innerText=t,document.getElementById("output").innerText="No Records to Show"),console.log(n.length),a.setState({characterlist:n})},a.state={characterlist:[],species:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://rickandmortyapi.com/api/character/").then((function(t){return e.setState({characterlist:t.data.results})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"filter-box-container"},l.a.createElement("p",{className:"filter-box-title"},"Filters"),l.a.createElement("div",{className:"filter-box"},l.a.createElement("p",{className:"filter-title"},"Species"),l.a.createElement("form",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",name:"species",value:"Human",onClick:this.handleClick}),l.a.createElement("span",null,"Human")),l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",name:"species",value:"Mytholog",onClick:this.handleClick}),l.a.createElement("span",null,"Mytholog")),l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",name:"species",value:"",onClick:this.handleClick}),l.a.createElement("span",null,"Other Species"))))),l.a.createElement("div",{className:"filter-box"},l.a.createElement("p",{className:"filter-title"},"Gender"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",name:"species"}),l.a.createElement("span",null,"Male")),l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",name:"species"}),l.a.createElement("span",null,"Female")))),l.a.createElement("div",{className:"filter-box"},l.a.createElement("p",{className:"filter-title"},"Origin"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",name:"species"}),l.a.createElement("span",null,"Unknown")),l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",name:"species"}),l.a.createElement("span",null,"Post-Apocalyptic Earth")),l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",name:"species"}),l.a.createElement("span",null,"Nuptia 4")),l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",name:"species"}),l.a.createElement("span",null,"Other Origins")))))),l.a.createElement("div",{className:"col-lg-9"},l.a.createElement("div",{className:"search-filter-container"},l.a.createElement("p",{className:"filter-box-title"},"Selected Filters"),l.a.createElement("div",{className:"filters-selected-container"},l.a.createElement("p",{className:"filters-selected",id:"filters"},"No Filters Selected"),l.a.createElement("div",{className:"button-text",id:"buttonText"},l.a.createElement("span",{id:"speciesName"}),l.a.createElement("a",{href:"#"},l.a.createElement(h.a,{icon:v.a})))),l.a.createElement("div",{className:"search-box-container"},l.a.createElement("p",{className:"search-title"},"Search by Name:"),l.a.createElement("div",{className:"search-container"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.handleChange}),l.a.createElement("button",{className:"",onClick:this.onSubmit},"SEARCH"))),l.a.createElement("div",{className:"search-id-container"},l.a.createElement("select",null,l.a.createElement("option",{value:""},"Search By ID")))),l.a.createElement("div",{className:"character-list",id:"output"},l.a.createElement(p,{characterlist:this.state.characterlist}))))))}}]),t}(l.a.Component);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e1b9d649.chunk.js.map