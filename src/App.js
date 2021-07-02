
import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [image64, setImage64] = useState("");
  const canvasRef = useRef(null)

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target?.files[0] || '';

    reader.onloadend = () => {
      setImage64(reader?.result || '');
    }
    reader.readAsDataURL(file)
  }


  useEffect(() => {
    if (image64) {
      const canvas = canvasRef.current

      const myImage = document.getElementById('maze');
      const w = myImage.width, h = myImage.height;
    
      canvas.width = w;
      canvas.height = h;

      // Draw image onto the canvas
      const ctx = canvas.getContext('2d');
      ctx.drawImage(myImage, 0, 0);

      const data = ctx.getImageData(0, 0, w, h);
      console.log(data);
    }
  }, [image64])


  let imagePreview = null;

  if (image64) {
    imagePreview = (<img id="maze" alt="maze" src={image64} />);
  } else {
    imagePreview = (<div className="previewText">Please select a maze image to upload</div>);
  }


  return (
    <div  className="card">
      <h1 className="title"> 💩 Shitty maze solver (that doesn't work ™️) </h1>
      <h4> But at least it looks good ✨</h4>
       <div className="previewComponent">
          <input className="fileInput" 
            type="file" 
            onChange={(e)=> handleImageChange(e)} />
        <div style={{ display: 'none'}} className="imgPreview">
          {imagePreview}
        </div>
      </div>

      <hr />
      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;
