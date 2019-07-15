import React from 'react'
import { Row,Col,Pagination  } from 'antd';
import QueueAnim from 'rc-queue-anim'
import styles from './Khjl.css'


class Khjl extends React.Component {
  state = {
    page:1,
  };
  change = (page) => {

    this.setState({
      page:page,
    })
  }


  render() {

    let pageRange = [6*this.state.page-5,6*this.state.page+1]
    const {data} = this.props
    const tableHeader = data[0]
    const tableData = data.slice(pageRange[0],pageRange[1]>(data.length)?data.length:pageRange[1])
    const row_size = data.length-1
    const col_size = tableHeader.length
    const col_width = 24/col_size


    return (
      <div className={styles.allFont}>
        {/*标题*/}
        <p className={styles.tblTitle}>客户经理指标</p>



        {/*# 表头*/}
        <Row className={styles.tblHeader}>
        {
          tableHeader.map((item,index)=>{
            return(
            <Col span={col_width}>
              {item}
            </Col>
            )
          })
        }
        </Row>
        <QueueAnim className="demo-content"
                   key='Q'
                   type={['top', 'bottom']}
                   ease={['easeOutQuart', 'easeInOutQuart']}

        >
        {
          tableData.map((item,index)=>{
            return(

                <Row key={index} className={styles.tblBody}>
                  {
                    item.map((value,key)=>{
                      return(
                        <Col key={index + '-' +key} span={col_width}>
                          {value}
                        </Col>
                      )
                    })
                  }
                </Row>

            )
          })
        }
        </QueueAnim>
        <Pagination
          onChange={this.change}
          current={this.state.page}
          total={row_size} pageSize={6}
          hideOnSinglePage={true}
          style={{color:'#ffffff',position:'absolute',bottom:'0.1rem',right:'2rem'}}
        />

      </div>
    );
  }
}
export default Khjl
