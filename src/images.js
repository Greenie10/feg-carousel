import React, { Component } from 'react';
import photos from './image-data.json';
import './photos.css';

// class PhotoList extends Component {
//   render() {
//     let elem = data.photos;
//     return (
//       <ul className="gallery">
//         {Object.keys(elem).map(i => (
//           <li key={i} className="photoList">
//             <img className="thumb" src={elem[i].url} alt={elem[i].name} />
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

class BigImage extends Component {
  constructor(props) {
    super(props);
    this.state = { displayedImage: 'hello' };
    this.selectImage = this.selectImage.bind(this);
  }
  selectImage(imageSrc) {
    console.log(imageSrc);
    this.setState({ displayedImage: imageSrc });
  }

  render() {
    let elem = photos.photos;
    return (
      <div>
        <div className="bigImageContainer">
          <img className="bigImage" src={this.state.displayedImage} alt="" />
        </div>

        <ul className="gallery">
          {Object.keys(elem).map(i => (
            <li key={i} className="photoList">
              <img
                className="thumb"
                onClick={() => this.selectImage(elem[i].url)}
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

export {
  // PhotoList as default,
  BigImage as default,
};
