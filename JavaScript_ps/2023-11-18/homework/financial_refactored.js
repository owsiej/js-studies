const financialData = require("./financial.json");

const targetYear = 2014;
const obj = getFinancialObject();

for (const item in obj) {
  console.log(item);
  console.table(obj[item]);
}

function getFinancialObject() {
  const financialObject = {
    // i.	How much money was spent in 2014
    spendingsByYear: getObjectByCost(filterByYear(targetYear), targetYear),

    // ii.	Spending per company
    spendingsPerCompany: getObjectByCost(null, "detailsOfPayent", "company"),

    // iii.	Spending per transaction type
    spendingsByTransactionType: getObjectByCost(
      null,
      "detailsOfPayent",
      "Type"
    ),

    // iv.	Spending by month
    spendingsByMonth: sortObjectByMonth(
      getObjectByCost(null, "detailsOfPayent", "date", "month")
    ),

    // v.	Spending per day of the week
    spendingsByDayOfWeek: sortObjectByDaysOfWeek(
      getObjectByCost(null, "detailsOfPayent", "date", "weekday")
    ),
  };
  // TODO (create functions for calculations below)

  return financialObject;
}

// TODO (util functions)

function filterByYear(year) {
  return financialData.filter(
    (transaction) =>
      new Date(transaction.detailsOfPayent.date).getFullYear() == year
  );
}

function getObjectByCost(staticKey, dynamicKey, nestedKey, byDate = null) {
  return roundValuesOfObject(
    financialData.reduce((acc, transaction) => {
      let accKey = staticKey ? staticKey : transaction[dynamicKey];
      if (nestedKey) {
        accKey = accKey[nestedKey];
      }
      if (byDate) {
        const [day, month, year] = accKey.split("-");
        accKey = new Date(year, month - 1, day).toLocaleString("en-En", {
          [byDate]: "long",
        });
      }
      const cost = Number(transaction.cost);
      return {
        ...acc,
        [accKey]: acc[accKey] ? (acc[accKey] += cost) : cost,
      };
    }, {})
  );
}

function roundValuesOfObject(obj) {
  Object.keys(obj).forEach((key) => (obj[key] = Number(obj[key].toFixed(2))));
  return obj;
}

function sortObjectByDaysOfWeek(obj) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const orderMap = daysOfWeek.reduce((acc, val, i) => {
    acc[val] = i;
    return acc;
  }, {});
  return Object.fromEntries(
    Object.entries(obj).sort((a, b) => orderMap[a[0]] - orderMap[b[0]])
  );
}
function sortObjectByMonth(obj) {
  return Object.fromEntries(
    Object.entries(obj).sort(
      (a, b) => Date.parse(a[0] + "1, 2012") - Date.parse(b[0] + "1, 2012")
    )
  );
}
