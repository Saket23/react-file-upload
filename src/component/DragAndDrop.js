import React, { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #1a75ff;
  background-color: #cce0ff;

  p {
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

function MyDropZone({ handleUpload }) {
  const onDrop = useCallback(
    acceptedFiles => {
      handleUpload(acceptedFiles[0]);
    },
    [handleUpload]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Wrapper {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop or click to upload the txt file</p>
      )}
    </Wrapper>
  );
}

export default MyDropZone;
