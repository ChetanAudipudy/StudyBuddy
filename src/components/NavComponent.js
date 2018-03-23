import React from 'react';


const NavComponent = React.createClass({
	render: function() {
		return (
			<nav className="navBar">
				<div className="navWide">
					<div className="wideDiv">
						<a href="#">Home</a>
						<a href="#">Study</a>
						<a href="#">Logout</a>
					</div>
				</div>
			</nav>
		);
	},
});
 export default NavComponent;