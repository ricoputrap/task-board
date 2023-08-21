import { Meta, StoryObj } from "@storybook/react"
import SideBarBoardsItem from "."

const meta = {
  title: "Components/Organisms/SideBar/SideBarBoards/SideBarBoardsItem",
  component: SideBarBoardsItem,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Main Board",
    active: false,
    onClick: () => { }
  }
}

export const Active: Story = {
  args: {
    name: "Main Board",
    active: true,
    onClick: () => { }
  }
}