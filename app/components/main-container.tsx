type MainContainerProps = {
  children: React.ReactNode
}
export default function MainContainer({ children }: MainContainerProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {children}
    </div>
  )
}
