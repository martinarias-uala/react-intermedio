

type Props = {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className="transition ease-in-out delay-150 bg-gray-300 text-black hover:scale-110 hover:bg-gray-400 duration-300 rounded-sm">
      {children}
    </button>
  )
}
export default Button