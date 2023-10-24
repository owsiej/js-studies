function daysTillFriday() {
  const today = new Date();
  
  return today.getDay() > 5 ? today.getDay() : 5 - today.getDay();
}

console.log(daysTillFriday());
