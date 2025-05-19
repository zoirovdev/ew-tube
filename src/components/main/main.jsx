import { Link } from 'react-router-dom'
import { Stack, Box, Typography, Container } from '@mui/material'
import { useState } from 'react'
import { colors } from '../../constants/colors'
import { Category } from '../'

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    return (
	<Stack>
	    <Category/>
	    <Box p={2} sx={{ height: '90vh' }}>
		<Container maxWidth={"90%"}>
		    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
	    		{ selectedCategory } <span style={{ color: colors.secondary }}>videos</span>
		    </Typography>
	    	</Container>
	    </Box>
	</Stack>
    )
}

export default Main
