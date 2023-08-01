export function getMoneyRemain(record) {
  let paidSum = 0;
  let respSum = 0;
  Object.keys(record).forEach((user) => {
    if (user !== "tag") {
      paidSum += Number(record[user].paid);
      respSum += Number(record[user].resp);
    }
  });

  return Math.round((paidSum - respSum) * 100) / 100;
}
