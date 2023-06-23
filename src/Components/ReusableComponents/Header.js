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
						<Box style={{ display: 'flex', cursor: 'pointer' }}>
							<Box
								ml={2}
								style={{
									background: '#3683F0',
									color: 'white',
									// width: '50px',
									// height: '20px',
									textAlign: 'center',
									borderRadius: '30px',
									// height: '25px',
									// padding: '10px 5px 5px 10px',
									paddingLeft: '10px',
									paddingRight: '10px',
									paddingTop: '4px',
								}}>
								<i class='fa-solid fa-house'></i>
							</Box>
							<Box
								ml={2}
								style={{
									background: '#3683F0',
									color: 'white',
									// width: '30px',
									textAlign: 'center',
									borderRadius: '30px',
									// height: '25px',
									// padding: '5px',
									paddingLeft: '10px',
									paddingRight: '10px',
									paddingTop: '4px',
								}}>
								<i class='fa-solid fa-screwdriver-wrench'></i>
							</Box>
							<Box
								ml={2}
								style={{
									background: '#3683F0',
									color: 'white',
									// width: '30px',
									textAlign: 'center',
									borderRadius: '30px',
									// height: '25px',
									// padding: '5px',
									paddingLeft: '10px',
									paddingRight: '10px',
									paddingTop: '4px',
								}}>
								<i class='fa-sharp fa-solid fa-bell'></i>
							</Box>
							<Box ml={2}>
								<img
									style={{ width: '32px', marginTop: '-2px' }}
									src='https://sdlms.deepthought.education/assets/uploads/files/profile_images/default_profile-image-from-rawpixel-id-476994-jpeg.jpg'
									alt=''
								/>
							</Box>
							<Box ml={2} mr={2}>
								{/* <i
									style={{
										color: '#3683F0',
										fontSize: '25px',
										fontWeight: 'bold',
										marginTop: '5px',
									}}
									class='fa-solid fa-ellipsis-vertical'></i> */}
								<div class='dropdown'>
									<div
										style={{
											background: '#F5F5F5',
											border: 'none',
											padding: '0px',
										}}
										class='btn btn-secondary dropdown-toggle'
										type='button'
										id='dropdownMenuButton'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'>
										<i
											style={{
												color: '#3683F0',
												fontSize: '25px',
												fontWeight: 'bold',
												marginTop: '5px',
											}}
											class='fa-solid fa-ellipsis-vertical'></i>
									</div>
									<div
										style={{ marginRight: '30px' }}
										class='dropdown-menu'
										aria-labelledby='dropdownMenuButton'>
										<a class='dropdown-item' href='#'>
											LogOut
										</a>
										<a class='dropdown-item' href='#'>
											Present Dashboard
										</a>
										<a class='dropdown-item' href='#'>
											Batches
										</a>
										<a class='dropdown-item' href='#'>
											Cohorts
										</a>
										<a class='dropdown-item' href='#'>
											Sessions
										</a>
										<a class='dropdown-item' href='#'>
											Articles
										</a>
										<a class='dropdown-item' href='#'>
											Quizzes
										</a>
									</div>
								</div>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Header;
