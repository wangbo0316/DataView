



const baoyou = (firstData,color) => {
  return(
    {
      title : {
        text: '保有一览',
        left: 'left'
      },




      tooltip: {
        trigger: 'axis',
        formatter: "{a0} : {c0} 条<br/>{a1} : {c1} 条<br/>{a2} : {c2} %<br/>{a3} : {c3} %<br/>"
      },
      grid: {
        top: '20%',
        bottom:'5%',
        left:'5%',
        right:'5%'
      },

      legend: {
        data:['存量条数','保有条数','保有率','目标保有率',],
        left:"right"
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: firstData["区县"]
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '',
          min: firstData["条数最大值"],
          max: firstData["条数最小值"],
          position: 'right',
          show:false
        },
        {
          type: 'value',
          name: '',
          min: firstData["保有率最小值"],
          max: firstData["保有率最大值"],
          position: 'left',
          show:false
        }
      ],
      series: [
        {
          name:'存量条数',
          type:'bar',
          data:firstData["存量条数"],
          itemStyle:{
            barBorderRadius:5,
            shadowBlur: 5,
            shadowColor:'rgba(232,232,232,0.8)'
          }
        },
        {
          name:'保有条数',
          type:'bar',
          data:firstData["保有条数"],
          itemStyle:{
            barBorderRadius:5,
            shadowBlur: 5,
            shadowColor:'rgba(232,232,232,0.8)'
          }
        },
        {
          name:'保有率',
          type:'line',
          yAxisIndex: 1,
          data:firstData["保有率"],
          lineStyle:{
            shadowBlur: 30,
            shadowColor:'rgba(232,232,232,0.8)'
          }
        },
        {
          name:'目标保有率',
          type:'line',
          yAxisIndex: 1,
          symbolSize: 0,
          lineStyle:{
            width:5,
            type:'dashed',
            shadowBlur: 5,
            shadowColor:'rgba(232,232,232,0.8)'
          },
          data:[95.0,95.0,95.0,95.0,95.0,95.0,95.0,95.0,95.0,95.0,95.0],
        },

      ]
    }
  )

}

export default baoyou
