import React from 'react';
import { FileUpload }from '../../components'
import './timetable.css';
import TimetableFormModal from './TimetableFormModal';


function generateData(code, classroom){
    return { code, classroom};
}

const mondayData = [
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
]
const tuesdayData=[
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
];
    
const wednesdayData = [
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
]

const thursdayData = [
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
]

const fridayData = [
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
    generateData('Algo-BSCS-5D', 'E-12'),
]


function Timetable()
{
    const styles = {
        background: "white",
    
    };

    const d = new Date();
    const currDay = d.getDay();

    return (
        <>
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
                            {mondayData.map((key, i) => {
                                return(
                                    <td key={i} className='tt-cell'>
                                        <p>{key.code}</p>
                                        <p>{key.classroom}</p>
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
                                    <td key={i} className='tt-cell'>
                                        <p>{key.code}</p>
                                        <p>{key.classroom}</p>
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
                                    <td key={i} className='tt-cell'>
                                        <p>{key.code}</p>
                                        <p>{key.classroom}</p>
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
                                    <td key={i} className='tt-cell'>
                                        <p>{key.code}</p>
                                        <p>{key.classroom}</p>
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
                                    <td key={i} className='tt-cell'>
                                        <p>{key.code}</p>
                                        <p>{key.classroom}</p>
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
        </>  
    );
}

export default Timetable;