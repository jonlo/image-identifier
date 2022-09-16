import './App.css';
import React, { Component } from 'react';
import { ImageHeader } from './ImageHeader';
import { ImageInput } from './ImageInput';
import { ImageViewer } from './ImageViewer';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { imageFile: '' };
    this.handler = this.handler.bind(this)
    this.imageViewer = React.createRef();
  }

  handler(imageFile) {
    this.imageViewer.current.setImage(imageFile);
  }

  render() {
    return (
      <div className="App">
        <ImageHeader></ImageHeader>
        <ImageInput handler={this.handler} ></ImageInput>
        <ImageViewer ref={this.imageViewer}></ImageViewer>
      </div >
    );
  }


}



export default App;
