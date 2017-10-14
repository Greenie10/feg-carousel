import React, { Component } from 'react';
import data from './image-data.json';
import './images.css';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.photoData = data.photos;
    this.state = {
      displayUrl: this.photoData[0].url,
      displayCaption: this.photoData[0].name,
      currentPhoto: 0,
    };
  }

  previousPhoto() {
    let nextPhotoIndex = this.state.currentPhoto - 1;
    if (nextPhotoIndex < 0) {
      nextPhotoIndex = this.photoData.length - 1;
    }
    this.setState({
      displayUrl: this.photoData[nextPhotoIndex].url,
      displayCaption: this.photoData[nextPhotoIndex].name,
      currentPhoto: nextPhotoIndex,
    });
  }
  nextPhoto() {
    let nextPhotoIndex = this.state.currentPhoto + 1;
    if (nextPhotoIndex >= this.photoData.length) {
      nextPhotoIndex = 0;
    }

    this.setState({
      displayUrl: this.photoData[nextPhotoIndex].url,
      displayCaption: this.photoData[nextPhotoIndex].name,
      currentPhoto: nextPhotoIndex,
    });
  }

  showBigPhoto(url, caption, id) {
    this.setState({
      displayUrl: url,
      displayCaption: caption,
      currentPhoto: id,
    });
  }

  render() {
    return (
      <div className="galleryContainer">
        <h1>Photo Gallery</h1>
        <div className="previous" onClick={() => this.previousPhoto()}>
          &lt;
        </div>
        <div className="bigImageContainer">
          <img
            className="bigImage"
            src={this.state.displayUrl}
            alt={this.state.displayCaption}
          />
          <div className="caption">{this.state.displayCaption}</div>
        </div>
        <div className="next" onClick={() => this.nextPhoto()}>
          &gt;
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
                    this.showBigPhoto(
                      photoObject.url,
                      photoObject.name,
                      photoObject.id
                    )}
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
