export const iNumber = (elem) => {
  return { type: "increment", value: elem };
};

export const dNumber = (elem) => {
  return { type: "Delete", value: elem };
};

export const quantityInc = (elem) => {
  return { type: "plusone", value: 1 };
};

export const quantityDec = (elem) => {
  return { type: "minusone", value: 1 };
};
