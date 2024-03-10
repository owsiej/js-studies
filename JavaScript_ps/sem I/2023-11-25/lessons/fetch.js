function displayDocument(url) {
  return fetch(url)
    .then((res) => res.text())
    .then((txt) => console.log(txt));
}

displayDocument("https://example.com");
