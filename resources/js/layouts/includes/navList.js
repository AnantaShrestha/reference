import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { FaHome,FaUsers,FaCogs,FaAngleDown,FaRegCommentDots} from 'react-icons/fa';
const items=[
	{
		title:'Dashboard',
		href:"/admin/dashboard",
		icon:<FaHome/>
	},
	{
		title:'Usermanagement',
		href:'',
		icon:<FaUsers />,
		children:[
			{
				title:'Permission',
				href:'/admin/usermanagement/permission',
				icon:''
			},
			{
				title:'Role',
				href:'/admin/usermanagement/role',
				icon:''

			},
			{
				title:'User',
				href:'/admin/usermanagement/user',
				icon:''

			}
		]
	},
	{
		title:'Setting',
		href:'',
		icon:<FaCogs/>,
		children:[
			{
				title:'Log',
				href:'/admin/log',
				icon:''
			}
		]
	},
	{
		title:'Chat Room',
		href:'/admin/chat',
		icon:<FaRegCommentDots />
	}
]
const NavList = (props) =>{
	const [isActiveIndex, setActiveIndex] = useState(-1);
	const [active,setActive]=useState(false)
	const [oldIndex,setOldIndex]=useState(-1)
	const toggleClass = index => {
	    setActiveIndex(index);
	    let prevIndex=oldIndex
	    prevIndex != index ? setActive(true) : setActive(!active)
	  	setOldIndex(index)  
	};
	return(
		<ul>
			{
				items?.map((item,i)=>{
					return(
						<li className={`nav-list ${i == isActiveIndex && 'active'}`} key={i}>
							<>
								<div className="nav-item-wrapper" onClick={e=>{
									{toggleClass(i)}
								}} >
									<div className="nav-icon" >
										{item.icon && (item.icon)}
									</div>
									<div className="nav-title">
										{
											item.href ? (
												<Link to={item.href}>{item.title}</Link>
											) : (<span>{item.title}</span>)
										}
									</div>
									{
										item.children && item.children.length > 0 && (
											<div className={`drop-down-btn-wrapper ${i == isActiveIndex && active && 'active'}`}>
												<FaAngleDown />
											</div>
										)
									}
								</div>
								{
									item.children && item.children.length > 0 && i == isActiveIndex && active && (
										<div  className="dropdown-wrapper ">
											<ul>
												{
													item.children?.map((child,i)=>{
														return(
															<li className="nav-list" key={i}>
																<>
																	<div className="nav-item-wrapper" >
																		
																		<div className="nav-icon" >
																			{child.icon && (child.icon)}
																		</div>
																		<div className="nav-title">
																			{
																				child.href ? (
																				<Link to={child.href}>{child.title}</Link>
																				) : (<span>{child.title}</span>)
																			}
																		</div>
																	</div>
																</>
															</li>
														);
													})
												}
											</ul>
										</div>
									)
								}
							</>
						</li>
					);
				})
			}
		</ul>
	);
	
}
export default NavList