import React, { Component } from 'react';

export class ImageInput extends Component {

	constructor(props) {
		super(props);
		this.handleFileSelected = this.handleFileSelected.bind(this);
		this.handleFile = props.handler;
		this.state = {
			imageFile: props.imageFile,
			handler: props.handler
		};
	}

	render() {
		return (
			<div className="input-div">
				<label>Load image</label>
				<input onChange={this.handleFileSelected} type="file"></input>
			</div>
		);
	}

	handleFileSelected(e) {
		this.handleFile (e.target.files[0]);
		// this.setState({ imageFile: e.target.files[0] });
	}
}
