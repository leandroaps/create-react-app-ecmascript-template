export default function REDUCERS(state, action) {
  switch (action.type) {
    case 'IS_LOADING':
      return { ...state, IS_LOADING: state.value };
    case 'INSC':
      return { ...state, METER: state.METER - 1 };
    case 'DESC':
      return { ...state, METER: state.METER + 1 };
    case 'UPDATE_LOREM_TITLE':
      return {
        ...state,
        CONTENT: {
          ...state.CONTENT,
          LOREM: {
            ...state.CONTENT.LOREM,
            TITLE: action.value,
          },
        },
      };
    case 'UPDATE_LOREM_PARAGRAPH':
      return {
        ...state,
        CONTENT: {
          ...state.CONTENT,
          LOREM: {
            ...state.CONTENT.LOREM,
            PARAGRAPH: action.value,
          },
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
