/* *********************************
 * HighChart javascripts by wak 2019-2023
 ************************************/


/* define SLINT globals do avoid issues */
/* global ChhLanguage:false, DP_Themes:false, window.H2buffer:false */
/* eslint-env browser */

window.H2buffer = {
  version: 'v7.4',  // Version
  // Setup H2 Database Services, default set to same server as this webpage and port 8082
  server: location.hostname,
  port: (location.port === "") ? "80" : location.port,
  ApiKey: "",
  refreshSec: 60,   // Refresh Time is enabled
  AutoRefresh: 0,
  AutoRefreshCount: 0,
  chart: undefined,
  FontSizes: [8, 10, 12, 14, 16, 18, 20, 24, 30, 40, 50, 60, 70, 80, 100],
  DashType: ['Solid', 'Dash', 'DashDot', 'Dot', 'LongDash', 'LongDashDot', 'LongDashDotDot',
    'ShortDash', 'ShortDashDot', 'ShortDashDotDot', 'ShortDot'],
  CrossHair: 1,
  Legend: 1,
  ToolTip: 1,
  HighLight: 1,
  Navigator: 0,
  Labels: 0,
  Grid: 2,
  DayLight: 1,
  filter_feld: '',
  Scroll_Legend: true,
  ShowFilter: 1,
  Limit: false,
  Theme: 'standard',
  Theme_Setting: undefined,
  FontSize: 14,
  Title: '',
  Subtitle: '',
  Loading: 0,
  Button_Jump: false,
  PopupID: undefined,
  PopupAxisPos: undefined,
  Queue: [],
  ColorNext: 0,
  Drag_Pos: 0,
  Zoom: -1,
  Settings_old: {},
  Settings: {},
  DataPointFilter: 0,
  ZR_Ende: new Date(Date.now()),
  ZR_Start: new Date(Date.now() - (new Date(86400000 * 1))),
  DataPoints: [],
  DataAttr: [],

};

window.H2buffer.yAxis = [{
  position: false,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText0,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 1,
  min: 10,
  max: 30,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText1,
  color: 1,
  type: 0
}, {
  position: true,
  limit: 1,
  min: -20,
  max: 50,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText2,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 1,
  min: 20,
  max: 90,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText3,
  color: 1,
  type: 0
}, {
  position: true,
  limit: 1,
  min: 0,
  max: 100,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText4,
  color: 1,
  type: 0
}, {
  position: true,
  limit: 1,
  min: 0,
  max: 2,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText5,
  color: 1,
  type: 0
}, {
  position: true,
  limit: 1,
  min: 20,
  max: 100,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText6,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 1,
  min: 900,
  max: 1000,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText7,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 1,
  min: 0,
  max: 5000,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText8,
  color: 1,
  type: 0
}, {
  position: true,
  limit: 1,
  min: 300,
  max: 3000,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText9,
  color: 1,
  type: 0
}, {
  position: true,
  limit: 1,
  min: 3,
  max: 15,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText10,
  color: 1,
  type: 0
}, {
  position: true,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText11,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText12,
  color: 1,
  type: 1
}, {
  position: false,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText13,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText14,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText15,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText16,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText17,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText18,
  color: 1,
  type: 0
}, {
  position: false,
  limit: 0,
  min: 0,
  max: 0,
  tick: 11,
  text: window.ChhLanguage.default.historian.yaxisText19,
  color: 1,
  type: 0
}];

function createChart() {
  // Check DARK Mode
  let l_theme = window.H2buffer.Theme;
  if (l_theme === 'standard') {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      l_theme = 'standard-dark';
    } else {
      l_theme = 'standard-light';
    }
  }
  if (l_theme !== 'standard-light' && window.DP_Themes[l_theme] && window.DP_Themes['standard-light']) {
    window.H2buffer.Theme_Setting = window.Highcharts.merge(window.DP_Themes['standard-light'], window.DP_Themes[l_theme]);
  } else {
    window.H2buffer.Theme_Setting = window.DP_Themes['standard-light'];
  }

  chartSetFontSize();

  window.Highcharts.setOptions(window.H2buffer.Theme_Setting);

  chartSetOptions();

  chartSetElements();
}

/**
* define default display attributes
*/
function defaultAttrib(DP, colorNr, idx) {

  // add default from fix settings

  let attr = {
    id: idx,
    aggr: 'A0',
    atime: 'T1',
    yaxis: 'Y0',
    comp: 'C0',
    line: 'L0',
    mark: 'M0',
    color: 'F0',
    visible: 0,
    dash: 'D0',
    width: 'W2',
    stack: 0,
    factor: 1,
    offset: 0,
    unit: '',
    shortname: '',
    script: '',    
    buffer_data: {
      timestamps: [],
      values: [],
      buffer_start: 0,
      buffer_end: 0
    },
  };
  if (colorNr === -1) {
    attr.color = 'F' + (window.H2buffer.ColorNext % window.H2buffer.chart.options.colors.length);
    window.H2buffer.ColorNext++;
  } else {
    attr.color = 'F' + (colorNr % window.H2buffer.chart.options.colors.length);
  }

  if (DP !== -1) {
    attr.unit = DP.attributes.unit;

    switch (DP.id.identifier) {
      case "ABS_HUMIDITY":
        attr.yaxis = 'Y10';
        break;
      case "HUMIDITY":
      case "HUMIDITYF":
      case "ACTUAL_HUMIDITY":
      case "HUM_MAX_24H":
      case "HUM_MIN_24H":
        attr.yaxis = 'Y6';
        break;
      case "TEMPERATURE":
      case "ACTUAL_TEMPERATURE":
      case "DEW_POINT":
      case "TEMP_MAX_24H":
      case "TEMP_MIN_24H":
        attr.yaxis = 'Y1';
        break;
      case "SET_TEMPERATURE":
      case "SETPOINT":
      case "SET_POINT_TEMPERATURE":
        attr.yaxis = 'Y1';
        attr.line = 'L2';
        break;
      case "MEAN5MINUTES":
        attr.yaxis = 'Y3';
        break;
      case "BRIGHTNESS":
        attr.yaxis = 'Y8';
        break;
      case "LEVEL":
        attr.yaxis = 'Y4';
        attr.line = 'L2';
        attr.unit = '';
        break;
      case "STATE":
        attr.yaxis = 'Y5';
        attr.line = 'L2';
        break;
      case "PRESS_SHORT":
      case "PRESS_LONG":
      case "PRESS_OPEN":
      case "MOTION":
        attr.yaxis = 'Y5';
        attr.mark = 'M1';
        attr.factor = 5;
        attr.line = 'L5';
        break;
      case "VALVE_STATE":
        attr.yaxis = 'Y4';
        attr.line = 'L2';
        attr.unit = '%';
        break;
    }

    if (DP.attributes.type === "BOOL") {
      attr.yaxis = 'Y5';
      attr.line = 'L2';
    }
    if (DP.attributes.unit === "%") {
      attr.yaxis = 'Y4';
      attr.line = 'L2';
      attr.unit = '%';
    }
    if (DP.id.interfaceId === "SysVar" && DP.attributes.unit === "°C") {
      attr.yaxis = 'Y1';
      attr.line = 'L0';
    }

    // add default from database
    if (DP.attributes.custom && DP.attributes.custom.HighChart) {

      let text2 = DP.attributes.custom.HighChart.split('|');
      if (text2.length > 0) {
        for (let l_text of text2) {
          if (l_text.substr(0, 1) === 'A') {
            attr.aggr = l_text;
          } else if (l_text.substr(0, 1) === 'Y') {
            attr.yaxis = l_text;
          } else if (l_text.substr(0, 1) === 'T') {
            attr.atime = l_text;
          } else if (l_text.substr(0, 1) === 'F') {
            attr.color = l_text;
          } else if (l_text.substr(0, 1) === 'C') {
            attr.comp = l_text;
          } else if (l_text.substr(0, 1) === 'L') {
            attr.line = l_text;
          } else if (l_text.substr(0, 1) === 'M') {
            attr.mark = l_text;
          } else if (l_text.substr(0, 1) === 'D') {
            attr.dash = l_text;
          } else if (l_text.substr(0, 1) === 'W') {
            attr.width = l_text;
          } else if (l_text.substr(0, 1) === 'V') {
            attr.visible = parseInt(l_text.substr(1, 1));
          } else if (l_text.substr(0, 1) === 'S') {
            attr.stack = parseInt(l_text.substr(1, 2));
          } else if (l_text.substr(0, 1) === 'U') {
            try {
              attr.unit = decodeURIComponent(l_text.substr(1, 20));
            } catch (err) {
              attr.unit = l_text.substr(1, 20);
            }
          } else if (l_text.substr(0, 1) === 'N') {
            try {
              attr.shortname = decodeURIComponent(l_text.substr(1, 40));
            } catch (err) {
              attr.shortname = l_text.substr(1, 40);
            }
          } else if (l_text.substr(0, 1) === 'X') {
            attr.factor = parseFloat(l_text.substr(1, 10));
          } else if (l_text.substr(0, 1) === 'O') {
            attr.offset = parseFloat(l_text.substr(1, 10));
          }
        }
      }
    }

    // add default script from database
    if (DP.attributes.custom && DP.attributes.custom.Script) {
      attr.script = decodeURIComponent(DP.attributes.custom.Script); 
    }

  }
  // give back default values
  return attr;
}


/**
* create serien option and add it to HighStock Chart
*/
function addSerie(DP, DP_type) {

  let unit;
  let shortname;
  let yAxis;
  let dp_vis;
  let type;
  let step;
  let color;
  let lineType;
  let aggrType;
  let aggrTime;
  let stacking;
  let dashtype;
  let linewidth;
  let marker;

  let grouping = undefined;
  let dptype = DP.id.identifier;
  let valueDecimals = 1;

  let attrIDX = (DP_type === '') ? DP.idx.toString() : (DP_type + '_' + DP.idx.toString());

  let attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === attrIDX);

  if (attr === -1) {
    window.H2buffer.DataAttr.push(defaultAttrib(DP, -1, attrIDX));
    attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === attrIDX);
  }

  yAxis = parseInt(window.H2buffer.DataAttr[attr].yaxis.substr(1, 2));
  color = window.H2buffer.chart.options.colors[parseInt(window.H2buffer.DataAttr[attr].color.substr(1, 2))];
  aggrType = parseInt(window.H2buffer.DataAttr[attr].aggr.substr(1, 2));
  aggrTime = parseInt(window.H2buffer.DataAttr[attr].atime.substr(1, 2));
  lineType = parseInt(window.H2buffer.DataAttr[attr].line.substr(1, 2));
  dp_vis = window.H2buffer.DataAttr[attr].visible;
  unit = window.H2buffer.DataAttr[attr].unit;
  shortname = window.H2buffer.DataAttr[attr].shortname;

  stacking = window.H2buffer.DataAttr[attr].stack;

  dashtype = window.H2buffer.DashType[parseInt(window.H2buffer.DataAttr[attr].dash.substr(1, 2))];

  linewidth = parseInt(window.H2buffer.DataAttr[attr].width.substr(1, 2));

  marker = defineMarker(parseInt(window.H2buffer.DataAttr[attr].mark.substr(1, 2)), color, linewidth);

  switch (dptype) {
    case "MEAN5MINUTES":
      valueDecimals = 3;
      break;
    case "STATE":
    case "VALVE_STATE":
      valueDecimals = 0;
      break;
  }

  if (DP.attributes.type === "BOOL") {
    valueDecimals = 0;
  }
  if (DP.attributes.unit === "%") {
    valueDecimals = 0;
  }
  if (DP.id.interfaceId === "SysVar" && DP.attributes.unit === "°C") {
    valueDecimals = 1;
  }

  if (lineType === 0) {
    type = "spline";
    step = "";
  } else if (lineType === 1) {
    type = "line";
    step = "";
  } else if (lineType === 2) {
    type = "line";
    step = "left";
  } else if (lineType === 3) {
    type = "line";
    step = "center";
  } else if (lineType === 4) {
    type = "line";
    step = "right";
  } else if (lineType === 5) {
    type = "scatter";
    step = "";
  } else if (lineType === 6) {
    type = "areaspline";
    step = "";
  } else if (lineType === 7) {
    type = "area";
    step = "";
  } else if (lineType === 8) {
    type = "area";
    step = "left";
  } else if (lineType === 9) {
    type = "area";
    step = "center";
  } else if (lineType === 10) {
    type = "area";
    step = "right";
  } else if (lineType === 11) {
    type = "column";
    step = "";
  }

  let groupUnits = [];
  let groupforced = false;
  let groupsmoothed = false;
  let groupwidth = 2;

  // fine grouping Highchart standard
  if (aggrTime === 0) {
    groupwidth = 50;
    groupUnits = null;

    // dyna. grouping start by 15 min.
  } else if (aggrTime === 1) {
    groupforced = true;
    groupwidth = 50;
    groupUnits = [['minute', [15, 30]], ['hour', [1, 2, 3, 4, 6, 8, 12]], ['day', [1]], ['week', [1]], ['month', [1, 3, 6]], ['year', [1]],];

    // dyna. only hours, days and month
  } else if (aggrTime === 2) {
    groupUnits = [['hour', [1]], ['day', [1]], ['month', [1]], ['year', [1]],];
    // fix hours
  } else if (aggrTime === 3) {
    groupUnits = [['hour', [1]],];
    groupforced = true;
  } else if (aggrTime === 4) {
    groupUnits = [['day', [1]],];
    groupforced = true;
  } else if (aggrTime === 5) {
    groupUnits = [['week', [1]],];
    groupforced = true;
  } else if (aggrTime === 6) {
    groupUnits = [['month', [1]],];
    groupforced = true;
  } else if (aggrTime === 7) {
    groupUnits = [['month', [3]],];
    groupforced = true;
  } else if (aggrTime === 8) {
    groupUnits = [['year', [1]],];
    groupforced = true;
  } else if (aggrTime === 9) {
    groupUnits = [['hour', [3]],];
    groupforced = true;
  } else if (aggrTime === 10) {
    groupUnits = [['hour', [6]],];
    groupforced = true;
  } else if (aggrTime === 11) {
    groupUnits = [['hour', [8]],];
    groupforced = true;
  } else if (aggrTime === 12) {
    groupUnits = [['hour', [12]],];
    groupforced = true;
  }

  if (aggrType === 1) {
    grouping = {
      enabled: true,
      approximation: 'average',
      forced: groupforced,
      smoothed: groupsmoothed,
      groupPixelWidth: groupwidth,
      units: groupUnits,
    };
  } else if (aggrType === 2 || aggrType === 4 || aggrType === 5 || aggrType === 7) {
    grouping = {
      enabled: true,
      approximation: 'sum',
      forced: groupforced,
      smoothed: groupsmoothed,
      groupPixelWidth: groupwidth,
      units: groupUnits,
    };
  } else if (aggrType === 3) {
    grouping = {
      enabled: true,
      approximation: 'average',
      forced: groupforced,
      smoothed: groupsmoothed,
      groupPixelWidth: groupwidth,
      units: groupUnits,
    };
    type = (type === "line") ? "spline" : type;
  } else {
    grouping = {
      enabled: false,
    };
  }

  let pointFormater = null;
  let pointFormat = null;
  let serienName = '';

  pointFormater = function() { return toolTipInfo(this); };

  if (shortname !== '') {
    serienName = shortname;
  } else if (DP_type.substr(0, 1) === 'C') {
    serienName = (DP.id.interfaceId === "SysVar")
      ? (DP.attributes.displayName)
      : (DP.attributes.displayName + '.' + DP.id.identifier) + '(' + window.ChhLanguage.default.historian['comptype' + DP_type] + ')';
  } else if (DP.id.interfaceId === "SysVar") {
    serienName = DP.attributes.displayName;
  } else {
    serienName = DP.attributes.displayName + '.' + DP.id.identifier;
  }

  let def_serie = {
    id: attrIDX,
    name: serienName,
    type: type,
    step: step,
    yAxis: yAxis,
    marker: marker,
    visible: (dp_vis === 2) ? true : false,
    color: color,
    dashStyle: dashtype,
    lineWidth: linewidth,
    fillOpacity: 0.4,
    borderColor: color,
    borderWidth: 2,
    stacking: (stacking === 0) ? null : 'normal',
    stack: (stacking === 0) ? null : ('group' + stacking),
    findNearestPointBy: 'xy',
    data: [],
    tooltip: {
      valueDecimals: valueDecimals,
      pointFormat: pointFormat,
      pointFormatter: pointFormater,
      valueSuffix: ' ' + unit,
    },
    dataGrouping: grouping,
    dataLabels: defineDataLabels(),
  };

  // Create Chart Serie !!!
  window.H2buffer.chart.addSeries(def_serie, false, false);

}

function defineDataLabels() {

  let objLabels;

  if (window.H2buffer.Labels === 0) {
    objLabels = { enabled: false };
  } else if (window.H2buffer.Labels === 1) {
    objLabels = {
      enabled: true,
      allowOverlap: true,
      color: null,
      style: {
        "color": null,
        fontSize: Math.round(window.H2buffer.FontSize / 6 * 5).toString() + "px",
      },
      formatter: function() {
        let last;
        if (this.series.data.length > 0) {
          last = this.series.data[this.series.data.length - 1];
        } else if (this.series.points.length > 0) {
          last = this.series.points[this.series.points.length - 1];
        }
        if (last && last.category) {
          if (this.point.category === last.category) {
            return this.series.name;
          }
        }
        return "";
      }
    };

  } else if (window.H2buffer.Labels === 2) {
    objLabels = {
      enabled: true,
      allowOverlap: false,
      color: null,
      style: {
        "color": null,
        fontSize: Math.round(window.H2buffer.FontSize / 6 * 5).toString() + "px",
      },
      formatter: function() {
        return window.Highcharts.numberFormat(this.y, 1);
      }
    };
  }

  return objLabels;
}

function defineMarker(iMarker, strColor, iLineW) {

  let objMarker = {
    enabled: false,
    states: {
      hover: {
        enabled: true,
      }
    }
  };
  let iRadius;
  if (iLineW < 3) {
    iRadius = 4;
  } else {
    iRadius = (4 + iLineW - 2);
  }
  if (iMarker > 0 && iMarker <= window.H2buffer.chart.options.symbols.length) {
    objMarker = {
      enabled: true,
      symbol: window.H2buffer.chart.options.symbols[iMarker - 1],
      radius: iRadius,
      lineColor: strColor,
      lineWidth: 0,
      fillColor: strColor,
    };
  } else if (iMarker > window.H2buffer.chart.options.symbols.length && iMarker <= window.H2buffer.chart.options.symbols.length * 2) {
    objMarker = {
      enabled: true,
      symbol: window.H2buffer.chart.options.symbols[iMarker - 1 - window.H2buffer.chart.options.symbols.length],
      radius: iRadius,
      lineColor: 'black',
      lineWidth: 1,
      fillColor: strColor,
    };
  } else if (iMarker > window.H2buffer.chart.options.symbols.length * 2 && iMarker <= window.H2buffer.chart.options.symbols.length * 3) {
    objMarker = {
      enabled: true,
      symbol: window.H2buffer.chart.options.symbols[iMarker - 1 - window.H2buffer.chart.options.symbols.length * 2],
      radius: iRadius,
      lineColor: 'white',
      lineWidth: 1,
      fillColor: strColor,
    };
  } else if (iMarker > window.H2buffer.chart.options.symbols.length * 3 && iMarker <= window.H2buffer.chart.options.symbols.length * 4) {
    objMarker = {
      enabled: true,
      symbol: window.H2buffer.chart.options.symbols[iMarker - 1 - window.H2buffer.chart.options.symbols.length * 3],
      radius: iRadius,
      lineColor: strColor,
      lineWidth: 2,
      fillColor: 'black',
    };
  } else if (iMarker > window.H2buffer.chart.options.symbols.length * 4 && iMarker <= window.H2buffer.chart.options.symbols.length * 5) {
    objMarker = {
      enabled: true,
      symbol: window.H2buffer.chart.options.symbols[iMarker - 1 - window.H2buffer.chart.options.symbols.length * 4],
      radius: iRadius,
      lineColor: strColor,
      lineWidth: 2,
      fillColor: 'white',
    };
  }

  return objMarker;
}

function setData(objSerie) {

  let datStart = window.H2buffer.ZR_Start.getTime();
  let datEnd = window.H2buffer.ZR_Ende.getTime();
  let attrIDX;

  if (objSerie.options.name === 'MinMax') {
    return;
  }

  // get main DP
  if (objSerie.options.id.toString().substr(0, 1) === 'C') {
    attrIDX = objSerie.options.id.toString().split('_')[1];
  } else {
    attrIDX = objSerie.options.id.toString();
  }

  let found = false;

  let attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === attrIDX);
  if (attr !== -1) {

    if (window.H2buffer.DataAttr[attr].comp !== 'C0') {

      if (objSerie.options.id.toString().substr(0, 1) === 'C' && window.H2buffer.DataAttr[attr].visible === 2) {
        // main is visible and all will be loaded together
        return;
      }

      // correct start for comparisation data, do read only once
      datStart += getComparisionBackDay(window.H2buffer.DataAttr[attr].comp);

      if (objSerie.options.id.toString().substr(0, 1) === 'C') {
        datEnd += getComparisionBackDay(window.H2buffer.DataAttr[attr].comp);
      }
    }

    // check buffer timestamps and decide to read additional data
    if ((window.H2buffer.DataAttr[attr].buffer_data) && (window.H2buffer.DataAttr[attr].buffer_data.buffer_start) && (window.H2buffer.DataAttr[attr].buffer_data.buffer_end)) {
      if ((window.H2buffer.DataAttr[attr].buffer_data.buffer_start <= datStart) && (window.H2buffer.DataAttr[attr].buffer_data.buffer_end >= datEnd)) {
        // all data already in the buffer
        found = true;
        setSerienData(attr, objSerie);
      } else if (window.H2buffer.DataAttr[attr].buffer_data.buffer_start > datStart
        && window.H2buffer.DataAttr[attr].buffer_data.buffer_start <= datEnd
        && window.H2buffer.DataAttr[attr].buffer_data.buffer_end >= datEnd
        && window.H2buffer.DataAttr[attr].buffer_data.values.length > 0) {
        // append to begin
        datEnd = window.H2buffer.DataAttr[attr].buffer_data.buffer_start;
      } else if (window.H2buffer.DataAttr[attr].buffer_data.buffer_start <= datStart
        && window.H2buffer.DataAttr[attr].buffer_data.buffer_end >= datStart
        && window.H2buffer.DataAttr[attr].buffer_data.buffer_end < datEnd
        && window.H2buffer.DataAttr[attr].buffer_data.values.length > 0) {
        // append to end by refresh button
        datStart = window.H2buffer.DataAttr[attr].buffer_data.buffer_end;
      }
    }
    // missing data found ?
    if (!found) {
      getDataH2(objSerie, window.H2buffer.DataAttr[attr].id, attr, datStart, datEnd);
    }
  }
}

