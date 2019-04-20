import React from "react";

import { Head, HeaderRow, HeaderCell } from "@zendeskgarden/react-tables";

const Heads = ({ data, title, orderAsc, orderDes }) => (
  <Head>
    <h3>{`${title} ( ${data.length} ) `}</h3>
    <HeaderRow>
      <HeaderCell minimum />
      <HeaderCell width="10%">Name</HeaderCell>
      <HeaderCell width="20%">Email</HeaderCell>
      <HeaderCell width="20%">
        Start
        <div>
          <span onClick={() => orderAsc(title, "start")}>&#30;</span>
          <span onClick={() => orderDes(title, "start")}>&#31;</span>
        </div>
      </HeaderCell>
      <HeaderCell width="20%">
        End
        <div>
          <span onClick={() => orderAsc(title, "end")}>&#30;</span>
          <span onClick={() => orderDes(title, "end")}>&#31;</span>
        </div>
      </HeaderCell>
      <HeaderCell width="10%">Price</HeaderCell>
    </HeaderRow>
  </Head>
);

export default Heads;
