const financialData = require("./financial.json");

const targetYear = 2014;

const obj = getFinancialObject();

for (const item in obj) {
  console.log(item);
  console.table(obj[item]);
}

function getFinancialObject() {
  const financialObject = {};
  // TODO (create functions for calculations below)
  Object.assign(
    financialObject,
    getSpendingByYear(targetYear),
    spendingPerCompany(),
    spendingByTransactionType(),
    spendingByMonth(),
    spendingPerDayOfWeek()
  );
  return financialObject;
}

// TODO (util functions)

// i.	How much money was spent in 2014
function getSpendingByYear(year) {
  return financialData
    .filter(
      (transaction) =>
        new Date(transaction.detailsOfPayent.date).getFullYear() == year
    )
    .reduce((acc, transaction) => {
      const cost = Number(transaction.cost);
      const accKey = `spendingIn${year}`;
      return {
        ...acc,
        [accKey]: acc[accKey] ? (acc[accKey] += cost) : cost,
      };
    }, {});
}
// ii.	Spending per company
function spendingPerCompany() {
  const companiesSpending = financialData.reduce((acc, transaction) => {
    const companyName = transaction.detailsOfPayent.company;
    const cost = Number(transaction.cost);
    return {
      ...acc,
      [companyName]: acc[companyName] ? (acc[companyName] += cost) : cost,
    };
  }, {});
  return {
    spendingsPerCompany: companiesSpending,
  };
}

// iii.	Spending per transaction type
function spendingByTransactionType() {
  const transactionSpending = financialData.reduce((acc, transaction) => {
    const transactionType = transaction.detailsOfPayent.Type;
    const cost = Number(transaction.cost);

    return {
      ...acc,
      [transactionType]: acc[transactionType]
        ? (acc[transactionType] += cost)
        : cost,
    };
  }, {});
  return {
    spendingsByTransactionType: transactionSpending,
  };
}

// iv.	Spending by month
function spendingByMonth() {
  const monthSpending = financialData.reduce((acc, transaction) => {
    const [day, month, year] = transaction.detailsOfPayent.date.split("-");
    const monthName = new Date(year, month - 1, day).toLocaleString("en-En", {
      month: "long",
    });
    const cost = Number(transaction.cost);

    return {
      ...acc,
      [monthName]: acc[monthName] ? (acc[monthName] += cost) : cost,
    };
  }, {});

  const sortedMonthSpending = Object.fromEntries(
    Object.entries(monthSpending).sort(
      (a, b) => Date.parse(a[0] + "1, 2012") - Date.parse(b[0] + "1, 2012")
    )
  );
  return {
    spendingsByMonth: sortedMonthSpending,
  };
}

// v.	Spending per day of the week
function spendingPerDayOfWeek() {
  const daySpending = financialData.reduce((acc, transaction) => {
    const [day, month, year] = transaction.detailsOfPayent.date.split("-");
    const dayName = new Date(year, month - 1, day).toLocaleString("en-En", {
      weekday: "long",
    });
    const cost = Number(transaction.cost);

    return {
      ...acc,
      [dayName]: acc[dayName] ? (acc[dayName] += cost) : cost,
    };
  }, {});

  return {
    spendingsByDayOfWeek: daySpending,
  };
}
