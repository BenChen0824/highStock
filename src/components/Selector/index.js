import React from 'react'
import styles from "./Selector.module.css";
import { Form , Row , Col, Container } from 'react-bootstrap'

function Selector(props) {
  const { releases, sources, releaseFilter, sourcesFilter,onChange } = props
  return (
    <Container>
      <Row className={styles.selector}>
        <Col sm={12} md={6} lg={4} className={styles.selectorItem}>
          <Form.Select aria-label="Default select example"  data-key='releases'  defaultValue={releaseFilter} onChange={e=>{
            onChange(e)
          }}>
            <option  value={0}>All Releases</option>
            {releases.map((release, index) => {return<option value={release.id} key={release.id}>{release.name}</option>})}
            

          </Form.Select>
        </Col>
        <Col sm={12} md={6} lg={4} >
          <Form.Select data-key='sources' aria-label="Default select example" defaultValue={sourcesFilter} onChange={e=>{
            onChange(e)
          }}>
            <option   value={0}>All Sources</option>
            {sources.map((source, index) => {return<option value={source.id} key={source.id}>{source.name}</option>})}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}

export default Selector