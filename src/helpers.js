export const states = [
  { id: 1, status: "Reservado" },
  { id: 2, status: "Confirmado" },
  { id: 3, status: "Asiste" },
  { id: 6, status: "No asiste" },
  { id: 7, status: "En espera" },
  { id: 8, status: "Pendiente" }
];

// Tranformación de data desde array a object con la forma:
// { [statusName1]: [arrayOfbookings1], [statusNameN]: [arrayOfBookingsN] }

export const filterData = data => {
  const filtered = states.map(state => ({
    [state.status]: data.filter(booking => booking.status_id === state.id)
  }));
  let obj = {};
  states.forEach((item, index) => {
    obj[item.status] = filtered[index][item.status];
  });
  return obj;
};
