import SideBar from '@/components/organisms/SideBar'
import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div id="main-layout" className={`flex h-screen w-screen ${inter.className}`}>
      <SideBar />

      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

export default MainLayout