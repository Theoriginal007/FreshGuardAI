import React from 'react';
import { useImageUpload } from '../hooks/useImageUpload';

function ImageUpload() {
  const { image, handleImageUpload } = useImageUpload();

  return (
    <div className="image-upload">
      <h2>Upload an Image</h2>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      {image && <img src={image} alt="Uploaded preview" style={{ maxWidth: '300px', marginTop: '10px' }} />}
    </div>
  );
}

export default ImageUpload;
