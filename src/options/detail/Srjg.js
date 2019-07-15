const Srjg = (data) => {
  return (
    {
      title : {
        text: '互联网&数据专线占比',
        left:'5%',
        top:'3%'

      },
      grid:{
        show:false,
      },

      tooltip: {
        trigger: 'item',
        formatter: '{b}：{c} <br\> 占比：{d}%'
      },
      series: [
        {
          name:'占比',
          type:'pie',
          radius: [0, '43%'],
          center:['57%','57%'],
          label: {
            normal: {
              formatter: '{b}：{c}\n占比：{d}%',
              position: 'inner',
              fontSize:18
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:data['收入']
        },
        {
          name:'占比',
          label: {
            normal: {
              formatter: '{b}：{c}\n占比：{d}%',
              position: 'inner',
              fontSize:18
            }
          },
          type:'pie',
          radius: ['60%', '85%'],
          center:['57%','57%'],
          data:data['条数']
        }
      ]
    }
  )
}
export default Srjg
