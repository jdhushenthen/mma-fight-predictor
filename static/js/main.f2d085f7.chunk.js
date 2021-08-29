(this["webpackJsonpmma-fight-predictor"]=this["webpackJsonpmma-fight-predictor"]||[]).push([[0],{209:function(t,e,r){"use strict";r.r(e);var i=r(0),h=r.n(i),a=r(21),s=r.n(a),n=(r(86),r(9)),c=r.n(n),g=r(19),f=r(2),l=r(4),d=r(6),u=r(5),S=(r.p,r(88),r(80)),o=r(3),p=function(t){Object(d.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(f.a)(this,r);for(var i=arguments.length,h=new Array(i),a=0;a<i;a++)h[a]=arguments[a];return(t=e.call.apply(e,[this].concat(h))).loadOptions=function(){var t=Object(g.a)(c.a.mark((function t(e){var r,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",[]);case 2:return t.next=4,fetch("/api/search/"+e);case 4:return r=t.sent,t.next=7,r.json();case 7:return i=t.sent,t.abrupt("return",i.options);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t}return Object(l.a)(r,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(S.a,{className:"Search",cacheOptions:!0,defaultOptions:!0,value:this.props.selectedValue,loadOptions:this.loadOptions,onInputChange:this.props.handleInputChange,onChange:this.props.handleChange})})}}]),r}(i.Component),j=r(81),b=function(t){Object(d.a)(r,t);var e=Object(u.a)(r);function r(){return Object(f.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{data:{labels:this.props.labels,datasets:[{barPercentage:this.props.labels.length/11,backgroundColor:"#3369ff",indexAxis:"y",data:this.props.data}]},height:400,width:500,options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}}}})})}}]),r}(i.Component),D=r(51),v=function(t){Object(d.a)(r,t);var e=Object(u.a)(r);function r(t){var i;return Object(f.a)(this,r),(i=e.call(this,t)).handlePredictButtonPress=function(){var t=Object(g.a)(c.a.mark((function t(e){var r,h;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,fetch("/predict/"+i.state.fighter1SelectedValue.value+"/"+i.state.fighter2SelectedValue.value+"/"+i.state.fighter1Odds+"/"+i.state.fighter2Odds);case 3:return r=t.sent,t.next=6,r.json();case 6:h=t.sent,console.log(h),i.setState({winner:h.winner,probability:h.probability});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.handleFighter1OddsChange=function(t){t.preventDefault(),i.setState({fighter1Odds:t.target.value})},i.handleFighter2OddsChange=function(t){t.preventDefault(),i.setState({fighter2Odds:t.target.value})},i.handleFighter1InputChange=function(t){i.setState({fighter1InputValue:t})},i.handleFighter2InputChange=function(t){i.setState({fighter2InputValue:t})},i.handleFighter1Change=function(){var t=Object(g.a)(c.a.mark((function t(e){var r,h;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.setState({fighter1SelectedValue:e}),t.next=3,fetch("/api/stats/"+e.value);case 3:return r=t.sent,t.next=6,r.json();case 6:h=t.sent,i.setState({fighter1BodyStrPerc:h["Body Str. %"],fighter1ClinchStrPerc:h["Clinch Str. %"],fighter1CtrlPerc:h["Ctrl. %"],fighter1DOB:h.DOB,fighter1DistanceStrPerc:h["Distance Str. %"],fighter1GroundStrPerc:h["Ground Str. %"],fighter1HeadStrPerc:h["Head Str. %"],fighter1Height:h.Height,fighter1KDAvg:h["KD Avg."],fighter1LastFight:h["Last Fight"],fighter1LegStrPerc:h["Leg Str. %"],fighter1RD:h.RD,fighter1Rating:h.Rating,fighter1Reach:h.Reach,fighter1RevAvg:h["Rev. Avg."],fighter1SApM:h.SApM,fighter1SLpM:h.SLpM,fighter1Stance:h.Stance,fighter1StrAtkPerc:h["Str. Atk. %"],fighter1StrDefPerc:h["Str. Def. %"],fighter1SubAvg:h["Sub. Avg."],fighter1TDAtkPerc:h["TD Atk. %"],fighter1TDAvg:h["TD Avg."],fighter1TDDefPerc:h["TD Def. %"]});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.handleFighter2Change=function(){var t=Object(g.a)(c.a.mark((function t(e){var r,h;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.setState({fighter2SelectedValue:e}),t.next=3,fetch("/api/stats/"+e.value);case 3:return r=t.sent,t.next=6,r.json();case 6:h=t.sent,i.setState({fighter2BodyStrPerc:h["Body Str. %"],fighter2ClinchStrPerc:h["Clinch Str. %"],fighter2CtrlPerc:h["Ctrl. %"],fighter2DOB:h.DOB,fighter2DistanceStrPerc:h["Distance Str. %"],fighter2GroundStrPerc:h["Ground Str. %"],fighter2HeadStrPerc:h["Head Str. %"],fighter2Height:h.Height,fighter2KDAvg:h["KD Avg."],fighter2LastFight:h["Last Fight"],fighter2LegStrPerc:h["Leg Str. %"],fighter2RD:h.RD,fighter2Rating:h.Rating,fighter2Reach:h.Reach,fighter2RevAvg:h["Rev. Avg."],fighter2SApM:h.SApM,fighter2SLpM:h.SLpM,fighter2Stance:h.Stance,fighter2StrAtkPerc:h["Str. Atk. %"],fighter2StrDefPerc:h["Str. Def. %"],fighter2SubAvg:h["Sub. Avg."],fighter2TDAtkPerc:h["TD Atk. %"],fighter2TDAvg:h["TD Avg."],fighter2TDDefPerc:h["TD Def. %"]});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.state={winner:"",probability:"",fighter1InputValue:"",fighter1SelectedValue:null,fighter1BodyStrPerc:0,fighter1ClinchStrPerc:0,fighter1CtrlPerc:0,fighter1DOB:"",fighter1DistanceStrPerc:0,fighter1GroundStrPerc:0,fighter1HeadStrPerc:0,fighter1Height:"",fighter1KDAvg:0,fighter1LastFight:"",fighter1LegStrPerc:0,fighter1RD:0,fighter1Rating:0,fighter1Reach:"",fighter1RevAvg:0,fighter1SApM:0,fighter1SLpM:0,fighter1Stance:"",fighter1StrAtkPerc:0,fighter1StrDefPerc:0,fighter1SubAvg:0,fighter1TDAtkPerc:0,fighter1TDAvg:0,fighter1TDDefPerc:0,fighter1Odds:"",fighter2InputValue:"",fighter2SelectedValue:null,fighter2BodyStrPerc:0,fighter2ClinchStrPerc:0,fighter2CtrlPerc:0,fighter2DOB:"",fighter2DistanceStrPerc:0,fighter2GroundStrPerc:0,fighter2HeadStrPerc:0,fighter2Height:"",fighter2KDAvg:0,fighter2LastFight:"",fighter2LegStrPerc:0,fighter2RD:0,fighter2Rating:0,fighter2Reach:"",fighter2RevAvg:0,fighter2SApM:0,fighter2SLpM:0,fighter2Stance:"",fighter2StrAtkPerc:0,fighter2StrDefPerc:0,fighter2SubAvg:0,fighter2TDAtkPerc:0,fighter2TDAvg:0,fighter2TDDefPerc:0,fighter2Odds:""},i}return Object(l.a)(r,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"Header",children:Object(o.jsx)("h3",{children:" UFC Fight Predictor "})}),Object(o.jsxs)("div",{className:"Info",children:[Object(o.jsx)("p",{children:" Created by: Janahan Dhushenthen and Jordan Schneider "}),Object(o.jsx)("p",{children:" Last updated: 26/06/2021 "})]}),Object(o.jsxs)("div",{className:"Row",children:[Object(o.jsxs)("div",{className:"Card",children:[Object(o.jsx)("h3",{children:Object(o.jsx)("b",{children:"Fighter 1"})}),Object(o.jsx)(p,{selectedValue:this.state.fighter1SelectedValue,hendleInputChange:this.handleFighter1InputChange,handleChange:this.handleFighter1Change}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{children:" Decimal Fight Odds: "}),Object(o.jsx)("input",{type:"text",value:this.state.fighter1Odds,onChange:this.handleFighter1OddsChange})]}),Object(o.jsxs)("p",{children:[" Height: ",this.state.fighter1Height,'" | Reach: ',this.state.fighter1Reach,'" | Stance: ',this.state.fighter1Stance," | DOB: ",this.state.fighter1DOB," | Last Fight: ",this.state.fighter1LastFight," "]}),Object(o.jsxs)(D.a,{children:[Object(o.jsx)(b,{labels:["Rating","RD"],data:[this.state.fighter1Rating,this.state.fighter1RD]}),Object(o.jsx)(b,{labels:["SLpM","SApM","TD Avg.","KD Avg.","Sub. Avg.","Rev. Avg."],data:[this.state.fighter1SLpM,this.state.fighter1SApM,this.state.fighter1TDAvg,this.state.fighter1KDAvg,this.state.fighter1SubAvg,this.state.fighter1RevAvg]}),Object(o.jsx)(b,{labels:["Str. Atk. %","Str. Def. %","TD Atk. %","TD Def. %","Ctrl. %","Head Str. %","Body Str. %","Leg Str. %","Distance Str. %","Clinch Str. %","Ground Str. %"],data:[this.state.fighter1StrAtkPerc,this.state.fighter1StrDefPerc,this.state.fighter1TDAtkPerc,this.state.fighter1TDDefPerc,this.state.fighter1CtrlPerc,this.state.fighter1HeadStrPerc,this.state.fighter1BodyStrPerc,this.state.fighter1LegStrPerc,this.state.fighter1DistanceStrPerc,this.state.fighter1ClinchStrPerc,this.state.fighter1GroundStrPerc]})]})]}),Object(o.jsxs)("div",{className:"Card",children:[Object(o.jsx)("h3",{children:Object(o.jsx)("b",{children:"Fighter 2"})}),Object(o.jsx)(p,{selectedValue:this.state.fighter2SelectedValue,hendleInputChange:this.handleFighter2InputChange,handleChange:this.handleFighter2Change}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{children:" Decimal Fight Odds: "}),Object(o.jsx)("input",{type:"text",value:this.state.fighter2Odds,onChange:this.handleFighter2OddsChange})]}),Object(o.jsxs)("p",{children:[" Height: ",this.state.fighter2Height,'" | Reach: ',this.state.fighter2Reach,'" | Stance: ',this.state.fighter2Stance," | DOB: ",this.state.fighter2DOB," | Last Fight: ",this.state.fighter2LastFight," "]}),Object(o.jsxs)(D.a,{children:[Object(o.jsx)(b,{labels:["Rating","RD"],data:[this.state.fighter2Rating,this.state.fighter2RD]}),Object(o.jsx)(b,{labels:["SLpM","SApM","TD Avg.","KD Avg.","Sub. Avg.","Rev. Avg."],data:[this.state.fighter2SLpM,this.state.fighter2SApM,this.state.fighter2TDAvg,this.state.fighter2KDAvg,this.state.fighter2SubAvg,this.state.fighter2RevAvg]}),Object(o.jsx)(b,{labels:["Str. Atk. %","Str. Def. %","TD Atk. %","TD Def. %","Ctrl. %","Head Str. %","Body Str. %","Leg Str. %","Distance Str. %","Clinch Str. %","Ground Str. %"],data:[this.state.fighter2StrAtkPerc,this.state.fighter2StrDefPerc,this.state.fighter2TDAtkPerc,this.state.fighter2TDDefPerc,this.state.fighter2CtrlPerc,this.state.fighter2HeadStrPerc,this.state.fighter2BodyStrPerc,this.state.fighter2LegStrPerc,this.state.fighter2DistanceStrPerc,this.state.fighter2ClinchStrPerc,this.state.fighter2GroundStrPerc]})]})]})]}),Object(o.jsx)("div",{className:"Row",children:Object(o.jsx)("div",{className:"Card",children:Object(o.jsxs)("p",{className:"Winner",children:["WINNER: ",""!=this.state.winner&&Object(o.jsxs)("b",{children:[" ",this.state.winner," (",this.state.probability,"%) "]})]})})}),Object(o.jsx)("div",{className:"Row",children:Object(o.jsx)("button",{className:"Button",onClick:this.handlePredictButtonPress,children:"Predict"})})]})}}]),r}(i.Component),O=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,210)).then((function(e){var r=e.getCLS,i=e.getFID,h=e.getFCP,a=e.getLCP,s=e.getTTFB;r(t),i(t),h(t),a(t),s(t)}))};s.a.render(Object(o.jsx)(h.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),O()},86:function(t,e,r){},88:function(t,e,r){}},[[209,1,2]]]);
//# sourceMappingURL=main.f2d085f7.chunk.js.map