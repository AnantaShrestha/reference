import react from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RouteList from './routeList'
import PrivateLayout from '@/layouts/privateLayout'
import PublicLayout from '@/layouts/publicLayout'
const EndPoints = () =>{
	return (
		<>
		<Router>
			<>
				<Routes>
					{RouteList.map((route,i)=>{
						if(route.auth){
							return (<Route path={route.path} element={
								 <PrivateLayout >{route.component}</PrivateLayout>
							}  exact={route.exact}  key={i} />) 
						}
						return (<Route path={route.path} element={<PublicLayout >{route.component}</PublicLayout>}  exact={route.exact}  key={i} />) 
					})}
				</Routes>
			</>
		</Router>
		</>
	);
}
export default EndPoints