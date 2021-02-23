import React from "react";
import { Form } from "react-bootstrap-v5";
import InputMask from "react-input-mask";

const PhoneInput = ({ name, label, ...props }) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <InputMask mask="9999-9999999" name={name} {...props}>
        {(props) => <Form.Control {...props} type="tel" />}
      </InputMask>
    </Form.Group>
  );
};

export default PhoneInput;
