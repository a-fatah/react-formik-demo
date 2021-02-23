import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form, InputGroup, Row, Col, Button } from "react-bootstrap-v5";
import InputMask from "react-input-mask";

export default () => {
  const [param, setParam] = useState("order");

  return (
    <div className="border">
      <Form>
        <Row className="mx-1 my-2">
          <Col sm={2}>
            <Form.Label className="col-form-label" htmlFor="searchStr">
              Search by
            </Form.Label>
          </Col>
          <Col sm={10} className="d-flex align-items-center">
            <div className="w-100 d-flex">
              <Form.Check
                type="radio"
                name="searchBy"
                id="order"
                label="Order No."
                value="order"
                className="mx-2"
                onChange={() => setParam("order")}
                checked={param === "order"}
              />
              <Form.Check
                type="radio"
                name="searchBy"
                id="phone"
                onChange={() => setParam("phone")}
                checked={param === "phone"}
                label="Phone"
              />
            </div>
          </Col>
        </Row>
        <Row className="mx-1 my-3">
          <Col sm={2}>
            <Form.Label className="col-form-label">
              {param === "order" ? "Order No." : "Phone"}
            </Form.Label>
          </Col>
          <Col sm={5} className="ms-2">
            {param === "phone" ? (
              <>
                <InputMask
                  mask="9999-9999999"
                  name="phone"
                  alwaysShowMask={false}
                  placeholder="Phone number"
                >
                  {(props) => <Form.Control {...props} type="tel" />}
                </InputMask>
                <Form.Control.Feedback
                  type="invalid"
                  className="field-error"
                ></Form.Control.Feedback>
              </>
            ) : (
              <Form.Control type="text" placeholder="Order No" />
            )}
          </Col>
          <Col sm={3} className="p-0 m-0">
            <Button type="submit">
              <FontAwesomeIcon icon={faSearch} /> Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
