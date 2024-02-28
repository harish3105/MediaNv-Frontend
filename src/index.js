import { FaCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { PiJeepBold } from "react-icons/pi";
import { PiHexagonFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import './index.css'

const DetailedData = () => {
    return (
        <div className="data-cont">
            <div className='div1'>
                <p className="bidNo">Bid No: 16515120650125<span className='span'> (Sunder Yadav)</span> </p>
                <div className="loc-cont">
                    <div className="location">
                        <FaCircle className="start" />
                        <div class="vl"></div>
                        <IoLocationSharp className="end" />
                    </div>
                    <div className="loc-details">
                        
                            <p className="city">Manesar, Gurugram,<span className="span-city"> Haryana</span></p>
                            <p className="mill-add1">Loading Point : <span className="mill-span">Ramchandra Ramniwas oil mill ,
                                <br />
                                Alwar ,Rajasthan</span></p>
                       
                            <p className="city">Kotputli, <span className="span-city">Rajasthan</span></p>
                            <p className="mill-add2">Unloading Point <span className="mill-span">Ramchandra Ramniwas oil mill ,
                                <br />
                                Alwar ,Rajasthan</span></p>
                      
                    </div>
                </div>


            </div>
            <div className="div2">
                <div className="vehicle">
                <FaCalendar  className="calender-icon"/>
                <p className="date">Vehicle loading date: 17/02/2024</p>
                </div>
                <div className="vehicle">
                <PiJeepBold className="calender-icon2"/>
                <p className="jeep">Vehicle Type: <span className="span-truck">20 ft Truck (Close Body)</span> <span className="cng">CNG</span></p>
                </div>
                <div className="vehicle">
                <PiHexagonFill className="calender-icon2"/>
                <p className="jeep">Material: <span className="span-truck">Agricultural Products   </span> Weight: <span className="span-truck">14 Tonnes</span></p>
                </div>
                <div className="vehicle">
                <FaCalendar  className="calender-icon2"/>
                <p className="jeep">Request Date: <span className="span-truck"> 15/02/2024</span>  
                <FaCalendar  className="calender-icon2"/> Expiry Date: 
                <span className="span-truck"> 15/02/2024</span></p>
                </div>
                <p className="jeep">Remarks: <span  className="span-truck">Urgent Delivery</span></p>

            </div>
            <div  className="div2">
               <div className="vehicle">
               <CgProfile  className="calender-icon2"/>
               <p className="jeep">Assigned Staff: <span className="span-truck">Rahul Pandey</span></p>
               </div>
               <div className="vehicle">
               <FaPhoneAlt className="calender-icon2"/>
               <p className="jeep">Phone number: <span className="span-truck"> +91 332423442442</span></p>

               </div>
               <p className="jeep">Target Price: <span className="span-truck">Rs 5000 </span></p>
               <p className="jeep">Number of Bider for this Bid: <span className="span-truck">54</span></p>
               <p className="span-truck">View Details</p>
            </div>
        </div>
    )
}
export default DetailedData