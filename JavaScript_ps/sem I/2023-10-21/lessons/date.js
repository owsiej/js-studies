// function getTodaysDay (){
//     const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
//     const today = new Date();
//     return days[today.getDay()];
// }

// console.log(getTodaysDay());


function getTodaysDay(locale) {
    let today = new Date();
    return today.toLocaleDateString(locale, {
      weekday: "long",
    });
  }
  
  let dayName = getTodaysDay("pl-PL");
  
  console.log(dayName);