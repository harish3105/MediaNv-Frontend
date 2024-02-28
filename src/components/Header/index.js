import { CiSearch } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";
import './index.css'
const Header = () =>{
    return(
      <div className="header-cont">
        <ul>
          <li className="live">Live</li>
          <li>Results</li>
          <li>History</li>
          <li className="search">
          <CiSearch />
          <input type="search" placeholder="Search" className="input-search"/>
          </li>
        </ul>
        <button className="create-div">
            <p>Create</p>
            <FaPlusSquare className="plus-icon"/>
        </button>
      </div>
    )
}

export default Header