const Stl = (data) => {
  var baifenbi = data['data'];
  var grayBar =[]
  var zongjine = data['data'];
  var city = data['indestry'];
  city.map(i=>{grayBar.push(Math.max.apply(Math,data['data'])+3)})
  return (
    {
      title: {
        text: '行业渗透率',
        left:'5%',
        top:'3%'
      },
      grid:{
        show:false,
        bottom:0,
        right:'10%'
      },
      xAxis: [{
        show: false,
      },
        //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
        {
          show: false,
        }
      ],
      yAxis: {
        type: 'category',
        axisLabel: {
          show: false, //让Y轴数据不显示
        },
        itemStyle: {

        },
        axisTick: {
          show: false, //隐藏Y轴刻度
        },
        axisLine: {
          show: false, //隐藏Y轴线段
        },
        data: city,
      },
      series: [
        //背景色--------------------我是分割线君------------------------------//
        {
          show: true,
          type: 'bar',
          barGap: '-100%',
          barWidth: '35%', //统计条宽度
          itemStyle: {
            barBorderRadius: 15,
            color: 'rgba(102, 102, 102,0.5)'
          },
          z:1,
          data: grayBar,
        },
        //蓝条--------------------我是分割线君------------------------------//
        {
          show: true,
          type: 'bar',
          barGap: '-100%',
          barWidth: '35%', //统计条宽度
          itemStyle: {
            normal: {
              barBorderRadius: 20, //统计条弧度
            },
          },
          max: 1,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff', //百分比颜色
              },
              position: 'right',
              //百分比格式
              formatter: function(data) {
                return baifenbi[data.dataIndex]  + '%';
              },
            }
          },
          labelLine: {
            show: false,
          },
          z:2,
          data: baifenbi,
        },
        //数据条--------------------我是分割线君------------------------------//
        {
          show: true,
          type: 'bar',
          xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
          barGap: '-100%',
          barWidth: '25%', //统计条宽度
          itemStyle: {
            normal: {
              barBorderRadius: 20,
              color: 'rgba(22,203,115,0.05)'
            },
          },
          label: {
            normal: {
              show: true,
              //label 的position位置可以是top bottom left,right,也可以是固定值
              //在这里需要上下统一对齐,所以用固定值
              position: [0, '-150%'],
              color:'#fff',
              formatter: function(data) {
                //富文本固定格式{colorName|这里填你想要写的内容}
                return city[data.dataIndex]
              },
            }
          },
          data: zongjine
        }

      ]
    }
  )
}
export default Stl
