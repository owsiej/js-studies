async function getUser(url, id) {
  const response = await fetch(`${url}/${id}`);
  if (!response.ok) {
    throw new Error(`Sth went wrong. Status: ${response.status}`);
  }

  return response.json();
}

(async function () {
  const user = await getUser("https://jsonplaceholder.typicode.com/users", 5);
  console.log(user.email);
})();
