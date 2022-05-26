import { getAdults, withdraw, reverseArray } from "./getAdults.js";

it("should filter name by age", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("should filter name by age", () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it("should filter name by age", () => {
  const result = getAdults({ Kate: 45, Vova: 17, Daria: 22 });
  expect(result).toEqual({ Kate: 45, Daria: 22 });
});

it("should get withdraw amount ", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("should get withdraw amount", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result).toEqual(-1);
});

it("should get withdraw amount", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 100);
  expect(result).toEqual(1300);
});

it("should reverse array ", () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});

it("should reverse array", () => {
  const result = reverseArray([]);
  expect(result).toEqual(null);
});

it("should reverse array", () => {
  const result = reverseArray(6, 8, 9);
  expect(result).toEqual(null);
});
