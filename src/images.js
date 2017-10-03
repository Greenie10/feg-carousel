import React, { Component } from 'react';
import photos from './image-data.json';
import './images.css';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { displayImage: '', displayCaption: '' };
    this.showBigImage = this.showBigImage.bind(this);
  }
  showBigImage(image, caption) {
    this.setState({ displayImage: image, displayCaption: caption });
  }

  render() {
    let elem = photos.photos;
    return (
      <div>
        <div className="bigImageContainer">
          <img
            className="bigImage"
            src={this.state.displayImage}
            alt={this.state.displayCaption}
          />
          <caption>{this.state.displayCaption}</caption>
        </div>

        <ul>
          {Object.keys(elem).map(i => (
            <li key={i} className="photoList">
              <img
                className="thumb"
                onClick={() => this.showBigImage(elem[i].url, elem[i].name)}
                src={elem[i].url}
                alt={elem[i].name}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PhotoGallery;
