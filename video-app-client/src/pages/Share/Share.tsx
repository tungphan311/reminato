import { useState } from 'react'
import './Share.css'
import * as VideoServices from '../../services/video'
import { toast } from 'react-toastify'
import { getErrorMessage } from '../../utils/error'

type ShareProps = {
  toggleLoading: () => void
}

function Share({ toggleLoading }: ShareProps) {
  const [url, setUrl] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      toggleLoading()
      await VideoServices.shareVideo({ videoUrl: url })
      toast('Shared video successfully', {
        type: 'success',
      })
      setUrl('')
    } catch (error: any) {
      toast(getErrorMessage(error), {
        type: 'error',
      })
    }

    toggleLoading()
  }

  return (
    <form className='share-wrapper' onSubmit={handleSubmit}>
      <fieldset className='border p-5'>
        <legend className='float-none w-auto px-3'>Share a Youtube movie</legend>
        <div className='d-flex flex-wrap align-items-center'>
          <div className='col-12 col-md-3'>
            <label htmlFor='url'>Youtube URL:</label>
          </div>
          <div className='col-12 col-md-9'>
            <input
              type='text'
              name='url'
              className='form-control'
              value={url}
              onChange={handleChange}
            />
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
