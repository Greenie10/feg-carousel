const PhotoChanger = function(state, action) {
  // 1. ORIGINAL IF STATEMENT
  // if (action.type === 'next') {
  //   return { photoIndex: state.photoIndex + 1 };
  // } else if (action.type === 'previous') {
  //   return { photoIndex: state.photoIndex - 1 };
  // }

  // 2. PLAIN SWITCH STATEMENT
  // switch (action.type) {
  //   case 'next':
  //     return {
  //       photoIndex: state.photoIndex + 1,
  //     };
  //     break;
  //   case 'previous':
  //     return {
  //       photoIndex: state.photoIndex - 1,
  //     };
  //     break;
  // }

  // 3. OBJECT LITERAL SWITCH STATEMENT
  const typeSwitch = type =>
    ({
      next: {
        photoIndex: state.photoIndex + 1,
      },
      previous: {
        photoIndex: state.photoIndex - 1,
      },
    }[type]);

  return typeSwitch(action.type);

  // 1. NEEDED FOR ORIGINAL IF STATEMENT
  // return state;
};
export default PhotoChanger;
