import React from 'react'
import styles from "./Selector.module.css";
import { Form , Row , Col, Container } from 'react-bootstrap'

function Selector() {
  return (
    <Container>
      <Row className={styles.selector}>
        <Col sm={12} md={6} lg={4} className={styles.selectorItem}>
          <Form.Select aria-label="Default select example" >
            <option >Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col sm={12} md={6} lg={4} >
          <Form.Select aria-label="Default select example">
            <option >Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}

export default Selector