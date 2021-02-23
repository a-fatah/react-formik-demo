import React from "react";

import { useField } from "formik";
import { Form } from "react-bootstrap-v5";

const TextInput = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control {...props} {...field} />
    </Form.Group>
  );
};

export default TextInput;
