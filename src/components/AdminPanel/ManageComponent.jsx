import React, { useState } from 'react';
import { useContext } from 'react';
import AdminContext from './AdminContext';
import { useEffect } from 'react';
import AdminPTable from './AdminTables/AdminPTable';
import AdminRTable from './AdminTables/AdminRTable';
import AdminCTable from './AdminTables/AdminCTable';
import AdminBTable from './AdminTables/AdminBTable';
import AdminUTable from './AdminTables/AdminUTable';
import AdminSTable from './AdminTables/AdminSTable';
import AdminTTable from './AdminTables/AdminTTable';


function ManageComponent(props)
{
    const admin = useContext(AdminContext);

    const {component} = admin.manageComponent
    

    const [isAdd, setIsAdd] = useState(props.add);
    const [isDelete, setIsDelete] = useState(props.delete);
    const [isGet, setIsGet] = useState(props.get);

    useEffect(() => {
        const addb = admin.manageComponent.addBtn;
        const delb = admin.manageComponent.deleteBtn;
        const getb = admin.manageComponent.getBtn;
        setIsAdd(addb);
        setIsDelete(delb);
        setIsGet(getb);

    }, [admin.manageComponent]);

    


    return(
        <>
            <>
                <div className="admin-manage-comp-heading">{props.compType + ' Management'}</div>
                { 
                    component === 'Projects' ? <AdminPTable />  :
                    component === 'Resources' ? <AdminRTable /> :
                    component === 'Carpool' ? <AdminCTable />   :
                    component === 'Blogs' ? <AdminBTable />     :
                    component === 'Users' ? <AdminUTable />     :
                    component === 'Societies' ? <AdminSTable /> :
                    component === 'Teachers' ? <AdminTTable />  :
                    null
                    
                }
            </>
        </>
    )
}

export default ManageComponent;