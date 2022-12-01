import React from 'react';
import './adminpanel.css';

function AdminSidebar(){
    return(
        <div className="admin-sidebar-container admin-sidebar-props">
            <div className='admin-sidebar-content'>
                <p>Academics</p>
                <ul>
                    <li>Projects</li>
                    <li>Resources</li>
                    <li>Courses</li>
                </ul>
            </div>
            <div className='admin-sidebar-content'>
                <p>Users</p>
                <ul>
                    <li>Users</li>
                    <li>Teachers</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className='admin-sidebar-content'>
                <p>Extra Curricular</p>
                <ul>
                    <li>Societies</li>
                    <li>Events</li>
                </ul>
            </div>
            <div className='admin-sidebar-content'>
                <p>Services</p>
                <ul>
                    <li>Timetable</li>
                    <li>Carpool</li>
                </ul>
            </div>
            <div className='admin-sidebar-content'>
                <p>Others</p>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar;