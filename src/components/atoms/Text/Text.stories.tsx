import { Meta, StoryObj } from "@storybook/react"
import Text from "."

const meta = {
  title: "Components/Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    children: "Text",
    color: "black",
    size: "md",
    weight: "normal"
  }
}