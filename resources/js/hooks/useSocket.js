import React,{useEffect,useState} from 'react'
import io from 'socket.io-client';
import {useSelector} from 'react-redux'

const useSocket = () =>{
	const port  = 5000
	const url =`http://${window.location.hostname}`

	const [socket,setSocket] =useState(null)

	const {user} = useSelector((state) => state.authState)

	useEffect(() => {
   		const newSocket = io(`${url}:${port}`)
    	setSocket(newSocket);
    	newSocket.on('connect', function() {
               newSocket.emit('userConnected',user?.id);
        });
    	newSocket.on('updateUserStatus',function(data){
    		//console.log(data)
    	})
    	
   		return () => newSocket.close();

  	}, [setSocket]);

  	return{
  		socket
  	}
}


export default useSocket