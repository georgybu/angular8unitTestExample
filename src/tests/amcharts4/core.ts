const emptyFn = (...args) => ({});

const createChart = (...args) => {
  const push = (e) => e;
  return {
    xAxes: {push},
    yAxes: {push},
    series: {push},
  };
};

export {
  emptyFn as useTheme,
  createChart as create
};
