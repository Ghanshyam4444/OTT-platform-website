import { NavLink, Outlet } from "react-router-dom"
import "../Layout/layout.css";
export const AdminLayout=()=>{
    return(<>
        <div className="admin_container p-font">
            <nav >
                <ul className="admin_nav_bar">
                    <li><NavLink className="admin_nav_link" to="adminuser">User</NavLink></li>
                    <li><NavLink className="admin_nav_link" to="admincontact">Contact</NavLink></li>
                    <li><NavLink className="admin_nav_link" to="addmovies">Add Movies</NavLink></li>
                    <li><NavLink className="admin_nav_link" to="addWebSeries">Add Webseries</NavLink></li>
                    <li><NavLink className="admin_nav_link" to="seeallmovies">See all Movies</NavLink></li>
                    <li><NavLink className="admin_nav_link" to="seeallwebseries">See all Webseries</NavLink></li>
                </ul>
            </nav>
        </div>
        <Outlet/>
    </>)
}