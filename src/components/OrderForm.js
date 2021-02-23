import React, { useState } from "react";
import { Row, Col, Form, Button, Table } from "react-bootstrap-v5";
import { Formik, useField, useFormikContext } from "formik";
import InputMask from "react-input-mask";
import * as Yup from "yup";

export const OrderForm = () => {
  return (
    <div className="shadow shadow-md rounded p-3">
      <Formik
        initialValues={{
          items: [
            { name: "Pant", qty: 0, rate: 0, amount: 0 },
            { name: "Shirt" },
            { name: "Coat" },
            { name: "Kurta" },
            { name: "Shalwar Kameez" },
            { name: "Sherwani" },
          ],
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          phone: Yup.string().required("Required"),
          deliveryDate: Yup.string().required("Required"),
        })}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <h3 className="text-center">New Order</h3>
              <Row className="my-3 g-2">
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className={
                        touched.firstName && errors.firstName && "is-invalid"
                      }
                    />
                    <Form.Control.Feedback
                      className="field-error"
                      type="invalid"
                    >
                      {touched.firstName && errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label htmlFor="firstName">Last Name</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className={
                      touched.lastName && errors.lastName && "is-invalid"
                    }
                  />
                  <Form.Control.Feedback type="invalid" className="field-error">
                    {touched.lastName && errors.lastName}
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Row className="mb-3 row-cols-md-2 g-2">
                <Col>
                  <Form.Label htmlFor="phone">Phone</Form.Label>
                  <InputMask
                    mask="9999-9999999"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    className={touched.phone && errors.phone && "is-invalid"}
                    alwaysShowMask={false}
                  >
                    {(props) => <Form.Control {...props} type="tel" />}
                  </InputMask>
                  <Form.Control.Feedback type="invalid" className="field-error">
                    {touched.phone && errors.phone}
                  </Form.Control.Feedback>
                </Col>
                <Col>
                  <Form.Label>Delivery Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="deliveryDate"
                    onChange={handleChange}
                    className={
                      touched.deliveryDate &&
                      errors.deliveryDate &&
                      "is-invalid"
                    }
                  />
                  <Form.Control.Feedback type="invalid" className="field-error">
                    {touched.deliveryDate && errors.deliveryDate}
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <h4 className="text-center">Particulars</h4>
              <Table hover striped>
                <thead className="fw-bolder">
                  <tr>
                    {Object.keys(values.items[0]).map((key, i) => (
                      <td key={i}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {values.items.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>
                        <Form.Control
                          name={`items[${i}].qty`}
                          onChange={handleChange}
                        ></Form.Control>
                      </td>
                      <td>
                        <Form.Control
                          name={`items[${i}].rate`}
                          onChange={handleChange}
                        ></Form.Control>
                      </td>
                      <td>
                        <Form.Control
                          name={`items[${i}].amount`}
                          onChange={handleChange}
                        ></Form.Control>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="mb-3 d-flex flex-column">
                <Button variant="primary" type="submit">
                  Create Order
                </Button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
