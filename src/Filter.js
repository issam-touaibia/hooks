import React from 'react'
import { Form,Button } from 'react-bootstrap'
const Filter = (props) => {
  return (
    <div>
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            onChange={(e)=> props.handelFilter(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </div>
  )
}

export default Filter