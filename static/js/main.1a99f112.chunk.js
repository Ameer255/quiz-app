(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),i=c.n(s),r=c(21),a=c.n(r),o=(c(28),c(29),c(9)),l=c(3),j=function(){return Object(n.jsx)("div",{className:"box",children:"here will be General quiz"})},b=c(7),d=c(13),u=c(16),h=c.n(u),x=function(e){(new Audio).src="../correct.mp3";var t=Object(s.useState)(""),c=Object(d.a)(t,2),i=c[0],r=c[1];Object(s.useEffect)((function(){document.querySelector("form").elements.option.forEach((function(e){e.checked&&r(e.value)}))}));var a=function(e){r(e.target.value)};return console.log(e.q),Object(n.jsxs)("div",{className:"question",children:[Object(n.jsx)("div",{children:e.q.map((function(e){return Object(n.jsxs)("h4",{children:[" ",e," "]})}))}),Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:"".concat(e.step," / 7")})}),Object(n.jsx)("form",{children:e.options.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"radio",value:e,id:t,onChange:a,name:"option"}),Object(n.jsx)("label",{htmlFor:t,children:e})," ",Object(n.jsx)("br",{})]})}))}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){i==e.correct?(h()({title:"Correct",text:"Excellent.!",icon:"success",button:"Continue",className:"sa-sm"}),e.addToCorrect()):h()({title:"Incorrect",text:"Oh No..!",icon:"warning",button:"Continue",dangerMode:!0,className:"sa-sm"}),e.next()},disabled:e.step>7,children:"Next"}),Object(n.jsx)("button",{onClick:e.prev,disabled:e.step<=1,children:" Preveous"})]}),Object(n.jsx)("audio",{className:"audio",children:Object(n.jsx)("source",{src:"https://gofile.io/d/L4e34L"})})]})},p=function(){var e=Object(s.useState)({step:1,correct:0}),t=Object(d.a)(e,2),c=t[0],i=t[1];return c.step>=1&&c.step<=7?Object(n.jsx)(x,{q:[[],["which one is an inline element..?"],["which tag is used to display an image..?"],["which tag is used to connect external JavaScript file..?"],["There are 4 ways to style HTML elements..?"],["What is the correct way to find the length of an array in JS..?"],["#FF3205 Is the representation of which color in Hexa..?"],[["what is the output of the following code..?"],["let arr = [2,4,3,7,6];"],["console.log(arr[arr.length-2])"]]][c.step],next:function(){i(Object(b.a)(Object(b.a)({},c),{},{step:c.step+1}))},prev:function(){i(Object(b.a)(Object(b.a)({},c),{},{step:c.step-1}))},step:c.step,options:[[],["div","section","H1","<a>"],["pic","image","img","photo"],["<script>","<link>","<Javascrip>"],["true","false"],["Array.size","Array.width","Array.length","sizeOf(Array)"],["Red","Green","Blue"],["6","7","3","4"]][c.step],correct:[[],["<a>"],["img"],["<script>"],["false"],["Array.length"],["Red"],["7"]][c.step],addToCorrect:function(){i(Object(b.a)(Object(b.a)({},c),{},{correct:c.correct+=1})),console.log(c.correct)}}):Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsxs)("h2",{children:["Result : ",Object(n.jsx)("br",{}),"Correct : ".concat(c.correct)," ",Object(n.jsx)("br",{})," ","Incorrect : ".concat(7-c.correct)]})})},O=function(){return Object(n.jsxs)("div",{className:"menu",children:[Object(n.jsx)("div",{className:"box",children:Object(n.jsxs)(o.b,{to:"/gen-quiz",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("i",{class:"fas fa-brain"})}),Object(n.jsx)("div",{className:"quiz-name",children:Object(n.jsx)("b",{children:"IQ Quiz"})})]})}),Object(n.jsx)("div",{className:"box",children:Object(n.jsxs)(o.b,{to:"/web-quiz",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("i",{className:"fas fa-laptop-code"})}),Object(n.jsx)("div",{className:"quiz-name",children:Object(n.jsx)("b",{children:"Web Quiz"})})]})})]})};var f=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/quiz-app",exact:!0,component:O}),Object(n.jsx)(l.a,{path:"/gen-quiz",exact:!0,component:j}),Object(n.jsx)(l.a,{path:"/web-quiz",exact:!0,component:p})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),m()}},[[36,1,2]]]);
//# sourceMappingURL=main.1a99f112.chunk.js.map