import React,{useState} from 'react'
const useForm = () =>{
	//reset fields
	const resetFields = (form) =>{
		
		return form.current.reset()
	}
	//setFields
	const setFieldsValue = (form,fields)=>{
		Object.entries(fields)?.map(([key,value],i)=>{
			if(key){
				if(value && typeof value =='object'){
					let  counter= 0
					let target = form.current.querySelectorAll(`input[name=${key}]`)
					target && target.forEach((item)=>{
						let itemValue =isNaN(item.value) ? item.value : parseInt(item.value)
						if(value.includes(itemValue)) item.checked = true
						else item.checked =false
						if(item.className === 'select-input' && item.checked){
							let value = item.parentNode.querySelector('label').innerHTML
							let parentWrapper = item.parentNode.parentNode.parentNode.previousSibling
							let selectValueTarget = parentWrapper.querySelector('.selected-values')
							if(counter == 0) selectValueTarget.innerHTML = ''
							let selectItemWrapper = document.createElement('div')
								selectItemWrapper.classList.add('select-value')
							let span = document.createElement('span')
								span.innerHTML = value
								selectItemWrapper.append(span)
							let strong =document.createElement('strong')
								strong.classList.add('remove-select')
								strong.innerHTML = `&times;`
								selectItemWrapper.append(strong)
							selectValueTarget.append(selectItemWrapper)
							let placeholder = parentWrapper.querySelector('.placeholder-text')
							if(parentWrapper.querySelector('.selected-values').children.length > 0)
								placeholder.style.display = 'none'
							else
								placeholder.style.display = 'block'
		
							counter ++
						}
					})
				}else{
					let target = form.current.querySelector(`input[name=${key}]`) || 
							 form.current.querySelector(`select[name=${key}]`) ||
							 form.current.querySelector(`textarea[name=${key}]`)	
					if(target) target.value = value
					if(target && (value === undefined || value === '')) target.value =''
				}
			}
		})
	}
	const getFieldValue = (form,field) =>{

	}
	//get attribute
	const getAttributeName = (element) =>{

		return element.getAttribute('name')
	}

	//get checkBoxData
	const getCheckBoxData = (target) =>{
		let checkBoxs = target.querySelectorAll("input[type='checkbox']")
		let checkedDatas = {}
		if(checkBoxs){
			checkBoxs.forEach((item)=>{
				let checkStatus = item.checked
				if(checkStatus){
					let name = getAttributeName(item)
					let value = item.value
					if(checkedDatas[name] === undefined) checkedDatas = {...checkedDatas,[name]:[value]}
					else checkedDatas= {...checkedDatas,[name]:[...checkedDatas[name],value]}
				}
			})
		}

		return checkedDatas
	}
	//manage form data
	const manageFormData = (target) =>{
		let formData = Object.fromEntries(new FormData(target))
		let checkBoxDatas = getCheckBoxData(target)
		if(checkBoxDatas){
			Object.entries(formData)?.map(([key,item],index)=>{
				if(checkBoxDatas[key]) formData = {...formData,[key]:checkBoxDatas[key]}
			})
		}

		return formData
	}
	// on change  in input field
	const handleChange = (event)=>{
		event.persist();
		event.target.classList.remove('invalid')
		event.target.nextSibling && event.target.nextSibling.remove()
	}
	//end of on change  in input field
	return{
	 	handleChange,
	 	getAttributeName,
	 	manageFormData,
	 	resetFields,
	 	setFieldsValue,
	}
}

export default useForm