const request = require("request");

const getUser = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject("błąd komunikacji z serwerem", error);
      } else if (response.statusCode !== 200) {
        reject("błąd pobierania użytkownika", error);
      } else {
        const user = JSON.parse(body);
        resolve(user);
      }
    });
  });
};

Promise.all([getUser(1), getUser(5), getUser(7)])
  .then((users) => {
    users.forEach((user) => {
      console.log("nazwa użytkownika: " + user.name);
    });
  })

  .catch((error) => {
    console.log(error);
  })
  .then(console.log("Promise finished"));
