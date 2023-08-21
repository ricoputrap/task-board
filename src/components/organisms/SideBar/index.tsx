import Button from '@/components/atoms/Button'
import Text from '@/components/atoms/Text'
import React, { useMemo } from 'react'
import SideBarBoards from './SideBarBoards'
import SideBarFooter from './SideBarFooter'

const SideBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const toggleCollapse = () => {
    setIsCollapsed(prevIsCollapsed => !prevIsCollapsed);
  }

  const widthClass = useMemo(() => {
    if (isCollapsed) {
      return "w-16"
    }
    return "w-64"
  }, [isCollapsed]);

  return (
    <aside
      id="side-nav"
      className={`h-screen border-r flex flex-col justify-between ${widthClass}`}
    >
      <div>
        <div className="w-full h-20 flex justify-center items-center cursor-pointer">
          <Text size="2xl" weight='semi-bold'>
            TaskBoard
          </Text>
        </div>

        <SideBarBoards />

        <div className="mt-5 px-5">
          <Button width="full">
            New board
          </Button>
        </div>
      </div>

      {/* move it to most bottom */}
      <div className="justify-self-end">
        <SideBarFooter toggleCollapse={toggleCollapse} />
      </div>
    </aside>
  )
}

export default SideBar