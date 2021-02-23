import React from "react";
import { Table } from "react-bootstrap-v5";

import SearchBox from "./SearchBox";

export const CustomersTable = () => {
  return (
    <div className="shadow shadow-md rounded p-4">
      <h1 className="display-5 text-center">Customers</h1>
      <SearchBox />
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Last Order Date</th>
            <th>Pending Orders</th>
            <th>Total Orders</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Abdul Fatah</td>
            <td>0313-3491905</td>
            <td>Fri Mar 1, 2021</td>
            <td>1</td>
            <td>3</td>
            <td>Rs. 1200</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
