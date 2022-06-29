import React,{useRef} from 'react'
const Option = ((children,...props)=>{
    const {value} =props
    console.log(value)
    return(
        <>
         <li className = "option-item"></li>
        </>
    )
})
const Select = ({
	label,
	multiple,
	children,
	className,
	wrapperClassName,
	labelClassName,
	labelWrapperClassName,
	placeholder,
	name
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
		    		<div className="selected-items-wrapper">
						<div className="selected-items">
							{
								placeholder  && (
									<div className="select-placeholder">
										<span>{placeholder}</span>
									</div>
								)
							}
						</div>
					</div>
		    		<div className="selected-options">
                       <ul className="option-wrapper">
                            {children}
                       </ul>
					</div>
		    	</div>
		    </div>
		</div>

	)
}

export default Select