// save received data
function bufferSerienData(id, data) {

  if (!id) {
    console.log('ID missing');
    return;
  }

  // find queue entry
  let q_i = window.H2buffer.Queue.findIndex(obj => obj[0] === id);

  let attrIDX = window.H2buffer.Queue[q_i][3];

  if (typeof data === 'string') {

    window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_start = window.H2buffer.Queue[q_i][4];
    window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_end = window.H2buffer.Queue[q_i][5];
    window.H2buffer.DataAttr[attrIDX].buffer_data.timestamps = [];
    window.H2buffer.DataAttr[attrIDX].buffer_data.values = [];

    let lines = data.split('\r\n');
    lines.forEach(function(p) {
        let arrRow = p.split(',');
        let lineDate =  new Date(arrRow[0]);
        let lineValue = Math.round( parseFloat( arrRow[1] ) * 1000.0) / 1000.0;  
        if (lineDate && lineValue) {
          window.H2buffer.DataAttr[attrIDX].buffer_data.timestamps.push( lineDate.getTime() );
          window.H2buffer.DataAttr[attrIDX].buffer_data.values.push( lineValue );
        }
    });

  } else if (data.values.length > 0) {

    // correct values to round -3
    for (let i = 0; i < data.values.length; i++) {
      data.values[i] = Math.round(data.values[i] * 1000) / 1000;
    }

    if (window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_start >= window.H2buffer.Queue[q_i][4]
      && window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_start === window.H2buffer.Queue[q_i][5]
      && window.H2buffer.DataAttr[attrIDX].buffer_data.values.length > 0) {

      window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_start = window.H2buffer.Queue[q_i][4];
      window.H2buffer.DataAttr[attrIDX].buffer_data.timestamps = data.timestamps.concat(window.H2buffer.DataAttr[attrIDX].buffer_data.timestamps);
      window.H2buffer.DataAttr[attrIDX].buffer_data.values = data.values.concat(window.H2buffer.DataAttr[attrIDX].buffer_data.values);

    } else if (window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_end <= window.H2buffer.Queue[q_i][5]
      && window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_end === window.H2buffer.Queue[q_i][4]
      && window.H2buffer.DataAttr[attrIDX].buffer_data.values.length > 0) {

      window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_end = window.H2buffer.Queue[q_i][5];
      window.H2buffer.DataAttr[attrIDX].buffer_data.timestamps = window.H2buffer.DataAttr[attrIDX].buffer_data.timestamps.concat(data.timestamps);
      window.H2buffer.DataAttr[attrIDX].buffer_data.values = window.H2buffer.DataAttr[attrIDX].buffer_data.values.concat(data.values);
    } else {
      window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_start = window.H2buffer.Queue[q_i][4];
      window.H2buffer.DataAttr[attrIDX].buffer_data.buffer_end = window.H2buffer.Queue[q_i][5];
      window.H2buffer.DataAttr[attrIDX].buffer_data.timestamps = data.timestamps;
      window.H2buffer.DataAttr[attrIDX].buffer_data.values = data.values;
    }

    // update counter
    if (window.H2buffer.Navigator < 3) {
      document.getElementById("count_val").innerHTML = (Number(document.getElementById("count_val").innerHTML) + data.values.length).toString();
    } else {
      document.getElementById("count_val").innerHTML = "";
    }
  }

  // get which serie has to be updated
  let serie = window.H2buffer.Queue[q_i][2];

  // queue clear for this one
  window.H2buffer.Queue.splice(q_i, 1);

  loadingInfo();

  setSerienData(attrIDX, serie);

  // check how to display by button ALL, get oldest timestamp of new data
  if ((window.H2buffer.ZR_Ende - window.H2buffer.ZR_Start) > (367 * 24 * 60 * 60 * 1000)) {
    let data_min = window.H2buffer.ZR_Ende.getTime();
    let found = false;
    for (let l_serie of window.H2buffer.chart.series) {
      if (l_serie.visible && l_serie.options.group !== "nav") {
        // get oldest date
        if (l_serie.xData[0] && l_serie.xData[0] < data_min) {
          data_min = l_serie.xData[0];
          found = true;
        }
      }
    }
    if (found) {
      window.H2buffer.ZR_Start = new Date(data_min);
      window.H2buffer.Button_Jump = true;
    }
  }

  loadingInfo();
}

function setSerienData(p_attr, serieObj) {

  let aggrType = parseInt(window.H2buffer.DataAttr[p_attr].aggr.substr(1, 2));
  let compType = window.H2buffer.DataAttr[p_attr].comp;

  let datStart = window.H2buffer.ZR_Start.getTime();
  let datEnd = window.H2buffer.ZR_Ende.getTime();

  let arr = [];
  let backSec = 0;

  if (typeof serieObj.options === 'undefined') {
    return;
  }
  // Min/Max not needed
  if (serieObj.options.name === 'MinMax') {
    return;
  }

  // no data exists
  if (!window.H2buffer.DataAttr[p_attr].buffer_data || !window.H2buffer.DataAttr[p_attr].buffer_data.timestamps) {
    return;
  }

  if (serieObj.options.id.toString().substr(0, 1) === 'C') {

    // Set backtime
    backSec = getComparisionBackDay(compType);

    datStart += backSec;
    datEnd += backSec;

    let attr2 = window.H2buffer.DataAttr.findIndex(obj => obj.id === serieObj.options.id.toString());
    if (attr2) {
      aggrType = parseInt(window.H2buffer.DataAttr[attr2].aggr.substr(1, 2));
    }
  }

  // collect all timesstamps and Values - no aggregation
  if (aggrType === 0) {

    arr = setSerienDataAggr0(p_attr, datStart, datEnd, backSec);

    // Delta +/-
  } else if (aggrType === 2) {

    arr = setSerienDataAggr2(p_attr, datStart, datEnd, backSec);

    // collect all timesstamps and Values for TIME_ON Aggregation
  } else if (aggrType === 5) {

    arr = setSerienDataAggr5(p_attr, datStart, datEnd, backSec);

    // no aggregation but rounded to min, better for mouse over sync to other lines
  } else if (aggrType === 6) {

    arr = setSerienDataAggr6(p_attr, datStart, datEnd, backSec);

    // Delta +
  } else if (aggrType === 7) {

    arr = setSerienDataAggr7(p_attr, datStart, datEnd, backSec);

    // default aggregation, repeat it to timeslots at least all 10 min
  } else {

    arr = setSerienDataAggr1(p_attr, datStart, datEnd, backSec);

  }

  // Here Data are ready to set for Serie
  serieObj.setData(arr, true, false, false);

  // prepare and show min/max series
  if (aggrType === 3) {
    addAggregationMinMax(serieObj);
  }

  // update colors on txt
  loadNewAxisInfo();
  // Update Aggregation Text
  showAggrText();

  // read data for comp series
  if (window.H2buffer.DataAttr[p_attr].comp !== 'C0' && (serieObj.options.id.toString().substr(0, 1) !== 'C')) {

    let sobj = window.H2buffer.chart.get(window.H2buffer.DataAttr[p_attr].comp + '_' + window.H2buffer.DataAttr[p_attr].id);
    let attrC = window.H2buffer.DataAttr.findIndex(obj => obj.id === window.H2buffer.DataAttr[p_attr].comp + '_' + window.H2buffer.DataAttr[p_attr].id);
    if (sobj && attrC !== -1 && window.H2buffer.DataAttr[attrC].comp === 'C0' && window.H2buffer.DataAttr[attrC].visible === 2) {
      setSerienData(p_attr, sobj);
    }
  }
}

