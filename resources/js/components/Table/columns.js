const Columns = ({
	columns
})=>{
	return(
		<thead>
			<tr>
				{
					columns && columns?.map((item,i)=>{
						return(
							<th key={i}>{item?.title}</th>
						)
					})
				}
			</tr>
		</thead>
	)
}

export default Columns