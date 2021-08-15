import React, { Component } from "react";

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file[0]);
  };

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  };

  render() {
    return (
      <form onSubmit={this.submitFile}>
        <input
          label="upload file"
          type="file"
          onChange={this.handleFileUpload}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default FileUpload;
