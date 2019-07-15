import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Row,Col,Menu,Dropdown,Button,Modal,Card } from "antd"
import ReactEcharts from 'echarts-for-react';
import mapOption from '../options/index/mapOption'
import shentou from '../options/index/shentou'
import Cookies from 'js-cookie';
import data from "../options/data/data"
import baoyou from "../options/index/baoyou"
import jingzeng from "../options/index/jingzeng"
import saotu from "../options/index/saotu"
import PmCard from "../options/index/pmCard"
import Theme_1 from "../options/theme/Theme_1"
import Theme_2 from "../options/theme/Theme_2"
import Theme_3 from "../options/theme/Theme_3"
import Theme_4 from "../options/theme/Theme_4"
import Theme_5 from "../options/theme/Theme_5"
import Theme_6 from "../options/theme/Theme_6"
import Theme_7 from "../options/theme/Theme_7"
import Theme_8 from "../options/theme/Theme_8"

class IndexPage extends React.Component{
  state = {
    visible:false,
  };

  componentWillMount(){
    const {history} = this.props
    const cookie = Cookies.get('isLogin')
    console.log(cookie)
    if(!cookie){
      history.push('/login')
    }
  }
  render(){
    const {history,dispatch,dvaState} = this.props
    const handleOk = () => {
      this.setState({
        visible:false,
      })
    }
    const handleCancel = () => {
      this.setState({
        visible:false,
      })
    }
    const showModal = () => {
      this.setState({
        visible:true,
      })
    }
    const {themee,a} = dvaState
    let theColor = () => {
      switch (themee) {
        case '1':return Theme_1['color']
        case '2':return Theme_2['color']
        case '3':return Theme_3['color']
        case '4':return Theme_4['color']
        case '5':return Theme_5['color']
        case '6':return Theme_6['color']
        case '7':return Theme_7['color']
        case '8':return Theme_8['color']
      }
    }
    let animotionID = 0
    //热力地图
    let mp = mapOption(data['地图数据'])
//保有
    let by = baoyou(data['保有'],theColor())
//占收比
    let stl = shentou(data['渗透'],theColor())
//净增
    let jz = jingzeng(data['净增'],theColor())
    let opp = saotu(data['完成率'])
    const handlemap ={
      'click': function (para) {
        let name = para.name
        const lii = ["清镇","花溪","小河","云岩","南明","白云","金阳","乌当","息烽","开阳","修文"]
        if(lii.indexOf(name) != -1){
          cancelAnimationFrame(animotionID)
          history.push(`/detail/${name}`)
        }


      },
    }
    const changeTheme = (item) =>{
      cancelAnimationFrame(animotionID)

      dispatch({
        type:'dvaState/changeState',
        payload:{
          themee:item.key
        }
      })
    }
    const menu = (<Menu onClick={changeTheme}>
      <Menu.Item key='1'>主题-1</Menu.Item>
      <Menu.Item key='2'>主题-2</Menu.Item>
      <Menu.Item key='3'>主题-3</Menu.Item>
      <Menu.Item key='4'>主题-4</Menu.Item>
      <Menu.Item key='5'>主题-5</Menu.Item>
      <Menu.Item key='6'>主题-6</Menu.Item>
      <Menu.Item key='7'>主题-7</Menu.Item>
      <Menu.Item key='8'>主题-8</Menu.Item>
    </Menu>)

    const LoginOut = () => {
      Cookies.remove('isLogin')
      history.push('/login')
    }

    return(
      <div>
        {/*标题*/}
        <p className={styles.top_star} style={{marginTop:10}}>【贵阳政企】集团专线产品运营总览</p>
        <Dropdown style={{position:'absolute',right:'10rem',top:'2rem'}} overlay={menu}>
          <Button ghost type="dashed" style={{position:'absolute',right:'10rem',top:'2rem'}}>切换主题</Button>
        </Dropdown>
        <div style={{position:'absolute',left:'1rem',top:'1rem'}} >
          <Button onClick={showModal} ghost type="dashed" style={{position:'absolute',left:'1rem',top:'1rem'}}>排名情况</Button>

        </div>
        <div style={{position:'absolute',right:'0.8rem',top:'1rem'}} >

          <Button onClick={LoginOut} ghost type="dashed" style={{position:'absolute',right:'0.8rem',top:'1rem'}}>退出登录</Button>
        </div>
        <Row style={{marginTop:"-3%"}}>
          {/*地图*/}
          <Col span={10}>
            <Col offset={1} span={23}>
              <ReactEcharts
                option={mp}
                notMerge={true}
                lazyUpdate={true}
                theme={themee}
                style={{height:"880",width:"100%"}}
                className={styles.ali_border}
                onEvents = {handlemap}
              />
            </Col>
          </Col>
          {/*组合图表*/}
          <Col span={14}>
            {/*row 1*/}
            <Row>
              {/*1,1*/}
              <Col span={12}>
                <Col offset={1} span={23}>
                  <ReactEcharts
                    ref={(e) => {
                      function animate () {
                        var series1 = opp.series[opp.series.length - 2];
                        series1.startAngle += 1;
                        series1.endAngle = series1.startAngle + 15;
                        opp.series[opp.series.length - 2] = series1

                        var series2 = opp.series[opp.series.length - 1];
                        series2.startAngle += 1;
                        series2.endAngle = series2.startAngle + 15;
                        opp.series[opp.series.length - 1] = series2
                        let echarts_instance = e.getEchartsInstance();
                        echarts_instance.setOption(opp);
                        animotionID = requestAnimationFrame(animate)
                      }
                      setTimeout(animate,2000)
                    }}
                    option={opp}
                    theme={themee}
                    opts={{renderer: 'svg'}}
                    style={{height:"430",width:"100%"}}
                    className={styles.ali_border}
                  />
                </Col>
              </Col>
              {/*1,2*/}
              <Col span={12}>
                <Col offset={1} span={22}>
                  <ReactEcharts
                    option={jz}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={themee}
                    style={{height:"430",width:"100%"}}
                    className={styles.ali_border}
                  />
                </Col>
              </Col>
            </Row>
            {/*row 2 */}
            <Row style={{marginTop:20}}>
              {/*2,1*/}
              <Col span={12}>
                <Col offset={1} span={23}>
                  <ReactEcharts
                    option={by}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={themee}
                    style={{height:"430",width:"100%"}}
                    className={styles.ali_border}
                  />
                </Col>
              </Col>
              {/*2,2*/}
              <Col span={12}>
                <Col offset={1} span={22}>
                  <ReactEcharts
                    // ref={(e) => {
                    //   setInterval(function() {
                    //     var r = count % 11;
                    //     stl.series[0].data[r].selected = false;
                    //
                    //     count++;
                    //     var s = count % 11;
                    //     stl.series[0].data[s].selected = true;
                    //
                    //     let eac = e.getEchartsInstance();
                    //     eac.setOption(stl)
                    //   }, 2000);
                    // }}
                    option={stl}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={themee}
                    style={{height:"430",width:"100%"}}
                    className={styles.ali_border}
                  />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
        <Modal
          bodyStyle={{backgroundColor:'#1A1D40'}}
          style={{opacity:0.9,backgroundColor:'rgba(0,0,0,0)'}}
          width="70%"
          title="排名情况"
          visible={this.state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Row style={{height:750}} gutter={40}>
            <Col offset={1} span={10} style={{height:'100%'}}>
              <PmCard
                data={data['客户经理排名']}
                title="客户经理排名"
                rightTitle='Top.10'
                colWidth={[2,5,6,6,5]}
              />
            </Col>
            {/*<Col span={8} style={{height:'100%'}}>*/}
              {/*<Row style={{height:'49%'}}>*/}
                {/*<PmCard*/}
                  {/*data={testCountyData}*/}
                  {/*title="区县排名"*/}
                  {/*rightTitle='Top.3'*/}
                {/*/>*/}
              {/*</Row>*/}
              {/*<Row style={{marginTop:'3%',height:'49%'}}>*/}
                {/*<PmCard*/}
                  {/*data={testCountyData}*/}
                  {/*title="区县排名"*/}
                  {/*rightTitle='After.3'*/}
                {/*/>*/}
              {/*</Row>*/}
            {/*</Col>*/}
            <Col offset={2} span={10} style={{height:'100%'}}>
              <PmCard
                data={data['集团排名']}
                title="集团客户价值排名"
                rightTitle='Top.10'
                colWidth={[2,10,6,6]}
              />

            </Col>


          </Row>


        </Modal>



      </div>
    )

  }

}


IndexPage.propTypes = {


};

export default connect(({ dvaState }) => ({
  dvaState
}))(IndexPage);
