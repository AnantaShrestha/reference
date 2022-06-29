import useForm from './hooks/useForm'
import PropTypes from 'prop-types';
const TextField = ({
	wrapperClassName,
	labelClassName,
	labelWrapperClassName,
	className,
	id,
	label,
	placeholder,
	name,
	type,
}) =>{
	const {handleChange} =useForm()
	return(
		<div className={`form-group ${wrapperClassName ?? ''}`}>
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
		    	<input 
		    		type={type ? type : 'text'}
		    		name={name}
		    		className={className}
		    		placeholder={placeholder} 
		    		id={`${name} ${id}`}
		    		onChange = {handleChange}
		    	/>
		    </div>   	
		</div>
	)
}
TextField.propTypes ={
	id:PropTypes.string,
	label:PropTypes.string,
	wrapperClassName:PropTypes.string,
	labelWrapperClassName:PropTypes.string,
	labelClassName:PropTypes.string,
	className:PropTypes.string,
	placeholder:PropTypes.string,
	type:PropTypes.string,
	name:PropTypes.string,
	onChange:PropTypes.func,
}
TextField.defaultProps = {
	id:'',
    className: '',
    children: '',
    controller: undefined,
};

export default TextField