import React, {useState} from 'react'

import {generateId} from '../helpers';
import {firebase} from '../firebase';
import {useProjectsValue, useProjectValue} from '../context';
import {ConfirmDialog} from './ConfirmDialog';

import {ListItemText,ListItem, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export const AddProject = () => {
    const [showForm, setShowForm] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');
    const {setProjects} = useProjectsValue();

    const addNewProject = () => {
        const newProjectId = generateId();
        console.log(newProjectName)
        newProjectName && firebase.firestore().collection('projects').add({
            projectId : newProjectId,
            name: newProjectName,
            userId: 'u53OEYbbCAPeYqZ7XMPf'
        })
        .then(() => {
            setNewProjectName('');
            setShowForm(false);
            setProjects([])
        })
    }
// console.log(newProjectName)
    return (
        <>
            <ListItem button onClick={()=>setShowForm(true)}>
                <AddIcon   />
                <ListItemText color="primary" primary="Add new project" />
            </ListItem>
             <ConfirmDialog 
            open={showForm}
            handleClose={() => setShowForm(false)} 
            confirmModalAction={() =>addNewProject()}
            title={`Add new project`}>
                    <TextField id="name" label="Name" onChange={e => setNewProjectName(e.target.value)} />
                 </ConfirmDialog>
     
        </>
    )
}
