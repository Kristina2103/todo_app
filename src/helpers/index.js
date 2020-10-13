import {collatedTasks} from '../constants';

export const collatedTasksExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);

export const getTitle = (projects, projectId) => projects.find(project => project.projectId === projectId);
export const getCollatedTitle = (projects, key) => projects.find(project => project.key === key);

export const generateId = () =>  Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 7);