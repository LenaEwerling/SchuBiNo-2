import React from 'react';
import { signIn } from 'next-auth/client';
import { getActive } from '@/helper/navbar/getNavbarActive';
import Link from 'next/link';
class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='container text-center mt-4'>
				<nav className='navbar navbar-expand-lg navbar-light bg-light'>
					<div className='container-fluid'>
						<Link href='/'>
							<a className='navbar-brand'>NextPlanner</a>
						</Link>

						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNavAltMarkup'
							aria-controls='navbarNavAltMarkup'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
							<div className='navbar-nav'>
								{Object.entries(this.props.navs).map((nav) => (
									<Link href={nav[1]}>
										<a
											className={`nav-link ${getActive(
												this.props.path,
												nav[1]
											)}`}>
											{nav[0]}
										</a>
									</Link>
								))}
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;