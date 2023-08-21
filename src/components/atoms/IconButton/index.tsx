import React from 'react'

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="border border-blue-400 p-2 rounded-md">
      {children}
    </button>
  )
}

export default IconButton