import React from 'react';
import { Grid, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import right from '../../assets/images/arrow-curve-left-down.png';
import left from '../../assets/images/arrow-curve-left-right.png';
import expand from '../../assets/images/arrow-expand.jpg';
import '../ReusableComponents/MiddleSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouTube from 'react-youtube';
import VideoPlayer from './VideoPlayer';
import Toggle from './Toggle';

const assets = [
	{
		asset_id: 18883,
		asset_title: 'Technical Project Management',
		asset_description:
			'Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n',
		asset_content: 'https://www.youtube.com/embed/TiMRwri1xJ8',
		asset_type: 'display_asset',
		asset_content_type: 'video',
	},
	{
		asset_id: 18884,
		asset_title: 'Threadbuild',
		asset_description:
			'Watch the video and thread build, and jot out key threads while watching that video.',
		asset_content: ' ',
		asset_type: 'input_asset',
		asset_content_type: 'threadbuilder',
	},
	{
		asset_id: 18885,
		asset_title: 'Structure you pointers ',
		asset_description:
			'Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.',
		asset_content: ' ',
		asset_type: 'input_asset',
		asset_content_type: 'article',
	},
	{
		asset_id: 18886,
		asset_title: '4SA Method',
		asset_description: 'To explore more read more',
		asset_content:
			' https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878',
		asset_type: 'display_asset',
		asset_content_type: 'article',
	},
];
const file = [
	{
		name: 'Edit',
	},
	{
		name: 'View',
	},
	{
		name: 'Insert',
	},
	{
		name: 'Format',
	},
	{
		name: 'Tools',
	},
	{
		name: 'Table',
	},
	{
		name: 'Help',
	},
];

const MiddleSection = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json'
				);
				// const jsonData = await response.json();
				console.log('data', response);
				// setData(jsonData);
			} catch (error) {
				console.log('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	// console.log('data', data);
	return (
		<>
			<Grid container>
				{/* <Grid item lg={2} mx='auto'>
					<Toggle />
				</Grid> */}
				<Grid item lg={10} mx='auto'>
					<Box
						mt={2}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							cursor: 'pointer',
						}}>
						<Box
							style={{
								color: '#0029FF',
								fontWeight: 'bold',
								fontSize: '30px',
							}}>
							Technical Project Management
						</Box>
						<Box
							style={{
								background: '#0029FF',
								color: 'white',
								textAlign: 'center',
								paddingLeft: '10px',
								paddingRight: '10px',
								// paddingBottom: '-15px',
								paddingTop: '10px',
								// padding: '5px 5p
								// padding: '5px 18px 10px 18px',
								borderRadius: '12px',
								fontSize: '12px',
							}}>
							Submit task
						</Box>
					</Box>
					<Box mt={3} style={{ background: '#E9ECEF', padding: '25px' }}>
						<Box
							style={{
								fontWeight: 'bold',
								fontSize: '20px',
								cursor: 'pointer',
							}}>
							Explore the world of management
						</Box>
						<Box className='poppins' mt={2}>
							As a project manager, you play an important reole in leading a
							project through initiation, planning, execution, monitoring,
							controlling and completion. How? Do you want to manage each and
							every step of your life?
						</Box>
					</Box>
				</Grid>
				<Grid item lg={10} md={10} xs={10} sm={10} mx='auto'>
					<Grid container>
						{assets.map((item, i) => {
							return (
								<Grid item lg={5} md={12} sm={12} xs={12} mx='auto'>
									<Box
										style={{
											boxShadow:
												'0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25)',
											borderRadius: '12px 12px 12px 12px',
										}}>
										<Box
											mt={3}
											style={{
												background: '#000000',
												borderRadius: '15px 15px 0px 0px',
												padding: 10,
											}}>
											<Box
												style={{
													color: 'white',
													// textAlign: 'center',
													width: '100%',
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<span></span>
												<span className='openSans' style={{ fontSize: '20px' }}>
													{item.asset_title}
												</span>
												<span
													className='openSans'
													style={{
														width: '30px',
														borderRadius: '15px',
														background: 'white',
														color: 'black',
														textAlign: 'center',
														fontWeight: '600',
													}}>
													i
												</span>
											</Box>
										</Box>
										{item.asset_title === 'Technical Project Management' ? (
											<Box>
												<Box style={{ padding: '20px' }}>
													<span
														className='poppins'
														style={{
															fontWeight: '600',
															fontSize: '17px',
														}}>
														Descripton:
													</span>
													<span
														className='openSans'
														style={{ fontSize: '17px' }}>
														&nbsp;{item.asset_description}
													</span>
												</Box>
												<Box style={{ paddingBottom: '105px' }}>
													<VideoPlayer videoLink={item.asset_content} />
												</Box>
											</Box>
										) : item.asset_title === 'Threadbuild' ? (
											<Box>
												<Box style={{ padding: '20px' }}>
													<span
														className='poppins'
														style={{
															fontWeight: '600',
															fontSize: '17px',
														}}>
														Descripton:
													</span>
													<span
														className='openSans'
														style={{ fontSize: '17px' }}>
														&nbsp;{item.asset_description}
													</span>
												</Box>
												<Box style={{ background: '#FEFFC0', display: 'flex' }}>
													<Box ml={1} mt={1} style={{ padding: '10px' }}>
														<i
															style={{ fontWeight: 'bold', fontSize: '20px' }}
															class='fa-solid fa-angle-up'></i>
													</Box>
													<Box
														ml={4}
														style={{
															fontWeight: '620',
															fontSize: '25px',
															padding: '10px',
														}}>
														Thread A
													</Box>
												</Box>
												<Box>
													<Grid container>
														<Grid item lg={5} mx='auto'>
															<Box mt={2} ml={1}>
																<Box
																	className='poppins'
																	style={{
																		background: '#F5F5F5',
																		padding: '10px 92px 8px 15px',
																		borderRadius: '8px',
																		boxShadow:
																			'1px 3px 8px rgba(0, 0, 0, 0.25)',
																	}}>
																	Sub thread 1
																</Box>
																<Box
																	style={{
																		height: '80px',
																		boxShadow:
																			'1px 3px 8px rgba(0, 0, 0, 0.25)',
																		borderRadius: '10px 0px 10px 10px',
																		position: 'relative',
																		top: '-5px',
																		background: 'white',
																	}}>
																	<input
																		type='text'
																		style={{
																			width: '110px',
																			border: 'none',
																			padding: '15px',
																			fontSize: '15px',
																			outline: 'none',
																		}}
																		placeholder='Enter Text here'
																	/>
																</Box>
															</Box>
															<Box
																mt={2}
																style={
																	{
																		// display: 'flex',
																		// alignItems: 'flexEnd',
																	}
																}>
																<Box
																	style={{
																		display: 'flex',

																		letterSpacing: '15px',
																		justifyContent: 'flex-end',
																	}}>
																	<Box ml={2}>
																		<img
																			src='https://sdlms.deepthought.education/assets/uploads/files/files/eureka-moment.svg'
																			alt=''
																		/>
																	</Box>
																	<Box ml={2}>
																		<img
																			src='https://sdlms.deepthought.education/assets/uploads/files/files/answer.svg'
																			alt=''
																		/>
																	</Box>
																	<Box ml={2}>
																		<img
																			src='https://sdlms.deepthought.education/assets/uploads/files/files/question.svg'
																			alt=''
																		/>
																	</Box>
																	<Box ml={2}>
																		<img
																			src='https://sdlms.deepthought.education/assets/uploads/files/files/root-of-thought.svg'
																			alt=''
																		/>
																	</Box>
																</Box>
																<Box
																	ml={2}
																	mt={2}
																	style={{
																		padding: '5px',
																		background: '#0029FF',
																		width: '120px',
																		display: 'flex',
																		borderRadius: '15px',
																	}}>
																	<Box
																		style={{
																			fontWeight: 'bold',
																			fontSize: '20px',
																			color: 'white',
																			marginTop: '-3px',
																		}}>
																		+
																	</Box>
																	<Box
																		style={{
																			color: 'white',
																			fontSize: '15px',
																		}}>
																		&nbsp;Sub-thread
																	</Box>
																</Box>
															</Box>
														</Grid>
														<Grid item lg={5} mx='auto'>
															<Box mt={2} ml={1}>
																<Box
																	className='poppins'
																	style={{
																		background: '#F5F5F5',
																		padding: '10px 62px 8px 15px',
																		borderRadius: '8px',
																		boxShadow:
																			'1px 3px 8px rgba(0, 0, 0, 0.25)',
																	}}>
																	Sub Interpretation 1
																</Box>
																<Box
																	style={{
																		height: '80px',
																		boxShadow:
																			'1px 3px 8px rgba(0, 0, 0, 0.25)',
																		borderRadius: '10px 0px 10px 10px',
																		position: 'relative',
																		top: '-5px',
																		zIndex: '1',
																		background: 'white',
																	}}>
																	<input
																		type='text'
																		style={{
																			width: '110px',
																			border: 'none',
																			padding: '15px',
																			fontSize: '15px',
																			outline: 'none',
																		}}
																		placeholder='Enter Text here'
																	/>
																</Box>
															</Box>
															<Box
																style={{
																	display: 'flex',
																}}>
																{/* <Box
																	ml={2}
																	mt={1}
																	style={{
																		fontWeight: '600',
																		fontSize: '13px',
																		display: 'flex',
																		padding: '10px',
																		boxShadow:
																			'0px 2px 4px rgba(0, 0, 0, 0.25)',
																		borderRadius: '10px',
																	}}>
																	<Box>Select Categ </Box>
																	<Box>
																		<i
																			style={{ marginLeft: '2px' }}
																			class='fa-solid fa-angle-down'></i>
																	</Box>
																</Box> */}
																<Box
																	ml={1}
																	mt={1}
																	style={{
																		fontWeight: '600',
																		fontSize: '13px',
																		display: 'flex',
																		padding: '5px',
																		// paddingTop: '10px',
																		// paddingBottoms: '10px',
																		boxShadow:
																			'0px 2px 4px rgba(0, 0, 0, 0.25)',
																		borderRadius: '10px',
																	}}>
																	<Box>
																		{/* <label for='cars'>Choose a car:</label> */}
																		<select
																			style={{
																				border: 'none',
																				outline: 'none',
																				fontWeight: '550',
																			}}
																			name='cars'
																			id='cars'>
																			<option value='volvo'>
																				Select categ
																			</option>
																			<option value='saab'>Saab</option>
																			<option value='opel'>Opel</option>
																			<option value='audi'>Audi</option>
																		</select>{' '}
																	</Box>
																	{/* <Box>
																		<i
																			style={{ marginLeft: '2px' }}
																			class='fa-solid fa-angle-down'></i>
																	</Box> */}
																</Box>
																<Box
																	ml={1}
																	mt={1}
																	style={{
																		fontWeight: '600',
																		fontSize: '13px',
																		display: 'flex',
																		padding: '5px',
																		// paddingTop: '10px',
																		boxShadow:
																			'0px 2px 4px rgba(0, 0, 0, 0.25)',
																		borderRadius: '10px',
																	}}>
																	<Box>
																		{/* <label for='cars'>Choose a car:</label> */}
																		<select
																			style={{
																				border: 'none',
																				outline: 'none',
																				fontWeight: '600',
																			}}
																			name='cars'
																			id='cars'>
																			<option value='volvo'>
																				Select procs
																			</option>
																			<option value='saab'>Saab</option>
																			<option value='opel'>Opel</option>
																			<option value='audi'>Audi</option>
																		</select>{' '}
																	</Box>
																	{/* <Box>
																		<i
																			style={{ marginLeft: '2px' }}
																			class='fa-solid fa-angle-down'></i>
																	</Box> */}
																</Box>
															</Box>
														</Grid>
														<Grid item lg={11} mx='auto'>
															<Box mt={2} ml={1}>
																<Box
																	className='poppins'
																	style={{
																		background: '#F5F5F5',
																		padding: '10px 92px 8px 15px',
																		borderRadius: '8px',
																		boxShadow:
																			'1px 3px 8px rgba(0, 0, 0, 0.25)',
																	}}>
																	Summary for Thread A
																</Box>
																<Box
																	style={{
																		height: '80px',
																		boxShadow:
																			'1px 3px 8px rgba(0, 0, 0, 0.25)',
																		borderRadius: '10px 0px 10px 10px',
																		position: 'relative',
																		top: '-5px',
																		background: 'white',
																	}}>
																	<input
																		type='text'
																		style={{
																			// width: '110px',
																			border: 'none',
																			padding: '15px',
																			fontSize: '15px',
																			outline: 'none',
																		}}
																		placeholder='Enter Text here'
																	/>
																</Box>
															</Box>
														</Grid>
													</Grid>
												</Box>
											</Box>
										) : item.asset_title === '4SA Method' ? (
											<Box>
												<Box style={{ padding: '20px' }}>
													<span
														className='poppins'
														style={{
															fontWeight: '600',
															fontSize: '17px',
														}}>
														Descripton:
													</span>
													<span
														className='openSans'
														style={{ fontSize: '17px' }}>
														&nbsp;{item.asset_description}
													</span>
												</Box>
												<Grid container>
													<Grid item lg={10} mx='auto'>
														<Box
															style={{
																display: 'flex',
																background: '#F2F2F2',
																padding: '12px',
															}}>
															<Box>
																<i
																	style={{
																		fontWeight: 'bold',
																		fontSize: '15px',
																	}}
																	class='fa-solid fa-angle-up'></i>
															</Box>
															<Box
																className='openSans'
																ml={1}
																style={{ fontWeight: '600' }}>
																Introduction
															</Box>
														</Box>
														<Box>
															<Box
																className='openSans'
																style={{ padding: '20px' }}>
																The 4SA Method , How to bring a idea into
																progress ?
															</Box>
															<Box
																style={{
																	display: 'flex',
																	justifyContent: 'flex-end',
																}}>
																<Box
																	className='openSans'
																	style={{
																		fontWeight: 'bold',
																		color: '#606161',
																	}}>
																	See more
																</Box>
															</Box>
														</Box>
														<Box
															mt={3}
															style={{
																display: 'flex',
																background: 'white',
																padding: '12px',
																border: '2px solid #D9D7D7',
															}}>
															<Box>
																<i
																	style={{
																		fontWeight: 'bold',
																		fontSize: '15px',
																	}}
																	class='fa-solid fa-angle-up'></i>
															</Box>
															<Box
																className='openSans'
																ml={1}
																style={{ fontWeight: 'bold' }}>
																Thread A
															</Box>
														</Box>
														<Box className='openSans' ml={3} mt={2}>
															How are you going to develop your stratergy ?
															Which method are you going to use to develop a
															stratergy ? What if the project is lengthy?
														</Box>
														<Box
															mt={2}
															style={{
																display: 'flex',
																justifyContent: 'flex-end',
															}}>
															<Box
																className='openSans'
																style={{
																	fontWeight: 'bold',
																	color: '#606161',
																}}>
																See more
															</Box>
														</Box>
														<Box ml={5} mt={3} style={{}}>
															<Box
																classNam='openSans'
																ml={1}
																style={{
																	fontWeight: 'bold',
																	padding: '10px 20px',
																	border: '2px solid #D9D7D7',
																	marginLeft: '15px',
																}}>
																Example 1
															</Box>
														</Box>
														<Box
															classNam='openSans'
															mt={1}
															style={{ marginLeft: '58px' }}>
															You have a concept , How will you put into
															progress?
														</Box>
													</Grid>
												</Grid>
											</Box>
										) : (
											<Box>
												<Box style={{ marginBottom: '20px', padding: '20px' }}>
													<span
														style={{
															fontWeight: '600',
															fontSize: '19px',
														}}>
														Descripton:
													</span>
													<span style={{ fontSize: '17px' }}>
														&nbsp;{item.asset_description}
													</span>
												</Box>
												<Box
													style={{
														height: '2px',
														background: '#D9D7D7',
													}}></Box>
												<Box style={{ padding: '20px' }}>
													<Box style={{ fontWeight: 'bold' }}>Title</Box>
													<Box
														mt={2}
														style={{
															boxShadow: '1px 3px 8px rgba(0, 0, 0, 0.25)',
															padding: '8px',
															borderRadius: '5px',
														}}>
														<input
															style={{
																border: 'none',
																outline: 'none',
																width: '100%',
															}}></input>
													</Box>
													<Box mt={3} style={{ fontWeight: 'bold' }}>
														Content
													</Box>
													<Box
														mt={2}
														style={{
															padding: '13px',
															borderRadius: '5px 5px 0px 0px',
															boxShadow: '1px 3px 8px rgba(0, 0, 0, 0.25)',
														}}>
														<Box style={{ display: 'flex', cursor: 'pointer' }}>
															<Box
																ml={1}
																style={{ color: '#616161', cursor: 'pointer' }}>
																File
															</Box>
															{file.map((item, i) => {
																return (
																	<Box
																		ml={2}
																		style={{
																			color: '#616161',
																			cursor: 'pointer',
																		}}>
																		{item.name}
																	</Box>
																);
															})}
														</Box>
														<Box
															ml={1}
															mt={2}
															style={{
																display: 'flex',
																cursor: 'pointer',
															}}>
															<Box>
																<img src={left} alt='' />
															</Box>
															<Box ml={2}>
																<img src={right} alt='' />
															</Box>
															<Box ml={2}>
																<img src={expand} alt='' />
															</Box>
															<Box
																ml={2}
																style={{
																	background: 'rgba(235, 235, 235, 1)',
																	paddingRight: '45px',
																	paddingLeft: '5px',
																	fontSize: '18px',
																}}>
																paragraph
															</Box>
															<Box ml={2}>
																<i
																	style={{ fontWeight: 'bold' }}
																	class='fa-solid fa-ellipsis'></i>
															</Box>
														</Box>
													</Box>
													<Box
														style={{
															marginRight: '0px',
															boxShadow: '1px 3px 8px rgba(0, 0, 0, 0.25)',
														}}>
														<textarea
															style={{
																width: '100%',
																border: 'none',
																outline: 'none',
															}}
															name=''
															id=''
															cols=''
															rows='5'></textarea>
													</Box>
												</Box>
											</Box>
										)}
									</Box>
								</Grid>
							);
						})}
					</Grid>
					;
				</Grid>
			</Grid>
		</>
	);
};

export default MiddleSection;
