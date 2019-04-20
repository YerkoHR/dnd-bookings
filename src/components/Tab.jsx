import React from "react";
import Heads from "./Heads";
import Rows from "./Rows";

import { Table } from "@zendeskgarden/react-tables";
import "./table.css";

const Tab = ({
  data,
  title,
  deleteBooking,
  getBookings,
  orderAsc,
  orderDes
}) => {
  return (
    <Table style={{ margin: "1.5rem 0" }}>
      <Heads
        data={data}
        title={title}
        orderAsc={orderAsc}
        orderDes={orderDes}
      />
      <Rows
        data={data}
        title={title}
        deleteBooking={deleteBooking}
        getBookings={getBookings}
      />
    </Table>
  );
};

export default Tab;
