export default (state = { count: 0, inputNum: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, inputNum: state.inputNum };
    case 'DECREMENT':
      return { count: state.count - 1, inputNum: state.inputNum };
    case 'OVERRIDE':
        return { count: state.inputNum, inputNum: state.inputNum };
    case 'CHANGE_NUM':
      return { count: state.count, inputNum: action.payload };
    default:
      return state;
  }
};
