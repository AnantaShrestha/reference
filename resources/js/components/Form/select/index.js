const Select = ({
	label,
	multiple,
	children,
	className,
	wrapperClassName
	labelClassName,
	labelWrapperClassName
}) =>{
	return(
		<div className ={`form-group ${wrapperClassName}`}>
			{
		    	label && (
		    		<div className={`form-label ${labelWrapperClassName ?? ''}`}>
		    			<label className={labelClassName}>
		    				{label}
		    			</label>
		    		</div>
		    	)
		    }
		    <div className="form-input">
		    	<div className={`selection-wrapper ${className}`}>
		    		<div className="selected-items"></div>
		    		<div className="selected-options"></div>
		    	</div>
		    </div>
		</div>

	)
}