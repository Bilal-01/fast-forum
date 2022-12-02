import React from 'react';

function DeleteButton(props){
    return(
        <div className="admin-btn-container">
            {props.txt}
        </div>
    );
}

export default DeleteButton