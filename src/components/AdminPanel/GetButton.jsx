import React from 'react';

function GetButton(props){
    return(
        <div className="admin-btn-container">
            {props.txt}
        </div>
    );
}

export default GetButton;