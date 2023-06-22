import React from 'react';
import { Grid, Box } from '@mui/material';

const Header = () => {
	return (
		<>
			<Grid style={{ background: '#F5F5F5' }} container>
				<Grid item lg={11} mx='auto'>
					<Box
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							// background: '#F5F5F5',
							height: '70px',
							alignItems: 'center',
						}}>
						<Box ml={3}>
							<img
								style={{ width: '311px', height: '49px' }}
								src='https://deepthought.education/assets/images/logo/logo.svg'
								alt='DT Logo'
							/>
						</Box>
						<Box style={{ display: 'flex' }}>
							<Box
								ml={2}
								style={{
									background: '#3683F0',
									color: 'white',
									width: '30px',
									textAlign: 'center',
									borderRadius: '30px',
									height: '25px',
									padding: '5px',
								}}>
								<i class='fa-solid fa-house'></i>
							</Box>
							<Box
								ml={2}
								style={{
									background: '#3683F0',
									color: 'white',
									width: '30px',
									textAlign: 'center',
									borderRadius: '30px',
									height: '25px',
									padding: '5px',
								}}>
								<i class='fa-solid fa-screwdriver-wrench'></i>
							</Box>
							<Box
								ml={2}
								style={{
									background: '#3683F0',
									color: 'white',
									width: '30px',
									textAlign: 'center',
									borderRadius: '30px',
									height: '25px',
									padding: '5px',
								}}>
								<i class='fa-sharp fa-solid fa-bell'></i>
							</Box>
							<Box ml={2}>
								<img
									style={{ width: '32px' }}
									src='https://sdlms.deepthought.education/assets/uploads/files/profile_images/default_profile-image-from-rawpixel-id-476994-jpeg.jpg'
									alt=''
								/>
							</Box>
							<Box ml={2} mr={2}>
								<i
									style={{
										color: '#3683F0',
										fontSize: '25px',
										fontWeight: 'bold',
										marginTop: '5px',
									}}
									class='fa-solid fa-ellipsis-vertical'></i>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Header;
