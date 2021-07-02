
import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const canvasRef = useRef(null)

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImageUrl(reader?.result || '');
    }
    reader.readAsDataURL(file)
  }


  useEffect(() => {
    if (imageUrl) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      //Our first draw
      context.fillStyle = '#000000'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }
  }, [imageUrl])


  let imagePreview = null;

  if (imageUrl) {
    imagePreview = (<img id="maze" alt="maze" src={imageUrl} />);
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

      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;
