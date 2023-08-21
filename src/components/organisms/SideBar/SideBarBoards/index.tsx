import Text from '@/components/atoms/Text'
import React, { useState } from 'react'
import SideBarBoardsItem from './SideBarBoardsItem'

const SideBarBoards: React.FC = () => {
  const boards = [
    "Main Boards",
    "Office Work",
    "Side Projects",
    "House Work"
  ]

  const [activeBoard, setActiveBoard] = useState<string>("Main Boards");
  const handleSetActiveBoard = (board: string) => {
    setActiveBoard(board)
  }

  return (
    <div>
      <div className="my-3 pl-10">
        <Text size="xs" weight='bold'>
          Your boards
        </Text>
      </div>

      {/* boards */}
      <ul>
        {boards.map(board => (
          <SideBarBoardsItem
            key={board}
            name={board}
            active={board == activeBoard}
            onClick={() => handleSetActiveBoard(board)}
          />
        ))}
      </ul>
    </div>
  )
}

export default SideBarBoards