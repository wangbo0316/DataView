import React from 'react'
import {Carousel,Col,Row } from 'antd'
import styles from './TableList.css'




function TableList(data2,couty_name) {



  const a = data2
  let list = []
  for (let i in a) {
    if (i === couty_name){
      a[i].map((value,index)=>{list.push(value)})

    }
  }





  const row_size = list.length
  const col_size = list[0].length
  const col_width = 24/col_size
  const ror = 8

  const formatList = (data) =>{
    const dataSplice = data.splice(1, row_size)
    let ab = []
    let ba = []
    dataSplice.map((k,i)=>{
      ab.push(k)
      if ( i%ror == ror-1){
        ba.push(ab)
        ab = []
      }
    })
    if (dataSplice.length%ror != 0){
      ba.push(ab)
    }

    return ba
  }
  const fristRow = list[0].map((k,i)=>{
    return(
      <Col span={col_width} className={styles.p_font}>{k}</Col>
    )
    })
  const colList = (col) => col.map((k,i)=>{
    return(
      <Col span={col_width} className={styles.p_font}>{k}</Col>
    )})
  const rowList = (row,inde) => row.map((k,i)=>{
    return(<Row key={i+inde*ror}>
      {colList(k)}
    </Row>)
    })
  const lunboList = formatList(list).map((k1,i1)=>{
    console.log(k1)

    return(
      <div>
        {rowList(k1,i1)}
      </div>
    )
  })
  console.log(lunboList)
  return(
    <Row className={styles.contain}>
      <Row style={{marginTop:"4%"}}>
        {fristRow}
       </Row>
      <Carousel
            autoplay
            vertical={true}
            dots={false}
      >
        {lunboList}

      </Carousel>

    </Row>
  )
}
export default TableList
