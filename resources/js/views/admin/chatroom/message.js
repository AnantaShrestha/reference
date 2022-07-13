import React from 'react'
import {Form,Button,TextField,useForm} from '@/components/Form'
const Message = ({
	selectedUser
}) =>{
	console.log(selectedUser)
	return(
		<>
			{
				selectedUser ? (
					<>
						<div className="chat-person">
							<h2>{selectedUser.name}</h2>
						</div>
						<div className="chat-person-list">
						</div>
						<div className="chat-person-form">
							<form method='post'>
								<div className={`chat-person-form-wrapper`}>
									<textarea name="message" className="message-box" placeholder="Send Message..."></textarea>
									<Button type="submit" className="btn-success" name='Send' />
								</div>
							</form>
						</div>
					</>
					) : (
						<div className="not-chat-selected">
							<h2>No Person Selected</h2>
						</div>
					)
			}
		</>
	)
}
export default Message