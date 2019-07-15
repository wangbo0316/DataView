
var arr = [];
var r = 100;
for (var i = 0; i < 1000; i++) {
  var rad = 2 * Math.PI / 1000 * i;
  var x = Math.cos(rad) * r + 500;
  var y = Math.sin(rad) * r + 500;

  arr.push([x, y]);
}

var arr2 = [];
for (var i = 500; i < 1000; i++) {
  var rad = 2 * Math.PI / 1000 * i;
  var x = Math.cos(rad) * r + 500;
  var y = Math.sin(rad) * r + 500;

  arr2.push([x, y]);
}
for (var i = 0; i < 500; i++) {
  var rad = 2 * Math.PI / 1000 * i;
  var x = Math.cos(rad) * r + 500;
  var y = Math.sin(rad) * r + 500;

  arr2.push([x, y]);
}
var rotate = 45;
var width = 4;

const saotu = (data) => {
  return(
    {
      title: {
        text: '月度累计收入完成率',
        left: 'left'
      },

      tooltip: {
        show: true,
        trigger:'item',
      },
      xAxis: {

        max: 1000,
        min: 0,
        interval: 100,
        show: false,
        silent: true

      },
      yAxis: {

        max: 1000,
        min: 0,
        interval: 100,
        show: false,
        silent: true
      },
      radar: {
        center: ['50%', '50%'],
        indicator: data['indicatorData'],
        radius: '70%',
        splitNumber: 1,
        shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontFamily: "Microsoft YaHei"
          },

          padding: [1, 1, 1, 1]
        },
        splitLine: {

          lineStyle: {
            color: '#4f8bbe',
            opacity: 0.5,
            type: 'dotted'
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: '#0d6dba',
            opacity: 0
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#4f8bbe',
            opacity: 0.5,
            type: 'dotted'
          }
        },
        axisTick: {
          show: true
        },

        zlevel: 20
      },
      series: [
        {
          name: '左下红弧',
          type: 'gauge',
          radius: '99%',
          startAngle: -160,
          endAngle: -170,
          zlevel: 22,
          axisLine: {
            lineStyle: {
              color: [
                [0.2, '#d70029'],
                [1, '#d70029']
              ],
              width: 4,
              shadowColor: '#d70029',
              shadowOffsetX: 0,
              shadowOffsetY: -12,
              shadowBlur: 120,
              opacity: 1,
            }

          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          detail: {
            show: false
          }
        },
        {
          name: '右上红弧',
          type: 'gauge',
          radius: '99%',
          startAngle: -340,
          endAngle: -350,
          zlevel: 22,
          axisLine: {
            lineStyle: {
              color: [
                [0.2, '#d70029'],
                [1, '#d70029']
              ],
              width: 4,
              shadowColor: '#d70029',
              shadowOffsetX: 0,
              shadowOffsetY: -12,
              shadowBlur: 120,
              opacity: 1,
            }

          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          detail: {
            show: false
          }
        },
        {
          name: '右外圈',
          type: 'gauge',
          radius: '99%',
          startAngle: -320,
          endAngle: -400,
          axisLine: {
            lineStyle: {
              color: [
                [0.2, '#0e313f'],
                [0.8, '#0e313f'],
                [1, '#0e313f']
              ],
              width: 4,
              // shadowColor: '#d70029',
              shadowOffsetX: 0,
              shadowOffsetY: -12,
              shadowBlur: 120,
              opacity: 1,
            }

          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          detail: {
            show: false
          }
        },
        {
          name: '左外圈',
          type: 'gauge',
          radius: '99%',
          startAngle: -140,
          endAngle: -220,
          axisLine: {
            lineStyle: {
              color: [
                [0.2, '#0e313f'],
                [0.8, '#0e313f'],
                [1, '#0e313f']
              ],
              width: 4,
              // shadowColor: '#d70029',
              shadowOffsetX: 0,
              shadowOffsetY: -12,
              shadowBlur: 120,
              opacity: 1,
            }

          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          detail: {
            show: false
          }
        },
        {
          name: '蓝色外圈1',
          type: 'gauge',
          radius: '99%',
          startAngle: -85 + rotate,
          endAngle: -115 + rotate,
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              color: [
                [1, '#1e5a67']
              ],
              width: width,


              opacity: 1,
            }

          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          detail: {
            show: false
          }
        },
        {
          name: '蓝色外圈2',
          type: 'gauge',
          radius: '99%',
          startAngle: -155 + rotate,
          endAngle: 175 + rotate,
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              color: [
                [1, '#1e5a67']
              ],
              width: width,


              opacity: 1,
            }

          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          detail: {
            show: false
          }
        },
        {
          name: '蓝色外圈3',
          type: 'gauge',
          radius: '99%',
          startAngle: 25 + rotate,
          endAngle: -5 + rotate,
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              color: [
                [1, '#1e5a67']
              ],
              width: width,


              opacity: 1,
            }

          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          detail: {
            show: false
          }
        },
        {
          name: '蓝色外圈4',
          type: 'gauge',
          radius: '99%',
          startAngle: 95 + rotate,
          endAngle: 65 + rotate,
          splitNumber: 4,
          axisLine: {

            lineStyle: {
              color: [
                [1, '#1e5a67']
              ],
              width: width,
              opacity: 1,
            }

          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          detail: {
            show: false
          }
        },
        {
          type: 'pie',

          radius: ['72%', '92%'],
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 1000,
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: '#4dfaff',
                opacity: 0.2
              }
            }
          }]
        },


        {
          name: '完成率',
          type: 'radar',
          radarIndex: 0,
          lineStyle: {
            normal: {
              width: 3,
              opacity: 1,
              shadowBlur: 30,
              shadowColor:'rgba(232,232,232,0.8)'
            }
          },
          data: data['dataBJ'],
          symbolSize: 15,
          itemStyle: {
            normal: {
              shadowBlur: 30,
              shadowColor:'rgba(232,232,232,0.8)',
              borderWidth: 4,
            }
          },
          areaStyle: {
            normal: {
              show:false,
              opacity: 0
            }
          },
          label: {
            normal: {
              show: false,
              position: 'top'
            }
          },
          zlevel: 21
        },

        {
          name: "仪盘表",
          type: "gauge",
          // min: 0,
          // max: 360,
          startAngle: 0,
          endAngle: 15,
          splitNumber: 5,
          radius: '92%',
          // radius: ['72%', '92%'],
          zlevel: 22,
          axisLine: {
            lineStyle: {
              color: [
                [0.1, "#d70029"],
                [1, "#0d2534"]
              ],
              // width: 90,
              opacity: 0
            },
          },
          axisTick: {
            lineStyle: {
              color: '#4dfdfe',

              width: 2,
              opacity: [
                [0.1, 1],
                [0.5, 0.5],
                [1, 0.1]
              ]
            },

            length: '22%',
            splitNumber: 2
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5,
            show: false
          },
          axisLabel: {
            distance: 10,
            textStyle: {
              color: "#fff"
            },
            show: false,
          },
          splitLine: {
            "show": false
          },
          itemStyle: {
            normal: {
              color: "#494f50"
            }
          },
          detail: {

            show: false
          }
        },
        {
          name: "仪盘表",
          type: "gauge",
          // min: 0,
          // max: 360,
          startAngle: 180,
          endAngle: 195,
          splitNumber: 5,
          radius: '92%',
          // radius: ['72%', '92%'],
          zlevel: 22,
          axisLine: {
            lineStyle: {
              color: [
                [0.1, "#d70029"],
                [1, "#0d2534"]
              ],
              // width: 90,
              opacity: 0
            },
          },
          axisTick: {
            lineStyle: {
              color: '#4dfdfe',

              width: 2,
              opacity: [
                [0.1, 1],
                [0.5, 0.5],
                [1, 0.1]
              ]
            },

            length: '22%',
            splitNumber: 2
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5,
            show: false
          },
          axisLabel: {
            distance: 10,
            textStyle: {
              color: "#fff"
            },
            show: false,
          },
          splitLine: {
            "show": false
          },
          itemStyle: {
            normal: {
              color: "#494f50"
            }
          },
          detail: {

            show: false
          }
        }

      ]
    }
  )
}
export default saotu
