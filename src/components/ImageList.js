import React from 'react';

const ImageList = props => {
  const displayImages = props.images.map(image => {
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
    );
  });
  return <div>{displayImages}</div>;
};

export default ImageList;
