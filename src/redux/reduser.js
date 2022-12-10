const initanalState = [];
const shopReduser = (state = initanalState, action) => {
  const isProductCheck = state.some(
    (item) => item._id === action?.payload?._id
  );
  switch (action.type) {
    case 'NEW_ITEM':
      return isProductCheck ? state : [...state, action.payload];
    case 'DEL_ITEM':
      return state.filter((item) => item._id !== action._id);
    default:
      return state;
  }
};

export const newItemAction = (payload) => ({
  type: 'NEW_ITEM',
  payload,
});
export const delItemAction = (_id) => ({
  type: 'DEL_ITEM',
  _id,
});

export { shopReduser };
