import PropTypes from 'prop-types';
import Columns from './columns'
import Rows from './rows'
import Search from './search'
import Skeleton from '@/components/Loader/Skeleton'
const Table = ({
	columns,
	rows,
	className,
	rowsWrapperClass,
	handleSearch,
	loading
})=>{
	return(
		<div className="table-wrapper">
			<Search handleSearch={handleSearch} />
			<table className={className}>
				<Columns 
					columns = {columns} 
				/>
				{
					!loading && (
						<Rows 
							rows = {rows}
							columns={columns}
							rowsWrapperClass = {rowsWrapperClass}
						/>
					)
				}
				
			</table>
			{
				loading && (
					<Skeleton />
				)
			}
		</div>
	)
}
Table.propTypes ={
	className:PropTypes.string,
	rows:PropTypes.array,
	columns:PropTypes.array,
}
Table.defaultProps = {
    className: '',
    children: '',
    rowsWrapperClass:'',
    rows:[],
    columns:[],
    controller: undefined,
};
export default Table