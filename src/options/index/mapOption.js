import "echarts-gl"

const Option = (data) => {
  return ({
    geo: {
      map: 'guiyang',
      roam: true,
      zoom: 1.3,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(147, 235, 248, 1)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [{
              offset: 0,
              color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          shadowColor: 'rgba(128, 217, 248, 1)',
          // shadowColor: 'rgba(255, 255, 255, 1)',
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10
        },
        emphasis: {
          areaColor: '#389BB7',
          borderWidth: 0
        }
      },
      // regions: opt.activeArea.map(function(item) {
      //   if (typeof item !== 'string') {
      //     return {
      //       name: item.name,
      //       itemStyle: {
      //         normal: {
      //           areaColor: item.areaColor || '#389BB7'
      //         }
      //       },
      //       label: {
      //         normal: {
      //           show: item.showLabel,
      //           textStyle: {
      //             color: '#fff'
      //           }
      //         }
      //       }
      //     }
      //   } else {
      //     return {
      //       name: item,
      //       itemStyle: {
      //         normal: {
      //           borderColor: '#91e6ff',
      //           areaColor: '#389BB7'
      //         }
      //       }
      //     }
      //   }
      // })
    },
    grid: {
      show: false,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },


    title: {
      text: '地图散点',
      left: 'left'
    },
    tooltip: {
      show: true,
      trigger:'item',
      alwaysShowContent:false,
      backgroundColor:'rgba(50,50,50,0.7)',
      hideDelay:100,
      triggerOn:'mousemove',
      textStyle:{
        fontSize: 22,
        color: '#FFF',
      },
      enterable:true,
      position:['60%','70%'],
      formatter:function(params, ticket, callback){
        return '当月收入：'+params.data.income+'&nbsp;&nbsp;&nbsp;(万元)'+'<br/>'+'累计收入：'+params.data.total_income+'&nbsp;&nbsp;&nbsp;(万元)'+'<br/>'+'占数字化服务收入比：'+params.data.zsb+'<br/>'+'收入贡献率：'+params.data.gxl+'<br/>'+'收入排名：第'+params.data.pm+' 名'
      }
    },

    series: [
      {
        name: '',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: data,
        symbolSize: function (val) {
          return val[2];
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        itemStyle: {
          normal: {

            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      },


    ]
  })
}
export default Option
