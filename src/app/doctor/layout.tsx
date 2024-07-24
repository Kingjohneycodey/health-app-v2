import React, { ReactNode } from 'react';

interface DoctorLayoutProps {
    children: ReactNode;
  }

  const DoctorLayout: React.FC<DoctorLayoutProps> = ({ children }) => {
  return (
    <div>
     <header>Header</header>
     <nav>Sidebar</nav>
      <main>{children}</main>
    </div>
  );
};

export default DoctorLayout;
