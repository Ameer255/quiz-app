(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(0),o=c(1),r=c.n(o),n=c(12),i=c.n(n),a=(c(18),c(19),c(4)),l=c(2),h=[{Qs:["Mary had a number of cookies, after eating one, she gave half of the remaining to her sister. After eating another cookie, she gave half of what was left to her brother. Mary now had only five cookies left, how many cookies did she start with..?"],options:["23","22","11","45"],correct:"23"},{Qs:[["What number should replace the question mark..?"],["0, 4, 2, 6, 3, 7, 3.5, ?"]],options:["8","7.5","6.5","6"],correct:"7.5"},{Qs:["The price of an item was cut 20% for a sale. By what percent must the item be increased to again sale the item at its original price.?"],options:["30%","40%","25%","20%"],correct:"25%"},{Qs:["If the day before yesterday was thursday, when will sunday be..?"],options:["Tomorrow","Day after tomorrow","Today","None"],correct:"Tomorrow"},{Qs:["If sami stood 13th in a racing competition from both top and bottom of the list, how many participants were there in the race..? "],options:["27","26","24","25"],correct:"25"},{Qs:["A man faces north and covers 7 km, turns west and covers 2 km, then turns south and covers 4 km, again turns west and covers 2 km, how far is he from starting point..?"],options:["20 km","5 km","15 km","2 km"],correct:"5 km"},{Qs:["If the seventh day of the month is three days earlier than friday, what day will it be on the nineteenth day of that month..?"],options:["Wednesday","Monday","Sunday","Friday"],correct:"Sunday"},{Qs:["The old man's son is my son's uncle, what is the old man to me..?"],options:["Brother","Father","Son","None"],correct:"Father"},{Qs:["The average age of four brothers is 12 years, if the age of their mother is also included, the average is increased by 5 years, The age of their mother (in years) is :"],options:["43","48","53","37"],correct:"37"},{Qs:["12 is what percent of 80.?"],options:["15%","13%","17%","8%"],correct:"15%"}],d=c(6),j=c(5),b=function(e){var t=e.correct;return Object(s.jsxs)("div",{className:"result",children:[Object(s.jsx)("div",{children:Object(s.jsx)("h2",{children:"Result"})}),Object(s.jsx)("table",{children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Total "}),Object(s.jsx)("td",{children:"10"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"correct",children:"Correct"}),Object(s.jsx)("td",{className:"correct",children:t})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"incorrect",children:"Incorrect"}),Object(s.jsx)("td",{className:"incorrect",children:10-t})]})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)(a.b,{to:"/quiz-app",children:[Object(s.jsx)("button",{children:"Back To Quiz Home"})," "]})})]})},A=c(9),m=c.n(A),u=c.p+"static/media/correct.c08cf1c7.mp3",x=c.p+"static/media/wrong.ffcc8b31.mp3",p=function(e){var t=new Audio(u),c=new Audio(x),r="";Object(o.useEffect)((function(){return document.querySelectorAll("input").forEach((function(e){e.checked&&(e.checked=!1)})),!1}));var n=function(e){r=e.target.value};return console.log(e.q),Object(s.jsxs)("div",{className:"question-container",children:[Object(s.jsx)("div",{className:"question-count",children:Object(s.jsx)("h3",{children:"".concat(e.step+1," / 10")})}),Object(s.jsx)("div",{className:"question",children:e.q.map((function(e,t){return Object(s.jsxs)("h2",{children:[" ",e," "]},t)}))}),Object(s.jsx)("form",{className:"answer-form",children:e.options.map((function(e,t){return Object(s.jsxs)("div",{className:"options",id:"hello"+t,children:[Object(s.jsx)("div",{className:"radio",children:Object(s.jsx)("input",{type:"radio",value:e,id:t,name:"option",onChange:n})}),Object(s.jsx)("div",{className:"label",htmlFor:t,children:Object(s.jsx)("label",{htmlFor:t,children:e})})]},t)}))}),Object(s.jsx)("div",{className:"check-btn",children:Object(s.jsx)("button",{onClick:function(){r===e.correct?(m()({title:"Correct",text:"Excellent.!",icon:"success",button:"Continue",className:"sa-sm"}),e.addToCorrect(),t.play()):(m()({title:"Incorrect",text:"Oh No..! \n Correct answer was : ".concat(e.correct),icon:"warning",button:"Continue",dangerMode:!0,className:"sa-sm"}),c.play()),e.next()},children:"Check"})})]})},g=function(e){var t=Object(o.useState)({step:0,correct:0}),c=Object(j.a)(t,2),r=c[0],n=c[1];return r.step>=0&&r.step<=9?Object(s.jsx)(p,{q:e.Questions[r.step].Qs,next:function(){n(Object(d.a)(Object(d.a)({},r),{},{step:r.step+1}))},step:r.step,options:e.Questions[r.step].options,correct:e.Questions[r.step].correct,addToCorrect:function(){n(Object(d.a)(Object(d.a)({},r),{},{correct:r.correct+=1})),console.log(r.correct)}}):Object(s.jsx)(b,{correct:r.correct})},f=function(){return Object(s.jsx)(g,{Questions:h})},v=[{Qs:["which one is an inline element..?"],options:["div","section","H1","<a>"],correct:"<a>"},{Qs:["Which tag is used to display an image..?"],options:["pic","image","img","photo"],correct:"img"},{Qs:["Which tag is used to connect external JavaScript file..?"],options:["<script>","<link>","<Javascrip>"],correct:"<script>"},{Qs:["There are 4 ways to style HTML elements..?"],options:["true","false"],correct:"false"},{Qs:["Which one is the correct way to find the length of an array in JS..?"],options:["Array.size","Array.width","Array.length","sizeOf(Array)"],correct:"Array.length"},{Qs:["#FF3205 Is the representation of which color in Hexa..?"],options:["Red","Green","Blue"],correct:"Red"},{Qs:[["What is the output of the following code..?"],["let arr = [2,4,3,7,6];"],["console.log(arr[arr.length-2])"]],options:["6","7","3","4"],correct:"7"},{Qs:[["What is the output of follwing code..?"],["console.log(typeof(null);"]],options:["String","Array","Object","Number"],correct:"Object"},{Qs:["In CSS3, class selector has higher specificity than ID selector..?"],options:["true","false"],correct:"false"},{Qs:["Select the correct way to apply styling for the hover state of a button..?"],options:["button hover {styles }","button > hover {styles }","button :hover {styles }","hover : button {styles}"],correct:"button :hover {styles }"},{Qs:[["What is the output of following code..?"],['console.log(1 == "1");']],options:["true","false"],correct:"true"}],O=function(){return Object(s.jsx)(g,{Questions:v})},Q=function(e){var t=e.linkTo,c=e.img,o=e.name;return Object(s.jsx)("div",{className:"box",children:Object(s.jsxs)(a.b,{to:t,children:[Object(s.jsx)("div",{className:"icon",children:Object(s.jsx)("img",{src:c,alt:"quiz img"})}),Object(s.jsx)("div",{className:"quiz-name",children:Object(s.jsx)("b",{children:o})})]})})},y=function(){return Object(s.jsxs)("div",{className:"menu",children:[Object(s.jsx)(Q,{linkTo:"/web-quiz",img:"data:image/png;base64,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",name:" Web Quiz"}),Object(s.jsx)(Q,{linkTo:"/gen-quiz",img:"data:image/png;base64,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",name:"IQ Quiz"}),Object(s.jsx)(Q,{linkTo:"/english-quiz",img:"data:image/png;base64,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",name:"English & Grammer"}),Object(s.jsx)(Q,{linkTo:"/math-quiz",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABpCAYAAACzrZR7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowNToxMyAxNDoxMToyMPROQX0AAASrSURBVHhe7d1/aNR1HMfx13LnnJM557zcds1ttaWzzXAWJgU1MAycrDJ/0D+aFjGoIBj9k3+YFgVBoMagWjaUjNk0FFb6h0IgCP0iZv463ebcmo1hm3NTWVvd53ufq5PvuX2/9/32fct3rwfI3edzB9/x9Ljv3ec+x6X8HQHy3D36kjzG8EIsP9Wou/VfG0S44zIGBocQbu/E6NiYvpVmZ2WiMJSHOdlZxmUgkKpvSWzC8Ormn1rP4uM9+9Fy/ISepfGEcoPYvLYG66qXY9bMTD17u3HD37x1C/V7m7GrsQnXh2/oWbLq4bJSvFdXi8ryBXrmP3cMP3zjJt7Z8Rl27z+sZygZ6tG/c2sdli2u0DNRCU+uf42OoqHpEKO7oKunF9t2NBjnxHgJw//w62l8uu+gHpFTP586i0/2fWM8dceYwqunmK8OH8UffVf1DLnhwHfHjAd0jCn87719aD13QY/ILerFyY+tZ4xXiYopfPeVXvx2vk2PyE0XL3VhKPKMopjC913t19fIbX1/DmBkZMS4nvDkSv8/hhfC8EJM71ybvz2G2i0f6JE1Ty6txLY3X0VJ0X1ISUnRs/6lXo/vOdCC9+sbbS2lPPXYEtRvf8tYv3H8iC8uyMfbr72E0uKCSRFdmZaWho1rVmHD6mo9Y5/j8PPycxGaG9SjySN1yhSUlRTpkX18jhfC8EIYXgjDC2F4IQwvhOGFMLwQhhfC8EIYXgjDC2F4IQwvhOGFMLwQhhfC8EIYXgjDC3Ec/lJ3D7qu9OrR5KG+Q3A63K5H9jkO39bZje07P8f5ts5/d8L6ndpXs7vpEL74OvkvbriyoYmscXVDEyWH4YUwvBCGF8LwQhheCMMLYXghDC+E4YUwvBBX1mpmTE/H8ieWYmFpsZ5J7PrQMI58fxJnLthf1fPDMeLXalwJ/25dLTasXml8L2giHV09eGPrhzj5yyk9Y40fjuHqItmyygqsrHrc0h+rFIZy8fwzVXpkjV+OEc9x+LSpUyP/AnpkTUZ6ur5mjV+OEY8nVyEML4ThhTC8EIYXwvBCGF6I4/B2NzQlsxHIi2N4zXF4Oxuakt0I5MUxvObKWo0fxK+jWGW3FTc03QUYXgjDC2F4IQwvhOGFMLwQhhfC8EIYXgjDC3FlrcZvm42scrJW40p4v202skp0kcyPm4284Di8HzcbeYEnVyEML4ThhTC8EIYXwvBCGF6I4/B+2dDk9aYpx+H9sqHJ601TrqzVkDXc0HQXYHghDC/EFD4nO0tfI7flzJqJQCC6ymoKnz83OOGnPJSc++eFkJE+zbhuCp8XzEH5gw/oEblFfXS5pHwBYr95awo/PfI/sq76adybk61nyA3PrajCI4vK9OgOJ1d1h5fXP6tH5NTih+bjlfU1xi8fxyQMrz7b3LRmFTa+kPxPI1NUKDeILa9vQklRgZ6JMr1zjafeGtfvbcauxiZbPwpOUY8uWmjsjqiYbz5njhteUTe3nruIjxq+RMvxE3qWxqMe5ZvX1uDFmhXInJGhZ283YfgYdbf+a4MId1zGwOAQwu2dGB0b07fS7KxMFIbyMCfyPkhdBgKp+pbELIcnNwH/AEqnV8YtaZDFAAAAAElFTkSuQmCC",name:"Maths"})]})},w=function(){Object(l.f)();return Object(s.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(s.jsx)("h3",{children:"No Quiz Here"})})},F=[{Qs:[["Choose the appropriate letters to fill the blank..?"],["Rec--ved"]],options:["ae","ai","ei","ie"],correct:"ei"},{Qs:["Hunter took an aim --- the running."],options:["on","at","from","by"],correct:"at"},{Qs:[["Choose the correct indirect sentence."],['He said to me, "may you live long."']],options:["He prayed that he might live long.","He wished that i might live long.","He prayed that i may live long.","He prayed that i might live long."],correct:"He prayed that i may live long."},{Qs:["Select the correct spelling."],options:["Meriage","Marriage","Mariage","Merriage"],correct:"Marriage"},{Qs:['Select the correct antonym of "Development".'],options:["Retardation","Transgration","Impunity","Retrogression"],correct:"Retrogression"},{Qs:["Ali invited me --- tea party."],options:["at","on","for","to"],correct:"at"},{Qs:['What is the antonym of "Glory".?'],options:["Splendour","Debasement","Notoriety","Fame"],correct:"Debasement"},{Qs:["Ahsan is junior --- me."],options:["of","than","to","by"],correct:"to"},{Qs:[["Well, i don't think i will be home before 6."],['"Well" in the above sentence is : ']],options:["Interjection","Conjuction","Preposition","Pronoun"],correct:"Interjection"},{Qs:['Choose the correct synonym of "Serene".'],options:["Delicate","Meak","Solemn","Calm"],correct:"Calm"}],C=function(){return Object(s.jsx)(g,{Questions:F})},U=function(){var e=Object(l.e)();console.log(e.state);return Object(s.jsx)("div",{children:Object(s.jsxs)("h2",{children:["Hi ","".concat(e.state.name," ").concat("hello"," ")," "]})})},q=!1,W=function(){var e=document.querySelector(".nav-sm"),t=document.querySelector("#hamberger");!1===q?(e.style="width : 100%; right : 0; ",t.classList.add("toggle"),q=!0):!0===q&&(e.style.width="0",e.style.right="-400px",t.classList.remove("toggle"),q=!1)};var k=function(){return Object(s.jsxs)(a.a,{children:[Object(s.jsxs)("nav",{children:[Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{children:[Object(s.jsx)("span",{className:"first-letter",children:"Q"}),Object(s.jsx)("span",{className:"rem-letters",children:"uiz"})," ",Object(s.jsx)("span",{className:"rem-letters",children:"B"}),Object(s.jsx)("span",{className:"first-letter",children:"ox"})]})}),Object(s.jsxs)("div",{className:"nav-items",children:[Object(s.jsx)("div",{children:Object(s.jsx)(a.b,{to:"/quiz-app",children:" Home "})}),Object(s.jsx)("div",{children:Object(s.jsx)(a.b,{to:"/gen-quiz",children:" IQ Quiz "})}),Object(s.jsx)("div",{children:Object(s.jsx)(a.b,{to:"/web-quiz",children:" Web Quiz"})})]}),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{id:"hamberger",onClick:W,children:[Object(s.jsx)("span",{className:"item1"}),Object(s.jsx)("span",{className:"item2"}),Object(s.jsx)("span",{className:"item3"})]})})]}),Object(s.jsxs)("div",{className:"nav-sm",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{children:Object(s.jsxs)(a.b,{to:"/quiz-app",onClick:W,children:[" ","Home"," "]})}),Object(s.jsx)("div",{children:Object(s.jsxs)(a.b,{to:"/gen-quiz",onClick:W,children:[" ","IQ Quiz"," "]})}),Object(s.jsx)("div",{children:Object(s.jsxs)(a.b,{to:"/web-quiz",onClick:W,children:[" ","Web Quiz"]})}),Object(s.jsx)("div",{})]}),Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/quiz-app",exact:!0,element:Object(s.jsx)(y,{})}),Object(s.jsx)(l.a,{path:"/test",exact:!0,element:Object(s.jsx)(U,{})}),Object(s.jsx)(l.a,{path:"/web-quiz",exact:!0,element:Object(s.jsx)(O,{})}),Object(s.jsx)(l.a,{path:"/math-quiz",exact:!0,element:Object(s.jsx)(w,{})}),Object(s.jsx)(l.a,{path:"/english-quiz",exact:!0,element:Object(s.jsx)(C,{})}),Object(s.jsx)(l.a,{path:"/gen-quiz",exact:!0,element:Object(s.jsx)(f,{})})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,s=t.getFID,o=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),o(e),r(e),n(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),I()}},[[22,1,2]]]);
//# sourceMappingURL=main.453f85f7.chunk.js.map