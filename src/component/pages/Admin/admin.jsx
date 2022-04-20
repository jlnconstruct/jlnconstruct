import { Outlet } from 'react-router'
import Footer from '../../containers/footer/Footer'
import Navbar from '../../containers/navbar/Navbar'
import "./Admin.css";

const Admin = () => {
  return (
    <div id="admin">
        <Navbar/>
        <div id="content">
            <main>
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default Admin