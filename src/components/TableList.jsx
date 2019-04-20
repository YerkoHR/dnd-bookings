import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import Tab from "./Tab";
import {
  getBookings,
  deleteBooking,
  patchBooking,
  orderDes,
  orderAsc
} from "../redux/actions";

const TableList = ({
  bookings,
  getBookings,
  deleteBooking,
  patchBooking,
  orderAsc,
  orderDes
}) => {
  // Equivalente a componentDidMount.
  useEffect(() => {
    getBookings();
  }, []);

  const onDragEnd = ({ destination, source, draggableId }) => {
    // Validación destino valido
    if (!destination) {
      return;
    }
    // Validación si el origen no cambia.
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // Calculo de dragged booking usando su id/draggableId.
    const dragged = bookings[source.droppableId].filter(
      booking => booking.id === draggableId
    );

    const start = bookings[source.droppableId];
    const finish = bookings[destination.droppableId];

    // Lógica movimiento en la misma tabla.
    if (start === finish) {
      const newBookingList = start;
      newBookingList.splice(source.index, 1);
      newBookingList.splice(destination.index, 0, ...dragged);

      const newState = {
        ...bookings,
        [source.droppableId]: newBookingList
      };

      patchBooking(draggableId, dragged[0].status_id, newState);
      return;
    }

    // Lógica movimiento entre tablas.

    const sourceBookingList = start;
    sourceBookingList.splice(source.index, 1);
    const newSource = sourceBookingList;

    const destinationBookingList = finish;
    destinationBookingList.splice(destination.index, 0, ...dragged);
    const newDestination = destinationBookingList;

    // Basicamente se remueve el booking de source y se integra a destination.

    const newState = {
      ...bookings,
      [source.droppableId]: newSource,
      [destination.droppableId]: newDestination
    };

    patchBooking(draggableId, dragged[0].status_id, newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ width: "80%", margin: "1rem auto" }}>
        {Object.keys(bookings).map(key => (
          <Tab
            data={bookings[key]}
            title={key}
            key={key}
            deleteBooking={deleteBooking}
            getBookings={getBookings}
            orderAsc={orderAsc}
            orderDes={orderDes}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  bookings: state.bookings.data
});

export default connect(
  mapStateToProps,
  { getBookings, deleteBooking, patchBooking, orderDes, orderAsc }
)(TableList);
