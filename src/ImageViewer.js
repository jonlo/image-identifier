import React, { Component } from 'react';
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";

export class ImageViewer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imageLoaded: false,
			imageFile: props.imageFile
		};
		this.onImgLoad = this.onImgLoad.bind(this);
	}

	setImage(imageFile) {
		const imageSrc = URL.createObjectURL(imageFile);
		this.setState({ imageFile: imageSrc });

	}

	onImgLoad({ target: img }) {
		this.setState({
			imageLoaded: true,
			dimensions: {
				height: img.offsetHeight,
				width: img.offsetWidth
			}
		});
		this.predictModel();
	}

	async predictModel() {
		const model = await cocoSsd.load();
		const img = document.getElementById('loadedImage');
		const ctx = document.getElementById("predictionCanvas").getContext("2d");

		const predictions = await model.detect(img);
		if (predictions.length > 0) {
			for (const prediction of predictions) {
				let bboxLeft = prediction.bbox[0];
				let bboxTop = prediction.bbox[1];
				let bboxWidth = prediction.bbox[2];
				let bboxHeight = prediction.bbox[3] - bboxTop;
				ctx.beginPath();
				ctx.font = "28px Arial";
				ctx.fillStyle = "red";
				ctx.fillText(
					prediction.class + ": " + Math.round(parseFloat(prediction.score) * 100) +
					"%", bboxLeft + 5, bboxTop + 25);
				ctx.rect(bboxLeft, bboxTop, bboxWidth, bboxHeight);
				ctx.strokeStyle = "#FF0000";
				ctx.lineWidth = 3;
				ctx.stroke();
				console.log("detected");

			}
		}
	}

	render() {
		if (this.state.imageLoaded) {
			return (
				<div className="image-viewer">
					<img id="loadedImage" onLoad={this.onImgLoad} src={this.state.imageFile} alt="" />
					<canvas id="predictionCanvas" width={this.state.dimensions.width} height={this.state.dimensions.height}></canvas>
				</div>
			);
		} else {
			return (
				<div className="image-viewer">
					<img id="loadedImage" onLoad={this.onImgLoad} src={this.state.imageFile} alt="" />
				</div>
			);
		}
	}


}
