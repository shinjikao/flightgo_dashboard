webpackJsonp([21],{255:function(e,a,t){"use strict";function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function r(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function n(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var c=t(0),m=t.n(c),s=t(11),o=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),u=function(e){function a(){return l(this,a),r(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return n(a,e),o(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(s.i,null,m.a.createElement(s.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("a",{href:"https://reactstrap.github.io/components/progress/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},m.a.createElement("small",{className:"text-muted"},"docs")))),m.a.createElement(s.j,null,m.a.createElement("div",{className:"text-center"},"0%"),m.a.createElement(s._6,null),m.a.createElement("div",{className:"text-center"},"25%"),m.a.createElement(s._6,{value:"25"}),m.a.createElement("div",{className:"text-center"},"50%"),m.a.createElement(s._6,{value:50}),m.a.createElement("div",{className:"text-center"},"75%"),m.a.createElement(s._6,{value:75}),m.a.createElement("div",{className:"text-center"},"100%"),m.a.createElement(s._6,{value:"100"}),m.a.createElement("div",{className:"text-center"},"Multiple bars"),m.a.createElement(s._6,{multi:!0},m.a.createElement(s._6,{bar:!0,value:"15"}),m.a.createElement(s._6,{bar:!0,color:"success",value:"30"}),m.a.createElement(s._6,{bar:!0,color:"info",value:"25"}),m.a.createElement(s._6,{bar:!0,color:"warning",value:"20"}),m.a.createElement(s._6,{bar:!0,color:"danger",value:"5"})))),m.a.createElement(s.i,null,m.a.createElement(s.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," color variants")),m.a.createElement(s.j,null,m.a.createElement(s._6,{value:10,className:"mb-3"}),m.a.createElement(s._6,{color:"success",value:"25",className:"mb-3"}),m.a.createElement(s._6,{color:"info",value:50,className:"mb-3"}),m.a.createElement(s._6,{color:"warning",value:75,className:"mb-3"}),m.a.createElement(s._6,{color:"danger",value:"100",className:"mb-3"}))),m.a.createElement(s.i,null,m.a.createElement(s.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," labels")),m.a.createElement(s.j,null,m.a.createElement(s._6,{value:"25",className:"mb-3"},"25%"),m.a.createElement(s._6,{value:50,className:"mb-3"},"1/2"),m.a.createElement(s._6,{value:75,className:"mb-3"},"You're almost there!"),m.a.createElement(s._6,{color:"success",value:"100",className:"mb-3"},"You did it!"),m.a.createElement(s._6,{multi:!0,className:"mb-3"},m.a.createElement(s._6,{bar:!0,value:"15"},"Meh"),m.a.createElement(s._6,{bar:!0,color:"success",value:"30"},"Wow!"),m.a.createElement(s._6,{bar:!0,color:"info",value:"25"},"Cool"),m.a.createElement(s._6,{bar:!0,color:"warning",value:"20"},"20%"),m.a.createElement(s._6,{bar:!0,color:"danger",value:"5"},"!!")))),m.a.createElement(s.i,null,m.a.createElement(s.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," striped")),m.a.createElement(s.j,null,m.a.createElement(s._6,{striped:!0,value:10,className:"mb-3"}),m.a.createElement(s._6,{striped:!0,color:"success",value:"25",className:"mb-3"}),m.a.createElement(s._6,{striped:!0,color:"info",value:50,className:"mb-3"}),m.a.createElement(s._6,{striped:!0,color:"warning",value:75,className:"mb-3"}),m.a.createElement(s._6,{striped:!0,color:"danger",value:"100",className:"mb-3"}),m.a.createElement(s._6,{multi:!0,className:"mb-3"},m.a.createElement(s._6,{striped:!0,bar:!0,value:"10"}),m.a.createElement(s._6,{striped:!0,bar:!0,color:"success",value:"30"}),m.a.createElement(s._6,{striped:!0,bar:!0,color:"warning",value:"20"}),m.a.createElement(s._6,{striped:!0,bar:!0,color:"danger",value:"20"})))),m.a.createElement(s.i,null,m.a.createElement(s.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," animated")),m.a.createElement(s.j,null,m.a.createElement(s._6,{animated:!0,value:10,className:"mb-3"}),m.a.createElement(s._6,{animated:!0,color:"success",value:"25",className:"mb-3"}),m.a.createElement(s._6,{animated:!0,color:"info",value:50,className:"mb-3"}),m.a.createElement(s._6,{animated:!0,color:"warning",value:75,className:"mb-3"}),m.a.createElement(s._6,{animated:!0,color:"danger",value:"100",className:"mb-3"}),m.a.createElement(s._6,{multi:!0},m.a.createElement(s._6,{animated:!0,bar:!0,value:"10"}),m.a.createElement(s._6,{animated:!0,bar:!0,color:"success",value:"30"}),m.a.createElement(s._6,{animated:!0,bar:!0,color:"warning",value:"20"}),m.a.createElement(s._6,{animated:!0,bar:!0,color:"danger",value:"20"})))),m.a.createElement(s.i,null,m.a.createElement(s.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," multiple bars / stacked")),m.a.createElement(s.j,null,m.a.createElement("div",{className:"text-center"},"Plain"),m.a.createElement(s._6,{multi:!0},m.a.createElement(s._6,{bar:!0,value:"15"}),m.a.createElement(s._6,{bar:!0,color:"success",value:"20"}),m.a.createElement(s._6,{bar:!0,color:"info",value:"25"}),m.a.createElement(s._6,{bar:!0,color:"warning",value:"20"}),m.a.createElement(s._6,{bar:!0,color:"danger",value:"15"})),m.a.createElement("div",{className:"text-center"},"With Labels"),m.a.createElement(s._6,{multi:!0},m.a.createElement(s._6,{bar:!0,value:"15"},"Meh"),m.a.createElement(s._6,{bar:!0,color:"success",value:"35"},"Wow!"),m.a.createElement(s._6,{bar:!0,color:"warning",value:"25"},"25%"),m.a.createElement(s._6,{bar:!0,color:"danger",value:"25"},"LOOK OUT!!")),m.a.createElement("div",{className:"text-center"},"Stripes and Animations"),m.a.createElement(s._6,{multi:!0},m.a.createElement(s._6,{bar:!0,striped:!0,value:"15"},"Stripes"),m.a.createElement(s._6,{bar:!0,animated:!0,color:"success",value:"30"},"Animated Stripes"),m.a.createElement(s._6,{bar:!0,color:"info",value:"25"},"Plain")))),m.a.createElement(s.i,null,m.a.createElement(s.n,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," max value")),m.a.createElement(s.j,null,m.a.createElement("div",{className:"text-center"},"1 of 5"),m.a.createElement(s._6,{value:"1",max:"5"}),m.a.createElement("div",{className:"text-center"},"50 of 135"),m.a.createElement(s._6,{value:50,max:"135"}),m.a.createElement("div",{className:"text-center"},"75 of 111"),m.a.createElement(s._6,{value:75,max:111}),m.a.createElement("div",{className:"text-center"},"463 of 500"),m.a.createElement(s._6,{value:"463",max:500}),m.a.createElement("div",{className:"text-center"},"Various (40) of 55"),m.a.createElement(s._6,{multi:!0},m.a.createElement(s._6,{bar:!0,value:"5",max:55},"5"),m.a.createElement(s._6,{bar:!0,color:"success",value:"15",max:55},"15"),m.a.createElement(s._6,{bar:!0,color:"warning",value:"10",max:55},"10"),m.a.createElement(s._6,{bar:!0,color:"danger",value:"10",max:55},"10")))))}}]),a}(c.Component);a.default=u}});
//# sourceMappingURL=21.d6d4c2ec.chunk.js.map