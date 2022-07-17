import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {shortName} from '@/core/globalFunc'
import Message from './message'
import useSocket from '@/hooks/useSocket'
import {ChatUserListAction,ChatUserGetMessageAction} from '@/services/redux/chat/ChatAction'
const ChatRoom = (props) =>{
	const dispatch =useDispatch()
	const {socket} = useSocket()
	const perPage = 10
	// state
	const [currentPage,setCurrentPage] = useState(1)
	const [search,setSearch] = useState('')
	const [selectedUser,setSelectedUser] = useState(null)
	const [userList,setUserList] = useState([])
	//selector
	const {chatUserList,chatUserListLoadingResponse,chatUserMessageStoreResponse} =useSelector((state) => state.chatState)

	useEffect(()=>{
		dispatch(ChatUserListAction({page:currentPage,perPage:perPage,search:search}))
	},[search])

	// useEffect(()=>{
	// 	if(socket){
	// 		socket.on("private-channel:Modules\\Chatroom\\Events\\PrivateMessageEvent", function (message){
	//                console.log(message)
	//         })
	//      }
	// },[chatUserMessageStoreResponse])
	
	const selectUser = (userId) =>{
		let filterUser = chatUserList.filter((user)=>{return user.id == userId})
		setSelectedUser(filterUser[0])
	}
	//https://developer.okta.com/blog/2021/07/14/socket-io-react-tutorial
	return(
		<div className="chat-room-wrapper">
			<div className="chat-row-message-wrapper">
				<Message
					selectedUser = {selectedUser}
				/>
			</div>
			<div className="chat-row-list-wrapper">
				<div className="chat-list-items">
					<div className="chat-heading">
						<h2>Users</h2>
					</div>
					<div className="chat-user-list">
						{
							chatUserList && chatUserList?.map((user,i)=>{
								return(
									<div className="chat-user-item" key={i} onClick={()=>selectUser(user.id)}>
										<div className="chat-user-image">
											<span>{shortName(user.name)}</span>
											<div className={`chat-online-status `}></div>
										</div>
										<div className="chat-user-name">
											<span>{user.name}</span>
										</div>
									</div>
								)
							})
							
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatRoom