async function getUser(url, id) {
  const response = await fetch(`${url}/${id}`);
  if (!response.ok) {
    throw new Error(`Sth went wrong. Status: ${response.status}`);
  }

  return response.json();
}

function getUsers(ids) {
  const usersData = ids.map((id) =>
    getUser("https://jsonplaceholder.typicode.com/users", id)
  );
  return Promise.all(usersData);
}

(async function () {
  try {
    const users = await getUsers([2, 5, 6, 8]);
    users.forEach((us) => console.log(us));
  } catch {}
})();
