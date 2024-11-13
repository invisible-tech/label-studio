import { Menubar } from "../components/Menubar/Menubar";
import { ProjectRoutes } from "../routes/ProjectRoutes";
import { useLocation } from 'react-router-dom';

export const RootPage = ({ content }) => {
  const pinned = localStorage.getItem("sidebar-pinned") === "true";
  const opened = pinned && localStorage.getItem("sidebar-opened") === "true";
  const location = useLocation();
  const isManagement = location.pathname.startsWith('/manage');

  if (isManagement) {
    return (
      <Menubar
        enabled={true}
        defaultOpened={opened}
        defaultPinned={pinned}
        onSidebarToggle={(visible) => localStorage.setItem("sidebar-opened", visible)}
        onSidebarPin={(pinned) => localStorage.setItem("sidebar-pinned", pinned)}
      >
        <ProjectRoutes content={content} />
      </Menubar>
    );
  }

  return (    
    <ProjectRoutes content={content} />   
  );
};