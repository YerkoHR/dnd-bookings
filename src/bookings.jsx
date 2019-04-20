import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Bookings = ({ data, head }) => {
  return (
    <table className="box">
      <thead>
        <tr>
          <th colSpan="5">
            <h4>{head}</h4>
          </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Start</th>
          <th>End</th>
          <th>Price</th>
        </tr>
      </thead>
      <Droppable droppableId={head}>
        {provided => (
          <tbody ref={provided.innerRef} {...provided.droppableProps}>
            {data.map((booking, index) => (
              <Draggable
                draggableId={booking.id}
                index={index}
                key={booking.id}
              >
                {provided => (
                  <tr
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    key={booking.id}
                  >
                    <td>
                      {booking.client.first_name} {booking.client.last_name}
                    </td>

                    <td>{booking.client.email}</td>
                    <td>{booking.start}</td>
                    <td>{booking.end}</td>
                    <td>{booking.price}</td>
                  </tr>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </tbody>
        )}
      </Droppable>
    </table>
  );
};

export default Bookings;
