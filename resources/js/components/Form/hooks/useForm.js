import React,{useState} from 'react'
const useForm = () =>{
	//reset fields
	const resetFields = (form) =>{
		
		return form.current.reset()
	}
	//setFields
	const setFieldsValue = (form,fields)=>{
		console.log(fields)
		Object.entries(fields)?.map(([key,value],i)=>{
			if(key){
				if(typeof value =='object'){
					let target = form.current.querySelectorAll(`input[name=${key}]`)
					target && target.forEach((item)=>{
						let itemValue =item.value
						if(value.includes(itemValue)) item.checked = true
						else item.checked =false
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
	 	setFieldsValue
	}
}

export default useForm