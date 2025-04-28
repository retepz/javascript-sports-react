type RouteContentContainerProps = {
  children: React.ReactNode
}
export default function RouteContentContainer({
  children,
}: RouteContentContainerProps) {
  return (
    <div
      style={{
        display: 'grid',
        rowGap: '1.5rem',
        margin: '1rem',
      }}
    >
      {children}
    </div>
  )
}
