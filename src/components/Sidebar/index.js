import { CiGrid42 } from "react-icons/ci";
import './index.css'
const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div>
                <div className='logo'>
                    <button className='btn'>H</button>
                    <p>LOGO</p>
                </div>
               
                    <div className="lists">
                    <CiGrid42 className="grid-icon"/>
                    <p className="bid-list">Bid</p>
                    </div>
               
                    <div className="list">
                    <CiGrid42 className="grid-ico"/>
                    <p className="list-item">POD</p>
                    </div>
             
                
                    <div className="list">
                    <CiGrid42 className="grid-ico"/>
                    <p className="list-item">Vendor</p>
                    </div>
                
                
                    <div className="list">
                    <CiGrid42 className="grid-ico"/>
                    <p className="list-item">User</p>
                    </div>
                
            </div>
            <div>
                   <div className="list">
                    <CiGrid42 className="grid-ico"/>
                    <p className="list-item">Settings</p>
                    </div>
                    <div className="list">
                    <CiGrid42 className="grid-ico"/>
                    <p className="list-item">Profile</p>
                    </div>
                    <div className="list">
                    <CiGrid42 className="grid-ico"/>
                    <p className="list-item">Contact Us</p>
                    </div>
                    <div className="list">
                    <CiGrid42 className="grid-ico"/>
                    <p className="list-item">Logout</p>
                    </div>
            </div>
        </div>

    )
}

export default Sidebar