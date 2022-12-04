import React, {useState} from 'react';
import AdminSidebar from './AdminSidebar';
import './adminpanel.css'
import UserContext from '../UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ManageComponent from './ManageComponent';
import AdminContext from './AdminContext';

function AdminPanel()
{
    const auth = useContext(UserContext);
    const navigate = useNavigate();
    if(auth.user && !auth.user.role === 0){
        navigate('/');
    }

    
    
    const [manageComponent, setManageComponent] = useState({
        component: 'Projects',
        addBtn: false,
        getBtn: true,
        deleteBtn: true,
    });
    
    useEffect(() => {
        if(manageComponent === 'Users'){
            console.log(manageComponent);
        }
    }, [])

    const admin = {
        manageComponent,
        setManageComponent,
    }


    return(
        <AdminContext.Provider value={admin}>
            <AdminSidebar comp={setManageComponent} />
            <div className="admin-page">
                <div className="managing-container">
                    <ManageComponent
                     compType={manageComponent.component}
                     add={manageComponent.addBtn}
                     delete={manageComponent.deleteBtn}
                     get={manageComponent.getBtn}
                    />
                </div>
            </div>
        </AdminContext.Provider>
    )
}

export default AdminPanel;