import React,{useEffect,useRef}  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {isEmpty} from 'lodash'
import {Form,Button,TextField,useForm} from '@/components/Form'
import {ChatUserGetMessageAction,ChatUserStoreMessageAction} from '@/services/redux/chat/ChatAction'

const Message = ({
	selectedUser
}) =>{
	const form =useRef(null)
	const dispatch = useDispatch()
	const {chatUserMessage } =useSelector((state) => state.chatState)

	useEffect(()=>{
		if(!isEmpty(selectedUser)){
			dispatch(ChatUserGetMessageAction(selectedUser.id))
		}
	},[selectedUser])
	
	const sendMessage = (values) =>{
		let body = {
			...values,
			receiver_id : selectedUser?.id
		}
		dispatch(ChatUserStoreMessageAction(body))
	}

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
							<Form 
								method='post' 
								onFinish={sendMessage} 
								form = {form}
								name="messageForm" 

							>
								<div className={`chat-person-form-wrapper`}>
									<textarea required name="message" className="message-box" placeholder="Send Message..."></textarea>
									<Button type="submit" className="btn-success" name='Send' />
								</div>
							</Form>
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