import Text from '@/components/atoms/Text'
import React from 'react'
import { MdEdit } from "react-icons/md"

const Header: React.FC = () => {
  return (
    <header className="h-20 w-full flex items-center px-14 border-b">
      <div className="flex gap-3 items-center">
        <Text size="xl" weight='semi-bold'>
          Main Dashboard
        </Text>

        <MdEdit className='cursor-pointer text-gray-light hover:text-black-primary' />
      </div>
    </header>
  )
}

export default Header