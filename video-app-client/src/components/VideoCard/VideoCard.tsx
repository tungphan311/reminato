import { Video } from '../../types/Video'

function VideoCard({ thumbnail, title, description }: Video) {
  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={thumbnail} className='img-fluid rounded-start' alt={title} />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
