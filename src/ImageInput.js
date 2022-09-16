import React, { Component } from 'react';

export class ImageInput extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { imageFile: '' };
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
		this.setState({ imageFile: e.target.files[0] });
	}
}
