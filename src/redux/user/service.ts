export const getUsers = (pageNum: number) => {
  return fetch(`https://reqres.in/api/users?page=${pageNum}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.data;
    })
    .catch((error) => []);
};
