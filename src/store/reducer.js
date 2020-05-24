const initialState = {
  age: 20,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP_ASYNC":
      newState.age += 1;
      break;

    case "AGE_DOWN_ASYNC":
      newState.age -= 1;
      break;
    default:
  }
  return newState;
};

export default reducer;
