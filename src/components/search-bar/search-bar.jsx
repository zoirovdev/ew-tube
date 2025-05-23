import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { colors } from '../../constants/colors'


const SearchBar = () => {
	return <Paper component={'form'} 
	sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none' }}>
	  <input type='text' placeholder='Search...' className='search-bar'/>
	  <IconButton>
	    <SearchIcon/>
	  </IconButton>
	</Paper>
}


export default SearchBar
