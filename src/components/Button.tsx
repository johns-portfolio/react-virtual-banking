import React from 'react'

const Button = ({
  children,
  onClick,
  onMouseOver,
  onMouseOut,
  className
}: {
  children: any
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>
  onMouseOut?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}) => {
  return (
    <button
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={`bg-green-600 px-8 py-3 rounded-3xl cursor-pointer hover:bg-green-400 transition-all flex flex-row items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
