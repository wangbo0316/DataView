import React from 'react'
import styles from './PmCard.css'
import {Row,Col} from 'antd'

class PmCard extends React.Component{


  render(){
    const {title,data,rightTitle,colWidth} = this.props


    return(
      <Row className={styles.container} gutter={20}>
        <Row className={styles.titleRow}>
          <Col
            span={12}
            className={styles.titleLeft}
          >
            {title}
          </Col>
          <Col
            span={12}
            className={styles.titleRight}
          >
            {rightTitle}
          </Col>
        </Row>
        {data.map((item,index)=>{
          return(
            <Row className={styles.content}>
              {item.map((value,key)=>{
                  return(

                    <Col span={colWidth[key]}>
                      {value}
                    </Col>
                  )
                })
              }
            </Row>
          )
        })}
      </Row>

    )
  }

}

export default PmCard
