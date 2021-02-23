import React from "react";

import { useField } from "formik";
import { Form } from "react-bootstrap-v5";

const TextInput = ({ name, label, ...props }) => {
  const [field, { touched, error }] = useField(name);
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        {...props}
        {...field}
        className={touched && error && "is-invalid"}
      />
      <Form.Control.Feedback type="invalid" className="field-error">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default TextInput;
