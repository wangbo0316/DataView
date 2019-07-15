import React from 'react';
import styles from './DetailPage.css';
import {Row,Col,Icon,Button } from 'antd'
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import data from '../options/data/data'
import Srjg from '../options/detail/Srjg'
import Thb from '../options/detail/Thb'
import Lwxz from '../options/detail/Lwxz'
import Stl from '../options/detail/Stl'
import Khjl from '../options/detail/Khjl'
import Five from '../options/detail/Five'
import Cookies from 'js-cookie';

class DetailPage extends React.Component  {

  componentWillMount(){
    const {history,dispatch,dvaState} = this.props
    const {themee,a} = dvaState
    const cookie = Cookies.get('isLogin')
    if(!cookie){
      history.push('/login')
    }
  }

  render(){
    const {history,dispatch,dvaState,params} = this.props

  const srjg = Srjg(data['收入结构'][params.name])
  const thb = Thb(data['收入走势'][params.name])
  const lwxz = Lwxz(data['离网新增'][params.name])
  const stl = Stl(data['区县渗透'][params.name])
  const five = Five(data['五大指标'][params.name])
//客户经理指标
  const {themee} = dvaState
  const HandleGoBack = () => {
    history.push('/')
  }
    return(
      <Row className={styles.contain}>
        <Col offset={3} span={18} className={styles.title}>KPI详情——{params.name}</Col>
        <Col offset={1} span={2} className={styles.go_back}>
          <Button  type="dashed" ghost onClick={HandleGoBack}>
            <Icon type="double-left" />返回首页
          </Button >
        </Col>

        <Row  className={styles.full}>
          {/*第一行*/}
          <Row style={{marginTop:"3%",height:'47%',borderBottom:'dashed 2px #4AC2CA'}}>
            <Col style={{height:'100%',
              borderRight:'dashed 2px #4AC2CA'}}
                  span={7}>
              <ReactEcharts
                option={five}
                notMerge={true}
                lazyUpdate={true}
                theme={themee}
                style={{height:"100%",width:"100%"}}
              />

            </Col>

            <Col style={{height:'100%',borderRight:'dashed 2px #4AC2CA'
            }}  span={9}
            >
              <ReactEcharts
                option={thb}
                notMerge={true}
                lazyUpdate={true}
                theme={themee}
                style={{height:"100%",width:"100%"}}
              />
            </Col>

            <Col style={{height:'100%'}}  span={8}>
              <ReactEcharts
                option={lwxz}
                notMerge={true}
                lazyUpdate={true}
                theme={themee}
                style={{height:"100%",width:"100%"}}
              />
            </Col>
          </Row>
          {/*第二行*/}
          <Row style={{height:'47%'}}>



            <Col style={{marginLeft:'0.5%',height:'100%',borderRight:'dashed 2px #4AC2CA'}}   span={11}>
              <Khjl style={{marginLeft:'100px'}} data={data['客户经理指标'][params.name]}/>


            </Col>

            <Col style={{height:'100%',borderRight:'dashed 2px #4AC2CA'}}  span={6}>
              <ReactEcharts
                option={stl}
                notMerge={true}
                lazyUpdate={true}
                theme={themee}
                style={{height:"100%",width:"100%"}}
              />
            </Col>


            <Col style={{height:'100%'}}  span={6}>

              <ReactEcharts
                option={srjg}
                notMerge={true}
                lazyUpdate={true}
                theme={themee}
                style={{height:"100%",width:"100%"}}
              />

            </Col>





          </Row>
        </Row>

      </Row>
    )
  }
}

export default connect(({ dvaState }) => ({
  dvaState
}))(DetailPage);
