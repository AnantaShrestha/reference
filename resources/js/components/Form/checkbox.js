import useForm from './hooks/useForm'
import PropTypes from 'prop-types';
const CheckBox = (props) =>{
	const {
		wrapperClass,
		label,
		name,
		className,
		id,
		value
	} = props
	const {handleChange} =useForm()
	return(
		<div className={`check-box-wrapper ${wrapperClass}`}>
			<div className="check-input">
				<input 
					value={value} 
					name={name} 
					className={className} 
					id ={id} type="checkbox" 
					onChange = {handleChange} 
				/>
			</div>
			{
				label && (
					<div className="check-label">
						<label>{label}</label>
					</div>
				)
			}
			
		</div>
	)
}
CheckBox.propTypes ={
	id:PropTypes.string,
	label:PropTypes.string,
	className:PropTypes.string,
	placeholder:PropTypes.string,
	name:PropTypes.string,
	onChange:PropTypes.func,
}
CheckBox.defaultProps = {
	id:'',
    className: '',
    children: '',
    controller: undefined,
};

export default CheckBox