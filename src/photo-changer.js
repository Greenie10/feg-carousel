const PhotoChanger = function(state, action) {
  // OBJECT LITERAL SWITCH STATEMENT
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
};
export default PhotoChanger;
