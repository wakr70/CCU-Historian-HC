/*
 Highstock JS v10.0.0 (2022-03-07)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Pawe Fus

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/bollinger-bands",["highcharts","highcharts/modules/stock"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,e,f,g){a.hasOwnProperty(e)||(a[e]=g.apply(null,f),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:a[e]}})))}
a=a?a._modules:{};g(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e){var f=a.seriesTypes.sma,g=e.defined,q=e.error,r=e.merge,k;(function(e){function m(b){var c,a=[];b=b||this.points;if(this.fillGraph&&this.nextPoints){if((c=f.prototype.getGraphPath.call(this,this.nextPoints))&&c.length){c[0][0]="L";a=f.prototype.getGraphPath.call(this,b);c=c.slice(0,a.length);for(var h=c.length-1;0<=h;h--)a.push(c[h])}}else a=f.prototype.getGraphPath.apply(this,
arguments);return a}function w(){var b=this,c=b.linesApiNames,d=b.areaLinesNames,h=b.points,e=b.options,w=b.graph,y={options:{gapSize:e.gapSize}},m=[],n=b.getTranslatedLinesNames(b.pointValKey),l=h.length,k;n.forEach(function(b,c){for(m[c]=[];l--;)k=h[l],m[c].push({x:k.x,plotX:k.plotX,plotY:k[b],isNull:!g(k[b])});l=h.length});if(this.userOptions.fillColor&&d.length){var x=n.indexOf(u(d[0]));x=m[x];d=1===d.length?h:m[n.indexOf(u(d[1]))];n=b.color;b.points=d;b.nextPoints=x;b.color=this.userOptions.fillColor;
b.options=r(h,y);b.graph=b.area;b.fillGraph=!0;a.seriesTypes.sma.prototype.drawGraph.call(b);b.area=b.graph;delete b.nextPoints;delete b.fillGraph;b.color=n}c.forEach(function(c,a){m[a]?(b.points=m[a],e[c]?b.options=r(e[c].styles,y):q('Error: "There is no '+c+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),b.graph=b["graph"+c],f.prototype.drawGraph.call(b),b["graph"+c]=b.graph):q('Error: "'+c+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});
b.points=h;b.options=e;b.graph=w;f.prototype.drawGraph.call(b)}function d(b){var c=[];(this.pointArrayMap||[]).forEach(function(a){a!==b&&c.push(u(a))});return c}function u(b){return"plot"+b.charAt(0).toUpperCase()+b.slice(1)}function y(b){var c=[];(this.pointArrayMap||[]).forEach(function(a){c.push(b[a])});return c}function x(){var b=this,c=b.pointArrayMap,a=[],d;a=b.getTranslatedLinesNames();f.prototype.translate.apply(b,arguments);b.points.forEach(function(e){c.forEach(function(c,f){d=e[c];b.dataModify&&
(d=b.dataModify.modifyValue(d));null!==d&&(e[a[f]]=b.yAxis.toPixels(d,!0))})})}var k=[],A=["bottomLine"],B=["top","bottom"],z=["top"];e.compose=function(b){if(-1===k.indexOf(b)){k.push(b);var c=b.prototype;c.linesApiNames=c.linesApiNames||A.slice();c.pointArrayMap=c.pointArrayMap||B.slice();c.pointValKey=c.pointValKey||"top";c.areaLinesNames=c.areaLinesNames||z.slice();c.drawGraph=w;c.getGraphPath=m;c.toYData=y;c.translate=x;c.getTranslatedLinesNames=d}return b}})(k||(k={}));return k});g(a,"Stock/Indicators/BB/BBIndicator.js",
[a["Stock/Indicators/MultipleLinesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e,f){var g=this&&this.__extends||function(){var a=function(e,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e])};return a(e,d)};return function(e,d){function f(){this.constructor=e}a(e,d);e.prototype=null===d?Object.create(d):(f.prototype=d.prototype,new f)}}(),q=e.seriesTypes.sma,
r=f.extend,k=f.isArray,v=f.merge;f=function(a){function f(){var d=null!==a&&a.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}g(f,a);f.prototype.init=function(){e.seriesTypes.sma.prototype.init.apply(this,arguments);this.options=v({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)};f.prototype.getValues=function(a,f){var d=f.period,g=f.standardDeviation,m=a.xData,q=(a=a.yData)?a.length:0,r=[],z=[],b=[],c;if(!(m.length<
d)){var w=k(a[0]);for(c=d;c<=q;c++){var h=m.slice(c-d,c);var t=a.slice(c-d,c);var p=e.seriesTypes.sma.prototype.getValues.call(this,{xData:h,yData:t},f);h=p.xData[0];p=p.yData[0];for(var u=0,v=t.length,n=0;n<v;n++){var l=(w?t[n][f.index]:t[n])-p;u+=l*l}l=Math.sqrt(u/(v-1));t=p+g*l;l=p-g*l;r.push([h,t,p,l]);z.push(h);b.push([t,p,l])}return{values:r,xData:z,yData:b}}};f.defaultOptions=v(q.defaultOptions,{params:{period:20,standardDeviation:2,index:3},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},
topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>'},marker:{enabled:!1},dataGrouping:{approximation:"averages"}});return f}(q);r(f.prototype,{areaLinesNames:["top","bottom"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameComponents:["period","standardDeviation"],linesApiNames:["topLine","bottomLine"]});a.compose(f);
e.registerSeriesType("bb",f);"";return f});g(a,"masters/indicators/bollinger-bands.src.js",[],function(){})});
//# sourceMappingURL=bollinger-bands.js.map