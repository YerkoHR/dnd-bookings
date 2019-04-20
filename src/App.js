import React, { useEffect, useState } from "react";
import { getBookings } from "./redux/actions";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import Bookings from "./bookings";
import { localData, states } from "./localData";

// SOLUCIONAR INHABILIDAD PARA DROP EN TABLA VACIA.

//const App = ({ bookings, getBookings }) => {
const App = () => {
  const [bookings, onBookings] = useState([]);

  // Tranformación de data desde array a object con la forma:
  // { [statusName1]: [arrayOfbookings1], [statusNameN]: [arrayOfBookingsN] }

  const filterData = data => {
    const filtered = states.map(state => ({
      [state.status]: data.filter(booking => booking.status_id === state.id)
    }));
    let obj = {};
    states.forEach((item, index) => {
      obj[item.status] = filtered[index][item.status];
    });
    return obj;
  };

  // Equivalente a componentDidMount.
  useEffect(() => {
    //getBookings();
    onBookings(filterData(localData));
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

      // MAYBE HERE WE CAN CALL THE PATCH ACTION
      onBookings(newState);
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
    onBookings(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="box-container">
        {Object.keys(bookings).map(key => (
          <Bookings data={bookings[key]} head={key} key={key} />
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
  { getBookings }
)(App);
