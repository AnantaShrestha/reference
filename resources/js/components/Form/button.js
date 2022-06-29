import PropTypes from 'prop-types';
const Button = ({
	type,
	className,
	name,
	isLoading
}) =>{
	return (
		<>
			<button disabled={isLoading} type={type} className={className} >
					{
						isLoading ? (<span className="spinner"></span>) : 
						(<span className="btn-span">{name}</span>)

					}	
			</button>
		</>
	)
}
Button.propTypes ={
	id:PropTypes.string,
	className:PropTypes.string,
	type:PropTypes.string,
	name:PropTypes.string,
	isDisable:PropTypes.bool,
	isLoading:PropTypes.bool
}
Button.defaultProps = {
    className: '',
    id:'',
    type:'submit',
    controller: undefined,
};
export default Button;