(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{103:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PlayGround}));var C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85),C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(108),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(67),_CustomPrompt_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(104),_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(68),_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(48),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(109),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(86),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);function PlayGround(_ref){var outerTheme=_ref.outerTheme,input=_ref.input,setInput=_ref.setInput,commands=_ref.commands,editing=_ref.editing,setEditing=_ref.setEditing,allCommands=_ref.allCommands,isEditing=_ref.isEditing,setIsEditing=_ref.setIsEditing,setCommands=_ref.setCommands,tempCurrentEditing=_ref.tempCurrentEditing,setCurrentEditing=_ref.setCurrentEditing,currentEditing=_ref.currentEditing,setTempCurrentEditing=_ref.setTempCurrentEditing,inputElement=Object(react__WEBPACK_IMPORTED_MODULE_9__.useRef)(),outputElement=Object(react__WEBPACK_IMPORTED_MODULE_9__.useRef)(),_React$useState=react__WEBPACK_IMPORTED_MODULE_9__.useState(""),_React$useState2=Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],_useState=Object(react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),_useState2=Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState,2),output=_useState2[0],setOutput=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_9__.useState)(""),_useState4=Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState3,2),title=_useState4[0],setTitle=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_9__.useState)(!1),_useState6=Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState5,2),open=_useState6[0],setOpen=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_9__.useState)((function(){return function(){}})),_useState8=Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState7,2),callback=_useState8[0],setCallBack=_useState8[1],customPrompt=function(e,t){setValue(""),setCallBack((function(){return t})),setTitle(e),setOpen(!0)},_useState9=Object(react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),_useState10=Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState9,2),contextMenu=_useState10[0],setContextMenu=_useState10[1],handleContextMenu=function(e){setTempCurrentEditing(e.target.dataset.key),e.preventDefault(),setContextMenu(null===contextMenu?{mouseX:e.clientX-2,mouseY:e.clientY-4}:null)},handleClose=function(){setIsEditing(!1),setContextMenu(null)},handleEdit=function(e){setIsEditing(!0),setContextMenu(null),setCurrentEditing(tempCurrentEditing.split("|")[1]),setEditing(tempCurrentEditing.split("|")[2])},handleSave=function(){setContextMenu(null);var e=JSON.parse(JSON.stringify(allCommands)),t={name:tempCurrentEditing.split("|")[1],action:editing},_=e.find((function(e){return e.name===tempCurrentEditing.split("|")[0]}))||{name:tempCurrentEditing.split("|")[0],actions:[]};_.actions=[].concat(Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(_.actions.filter((function(e){return e.name!==tempCurrentEditing.split("|")[1]}))),[t]),e=[].concat(Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.filter((function(e){return e.name!==tempCurrentEditing.split("|")[0]}))),[_]),setCommands(e)},handleDelete=function(){setIsEditing(!1),setContextMenu(null);var e=JSON.parse(JSON.stringify(allCommands)),t=e.find((function(e){return e.name===tempCurrentEditing.split("|")[0]}));t.actions=Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(t.actions.filter((function(e){return e.name!==tempCurrentEditing.split("|")[1]}))),e=[].concat(Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.filter((function(e){return e.name!==tempCurrentEditing.split("|")[0]}))),[t]),setCommands(e)},commandsList=[];return commands.forEach((function(e){return commandsList.push.apply(commandsList,Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.actions.map((function(t){return Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_lingj_OneDrive_local_test_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},t),{},{parent:e.name})}))))})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.a,{container:!0,spacing:4,style:{padding:"0px 32px"},sx:{mt:2,mb:12},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,xs:12,md:isEditing?2:6,ref:inputElement,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__.a,{id:"outlined-basic",label:"Input",variant:"outlined",multiline:!0,rows:(document.documentElement.clientHeight-700)/10,style:{width:"100%"},theme:outerTheme,value:input,onChange:function(e){return setInput(e.target.value)}})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,xs:12,md:isEditing?4:6,ref:outputElement,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__.a,{id:"outlined-basic",label:"Output",variant:"outlined",multiline:!0,rows:(document.documentElement.clientHeight-700)/10,style:{width:"100%"},theme:outerTheme,value:output,onChange:function(e){return setOutput(e.target.value)}})}),isEditing&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,xs:12,md:6,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__.a,{id:"outlined-basic",spellCheck:!1,label:currentEditing,variant:"outlined",multiline:!0,rows:document.documentElement.clientHeight/40,style:{width:"100%","font-family":"Roboto Mono!important"},theme:outerTheme,value:editing,onChange:function(e){return setEditing(e.target.value)}})}),isEditing&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,md:6,xs:12,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__.a,{direction:"row",spacing:1,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",onClick:handleSave,children:"Save"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",onClick:handleClose,children:"Close"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,md:6,xs:12,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__.a,{direction:"row",spacing:1,justifyContent:"flex-end",children:commandsList.map((function(a){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"secondary",onClick:function onClick(){return eval(isEditing&&a.name===tempCurrentEditing.split("|")[1]?editing:a.action)},"data-key":"".concat(a.parent,"|").concat(a.name,"|").concat(a.action),onContextMenu:handleContextMenu,children:a.name})}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__.a,{open:null!==contextMenu,onClose:handleClose,anchorReference:"anchorPosition",anchorPosition:null!==contextMenu?{top:contextMenu.mouseY,left:contextMenu.mouseX}:void 0,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:handleEdit,children:"Edit"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:handleDelete,children:"Delete"})]})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_CustomPrompt_js__WEBPACK_IMPORTED_MODULE_5__.a,{value:value,setValue:setValue,title:title,setOpen:setOpen,open:open,callback:callback,output:output,input:input,setOutput:setOutput,setInput:setInput})]})}},104:function(e,t,_){"use strict";_.d(t,"a",(function(){return u}));_(0);var n=_(68),a=_(67),i=_(154),r=_(156),s=_(155),l=_(2);function u(e){var t=e.value,_=e.setValue,u=e.setOpen,c=e.open,o=e.callback,d=e.title,m=(e.input,e.setInput,e.output,e.setOutput,function(){u(!1)});return Object(l.jsx)("div",{children:Object(l.jsxs)(i.a,{open:c,onClose:m,children:[Object(l.jsx)(s.a,{children:Object(l.jsx)(a.a,{autoFocus:!0,margin:"dense",id:"name",label:d,fullWidth:!0,variant:"outlined",value:t,onChange:function(e){return _(e.target.value)}})}),Object(l.jsx)(r.a,{children:Object(l.jsx)(n.a,{onClick:function(){m(),o(t)},children:"Ok"})})]})})}},138:function(e,t,_){},145:function(e){e.exports=JSON.parse('[{"name":"Presets","actions":[{"name":"Clear","action":"(function(){setInput(\\"\\")})()"},{"name":"Swap","action":"(function(){setInput(output);setOutput(\\"\\")})()"}]},{"name":"Definitions","actions":[{"name":"Get","action":"(function(inputs){let results = [], i = 0;var getJSON = function(url, callback) {var xhr = new XMLHttpRequest();xhr.open(\'GET\', url, true);xhr.responseType = \'json\';xhr.onload = function() {var status = xhr.status;if (status === 200) {callback(null, xhr.response);} else {callback(status, xhr.response);}};xhr.send();};inputs.forEach(function(input){getJSON(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`, (b,a) => {results.push(`${input}: ${a[0].meanings[0].definitions[0].definition}`);i++;if(i === inputs.length) setOutput(results.join(\'\\\\n\'))})})})(input.split(\'\\\\n\'))"},{"name":"Remove Symbols","action":"(function(input){setOutput(input.replace(\':\', \'\'))})(input)"}]},{"name":"Traffic","actions":[{"name":"Push Data","action":"customPrompt(\'Parameters\', a => main(a))\\n\\nfunction main(params){\\n    var dic = {\\n        0: \'Sunday\',\\n        1: \'Monday\',\\n        2: \'Tuesday\',\\n        3: \'Wednesday\',\\n        4: \'Thursday\',\\n        5: \'Friday\',\\n        6: \'Saturday\'\\n    }\\n    var date = new Date(),\\n        day = date.getDay(),\\n        hour = date.getHours(),\\n        minute = date.getMinutes() + hour * 60 - 420\\n    \\n    var inputText = `${input}\\\\n[${dic[day]}, ${params}]: [${minute}, `\\n    console.log(day, dic[day])\\n\\n    setInput(inputText)\\n}"},{"name":"Arrived","action":"\\nvar date = new Date()\\nvar inputText = `${input}${date.getMinutes() + date.getHours() * 60 - 420}]`\\n\\nsetInput(inputText)"},{"name":"Print Data","action":"customPrompt(\'Parameters\', (value) => {\\n\\n    var lines = input.split(\'\\\\n\')\\n    if(!input.includes(\'{\')) lines.unshift(`{${value}}`);\\n    else lines[0] = `{${value}}`;\\n    setInput(lines.join(\'\\\\n\'))\\n    main(lines)\\n\\n})\\n\\nfunction main(lines){\\nsetOutput(\'\')\\nvar data = lines.splice(1)\\n\\n    data.forEach(a => console.log(a.match(/\\\\]/)))\\nvar outputText = \'\'\\nconsole.log(lines)\\nvar arranged = data.map((a) => {\\n    var sections = a.split(\']: [\');\\n    return({\\n        properties: sections[0].replace(\'[\', \'\'),\\n        departure: sections[1].split(\', \')[0],\\n        arrival: sections[1].split(\', \')[1].replace(\']\', \'\')\\n    })\\n})\\n\\nvar arg = lines[0].replaceAll(\'{\', \'\')\\n    .replaceAll(\'}\', \'\'),\\n    args = arg.split(\', \')\\n\\nargs.push(arg)\\n\\nargs.forEach((tag) => {\\n    var qualified = arranged.filter(a => a.properties.includes(tag))\\n        .sort((a, b) => Number(a.departure) - Number(b.departure)),\\n        results = {};\\n    qualified.forEach(a => {\\n        if(!results[a.departure]) results[a.departure] = [];\\n        results[a.departure].push(a.arrival)\\n    })\\n    outputText += tag + \'\\\\n\'\\n\\n    for(let i in results){\\n        let avg = results[i].reduce((a, b) => Number(a) + Number(b)) / results[i].length;\\n        outputText += `${i}: ${avg}\\\\n`\\n    }\\n\\n    outputText += \'\\\\n\'\\n\\n})\\n\\nsetOutput(outputText)\\n\\n}"}]}]')},146:function(e,t,_){},148:function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),i=_(34),r=_.n(i),s=(_(138),_(13)),l=_(106),u=_(210),c=_(214),o=_(215),d=_(213),m=_(211),O=_(86),p=_(55),E=_.n(p),b=_(14),j=_(206),C=_(191),D=_(192),M=_(193),P=_(203),g=_(2);function x(e){var t=e.allCommands,_=e.usedCommands,n=e.setUsedCommands,a=function(e){return function(){var t=_.indexOf(e),a=Object(b.a)(_);-1===t?a.push(e):a.splice(t,1),n(a)}};return Object(g.jsx)(g.Fragment,{children:t.map((function(e){var t="checkbox-list-label-".concat(e);return Object(g.jsx)(j.a,{disablePadding:!0,dense:!0,children:Object(g.jsxs)(C.a,{role:void 0,onClick:a(e),dense:!0,children:[Object(g.jsx)(D.a,{style:{"min-width":"42px"},children:Object(g.jsx)(P.a,{edge:"start",checked:-1!==_.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(g.jsx)(M.a,{id:t,primary:e})]})},e)}))})}function h(e){var t=e.allCommands,_=e.usedCommands,a=e.setUsedCommands,i=n.useState(null),r=Object(s.a)(i,2),l=r[0],u=r[1],c=Boolean(l);return Object(g.jsxs)("div",{children:[Object(g.jsx)(m.a,{color:"inherit",onClick:function(e){u(e.currentTarget)},children:Object(g.jsx)(E.a,{})}),Object(g.jsx)(O.a,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:l,open:c,onClose:function(){u(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:Object(g.jsx)(x,{allCommands:t,usedCommands:_,setUsedCommands:a})})]})}var f=_(105),T=_.n(f),v=_(200),I=_(201),U=_(5),A=_(109),R=_(80),B=_.n(R),L=_(212),W=_(68),S=_(154),K=_(156),k=_(155),y=_(216),w=_(205),N=_(67),q=_(208),$=_(217),F=_(199),J=_(204);function G(e){var t=e.allCommands,_=e.setEditing,a=e.createNew,i=e.setCreateNew,r=e.collection,l=e.setCollection,u=e.setIsEditing,c=e.setCurrentEditing,o=e.setTempCurrentEditing,d=n.useState(!1),O=Object(s.a)(d,2),p=O[0],E=O[1],b=n.useState(""),j=Object(s.a)(b,2),C=j[0],D=j[1],M=function(e,t){"backdropClick"!==t&&E(!1)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(m.a,{color:"inherit",onClick:function(){E(!0)},children:Object(g.jsx)(B.a,{})}),Object(g.jsxs)(S.a,{disableEscapeKeyDown:!0,open:p,onClose:M,children:[Object(g.jsx)(y.a,{children:"Create command"}),Object(g.jsx)(k.a,{children:Object(g.jsxs)(L.a,{component:"form",sx:{display:"flex",flexWrap:"wrap",width:200},children:[Object(g.jsx)($.a,{sx:{mt:1,minWidth:200,overflow:"visible"},children:Object(g.jsx)(N.a,{inputProps:{autocomplete:"off"},id:"outlined-basic",label:"Name",variant:"outlined",value:C,onChange:function(e){return D(e.target.value)}})}),Object(g.jsxs)($.a,{sx:{mt:2,minWidth:200,overflow:"visible"},children:[Object(g.jsx)(w.a,{id:"demo-dialog-select-label",children:"Collection"}),Object(g.jsxs)(J.a,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",value:r,onChange:function(e){l(e.target.value)},input:Object(g.jsx)(q.a,{label:"Collection"}),children:[t.map((function(e){return Object(g.jsx)(A.a,{value:e,children:e})})),Object(g.jsx)(F.a,{}),Object(g.jsx)(A.a,{value:"Add New",children:"New"})]})]}),"Add New"===r&&Object(g.jsx)($.a,{sx:{mt:2,minWidth:200,overflow:"visible"},children:Object(g.jsx)(N.a,{inputProps:{autocomplete:"off"},id:"outlined-basic",label:"Collection Name",variant:"outlined",value:a,onChange:function(e){return i(e.target.value)}})})]})}),Object(g.jsxs)(K.a,{children:[Object(g.jsx)(W.a,{onClick:M,children:"Cancel"}),Object(g.jsx)(W.a,{onClick:function(e,t){"backdropClick"!==t&&(E(!1),u(!0),o("".concat("Add New"===r?a:r,"|").concat(C)),c(C),_(""))},children:"Ok"})]})]})]})}var H=_(103),V=_(145),X=(Object(U.a)(d.a)({position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}),Object(l.a)({palette:{primary:{main:v.a[500]},secondary:{main:I.a[500]}}}));function z(){var e=Object(n.useState)(V),t=Object(s.a)(e,2),_=t[0],a=t[1],i=_.map((function(e){return e.name})),r=Object(n.useState)(["Presets"]),l=Object(s.a)(r,2),d=l[0],O=l[1],p=Object(n.useState)(!1),E=Object(s.a)(p,2),b=E[0],j=E[1],C=Object(n.useState)(""),D=Object(s.a)(C,2),M=D[0],P=D[1],x=Object(n.useState)(""),f=Object(s.a)(x,2),v=f[0],I=f[1],U=Object(n.useState)([]),A=Object(s.a)(U,2),R=A[0],B=A[1],W=Object(n.useState)(null),S=Object(s.a)(W,2),K=S[0],k=S[1],y=Object(n.useState)(""),w=Object(s.a)(y,2),N=w[0],q=w[1];var $=function(){var e=window.location.search.substr(1);return null!=e&&""!=e?function(e){for(var t={},_=e.split("&"),n=0;n<_.length;n++){var a=_[n].split("=");t[a[0]]=a[1]}return t}(e):{}}(),F=Object(n.useState)(""),J=Object(s.a)(F,2),z=J[0],Y=J[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("COMMANDS"));e&&a(e),$.commands&&O($.commands.split(",")),$.workspace&&q(JSON.parse(localStorage.getItem($.workspace.toUpperCase()))),console.log($)}),[]),Object(n.useEffect)((function(){localStorage.setItem("COMMANDS",JSON.stringify(_))}),[_]),Object(n.useEffect)((function(){$.workspace&&localStorage.setItem($.workspace.toUpperCase(),JSON.stringify(N))}),[N]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(u.a,{theme:X,children:[Object(g.jsx)(c.a,{position:"fixed",color:"primary",sx:{top:"auto",bottom:0},children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(m.a,{color:"inherit","aria-label":"open drawer",children:Object(g.jsx)(T.a,{})}),Object(g.jsx)(L.a,{sx:{flexGrow:1}}),Object(g.jsx)(G,{setTempCurrentEditing:B,setEditing:Y,setCurrentEditing:k,allCommands:i,collection:M,setCollection:P,createNew:v,setCreateNew:I,setIsEditing:j}),Object(g.jsx)(h,{allCommands:i,usedCommands:d,setUsedCommands:O})]})}),Object(g.jsx)(H.a,{setEditing:Y,editing:z,tempCurrentEditing:R,currentEditing:K,setTempCurrentEditing:B,setCurrentEditing:k,theme:X,allCommands:_,input:N,setInput:q,commands:_.filter((function(e){return d.includes(e.name)})),isEditing:b,setCommands:a,setIsEditing:j})]})})}_(146);var Y=function(e){e&&e instanceof Function&&_.e(3).then(_.bind(null,221)).then((function(t){var _=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;_(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(z,{})}),document.getElementById("root")),Y()}},[[148,1,2]]]);
//# sourceMappingURL=main.b77003a9.chunk.js.map