import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap-v5";
import InputMask from "react-input-mask";

export default () => {
  const [param, setParam] = useState("order");

  return (
    <div className="d-flex">
      <div className="border">
        <Form>
          <div className="m-2">
            <div className="d-flex align-items-center">
              <Form.Label className="col-form-label" htmlFor="searchStr">
                Search by
              </Form.Label>
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
          </div>
          <div className="m-2">
            {param === "phone" ? (
              <>
                <InputMask
                  mask="9999-9999999"
                  name="phone"
                  alwaysShowMask={false}
                  placeholder="Phone number"
                >
                  {(props) => (
                    <Form.Control className="mb-2" {...props} type="tel" />
                  )}
                </InputMask>
                <Form.Control.Feedback
                  type="invalid"
                  className="field-error"
                ></Form.Control.Feedback>
              </>
            ) : (
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Order No"
              />
            )}
            <div className="mb-2">
              <Button type="submit">
                <FontAwesomeIcon icon={faSearch} /> Search
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
