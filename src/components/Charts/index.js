import React from 'react'
import { Card , Container , Row , Col} from 'react-bootstrap'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import dummyData from './dummyData.json'
import styles from "./Charts.module.css";
import observations from '../../data/observations.json';


const getData = (series_id) => {
  let data = [];
  observations[series_id].forEach(ob => {
    data.push([new Date(ob.date).getTime(), Number(ob.value)]);
  });
  return data
}

function Chart(props) {
  
  const {chartCollections} = props
  
  


  let chartData = [];
  chartCollections.forEach(chart => {
    chartData.push({
      id: chart.id,
      document: chart.document,
      source: chart.source,
      updated: chart.latest_released_date,
      options: {
        title: {
          text: chart.title
        },
        series: [
          {
            name: chart.title,
            // 抓取數據
            data: getData(chart.series_id)
          }
        ],
        xAxis: {
          type: "datetime",
          title: {
            text: 'Date'
          }
        }
      }
    })
  });


  return (
    <>
      <Container>
        <Row>
        {chartData.map((e) => (
            <Col sm={12} md={6} lg={4} key={e.id}>

              <div>
                <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={e.options}
                          />
                          <div className='d-flex justify-content-between'>
                <small className={styles.source}>source: {e.source}</small>
                <small className={styles.date}>updated: {e.updated}</small>
                          </div>
                          <div>
                <p className={styles.document}>{e.document}</p>
                </div>
              </div>
            </Col>
        ))}
        </Row>
      </Container>
      
    </>
  )
}

export default Chart