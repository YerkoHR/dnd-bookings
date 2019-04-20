import React from "react";
import { Body, Row, Cell } from "@zendeskgarden/react-tables";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Rows = ({ title, data, deleteBooking, getBookings }) => (
  <Droppable droppableId={title}>
    {provided => {
      return (
        <div
          style={{ padding: "1rem" }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Body>
            {data.map((booking, index) => (
              <Draggable
                isDragDisabled={new Date().toISOString() > booking.end}
                draggableId={booking.id}
                index={index}
                key={booking.id}
              >
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps.style}
                    {...provided.draggableProps}
                    key={booking.id}
                  >
                    <Row>
                      <Cell minimum>
                        <div {...provided.dragHandleProps}>&#187;</div>
                      </Cell>
                      <Cell width="10%">
                        {booking.client.first_name}
                        {booking.client.last_name}
                      </Cell>

                      <Cell width="20%">{booking.client.email}</Cell>
                      <Cell width="20%">
                        {new Date(booking.start).toString().slice(0, 24)}
                      </Cell>
                      <Cell width="20%">
                        {new Date(booking.end).toString().slice(0, 24)}
                      </Cell>
                      <Cell width="10%">{booking.price}</Cell>
                      <Cell minimum>
                        <button
                          onClick={async () => {
                            await deleteBooking(booking.id);
                            getBookings();
                          }}
                          style={{
                            border: ".5px solid grey",
                            background: "transparent",
                            outline: "0",
                            cursor: "pointer"
                          }}
                        >
                          X
                        </button>
                      </Cell>
                    </Row>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Body>
        </div>
      );
    }}
  </Droppable>
);

export default Rows;