// collect all timesstamps and Values
function setSerienDataAggr0(p_attr, datStart, datEnd, backSec) {

  let arr = [];

  // Define BufferLink
  let buffer = window.H2buffer.DataAttr[p_attr].buffer_data;

  // get start and end position over binary search
  let arrStart;
  arrStart = sortedIndex(buffer.timestamps, datStart);
  let arrEnd;
  arrEnd = sortedIndex(buffer.timestamps, datEnd);

  if (datStart <= buffer.timestamps[arrEnd]) {
    if (arrStart > 0 && datStart !== buffer.timestamps[arrStart]) {
      arr.push([datStart - backSec, (buffer.values[arrStart - 1] * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset]);
    }
    for (let i = arrStart; i <= arrEnd; i++) {
      arr.push([buffer.timestamps[i] - backSec, (buffer.values[i] * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset]);
    }
  }

  return arr;
}

// default aggregation, repeat it to timeslots at least all 10 min
function setSerienDataAggr1(p_attr, datStart, datEnd, backSec) {

  let arr = [];

  // Define BufferLink
  let buffer = window.H2buffer.DataAttr[p_attr].buffer_data;

  // get start and end position over binary search
  let arrStart;
  arrStart = sortedIndex(buffer.timestamps, datStart);
  let arrEnd;
  arrEnd = sortedIndex(buffer.timestamps, datEnd);

  if (arrStart < buffer.timestamps.length) {
    let last_value = buffer.values[arrStart];
    let last_time = buffer.timestamps[arrStart];

    for (let i = arrStart; i <= arrEnd; i++) {

      // fill long empty periods with last_value, that aggregation works
      if ((buffer.timestamps[i] - last_time) > 600000) {
        last_time = Math.round((last_time + 600000) / 60000) * 60000;
        for (let t = last_time; t < buffer.timestamps[i] - 300000; t = t + 600000) {
          arr.push([t - backSec, last_value]);
        }
      }

      last_value = (buffer.values[i] * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset;
      last_time = buffer.timestamps[i];

      arr.push([buffer.timestamps[i] - backSec, last_value]);
    }
  }

  return arr;
}

// Delta +/-
function setSerienDataAggr2(p_attr, datStart, datEnd, backSec) {

  let arr = [];

  // Define BufferLink
  let buffer = window.H2buffer.DataAttr[p_attr].buffer_data;

  // get start and end position over binary search
  let arrStart;
  arrStart = sortedIndex(buffer.timestamps, datStart);
  let arrEnd;
  arrEnd = sortedIndex(buffer.timestamps, datEnd);

  // only if values found
  if (arrStart < buffer.timestamps.length) {
    let last_value = buffer.values[arrStart];
    let last_time = buffer.timestamps[arrStart];

    for (let i = arrStart + 1; i <= arrEnd; i++) {

      if (buffer.timestamps[i] >= datStart && buffer.timestamps[i] <= datEnd) {
        // fill missing times with delta 0 every 10 min.
        if ((buffer.timestamps[i] - last_time) > 600000) {
          last_time = Math.round((last_time + 600000) / 60000) * 60000;
          for (let t = last_time; t < buffer.timestamps[i]; t = t + 600000) {
            arr.push([t, 0]);
          }
        }

        arr.push([buffer.timestamps[i] - backSec, ((buffer.values[i] - last_value) * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset]);

        last_value = buffer.values[i];
        last_time = buffer.timestamps[i];
      }
    }
  }

  return arr;
}

// collect all timesstamps and Values for TIME_ON Aggregation
function setSerienDataAggr5(p_attr, datStart, datEnd, backSec) {

  let arr = [];
  let t = 0;

  // Define BufferLink
  let buffer = window.H2buffer.DataAttr[p_attr].buffer_data;

  // get start and end position over binary search
  let arrStart;
  arrStart = sortedIndex(buffer.timestamps, datStart);
  let arrEnd;
  arrEnd = sortedIndex(buffer.timestamps, datEnd);

  // only if values found
  if (arrStart < buffer.timestamps.length) {

    let last_value = (buffer.values[arrStart] > 0) ? 1 : 0;
    let last_time = buffer.timestamps[arrStart];

    for (let i = arrStart + 1; i <= arrEnd; i++) {
      if (last_value > 0 && buffer.values[i] === 0) {

        last_value = buffer.timestamps[i] - last_time;
        t = last_time;
        // fill every minute with 1 as run time
        if (last_value > 60000) {
          for (t = last_time; t < buffer.timestamps[i] - 60000; t = t + 60000) {
            arr.push([t - backSec, (1 * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset]);
            last_value -= 60000;
          }
        }
        if (last_value > 0) {
          arr.push([t - 1 - backSec, (Math.round(last_value / 60) / 1000 * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset]);
        }
        last_value = 0;
        last_time = buffer.timestamps[i];

      } else if (last_value === 0 && buffer.values[i] > 0) {

        last_value = buffer.timestamps[i] - last_time;
        // fill every minute with 1 as run time
        if (last_value > 60000) {
          for (t = last_time; t < buffer.timestamps[i] - 60000; t = t + 60000) {
            arr.push([t - backSec, 0]);
            last_value -= 60000;
          }
        }

        last_value = 1;
        last_time = buffer.timestamps[i];
      }
    }
    // fill also last minutes if still on
    if (last_value > 0) {
      last_value = datEnd - last_time;
      if (last_value > 60000) {
        for (t = last_time; t < datEnd - 60000; t = t + 60000) {
          arr.push([t - backSec, (1 * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset]);
          last_value -= 60000;
        }
      }
      if (last_value > 0) {
        arr.push([datEnd - backSec, (Math.round(last_value / 60) / 1000 * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset]);
      }
    }
  }
  return arr;
}

// no aggregation but rounded to min, better for mouse over sync to other lines
function setSerienDataAggr6(p_attr, datStart, datEnd, backSec) {

  let arr = [];

  // Define BufferLink
  let buffer = window.H2buffer.DataAttr[p_attr].buffer_data;

  // get start and end position over binary search
  let arrStart;
  arrStart = sortedIndex(buffer.timestamps, datStart);
  let arrEnd;
  arrEnd = sortedIndex(buffer.timestamps, datEnd);

  if (datStart <= buffer.timestamps[arrEnd]) {

    for (let i = arrStart; i <= arrEnd; i++) {

      let timestamprounded = Math.round((buffer.timestamps[i] - backSec) / 60000) * 60000;
      arr.push([timestamprounded, (buffer.values[i] * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset]);

    }
  }

  return arr;
}

// Delta +
function setSerienDataAggr7(p_attr, datStart, datEnd, backSec) {

  let arr = [];

  // Define BufferLink
  let buffer = window.H2buffer.DataAttr[p_attr].buffer_data;

  // get start and end position over binary search
  let arrStart;
  arrStart = sortedIndex(buffer.timestamps, datStart);
  let arrEnd;
  arrEnd = sortedIndex(buffer.timestamps, datEnd);

  // only if values found
  if (arrStart < buffer.timestamps.length) {
    let last_value = buffer.values[arrStart];
    let last_time = buffer.timestamps[arrStart];

    for (let i = arrStart + 1; i <= arrEnd; i++) {

      if (buffer.timestamps[i] >= datStart && buffer.timestamps[i] <= datEnd) {
        // fill missing times with delta 0 every 10 min.
        if ((buffer.timestamps[i] - last_time) > 600000) {
          last_time = Math.round((last_time + 600000) / 60000) * 60000;
          for (let t = last_time; t < buffer.timestamps[i]; t = t + 600000) {
            arr.push([t, 0]);
          }
        }

        // only + values, - are ignored
        let delta_val = ((buffer.values[i] - last_value) * window.H2buffer.DataAttr[p_attr].factor) + window.H2buffer.DataAttr[p_attr].offset;
        if (delta_val >= 0) {
          arr.push([buffer.timestamps[i] - backSec, delta_val]);
        }

        last_value = buffer.values[i];
        last_time = buffer.timestamps[i];
      }
    }
  }
  return arr;
}


// Find next timestamp in array by binary search
function sortedIndex(array, value) {
  let low = 0, high = array.length - 1, mid;
  if (array[low] >= value) {
    return 0;
  }
  if (array[high] <= value) {
    return high;
  }
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  if (low > array.length - 1) {
    low = array.length - 1;
  }
  return low;
}

/**
*  read timeSerien data for H2 database
*/
function getDataH2(p_series, p_attrID, p_attr, datStart, datEnd) {
  // Refresh for Min/Max Aggregation done directly
  if (p_series.options.name === 'MinMax') {
    return;
  }

  let key = p_attrID + '_' + Date.now();
  let p_id = p_series.options.id.toString();

  // refresh for comparisation done over real ID
  if (p_series.options.id.toString().substr(0, 1) === 'C') {
    p_id = p_id.split('_')[1];
  }

  // save request to queue
  window.H2buffer.Queue.push([key, p_attrID, p_series, p_attr, datStart, datEnd]);

  // display loading info
  loadingInfo();

  // get serien data from H2 database
  let url = 'http://' + window.H2buffer.server + ':' + window.H2buffer.port;
  url += '/query/jsonrpc.gy';
  url += (window.H2buffer.ApiKey === "") ? "" : "?" + window.H2buffer.ApiKey;


  let postData = {}
  if (window.H2buffer.DataAttr[p_attr].script.length>0){

    let txtScript = window.H2buffer.DataAttr[p_attr].script;

    if (txtScript.toUpperCase().includes('.READ(') ) {
      txtScript = txtScript.replace('BeginDate', 'new Date('+datStart.toString()+')');
      txtScript = txtScript.replace('EndDate', 'new Date('+datEnd.toString()+')');

      postData = {
        id: key,
        method: 'executeScript',
        params: [txtScript, false]
      };
    } else {
      postData = {
        id: key,
        method: 'calculateTimeSeries',
        params: [txtScript, datStart, datEnd]
      };
    }
  } else {
    postData = {
      id: key,
      method: 'getTimeSeriesRaw',
      params: [p_id, datStart, datEnd]
    };
  }

  postData = JSON.stringify(postData);

  $.ajax({
    url: url,
    dataType: "json",
    contentType: "application/json",
    type: "post",
    data: postData,
    cache: false,
    async: true,
    error: function(xhr, status, error) {
      ajaxErrorOutput(xhr, status, error);
    },
    success: function(result) {
      if (!result.result) {
        console.log(result);

        if (result.id) {
          // find queue entry
          let q_i = window.H2buffer.Queue.findIndex(obj => obj[0] === result.id);

          // queue clear for this one
          window.H2buffer.Queue.splice(q_i, 1);

          loadingInfo();
        }
        if (result.error && result.error.message) {
          alert(result.error.message);
        }
      } else if (result.result) {
        bufferSerienData(result.id, result.result);
      }
    }
  });
}

/**
* Request default settings from the server and check local storage
*/
function requestInitData() {

  if (window.H2buffer.Navigator < 3) {
    document.getElementById("count_val").innerHTML = "0";
    document.getElementById('count_text').innerHTML = window.ChhLanguage.default.historian.labelValues;
  } else {
    document.getElementById("count_val").innerHTML = "";
    document.getElementById('count_text').innerHTML = "";
  }

  // set default global chart object
  window.H2buffer.chart = $('#container').highcharts();

  // get LocalData DataPoints
  let loc_dataPoints = getLocalData('DataPoints');
  if (loc_dataPoints) {

    // speed up with local data and read actual one later

    try {
      window.H2buffer.DataPoints = JSON.parse(loc_dataPoints);
    } catch {
      window.H2buffer.DataPoints = {};
    }
    if (window.H2buffer.DataPoints[1] && window.H2buffer.DataPoints[1].attributes) {
      parseDataPoints();

      // read datapoints only if old
      let loc_datatime = getLocalData('DataPointsTime');
      if (loc_datatime === null || parseInt(loc_datatime) + 3600000 <= Date.now()) {
        // actual data will be read in 2 sec.
        setTimeout(requestData, 2000);
      }
    } else {
      requestData();
    }
  } else {
    requestData();
  }

  // show HighChart Stock Tools hidden
  if (window.H2buffer.chart.stockTools) {
    window.H2buffer.chart.stockTools.showhideBtn.click();
  }
}

/**
* Request data from the server, add it to the graph and set a timeout
* to request again
*/
function requestData() {

  let url = 'http://' + window.H2buffer.server + ':' + window.H2buffer.port;
  url += '/query/jsonrpc.gy';
  url += (window.H2buffer.ApiKey === "") ? "" : "?" + window.H2buffer.ApiKey;

  let postData = {
    id: 'DP',
    method: 'getDataPoint',
    params: []
  };

  postData = JSON.stringify(postData);

  $.ajax({
    url: url,
    dataType: "json",
    contentType: "application/json",
    type: "post",
    data: postData,
    cache: false,
    async: true,
    error: function(xhr, status, error) {
      ajaxErrorOutput(xhr, status, error);
    },
    success: function(result) {
      requestData2(result);
    }
  });

}

/**
* Request data from the server, add it to the graph and set a timeout
* to request again
*/
function requestSettings() {

  let url = 'http://' + window.H2buffer.server + ':' + window.H2buffer.port;
  url += '/query/jsonrpc.gy';
  url += (window.H2buffer.ApiKey === "") ? "" : "?" + window.H2buffer.ApiKey;

  let postData = {
    id: 'Setup',
    method: 'getConfig',
    params: ['HighChart']
  };

  postData = JSON.stringify(postData);

  $.ajax({
    url: url,
    dataType: "json",
    contentType: "application/json",
    type: "post",
    data: postData,
    cache: false,
    async: true,
    error: function(xhr, status, error) {
      ajaxErrorOutput(xhr, status, error);
    },
    success: function(result) {
      let strSetNew;
      // Get Settings from H2 database as String
      if (result.result) {
        try {
          strSetNew = result.result.replace(/'/g, '"');

          if (strSetNew && strSetNew.substring(0, 2) === '{"') {
            window.H2buffer.Settings = JSON.parse(strSetNew);
            window.H2buffer.Settings_old = JSON.parse(strSetNew);
          } else {
            window.H2buffer.Settings = { 'Setting': '' };
            strSetNew = JSON.stringify(window.H2buffer.Settings);
          }
        }
        catch (e) {
          window.H2buffer.Settings = { 'Setting': '' };
          strSetNew = JSON.stringify(window.H2buffer.Settings);
        }
      } else {
        window.H2buffer.Settings = { 'Setting': '' };
        strSetNew = JSON.stringify(window.H2buffer.Settings);
      }
      if (strSetNew !== getLocalData('setting')) {
        // save LocalData Settings
        setLocalData('setting', strSetNew);

        parseSetting();

        readLinkData();
      }
      setLocalData('settingTime', Date.now());
    },
  });
}

function parseSetting() {

  // read default from YAXIS
  // take default values from database
  let x;
  let text2;
  let k;

  if (window.H2buffer.Settings) {
    for (x = 0; x < window.H2buffer.yAxis.length; x++) {
      if (window.H2buffer.Settings['YAXIS' + x]) {
        text2 = window.H2buffer.Settings['YAXIS' + x].split('|');
        let axis_id = x;
        for (k = 0; k < text2.length; k++) {
          if (text2[k].substr(0, 1) === 'P') {
            if (text2[k].substr(1, 1) === '0') {
              window.H2buffer.yAxis[axis_id].position = false;
            }
            if (text2[k].substr(1, 1) === '1') {
              window.H2buffer.yAxis[axis_id].position = true;
            }
          } else if (text2[k].substr(0, 1) === 'C') {
            if (text2[k].substr(1, 1) === '0') {
              window.H2buffer.yAxis[axis_id].type = 0;
            }
            if (text2[k].substr(1, 1) === '1') {
              window.H2buffer.yAxis[axis_id].type = 1;
            }
          } else if (text2[k].substr(0, 1) === 'A') {
            if (text2[k].substr(1, 1) >= '0' && text2[k].substr(1, 1) <= '2') {
              window.H2buffer.yAxis[axis_id].limit = parseInt(text2[k].substr(1, 1));
            }
          } else if (text2[k].substr(0, 1) === 'L') {
            window.H2buffer.yAxis[axis_id].min = parseFloat(text2[k].substr(1, 15));
          } else if (text2[k].substr(0, 1) === 'H') {
            window.H2buffer.yAxis[axis_id].max = parseFloat(text2[k].substr(1, 15));
          } else if (text2[k].substr(0, 1) === 'G') {
            window.H2buffer.yAxis[axis_id].tick = parseInt(text2[k].substr(1, 15));
          } else if (text2[k].substr(0, 1) === 'F') {
            window.H2buffer.yAxis[axis_id].color = parseInt(text2[k].substr(1, 2));
          } else if (text2[k].substr(0, 1) === 'T') {
            try {
              window.H2buffer.yAxis[axis_id].text = decodeURIComponent(text2[k].substr(1, 50));
            } catch {
              window.H2buffer.yAxis[axis_id].text = text2[k].substr(1, 50);
            }
          }
        }
      }
    }
    // Read default Settings
    if (window.H2buffer.Settings['Setting']) {
      text2 = window.H2buffer.Settings['Setting'].split('|');
      for (k = 0; k < text2.length; k++) {
        if (text2[k].substr(0, 1) === 'L') {
          window.H2buffer.Legend = parseInt(text2[k].substr(1, 2));
        } else if (text2[k].substr(0, 1) === 'N') {
          window.H2buffer.Navigator = parseInt(text2[k].substr(1, 2));
        } else if (text2[k].substr(0, 1) === 'P') {
          window.H2buffer.Labels = parseInt(text2[k].substr(1, 2));
        } else if (text2[k].substr(0, 1) === 'D') {
          window.H2buffer.DayLight = parseInt(text2[k].substr(1, 2));
        } else if (text2[k].substr(0, 1) === 'G') {
          window.H2buffer.Grid = parseInt(text2[k].substr(1, 2));
        } else if (text2[k].substr(0, 1) === 'F') {
          window.H2buffer.ShowFilter = parseInt(text2[k].substr(1, 2));
        } else if (text2[k].substr(0, 1) === 'I') {
          window.H2buffer.DataPointFilter = parseInt(text2[k].substr(1, 2));
        } else if (text2[k].substr(0, 1) === 'B') {
          window.H2buffer.Theme = text2[k].substr(1, 30);
          if (window.H2buffer.Theme === 'standard_groß') {    // check old version
            window.H2buffer.Theme = 'standard-light';
            window.H2buffer.FontSize = 20;
          } else if (window.H2buffer.Theme === 'standard_groesser') {     // check old version
            window.H2buffer.Theme = 'standard-light';
            window.H2buffer.FontSize = 30;
          }
        } else if (text2[k].substr(0, 1) === 'O') {
          window.H2buffer.FontSize = parseInt(text2[k].substr(1, 3));
        } else if (text2[k].substr(0, 1) === 'C') {
          window.H2buffer.CrossHair = parseInt(text2[k].substr(1, 3));
        } else if (text2[k].substr(0, 1) === 'M') {
          window.H2buffer.ToolTip = parseInt(text2[k].substr(1, 3));
        } else if (text2[k].substr(0, 1) === 'H') {
          window.H2buffer.HighLight = parseInt(text2[k].substr(1, 3));
        } else if (text2[k].substr(0, 1) === 'R') {
          window.H2buffer.refreshSec = parseInt(text2[k].substr(1, 10));
        } else if (text2[k].substr(0, 1) === 'T') {
          try {
            window.H2buffer.Title = decodeURIComponent(text2[k].substr(1, 50));
          } catch {
            window.H2buffer.Title = text2[k].substr(1, 50);
          }
        } else if (text2[k].substr(0, 1) === 'S') {
          try {
            window.H2buffer.Subtitle = decodeURIComponent(text2[k].substr(1, 60));
          } catch {
            window.H2buffer.Subtitle = text2[k].substr(1, 60);
          }
        }
      }
    }
  }
}

function readLinkData() {
  // check parameter from get-link
  if (location.search) {
    let parts = decodeURIComponent(location.search.substring(1)).split('&');
    for (let l_part of parts) {
      let nv = l_part.split('=');
      if (!nv[0]) {
        continue;
      }

      if (nv[0].toLowerCase() === 'dp') {
        window.H2buffer.Limit = true;
        // parameter Periode (Stunden)
      } else if ((nv[0].toLowerCase() === 'periode') || (nv[0].toLowerCase() === 'period')) {
        window.H2buffer.ZR_Start = new Date(window.H2buffer.ZR_Ende - (new Date(3600 * 1000 * parseInt(nv[1]))));
        window.H2buffer.Zoom = parseInt(nv[1]);
        // parameter Data Point
      } else if (nv[0].toLowerCase() === 'setting') {
        readLinkDataSetting(nv[1]);
      } else if (nv[0].toLowerCase() === 'filterkey') {
        window.H2buffer.filter_feld = decodeURIComponent(nv[1].toLowerCase());
      } else if (nv[0].toLowerCase() === 'title') {
        window.H2buffer.Title = decodeURIComponent(nv[1]);
        window.H2buffer.Title = window.H2buffer.Title.replaceAll('§', '%').replaceAll('µ', '&');
      } else if (nv[0].toLowerCase() === 'subtitle') {
        window.H2buffer.Subtitle = decodeURIComponent(nv[1]);
        window.H2buffer.Subtitle = window.H2buffer.Subtitle.replaceAll('§', '%').replaceAll('µ', '&');
      } else if (nv[0].toLowerCase() === 'legend') {
        if (decodeURIComponent(nv[1].toLowerCase()) === 'false') {
          window.H2buffer.Legend = 0;
        }
        if (parseInt(decodeURIComponent(nv[1])) >= 0 && parseInt(decodeURIComponent(nv[1])) < 7) {
          window.H2buffer.Legend = parseInt(decodeURIComponent(nv[1]));
        }
      } else if (nv[0].toLowerCase() === 'navigator') {
        if (decodeURIComponent(nv[1].toLowerCase()) === 'false') {
          window.H2buffer.Navigator = 3;
        }
        if (decodeURIComponent(nv[1].toLowerCase()) >= '0' && decodeURIComponent(nv[1].toLowerCase()) <= '4') {
          window.H2buffer.Navigator = parseInt(decodeURIComponent(nv[1]));
        }
      } else if (nv[0].toLowerCase() === 'theme') {
        window.H2buffer.Theme = decodeURIComponent(nv[1].toLowerCase());
        if (window.H2buffer.Theme === 'standard_groß') {      // check old version
          window.H2buffer.Theme = 'standard-light';
          window.H2buffer.FontSize = 20;
        } else if (window.H2buffer.Theme === 'standard_groesser') {      // check old version
          window.H2buffer.Theme = 'standard-light';
          window.H2buffer.FontSize = 30;
        }
      } else if (nv[0].toLowerCase() === 'fontsize') {
        window.H2buffer.FontSize = parseInt(decodeURIComponent(nv[1]));
      } else if (nv[0].toLowerCase() === 'dpfilter') {
        window.H2buffer.DataPointFilter = parseInt(decodeURIComponent(nv[1]));
      } else if (nv[0].toLowerCase() === 'labels') {
        if (decodeURIComponent(nv[1].toLowerCase()) === 'true') {
          window.H2buffer.Labels = 1;
        }
        if (decodeURIComponent(nv[1].toLowerCase()) >= '0' && decodeURIComponent(nv[1].toLowerCase()) <= '2') {
          window.H2buffer.Labels = parseInt(decodeURIComponent(nv[1]));
        }
      } else if (nv[0].toLowerCase() === 'daylight') {
        if (decodeURIComponent(nv[1].toLowerCase()) === 'false') {
          window.H2buffer.DayLight = 0;
        }
        if (decodeURIComponent(nv[1].toLowerCase()) >= '0' && decodeURIComponent(nv[1].toLowerCase()) <= '3') {
          window.H2buffer.DayLight = parseInt(decodeURIComponent(nv[1]));
        }
      } else if (nv[0].toLowerCase() === 'grid') {
        window.H2buffer.Grid = parseInt(decodeURIComponent(nv[1]));
      } else if (nv[0].toLowerCase() === 'refresh') {
        if (parseInt(decodeURIComponent(nv[1])) > 0) {
          window.H2buffer.refreshSec = parseInt(decodeURIComponent(nv[1]));
        } else if (decodeURIComponent(nv[1].toLowerCase()) === 'true') {
          window.H2buffer.refreshSec = 60;
        }
      }
    }
  }
  if (window.H2buffer.refreshSec > 0) {
    window.H2buffer.AutoRefresh = window.H2buffer.refreshSec;
    window.H2buffer.AutoRefreshCount = window.H2buffer.AutoRefresh;
    setTimeout(autoRefresh, 1000);
  }

  createChart();

}

function readLinkDataSetting(text) {
  if (text) {
    let text2 = text.split('|');
    for (let setting of text2) {
      switch (setting.substr(0, 1)) {
        case 'L':
          window.H2buffer.Legend = parseInt(setting.substr(1, 2));
          break;
        case 'N':
          window.H2buffer.Navigator = parseInt(setting.substr(1, 2));
          break;
        case 'P':
          window.H2buffer.Labels = parseInt(setting.substr(1, 2));
          break;
        case 'D':
          window.H2buffer.DayLight = parseInt(setting.substr(1, 2));
          break;
        case 'G':
          window.H2buffer.Grid = parseInt(setting.substr(1, 2));
          break;
        case 'F':
          window.H2buffer.ShowFilter = parseInt(setting.substr(1, 2));
          break;
        case 'I':
          window.H2buffer.DataPointFilter = parseInt(setting.substr(1, 2));
          break;
        case 'B':
          window.H2buffer.Theme = setting.substr(1, 30);
          if (window.H2buffer.Theme === 'standard_groß') {    // check old version
            window.H2buffer.Theme = 'standard-light';
            window.H2buffer.FontSize = 20;
          } else if (window.H2buffer.Theme === 'standard_groesser') {     // check old version
            window.H2buffer.Theme = 'standard-light';
            window.H2buffer.FontSize = 30;
          }
          break;
        case 'O':
          window.H2buffer.FontSize = parseInt(setting.substr(1, 3));
          break;
        case 'C':
          window.H2buffer.CrossHair = parseInt(setting.substr(1, 3));
          break;
        case 'M':
          window.H2buffer.ToolTip = parseInt(setting.substr(1, 3));
          break;
        case 'H':
          window.H2buffer.HighLight = parseInt(setting.substr(1, 3));
          break;
        case 'R':
          window.H2buffer.refreshSec = parseInt(setting.substr(1, 10));
          break;
        case 'T':
          try {
            window.H2buffer.Title = decodeURIComponent(setting.substr(1, 50));
          } catch {
            window.H2buffer.Title = setting.substr(1, 50);
          }
          break;
        case 'S':
          try {
            window.H2buffer.Subtitle = decodeURIComponent(setting.substr(1, 60));
          } catch {
            window.H2buffer.Subtitle = setting.substr(1, 60);
          }
          break;
      }
    }
  }
}

/**
* Request data from the server, add it to the graph and set a timeout
* to request again
*/
function requestData2(TXT_JSON) {

  if (!TXT_JSON.result) {
    return;
  }

  let DP_point_loc = [];
  for (let dppoint of TXT_JSON.result) {
    DP_point_loc.push(dppoint);
  }

  // Sort data points on DisplayName
  DP_point_loc.sort(function(a, b) {
    let x = a.attributes.displayName + '.' + a.id.identifier;
    let y = b.attributes.displayName + '.' + b.id.identifier;
    x = x.toLowerCase();
    y = y.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  if (JSON.stringify(DP_point_loc) !== getLocalData('DataPoints')) {
    // save LocalData DataPoints
    setLocalData('DataPoints', JSON.stringify(DP_point_loc));

    window.H2buffer.DataPoints = DP_point_loc;

    parseDataPoints();
  }
  setLocalData('DataPointsTime', Date.now());

}


function parseDataPoints() {
  let i;
  let text = '';
  window.H2buffer.DataAttr = [];


  // Alle Serien aufbauen und Räume & Gewerke sammeln nur für anzeigbare
  parseDataPointFill();

  let nv;
  let parts;
  let select;
  // check parameter from get-link
  if (location.search) {
    parts = decodeURIComponent(location.search.substring(1)).split('&');
    for (i = 0; i < parts.length; i++) {
      nv = parts[i].split('=');
      if (!nv[0]) {
        continue;
      }
      // nur noch DP Werte
      if (nv[0].toLowerCase() === 'dp') {
        text = decodeURIComponent(nv[1]).toLowerCase().split(',');
        parseDataPointsDP(text, nv);

        // parameter YAXIS
      } else if (nv[0].toLowerCase() === 'yaxis') {
        text = decodeURIComponent(nv[1]).toLowerCase().split(',');
        parseDataPointsAxis(text, nv);

        // parameter Raum
      } else if (nv[0].toLowerCase() === 'room') {
        let DP_start_room = decodeURIComponent(nv[1].toLowerCase());
        select = document.getElementById("Select-Raum");
        for (let l_opt of select.options) {
          if (l_opt.label.toLowerCase() === DP_start_room.toLowerCase() || l_opt.value.toLowerCase() === DP_start_room.toLowerCase()) {
            select.value = l_opt.value;
            break;
          }
        }
        // parameter Gewerk
      } else if (nv[0].toLowerCase() === 'function') {
        let DP_start_func = decodeURIComponent(nv[1].toLowerCase());
        select = document.getElementById("Select-Gewerk");
        for (let l_opt of select.options) {
          if (l_opt.label.toLowerCase() === DP_start_func.toLowerCase() || l_opt.value.toLowerCase() === DP_start_func.toLowerCase()) {
            select.value = l_opt.value;
            break;
          }
        }

        // FilterLine
      } else if (nv[0].toLowerCase() === 'filterline') {
        if (decodeURIComponent(nv[1].toLowerCase()) === 'false' || decodeURIComponent(nv[1].toLowerCase()) === '0') {
          window.H2buffer.ShowFilter = 0;
        }
        // only filterline both
        if (decodeURIComponent(nv[1].toLowerCase()) === '1') {
          window.H2buffer.ShowFilter = 1;
        }
        // only filterline without menue
        if (decodeURIComponent(nv[1].toLowerCase()) === '2') {
          window.H2buffer.ShowFilter = 2;
        }
        // only menue without filterline
        if (decodeURIComponent(nv[1].toLowerCase()) === '3') {
          window.H2buffer.ShowFilter = 3;
        }
      }
    }
  }

  // Update Chart
  window.H2buffer.chart.update({
    yAxis: defineYAxis(),
    legend: defineLegend()
  }, false, false);

  // Yaxis options
  $("#Select-Yaxis").empty();
  select = document.getElementById("Select-Yaxis");
  for (i = 0; i < window.H2buffer.yAxis.length; i++) {
    let option = document.createElement("option");
    if (window.H2buffer.yAxis[i].text !== "" && window.H2buffer.yAxis[i].text !== null) {
      option.text = window.H2buffer.yAxis[i].text;
    } else {
      option.text = window.ChhLanguage.default.historian['yaxis' + i];
    }
    option.value = 'Y' + i;
    select.add(option);
  }

  // show menü & filter if wanted
  showFilterLine();

  // Display data
  changeEventRaumFilter();

  // check parameter Zoom from get-link
  parseDataPointsZoom();

}

function parseDataPointFill() {
  let DP_rooms = [];
  let DP_gewerk = [];
  let t;
  let text2;
  let attr;

  // reset DP attributes
  window.H2buffer.DataAttr = [];
  window.H2buffer.ColorNext = 0;

  // Alle Serien aufbauen und Räume & Gewerke sammeln nur für anzeigbare
  for (let dp of window.H2buffer.DataPoints) {

    // nur valide DPs
    if (checkFilter("ALLES", "ALLES", "", null, dp)) {

      // Räme sammeln
      if (dp.attributes.room !== null) {
        t = dp.attributes.room.split(',');
        for (let c of t) {
          if (c !== '') {
            if (DP_rooms.indexOf(c.trim()) === -1) {
              DP_rooms.push(c.trim());
            }
          }
        }
      }

      // Gewerke sammeln
      if (dp.attributes.function !== null) {
        t = dp.attributes.function.split(',');
        for (let c of t) {
          if (c !== '') {
            if (DP_gewerk.indexOf(c.trim()) === -1) {
              DP_gewerk.push(c.trim());
            }
          }
        }
      }

      // take default values from database
      if (dp.attributes.custom && dp.attributes.custom.HighChart) {
        text2 = dp.attributes.custom.HighChart.split('|');
        if (text2.length > 0) {
          attr = defaultAttrib(dp, -1, dp.idx.toString());
          window.H2buffer.DataAttr.push(attr);
        }
      }
    }
  }

  // Sort on Rooms
  DP_rooms.sort(sortLowercase);

  $("#Select-Raum").empty();
  let select = document.getElementById("Select-Raum");

  // add default all and sysvar
  select.options[select.options.length] = new Option(window.ChhLanguage.default.historian.roomALL, 'ALLES');
  select.options[select.options.length] = new Option(window.ChhLanguage.default.historian.sysvarALL, 'SYSVAR');
  for (let c of DP_rooms) {
    text2 = c;
    if (window.ChhLanguage.default.historian[c]) {
      text2 = window.ChhLanguage.default.historian[c];
    }
    select.options[select.options.length] = new Option(text2, c);
  }

  // Sort on Gewerk
  DP_gewerk.sort(sortLowercase);

  $("#Select-Gewerk").empty();
  select = document.getElementById("Select-Gewerk");
  select.options[select.options.length] = new Option(window.ChhLanguage.default.historian.functionALL, 'ALLES');
  for (let c of DP_gewerk) {
    text2 = c;
    if (window.ChhLanguage.default.historian[c]) {
      text2 = window.ChhLanguage.default.historian[c];
    }
    select.options[select.options.length] = new Option(text2, c);
  }

  // Set start parameter
  document.getElementById("filterFeld").value = window.H2buffer.filter_feld;
}

/*****/
function parseDataPointsZoom() {
  if (location.search) {
    let parts = decodeURIComponent(location.search.substring(1)).split('&');
    for (let part of parts) {
      let nv = part.split('=');
      if (!nv[0]) {
        continue;
      }
      // parameter Zoom found
      if (nv[0].toLowerCase() === 'zoom') {
        window.H2buffer.Zoom = parseFloat(nv[1]);
        let newStart = new Date(window.H2buffer.ZR_Ende - (new Date(3600 * 1000 * window.H2buffer.Zoom)));
        window.H2buffer.chart.xAxis[0].setExtremes(newStart.getTime(), window.H2buffer.ZR_Ende.getTime(), true);
      }
    }
  }
}

/*****/
function parseDataPointsDP(text, nv) {
  for (let j = 0; j < text.length; j++) {
    let text2 = text[j].toUpperCase().split('|');
    let dp_id = text2[0];

    if (text2.length > 0) {

      let DP_pos = window.H2buffer.DataPoints.findIndex(obj => obj.idx.toString().toUpperCase() === dp_id.toString().toUpperCase()
        || ((obj.attributes.displayName) && obj.attributes.displayName.toUpperCase() === dp_id.toUpperCase())
        || (obj.id.address + '.' + obj.id.identifier).toUpperCase() === dp_id.toUpperCase());
      if (DP_pos !== -1) {
        dp_id = window.H2buffer.DataPoints[DP_pos].idx.toString();
      }
      let attrpos = window.H2buffer.DataAttr.findIndex(obj => obj.id === dp_id);
      if (attrpos === -1) {
        let attr;
        if (DP_pos !== -1) {
          attr = defaultAttrib(window.H2buffer.DataPoints[DP_pos], j, dp_id);
        } else {
          attr = defaultAttrib(-1, j, dp_id);
        }

        window.H2buffer.DataAttr.push(attr);
        attrpos = window.H2buffer.DataAttr.findIndex(obj => obj.id === dp_id);
      }
      window.H2buffer.DataAttr[attrpos].visible = 2;
      for (let k = 1; k < text2.length; k++) {
        if (text2[k].substr(0, 1) === 'A') {
          window.H2buffer.DataAttr[attrpos].aggr = text2[k];
        } else if (text2[k].substr(0, 1) === 'Y') {
          window.H2buffer.DataAttr[attrpos].yaxis = text2[k];
        } else if (text2[k].substr(0, 1) === 'T') {
          window.H2buffer.DataAttr[attrpos].atime = text2[k];
        } else if (text2[k].substr(0, 1) === 'F') {
          window.H2buffer.DataAttr[attrpos].color = text2[k];
        } else if (text2[k].substr(0, 1) === 'C') {
          window.H2buffer.DataAttr[attrpos].comp = text2[k];
        } else if (text2[k].substr(0, 1) === 'L') {
          window.H2buffer.DataAttr[attrpos].line = text2[k];
        } else if (text2[k].substr(0, 1) === 'M') {
          window.H2buffer.DataAttr[attrpos].mark = text2[k];
        } else if (text2[k].substr(0, 1) === 'D') {
          window.H2buffer.DataAttr[attrpos].dash = text2[k];
        } else if (text2[k].substr(0, 1) === 'W') {
          window.H2buffer.DataAttr[attrpos].width = text2[k];
        } else if (text2[k].substr(0, 1) === 'S') {
          window.H2buffer.DataAttr[attrpos].stack = parseInt(text2[k].substr(1, 2));
        } else if (text2[k].substr(0, 1) === 'V') {
          window.H2buffer.DataAttr[attrpos].visible = parseInt(text2[k].substr(1, 1));
        } else if (text2[k].substr(0, 1) === 'U') {
          window.H2buffer.DataAttr[attrpos].unit = decodeURIComponent(nv[1]).split(',')[j].split('|')[k].substring(1, 21).replaceAll("§", "%").replaceAll('µ', '&');
        } else if (text2[k].substr(0, 1) === 'N') {
          window.H2buffer.DataAttr[attrpos].shortname = decodeURIComponent(nv[1]).split(',')[j].split('|')[k].substring(1, 41).replaceAll("§", "%").replaceAll('µ', '&');
        } else if (text2[k].substr(0, 1) === 'X') {
          window.H2buffer.DataAttr[attrpos].factor = parseFloat(text2[k].substr(1, 10));
        } else if (text2[k].substr(0, 1) === 'O') {
          window.H2buffer.DataAttr[attrpos].offset = parseFloat(text2[k].substr(1, 10));
        }
      }
    }
  }
}

/*****/
function parseDataPointsAxis(text, nv) {
  for (let j = 0; j < text.length; j++) {
    let text2 = text[j].toUpperCase().split('|');
    let axis_id = parseInt(text2[0].substr(1, 2));
    if (axis_id >= 0 && axis_id < window.H2buffer.yAxis.length) {
      if (text2.length > 0) {
        for (let k = 1; k < text2.length; k++) {
          if (text2[k].substr(0, 1) === 'P') {
            if (text2[k].substr(1, 1) === '0') {
              window.H2buffer.yAxis[axis_id].position = false;
            }
            if (text2[k].substr(1, 1) === '1') {
              window.H2buffer.yAxis[axis_id].position = true;
            }
          } else if (text2[k].substr(0, 1) === 'C') {
            if (text2[k].substr(1, 1) === '0') {
              window.H2buffer.yAxis[axis_id].type = 0;
            }
            if (text2[k].substr(1, 1) === '1') {
              window.H2buffer.yAxis[axis_id].type = 1;
            }
          } else if (text2[k].substr(0, 1) === 'A') {
            if (text2[k].substr(1, 1) === '0') {
              window.H2buffer.yAxis[axis_id].limit = 0;
            }
            if (text2[k].substr(1, 1) === '1') {
              window.H2buffer.yAxis[axis_id].limit = 1;
            }
            if (text2[k].substr(1, 1) === '2') {
              window.H2buffer.yAxis[axis_id].limit = 2;
            }
          } else if (text2[k].substr(0, 1) === 'L') {
            window.H2buffer.yAxis[axis_id].min = parseFloat(text2[k].substr(1, 15));
          } else if (text2[k].substr(0, 1) === 'H') {
            window.H2buffer.yAxis[axis_id].max = parseFloat(text2[k].substr(1, 15));
          } else if (text2[k].substr(0, 1) === 'G') {
            window.H2buffer.yAxis[axis_id].tick = parseInt(text2[k].substr(1, 15));
          } else if (text2[k].substr(0, 1) === 'F') {
            window.H2buffer.yAxis[axis_id].color = parseInt(text2[k].substr(1, 2));
          } else if (text2[k].substr(0, 1) === 'T') {
            window.H2buffer.yAxis[axis_id].text = decodeURIComponent(nv[1]).split(',')[j].split('|')[k].substring(1, 51).replaceAll("§", "%").replaceAll('µ', '&');
          }
        }
      }
    }
  }
}

/**
* Create HighChart Object on loading
*/
$(document).ready(function() {

  window.Highcharts.setOptions({
    global: {
      useUTC: false,
    },
    lang: window.ChhLanguage.default.highcharts,
  });

  window.H2buffer.ApiKey = "";
  if (typeof apiKey === "string" && apiKey !== "") {
    window.H2buffer.ApiKey = apiKey.substring(1, apiKey.length);
  }

  let loc_setting = getLocalData('setting');
  if (loc_setting && loc_setting.startsWith('{"')) {
    try {
      window.H2buffer.Settings = JSON.parse(loc_setting);
      parseSetting();
      readLinkData();

      // read config data only if old
      let loc_settime = getLocalData('settingTime');
      if (loc_settime === null || parseInt(loc_settime) + 3600000 <= Date.now()) {
        // read data in delay of 1 sec
        setTimeout(requestSettings, 1000);
      }
    } catch {
      requestSettings();
    }
  } else {
    requestSettings();
  }

  document.getElementById("container").setAttribute("style", "height:" + ($(document).height() - 160) + "px");

  // Translate to Language Set
  document.getElementById('refresh').innerHTML = window.ChhLanguage.default.historian.buttonRefresh;
  document.getElementById('createLink').innerHTML = window.ChhLanguage.default.historian.buttonLink;
  document.getElementById('bntFavorit').innerHTML = window.ChhLanguage.default.historian.favoritTxt;
  document.getElementById('filterFeld').placeholder = window.ChhLanguage.default.historian.filterPlaceHolder;
  document.title = window.ChhLanguage.default.interface.pageTitle;

  // Define a custom symbol PLUS
  window.Highcharts.SVGRenderer.prototype.symbols.plus = function(x, y, w, h) {
    return ['M', x + w * 0.3, y,
      'L', x + w * 0.7, y,
      'L', x + w * 0.7, y + h * 0.3,
      'L', x + w, y + h * 0.3,
      'L', x + w, y + h * 0.7,
      'L', x + w * 0.7, y + h * 0.7,
      'L', x + w * 0.7, y + h,
      'L', x + w * 0.3, y + h,
      'L', x + w * 0.3, y + h * 0.7,
      'L', x, y + h * 0.7,
      'L', x, y + h * 0.3,
      'L', x + w * 0.3, y + h * 0.3,
      'L', x + w * 0.3, y,
      'Z'];
  };

  if (window.Highcharts.VMLRenderer) {
    window.Highcharts.VMLRenderer.prototype.symbols.plus = window.Highcharts.SVGRenderer.prototype.symbols.plus;
  }
  window.Highcharts.defaultOptions.symbols.push('plus');

  // Define a custom symbol CROSS
  window.Highcharts.SVGRenderer.prototype.symbols.cross = function(x, y, w, h) {
    return ['M', x, y + h * 0.2,
      'L', x + w * 0.3, y + h * 0.5,
      'L', x, y + h * 0.8,
      'L', x + w * 0.2, y + h,
      'L', x + w * 0.5, y + h * 0.7,
      'L', x + w * 0.8, y + h,
      'L', x + w, y + h * 0.8,
      'L', x + w * 0.7, y + h * 0.5,
      'L', x + w, y + h * 0.2,
      'L', x + w * 0.8, y,
      'L', x + w * 0.5, y + h * 0.3,
      'L', x + w * 0.2, y,
      'L', x, y + h * 0.2,
      'Z'];
  };
  if (window.Highcharts.VMLRenderer) {
    window.Highcharts.VMLRenderer.prototype.symbols.cross = window.Highcharts.SVGRenderer.prototype.symbols.cross;
  }
  window.Highcharts.defaultOptions.symbols.push('cross');

  // Define a custom symbol STAR
  window.Highcharts.SVGRenderer.prototype.symbols.star = function(x, y, w, h) {
    return [
      'M', x, y + 0.4 * h,
      'L', x + 0.35 * w, y + 0.35 * h,
      'L', x + 0.5 * w, y,
      'L', x + 0.65 * w, y + 0.35 * h,
      'L', x + w, y + 0.4 * h,
      'L', x + 0.75 * w, y + 0.65 * h,
      'L', x + 0.85 * w, y + h,
      'L', x + 0.5 * w, y + 0.8 * h,
      'L', x + w * 0.15, y + h,
      'L', x + 0.25 * w, y + 0.65 * h,
      'Z'];
  };
  if (window.Highcharts.VMLRenderer) {
    window.Highcharts.VMLRenderer.prototype.symbols.star = window.Highcharts.SVGRenderer.prototype.symbols.star;
  }
  window.Highcharts.defaultOptions.symbols.push('star');


  let select;
  let option;
  let i;
  let key;

  // aggregation options
  select = document.getElementById("Select-Aggregation");
  for (i = 0; i < 8; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['aggrtxt' + i];
    option.value = 'A' + i;
    select.add(option);
  }

  // aggrtime options
  select = document.getElementById("Select-AggrTime");
  for (i = 0; i < 13; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['atimetxt' + i];
    option.value = 'T' + i;
    select.add(option);
  }

  // CompareType options
  select = document.getElementById("Select-Compare");
  for (i = 0; i < 14; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['comptype' + i];
    option.value = 'C' + i;
    select.add(option);
  }

  // LineType options
  select = document.getElementById("Select-Line");
  for (i = 0; i < 12; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['linetype' + i];
    option.value = 'L' + i;
    select.add(option);
  }

  // DashType options
  select = document.getElementById("Select-DashType");
  for (i = 0; i < window.H2buffer.DashType.length; i++) {
    option = document.createElement("option");
    if (window.ChhLanguage.default.historian['dashtype' + i]) {
      option.text = window.ChhLanguage.default.historian['dashtype' + i];
    } else {
      option.text = window.H2buffer.DashType[i];
    }
    option.value = 'D' + i;
    select.add(option);
  }

  // LineType options
  select = document.getElementById("Select-LineWidth");
  for (i = 0; i < 11; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['linewidth' + i];
    option.value = 'W' + i;
    select.add(option);
  }

  // Legend options
  select = document.getElementById("Select-Legend");
  for (i = 0; i < 7; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['legendtxt' + i];
    option.value = i;
    select.add(option);
  }

  // Navigator options
  select = document.getElementById("Select-Navigator");
  for (i = 0; i < 5; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['navitxt' + i];
    option.value = i;
    select.add(option);
  }

  // Label options
  select = document.getElementById("Select-Label");
  for (i = 0; i < 3; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['labeltxt' + i];
    option.value = i;
    select.add(option);
  }

  // Layout options
  select = document.getElementById("Select-Layout");
  for (i = 0; i < 4; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['layouttxt' + i];
    option.value = i;
    select.add(option);
  }

  // Grid options
  select = document.getElementById("Select-Grid");
  for (i = 0; i < 7; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['gridtxt' + i];
    option.value = i;
    select.add(option);
  }

  // Content options
  select = document.getElementById("Select-Content");
  for (i = 0; i < 4; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['contenttxt' + i];
    option.value = i;
    select.add(option);
  }

  // DataPoint options
  select = document.getElementById("Select-DataPoint");
  for (i = 0; i < 4; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['datapoint' + i];
    option.value = i;
    select.add(option);
  }

  // themes
  select = document.getElementById("Select-Theme");
  option = document.createElement("option");
  option.text = 'Standard hell/dunkel';
  option.value = 'standard';
  select.add(option);
  for (key in window.DP_Themes) {
    option = document.createElement("option");
    option.text = key;
    option.value = key;
    select.add(option);
  }

  // FontSize options
  select = document.getElementById("Select-FontSize");
  for (key in window.window.H2buffer.FontSizes) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian.fontsize + "-" + window.H2buffer.FontSizes[key].toString();
    option.value = window.H2buffer.FontSizes[key];
    select.add(option);
  }

  // CrossHair options
  select = document.getElementById("Select-CrossHair");
  for (i = 0; i < 13; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['crosshairtxt' + i];
    option.value = i;
    select.add(option);
  }

  // ToolTip options
  select = document.getElementById("Select-ToolTip");
  for (i = 0; i < 6; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['tooltiptxt' + i];
    option.value = i;
    select.add(option);
  }

  // HighLight options
  select = document.getElementById("Select-HighLight");
  for (i = 0; i < 7; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['highlighttxt' + i];
    option.value = i;
    select.add(option);
  }

  // Axis Type
  select = document.getElementById("Select-AxisType");
  option = document.createElement("option");
  option.text = window.ChhLanguage.default.historian.yaxistype0;
  option.value = '0';
  select.add(option);
  option = document.createElement("option");
  option.text = window.ChhLanguage.default.historian.yaxistype1;
  option.value = '1';
  select.add(option);

  // Axis Position
  select = document.getElementById("Select-Position");
  option = document.createElement("option");
  option.text = window.ChhLanguage.default.historian.yaxispos0;
  option.value = '0';
  select.add(option);
  option = document.createElement("option");
  option.text = window.ChhLanguage.default.historian.yaxispos1;
  option.value = '1';
  select.add(option);

  // Axis min/max
  select = document.getElementById("Select-Limit");
  option = document.createElement("option");
  option.text = window.ChhLanguage.default.historian.yaxislimit0;
  option.value = '0';
  select.add(option);
  option = document.createElement("option");
  option.text = window.ChhLanguage.default.historian.yaxislimit1;
  option.value = '1';
  select.add(option);
  option = document.createElement("option");
  option.text = window.ChhLanguage.default.historian.yaxislimit2;
  option.value = '2';
  select.add(option);

  // Stacking
  select = document.getElementById("Select-Stacking");
  for (i = 0; i < 6; i++) {
    option = document.createElement("option");
    option.text = window.ChhLanguage.default.historian['Stacking' + i];
    option.value = i;
    select.add(option);
  }

  // Add mouse wheel for legend
  (function(H) {
    H.wrap(H.Legend.prototype, 'render', function(proceed) {
      let legend = this;
      let animation = H.pick(legend.options.navigation.animation, true);

      proceed.apply(this, Array.prototype.slice.call(arguments, 1));

      $(legend.group.element).on('wheel', function(event) {
        if (window.H2buffer.Scroll_Legend) {
          let e = legend.chart.pointer.normalize(event);
          e.originalEvent.deltaY < 0 ? legend.scroll(-1, animation) : legend.scroll(1, animation);
        }
        window.H2buffer.Scroll_Legend = !window.H2buffer.Scroll_Legend;
      });
    });
  }(window.Highcharts));

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (window.H2buffer.Theme === 'standard') {
      createChart();
    }
  });

  setStockToolLang();

});

// *******************
// Stock Tools translate Bug fix
// *******************
function setStockToolLang() {
  for (let seriesType in window.Highcharts.seriesTypes) {
    let objType = window.Highcharts.seriesTypes[seriesType];
    if (objType.defaultOptions && objType.defaultOptions.params) {
      if (objType.prototype && objType.prototype.type) {
        if (window.Highcharts.defaultOptions.lang.navigation.popup.indicatorAliases) {
          if (window.Highcharts.defaultOptions.lang.navigation.popup.indicatorAliases[objType.prototype.type]) {
            objType.prototype.nameBase = window.Highcharts.defaultOptions.lang.navigation.popup.indicatorAliases[objType.prototype.type][0];
          }
        }
      }
    }
  }
}

// *******************
function changeEventRaumFilter() {
  let filter_raum = document.getElementById("Select-Raum").value;
  let filter_gewerk = document.getElementById("Select-Gewerk").value;
  let save_active_found = false;
  let attr2;

  let series;

  // remove all old series
  for (let i = window.H2buffer.chart.series.length - 1; i >= 0; i--) {
    window.H2buffer.chart.series[i].remove(false);
  }

  // add new series which are in filter
  for (let dppoint of window.H2buffer.DataPoints) {
    if (checkFilter(filter_raum, filter_gewerk, window.H2buffer.filter_feld, window.H2buffer.Limit, dppoint)) {

      addSerie(dppoint, '');
      series = window.H2buffer.chart.get(dppoint.idx.toString());

      // check if should be visible
      let attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === dppoint.idx.toString());
      if (attr !== -1) {

        if (window.H2buffer.DataAttr[attr].visible === 2) {
          series.visible = true;
          save_active_found = true;
        } else {
          series.visible = false;
        }

        // load comparisation series
        let compType = window.H2buffer.DataAttr[attr].comp;
        if (compType !== 'C0') {
          // check if options exist, if not create it with default and C0
          attr2 = window.H2buffer.DataAttr.findIndex(obj => obj.id === compType + '_' + dppoint.idx.toString());
          if (attr2 === -1) {
            window.H2buffer.DataAttr.push({
              id: compType + '_' + dppoint.idx.toString(),
              aggr: window.H2buffer.DataAttr[attr].aggr,
              atime: window.H2buffer.DataAttr[attr].atime,
              yaxis: window.H2buffer.DataAttr[attr].yaxis,
              comp: 'C0',
              line: window.H2buffer.DataAttr[attr].line,
              mark: window.H2buffer.DataAttr[attr].mark,
              color: window.H2buffer.DataAttr[attr].color,
              visible: window.H2buffer.DataAttr[attr].visible,
              dash: 'D1',
              width: window.H2buffer.DataAttr[attr].width,
              stack: window.H2buffer.DataAttr[attr].stack,
              factor: window.H2buffer.DataAttr[attr].factor,
              offset: window.H2buffer.DataAttr[attr].offset,
              unit: window.H2buffer.DataAttr[attr].unit,
              shortname: '',
              buffer_data: {
                timestamps: [],
                values: [],
                buffer_start: 0,
                buffer_end: 0
              },

            });
            // Pointer setzen
            attr2 = window.H2buffer.DataAttr.length - 1;
          }

          addSerie(dppoint, compType);

          series = window.H2buffer.chart.get(window.H2buffer.DataAttr[attr2].id);
          if (series) {
            if (window.H2buffer.DataAttr[attr2].visible === 2) {
              series.visible = true;
              save_active_found = true;
            } else {
              series.visible = false;
            }
          }

        }
      }
    }
  }

  if (save_active_found) {
    loadNewSerienData();
    loadNewAxisInfo();
  } else {
    loadNewPlotBand();
    loadNewAxisInfo();
    window.H2buffer.chart.redraw();
  }
}

//*******
function checkFilter(p_raum, p_gewerk, p_textfilter, p_limit, p_dp) {

  // Generell Filter
  if (p_dp.historyDisabled && (window.H2buffer.DataPointFilter === 0 || window.H2buffer.DataPointFilter === 2)) {
    return false;
  }

  // Generell Filter
  if (p_dp.historyHidden && (window.H2buffer.DataPointFilter === 0 || window.H2buffer.DataPointFilter === 1)) {
    return false;
  }

  // Room Filter
  if (p_raum !== "ALLES" && p_raum !== "SYSVAR") {
    if (p_dp.attributes.room === null) {
      return false;
    }
    if (p_dp.attributes.room.indexOf(p_raum) === -1) {
      return false;
    }
  }
  if (p_raum !== "ALLES" && p_raum === "SYSVAR" && p_dp.id.interfaceId !== "SysVar") {
    return false;
  }

  // Function Filter
  if (p_gewerk !== "ALLES") {
    if (p_dp.attributes.function === null) {
      return false;
    }
    if (p_dp.attributes.function.indexOf(p_gewerk) === -1) {
      return false;
    }
  }

  // Description Filter
  if (p_textfilter !== '') {
    let ft = p_textfilter.split(' ');
    for (let fi of ft) {
      if ((p_dp.displayName + "/" + p_dp.id.address + "/ID:" + p_dp.idx).toLowerCase().indexOf(fi) === -1) {
        return false;
      }
    }
  }

  // only marked series are needed ?
  if (p_limit) {
    let attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === p_dp.idx.toString());
    if (attr === -1) {
      return false;
    }
    if (window.H2buffer.DataAttr[attr].visible === 0) {
      return false;
    }
  }

  return true;
}

//********************
function loadNewSerienData() {
  for (let serie of window.H2buffer.chart.series) {
    if (serie.visible && serie.options.group !== "nav") {
      setData(serie);
    }
  }
  loadNewPlotBand();
  window.H2buffer.chart.redraw();
  loadNewAxisInfo();
  loadingInfo();
}

function loadNewAxisInfo() {
  let yaxis_count = 0;

  let yaxis_grid = (window.H2buffer.Grid === 2 || window.H2buffer.Grid === 3 || window.H2buffer.Grid === 5 || window.H2buffer.Grid === 6) ? 1 : 0;
  let yaxis_mgrid = (window.H2buffer.Grid === 5 || window.H2buffer.Grid === 6) ? 1 : 0;

  let axispos;
  for (axispos = 0; axispos < window.H2buffer.yAxis.length; axispos++) {

    let axVisible = false;
    for (let serie of window.H2buffer.chart.yAxis[axispos].series) {
      if (serie.visible) {
        axVisible = true;
        break;
      }
    }

    if (axVisible) {
      yaxis_count++;

      let axiscolor = null;
      if (window.H2buffer.yAxis[axispos].color === 0) {
        axiscolor = window.Highcharts.defaultOptions.yAxis.lineColor;
      } else if (window.H2buffer.yAxis[axispos].color === 1 && window.H2buffer.chart.yAxis[axispos].series.length > 0) {
        for (let serie of window.H2buffer.chart.yAxis[axispos].series) {
          if (serie.visible) {
            axiscolor = serie.color;
            break;
          }
        }
      } else if (window.H2buffer.yAxis[axispos].color > 1 && window.H2buffer.yAxis[axispos].color < window.H2buffer.chart.options.colors.length + 2) {
        axiscolor = window.H2buffer.chart.options.colors[window.H2buffer.yAxis[axispos].color - 2];
      }
      if (axiscolor !== null && axiscolor !== window.H2buffer.chart.yAxis[axispos].options.lineColor) {

        window.H2buffer.chart.yAxis[axispos].update({
          lineColor: axiscolor,
          labels: {
            style: {
              "color": axiscolor
            }
          },
          title: {
            style: {
              "color": axiscolor
            }
          },

          // set gridlines only on 1
          gridLineWidth: (yaxis_count === 1) ? yaxis_grid : 0,
          minorGridLineWidth: (yaxis_count === 1) ? yaxis_mgrid : 0,
          minorTickInterval: (window.H2buffer.Grid === 5 || window.H2buffer.Grid === 6) ? 'auto' : null,
          visible: true
        }, false);
      } else {
        window.H2buffer.chart.yAxis[axispos].update({
          // set gridlines only on 1
          gridLineWidth: (yaxis_count === 1) ? yaxis_grid : 0,
          minorGridLineWidth: (yaxis_count === 1) ? yaxis_mgrid : 0,
          minorTickInterval: (window.H2buffer.Grid === 5 || window.H2buffer.Grid === 6) ? 'auto' : null,
          visible: true
        }, false);

      }

      if (window.H2buffer.yAxis[axispos].limit === 0 || window.H2buffer.yAxis[axispos].limit === 1) {
        window.H2buffer.chart.yAxis[axispos].setExtremes(null, null);
      } else if (window.H2buffer.yAxis[axispos].limit === 2) {
        // set extrem if config Dynamic or HARD
        window.H2buffer.chart.yAxis[axispos].setExtremes(parseFloat(window.H2buffer.yAxis[axispos].min), parseFloat(window.H2buffer.yAxis[axispos].max));
      }

    } else {
      window.H2buffer.chart.yAxis[axispos].update({
        visible: false
      }, false);
    }
  }
  window.H2buffer.chart.redraw();

  // Reset Axis Click Event
  $('.highcharts-yaxis').off("click", function() { clickShowDialogYAxis(this); });
  $('.highcharts-yaxis').on("click", function() { clickShowDialogYAxis(this); });

  $('.highcharts-yaxis-labels').off("click", function() { clickShowDialogYAxis(this); });
  $('.highcharts-yaxis-labels').on("click", function() { clickShowDialogYAxis(this); });

}

//********************
function loadNewPlotBand() {
  // add plotband for every day 00-06 and 20-24 gray, 06-20 yellow mean day

  // remove all PlotBands from xAxis[0]
  for (let band = window.H2buffer.chart.xAxis[0].plotLinesAndBands.length - 1; band >= 0; band--) {
    let band_id = window.H2buffer.chart.xAxis[0].plotLinesAndBands[band].id;
    if (window.H2buffer.chart.xAxis[0].plotLinesAndBands[band].options.to) {
      window.H2buffer.chart.xAxis[0].removePlotBand(band_id);
    } else {
      window.H2buffer.chart.xAxis[0].removePlotLine(band_id);
    }
  }

  let loopDate;
  let start;
  let id = 1;

  // Define whole workarea ...
  let minDate = window.H2buffer.chart.xAxis.reduce((a, b) => a.min > b.min ? a : b).min;
  let maxDate = window.H2buffer.chart.xAxis.reduce((a, b) => a.max > b.max ? a : b).max;
  if (!minDate || minDate > window.H2buffer.ZR_Start.getTime()) {
    minDate = window.H2buffer.ZR_Start.getTime();
  }
  if (!maxDate || maxDate < window.H2buffer.ZR_Ende.getTime()) {
    maxDate = window.H2buffer.ZR_Ende.getTime();
  }
  // do nothing for over 35 days
  if (maxDate - minDate > 35 * 86400000) {
    // gray in night, day yellow
  } else if (window.H2buffer.DayLight === 1) {
    for (loopDate = minDate; loopDate <= maxDate; loopDate += 86400000) {
      start = new Date(loopDate);
      window.H2buffer.chart.xAxis[0].addPlotBand({
        color: 'rgba(239,232,231,0.5)',
        //            color: '#EFE8E7',
        from: start.setHours(0, 0, 0, 0),
        to: start.setHours(6, 0, 0, 0),
        id: ('DayLight1' + id.toString()),
      });
      window.H2buffer.chart.xAxis[0].addPlotBand({
        color: 'rgba(251,252,227,0.5)',
        //            color: '#fbfce3',
        from: start.setHours(6, 0, 0, 0),
        to: start.setHours(20, 0, 0, 0),
        id: ('DayLight2' + id.toString()),
      });
      window.H2buffer.chart.xAxis[0].addPlotBand({
        color: 'rgba(239,232,231,0.5)',
        //            color: '#EFE8E7',
        from: start.setHours(20, 0, 0, 0),
        to: start.setHours(23, 59, 59, 999),
        id: ('DayLight3' + id.toString()),
      });
      id++;
    }
    // only line at 06:00 and 20:00
  } else if (window.H2buffer.DayLight === 2) {
    for (loopDate = minDate; loopDate <= maxDate; loopDate += 86400000) {
      start = new Date(loopDate);
      window.H2buffer.chart.xAxis[0].addPlotLine({
        color: '#EFE8E7',
        value: start.setHours(6, 0, 0, 0),
        width: 2,
        id: ('DayLight1' + id.toString()),
      });
      window.H2buffer.chart.xAxis[0].addPlotBand({
        color: '#EFE8E7',
        value: start.setHours(20, 0, 0, 0),
        width: 2,
        id: ('DayLight2' + id.toString()),
      });
      id++;
    }
    // only line at 00:00
  } else if (window.H2buffer.DayLight === 3) {
    for (loopDate = minDate; loopDate <= maxDate; loopDate += 86400000) {
      start = new Date(loopDate);
      window.H2buffer.chart.xAxis[0].addPlotLine({
        color: '#EFE8E7',
        value: start.setHours(0, 0, 0, 0),
        width: 2,
        id: ('DayLight1' + id.toString()),
      });
      id++;
    }
  }
}

//********************
function createUrl() {
  let url = location.pathname + "?";

  // Add Periode Parameter
  url += generateUrl();

  window.open(url, '_blank');
  window.focus();
  return true;
}

function generateUrl() {

  // Add Periode Parameter
  let url = 'periode=' + (Math.round(((window.H2buffer.ZR_Ende - window.H2buffer.ZR_Start) / (60 * 60 * 1000)) * 100) / 100).toString();

  let url2 = createUrlSerie();
  if (url2.length > 0) {
    url += '&dp=' + url2.substring(0, url2.length - 1);
  }

  url2 = createUrlAxis();

  if (url2.length > 0) {
    url += '&yaxis=' + url2.substring(0, url2.length - 1);
  }

  url += '&setting=';
  url += 'L' + window.H2buffer.Legend.toString();
  url += '|N' + window.H2buffer.Navigator.toString();
  url += '|P' + window.H2buffer.Labels.toString();
  url += '|D' + window.H2buffer.DayLight.toString();
  url += '|G' + window.H2buffer.Grid.toString();
  url += '|F' + window.H2buffer.ShowFilter.toString();
  url += '|I' + window.H2buffer.DataPointFilter.toString();
  url += '|B' + window.H2buffer.Theme;
  url += '|O' + window.H2buffer.FontSize;
  url += '|C' + window.H2buffer.CrossHair.toString();
  url += '|M' + window.H2buffer.ToolTip.toString();
  url += '|H' + window.H2buffer.HighLight.toString();
  url += '|R' + window.H2buffer.AutoRefresh;
  url += '|T' + encodeURIComponent(window.H2buffer.Title).replace(/'/g, '%27');
  url += '|S' + encodeURIComponent(window.H2buffer.Subtitle).replace(/'/g, '%27');

  // Add Room to Link if needed
  let filter_raum = document.getElementById("Select-Raum").value;
  if (filter_raum !== 'ALLES') {
    url += '&room=' + filter_raum;
  }

  // Add Gewerk to Link if needed
  let filter_gewerk = document.getElementById("Select-Gewerk").value;
  if (filter_gewerk !== 'ALLES') {
    url += '&function=' + filter_gewerk;
  }

  // Add FilterFeld to Link if needed
  if (window.H2buffer.filter_feld !== '') {
    url += '&filterkey=' + window.H2buffer.filter_feld;
  }

  // Add Zoom if not full
  let extremes = window.H2buffer.chart.xAxis[0].getExtremes();
  if (extremes.max < extremes.dataMax || extremes.min > extremes.dataMin) {
    url += '&zoom=' + (Math.round(((extremes.max - extremes.min) / (60 * 60 * 1000)) * 100) / 100).toString();
  }

  return url;
}

//********************
function createUrlSerie() {
  let DP_pos;
  let url2 = '';
  // Add DP Filter if some selected
  for (let lserie of window.H2buffer.chart.series) {
    if (lserie.options.group !== "nav" && lserie.options.name !== 'MinMax') {
      // add Attribute if exist
      let attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === lserie.options.id.toString());
      if (attr !== -1) {
        if (window.H2buffer.DataAttr[attr].visible === 2 || (window.H2buffer.DataAttr[attr].visible === 1 && window.H2buffer.Limit)) {
          url2 += lserie.options.id;
          url2 += '|' + window.H2buffer.DataAttr[attr].aggr;
          url2 += '|' + window.H2buffer.DataAttr[attr].atime;
          url2 += '|' + window.H2buffer.DataAttr[attr].yaxis;
          url2 += '|' + window.H2buffer.DataAttr[attr].line;
          url2 += '|' + window.H2buffer.DataAttr[attr].color;
          url2 += '|' + window.H2buffer.DataAttr[attr].comp;
          url2 += '|' + window.H2buffer.DataAttr[attr].mark;
          url2 += '|' + window.H2buffer.DataAttr[attr].dash;
          url2 += '|' + window.H2buffer.DataAttr[attr].width;
          url2 += '|S' + window.H2buffer.DataAttr[attr].stack;
          url2 += '|X' + window.H2buffer.DataAttr[attr].factor;
          url2 += '|O' + window.H2buffer.DataAttr[attr].offset;
          // check if still default unit, otherwise add to url
          if (lserie.options.id.substr(0, 1) === 'C') {
            DP_pos = window.H2buffer.DataPoints.findIndex(obj => obj.idx.toString() === lserie.options.id.split('_')[1].toString());
          } else {
            DP_pos = window.H2buffer.DataPoints.findIndex(obj => obj.idx.toString() === lserie.options.id.toString());
          }
          if (DP_pos === -1 || window.H2buffer.DataPoints[DP_pos].attributes.unit !== window.H2buffer.DataAttr[attr].unit) {
            url2 += '|U' + window.H2buffer.DataAttr[attr].unit.replaceAll("%", "§").replaceAll('&', 'µ');
          }
          if (window.H2buffer.DataAttr[attr].shortname !== '') {
            url2 += '|N' + window.H2buffer.DataAttr[attr].shortname.replaceAll("%", "§").replaceAll('&', 'µ');
          }

          url2 += '|V' + window.H2buffer.DataAttr[attr].visible;
          url2 += ',';
        }
      }
    }
  }
  return url2;
}


//********************
function createUrlAxis() {
  let url2 = '';
  for (let axispos = 0; axispos < window.H2buffer.yAxis.length; axispos++) {
    if (window.H2buffer.chart.yAxis[axispos].visible && window.H2buffer.chart.yAxis[axispos].hasVisibleSeries) {
      url2 += 'Y' + axispos;
      url2 += '|P' + ((window.H2buffer.yAxis[axispos].position) ? '1' : '0');
      url2 += '|C' + window.H2buffer.yAxis[axispos].type;
      url2 += '|A' + window.H2buffer.yAxis[axispos].limit;
      url2 += '|L' + window.H2buffer.yAxis[axispos].min;
      url2 += '|H' + window.H2buffer.yAxis[axispos].max;
      url2 += '|G' + window.H2buffer.yAxis[axispos].tick;
      url2 += '|F' + window.H2buffer.yAxis[axispos].color;
      if (window.H2buffer.yAxis[axispos].text) {
        url2 += '|T' + window.H2buffer.yAxis[axispos].text.replaceAll("%", "§").replaceAll('&', 'µ');
      } else {
        url2 += '|T';
      }
      url2 += ',';
    }
  }
  return url2;
}

//********************
function autoRefresh() {
  if (window.H2buffer.AutoRefresh > 0) {
    setTimeout(autoRefresh, 1000);
    if (window.H2buffer.Navigator < 3) {
      document.getElementById('autorefresh').innerHTML = ' - ' + window.ChhLanguage.default.historian.autorefreshText + ':' + window.H2buffer.AutoRefreshCount + ' Sek.';
    }
    window.H2buffer.AutoRefreshCount--;
    if (window.H2buffer.AutoRefreshCount <= 0) {
      window.H2buffer.AutoRefreshCount = window.H2buffer.AutoRefresh;
      let dauer = window.H2buffer.ZR_Ende.getTime() - window.H2buffer.ZR_Start.getTime();
      window.H2buffer.ZR_Ende = new Date(Date.now());
      window.H2buffer.ZR_Start = new Date(window.H2buffer.ZR_Ende - (new Date(dauer)));

      // Add Zoom if not full
      let extremes = window.H2buffer.chart.xAxis[0].getExtremes();
      if (extremes.max < extremes.dataMax || extremes.min > extremes.dataMin) {
        window.H2buffer.Zoom = (Math.round(((extremes.max - extremes.min) / (60 * 60 * 1000)) * 100) / 100);
      }

      loadNewSerienData();
    }
  } else {
    document.getElementById('autorefresh').innerHTML = '';
  }
}

//********************
function loadingInfo() {
  if (window.H2buffer.Queue.length > 0) {
    window.H2buffer.chart.showLoading();
  } else {
    window.H2buffer.chart.hideLoading();
    if (window.H2buffer.Button_Jump) {
      window.H2buffer.chart.xAxis[0].setExtremes(window.H2buffer.ZR_Start.getTime(), window.H2buffer.ZR_Ende.getTime(), true);
      window.H2buffer.Button_Jump = false;
    } else if (window.H2buffer.Zoom > 0) {
      let newStart = new Date(window.H2buffer.ZR_Ende - (new Date(3600 * 1000 * window.H2buffer.Zoom)));
      window.H2buffer.chart.xAxis[0].setExtremes(newStart.getTime(), window.H2buffer.ZR_Ende.getTime(), true);
      window.H2buffer.Zoom = 0;
    }
  }
  if (window.H2buffer.Queue.length > 0 && window.H2buffer.Navigator < 3) {
    if (window.H2buffer.Loading !== window.H2buffer.Queue.length) {
      document.getElementById('loading').innerHTML = ' (Loading - ' + window.H2buffer.Queue.length + ') <img src="loading.gif" alt="loading" height="20" width="20">';
      window.H2buffer.Loading = window.H2buffer.Queue.length;
    }
    setTimeout(loadingInfo, 500);
  } else if (window.H2buffer.Loading > 0) {
    document.getElementById('loading').innerHTML = '';
    window.H2buffer.Loading = 0;
  }
}


//********************
function addAggregationMinMax(serieObj) {

  let arr_dp = [];

  // first delete all linked series
  for (let i = window.H2buffer.chart.series.length - 1; i >= 0; i--) {
    if (serieObj.options.id === window.H2buffer.chart.series[i].options.linkedTo && window.H2buffer.chart.series[i].options.name === 'MinMax') {
      window.H2buffer.chart.series[i].remove(false);
    }
  }

  serieObj.userOptions.data.forEach(function(p) {
    arr_dp.push([p[0], p[1], p[1]]);
  });

  window.H2buffer.chart.addSeries({
    name: 'MinMax',
    fillOpacity: 0.4,
    color: serieObj.color,
    yAxis: serieObj.options.yAxis,
    linkedTo: serieObj.options.id,
    type: 'arearange',
    lineWidth: 1,
    findNearestPointBy: 'xy',
    dataGrouping: {
      enabled: true,
      forced: true,
      //               approximation: 'averages',
      groupPixelWidth: 10,
      units: serieObj.userOptions.dataGrouping.units
    },
    data: arr_dp,
    tooltip: {
      valueDecimals: serieObj.userOptions.tooltip.valueDecimals,
      valueSuffix: serieObj.userOptions.tooltip.valueSuffix,
    },
  });
}

// Show Dialog
function showDialogLine(serieObj) {

  // Set Dialog Values
  if (serieObj.options.id) {

    if ('C' === serieObj.options.id.toString().substr(0, 1)) {
      document.getElementById("compare").style.display = 'none';
    } else {
      document.getElementById("compare").style.display = '';
    }

    let techName = '';
    let DP_pos;
    if (serieObj.options.id.substr(0, 1) === 'C') {
      DP_pos = window.H2buffer.DataPoints.findIndex(obj => obj.idx.toString() === serieObj.options.id.split('_')[1].toString());
    } else {
      DP_pos = window.H2buffer.DataPoints.findIndex(obj => obj.idx.toString() === serieObj.options.id.toString());
    }

    document.getElementById("script").style.display = 'none';

    if (DP_pos === -1) {
      techName = 'n/a';
    } else if (window.H2buffer.DataPoints[DP_pos].id.interfaceId === "SysVar") {
      techName = '<br/>Systemvariable';
    } else {
      techName = '<br/>' + window.H2buffer.DataPoints[DP_pos].id.interfaceId + '.'
        + window.H2buffer.DataPoints[DP_pos].id.address + '.'
        + window.H2buffer.DataPoints[DP_pos].id.identifier;

      if (window.H2buffer.DataPoints[DP_pos].id.identifier === 'SCRIPT') {
        document.getElementById("script").style.display = 'block';
      } 

    }

    window.H2buffer.PopupID = serieObj.options.id.toString();

    let attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === serieObj.options.id.toString());
    if (attr === -1) {

      let ArrAttr;
      if (DP_pos === -1) {
        ArrAttr = defaultAttrib(-1, serieObj.colorIndex, window.H2buffer.PopupID);
      } else {
        ArrAttr = defaultAttrib(window.H2buffer.DataPoints[DP_pos], serieObj.colorIndex, window.H2buffer.PopupID);
      }

      window.H2buffer.DataAttr.push(ArrAttr);

      attr = window.H2buffer.DataAttr.length - 1;

    }

    // set value on Popup
    document.getElementsByClassName("modal-title")[0].innerHTML = serieObj.name + techName;

    document.getElementById("Select-Aggregation").value = window.H2buffer.DataAttr[attr].aggr;
    document.getElementById("Select-AggrTime").value = window.H2buffer.DataAttr[attr].atime;
    document.getElementById("Select-Yaxis").value = window.H2buffer.DataAttr[attr].yaxis;
    document.getElementById("Select-Compare").value = window.H2buffer.DataAttr[attr].comp;
    document.getElementById("Select-Stacking").value = window.H2buffer.DataAttr[attr].stack;
    document.getElementById("Select-Line").value = window.H2buffer.DataAttr[attr].line;
    document.getElementById("Select-Color").value = window.H2buffer.DataAttr[attr].color;
    document.getElementById("Select-Marker").value = window.H2buffer.DataAttr[attr].mark;
    document.getElementById("Select-DashType").value = window.H2buffer.DataAttr[attr].dash;
    document.getElementById("Select-LineWidth").value = window.H2buffer.DataAttr[attr].width;
    document.getElementById("Line-Factor").value = window.H2buffer.DataAttr[attr].factor;
    document.getElementById("Line-OffSet").value = window.H2buffer.DataAttr[attr].offset;
    document.getElementById("Line-Unit").value = window.H2buffer.DataAttr[attr].unit;
    document.getElementById("Line-ShortName").value = window.H2buffer.DataAttr[attr].shortname;
    document.getElementById("Line-Script").value = window.H2buffer.DataAttr[attr].script;

    document.getElementById("Select-Color").style.backgroundColor = window.H2buffer.chart.options.colors[parseInt(document.getElementById("Select-Color").value.substr(1, 2))];

    $("#LinePopup").modal();
  }
}

// Close Dialog
$("#DialogBtnOK").click(function() {
  getDialogLine();
  return true;
});

//Close Dialog and save as default
$("#LineDefault").click(function() {
  saveLine();
  return true;
});

function saveLine() {

  getDialogLine();

  let attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === window.H2buffer.PopupID);
  if (attr === -1) {
    return;
  }
  let strCustom = '';
  strCustom += window.H2buffer.DataAttr[attr].aggr;
  strCustom += '|' + window.H2buffer.DataAttr[attr].atime;
  strCustom += '|' + window.H2buffer.DataAttr[attr].yaxis;
  strCustom += '|' + window.H2buffer.DataAttr[attr].line;
  strCustom += '|' + window.H2buffer.DataAttr[attr].color;
  strCustom += '|' + window.H2buffer.DataAttr[attr].comp;
  strCustom += '|' + window.H2buffer.DataAttr[attr].mark;
  strCustom += '|' + window.H2buffer.DataAttr[attr].dash;
  strCustom += '|' + window.H2buffer.DataAttr[attr].width;
  strCustom += '|S' + window.H2buffer.DataAttr[attr].stack;
  strCustom += '|X' + window.H2buffer.DataAttr[attr].factor;
  strCustom += '|O' + window.H2buffer.DataAttr[attr].offset;
  strCustom += '|U' + encodeURIComponent(window.H2buffer.DataAttr[attr].unit).replace(/'/g, '%27');
  strCustom += '|N' + encodeURIComponent(window.H2buffer.DataAttr[attr].shortname).replace(/'/g, '%27');

  let strScript = encodeURIComponent(window.H2buffer.DataAttr[attr].script);
  
  let DP_pos = window.H2buffer.DataPoints.findIndex(obj => obj.idx.toString() === window.H2buffer.PopupID);
  let key = 'POINT' + window.H2buffer.PopupID;

  // define customer if still NULL
  if (!window.H2buffer.DataPoints[DP_pos].attributes.custom) {
    window.H2buffer.DataPoints[DP_pos].attributes.custom = {};
  }

  if (window.H2buffer.DataPoints[DP_pos].attributes.custom.HighChart !== strCustom || window.H2buffer.DataPoints[DP_pos].attributes.custom.Script !== strScript) {

    window.H2buffer.DataPoints[DP_pos].attributes.custom.HighChart = strCustom;
    window.H2buffer.DataPoints[DP_pos].attributes.custom.Script    = strScript;

    // Save local cache for start performance
    setLocalData('DataPoints', JSON.stringify(window.H2buffer.DataPoints));
    setLocalData('DataPointsTime', Date.now());

    let url = 'http://' + window.H2buffer.server + ':' + window.H2buffer.port;
    url += '/query/jsonrpc.gy';
    url += (window.H2buffer.ApiKey === "") ? "" : "?" + window.H2buffer.ApiKey;

    let postData = {}

    if (strScript.length > 0) {
      postData = {
        id: key,
        method: 'updateDataPoint',
        params: [{
          'id': {
            'interfaceId': window.H2buffer.DataPoints[DP_pos].id.interfaceId,
            'address': window.H2buffer.DataPoints[DP_pos].id.address,
            'identifier': window.H2buffer.DataPoints[DP_pos].id.identifier
          },
          'attributes': { 'custom': { 'HighChart': strCustom, 'Script': strScript } }
        }]
      };
    } else {
      postData = {
        id: key,
        method: 'updateDataPoint',
        params: [{
          'id': {
            'interfaceId': window.H2buffer.DataPoints[DP_pos].id.interfaceId,
            'address': window.H2buffer.DataPoints[DP_pos].id.address,
            'identifier': window.H2buffer.DataPoints[DP_pos].id.identifier
          },
          'attributes': { 'custom': { 'HighChart': strCustom } }
        }]
      };
    }

    postData = JSON.stringify(postData);

    $.ajax({
      url: url,
      dataType: "json",
      contentType: "application/json",
      type: "post",
      data: postData,
      cache: false,
      async: true,
      error: function(xhr, status, error) {
        ajaxErrorOutput(xhr, status, error);
      },
      success: function(result) {
        console.log(result);
      }
    });

  }
}

// Close Dialog Line
$("#DialogBtnClose").click(function() {
  $("#LinePopup").modal('hide');
  return true;
});

//Show Dialog
function getDialogLine() {
  let attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === window.H2buffer.PopupID);

  if (window.H2buffer.DataAttr[attr].comp !== document.getElementById("Select-Compare").value
    && document.getElementById("Select-Compare").value !== 'C0'
    && window.H2buffer.DataAttr[attr].comp !== 'C0') {
    // change comparisation ID on old one, search any old one to update ID
    let attrC = window.H2buffer.DataAttr.findIndex(obj => obj.id.substr(0, 1) === 'C' && obj.id.split('_')[1] === window.H2buffer.PopupID);
    if (attrC !== -1) {
      window.H2buffer.DataAttr[attrC].id = document.getElementById("Select-Compare").value + '_' + window.H2buffer.PopupID;
    }
  }

  // Script changed, reload whole data 
  if (window.H2buffer.DataAttr[attr].script !== document.getElementById("Line-Script").value) {
    window.H2buffer.DataAttr[attr].buffer_data = {};
  }

  // get value on Popup
  window.H2buffer.DataAttr[attr].aggr = document.getElementById("Select-Aggregation").value;
  window.H2buffer.DataAttr[attr].atime = document.getElementById("Select-AggrTime").value;
  window.H2buffer.DataAttr[attr].yaxis = document.getElementById("Select-Yaxis").value;
  window.H2buffer.DataAttr[attr].comp = document.getElementById("Select-Compare").value;
  window.H2buffer.DataAttr[attr].stack = parseInt(document.getElementById("Select-Stacking").value);
  window.H2buffer.DataAttr[attr].line = document.getElementById("Select-Line").value;
  window.H2buffer.DataAttr[attr].color = document.getElementById("Select-Color").value;
  window.H2buffer.DataAttr[attr].mark = document.getElementById("Select-Marker").value;
  window.H2buffer.DataAttr[attr].dash = document.getElementById("Select-DashType").value;
  window.H2buffer.DataAttr[attr].width = document.getElementById("Select-LineWidth").value;
  window.H2buffer.DataAttr[attr].factor = parseFloat(document.getElementById("Line-Factor").value);
  window.H2buffer.DataAttr[attr].offset = parseFloat(document.getElementById("Line-OffSet").value);
  window.H2buffer.DataAttr[attr].unit = document.getElementById("Line-Unit").value;
  window.H2buffer.DataAttr[attr].shortname = document.getElementById("Line-ShortName").value;
  window.H2buffer.DataAttr[attr].script = document.getElementById("Line-Script").value;

  // ignor 0 values for faktor
  if (isNaN(window.H2buffer.DataAttr[attr].factor) || window.H2buffer.DataAttr[attr].factor === 0.0) {
    window.H2buffer.DataAttr[attr].factor = 1;
  }

  $("#LinePopup").modal('hide');

  changeEventRaumFilter();
}

// Show Dialog
function showDialogSettings() {

  // set value on Popup
  document.getElementsByClassName("modal-title2")[0].innerHTML = window.ChhLanguage.default.historian.settings;
  document.getElementById("Select-Legend").value = window.H2buffer.Legend.toString();
  document.getElementById("Select-Navigator").value = window.H2buffer.Navigator.toString();
  document.getElementById("Select-Label").value = window.H2buffer.Labels.toString();
  document.getElementById("Select-Layout").value = window.H2buffer.DayLight.toString();
  document.getElementById("Select-Grid").value = window.H2buffer.Grid.toString();
  document.getElementById("Select-Content").value = window.H2buffer.ShowFilter.toString();
  document.getElementById("Select-DataPoint").value = window.H2buffer.DataPointFilter.toString();
  document.getElementById("Select-Theme").value = window.H2buffer.Theme;
  document.getElementById("Select-FontSize").value = window.H2buffer.FontSize;
  document.getElementById("Select-CrossHair").value = window.H2buffer.CrossHair.toString();
  document.getElementById("Select-ToolTip").value = window.H2buffer.ToolTip.toString();
  document.getElementById("Select-HighLight").value = window.H2buffer.HighLight.toString();
  document.getElementById("Line-Refresh").value = window.H2buffer.AutoRefresh;
  document.getElementById("Line-Title").value = window.H2buffer.Title;
  document.getElementById("Line-Subtitle").value = window.H2buffer.Subtitle;

  $("#SettingPopup").modal();
}

// Close Dialog Settings
$("#Dialog2BtnOK").click(function() {
  getDialogSetting();
  return true;
});


//Close Dialog and save as default
$("#SettingDefault").click(function() {
  saveSetting();
  return true;
});

function saveSetting() {

  getDialogSetting();

  let strCustom = '';
  strCustom += 'L' + window.H2buffer.Legend.toString();
  strCustom += '|N' + window.H2buffer.Navigator.toString();
  strCustom += '|P' + window.H2buffer.Labels.toString();
  strCustom += '|D' + window.H2buffer.DayLight.toString();
  strCustom += '|G' + window.H2buffer.Grid.toString();
  strCustom += '|F' + window.H2buffer.ShowFilter.toString();
  strCustom += '|I' + window.H2buffer.DataPointFilter.toString();
  strCustom += '|B' + window.H2buffer.Theme;
  strCustom += '|O' + window.H2buffer.FontSize;
  strCustom += '|C' + window.H2buffer.CrossHair.toString();
  strCustom += '|M' + window.H2buffer.ToolTip.toString();
  strCustom += '|H' + window.H2buffer.HighLight.toString();
  strCustom += '|R' + window.H2buffer.AutoRefresh;
  strCustom += '|T' + encodeURIComponent(window.H2buffer.Title).replace(/'/g, '%27');
  strCustom += '|S' + encodeURIComponent(window.H2buffer.Subtitle).replace(/'/g, '%27');

  // Save to Global Settings
  window.H2buffer.Settings.Setting = strCustom;

  saveSettingsH2();
}

function saveSettingsH2() {

  let key = 'SETTING';
  let strSetNew = JSON.stringify(window.H2buffer.Settings);
  let strSetOld = JSON.stringify(window.H2buffer.Settings_old);

  if (strSetNew !== strSetOld) {

    setLocalData('setting', strSetNew);
    setLocalData('settingTime', Date.now());

    window.H2buffer.Settings_old = JSON.parse(strSetNew);

    let url = 'http://' + window.H2buffer.server + ':' + window.H2buffer.port;
    url += '/query/jsonrpc.gy';
    url += (window.H2buffer.ApiKey === "") ? "" : "?" + window.H2buffer.ApiKey;

    strSetNew = strSetNew.replace(/'/g, "'");

    let postData = {
      id: key,
      method: 'setConfig',
      params: ['HighChart', strSetNew]
    };

    postData = JSON.stringify(postData);

    $.ajax({
      url: url,
      dataType: "json",
      contentType: "application/json",
      type: "post",
      data: postData,
      cache: false,
      async: true,
      error: function(xhr, status, error) {
        ajaxErrorOutput(xhr, status, error);
      },
      success: function(result) {
        console.log(result);
      }
    });
  }
}

function getDialogSetting() {

  $("#SettingPopup").modal('hide');

  let filterrefresh = false;
  let chartrefresh = false;

  // Legend
  if (window.H2buffer.Legend.toString() !== document.getElementById("Select-Legend").value) {
    window.H2buffer.Legend = parseInt(document.getElementById("Select-Legend").value);
    chartrefresh = true;
  }

  // Navigator
  if (window.H2buffer.Navigator.toString() !== document.getElementById("Select-Navigator").value) {
    window.H2buffer.Navigator = parseInt(document.getElementById("Select-Navigator").value);
    chartrefresh = true;
  }

  // Title
  if (window.H2buffer.Title !== document.getElementById("Line-Title").value) {
    window.H2buffer.Title = document.getElementById("Line-Title").value;
    chartrefresh = true;
  }

  // Subtitle
  if (window.H2buffer.Subtitle !== document.getElementById("Line-Subtitle").value) {
    window.H2buffer.Subtitle = document.getElementById("Line-Subtitle").value;
    chartrefresh = true;
  }

  // Labels
  if (window.H2buffer.Labels.toString() !== document.getElementById("Select-Label").value) {
    window.H2buffer.Labels = parseInt(document.getElementById("Select-Label").value);
    filterrefresh = true;
  }

  // Layout
  if (window.H2buffer.DayLight.toString() !== document.getElementById("Select-Layout").value) {
    window.H2buffer.DayLight = parseInt(document.getElementById("Select-Layout").value);
    filterrefresh = true;
  }

  // Grid
  if (window.H2buffer.Grid.toString() !== document.getElementById("Select-Grid").value) {
    window.H2buffer.Grid = parseInt(document.getElementById("Select-Grid").value);
    chartSetOptions();
    filterrefresh = true;
  }

  // FilterLine
  if (window.H2buffer.ShowFilter.toString() !== document.getElementById("Select-Content").value) {
    window.H2buffer.ShowFilter = parseInt(document.getElementById("Select-Content").value);
    showFilterLine();
    chartSetOptions();
    filterrefresh = true;
  }

  // DataPointFilter
  if (window.H2buffer.DataPointFilter.toString() !== document.getElementById("Select-DataPoint").value) {
    window.H2buffer.DataPointFilter = parseInt(document.getElementById("Select-DataPoint").value);
    chartrefresh = true;
  }

  // Theme
  if (window.H2buffer.Theme !== document.getElementById("Select-Theme").value) {
    window.H2buffer.Theme = document.getElementById("Select-Theme").value;
    chartrefresh = true;
  }

  // FontSize
  if (window.H2buffer.FontSize.toString() !== document.getElementById("Select-FontSize").value) {
    window.H2buffer.FontSize = parseInt(document.getElementById("Select-FontSize").value);
    chartrefresh = true;
  }

  // CrossHair
  if (window.H2buffer.CrossHair.toString() !== document.getElementById("Select-CrossHair").value) {
    window.H2buffer.CrossHair = parseInt(document.getElementById("Select-CrossHair").value);
    chartrefresh = true;
  }

  // ToolTip
  if (window.H2buffer.ToolTip.toString() !== document.getElementById("Select-ToolTip").value) {
    window.H2buffer.ToolTip = parseInt(document.getElementById("Select-ToolTip").value);
    chartrefresh = true;
  }

  // HighLight
  if (window.H2buffer.HighLight.toString() !== document.getElementById("Select-HighLight").value) {
    window.H2buffer.HighLight = parseInt(document.getElementById("Select-HighLight").value);
    chartrefresh = true;
  }

  // AutoRefresh
  if (window.H2buffer.AutoRefresh !== parseInt(document.getElementById("Line-Refresh").value)) {
    window.H2buffer.refreshSec = parseInt(document.getElementById("Line-Refresh").value);
    window.H2buffer.AutoRefreshCount = window.H2buffer.refreshSec;
    if (window.H2buffer.AutoRefresh === 0 && window.H2buffer.refreshSec > 0) {
      setTimeout(autoRefresh, 1000);
    }
    window.H2buffer.AutoRefresh = window.H2buffer.refreshSec;
  }

  if (chartrefresh) {
    createChart();
  } else if (filterrefresh) {
    changeEventRaumFilter();
  }

}

// Show Dialog
function showDialogFav() {

  // set value on Popup
  document.getElementsByClassName("modal-title4")[0].innerHTML = window.ChhLanguage.default.historian.favoritTitle;
  document.getElementById("Line-Title4").value = '';

  document.getElementById("Text-Title4").innerHTML = window.ChhLanguage.default.historian.favoritName;
  document.getElementById("favAdd").innerHTML = window.ChhLanguage.default.historian.favoritNEW;

  // genearte Fav-List on Popup

  if (window.H2buffer.Settings.Favorites) {
    let favList = document.getElementById('favList');
    if (favList.childNodes && favList.childNodes.length > 0) {
      favList.removeChild(favList.childNodes[0]);
    }

    let mytable = document.createElement("table");
    mytable.setAttribute("width", "100%");
    mytable.setAttribute("style", "border: 0px; margin-top: 22px;");
    let mytablebody = document.createElement("tbody");

    for (let i = 0; i < window.H2buffer.Settings.Favorites.length; i++) {
      let mycurrent_row = document.createElement("tr");

      let mycurrent_cell1 = document.createElement("td");
      mycurrent_cell1.setAttribute("style", "border: 0px;");

      let currenttext1 = document.createElement("button");
      currenttext1.innerHTML = decodeURIComponent(window.H2buffer.Settings.Favorites[i].Name);
      currenttext1.setAttribute("class", "bnt btn-default");
      currenttext1.setAttribute("onclick", "executeFav(" + i + ");");
      currenttext1.setAttribute("draggable", "true");
      currenttext1.setAttribute("ondragstart", "drag(event," + i + ")");
      currenttext1.setAttribute("ondrop", "drop(event," + i + ")");
      currenttext1.setAttribute("ondragover", "allowDrop(event," + i + ")");
      currenttext1.setAttribute("style", "width: 90%;");

      mycurrent_cell1.appendChild(currenttext1);
      mycurrent_row.appendChild(mycurrent_cell1);

      let mycurrent_cell2 = document.createElement("td");
      mycurrent_cell2.setAttribute("style", "border: 0px;");

      let currenttext2 = document.createElement("button");
      currenttext2.setAttribute("class", "bnt btn-default");
      currenttext2.setAttribute("onclick", "deleteFav(" + i + ");");
      currenttext2.setAttribute("style", "font-size: 21px;");
      currenttext2.textContent = 'x';

      mycurrent_cell2.appendChild(currenttext2);
      mycurrent_row.appendChild(mycurrent_cell2);

      mytablebody.appendChild(mycurrent_row);
    }

    mytable.appendChild(mytablebody);
    favList.appendChild(mytable);
    mytable.setAttribute("border", "2");
  }

  $("#FavPopup").modal();
}

// AllowDrop function for FAV
function allowDrop(ev) {
  ev.preventDefault();
  return false;
}

// Drag function for FAV
function drag(ev, pos) {
  window.H2buffer.Drag_Pos = pos;
  ev.dataTransfer.setData('text', ev.target.id);
}

// Drop function for FAV
function drop(ev, pos) {
  ev.stopPropagation();

  let arr = window.H2buffer.Settings.Favorites[window.H2buffer.Drag_Pos];

  // löscht alten Position
  window.H2buffer.Settings.Favorites.splice(window.H2buffer.Drag_Pos, 1);

  // insert neue Position
  window.H2buffer.Settings.Favorites.splice(pos, 0, arr);

  // Save to H2 database
  saveSettingsH2();

  showDialogFav();

  return false;
}

// Close Dialog Settings
$("#Dialog4BtnOK").click(function() {
  $("#FavPopup").modal('hide');
  document.getElementById("Line-Title4").value = '';
  return true;
});

// Close Dialog Settings
$("#favAdd").click(function() {
  getDialogFav();
  document.getElementById("Line-Title4").value = '';
  return true;
});

// Close Dialog Settings
$("#Dialog4BtnClose").click(function() {
  document.getElementById("Line-Title4").value = '';
  $("#FavPopup").modal('hide');
  return true;
});

function deleteFav(favorit) {

  $("#FavPopup").modal('hide');

  if (window.H2buffer.Settings.Favorites[favorit]) {
    // delete Favorite entry on position
    window.H2buffer.Settings.Favorites.splice(favorit, 1);

    // Save to H2 database
    saveSettingsH2();
  }
}

function executeFav(favorit) {
  $("#FavPopup").modal('hide');

  if (window.H2buffer.Settings.Favorites[favorit]) {

    // execute Favorit
    let url = location.pathname + "?" + decodeURIComponent(window.H2buffer.Settings.Favorites[favorit].Url);
    window.open(url, "_self");

  }
}

function getDialogFav() {

  $("#FavPopup").modal('hide');

  // Favorite Title
  if (document.getElementById("Line-Title4").value) {

    if (!window.H2buffer.Settings.Favorites) {
      window.H2buffer.Settings.Favorites = [];
    }
    window.H2buffer.Settings.Favorites.push({
      Name: encodeURIComponent(document.getElementById("Line-Title4").value).replace(/'/g, '%27'),
      Url: encodeURIComponent(generateUrl()).replace(/'/g, '%27')
    });

    saveSettingsH2();
  }

}

// Close Dialog Settings
$("#Dialog2BtnClose").click(function() {
  $("#SettingPopup").modal('hide');
});

function showFilterLine() {

  // ajust height of content to screen height
  if (window.H2buffer.ShowFilter === 0) {
    document.getElementById("filter").style.display = "none";
    $('nav.navbar.navbar-default')[0].style.display = "none";
  } else if (window.H2buffer.ShowFilter === 1) {
    document.getElementById("filter").style.display = "block";
    $('nav.navbar.navbar-default')[0].style.display = "block";
  } else if (window.H2buffer.ShowFilter === 2) {
    document.getElementById("filter").style.display = "block";
    $('nav.navbar.navbar-default')[0].style.display = "none";
  } else if (window.H2buffer.ShowFilter === 3) {
    document.getElementById("filter").style.display = "none";
    $('nav.navbar.navbar-default')[0].style.display = "block";
  }

  document.getElementById("container").setAttribute("style", "height:" + calcContSize().toString() + "px");

  if (window.H2buffer.chart) {
    window.H2buffer.chart.setSize(null, null, false);
  }
}

function defineLegend() {
  let ret = {};
  if (window.H2buffer.Legend === 0) {
    ret = {
      enabled: false,
    };
  } else if (window.H2buffer.Legend === 2) {
    ret = {
      enabled: true,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      floating: false,
      y: (window.H2buffer.Navigator < 4) ? -30 : 0,
      maxHeight: $(window).height() - (window.H2buffer.ShowFilter === 0 ? 90 : 0)
        - (window.H2buffer.ShowFilter === 1 ? 200 : 0)
        - (window.H2buffer.ShowFilter === 2 ? 120 : 0)
        - (window.H2buffer.ShowFilter === 3 ? 180 : 0)
    };
  } else if (window.H2buffer.Legend === 3) {
    ret = {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      floating: true,
      y: 10 + (window.H2buffer.Title === '' ? 0 : window.H2buffer.FontSize + 20) + (window.H2buffer.Subtitle === '' ? 0 : (window.H2buffer.FontSize / 6 + 5) + 15),
      maxHeight: 200
    };
  } else if (window.H2buffer.Legend === 4) {
    ret = {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      floating: true,
      y: -30 - window.H2buffer.FontSize
        - (window.H2buffer.Navigator === 0 ? 20 + window.H2buffer.FontSize * 4.5 : 0)
        - (window.H2buffer.Navigator === 1 ? 15 + window.H2buffer.FontSize * 3.5 : 0)
        - (window.H2buffer.Navigator === 2 ? 11 + window.H2buffer.FontSize * 2 : 0),
      maxHeight: 200
    };
  } else if (window.H2buffer.Legend === 5) {
    ret = {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      floating: false,
      y: 0,
      maxHeight: 200
    };
  } else if (window.H2buffer.Legend === 6) {
    ret = {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      floating: false,
      y: 0,
      maxHeight: 200
    };
    // on window.H2buffer.Legend = 1 and default
  } else {
    ret = {
      enabled: true,
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: false,
      y: (window.H2buffer.Navigator < 4) ? -30 : 0,
      maxHeight: $(window).height() - (window.H2buffer.ShowFilter === 0 ? 90 : 0)
        - (window.H2buffer.ShowFilter === 1 ? 200 : 0)
        - (window.H2buffer.ShowFilter === 2 ? 120 : 0)
        - (window.H2buffer.ShowFilter === 3 ? 180 : 0)
    };
  }
  ret['x'] = 0;

  return ret;
}

// Show Dialog
function showDialogYAxis(id) {

  document.getElementsByClassName("modal-title3")[0].innerHTML = window.ChhLanguage.default.historian.axissetting + ' ' + id.substr(5, 2);

  // find axis object
  let axispos = parseInt(id.substr(5, 2));
  if (axispos >= 0 && axispos < window.H2buffer.chart.options.yAxis.length) {
    window.H2buffer.PopupAxisPos = axispos;
    document.getElementById("Line-Title3").value = window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].text;
    document.getElementById("Select-Position").value = window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].position ? '1' : '0';
    document.getElementById("Line-Min").value = window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].min;
    document.getElementById("Line-Max").value = window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].max;
    document.getElementById("Line-TickAmount").value = window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].tick;
    document.getElementById("Select-AxisColor").value = window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].color;
    document.getElementById("Select-Limit").value = window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].limit;
    document.getElementById("Select-AxisType").value = window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].type;

  } else {
    return;
  }

  showDialogYAxisUpdatColor();

  $("#AxisPopup").modal();
}

// Close Dialog Settings
$("#Dialog3BtnOK").click(function() {
  getDialogAxis();
  return true;
});

//Close Dialog and save as default
$("#AxisDefault").click(function() {
  getDialogAxis();

  let strCustom = '';
  strCustom += 'P' + ((window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].position) ? '1' : '0');
  strCustom += '|C' + window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].type;
  strCustom += '|A' + window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].limit;
  strCustom += '|L' + window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].min;
  strCustom += '|H' + window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].max;
  strCustom += '|G' + window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].tick;
  strCustom += '|F' + window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].color;
  strCustom += '|T' + encodeURIComponent(window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].text).replace(/'/g, '%27');

  // Save to global Settings
  window.H2buffer.Settings['YAXIS' + window.H2buffer.PopupAxisPos] = strCustom;

  saveSettingsH2();

  return true;
});

