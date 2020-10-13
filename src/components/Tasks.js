import React, {useState} from 'react';
import {useTasks} from '../hooks';
import {useProjectsValue, useSelectedProjectValue} from '../context';
import { collatedTasksExist, getTitle, getCollatedTitle } from '../helpers';
import { collatedTasks } from '../constants';
import {FormControlLabel, Checkbox } from '@material-ui/core';

export const Tasks = () => {
    
    const {projects} = useProjectsValue();
    const {selectedProject} = useSelectedProjectValue();
    const {tasks} = useTasks(selectedProject);
    const [checked, setChecked] = useState();
    let projectName = '';
    //if project is from database
    if(projects && selectedProject && !collatedTasksExist(selectedProject)){
        projectName = getTitle(projects, selectedProject).name;
    }

    //if project is INBOX, TODAY or NEXT_7
    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
      }

    const handleChecked = id => {
        console.log(id)
    }
    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>
           
            {tasks.map(task => <div key={`${task.id}`}>
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={() => handleChecked(task.id)} name={task.id} />}
                    label={task.task}
                />
            </div>)}
         
        </div>
    )
}