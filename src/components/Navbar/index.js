import { CgProfile } from "react-icons/cg";
import "./index.css"

const Navbar = ()  =>{
    return (

        <nav className="navbar">
            <ul>
                <li>
                    <button className="bid-btn">Bid</button>
                </li>
                <li>POD</li>
                <li>Vendor</li>
                <li>User</li>
                <li className="freight">
                <CgProfile className="profile-icon"/>Freight
                </li>
                <li>
                    <select className="select">
                        <option value="EN">EG</option>
                    </select>
                </li>
                
            </ul>
        
        </nav>
    )
}

export default Navbar