function getDialogAxis() {

  $("#AxisPopup").modal('hide');

  // Update YAxis parameter
  let newOptions = {
    title: {
      text: document.getElementById("Line-Title3").value
    },
    lineWidth: 2,
    opposite: (document.getElementById("Select-Position").value === '1') ? true : false,
    type: (document.getElementById("Select-AxisType").value === '1') ? 'logarithmic' : 'linear',
    tickAmount: parseInt(document.getElementById("Line-TickAmount").value),
    min: (document.getElementById("Select-Limit").value === '2') ? parseFloat(document.getElementById("Line-Min").value) : null,
    max: (document.getElementById("Select-Limit").value === '2') ? parseFloat(document.getElementById("Line-Max").value) : null,
    softMin: (document.getElementById("Select-Limit").value === '1') ? parseFloat(document.getElementById("Line-Min").value) : null,
    softMax: (document.getElementById("Select-Limit").value === '1') ? parseFloat(document.getElementById("Line-Max").value) : null,
    startOnTick: (document.getElementById("Select-Limit").value === '2') ? false : true,
    endOnTick: (document.getElementById("Select-Limit").value === '2') ? false : true,
    allowDecimals: true,
    tickPositioner: null,
  };
  if (document.getElementById("Select-Limit").value === '2') {
    newOptions.tickPositioner = function() {
      const axis = this;
      return axis.tickPositions.map((pos) => tickPos(axis, pos));
    };
  }

  window.H2buffer.chart.yAxis[window.H2buffer.PopupAxisPos].update(newOptions);

  window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].text = document.getElementById("Line-Title3").value;
  window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].position = (parseInt(document.getElementById("Select-Position").value) === 0) ? false : true;
  window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].limit = parseInt(document.getElementById("Select-Limit").value);
  window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].type = parseInt(document.getElementById("Select-AxisType").value);
  window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].min = parseFloat(document.getElementById("Line-Min").value);
  window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].max = parseFloat(document.getElementById("Line-Max").value);
  window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].tick = parseInt(document.getElementById("Line-TickAmount").value);
  window.H2buffer.yAxis[window.H2buffer.PopupAxisPos].color = parseInt(document.getElementById("Select-AxisColor").value);

  // Yaxis options
  $("#Select-Yaxis").empty();
  let select = document.getElementById("Select-Yaxis");
  for (let i = 0; i < window.H2buffer.yAxis.length; i++) {
    let option = document.createElement("option");
    if (window.H2buffer.yAxis[i].text !== "" && window.H2buffer.yAxis[i].text !== null) {
      option.text = window.H2buffer.yAxis[i].text;
    } else {
      option.text = window.ChhLanguage.default.historian['yaxis' + i];
    }
    option.value = 'Y' + i;
    select.add(option);
  }

  loadNewAxisInfo();

}

