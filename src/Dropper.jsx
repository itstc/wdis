import { useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const FileUploadContainer = styled.div`
  border-radius: 4px;
  border: 1px solid #fff;
  box-sizing: content-box;
  padding: 10px 20px;
`;

export default function Dropper() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <FileUploadContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop The File Here!</p> :
          <p>Upload File Here</p>
      }
    </FileUploadContainer>
  )
}