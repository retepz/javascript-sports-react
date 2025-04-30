export default function MainHeader() {
  return (
    <header
      style={{
        height: '5rem',
        backgroundColor: '#2f0259',
        marginBottom: '.5rem',
        display: 'grid',
      }}
    >
      <div
        style={{ alignSelf: 'center', display: 'flex', marginLeft: '.5rem' }}
      >
        <img
          style={{
            width: '4rem',
          }}
          src='/images/logo.svg'
        />
        <div
          style={{
            alignContent: 'center',
            fontSize: '1.5rem',
          }}
        >
          <div>Sports</div> <div>React</div>
        </div>
      </div>
    </header>
  )
}
