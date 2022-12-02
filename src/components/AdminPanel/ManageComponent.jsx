import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import GetButton from './GetButton';
import AddButton from './AddButton';

function ManageComponent(props)
{

    const [isAdd, setIsAdd] = useState(props.add);
    const [isDelete, setisDelete] = useState(props.delete);
    const [isGet, setIsGet] = useState(props.get);



    return(
        <>
            <div className="admin-manage-comp-heading">{props.compType + ' Management'}</div>
            <div className="admin-manage-btn">
                {
                    isDelete ? 
                    <DeleteButton txt={'Remove ' + props.compType} />
                    :
                    null
                }
                {
                    isAdd ? 
                    <AddButton  txt={'Add ' + props.compType} />
                    :
                    null
                }
                {
                    isGet ? 
                    <GetButton  txt={'View ' + props.compType} />
                    :
                    null
                }
            </div>
        </>
    )
}

export default ManageComponent;