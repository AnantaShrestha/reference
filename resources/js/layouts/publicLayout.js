import React from 'react'
import FlashMessage from '@/components/FlashMessage'

const PublicLayout = ({children}) =>{
	return (
		<div className="body-wrapper">
			{children}
			<FlashMessage />
		</div>
	);
}
export default PublicLayout