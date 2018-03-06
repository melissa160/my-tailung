/*import * as React from "react"
import * as ReactDOM from "react-dom"
import PropTypes from "prop-types"

export interface GraphProps { names: number[]; }

  var chartDataJson = [{campaign: "C1", valAcum: 1, valCampaign: 5, valVsAvg: 3},
                      {campaign: "C2", valAcum: 2, valCampaign: 4, valVsAvg: 3},
                      {campaign: "C3", valAcum: 3, valCampaign: 3, valVsAvg: 3},
                      {campaign: "C4", valAcum: 4, valCampaign: 2, valVsAvg: 3}]

  printChart("valAcum")

  $(".valorization-chart").click(function() {
    $(".valorization-chart").removeClass('tertiary-button-active')
    $(this).addClass('tertiary-button-active')
    var chartType = $(this).data("chart-type");
    printChart(chartType)
  });

  function printChart(chartType) {
    clear();
    var chartData = generatechartData(chartType);
    paint(chartData);
  }

  function clear(){
    $("#chartdiv").html("")
  }

  function generatechartData(chartType) {
    var chartData = [];

    for (var i = 0; i < chartDataJson.length; i++) {
      var campaign = chartDataJson[i].campaign
      var valData = chartDataJson[i][chartType]
      chartData.push({
        campaign: campaign,
        valData: valData
      });
    }
    return chartData;
  }

  function paint(chartData){
    var chart = AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "light",
        "marginTop":0,
        "dataProvider": chartData,
        "valueAxes": [{
             "axisAlpha": 0,
             "color": "#687189",
             "fontWeight": "bold",
             "position": "left"
        }],
        "balloon": {
            "adjustBorderColor": true,
            "borderThickness": 0,
            "fillAlpha": 1,
            "horizontalPadding": 10,
            "verticalPadding": 10,
            "shadowAlpha": 0.4,
            "shadowColor": "#9CAED9",
            "color": "#5AB0EE",
            "cornerRadius": 3,
            "textAlign": "left"
        },
        "graphs": [{
            "id":"g1",
            "fillAlphas": 0.1,
            "balloon": {
              "drop": true
            },
            "balloonText": "[[category]]<br><b><span style='text-align: left; color: #687189; font-weight: bold; font-size:12px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 8,
            "useLineColorForBulletBorder": true,
            "lineColor": "#2EC6C8",
            "lineThickness": 2,
            "negativeLineColor": "#2087D1",
            "type": "smoothedLine",
            "valueField": "valData"
        }],
        "categoryField": "campaign",
        "categoryAxis": {
           "gridPosition": "start",
           "gridAlpha": 0,
           "tickPosition": "start",
           "tickLength": 20,
           "minorGridAlpha": 0.1,
           "minorGridEnabled": true

        },
    });
  }*/
