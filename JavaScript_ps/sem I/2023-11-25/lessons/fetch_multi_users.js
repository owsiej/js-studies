function getUsers(url, ids) {
  const usersData = ids.map((id) => {
    const userUrl = `${url}/${id}`;
    return fetch(userUrl).then((user) => user.json());
  });
  return Promise.all(usersData);
}

getUsers("https://jsonplaceholder.typicode.com/users", [2, 5, 6, 8]).then(
  (users) => users.forEach((user) => console.log(user.name))
);
