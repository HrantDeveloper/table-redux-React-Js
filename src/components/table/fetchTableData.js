export const getData = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      return response.json();
    }
  );
};
