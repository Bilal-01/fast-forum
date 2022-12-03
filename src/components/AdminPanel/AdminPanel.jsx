import React, {useState} from 'react';
import AdminSidebar from './AdminSidebar';
import './adminpanel.css'
import UserContext from '../UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ManageComponent from './ManageComponent';

function AdminPanel()
{
    const auth = useContext(UserContext);
    const navigate = useNavigate();
    if(auth.user && !auth.user.role === 0){
        navigate('/');
    }

    const [manageComponent, setManageComponent] = useState('projects')

    return(
        <>
            <AdminSidebar comp={setManageComponent} />
            <div className="admin-page">
                <div className="managing-container">
                    <ManageComponent
                     compType={manageComponent}
                     add={true}
                     delete={true}
                     get={true}
                    />
                </div>
            </div>
        </>
    )
}

export default AdminPanel;