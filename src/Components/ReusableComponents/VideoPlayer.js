import React from 'react';

const VideoPlayer = ({ videoLink }) => {
	return (
		<>
			<iframe width='100%' height='315' src={videoLink}></iframe>
		</>
	);
};

export default VideoPlayer;
