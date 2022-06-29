import { FaSearch} from 'react-icons/fa';
const Search = ({
	handleSearch
}) =>{
	return(
		<div className="table-search-wrapper">
			<form method="post" onSubmit ={handleSearch}>
				<input name="search" type="text" placeholder="Search"  />
				<button className="search-btn" type='submit'><FaSearch /></button>
			</form>
		</div>
	)
}

export default Search