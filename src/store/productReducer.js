const initialState = {
  product: [
    {
      id: 1,
      name: "Martabak",
      price: 18.99,
      img:
        "https://img.freepik.com/free-photo/egg-martabak-foods-from-savory-flour-with-meat-eggs-spices_12091-203.jpg?size=626&ext=jpg",
      qty: 0,
    },
    {
      id: 2,

      name: "Fried Rice",
      price: 29.99,
      qty: 0,
      img:
        "https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 3,

      name: "Toast With Basil Leaves",
      qty: 0,
      price: 4.59,
      img:
        "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 4,

      name: "Fish Salad",
      qty: 0,
      price: 7.99,
      img:
        "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 5,

      name: "Pepperoni Pizza",
      qty: 0,
      price: 19.99,
      img:
        "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
      id: 6,

      name: "Mix Salad",
      qty: 0,
      price: 8.49,
      img:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
      id: 7,

      name: "Chicken Dimsum",
      qty: 0,
      price: 7.99,
      img:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
      id: 8,
      name: "Tenderloine Grilled Steak",
      qty: 0,
      price: 7.99,
      img:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
  ],
  cart: [],
  productCount: 0,
  total: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let qtyItem = state.product.find((item) => item.id === action.value.id);
      const listItem = state.cart.find((item) => item.id === action.value.id);
      if (listItem) {
        qtyItem.qty++;
        let sumTotal = state.total + listItem.price;
        return {
          ...state,
          cart: [...state.cart],
          total: sumTotal,
        };
      } else {
        qtyItem.qty = 1;
        let sumTotal = state.total + qtyItem.price;
        return {
          ...state,
          cart: [...state.cart, action.value.data],
          total: sumTotal,
        };
      }
    case "ADD_COUNT":
      return {
        ...state,
        productCount: state.productCount + 1,
      };
    case "INC_QTY":
      let listProduct = state.product.find((item) => item.id === action.value);
      listProduct.qty += 1;
      state.productCount += 1;
      let sumTotal = state.total + listProduct.price;
      return {
        ...state,
        total: sumTotal,
      };
    case "DEC_QTY":
      let cartList = state.cart.find((item) => item.id === action.value);
      if (cartList.qty === 1) {
        let sumTotal = state.total - cartList.price;
        let item = state.cart.filter((item) => item.id !== action.value);
        state.productCount -= 1;
        return {
          ...state,
          cart: item,
          total: sumTotal,
        };
      } else {
        cartList.qty -= 1;
        state.productCount -= 1;
        let sumTotal = state.total - cartList.price;
        return {
          ...state,
          total: sumTotal,
        };
      }

    default: {
      return state;
    }
  }
};

export default productReducer;
