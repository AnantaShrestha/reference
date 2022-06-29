const Rows = ({
	rowsWrapperClass,
	rows,
	columns,

}) =>{
	return(
		<tbody className={rowsWrapperClass}>
			{
				rows && rows?.map((row,index)=>{
					return(
						<tr key={index}>
							{
								columns && columns?.map((column,i)=>{
									return(
										<td key={i}>
										  {
										  	!column.render ? row[column.key] : column.render(row,index)
										  }
										</td>
									)
								})
							}
						</tr>
					)
				})
			}
			
		</tbody>
	)
}

export default Rows