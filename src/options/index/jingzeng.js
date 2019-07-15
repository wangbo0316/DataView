const jingzeng = (firstData,color) => {
  return(
    {
      baseOption: {
        timeline: {
          axisType: 'category',
          orient: 'vertical',
          autoPlay: true,
          inverse: true,
          playInterval: 2000,
          left: null,
          right: 0,
          top: 0,
          bottom: 0,
          width: 55,
          height: null,
          data: firstData['区县']
        },
        title: {
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar = params[1];
            return tar.name + ' : ' + tar.value + '条';
          }
        },
        calculable : true,
        grid: {
          top: '15%',
          bottom: '5%',
          right:'15%',
          left:'5%',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                formatter: function (params) {
                  return params.value.replace('\n', '');
                }
              }
            }
          }
        },
        xAxis: {
          type : 'category',
          splitLine: {show:false},
          data : ['到达值','本年净增','本月净增']
        },
        yAxis: {
          type : 'value',
          show:false
        },
        series: [
          {
            name: '辅助',
            type: 'bar',
            barWidth:'35%',
            stack:  '总量',
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },

          },
          {
            name: '值',
            type: 'bar',
            barWidth:'35%',
            stack: '总量',
            itemStyle:{
              color:color[4],
              barBorderRadius:5
            },
            label: {
              normal: {
                show: true,
                fontSize:18,
                position: 'inside'
              }
            },

          }
        ]
      },
      options: firstData['options']
    }
  )

}

export default jingzeng
