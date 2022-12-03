import React, { useEffect, useState } from 'react';
import { FileUpload }from '../../components'
import TimetableContext from '../TimetableContext';
import './timetable.css';
import TimetableFormModal from './TimetableFormModal';


function generateData(code, classroom){
    return { code, classroom};
}



function Timetable()
{

    const [timetable, setTimetable] = useState([]);
    const [mondayData, setMondayData] = useState([]);
    const [tuesdayData, setTuesdayData] = useState([]);
    const [wednesdayData, setWednesdayData] = useState([]);
    const [thursdayData, setThursdayData] = useState([]);
    const [fridayData, setFridayData] = useState([]);
    const data = {
        timetable,
        setTimetable,
    }
    useEffect(() => {
        timetable.forEach((row) => {
            addData(row);
        })
    }, [timetable]);

    function addData(arr) {
        console.log(arr[0].ttday);
        if(arr[0].ttday === 'Monday'){
            console.log("MONDAY");
            console.log(([...timetable, arr]));
            setMondayData([...timetable, arr]);
        }
        if(arr.ttday === 'Tuesday'){
            setTuesdayData([...timetable, arr]);
        }
        if(arr.ttday === 'Wednesday'){
            setWednesdayData([...timetable, arr]);
        }
        if(arr.ttday === 'Thursday'){
            setThursdayData([...timetable, arr]);
        }
        if(arr.ttday === 'Friday'){
            setFridayData([...timetable, arr]);
        }
    }


    const styles = {
        background: "white",
    
    };

    const d = new Date();
    const currDay = d.getDay();

    return (
        <TimetableContext.Provider value={data}>
        <div className='timetable-bg'>
            <div className="timetable-container">
               <table className='tt-table'>
                    <thead>
                        <tr className='tt-row'>
                            <th style={{background: 'none'}}></th>
                            <th>8:00-8:50</th>
                            <th>8:55-9:45</th>
                            <th>9:50-10:40</th>
                            <th>10:45-11:35</th>
                            <th>11:40-12:30</th>
                            <th>12:35-1:25</th>
                            <th>1:25-2:15</th>
                            <th>2:20-3:20</th>
                            <th>3:20-4:10</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tt-row-heading">
                                Monday
                            </td>
                            {mondayData.map((key) => {
                                return(
                                    <td key={key.id} className='tt-cell'>
                                        <p>{key.tcode}</p>
                                        <p>{key.croom}</p>
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="tt-row-heading">
                                Tuesday
                            </td>
                            {tuesdayData.map((key, i) => {
                                return(
                                    <td key={key.id} className='tt-cell'>
                                        <p>{key.tcode}</p>
                                        <p>{key.croom}</p>
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="tt-row-heading">
                                Wednesday
                            </td>
                            {wednesdayData.map((key, i) => {
                                return(
                                    <td key={key.id} className='tt-cell'>
                                        <p>{key.tcode}</p>
                                        <p>{key.croom}</p>
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="tt-row-heading">
                                Thursday
                            </td>
                            {thursdayData.map((key, i) => {
                                return(
                                    <td key={key.id} className='tt-cell'>
                                        <p>{key.tcode}</p>
                                        <p>{key.croom}</p>
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="tt-row-heading">
                                Friday
                            </td>
                            {fridayData.map((key, i) => {
                                return(
                                    <td key={key.id} className='tt-cell'>
                                        <p>{key.tcode}</p>
                                        <p>{key.croom}</p>
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
               </table>
               <div className='tt-upload-btn'>
                    <TimetableFormModal />
               </div>
            </div>
        </div>
        </TimetableContext.Provider>  
    );
}

export default Timetable;