// Close Dialog Settings
$("#Dialog3BtnClose").click(function() {
  $("#AxisPopup").modal('hide');
  return true;
});

// define Y-Axis array
function defineYAxis() {
  let arr = [];
  for (let y = 0; y < window.H2buffer.yAxis.length; y++) {
    let newOptions = {
      id: 'AXISY' + y,
      className: 'axisy' + y,
      type: (window.H2buffer.yAxis[y].type === 1) ? 'logarithmic' : 'linear',
      title: {
        text: window.H2buffer.yAxis[y].text
      },
      lineWidth: 2,
      // showEmpty: false,
      opposite: window.H2buffer.yAxis[y].position,
      tickAmount: window.H2buffer.yAxis[y].tick,
      min: (window.H2buffer.yAxis[y].limit === 2) ? window.H2buffer.yAxis[y].min : null,
      max: (window.H2buffer.yAxis[y].limit === 2) ? window.H2buffer.yAxis[y].max : null,
      softMin: (window.H2buffer.yAxis[y].limit === 1) ? window.H2buffer.yAxis[y].min : null,
      softMax: (window.H2buffer.yAxis[y].limit === 1) ? window.H2buffer.yAxis[y].max : null,
      startOnTick: (window.H2buffer.yAxis[y].limit === 2) ? false : true,
      endOnTick: (window.H2buffer.yAxis[y].limit === 2) ? false : true,
      allowDecimals: true,
      visible: false,
      tickPositioner: null,
      crosshair: defineCrosshairY(),
    };
    if (window.H2buffer.yAxis[y].limit === 2) {
      newOptions.tickPositioner = function() {
        const axis = this;
        return axis.tickPositions.map((pos) => tickPos(axis, pos));
      };
    }
    arr.push(newOptions);
  }
  return arr;
}

function tickPos(axis, pos) {
  let l_pos = pos;
  if (l_pos > axis.max) {
    l_pos = axis.max;
  } else if (l_pos < axis.min) {
    l_pos = axis.min;
  }
  return l_pos;
}

function showDialogYAxisUpdatColor() {
  let colorPos = parseInt(document.getElementById("Select-AxisColor").value);
  if (colorPos === 0 || colorPos === 1) {
    document.getElementById("Select-AxisColor").style.backgroundColor = window.Highcharts.defaultOptions.yAxis.lineColor;
  } else {
    colorPos -= 2;   // set back -2
    document.getElementById("Select-AxisColor").style.backgroundColor = window.H2buffer.chart.options.colors[colorPos];
  }
}

// define Comparisation days back
function getComparisionBackDay(str_compType) {
  if (str_compType === 'C1') { return -1 * 86400000; }
  if (str_compType === 'C2') { return -2 * 86400000; }
  if (str_compType === 'C3') { return -3 * 86400000; }
  if (str_compType === 'C4') { return -4 * 86400000; }
  if (str_compType === 'C5') { return -1 * 7 * 86400000; }
  if (str_compType === 'C6') { return -2 * 7 * 86400000; }
  if (str_compType === 'C7') { return -3 * 7 * 86400000; }
  if (str_compType === 'C8') { return -4 * 7 * 86400000; }
  if (str_compType === 'C9') { return -1 * 7 * 4 * 86400000; }
  if (str_compType === 'C10') { return -2 * 7 * 4 * 86400000; }
  if (str_compType === 'C11') { return -3 * 7 * 4 * 86400000; }
  if (str_compType === 'C12') { return -4 * 7 * 4 * 86400000; }
  if (str_compType === 'C13') { return -365 * 86400000; }
  return 0;
}

function chartSetOptions() {

  let myText = '';
  if (window.Highcharts.getOptions().navigation && window.Highcharts.getOptions().navigation.bindings && window.Highcharts.getOptions().navigation.bindings.labelAnnotation) {
    myText = window.Highcharts.getOptions().navigation.bindings.labelAnnotation;
  }

  let options = {
    lang: window.ChhLanguage.default.highcharts,
    accessibility: { enabled: false, },
    chart: {
      events: {
        load: requestInitData,
        beforePrint: function() {
          if (window.DP_Themes.transparent) {
            let DP_Theme_Print = window.Highcharts.merge(window.DP_Themes['standard-light'], window.DP_Themes.transparent);
            this.update(DP_Theme_Print);
          }
        },
        afterPrint: function() {
          this.update(window.H2buffer.Theme_Setting);
          chartSetOptions();
          chartSetElements();
        }
      },
      panning: true,
      panKey: 'shift',
      zoomType: 'xy',
      resetZoomButton: {
        position: {
          x: -50,
          y: 20,
        },
        relativeTo: 'plot',
        theme: {
          style: {
            'font-size': window.H2buffer.FontSize.toString() + "px"
          },
        },
      },
    },

    rangeSelector: {
      enabled: (window.H2buffer.Navigator < 4) ? true : false,
      buttons: [{
        count: 30,
        type: 'minute',
        text: window.ChhLanguage.default.historian.range30M,
        events: { click: function() { checkZeitraum(this); return true; } },
        title: window.ChhLanguage.default.historian.rangeTitle30M
      }, {
        count: 1,
        type: 'hour',
        text: window.ChhLanguage.default.historian.rangeH,
        events: { click: function() { checkZeitraum(this); return true; } },
        title: window.ChhLanguage.default.historian.rangeTitleH
      }, {
        count: 6,
        type: 'hour',
        text: window.ChhLanguage.default.historian.range6H,
        events: { click: function() { checkZeitraum(this); return true; } },
        title: window.ChhLanguage.default.historian.rangeTitle6H
      }, {
        count: 1,
        type: 'day',
        text: window.ChhLanguage.default.historian.rangeD,
        events: { click: function() { checkZeitraum(this); return true; } },
        title: window.ChhLanguage.default.historian.rangeTitleD
      }, {
        count: 1,
        type: 'week',
        text: window.ChhLanguage.default.historian.rangeW,
        events: { click: function() { checkZeitraum(this); return true; } },
        title: window.ChhLanguage.default.historian.rangeTitleW
      }, {
        count: 1,
        type: 'month',
        text: window.ChhLanguage.default.historian.rangeM,
        events: { click: function() { checkZeitraum(this); return true; } },
        title: window.ChhLanguage.default.historian.rangeTitleM
      }, {
        count: 1,
        type: 'year',
        text: window.ChhLanguage.default.historian.rangeY,
        events: { click: function() { checkZeitraum(this); return true; } },
        title: window.ChhLanguage.default.historian.rangeTitleY
      }, {
        type: 'all',
        text: window.ChhLanguage.default.historian.rangeALL,
        events: { click: function() { checkZeitraum(this); return true; } },
        title: window.ChhLanguage.default.historian.rangeTitleALL
      }],
      allButtonsEnabled: true,
      inputEnabled: false,
      selected: 7,

      floating: false,
      verticalAlign: 'top',
      buttonPosition: {
        align: 'left',
        x: 0,
      },
      x: 0,
      y: 10,
    },
    navigator: {
      enabled: (window.H2buffer.Navigator === 0 || window.H2buffer.Navigator === 1) ? true : false,
    },
    scrollbar: {
      enabled: (window.H2buffer.Navigator === 0 || window.H2buffer.Navigator === 2) ? true : false,
    },
    credits: {
      enabled: (window.H2buffer.Navigator < 3) ? true : false,
      text: '(c) wak - H2-HighChart version ' + window.H2buffer.version + ' - verwendet Highstock v' +
        window.Highcharts.version + ' http://www.highcharts.com - Kommerzielle Nutzung untersagt',
      href: 'https://github.com/wakr70/CCU-Historian-HC'
    },

    exporting: {
      buttons: {
        contextButton: {
          symbol: "menu",
          enabled: (window.H2buffer.Navigator < 4) ? true : false,
          menuItems: [{
            text: window.ChhLanguage.default.historian.favoritTxt,
            onclick: function() {
              showDialogFav();
            }
          }, {
            text: window.ChhLanguage.default.historian.settings,
            onclick: function() {
              showDialogSettings();
            }
          }, {
            text: (window.H2buffer.Limit) ? window.ChhLanguage.default.historian.limitactive : window.ChhLanguage.default.historian.limitdeactive,
            onclick: function() {
              if (window.H2buffer.Limit) {
                $('.highcharts-contextmenu')[0].children[0].children[2].innerHTML = window.ChhLanguage.default.historian.limitdeactive;
                window.H2buffer.Limit = false;
              } else {
                $('.highcharts-contextmenu')[0].children[0].children[2].innerHTML = window.ChhLanguage.default.historian.limitactive;
                window.H2buffer.Limit = true;
              }
              changeEventRaumFilter();
              return true;
            },
          }, {
            text: window.ChhLanguage.default.historian.buttonRefresh,
            onclick: function() {
              refreshClick();
              return true;
            },
          }, {
            text: window.ChhLanguage.default.historian.buttonLink,
            onclick: function() {
              createUrl();
              return true;
            },
          }, "separator", "viewFullscreen", "printChart", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG", "separator", "downloadCSV", "downloadXLS", "viewData"]
        }
      }
    },

    title: {
      text: window.H2buffer.Title,
      floating: false,
    },
    subtitle: {
      text: window.H2buffer.Subtitle,
      floating: false,
    },

    xAxis: {
      crosshair: defineCrosshairX(),
      type: 'datetime',
      ordinal: false,
      gridLineWidth: (window.H2buffer.Grid === 1 || window.H2buffer.Grid === 3 || window.H2buffer.Grid === 4 || window.H2buffer.Grid === 6) ? 1 : 0,
      minorGridLineWidth: (window.H2buffer.Grid === 4 || window.H2buffer.Grid === 6) ? 1 : 0,
      minorTickInterval: (window.H2buffer.Grid === 4 || window.H2buffer.Grid === 6) ? 'auto' : null,
      dataMax: Date.now(),
      events: {
        afterSetExtremes: function() {
          showAggrText();
        },
      },
      dateTimeLabelFormats: { day: '%a %e. %b' },
    },

    yAxis: defineYAxis(),

    tooltip: defineToolTip(),

    plotOptions: {
      series: {
        cursor: 'pointer',
        states: defineHighLight(),
        events: {
          legendItemClick: function(event) {
            let attr;
            if (event.browserEvent.shiftKey) {
              showDialogLine(this);
              return false;
            } else {
              if (!this.visible) {
                setData(this);
              }
              if (this.visible) {
                attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === this.options.id.toString());
                if (attr !== -1) {
                  window.H2buffer.DataAttr[attr].visible = (window.H2buffer.Limit) ? 1 : 0;
                  if (window.H2buffer.DataAttr[attr].aggr === 'A3') {
                    for (let i = window.H2buffer.chart.series.length - 1; i >= 0; i--) {
                      if (this.options.id === window.H2buffer.chart.series[i].options.linkedTo && window.H2buffer.chart.series[i].options.name === 'MinMax') {
                        window.H2buffer.chart.series[i].remove(false);
                      }
                    }
                  }
                }
              } else {
                attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === this.options.id.toString());
                if (attr !== -1) {
                  window.H2buffer.DataAttr[attr].visible = 2;
                }
              }
              return true;
            }
          },
          show: function() {
            loadNewAxisInfo();
          },
          hide: function() {
            loadNewAxisInfo();
          },
          click: function() {
            // skip if annotations are active ...
            let skip = false;
            if (arguments[0] && arguments[0].activeAnnotation) {
              skip = true;
            }
            if (!skip) {
              showDialogLine(this);
            }
            return true;
          },
        }
      },
    },

    series: [{
      id: 'series-init',
      name: 'loading ....',
      data: [],
      yAxis: 0,
      visible: false,
    }],
    navigation: {
      buttonOptions: {
        enabled: (window.H2buffer.Navigator < 4) ? true : false,
      },
      bindings: {
        myText: myText
      }
    },
    stockTools: {
      gui: {
        iconsURL: 'stock-tools/stock-icons/',
        buttons: ["indicators", "separator", "myText", "lines", "measure", "toggleAnnotations", "separator", "verticalLabels", "separator", "zoomChange", "fullScreen"],
        definitions: {
          zoomChange: {
            items: ["zoomXY", "zoomY", "zoomX"],
          },
          myText: {
            className: "highcharts-label-annotation",
            symbol: "label.svg"
          }
        },
      }
    }
  };

  window.H2buffer.chart = window.Highcharts.stockChart('container', options);
  if (!window.H2buffer.chart) {
    alert('HighChart Option error!');
  }
}

function defineCrosshairX() {
  let ret = false;
  if (window.H2buffer.CrossHair === 1) {
    ret = { width: 1, snap: true };
  } else if (window.H2buffer.CrossHair === 3) {
    ret = { width: 1, snap: true };
  } else if (window.H2buffer.CrossHair === 4) {
    ret = { width: 1, snap: false };
  } else if (window.H2buffer.CrossHair === 6) {
    ret = { width: 1, snap: false };
  } else if (window.H2buffer.CrossHair === 7) {
    ret = { width: 3, snap: true };
  } else if (window.H2buffer.CrossHair === 9) {
    ret = { width: 3, snap: true };
  } else if (window.H2buffer.CrossHair === 10) {
    ret = { width: 3, snap: false };
  } else if (window.H2buffer.CrossHair === 12) {
    ret = { width: 3, snap: false };
  }
  return ret;
}

function defineCrosshairY() {
  let ret = false;
  if (window.H2buffer.CrossHair === 2) {
    ret = { width: 1, snap: true };
  } else if (window.H2buffer.CrossHair === 3) {
    ret = { width: 1, snap: true };
  } else if (window.H2buffer.CrossHair === 5) {
    ret = { width: 1, snap: false };
  } else if (window.H2buffer.CrossHair === 6) {
    ret = { width: 1, snap: false };
  } else if (window.H2buffer.CrossHair === 8) {
    ret = { width: 3, snap: true };
  } else if (window.H2buffer.CrossHair === 9) {
    ret = { width: 3, snap: true };
  } else if (window.H2buffer.CrossHair === 11) {
    ret = { width: 3, snap: false };
  } else if (window.H2buffer.CrossHair === 12) {
    ret = { width: 3, snap: false };
  }
  return ret;
}

function defineHighLight() {
  let ret = { hover: { enabled: true, lineWidthPlus: 0 }, inactive: { enabled: false, opacity: 1 } };
  if (window.H2buffer.HighLight === 1) {
    ret = { hover: { enabled: true, lineWidthPlus: 1 }, inactive: { enabled: true, opacity: 0.2 } };
  } else if (window.H2buffer.HighLight === 2) {
    ret = { hover: { enabled: true, lineWidthPlus: 1 }, inactive: { enabled: true, opacity: 0.5 } };
  } else if (window.H2buffer.HighLight === 3) {
    ret = { hover: { enabled: true, lineWidthPlus: 1 }, inactive: { enabled: false, opacity: 1 } };
  } else if (window.H2buffer.HighLight === 4) {
    ret = { hover: { enabled: true, lineWidthPlus: 3 }, inactive: { enabled: true, opacity: 0.2 } };
  } else if (window.H2buffer.HighLight === 5) {
    ret = { hover: { enabled: true, lineWidthPlus: 3 }, inactive: { enabled: true, opacity: 0.5 } };
  } else if (window.H2buffer.HighLight === 6) {
    ret = { hover: { enabled: true, lineWidthPlus: 3 }, inactive: { enabled: false, opacity: 1 } };
  }
  return ret;
}

function defineToolTip() {
  let ret = { enabled: false };

  if (window.H2buffer.ToolTip === 1) {
    ret = {
      enabled: true,
      formatter: null,
      shared: false,
      split: true,
      valueDecimals: 2,
    };
  } else if (window.H2buffer.ToolTip === 2) {
    ret = {
      enabled: true,
      formatter: null,
      shared: false,
      split: false,
      valueDecimals: 2,
    };
  } else if (window.H2buffer.ToolTip === 3) {
    ret = {
      enabled: true,
      formatter: function() {
        return [''].concat(this.points ? this.points.map(function(point) {
          if (point.series.name === 'MinMax') {
            return point.series.name + ': <b>' +
              window.Highcharts.numberFormat(point.point.low, 2, ",", ".") + " - " +
              window.Highcharts.numberFormat(point.point.high, 2, ",", ".") + " " +
              point.series.tooltipOptions.valueSuffix + "</b>";
          } else {
            return point.series.name + ': <b>' +
              window.Highcharts.numberFormat(point.y, 2, ",", ".") + " " +
              point.series.tooltipOptions.valueSuffix + "</b>";
          }
        }) : []
        );
      },
      shared: false,
      split: true,
      valueDecimals: 2,
    };
  } else if (window.H2buffer.ToolTip === 4) {
    ret = {
      enabled: true,
      formatter: function() {
        if (this.series.name === 'MinMax') {
          return this.point.series.name + ': <b>' +
            window.Highcharts.numberFormat(this.point.low, 2, ",", ".") + " - " +
            window.Highcharts.numberFormat(this.point.high, 2, ",", ".") + " " +
            this.point.series.tooltipOptions.valueSuffix + "</b>";
        } else {
          return this.point.series.name + ': <b>' +
            window.Highcharts.numberFormat(this.point.y, 2, ",", ".") + " " +
            this.point.series.tooltipOptions.valueSuffix + "</b>";
        }
      },
      shared: false,
      split: false,
      valueDecimals: 2,
    };
  } else if (window.H2buffer.ToolTip === 5) {
    ret = {
      enabled: true,
      formatter: function() {
        let xDate = new Date(this.x);
        return this.points.reduce(function(s, point) {
          if (point.series.name === 'MinMax') {
            return s + '<br/>' + point.series.name + ': ' +
              window.Highcharts.numberFormat(point.point.low, 2, ",", ".") + " - " +
              window.Highcharts.numberFormat(point.point.high, 2, ",", ".") + " " +
              point.series.tooltipOptions.valueSuffix;
          } else {
            return s + '<br/>' + point.series.name + ': ' +
              window.Highcharts.numberFormat(point.y, 2, ",", ".") + " " +
              point.series.tooltipOptions.valueSuffix;
          }
        }, '<b>' + window.Highcharts.dateFormat('%A, %e. %b %Y, %H:%M', xDate) + '</b>');
      },
      shared: true,
      split: false,
      valueDecimals: 2,

    };
  }
  return ret;
}

function showAggrText() {
  let attr;
  let aggrType;
  if (window.H2buffer.Navigator < 3) {
    for (let lserie of window.H2buffer.chart.series) {
      if (lserie.visible && lserie.options.group !== "nav") {
        let grouping = lserie.currentDataGrouping;
        if (grouping) {
          let text = grouping.unitName + ((grouping.count > 1) ? '2' : '').toString();
          if (window.ChhLanguage.default.historian['aggr' + text]) {
            text = window.ChhLanguage.default.historian['aggr' + text];
          }
          if (lserie.options.id) {
            attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === lserie.options.id.toString());
            aggrType = 0;
            if (attr !== -1) {
              aggrType = parseInt(window.H2buffer.DataAttr[attr].aggr.substr(1, 2));
            }
          }

          if (aggrType === 1) {
            document.getElementById('aggr_text').innerHTML = ' - ' + window.ChhLanguage.default.historian.aggrtxt1 + ': ' + grouping.count + '/' + text;
          } else if (aggrType === 2) {
            document.getElementById('aggr_text').innerHTML = ' - ' + window.ChhLanguage.default.historian.aggrtxt2 + ': ' + grouping.count + '/' + text;
          } else if (aggrType === 3) {
            document.getElementById('aggr_text').innerHTML = ' - ' + window.ChhLanguage.default.historian.aggrtxt3 + ': ' + grouping.count + '/' + text;
          } else if (aggrType === 4) {
            document.getElementById('aggr_text').innerHTML = ' - ' + window.ChhLanguage.default.historian.aggrtxt4 + ': ' + grouping.count + '/' + text;
          } else if (aggrType === 5) {
            document.getElementById('aggr_text').innerHTML = ' - ' + window.ChhLanguage.default.historian.aggrtxt5 + ': ' + grouping.count + '/' + text;
          } else if (aggrType === 6) {
            document.getElementById('aggr_text').innerHTML = ' - ' + window.ChhLanguage.default.historian.aggrtxt6;
          } else if (aggrType === 7) {
            document.getElementById('aggr_text').innerHTML = ' - ' + window.ChhLanguage.default.historian.aggrtxt7 + ': ' + grouping.count + '/' + text;
          } else {
            document.getElementById('aggr_text').innerHTML = ' - ' + window.ChhLanguage.default.historian.aggrtxt1 + ': ' + grouping.count + '/' + text;
          }
        } else {
          document.getElementById('aggr_text').innerHTML = ' -  ' + window.ChhLanguage.default.historian.aggrtxt0;
        }
        break;
      }
    }
  } else {
    document.getElementById('aggr_text').innerHTML = '';
  }
}

