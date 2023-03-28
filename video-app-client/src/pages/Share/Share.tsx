import './Share.css'

function Share() {
  return (
    <form className='share-wrapper'>
      <fieldset className='border p-5'>
        <legend className='float-none w-auto px-3'>Share a Youtube movie</legend>
        <div className='d-flex flex-wrap align-items-center'>
          <div className='col-12 col-md-3'>
            <label htmlFor='url'>Youtube URL:</label>
          </div>
          <div className='col-12 col-md-9'>
            <input type='text' name='url' className='form-control' />
          </div>
        </div>
        <div>
          <div className='col-12 col-md-9 btn-wrapper'>
            <button type='submit' className='btn btn-primary btn--share'>
              Share
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default Share
