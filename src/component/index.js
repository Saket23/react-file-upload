import React from "react";
import { Wrapper, InputBox, FileName, Table } from "./styles";
import MyDropZone from "./DragAndDrop";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.afterDelimiterUpdate = this.afterDelimiterUpdate.bind(this);
    this.state = {
      fileName: "",
      delimiter: ",",
      line: "2",
      fileData: [],
      fileDataString: ""
    };
  }

  afterDelimiterUpdate() {
    const { delimiter, fileDataString } = this.state;
    this.setState({ fileData: fileDataString.split(delimiter) });
  }

  handleInputChange(event) {
    this.setState(
      { [event.target.name]: event.target.value },
      this.afterDelimiterUpdate
    );
  }

  uploadFile(event) {
    const { delimiter } = this.state;
    let file = event.target ? event.target.files[0] : event;
    if (file) {
      let fileReader = new FileReader();
      fileReader.readAsText(file);
      let data = [];
      fileReader.onloadend = () => {
        let fileDataString = fileReader.result;
        data = fileDataString.split(delimiter);
        this.setState({
          fileData: data,
          fileName: file.name,
          fileDataString: fileDataString
        });
      };
    }
  }

  render() {
    const { fileName, delimiter, line, fileData } = this.state;
    return (
      <Wrapper>
        <MyDropZone handleUpload={this.uploadFile} />
        <FileName>
          {fileName !== "" && (
            <div>
              <span>File Name</span>
              <span>{fileName}</span>
            </div>
          )}
        </FileName>
        <InputBox>
          <div>
            <label>Delimiter</label>
            <input
              type="text"
              name="delimiter"
              onChange={this.handleInputChange}
              value={delimiter}
            />
          </div>
          <div>
            <label>Line</label>
            <input
              type="text"
              name="line"
              onChange={this.handleInputChange}
              value={line}
            />
          </div>
        </InputBox>
        {fileData.length > 0 && (
          <Table>
            {fileData.map((f, index) => {
              return <div key={index}>{f}</div>;
            })}
          </Table>
        )}
      </Wrapper>
    );
  }
}

export default FileInput;
