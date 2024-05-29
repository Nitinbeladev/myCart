const initialstate = {
  first: 0,
  second: 0,
  pro: [],
  start: 1,
};

const Update = (state = initialstate, action) => {
  if (action.type === "increment") {
    //state.pro.push(action.value);

    return {
      ...state,
      first: state.first + 1,
      second: state.second + action.value.price,
      pro: [...state.pro, action.value],
    };
  } else if (action.type === "Delete") {
    //state.pro.splice(state.pro.indexOf(action.value, 1));

    return {
      first: state.first - 1,
      second: state.second - action.value.price,
      pro: state.pro.filter((item) => item !== action.value),
    };
  } else return state;
};

const quantity_update = (state = initialstate, action) => {};

export default Update;
