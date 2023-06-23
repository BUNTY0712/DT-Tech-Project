import React from 'react';
import { Grid, Box } from '@mui/material';
const Toggle = () => {
	return (
		<>
			<Box mt={2}>
				<Box
					style={{
						width: '130px',
						background: 'black',
						padding: '10px',
						color: 'white',
						display: 'flex',
						justifyContent: 'flex-end',
						borderRadius: '0px 15px 15px 0px',
					}}>
					<Box>
						<i
							style={{
								background: 'white',
								color: 'black',
								padding: '10px',
								fontWeight: 'bold',
								borderRadius: '15px',
								fontSize: '20px',
							}}
							class='fa-solid fa-arrow-right'></i>
					</Box>
				</Box>
				<Box
					style={{
						width: '100px',
						background: 'white',
						boxShadow: '1px 3px 8px rgba(0, 0, 0, 0.25)',
						height: '20vh',
					}}></Box>
			</Box>
		</>
	);
};

export default Toggle;
