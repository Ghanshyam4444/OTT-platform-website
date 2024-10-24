import { useAuth } from '../store/auth';
import './navbar.css';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
    const {isLoggedIn,user}=useAuth();
    const isAdmin=useAuth();
    return (<>
        <div className="header-container">
            <nav className="all_pages">
                <ul className='left_pages mt-3'>
                    <li><NavLink className="navitems text-white" to="/">Home</NavLink></li>
                    <li><NavLink className="navitems text-white" to="/search">Search</NavLink></li>
                    <li><NavLink className="navitems text-white" to="/category">Category</NavLink></li>
                    <li><NavLink className="navitems text-white" to="/about">AboutUs</NavLink></li>
                    <li><NavLink className="navitems text-white" to="/contact">ContactUs</NavLink></li>
                </ul>
                <ul className='right_pages mt-3'>
                {!isLoggedIn?<>
                    <li><NavLink className="navitems text-white" to="/login">login</NavLink></li>
                    <li><NavLink className="navitems text-white" to="/register">register</NavLink></li>
                </>:<>
                <li><NavLink className="navitems text-white" to="/logout">logout</NavLink></li>
                {isAdmin && (<li><NavLink className="navitems text-white" to="/admin">Admin</NavLink></li>)}
                </>
                }
                {/* {isAdmin&&(<li><NavLink className={"navitems"} to="/admin">Admin</NavLink></li>)} */}
                    
                    <li><NavLink className="navitems text-white" to="/myspace">mySpace</NavLink></li>
                </ul>
            </nav>
        </div>        
    </>)
}


