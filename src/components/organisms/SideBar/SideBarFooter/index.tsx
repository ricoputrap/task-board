import IconButton from '@/components/atoms/IconButton'
import Text from '@/components/atoms/Text'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsLayoutSidebar } from "react-icons/bs"

interface Props {
  toggleCollapse: () => void;
}

const SideBarFooter: React.FC<Props> = ({ toggleCollapse }) => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-7 ">
      <div className="flex h-10 gap-3">
        <Image
          src="/favicon.ico"
          width={40}
          height={40}
          alt="user profile picture"
        />

        <div>
          <Text size="md" weight='semi-bold'>Rico Putra P</Text>
          <Text size="sm" weight='normal'>@rico_rpp21</Text>
        </div>
      </div>

      <IconButton onClick={toggleCollapse}>
        <BsLayoutSidebar color='#5A9EF0' />
      </IconButton>
    </div>
  )
}

export default SideBarFooter