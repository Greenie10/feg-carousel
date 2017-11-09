import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './photo-gallery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhotoGallery />, div);
});
