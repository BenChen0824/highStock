import React, { useEffect,useState } from 'react'
import {  Container , Row , Col} from 'react-bootstrap'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import dummyData from './dummyData.json'
import styles from "./Charts.module.css";
import observations from '../../data/observations.json';
import Card from './Card'



function Chart(props) {
  
  const {chartCollections} = props

  let chartData=chartCollections.map(chart => {
    return({
      id: chart.id,
      document: chart.document,
      source: chart.source,
      updated: chart.latest_released_date,
      series_id: chart.series_id,
      source_id: chart.source_id,
      options: {
        title: {
          text: chart.title
        },
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
        {chartData.map((chart) => (
            <Col sm={12} md={6} lg={4} key={chart.id}>
              <Card item={chart} />
            </Col>
        ))}
        </Row>
      </Container>
      
    </>
  )
}

export default Chart