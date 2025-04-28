export default function MainHeader() {
  return (
    <header
      style={{
        height: '5rem',
        backgroundColor: '#2f0259',
        marginBottom: '.5rem',
        alignContent: 'center',
        display: 'flex',
      }}
    >
      <img
        style={{
          width: '4rem',
          marginLeft: '.5rem',
        }}
        src='/images/logo.svg'
      />
      <div
        style={{
          alignContent: 'center',
          fontSize: '1.5rem',
          marginLeft: '.5rem',
        }}
      >
        <div>Sports</div> <div>React</div>
      </div>
    </header>
  )
}
