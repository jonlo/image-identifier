import React, { Component } from 'react';

export class ImageViewer extends Component {

	constructor(props) {
		super(props);
		this.state = { imageFile: props.imageFile };
	}

	setImage(imageFile) {
		const imageSrc = URL.createObjectURL(imageFile);
		this.setState({ imageFile: imageSrc });
	}
	render() {
		return (
			<div className="image-viewer">
				<img id="loadedImage" src={this.state.imageFile} alt=""/>
			</div>
		);
	}


}
