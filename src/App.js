import React, { useEffect } from "react";
import axios from "axios";

const username = "4fjf146";
const password = "6hcah19dgu9vu48m7nxqgrmb4wt9twl7xjhinhdm216l0";
const clientId = "69198";

const App = () => {
  useEffect(() => {
    axios
      .get(
        ` https://bambucalendar.cl/api/public/v1/clients/${clientId}/bookings`,

        {
          auth: {
            username,
            password
          }
        }
      )
      .then(response => console.log(response.data));
  }, []);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default App;
