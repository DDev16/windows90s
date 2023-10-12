import React, { useState } from "react";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (newPhoto) => {
    setPhotos([...photos, newPhoto]);
  };

  return (
    <div>
      <h2>Photo Gallery</h2>
      <div>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index + 1}`} />
        ))}
      </div>
      <button onClick={() => addPhoto("https://picsum.photos/200")}>
        Add Photo
      </button>
    </div>
  );
};

export default PhotoGallery;
