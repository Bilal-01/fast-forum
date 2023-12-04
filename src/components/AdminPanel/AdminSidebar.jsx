import React, { useContext } from 'react';
import { useEffect } from 'react';
import AdminContext from './AdminContext';
import './adminpanel.css';
import ManageComponent from './ManageComponent';


function AdminSidebar(props){

    const admin=useContext(AdminContext);

    function handleClick(str){
        if(str === 'Projects'){
            admin.setManageComponent({
                component: 'Projects',
                addBtn: false,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Resources'){
            admin.setManageComponent({
                component: 'Resources',
                addBtn: false,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Courses'){
            admin.setManageComponent({
                component: 'Courses',
                addBtn: true,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Users'){
            admin.setManageComponent({
                component: 'Users',
                addBtn: false,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Teachers'){
            admin.setManageComponent({
                component: 'Teachers',
                addBtn: true,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Blogs'){
            admin.setManageComponent({
                component: 'Blogs',
                addBtn: false,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Societies'){
            admin.setManageComponent({
                component: 'Societies',
                addBtn: true,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Carpool'){
            admin.setManageComponent({
                component: 'Carpool',
                addBtn: false,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Timetable'){
            admin.setManageComponent({
                component: 'Timetable',
                addBtn: true,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Events'){
            admin.setManageComponent({
                component: 'Events',
                addBtn: true,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Dhabba'){
            admin.setManageComponent({
                component: 'Dhabba',
                addBtn: true,
                deleteBtn: true,
                getBtn: true
            })
        }
        if(str === 'Shawarma-corner'){
            admin.setManageComponent({
                component: 'Shawarma-corner',
                addBtn: true,
                deleteBtn: true,
                getBtn: true
            })
        }
    }

    return(
        <div className="admin-sidebar-container admin-sidebar-props">
            <div className='admin-sidebar-content'>
                <p>Academics</p>
                <ul>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Projects')}>Projects</button>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Resources')}>Resources</button>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Courses')}>Courses</button>
                </ul>
            </div>
            <div className='admin-sidebar-content'>
                <p>Users</p>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Users')}>Users</button>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Teachers')}>Teachers</button>
            </div>
            <div className='admin-sidebar-content'>
                <p>Extra Curricular</p>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Societies')}>Societies</button>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Blogs')}>Blogs</button>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Events')}>Events</button>

            </div>
            <div className='admin-sidebar-content'>
                <p>Services</p>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Timetable')}>Timetable</button>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Carpool')}>Carpool</button>
            </div>
            <div className='admin-sidebar-content'>
                <p>Canteens</p>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Dhabba')}>Dhabba</button>
                    <button className='admin-sb-btn' autoFocus="off" onClick={() => handleClick('Shawarma-corner')}>Shawarma-Corner</button>

            </div>
        </div>
    )
}

export default AdminSidebar;