export const getAdults = (obj) => {
  let result = {};
  if (obj.length !== 0) {
    for (let key in obj) {
      if (obj[key] >= 18) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  return null;
};

export const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] >= amount
    ? (balances[clients.indexOf(client)] -= amount)
    : -1;

export const reverseArray = (numbers) => {
  if (Array.isArray(numbers) && numbers.length !== 0) {
    return [...[...numbers].reverse()];
  }
  return null;
};
