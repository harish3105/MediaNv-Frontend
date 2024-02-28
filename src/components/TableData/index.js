import { FaCircle } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import './index.css'
const TableData = () =>{
    return(
    
         <tr className="table-row">
            <td><FaCircle className="circle"/> 1</td>
            <td>#1223456781243 <br/>
                 <span className="span">Sunder Yadav</span></td>
            <td>14/02/2024 <br/>
                <span className="span">05:40 Pm</span></td>
            <td>7hr 20 min</td>
            <td>Gurgoan <br/>
            <FaArrowDownLong className="arrow"/> <br/>
              Mumbai
            </td>
            <td>Truck,20 ft <br/>
            Close body, 1</td>
            <td>4000 Kg</td>
            <td>4 <br/>
            <span className="span-1">View results</span></td>
            <td>Mohit <br/>
             <span className="span">521500116124</span></td>
             <td className="span-1">View Details</td>
         </tr>
    
         
        

    )
}

export default TableData