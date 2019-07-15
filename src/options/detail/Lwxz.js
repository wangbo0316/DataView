const Lwxz = (data) => {
  return (
    {
      tooltip: {
        formatter: "{a0} : {c0} 条<br/>{a1} : {c1} 条<br/>{a2} : {c2} %",
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
        right:'5%'
      },
      title:{
        text:'离网&新增',
        left:'5%',
        top:'3%'
      },
      legend: {
        right:'3%',
        top:'3%',
        data:['新增条数','离网条数','离网率']
      },
      xAxis: [
        {
          type: 'category',
          data: data['日期'],
        }
      ],
      yAxis: [
        {
          type: 'value',
          show:false,
        },
        {
          type: 'value',
          show:false,
        }
      ],
      series: [
        {
          name:'新增条数',
          type:'bar',
          data:data['新增条数'],
          itemStyle:{
            barBorderRadius:[10,10,5,5]
          }
        },
        {
          name:'离网条数',
          type:'bar',
          data:data['离网条数'],
          itemStyle:{
            barBorderRadius:[10,10,5,5]
          }
        },
        {
          name:'离网率',
          type:'line',
          yAxisIndex: 1,
          data:data['离网率']
        }
      ]
    }
  )
}
export default Lwxz
