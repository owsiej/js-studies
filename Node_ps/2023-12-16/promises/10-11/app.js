const axios = require("axios");
const fs = require("fs");

const userId = 1;

const getUser = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url).then((response) => response.data);
};

const getUserAlbums = (userId) => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
  return axios.get(url).then((response) => response.data);
};

const getAlbumsPhotos = (albumId) => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
  return axios.get(url).then((response) => response.data);
};

let filename;

getUser(userId)
  .then((user) => {
    console.log(`User name: ${user.name}`);
    return getUserAlbums(user.id);
  })
  .then((albums) => {
    console.log(`Number of albums: ${albums.length}`);
    filename = `${albums[0].title.slice(0, 11)}.json`;
    console.log(`Name of first album: ${albums[0].title}`);
    return getAlbumsPhotos(albums[0].id);
  })
  .then((photos) => {
    photos.forEach((photo) => {
      console.log(photo.title);
    });
    fs.writeFile(filename, JSON.stringify(photos), (error) => {
      if (error) {
        console.log("error during saving photos data to file ", error);
      }
    });
  })

  .catch((error) => {
    console.log(error);
  });
