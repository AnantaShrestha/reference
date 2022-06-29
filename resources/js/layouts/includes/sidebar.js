import NavList from './navList'
const SideBar = () =>{
	return(
		<div className="sidebar-wrapper">
				<div className="sidebar-heading">
					<div className="sidebar-image">
						<img src="/images/user.png" />
					</div>
					<div className="sidebar-title">
						<h2>React Dashboard</h2>
					</div>
				</div>
				<NavList />
			</div>
	);
}

export default SideBar