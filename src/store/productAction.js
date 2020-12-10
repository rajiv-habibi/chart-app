export const addProduct = (data, id) => {
  return {
    type: "ADD_PRODUCT",
    value: {
      data,
      id,
    },
  };
};

export const addCount = () => {
  return {
    type: "ADD_COUNT",
  };
};
export const incQty = (id) => {
  return {
    type: "INC_QTY",
    value: id,
  };
};
export const decQty = (id) => {
  return {
    type: "DEC_QTY",
    value: id,
  };
};
