import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import useForm from './hooks/useForm'

const Select = ({
	label,
	multiple,
	className,
	wrapperClassName,
	labelClassName,
	placeholder,
	name,
	options,
	optionValue,
	optionLabel,
	searchAllow,
	handleSearch
}) => {
	const selectWrapper = useRef(null)
	const [showOption, setShowOption] = useState(false)

	//find checked item or not
	const findCheckedItem = (element) =>{
		let placeholder = element.querySelector('.placeholder-text')
		if(element.querySelector('.selected-values').children.length > 0)
			placeholder.style.display = 'none'
		else
			placeholder.style.display = 'block'
	}

	//handle option of select box
	const handleOption = (e) =>{
		let target = e.target
		if (target.tagName != 'STRONG')
			setShowOption(!showOption)
		if (target.tagName === 'STRONG') {
			selectWrapper.current.querySelectorAll('li').forEach((item) => {
				let label = item.querySelector('label')
				let input = item.querySelector('input')
				if (target.previousSibling.innerHTML === label.innerHTML) {
					target.parentNode.parentNode.querySelectorAll('.select-value').forEach((item)=>{
						let removeValue = item.querySelector('span').innerHTML
						if(label.innerHTML === removeValue){
							item.remove()
						}
					})
					input.checked = false
					findCheckedItem(item.parentNode.parentNode.previousSibling)
				}
			})
		}
	}

	//handle selection of select box
	const handleSelection = (e) =>{
		let checkedStatus = e.target.checked
		let value = e.target.parentNode.querySelector('label').innerHTML
		let parentWrapper = e.target.parentNode.parentNode.parentNode.previousSibling
		let selectValueTarget = parentWrapper.querySelector('.selected-values')
		if (checkedStatus) {
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
		}
		if(!checkedStatus){
			selectValueTarget.querySelectorAll('.select-value').forEach((item)=>{
				let removeValue = item.querySelector('span').innerHTML
				if(value === removeValue){
					item.remove()
				}
			})
		}
		findCheckedItem(parentWrapper)
	}

	return (
		<div className={`form-group ${wrapperClassName}`}>
			{
				label && (
					<div className={`form-label`}>
						<label className={labelClassName}>
							{label}
						</label>
					</div>
				)
			}
			<div className="form-input">
				<div className={`selection-wrapper ${className}`}>
					<div className={`selected-items-wrapper ${name}`}>
						<div className="selected-items" onClick={handleOption}>
							<div className="select-placeholder">
								<span className="placeholder-text">{placeholder}</span>	
								<div className="selected-values"></div>
							</div>
						</div>
					</div>


					<div className={`selected-options ${showOption ? 'active' : ''}`}>
						{
							searchAllow && (
								<div className="select-option-search">
									<input type="text" className="search-input" autoComplete='off' onChange = {handleSearch} />
								</div>
							)
						}
						<ul className="option-wrapper" onClick={handleSelection} ref={selectWrapper}>
							{
								options && options?.map((option, i) => {
									return (
										<li className="option-item" key={i}>
											<input className='select-input' name={name} id={`option-${option[optionValue]}`} type={multiple ? 'checkbox' : 'radio'} value={option[optionValue]} />
											<label htmlFor={`option-${option[optionValue]}`}>{option[optionLabel]}</label>
										</li>
									)
								})
							}
						</ul>
					</div>


				</div>
			</div>
		</div>

	)
}
Select.propTypes ={
	id:PropTypes.string,
	label:PropTypes.string,
	labelClassName:PropTypes.string,
	wrapperClassName:PropTypes.string,
	placeholder:PropTypes.string,
	name:PropTypes.string,
	optionValue:PropTypes.string,
	optionLabel:PropTypes.string,
	options:PropTypes.array,
	onChange :PropTypes.func,
	handleSearch:PropTypes.func
}
Select.defaultProps = {
    className: '',
    children: '',
    searchAllow:'',
    controller: undefined,
};
export default Select


