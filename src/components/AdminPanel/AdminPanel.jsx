import React, {useState} from 'react';
import AdminSidebar from './AdminSidebar';
import './adminpanel.css'

function AdminPanel()
{
    const [manageComponent, setManageComponent] = useState('projects');
    return(
        <>
            <AdminSidebar />
            <div className="admin-page">
                <div className="managing-container">
                    
                </div>
            </div>
        </>
    )
}

export default AdminPanel;