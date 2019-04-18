import React, { useEffect, useState } from "react";
import { getBookings } from "./redux/actions";
import { connect } from "react-redux";

const localData = [
  {
    id: 9515,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 1,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Reservado",
    location: "Prueba React",
    start: "2019-04-04T13:24:00.000Z",
    end: "2019-04-04T14:24:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9514,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 5,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Cancelado",
    location: "Prueba React",
    start: "2019-04-15T16:56:00.000Z",
    end: "2019-04-15T17:56:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9508,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 5,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Cancelado",
    location: "Prueba React",
    start: "2019-04-03T16:02:00.000Z",
    end: "2019-04-03T17:02:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9506,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 3,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Asiste",
    location: "Prueba React",
    start: "2019-04-28T14:50:00.000Z",
    end: "2019-04-28T15:50:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9500,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 1,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Reservado",
    location: "Prueba React",
    start: "2019-04-12T14:28:00.000Z",
    end: "2019-04-12T15:28:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9486,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 6,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "No Asiste",
    location: "Prueba React",
    start: "2019-04-01T15:44:00.000Z",
    end: "2019-04-01T16:44:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9485,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 1,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Reservado",
    location: "Prueba React",
    start: "2019-04-23T10:19:00.000Z",
    end: "2019-04-23T11:19:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9484,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 3,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Asiste",
    location: "Prueba React",
    start: "2019-04-07T14:32:00.000Z",
    end: "2019-04-07T15:32:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9476,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 5,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Cancelado",
    location: "Prueba React",
    start: "2019-04-19T17:41:00.000Z",
    end: "2019-04-19T18:41:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9475,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 2,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Confirmado",
    location: "Prueba React",
    start: "2019-04-01T11:07:00.000Z",
    end: "2019-04-01T12:07:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9474,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 5,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Cancelado",
    location: "Prueba React",
    start: "2019-04-04T09:51:00.000Z",
    end: "2019-04-04T10:51:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9472,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 1,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Reservado",
    location: "Prueba React",
    start: "2019-04-04T10:04:00.000Z",
    end: "2019-04-04T11:04:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9468,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 6,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "No Asiste",
    location: "Prueba React",
    start: "2019-04-18T14:41:00.000Z",
    end: "2019-04-18T15:41:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9464,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 5,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Cancelado",
    location: "Prueba React",
    start: "2019-04-02T18:01:00.000Z",
    end: "2019-04-02T19:01:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9463,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 5,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Cancelado",
    location: "Prueba React",
    start: "2019-04-01T13:19:00.000Z",
    end: "2019-04-01T14:19:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9462,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 5,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Cancelado",
    location: "Prueba React",
    start: "2019-04-19T14:57:00.000Z",
    end: "2019-04-19T15:57:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9461,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 3,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Asiste",
    location: "Prueba React",
    start: "2019-04-14T10:15:00.000Z",
    end: "2019-04-14T11:15:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9458,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 3,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Asiste",
    location: "Prueba React",
    start: "2019-04-21T13:22:00.000Z",
    end: "2019-04-21T14:22:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9456,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 3,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Asiste",
    location: "Prueba React",
    start: "2019-04-01T11:46:00.000Z",
    end: "2019-04-01T12:46:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9453,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 2,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Confirmado",
    location: "Prueba React",
    start: "2019-04-10T10:50:00.000Z",
    end: "2019-04-10T11:50:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9450,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 6,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "No Asiste",
    location: "Prueba React",
    start: "2019-04-27T12:58:00.000Z",
    end: "2019-04-27T13:58:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9439,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 5,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Cancelado",
    location: "Prueba React",
    start: "2019-04-17T17:24:00.000Z",
    end: "2019-04-17T18:24:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9437,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 1,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Reservado",
    location: "Prueba React",
    start: "2019-04-03T11:52:00.000Z",
    end: "2019-04-03T12:52:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9436,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 2,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Confirmado",
    location: "Prueba React",
    start: "2019-04-22T15:12:00.000Z",
    end: "2019-04-22T16:12:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  },
  {
    id: 9435,
    service_provider_id: 690,
    service_id: 1255,
    location_id: 330,
    price: 20000,
    status_id: 3,
    service: "Servicio de prueba",
    service_provider: "Prueba React",
    status: "Asiste",
    location: "Prueba React",
    start: "2019-04-12T12:26:00.000Z",
    end: "2019-04-12T13:26:00.000Z",
    client: {
      id: 69198,
      first_name: "Cliente",
      last_name: "React3",
      email: "clientereact3@agendapro.com",
      identification: "33.333.333-3"
    }
  }
];

// 1:"Reservado, 2: Confirmado, 3: Asiste, 6: No asiste, 7: En espera, 8: Pendiente

const states = [];

//const App = ({ bookings, getBookings }) => {
const App = () => {
  const [bookings, onBookings] = useState([]);

  useEffect(() => {
    //getBookings();
    onBookings(localData);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Start</th>
            <th>End</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>
                {booking.client.first_name} {booking.client.last_name}
              </td>
              <td>{booking.client.email}</td>
              <td>{booking.start}</td>
              <td>{booking.end}</td>
              <td>{booking.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  bookings: state.bookings.data
});

export default connect(
  mapStateToProps,
  { getBookings }
)(App);
