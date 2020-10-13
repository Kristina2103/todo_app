import React, {useState} from 'react';
import {useProjectsValue, useSelectedProjectValue } from '../context';
import {Project} from './Project';
import List from '@material-ui/core/List';

export const Projects = ({activeValue=null}) => {
    const [active, setActive] = useState(activeValue);
    const {projects} = useProjectsValue();
    
    const {setSelectedProject} = useSelectedProjectValue();
    console.log('projects', projects)
    return (
        <List>
            { projects && projects.map(project => 
                <div 
                key={project.docId}
                style={{background: active === project.projectId ? 'rgba(0, 0, 0, 0.04)' : '#fff'}}
                onClick={() =>{
                    setActive(project.projectId)
                    setSelectedProject(project.projectId)
                    }}> 
                    <Project active={active}  project={project}/> 
                </div>
            )}
        </List>
        
    )
}