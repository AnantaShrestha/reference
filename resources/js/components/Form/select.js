import React, { useRef, useState, useEffect } from 'react'

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
	optionLabel
}) => {
	const selectWrapper = useRef(null)
	const [showOption, setShowOption] = useState(false)
	const [checkedValues, setCheckedValues] = useState([])

	const handleOption = (e) => {
		let target = e.target
		if (target.tagName != 'STRONG')
			setShowOption(!showOption)
		if (target.tagName === 'STRONG') {
			selectWrapper.current.querySelectorAll('li').forEach((item) => {
				let label = item.querySelector('label')
				let input = item.querySelector('input')
				if (target.previousSibling.innerHTML === label.innerHTML) {
					let remainingItems = checkedValues.filter((item) => { return item != target.previousSibling.innerHTML });
					setCheckedValues(remainingItems)
					input.checked = false
				}
			})
		}
	}
	console.log(checkedValues)
	const handleSelection = (e) => {
		let checkedStatus = e.target.checked
		let value = e.target.parentNode.querySelector('label').innerHTML
		if (checkedStatus) {
			setCheckedValues(checkedValues => [...checkedValues, value])
		} else {
			let remainingItems = checkedValues.filter((item) => { return item != value });
			setCheckedValues(remainingItems)
		}
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
								{placeholder && checkedValues.length == 0 && (<span className="placeholder-text">{placeholder}</span>)}
								{
									checkedValues.length > 0 && (
										<div className="selected-values">
											{
												checkedValues?.map((item, i) => {
													return (
														<div className="select-value" key={i}><span>{item}</span><strong className="remove-select">&times;</strong></div>
													)
												})
											}
										</div>
									)
								}

							</div>
						</div>
					</div>


					<div className={`selected-options ${showOption ? 'active' : ''}`}>
						<ul className="option-wrapper" onClick={handleSelection} ref={selectWrapper}>
							{
								options && options?.map((option, i) => {
									return (
										<li className="option-item" key={i}>
											<input name={name} id={`option-${option[optionValue]}`} type={multiple ? 'checkbox' : 'radio'} value={option[optionValue]} />
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

export default Select


