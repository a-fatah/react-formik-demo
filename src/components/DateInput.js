import React from "react";
import { Form } from "react-bootstrap-v5";

const DateInput = ({ name, label, ...props }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="date" name={name} {...props} />
    </Form.Group>
  );
};

export default DateInput;
