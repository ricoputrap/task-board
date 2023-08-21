import { Meta, StoryObj } from "@storybook/react"
import Button from "."

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    width: "fit-content"
  }
}

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "md",
    width: "fit-content"
  }
}