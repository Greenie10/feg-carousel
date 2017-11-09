import PhotoChanger from './photo-changer';

it('return initial state of photo-changer', () => {
  //currentPhoto?
  const state = { photoIndex: 0 };
  const action = { type: '' };
  expect(PhotoChanger(state, action)).toEqual(state);
});

it('returns next photo index', () => {
  const state = { photoIndex: 0 };
  const action = { type: 'next' };
  expect(PhotoChanger(state, action)).toEqual({ photoIndex: 1 });
});

it('returns previous photo index', () => {
  const state = { photoIndex: 4 };
  const action = { type: 'previous' };
  expect(PhotoChanger(state, action)).toEqual({ photoIndex: 3 });
});

it('what happens when it is ZERO!!!', () => {});
