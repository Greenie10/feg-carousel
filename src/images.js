import React, { Component } from 'react';
import data from './image-data.json';
import './photos.css';

class PhotoList extends Component {
  render() {
    let elem = data.photos;
    return (
      <ul className="gallery">
        {Object.keys(elem).map(i => (
          <li key={i} className="photoList">
            <img className="thumb" src={elem[i]['url']} alt={elem[i]['name']} />
          </li>
        ))}
      </ul>
    );
  }
}

class BigImage extends Component {
  render() {
    return (
      <div className="bigImageContainer">
        <img className="bigImage" src="" alt="" />
      </div>
    );
  }
}

export {
  PhotoList as default,
  BigImage,
  // NavDropdown,
  // NavDropdownTitle,
  // NavButton
};
