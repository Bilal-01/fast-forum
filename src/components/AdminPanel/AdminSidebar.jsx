import React from 'react';
import './adminpanel.css';

function AdminSidebar(props){
    return(
        <div className="admin-sidebar-container admin-sidebar-props">
            <div className='admin-sidebar-content'>
                <p>Academics</p>
                <ul>
                    <li onClick={() => props.comp('Projects')}>Projects</li>
                    <li onClick={() => props.comp('Resources')}>Resources</li>
                    <li onClick={() => props.comp('Courses')}>Courses</li>
                </ul>
            </div>
            <div className='admin-sidebar-content'>
                <p>Users</p>
                <ul>
                    <li onClick={props.comp('Users')}>Users</li>
                    <li onClick={props.comp('Teachers')}>Teachers</li>
                    <li onClick={props.comp('Blogs')}>Blogs</li>
                </ul>
            </div>
            <div className='admin-sidebar-content'>
                <p>Extra Curricular</p>
                <ul>
                    <li onClick={props.comp('Societies')}>Societies</li>
                    <li onClick={props.comp('Events')}>Events</li>
                </ul>
            </div>
            <div className='admin-sidebar-content'>
                <p>Services</p>
                <ul>
                    <li onClick={props.comp('Timetable')}>Timetable</li>
                    <li onClick={props.comp('Carpool')}>Carpool</li>
                </ul>
            </div>
            <div className='admin-sidebar-content'>
                <p>Others</p>
                <ul>
                    <li onClick={props.comp('About')}>About</li>
                    <li onClick={props.comp('Contact')}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar;