(this["webpackJsonpmma-fight-predictor"]=this["webpackJsonpmma-fight-predictor"]||[]).push([[0],{209:function(t,e,r){"use strict";r.r(e);var i=r(0),a=r.n(i),h=r(21),s=r.n(h),n=(r(86),r(9)),c=r.n(n),g=r(19),f=r(2),l=r(4),d=r(6),u=r(5),o=(r.p,r(88),r(80)),S=r(3),p=function(t){Object(d.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(f.a)(this,r);for(var i=arguments.length,a=new Array(i),h=0;h<i;h++)a[h]=arguments[h];return(t=e.call.apply(e,[this].concat(a))).loadOptions=function(){var t=Object(g.a)(c.a.mark((function t(e){var r,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",[]);case 2:return t.next=4,fetch("https://mma-fight-predictor.herokuapp.com/api/search/"+e);case 4:return r=t.sent,t.next=7,r.json();case 7:return i=t.sent,t.abrupt("return",i.options);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t}return Object(l.a)(r,[{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsx)(o.a,{className:"Search",cacheOptions:!0,defaultOptions:!0,value:this.props.selectedValue,loadOptions:this.loadOptions,onInputChange:this.props.handleInputChange,onChange:this.props.handleChange})})}}]),r}(i.Component),b=r(81),j=function(t){Object(d.a)(r,t);var e=Object(u.a)(r);function r(){return Object(f.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsx)(b.a,{data:{labels:this.props.labels,datasets:[{barPercentage:this.props.labels.length/11,backgroundColor:"#3369ff",indexAxis:"y",data:this.props.data}]},height:360,width:450,options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}}}})})}}]),r}(i.Component),v=r(51),D=function(t){Object(d.a)(r,t);var e=Object(u.a)(r);function r(t){var i;return Object(f.a)(this,r),(i=e.call(this,t)).convertDateFormat=function(t){var e=t.split(".");if(e.length>1){return e[1]+"-"+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(e[0])-1]+"-"+e[2].substring(2)}return t},i.handlePredictButtonPress=function(){var t=Object(g.a)(c.a.mark((function t(e){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),null!=i.state.fighter1SelectedValue){t.next=5;break}alert("Please select a name for fighter 1"),t.next=28;break;case 5:if(null!=i.state.fighter2SelectedValue){t.next=9;break}alert("Please select a name for fighter 2"),t.next=28;break;case 9:if(i.state.fighter1SelectedValue.value!=i.state.fighter2SelectedValue.value){t.next=13;break}alert("Please ensure that fighter 1 and fighter 2 are different"),t.next=28;break;case 13:if(!(isNaN(parseFloat(i.state.fighter1Odds))||parseFloat(i.state.fighter1Odds)<=1)){t.next=17;break}alert("Please enter valid decimal odds for fighter 1 (must be greater than 1)"),t.next=28;break;case 17:if(!(isNaN(parseFloat(i.state.fighter2Odds))||parseFloat(i.state.fighter2Odds)<=1)){t.next=21;break}alert("Please enter valid decimal odds for fighter 2 (must be greater than 1)"),t.next=28;break;case 21:return t.next=23,fetch("https://mma-fight-predictor.herokuapp.com/api/predict/"+i.state.fighter1SelectedValue.value+"/"+i.state.fighter2SelectedValue.value+"/"+parseFloat(i.state.fighter1Odds).toFixed(2)+"/"+parseFloat(i.state.fighter2Odds).toFixed(2));case 23:return r=t.sent,t.next=26,r.json();case 26:a=t.sent,i.setState({winner:a.winner,probability:a.probability});case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.handleFighter1OddsChange=function(t){t.preventDefault(),i.setState({fighter1Odds:t.target.value})},i.handleFighter2OddsChange=function(t){t.preventDefault(),i.setState({fighter2Odds:t.target.value})},i.handleFighter1InputChange=function(t){i.setState({fighter1InputValue:t})},i.handleFighter2InputChange=function(t){i.setState({fighter2InputValue:t})},i.handleFighter1Change=function(){var t=Object(g.a)(c.a.mark((function t(e){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.setState({fighter1SelectedValue:e}),t.next=3,fetch("https://mma-fight-predictor.herokuapp.com/api/stats/"+e.value);case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,i.setState({fighter1BodyStrPerc:a["Body Str. %"],fighter1ClinchStrPerc:a["Clinch Str. %"],fighter1CtrlPerc:a["Ctrl. %"],fighter1DOB:a.DOB,fighter1DistanceStrPerc:a["Distance Str. %"],fighter1GroundStrPerc:a["Ground Str. %"],fighter1HeadStrPerc:a["Head Str. %"],fighter1Height:a.Height,fighter1KDAvg:a["KD Avg."],fighter1LastFight:i.convertDateFormat(a["Last Fight"]),fighter1LegStrPerc:a["Leg Str. %"],fighter1RD:a.RD,fighter1Rating:a.Rating,fighter1Reach:a.Reach,fighter1RevAvg:a["Rev. Avg."],fighter1SApM:a.SApM,fighter1SLpM:a.SLpM,fighter1Stance:a.Stance,fighter1StrAtkPerc:a["Str. Atk. %"],fighter1StrDefPerc:a["Str. Def. %"],fighter1SubAvg:a["Sub. Avg."],fighter1TDAtkPerc:a["TD Atk. %"],fighter1TDAvg:a["TD Avg."],fighter1TDDefPerc:a["TD Def. %"]});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.handleFighter2Change=function(){var t=Object(g.a)(c.a.mark((function t(e){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.setState({fighter2SelectedValue:e}),t.next=3,fetch("https://mma-fight-predictor.herokuapp.com/api/stats/"+e.value);case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,i.setState({fighter2BodyStrPerc:a["Body Str. %"],fighter2ClinchStrPerc:a["Clinch Str. %"],fighter2CtrlPerc:a["Ctrl. %"],fighter2DOB:a.DOB,fighter2DistanceStrPerc:a["Distance Str. %"],fighter2GroundStrPerc:a["Ground Str. %"],fighter2HeadStrPerc:a["Head Str. %"],fighter2Height:a.Height,fighter2KDAvg:a["KD Avg."],fighter2LastFight:i.convertDateFormat(a["Last Fight"]),fighter2LegStrPerc:a["Leg Str. %"],fighter2RD:a.RD,fighter2Rating:a.Rating,fighter2Reach:a.Reach,fighter2RevAvg:a["Rev. Avg."],fighter2SApM:a.SApM,fighter2SLpM:a.SLpM,fighter2Stance:a.Stance,fighter2StrAtkPerc:a["Str. Atk. %"],fighter2StrDefPerc:a["Str. Def. %"],fighter2SubAvg:a["Sub. Avg."],fighter2TDAtkPerc:a["TD Atk. %"],fighter2TDAvg:a["TD Avg."],fighter2TDDefPerc:a["TD Def. %"]});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.state={winner:"",probability:"",fighter1InputValue:"",fighter1SelectedValue:null,fighter1BodyStrPerc:0,fighter1ClinchStrPerc:0,fighter1CtrlPerc:0,fighter1DOB:"",fighter1DistanceStrPerc:0,fighter1GroundStrPerc:0,fighter1HeadStrPerc:0,fighter1Height:"",fighter1KDAvg:0,fighter1LastFight:"",fighter1LegStrPerc:0,fighter1RD:0,fighter1Rating:0,fighter1Reach:"",fighter1RevAvg:0,fighter1SApM:0,fighter1SLpM:0,fighter1Stance:"",fighter1StrAtkPerc:0,fighter1StrDefPerc:0,fighter1SubAvg:0,fighter1TDAtkPerc:0,fighter1TDAvg:0,fighter1TDDefPerc:0,fighter1Odds:"",fighter2InputValue:"",fighter2SelectedValue:null,fighter2BodyStrPerc:0,fighter2ClinchStrPerc:0,fighter2CtrlPerc:0,fighter2DOB:"",fighter2DistanceStrPerc:0,fighter2GroundStrPerc:0,fighter2HeadStrPerc:0,fighter2Height:"",fighter2KDAvg:0,fighter2LastFight:"",fighter2LegStrPerc:0,fighter2RD:0,fighter2Rating:0,fighter2Reach:"",fighter2RevAvg:0,fighter2SApM:0,fighter2SLpM:0,fighter2Stance:"",fighter2StrAtkPerc:0,fighter2StrDefPerc:0,fighter2SubAvg:0,fighter2TDAtkPerc:0,fighter2TDAvg:0,fighter2TDDefPerc:0,fighter2Odds:""},i}return Object(l.a)(r,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("div",{className:"Header",children:Object(S.jsx)("h3",{children:" MMA Fight Predictor "})}),Object(S.jsxs)("div",{className:"Info",children:[Object(S.jsx)("p",{children:" Created by: Janahan Dhushenthen and Jordan Schneider "}),Object(S.jsx)("p",{children:" Last updated: 26/06/2021 "})]}),Object(S.jsxs)("div",{className:"Row",children:[Object(S.jsxs)("div",{className:"Card",children:[Object(S.jsx)("h3",{children:Object(S.jsx)("b",{children:"Fighter 1"})}),Object(S.jsx)(p,{selectedValue:this.state.fighter1SelectedValue,hendleInputChange:this.handleFighter1InputChange,handleChange:this.handleFighter1Change}),Object(S.jsxs)("form",{children:[Object(S.jsx)("label",{children:" Decimal Fight Odds: "}),Object(S.jsx)("input",{type:"text",value:this.state.fighter1Odds,onChange:this.handleFighter1OddsChange})]}),Object(S.jsxs)("p",{children:[" Height: ",this.state.fighter1Height,'" | Reach: ',this.state.fighter1Reach,'" | Stance: ',this.state.fighter1Stance," | DOB: ",this.state.fighter1DOB," | Last Fight: ",this.state.fighter1LastFight," "]}),Object(S.jsxs)(v.a,{children:[Object(S.jsx)(j,{labels:["Rating","RD"],data:[this.state.fighter1Rating,this.state.fighter1RD]}),Object(S.jsx)(j,{labels:["SLpM","SApM","TD Avg.","KD Avg.","Sub. Avg.","Rev. Avg."],data:[this.state.fighter1SLpM,this.state.fighter1SApM,this.state.fighter1TDAvg,this.state.fighter1KDAvg,this.state.fighter1SubAvg,this.state.fighter1RevAvg]}),Object(S.jsx)(j,{labels:["Str. Atk. %","Str. Def. %","TD Atk. %","TD Def. %","Ctrl. %","Head Str. %","Body Str. %","Leg Str. %","Distance Str. %","Clinch Str. %","Ground Str. %"],data:[this.state.fighter1StrAtkPerc,this.state.fighter1StrDefPerc,this.state.fighter1TDAtkPerc,this.state.fighter1TDDefPerc,this.state.fighter1CtrlPerc,this.state.fighter1HeadStrPerc,this.state.fighter1BodyStrPerc,this.state.fighter1LegStrPerc,this.state.fighter1DistanceStrPerc,this.state.fighter1ClinchStrPerc,this.state.fighter1GroundStrPerc]})]})]}),Object(S.jsxs)("div",{className:"Card",children:[Object(S.jsx)("h3",{children:Object(S.jsx)("b",{children:"Fighter 2"})}),Object(S.jsx)(p,{selectedValue:this.state.fighter2SelectedValue,hendleInputChange:this.handleFighter2InputChange,handleChange:this.handleFighter2Change}),Object(S.jsxs)("form",{children:[Object(S.jsx)("label",{children:" Decimal Fight Odds: "}),Object(S.jsx)("input",{type:"text",value:this.state.fighter2Odds,onChange:this.handleFighter2OddsChange})]}),Object(S.jsxs)("p",{children:[" Height: ",this.state.fighter2Height,'" | Reach: ',this.state.fighter2Reach,'" | Stance: ',this.state.fighter2Stance," | DOB: ",this.state.fighter2DOB," | Last Fight: ",this.state.fighter2LastFight," "]}),Object(S.jsxs)(v.a,{children:[Object(S.jsx)(j,{labels:["Rating","RD"],data:[this.state.fighter2Rating,this.state.fighter2RD]}),Object(S.jsx)(j,{labels:["SLpM","SApM","TD Avg.","KD Avg.","Sub. Avg.","Rev. Avg."],data:[this.state.fighter2SLpM,this.state.fighter2SApM,this.state.fighter2TDAvg,this.state.fighter2KDAvg,this.state.fighter2SubAvg,this.state.fighter2RevAvg]}),Object(S.jsx)(j,{labels:["Str. Atk. %","Str. Def. %","TD Atk. %","TD Def. %","Ctrl. %","Head Str. %","Body Str. %","Leg Str. %","Distance Str. %","Clinch Str. %","Ground Str. %"],data:[this.state.fighter2StrAtkPerc,this.state.fighter2StrDefPerc,this.state.fighter2TDAtkPerc,this.state.fighter2TDDefPerc,this.state.fighter2CtrlPerc,this.state.fighter2HeadStrPerc,this.state.fighter2BodyStrPerc,this.state.fighter2LegStrPerc,this.state.fighter2DistanceStrPerc,this.state.fighter2ClinchStrPerc,this.state.fighter2GroundStrPerc]})]})]})]}),Object(S.jsx)("div",{className:"Row",children:Object(S.jsx)("div",{className:"Card",children:Object(S.jsxs)("p",{className:"Winner",children:["WINNER: ",""!=this.state.winner&&Object(S.jsxs)("b",{children:[" ",this.state.winner," (",this.state.probability,"%) "]})]})})}),Object(S.jsx)("div",{className:"Row",children:Object(S.jsx)("button",{className:"Button",onClick:this.handlePredictButtonPress,children:"Predict"})})]})}}]),r}(i.Component),O=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,210)).then((function(e){var r=e.getCLS,i=e.getFID,a=e.getFCP,h=e.getLCP,s=e.getTTFB;r(t),i(t),a(t),h(t),s(t)}))};s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(D,{})}),document.getElementById("root")),O()},86:function(t,e,r){},88:function(t,e,r){}},[[209,1,2]]]);
//# sourceMappingURL=main.d2ad4fc8.chunk.js.map