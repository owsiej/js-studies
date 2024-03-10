const sub = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a - b;
    if (result < 0) {
      reject("result lower then 0");
    }
    resolve(result);
  });
};

sub(5, 4)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });