import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types';
import useForm from './hooks/useForm'
import useValidation from './hooks/useValidation'
const Form = ({
	name,
	form,
	children,
	className,
	onFinish,
	validation 
}) =>{
	const [validationRules,setValidationRules] = useState({})
	const {getAttributeName,manageFormData} =useForm()
	const {validateData,validationError} =useValidation(validationRules)
	useEffect(()=>{
		setValidationRules({...validationRules,[name]:validation})
	},[name])
	//submit form
	const handleSubmit = (event) =>{
		event.preventDefault();
		const target=event.target
		const values =manageFormData(target)
		validateData(target,values)
	 	validationError(target).length == 0  &&  onFinish(values) 
	}
	//end of submit
	return(
		<form ref={form} name={name} className={className} onSubmit={handleSubmit}>
			{children}
		</form>
	)
}
Form.propTypes ={
	className:PropTypes.string,
	name:PropTypes.string.isRequired,
	onFinish:PropTypes.func.isRequired,
	validation:PropTypes.array,
	form:PropTypes.object.isRequired
}
Form.defaultProps = {
    className: 'form',
    form:'',
    children: '',
    validation:undefined,
    controller: undefined,
};
export default Form