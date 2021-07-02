
import './App.css';
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }


  let {imagePreviewUrl} = image;
  let imagePreview = null;
  if (imagePreviewUrl) {
    imagePreview = (<img alt="maze" src={imagePreviewUrl} />);
  } else {
    imagePreview = (<div className="previewText">Please select a maze image to upload</div>);
  }


  return (
    <div>
       <div className="previewComponent">
          <input className="fileInput" 
            type="file" 
            onChange={(e)=> handleImageChange(e)} />
        <div className="imgPreview">
          {imagePreview}
        </div>
      </div>
    </div>
  );
}

export default App;
