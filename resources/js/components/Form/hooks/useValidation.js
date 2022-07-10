import useForm from './useForm'
const useValidation = (validationRules) =>{
	const {getAttributeName} =useForm()
	//create validation message
	const validationMessage = (element,fieldName,fieldRules,formData) =>{
		let fieldElement = element.querySelector(`input[name=${fieldName}]`) || 
						   element.querySelector(`textarea[name=${fieldName}]`)
		let div=document.createElement('div')
			div.classList.add('validation-error-wrapper')
		let span =document.createElement('span')
			div.append(span)
		if(fieldElement && !formData[fieldName] && fieldRules.includes('required')){
			span.innerHTML = `${fieldName} is required`
			fieldElement.classList.add('invalid')
			fieldElement.nextSibling && (fieldElement.nextSibling.remove())
			fieldElement.parentNode.append(div)
		}
	}
	//check validation 
	const validateData = (element,formData) =>{
		let name= getAttributeName(element)
		let rules= validationRules[name]
		rules && 
			rules?.map((item,i)=>{
				let fieldName = item?.name
				let fieldRules = item?.rules.split('|')
				fieldRules && validationMessage(element,fieldName,fieldRules,formData)
		})
	}

	//check if validation failed
	const validationError = (target) =>{
		return target.querySelectorAll('.validation-error-wrapper')
	}

	return{
		validateData,
		validationError
	}
}

export default useValidation