import './Loading.css'

function Loading() {
  return (
    <div className='Loading-screen'>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}

export default Loading
