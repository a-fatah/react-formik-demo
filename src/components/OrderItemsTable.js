import { useField } from "formik";
import React from "react";
import { Table } from "react-bootstrap-v5";
import OrderItemRow from "./OrderItemRow";

const OrderItemsTable = () => {
  const [items] = useField("items");

  return (
    <Table>
      <thead className="text-center fw-bolder">
        <tr>
          <td>Item</td>
          <td>Qty</td>
          <td>Rate</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        {items.value.map((item, i) => (
          <OrderItemRow item={item} i={i} />
        ))}
      </tbody>
    </Table>
  );
};

export default OrderItemsTable;
