import React from 'react';

const VideoPlayer = ({ videoLink }) => {
	return (
		<>
			<video width='100%' height='240' controls>
				<source src={videoLink} type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</>
	);
};

export default VideoPlayer;
