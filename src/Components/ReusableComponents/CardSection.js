import React from 'react';
import { Grid, Box } from '@mui/material';

const CardSection = () => {
	return (
		<>
			<Grid container>
				<Grid item lg={10} mx='auto'>
					<Grid container>
						<Grid item lg={6}>
							<Box mt={3}>
								<Box
									style={{
										background: '#000000',
										height: '50px',
										borderRadius: '15px 15px 0px 0px',
										textAlign: 'center',
										// color: 'white',
										display: 'flex',
									}}>
									<Box style={{ alignItems: 'center' }}>
										Technical Project Management
									</Box>
									<Box style={{ color: 'white' }}>iasdfghjg</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default CardSection;
