(this["webpackJsonpwe-r-devs"]=this["webpackJsonpwe-r-devs"]||[]).push([[0],{15:function(e,t,a){e.exports={titleWrapper:"Title_titleWrapper__1fR3C",heading:"Title_heading__wehaz",description:"Title_description__VZdk0"}},2:function(e,t,a){e.exports={wrapper:"Calendar_wrapper__1vzvi",header:"Calendar_header__3jnrd",currentMonth:"Calendar_currentMonth__kRELj",button:"Calendar_button__f0iXr",table:"Calendar_table__2VmfB",tf:"Calendar_tf__1Ie0-",day:"Calendar_day__2FsSj",today:"Calendar_today__i7ONF",selected:"Calendar_selected__fQfpF"}},25:function(e,t,a){e.exports=a.p+"static/media/logo.b1a38376.svg"},26:function(e,t,a){e.exports={wrapper:"Home_wrapper__3rsSP"}},32:function(e,t,a){e.exports=a(43)},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(37),a(12)),s=a(1),c=a(25),u=a.n(c),m=a(5),d=a.n(m),p=function(){return r.a.createElement("header",{className:d.a.header},r.a.createElement(i.b,{exact:!0,to:"/"},r.a.createElement("img",{src:u.a,alt:"logo",className:d.a.logo})),r.a.createElement("nav",{className:d.a.navigation},r.a.createElement("ul",{className:d.a.navigationList},r.a.createElement("li",{className:d.a.navigationLink},r.a.createElement(i.b,{className:d.a.navigationLinkItem,activeClassName:d.a.navigationLinkItemActive,exact:!0,to:"/"},"Home")),r.a.createElement("li",{className:d.a.navigationLink},r.a.createElement(i.b,{className:d.a.navigationLinkItem,activeClassName:d.a.navigationLinkItemActive,exact:!0,to:"/about"},"About us")))))},h=a(26),_=a.n(h),b=a(15),f=a.n(b),g=function(){return r.a.createElement("div",{className:f.a.titleWrapper},r.a.createElement("h1",{className:f.a.heading},"Choose the day for the meeting"),r.a.createElement("p",{className:f.a.description},"We encourage you to book your appointment online.",r.a.createElement("br",null)," This will save you time."))},y=a(11),v=a(28),E=a(29),k=a(30),N=a(31),D=a(16),w=a.n(D),O=[31,28,31,30,31,30,31,31,30,31,30,31],C=1;function M(e,t){return!(!e||!t)&&(e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate())}function L(e,t){for(var a=[],n=new Date(e,t),r=function(e){var t=e.getMonth(),a=e.getFullYear(),n=O[t];return function(e){return!(e%4||!(e%100)&&e%400)}(a)&&t===C?n+1:n}(n),o=n.getDay(),l=1,i=0;i<(r+o)/7;i++){a[i]=[];for(var s=0;s<7;s++)a[i][s]=0===i&&s<o||l>r?void 0:new Date(e,t,l++)}return a}var x=a(2),A=a.n(x),S=["January","February","March","April","May","June","Jule","August","September","October","November","December"],T=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],W=function(e){Object(N.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={date:e.props.date,currentDate:new Date,selectedDate:null},e.handlePrevMonthButtonClick=function(){var t=new Date(e.year,e.month-1);e.setState({date:t})},e.handleNextMonthButtonClick=function(){var t=new Date(e.year,e.month+1);e.setState({date:t})},e.handleDayClick=function(t){e.setState({selectedDate:t}),e.props.setDate({month:t.getMonth(),day:t.getDate(),dayOfWeek:t.getDay()}),e.props.openModal()},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this,t=this.props.weekDayNames,a=this.state,n=a.currentDate,o=a.selectedDate,l=L(this.year,this.month);return r.a.createElement("div",{className:A.a.wrapper},r.a.createElement("div",null,r.a.createElement("header",{className:A.a.header},r.a.createElement("button",{onClick:this.handlePrevMonthButtonClick,className:A.a.button},r.a.createElement("i",{className:w()("fas fa-angle-left",A.a.button)})),r.a.createElement("span",{className:A.a.currentMonth},this.props.monthNames[this.month]," ",this.year),r.a.createElement("button",{onClick:this.handleNextMonthButtonClick,className:A.a.button},r.a.createElement("i",{className:w()("fas fa-angle-right",A.a.button)}))),r.a.createElement("table",{className:A.a.table},r.a.createElement("tbody",null,l.map((function(t,a){return r.a.createElement("tr",{key:t+a},t.map((function(t,l){return t?r.a.createElement("td",{key:l,className:w()(A.a.day,M(t,n)?A.a.today:"",M(t,o)?A.a.selected:""),onClick:function(){return e.handleDayClick(t)}},t.getDate()<10?"0"+t.getDate():t.getDate()):r.a.createElement("td",{key:l,onClick:a<3?e.handlePrevMonthButtonClick:e.handleNextMonthButtonClick})})))}))),r.a.createElement("tfoot",{className:A.a.tft},r.a.createElement("tr",{className:A.a.footerRow},t.map((function(e,t){return r.a.createElement("td",{key:e+t,className:A.a.tf},e)})))))))}},{key:"year",get:function(){return this.state.date.getFullYear()}},{key:"month",get:function(){return this.state.date.getMonth()}},{key:"day",get:function(){return this.state.date.getDate()}}]),a}(r.a.Component);W.defaultProps={date:new Date,years:[2019,2020,2021],monthNames:S,weekDayNames:["S","M","T","W","T","F","S"]};var I=Object(y.b)(null,(function(e){return{openModal:function(){return e({type:"OPEN_MODAL"})},setDate:function(t){return e(function(e){return{type:"SET_DATE",payload:e}}(t))}}}))(W),j=function(){return r.a.createElement("div",{className:_.a.wrapper},r.a.createElement(g,null),r.a.createElement(I,null))},B=a(8),P=a.n(B),F=function(){return r.a.createElement("div",{className:P.a.aboutWrapper},r.a.createElement("h2",{className:P.a.aboutHeading},"Lorem ipsum creation timelines"),r.a.createElement("div",{className:P.a.aboutContentWrapper},r.a.createElement("p",{className:P.a.aboutParagraph},"So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book."," "),r.a.createElement("br",null),r.a.createElement("p",{className:P.a.aboutParagraph},"It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries."),r.a.createElement("br",null),r.a.createElement("p",{className:P.a.aboutParagraph}," ","And anyways, as Cecil Adams reasoned, \u201c[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?\u201d Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset."),r.a.createElement("br",null),r.a.createElement("p",{className:P.a.aboutParagraph}," ","McClintock wrote to Before & After to explain his discovery; \u201cWhat I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!\u201d (The editors published his letter in a correction headlined \u201cLorem Oopsum\u201d).")))},H=a(7),J=a(22),z={isOpened:!1};var X=new Date;var R=Object(H.b)({domain:Object(H.b)({selectedDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATE":return t.payload;default:return e}}}),ui:Object(H.b)({modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return Object(J.a)({},e,{isOpened:!0});case"CLOSE_MODAL":return console.log(e),Object(J.a)({},e,{isOpened:!1});default:return e}}})}),U=Object(H.c)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),q=a(6),V=a.n(q),Y=function(e){return e.ui.modal.isOpened},G=function(e){return e.domain.selectedDate},Z=Object(y.b)((function(e){return{isOpen:Y(e),selectedDate:G(e)}}),(function(e){return{closeUp:function(){return e({type:"CLOSE_MODAL"})}}}))((function(e){var t,a=e.isOpen,n=e.closeUp,o=e.selectedDate;return a?l.a.createPortal(r.a.createElement("div",{className:V.a.wrapper},r.a.createElement("div",{className:V.a.modal},r.a.createElement("div",{className:V.a.inputWrapper},r.a.createElement("label",{htmlFor:"month",className:V.a.inputLabel},"Month"),r.a.createElement("input",{type:"text",value:S[o.month],disabled:!0,className:V.a.inputText})),r.a.createElement("div",{className:V.a.inputWrapper},r.a.createElement("label",{htmlFor:"month",className:V.a.inputLabel},"Day"),r.a.createElement("input",{type:"text",value:(t=o.day,(1===t||21===t||31===t?t+"st":2===t||22===t?t+"nd":3===t||23===t?t+"rd":t+"th")+" "+T[o.dayOfWeek]),disabled:!0,className:V.a.inputText})),r.a.createElement("button",{className:V.a.closeButton,onClick:function(){return n()}}))),document.body):null}));var K=function(){return r.a.createElement(y.a,{store:U},r.a.createElement(i.a,{basename:"/"},r.a.createElement(p,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:j}),r.a.createElement(s.a,{exact:!0,path:"/about",component:F})),r.a.createElement(Z,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))},5:function(e,t,a){e.exports={header:"Header_header__S88HO",logo:"Header_logo__3wibq",navigation:"Header_navigation__yeDbw",navigationList:"Header_navigationList__3Iazc",navigationLink:"Header_navigationLink__3uvsW",navigationLinkItem:"Header_navigationLinkItem__2yz7M",navigationLinkItemActive:"Header_navigationLinkItemActive__3kXK4"}},6:function(e,t,a){e.exports={wrapper:"Modal_wrapper__3wiqg",modal:"Modal_modal__qghOl",inputWrapper:"Modal_inputWrapper__B01nJ",inputLabel:"Modal_inputLabel__1Iuzj",inputText:"Modal_inputText__2iOJl",closeButton:"Modal_closeButton__eWzNE"}},8:function(e,t,a){e.exports={aboutWrapper:"About_aboutWrapper__3t5uB",aboutHeading:"About_aboutHeading__30aZs",aboutParagraph:"About_aboutParagraph__1uqFo",aboutContentWrapper:"About_aboutContentWrapper__1Uhl-"}}},[[32,1,2]]]);
//# sourceMappingURL=main.e97715a2.chunk.js.map