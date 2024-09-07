import { Link } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar (){
    return (
        <aside>
            <div className="toggle">
                <div className="logo">
                    <h2>SISTEMA IEPP</h2>
                    {/* <img src="images/logo.png">
                    <h2>Asmr<span className="danger">Prog</span></h2> */}
                </div>
                <div className="close" id="close-btn">
                    <span className="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div className="sidebar">
                <a href="#">
                    <span className="material-icons-sharp">
                        dashboard
                    </span>
                    <h3>Dashboard</h3>
                </a>
                <Link to="user">
                    <span className="material-icons-sharp">
                        person_outline
                    </span>
                    <h3>Users</h3>
                </Link>
                <a href="#">
                    <span className="material-icons-sharp">
                        receipt_long
                    </span>
                    <h3>History</h3>
                </a>
                <a href="#" className="active">
                    <span className="material-icons-sharp">
                        insights
                    </span>
                    <h3>Analytics</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        mail_outline
                    </span>
                    <h3>Tickets</h3>
                    <span className="message-count">27</span>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        inventory
                    </span>
                    <h3>Sale List</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        report_gmailerrorred
                    </span>
                    <h3>Reports</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        settings
                    </span>
                    <h3>Settings</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        add
                    </span>
                    <h3>New Login</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        logout
                    </span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
    )
}