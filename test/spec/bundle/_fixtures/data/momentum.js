module.exports = {
    input: [
      { date: new Date("2020-05-01"), close: 44.34 }, // -5
      { date: new Date("2020-05-02"), close: 44.09 }, // -4
      { date: new Date("2020-05-03"), close: 44.15 }, // -3
      { date: new Date("2020-05-04"), close: 43.61 }, // -2
      { date: new Date("2020-05-05"), close: 44.33 }, // -1
      { date: new Date("2020-05-06"), close: 44.83 }, // 0
      { date: new Date("2020-05-07"), close: 43.59 }, // 1
      { date: new Date("2020-05-08"), close: 43.33 }, // 2
      { date: new Date("2020-05-09"), close: 42.01 }, // 3
      { date: new Date("2020-05-10"), close: 43.21 }, // 4
      { date: new Date("2020-05-11"), close: 43.99 }, // 5
      { date: new Date("2020-05-12"), close: 44.32 }, // 6
    ],
    expected: [
      { date: new Date("2020-05-06"), value:  0.49 },
      { date: new Date("2020-05-07"), value: -0.50 },
      { date: new Date("2020-05-08"), value: -0.82},
      { date: new Date("2020-05-09"), value: -1.60},
      { date: new Date("2020-05-10"), value: -1.12},
      { date: new Date("2020-05-11"), value: -0.84},
      { date: new Date("2020-05-12"), value:  0.73},
    ]
  };