import React , {useState} from 'react'
import {firebase} from '../firebase';
import {useProjectsValue, useSelectedProjectValue} from '../context';
import {ConfirmDialog} from './ConfirmDialog';
import { Grid} from '@material-ui/core';

//icons
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const Project = ({project}) => {

    const {projects, setProjects} = useProjectsValue();
    const [showModal, setShowModal] = useState(false)
    const [showDeleteIcon, setShowDeleteIcon] = useState(false)
    const {setSelectedProject} = useSelectedProjectValue();

    const deleteProject = id => {
        firebase
            .firestore()
            .collection('projects')
            .doc(id)
            .delete()
            .then(() => {
                setProjects([...projects])
                setSelectedProject('INBOX')
            })
    }
 
    return (
        <>
        <ListItem button onMouseLeave={() => setShowDeleteIcon(false)} onMouseOver={() => setShowDeleteIcon(true)} >
            <Grid container justify="space-between" alignItems="center">
                <ListItemText color="primary" primary={project.name} />
                <DeleteIcon style={{display: showDeleteIcon ? 'block' : 'none'}} color="error" onClick={() => setShowModal(true)}/>
            </Grid>
        </ListItem>
        <ConfirmDialog 
            open={showModal}
            handleClose={() => setShowModal(false)} 
            confirmModalAction={() =>deleteProject(project.docId)}
            title={`Are you sure you want to delete ${project.name} project?`}/>
       </>
    )
}
