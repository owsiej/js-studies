const add = async (a, b) => {
  const result = a + b;
  if (result % 2 === 0) {
    throw new Error("liczba parzysta");
  }
  return result;
};

(async () => {
  try {
    const result = await add(5, 4);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
