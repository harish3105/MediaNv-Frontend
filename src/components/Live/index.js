import { FaFilter } from "react-icons/fa";
import TableData from "../TableData";
import DetailedData from "../DetailedData";
import './index.css'

const Live = () => {
    return (
        <div className="container">
            <div className="live-cont">
                <ul>
                    <li className="live-30">Live (30)</li>
                    <li className="responded">Responded (30)</li>
                    <li className="unresponded">Unresponded (30)</li>
                </ul>
                <ul>
                    <li className="bid-created">Bid Created</li>
                    <li>Today</li>
                    <li>Yesterday</li>
                    <li>
                        <select className="select-cal">
                            <option value="Calender">Calender</option>
                        </select>
                    </li>
                    <li>
                        <FaFilter className="filter-icon" />
                    </li>
                </ul>
            </div>
            <div className="div-1">
                <table >
                    <tr className="table-header">
                        <th>S.No</th>
                        <th>Bid Number <br />
                            Created By
                        </th>
                        <th>
                            Start Date <br />
                            &
                            Time
                        </th>
                        <th>Bid Time <br /> Remaining</th>
                        <th>From City <br />
                            To City</th>
                        <th>Vehicle Type, Size <br />
                            Body , No. of Vehicle</th>
                        <th>Material Weight <br />
                            in Kg
                        </th>
                        <th>
                            Response
                        </th>
                        <th>Assigned Staff</th>
                        <th>Details</th>
                    </tr>
                    <TableData />
                </table>
                <DetailedData />
                <hr className="line" />
                <table>
                    <TableData />
                </table>
                <hr className="line" />
                <table>
                    <TableData />
                </table>
                <hr className="line" />

            </div>
        </div>
    )
}

export default Live