import React from "react";
import { Content } from "./components/Layout/Content";
import {SidebarDrawer} from "./components/SidebarDrawer";
import {SelectedProjectProvider, ProjectsProvider } from './context';

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
      <SidebarDrawer >
        <Content />
        </SidebarDrawer>
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);
