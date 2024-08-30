import { useState, useContext } from 'react';
import { PredictionContext } from '../contexts/PredictionContext';

export function useImageUpload() {
  const [image, setImage] = useState(null);
  const { uploadImageAndPredict } = useContext(PredictionContext);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        uploadImageAndPredict(reader.result); // Automatically upload and predict when the image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  return { image, handleImageUpload };
}
