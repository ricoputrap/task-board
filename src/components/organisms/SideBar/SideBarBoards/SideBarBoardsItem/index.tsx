import Text from "../../../../atoms/Text"
import React from 'react'

interface Props {
  name: string;
  active: boolean;
  onClick: () => void;
}

const SideBarBoardsItem: React.FC<Props> = ({ name, active, onClick }) => {
  const bgClass = active
    ? "bg-blue-primary"
    : "transparent";

  return (
    <li onClick={onClick} className={`
      pl-10 h-10 cursor-pointer
      flex items-center
      ${bgClass}
    `}>
      <Text size="sm" weight='normal' color={active ? "white" : "black"}>
        {name}
      </Text>
    </li>
  )
}

export default SideBarBoardsItem