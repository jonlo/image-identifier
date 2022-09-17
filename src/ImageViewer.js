import React, { Component } from 'react';
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";

export class ImageViewer extends Component {

	constructor(props) {
		super(props);
		this.state = { imageFile: props.imageFile };
	}

	setImage(imageFile) {
		const imageSrc = URL.createObjectURL(imageFile);
		this.setState({ imageFile: imageSrc });
		this.predictModel();
	}

	async predictModel() {
		const model = await cocoSsd.load();
		const img = document.getElementById('loadedImage');
		// Classify the image.
		const predictions = await model.detect(img);
		console.log('Predictions: ');
		console.log(predictions);
	}

	render() {
		return (
			<div className="image-viewer">
				<img id="loadedImage" src={this.state.imageFile} alt="" />
			</div>
		);
	}


}
