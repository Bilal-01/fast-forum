import React from 'react';
import './rcontentcont.css';
import { List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

function ResourceContentContainer()
{
    const projects = [
        'Agile Project Management',
        "Agile Project Management",
        "Artificial Intelligence",
        "Assembly Language", 
        "Computer Networks", 
        "Communication and Presentation Skills",
        "Data Science", 
        "Database Systems", 
        "Deep Learning for Perception",
        "Design and Analysis for Algorithms",
        "Design Defects and Restructuring",
        "Digital Logic Design", 
        "Discrete Mathematics", 
        "English Compositon and Comprehension",
        "Fundamentals of Management", 
        "Information and Communication Technology",
        "Information Processing Technique", 
        "Information Retrieval", 
        "Information Security", 
        "Islamic and Religious Studies",
        "Numerical Computing", 
        "Object Oriented Programming", 
        "Operating Systems", 
        "Pakistan Studies", 
        "Probability and Statistics", 
        "Programming Fundamentals", 
        "Parallel and Distributed Computing",
        "Professional Practices in IT",
        "Software Design and Analysis",
        "Software Engineering",
        "Technical Business Writing", 
    ];
    
    return(
        <>
            <div className='br-bg'>
                <br/>
            </div>
                <List className='resource-list'>
                    {
                        projects.map((project, i) => {
                            return(
                                <div key={i}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={project} />
                                    </ListItemButton>
                                </div>
                            )
                        })
                    }
                </List>
                
            </>
    );
}

export default ResourceContentContainer;

