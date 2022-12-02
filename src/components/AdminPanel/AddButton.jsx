import React from 'react';

function AddButton(props){
    return(
        <div className="admin-btn-container">
            {props.txt}
        </div>
    );
}

export default AddButton;