function chartSetElements() {

  // dark themes need black borders, update to like chart background
  if ((typeof window.H2buffer.chart.options.chart.backgroundColor) === 'string') {
    $('body').css('background-color', window.H2buffer.chart.options.chart.backgroundColor);
  } else if ((typeof window.H2buffer.chart.options.background2) === 'string') {
    $('body').css('background-color', window.H2buffer.chart.options.background2);
  } else if ((typeof window.H2buffer.chart.options.chart.borderColor) === 'string') {
    $('body').css('background-color', window.H2buffer.chart.options.chart.borderColor);
  }
  $('#message').css('color', window.H2buffer.chart.options.labels.style.color);

  if ((typeof window.H2buffer.Theme_Setting.background2) === 'string') {
    $('.navbar-default').css('background-color', window.H2buffer.Theme_Setting.background2);
    $('.btn-default').css('background-color', window.H2buffer.Theme_Setting.background2);
    $('.form-select-h2').css('background-color', window.H2buffer.Theme_Setting.background2);
    $('.form-input-h2').css('background-color', window.H2buffer.Theme_Setting.background2);
    $('div.modal-content').css('background-color', window.H2buffer.Theme_Setting.background2);
  }
  if ((typeof window.H2buffer.Theme_Setting.textColor) === 'string') {
    $('.navbar-default').css('color', window.H2buffer.Theme_Setting.textColor);
    $('.btn-default').css('color', window.H2buffer.Theme_Setting.textColor);
    $('.btn-default').css('border-color', window.H2buffer.Theme_Setting.textColor);
    $('.form-select-h2').css('color', window.H2buffer.Theme_Setting.textColor);
    $('.form-select-h2').css('border-color', window.H2buffer.Theme_Setting.textColor);
    $('.form-input-h2').css('color', window.H2buffer.Theme_Setting.textColor);
    $('.form-input-h2').css('border-color', window.H2buffer.Theme_Setting.textColor);
    $('div.modal-content').css('color', window.H2buffer.Theme_Setting.textColor);
    $('div.modal-content').css('border-color', window.H2buffer.Theme_Setting.textColor);
  }

  let select;
  let option;
  let i;

  $("#Select-Color").empty();
  // Color options
  select = document.getElementById("Select-Color");
  for (i = 0; i < window.H2buffer.chart.options.colors.length; i++) {
    option = document.createElement("option");
    option.text = 'Color ' + i;
    option.value = 'F' + i;
    option.style.backgroundColor = window.H2buffer.chart.options.colors[i];
    select.add(option);
  }

  $("#Select-Marker").empty();
  // Marker options
  select = document.getElementById("Select-Marker");
  option = document.createElement("option");
  option.text = 'none';
  option.value = 'M0';
  select.add(option);

  for (i = 0; i < window.H2buffer.chart.options.symbols.length; i++) {
    option = document.createElement("option");
    option.text = window.H2buffer.chart.options.symbols[i];
    option.value = 'M' + (i + 1);
    select.add(option);
  }
  for (i = 0; i < window.H2buffer.chart.options.symbols.length; i++) {
    option = document.createElement("option");
    option.text = window.H2buffer.chart.options.symbols[i] + '-RS';
    option.value = 'M' + (i + 1 + window.H2buffer.chart.options.symbols.length);
    select.add(option);
  }
  for (i = 0; i < window.H2buffer.chart.options.symbols.length; i++) {
    option = document.createElement("option");
    option.text = window.H2buffer.chart.options.symbols[i] + '-RW';
    option.value = 'M' + (i + 1 + window.H2buffer.chart.options.symbols.length * 2);
    select.add(option);
  }
  for (i = 0; i < window.H2buffer.chart.options.symbols.length; i++) {
    option = document.createElement("option");
    option.text = window.H2buffer.chart.options.symbols[i] + '-FS';
    option.value = 'M' + (i + 1 + window.H2buffer.chart.options.symbols.length * 3);
    select.add(option);
  }
  for (i = 0; i < window.H2buffer.chart.options.symbols.length; i++) {
    option = document.createElement("option");
    option.text = window.H2buffer.chart.options.symbols[i] + '-FW';
    option.value = 'M' + (i + 1 + window.H2buffer.chart.options.symbols.length * 4);
    select.add(option);
  }

  $("#Select-AxisColor").empty();
  // Color options
  select = document.getElementById("Select-AxisColor");
  option = document.createElement("option");
  option.text = 'Theme';
  option.value = '0';
  option.style.backgroundColor = window.Highcharts.defaultOptions.yAxis.lineColor;
  select.add(option);
  option = document.createElement("option");
  option.text = '1.Serie';
  option.value = '1';
  option.style.backgroundColor = window.Highcharts.defaultOptions.yAxis.lineColor;
  select.add(option);
  for (i = 0; i < window.H2buffer.chart.options.colors.length; i++) {
    option = document.createElement("option");
    option.text = 'Color ' + (i);
    option.value = (i + 2).toString();
    option.style.backgroundColor = window.H2buffer.chart.options.colors[i];
    select.add(option);
  }


  // disable StockTools Button on hide Menue-Buttons
  if (window.H2buffer.Navigator < 4) {
    $(".highcharts-stocktools-wrapper").css("display", "block");
  } else {
    $(".highcharts-stocktools-wrapper").css("display", "none");
  }

  $(window).resize(function() {

    document.getElementById("container").setAttribute("style", "height:" + calcContSize().toString() + "px");

    window.H2buffer.chart.legend.update(defineLegend());
    window.H2buffer.chart.reflow();

  });

}

// avoid double register same event
function eventSingleRegister(el_name, ev_name, ev_func) {
  if (undefined !== jQuery._data($(el_name)[0], "events")) {
    if (undefined !== jQuery._data($(el_name)[0], "events")[ev_name]) {
      return false;
    }
  }
  $(el_name).on(ev_name, ev_func);
  return true;
}

// *** set function for window.H2buffer.filter_feld
eventSingleRegister("#filterFeld", "keyup", function() {
  window.H2buffer.filter_feld = $(this).val().toLowerCase();
  changeEventRaumFilter();
});

// *** set function for Filter Room
eventSingleRegister("#Select-Raum", "change", function() {
  changeEventRaumFilter();
});

// *** set function for Filter Room
eventSingleRegister("#Select-Gewerk", "change", function() {
  changeEventRaumFilter();
});

// **********************
eventSingleRegister("#refresh", "click", function() {
  refreshClick();
  return true;
});

// **********************
eventSingleRegister("#createLink", "click", function() {
  createUrl();
  return true;
});

// *** set function for Favorit Button
eventSingleRegister("#bntFavorit", "click", function() {
  showDialogFav();
  return true;
});

// *** update background color on Field Select-Color
eventSingleRegister("#Select-Color", "change", function() {
  document.getElementById("Select-Color").style.backgroundColor = window.H2buffer.chart.options.colors[parseInt(document.getElementById("Select-Color").value.substr(1, 2))];
});

//*** update background color on Field Select-Color
eventSingleRegister("#Select-AxisColor", "change", function() {
  showDialogYAxisUpdatColor();
});

function refreshClick() {
  window.H2buffer.ZR_Ende = new Date(Date.now());

  // Add Zoom if not full
  let extremes = window.H2buffer.chart.xAxis[0].getExtremes();
  if (extremes.max < extremes.dataMax || extremes.min > extremes.dataMin) {
    window.H2buffer.Zoom = (Math.round(((extremes.max - extremes.min) / (60 * 60 * 1000)) * 100) / 100);
  }

  loadNewSerienData();
  return true;
}

// save to Local Browser Storage
function setLocalData(cname, cvalue) {
  try {
    checkLocalData();    
    let storage_name = window.H2buffer.server + '_' + window.H2buffer.port + '_' + window.H2buffer.version + '_' + cname;
    localStorage.setItem(storage_name, cvalue);
  } catch { }
}

// read Local Browser Storage to speed up 1 display
function getLocalData(cname) {
  try {
    checkLocalData();    
    let storage_name = window.H2buffer.server + '_' + window.H2buffer.port + '_' + window.H2buffer.version + '_' + cname;
    return localStorage.getItem(storage_name);
  } catch {
    return "";
  }
}

// read Local Browser Storage to speed up 1 display
function checkLocalData() {
  try {
    let storage_len = localStorage.length;
    if (storage_len > 4) {
      let storage_name_ver = window.H2buffer.server + '_' + window.H2buffer.port + '_' + window.H2buffer.version;
      for (let i = 0; i < storage_len; i++) {
        let storage_key = localStorage.key(i);
        if (storage_key) {
          if (!storage_key.startsWith(storage_name_ver)) {
            localStorage.removeItem(storage_key)
          }
        }
      }
    };
    return;
  } catch {
    return;
  }
}

// check if new data should be loaded
function checkZeitraum(rangInfo) {
  let range = rangInfo._range;
  if (isNaN(range)) {
    range = 10 * 356 * 24 * 60 * 60 * 1000;   // bug fix for button ALL display last 5 years
  }
  let datNew = new Date(window.H2buffer.ZR_Ende - (new Date(range)));
  // Patch for remove zoom reset: if (window.H2buffer.ZR_Start > datNew) {
  window.H2buffer.ZR_Start = datNew;
  loadNewSerienData();
  window.H2buffer.Button_Jump = true;
  return false;
  // Patch for remove zoom reset: }
  // Patch for remove zoom reset: return true;
}

function calcContSize() {
  let nav_height;
  let char_height;
  let font_factor;
  let cont_height;

  font_factor = window.H2buffer.FontSize / 14;

  if (window.H2buffer.Navigator === 4 || window.H2buffer.Navigator === 3) {
    nav_height = 10;
  } else {
    nav_height = 55;
  }
  nav_height = Math.round(nav_height * font_factor);

  if (window.H2buffer.ShowFilter === 0) {
    char_height = 0;
  } else if (window.H2buffer.ShowFilter === 1) {
    char_height = 105;
  } else if (window.H2buffer.ShowFilter === 2) {
    char_height = 35;
  } else if (window.H2buffer.ShowFilter === 3) {
    char_height = 70;
  }
  char_height = Math.round(char_height * font_factor);

  cont_height = $(window).height() - nav_height - char_height;
  return (cont_height);

}

function ajaxErrorOutput(xhr, status, error) {
  console.log('AXAJ-error:');
  console.log(xhr);
  console.log(status);
  console.log(error);
}

function sortLowercase(a, b) {
  let x = a.toLowerCase();
  let y = b.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}

function clickShowDialogYAxis(sobj) {
  if (sobj.classList) {
    for (let axispos of sobj.classList) {
      if (axispos.substr(0, 5) === 'axisy') {
        showDialogYAxis(axispos);
        break;
      }
    }
  }
  return true;
}

function toolTipInfo(sobj) {
  let xDate = new Date(sobj.x + (getComparisionBackDay(sobj.series.options.id.split('_')[0])));

  let txta = "<span style='fill:" + sobj.color + "'>\u25CF </span>"
    + sobj.series.name + ": <b>"
    + window.Highcharts.numberFormat(sobj.y, 2, ",", ".") + " "
    + sobj.series.tooltipOptions.valueSuffix + "</b><br/>";

  if (sobj.series.hasGroupedData) {

    let lAggrType = '';
    if (sobj.series.options.id) {
      let attr = window.H2buffer.DataAttr.findIndex(obj => obj.id === sobj.series.options.id.toString());
      lAggrType = 0;
      if (attr !== -1) {
        lAggrType = parseInt(window.H2buffer.DataAttr[attr].aggr.substr(1, 2));
      }
    }

    let pointRange;
    if (sobj.series.currentDataGrouping.totalRange) {
      pointRange = sobj.series.currentDataGrouping.totalRange;
    }

    let xEnde = window.Highcharts.dateFormat('%H:%M', xDate.getTime() + pointRange);
    if (xEnde === '00:00') {
      xEnde = '24:00';
    }

    // get Timeframe text
    if (pointRange < 3600000) {
      txta += "<b>" + window.Highcharts.dateFormat('%A, %e. %b %Y, %H:%M', xDate) + '-' + xEnde + "</b>";
    } else if (pointRange < 86400000) {
      txta += "<b>" + window.Highcharts.dateFormat('%A, %e. %b %Y, %H:%M', xDate) + '-' + xEnde + "</b>";
    } else if (pointRange < 86400000 * 20) {
      txta += "<b>" + window.Highcharts.dateFormat('%e. %b', xDate) + '-'
        + window.Highcharts.dateFormat('%e. %b %Y', xDate.getTime() + pointRange - 86400000) + "</b>";
    } else {
      txta += "<b>" + window.Highcharts.dateFormat('%b %Y', xDate) + "</b>";
    }

    // get Aggregation Symbol
    txta += '<i> (<b>';
    if (lAggrType == 1) { txta += jQuery('<div/>').html('&#x00d8; ').text(); }
    // average
    if (lAggrType == 2) { txta += jQuery('<div/>').html('&#x0394; ').text(); }
    // delta
    if (lAggrType == 3) { txta += jQuery('<div/>').html('&#x03a8; ').text(); }
    // min/max
    if (lAggrType == 4) { txta += jQuery('<div/>').html('&#x01a9; ').text(); }
    // sum
    if (lAggrType == 5) { txta += jQuery('<div/>').html('&#x01ac; ').text(); }
    // TIME_ON
    if (lAggrType == 6) { txta += jQuery('<div/>').html('&#x2248; ').text(); }
    // delta+
    if (lAggrType == 7) { txta += jQuery('<div/>').html('&#x2359; ').text(); }

    if (sobj.series.currentDataGrouping) {
      let text = sobj.series.currentDataGrouping.unitName + ((sobj.series.currentDataGrouping.count > 1) ? '2' : '').toString();
      if (window.ChhLanguage.default.historian['aggr' + text]) {
        text = window.ChhLanguage.default.historian['aggr' + text];
      }
      txta += '</b> ' + sobj.series.currentDataGrouping.count + ' ' + text;
    }
    txta += ")</i><br/>";

  } else {
    txta += "<b>" + window.Highcharts.dateFormat('%A, %b %e, %H:%M:%S', xDate) + "</b>";
  }
  return txta;
}

function chartSetFontSize() {

  let Size_N = window.H2buffer.FontSize.toString() + "px";
  let Size_S = Math.round(window.H2buffer.FontSize / 6 * 5).toString() + "px";
  let Size_H = Math.round(window.H2buffer.FontSize / 2).toString() + "px";

  let Fontsize = {
    title: { style: { "fontSize": Size_N } },
    subtitle: { style: { "fontSize": Size_S } },
    xAxis: {
      labels: { style: { "fontSize": Size_N } },
      title: { style: { "fontSize": Size_N } },
    },
    yAxis: {
      labels: { style: { "fontSize": Size_N } },
      title: { style: { "fontSize": Size_N } },
    },
    tooltip: {
      headerFormat: (window.H2buffer.ToolTip === 1) ? "<span style=\"font-size: " + Size_N + "\">{point.key}</span><br/>" : "",
      style: { fontSize: Size_S }
    },
    legend: {
      itemStyle: { fontSize: Size_S },
      navigation: {
        arrowSize: Math.round(window.H2buffer.FontSize / 6 * 5),
        style: { fontSize: Size_S }
      },
      title: { style: { fontSize: Size_N } }
    },
    credits: { style: { fontSize: Size_H } },
    labels: { style: { fontSize: Size_S } },
    rangeSelector: {
      buttonTheme: { // styles for the buttons
        style: { fontSize: Size_S } //width: (window.H2buffer.FontSize*2+20).toString() + "px", height: (window.H2buffer.FontSize+20).toString() + "px" }
      },
      //      height: (window.H2buffer.FontSize + 20).toString() + "px",
      buttonSpacing: Math.round(window.H2buffer.FontSize - 7),
    },
    navigator: { height: window.H2buffer.FontSize * 3 },
    scrollbar: { height: window.H2buffer.FontSize },
    navigation: {
      //      annotationsOptions: { labelOptions: { style: { "font-size": Size_H } } },
      buttonOptions: {
        symbolSize: window.H2buffer.FontSize,
        height: window.H2buffer.FontSize + 8,
        width: window.H2buffer.FontSize + 10
      },
      menuItemStyle: { "font-size": Size_S }
    }
  };

  window.H2buffer.Theme_Setting = window.Highcharts.merge(window.H2buffer.Theme_Setting, Fontsize);


  // calculate Font Sizes from Setting
  if (window.H2buffer.FontSize) {
    $('body').css('font-size', window.H2buffer.FontSize.toString() + "px");
    $('.form-select-h2').css('font-size', window.H2buffer.FontSize.toString() + "px");
    $('.form-input-h2').css('font-size', window.H2buffer.FontSize.toString() + "px");
    $('.modal-title').css('font-size', window.H2buffer.FontSize.toString() + "px");
    $('.modal-title2').css('font-size', window.H2buffer.FontSize.toString() + "px");
    $('.modal-title3').css('font-size', window.H2buffer.FontSize.toString() + "px");
    $('.btn-default').css('font-size', window.H2buffer.FontSize.toString() + "px");
    $('.LinePopup-text').css('width', 140 + (window.H2buffer.FontSize * 6) + "px");
    $('.modal-dialog').css('width', 400 + (window.H2buffer.FontSize * 17) + "px");
    $('.close').css('font-size', (window.H2buffer.FontSize / 2 * 3).toString() + "px");
    $('.navbar-brand').css('font-size', (window.H2buffer.FontSize + 4).toString() + "px");
    $('.highcharts-button-box').css('height', (window.H2buffer.FontSize + 4).toString() + "px");
    $('#bntFavorit').css('width', 16 + (window.H2buffer.FontSize * 6) + "px");

    let dStyle = document.querySelector('style');

    dStyle.innerHTML = '.highcharts-toggle-toolbar.highcharts-arrow-left  { \n' +
      '  width: ' + (window.H2buffer.FontSize + 6).toString() + 'px;\n' +
      '  height: ' + (window.H2buffer.FontSize + 6).toString() + 'px;\n' +
      '  background-color: ' + window.H2buffer.Theme_Setting.background2 + ';\n' +
      '}\n' +
      '.highcharts-toggle-toolbar.highcharts-arrow-left.highcharts-arrow-right {\n' +
      '  width: ' + (window.H2buffer.FontSize + 6).toString() + 'px;\n' +
      '  height: ' + (window.H2buffer.FontSize + 6).toString() + 'px;\n' +
      '  background-color: ' + window.H2buffer.Theme_Setting.background2 + ';\n' +
      '}\n' +
      'div.highcharts-bindings-wrapper li > span.highcharts-menu-item-btn { \n' +
      '  background-size: ' + (window.H2buffer.FontSize + 20).toString() + 'px 100%;\n' +
      //                        '  filter: invert(100%);\n' +
      //                        '  -webkit-filter: invert(100%);\n' +
      '}\n';

    dStyle.innerHTML += 'div.highcharts-menu-wrapper, div.highcharts-bindings-wrapper ul { \n' +
      '  width: ' + (window.H2buffer.FontSize + 20).toString() + 'px;\n' +
      '}\n' +
      'li.highcharts-segment > ul.highcharts-submenu-wrapper { \n' +
      '  width: ' + (window.H2buffer.FontSize + 20).toString() + 'px;\n' +
      '  background: ' + window.H2buffer.Theme_Setting.background2 + ';\n' +
      '}\n' +
      'div.highcharts-bindings-wrapper .highcharts-stocktools-toolbar li { \n' +
      '  height: ' + (window.H2buffer.FontSize + 20).toString() + 'px;\n' +
      '  background-color: ' + window.H2buffer.Theme_Setting.background2 + ';\n' +
      '}\n';
    // Indicator Separator Height
    dStyle.innerHTML += 'div.highcharts-bindings-wrapper .highcharts-stocktools-toolbar li.highcharts-separator {\n' +
      '  height: ' + (window.H2buffer.FontSize).toString() + 'px;\n' +
      '}\n';

    dStyle.innerHTML += 'div#filter select, div#filter input, div#filter button { \n' +
      '  height: ' + (34 / 14 * window.H2buffer.FontSize).toString() + 'px;\n' +
      '}\n';
    // Indicator Popup Colors:
    dStyle.innerHTML += '.highcharts-indicator-list {\n' +
      '  background: ' + window.H2buffer.Theme_Setting.background2 + ';\n' +
      '  color: ' + window.H2buffer.Theme_Setting.textColor + ';\n' +
      '}\n';
    dStyle.innerHTML += '.highcharts-input-search-indicators-label {\n' +
      '  color: ' + window.H2buffer.Theme_Setting.textColor + ';\n' +
      '  background: ' + window.H2buffer.Theme_Setting.background2 + ';\n' +
      '}\n';
    dStyle.innerHTML += '.highcharts-popup {\n' +
      '  background-color: ' + window.H2buffer.Theme_Setting.background2 + ';\n' +
      '  color: ' + window.H2buffer.Theme_Setting.textColor + ';\n' +
      '  border: 1px solid ' + window.H2buffer.Theme_Setting.chart.borderColor + ';\n' +
      '}\n';
    // RangeSelektor Button selektionSize
    dStyle.innerHTML += 'rect.highcharts-button-box {\n' +
      '  width: ' + (window.H2buffer.FontSize + 20).toString() + 'px;\n' +
      '  height: ' + (window.H2buffer.FontSize + 10).toString() + 'px;\n' +
      '  x: ' + Math.round((window.H2buffer.FontSize - 14) / 2 * -1).toString() + 'px;\n' +
      '  y: ' + Math.round((window.H2buffer.FontSize - 14) / 2 * -1).toString() + 'px;\n' +
      '}\n';
    // Zoom text box
    dStyle.innerHTML += '.highcharts-reset-zoom rect.highcharts-button-box {\n' +
      '  width: ' + (window.H2buffer.FontSize + 135).toString() + 'px;\n' +
      '  height: ' + (window.H2buffer.FontSize + 20).toString() + 'px;\n' +
      '}\n';
    // Bug Menue Button hide footer
    dStyle.innerHTML += 'div#container{\n' +
      '  z-index: auto !important;\n' +
      '  overflow: visible!important;\n' +
      '}\n';
  }
}