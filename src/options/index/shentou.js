const shentou = (firstData, color) => {
  return(
    {
      title: {
        text: '专线渗透率',
        left: 'left',
      },

      tooltip : {
        trigger: 'item',
        formatter:function(params, ticket, callback){
          return '全量集团数：'+params.data.full+'&nbsp;家'+'<br/>'+'已订购专线集团数：'+params.data.done+'&nbsp;家'+'<br/>'+'专线产品渗透率：'+params.data.value+'%'
        }
      },

      visualMap: {
        show: false,
        min: firstData['min'],
        max: firstData['max'],
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series : [
        {
          name:'产品渗透率',
          type:'pie',
          radius : ['40','90%'],
          center: ['50%', '50%'],
          data:firstData['val'].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: color[2],
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 1)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
        }
      ]
    }
  )
}

export default shentou
