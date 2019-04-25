import React from 'react';
import Header from '../components/Header';


const ImageUpload = () => {
	return (
		<div className="image-upload-container">
			<Header />
			<ImageUploader />
		</div>
	)
}

export default ImageUploader;