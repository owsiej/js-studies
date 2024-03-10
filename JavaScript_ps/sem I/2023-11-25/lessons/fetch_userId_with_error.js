function getUser(url, id) {
  return fetch(`${url}/${id}`)
    .then((resp) => {
      if (resp.ok === true) {
        return resp.json();
      }
      throw new Error(`Sth went wrong. Status: ${resp.status}`);
    })
    .then((txt) => console.log(txt))
    .catch((error) => console.error(error.message));
}

getUser("https://jsonplaceholder.typicode.com/users", 5);
