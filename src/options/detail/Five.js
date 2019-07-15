const Five = (data) => {
  return(
    {

      "normal": {
        "top": 200,
        "left": 300,
        "width": 500,
        "height": 400,
        "zIndex": 6,
        "backgroundColor": ""
      },
      "title": {
        "show": true,
        "text": "概览",
        "left": "10%",
        'top':'3%'
      },
      "tooltip": {
        "show": true,
        "trigger": "item"
      },
      "legend": {
        "show": true,
        "icon": "circle",
        "left": "35%",
        "top": "90%",
        "orient": "horizontal",
        "textStyle": {
          "fontSize": 14,
          "color": "#fff"
        },
        "data": ["区县数据", "全省均值","全市均值"]
      },
      "radar": {
        "center": ["50%", "50%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "circle",
        "splitArea": {
          "areaStyle": {
            "color": ["transparent"]
          }
        },
        "axisLabel": {
          "show": false,
          "fontSize": 18,
          "color": "#fff",
          "fontStyle": "normal",
          "fontWeight": "normal"
        },
        "axisLine": {
          "show": true,
          "lineStyle": {
            "color": "grey"//
          }
        },
        "splitLine": {
          "show": true,
          "lineStyle": {
            "color": "grey"//
          }
        },
        "indicator": [{
          "name": "渗透率",

        }, {
          "name": "保有率",

        }, {
          "name": "累计净增条数",

        }, {
          "name": "收入环比",

        }, {
          "name": "月累计收入目标完成率",

        }]
      },
      "series": [{
        "name": "区县数据",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "areaStyle": {
          "normal": {
            "color": "rgba(245, 166, 35, 0.4)"
          }
        },
        itemStyle:{
          color:'rgba(245, 166, 35, 1)',
          borderColor:'rgba(245, 166, 35, 0.3)',
          borderWidth:10,
        },
        "lineStyle": {
          "normal": {
            "type": "dashed",

            "color": "rgba(245, 166, 35, 1)",
            "width": 2
          }
        },
        "data": [
          data
        ]
      },
        {
          "name": "全市均值",
          "type": "radar",
          "symbol": "circle",
          "symbolSize": 10,
          "itemStyle": {
            "normal": {
              color:'rgba(19, 173, 255, 1)',
              "borderColor": "rgba(19, 173, 255, 0.4)",
              "borderWidth": 10
            }
          },
          "areaStyle": {
            "normal": {
              "color": "rgba(19, 173, 255, 0.5)"
            }
          },
          "lineStyle": {
            "normal": {
              "color": "rgba(19, 173, 255, 1)",
              "width": 2,
              "type": "dashed"
            }
          },
          "data": [
            [4.4, 94.6, 73, 2, 81.8]
          ]
        }
        ]
    }
  )
}

export default Five
