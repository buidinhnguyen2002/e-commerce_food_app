
export function setOrderDetails({ data }) {
  console.log('Data action:', data);

  return {
    type: 'SET_ADDRES_DETAILS', 
    payload: data,
  };
}