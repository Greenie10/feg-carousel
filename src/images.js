import React, { Component } from 'react';
import data from './image-data.json';
import './images.css';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.photoData = data.photos;
    this.state = {
      displayImage: this.photoData[0].url,
      displayCaption: this.photoData[0].name,
    };
  }

  showBigImage(image, caption) {
    this.setState({ displayImage: image, displayCaption: caption });
  }

  render() {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <div className="bigImageContainer">
          <img
            className="bigImage"
            src={this.state.displayImage}
            alt={this.state.displayCaption}
          />
          <div className="caption">{this.state.displayCaption}</div>
        </div>

        <ul>
          {this.photoData.map(photoObject => {
            return (
              <li className="photoList" key={photoObject.id}>
                <img
                  className="thumb"
                  src={photoObject.url}
                  alt={photoObject.name}
                  onClick={() =>
                    this.showBigImage(photoObject.url, photoObject.name)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PhotoGallery;
