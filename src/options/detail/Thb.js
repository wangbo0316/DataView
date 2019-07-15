const Thb = (data) => {
  return (
    {
      baseOption:{
        timeline: {
          axisType: 'category',
          orient: 'vertical',
          autoPlay: true,
          inverse: true,
          playInterval: 4000,
          left: null,
          right: '3%',
          top: '15%',
          bottom: 0,
          width: 55,
          height: '80%',
          data: ['同比','环比']
        },
        legend: {
          right:'3%',
          top:'3%'
        },
        title:{
          text:'收入走势',
          left:'5%',
          top:'3%'
        },
        tooltip: {
          formatter: "{a0} : {c0} 万元<br/>{a1} : {c1} %",
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid:{
          bottom:'10%',
          left:'5%',
          right:'12%'
        },
        xAxis: [
          {

            type: 'category',
            data: data['日期'],
          }
        ],
        yAxis: [
          {
            show:false,
            type: 'value',
          },
          {
            show:false,
            type: 'value',
          }
        ],
        series: [
          {
            type:'bar',
            barWidth:'40%',
            itemStyle:{
              barBorderRadius:[10,10,5,5]
            }
          },
          {
            type:'line',
            yAxisIndex: 1,
          }
        ]
      },
      options:data['options']
    }
  )
}
export default Thb
