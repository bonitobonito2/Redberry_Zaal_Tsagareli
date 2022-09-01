import React, { useRef, useState, useEffect } from "react";
import classes from './ImageUpload'

function ImageUpload(props) {
  const filePickerRef = useRef();
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [valid, setValid] = useState(false);
  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setValid(true);
      isValid = true;
    } else {
      setValid(false);
      isValid = false;
    }
    props.onInput( pickedFile, isValid);
  };
  return (
    <div className={classes['chooseImage']}>
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jdp, .png, .jdeg"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      <div className={classes[`image-upload ${props.center && "center"}`]}>
        <div className={classes["image-upload__preview"]}>
         {preview &&  <img style={{width : '878px', height : '450px'}} src={preview} alt="img" />}
         {!preview && <p>please pick an image.</p>}
        </div>
      </div>

      <button type="button" onClick={pickImageHandler}>
        pick image
      </button>
    </div>
  );
}

export default ImageUpload;