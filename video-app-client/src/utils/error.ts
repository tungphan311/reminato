import { toast } from 'react-toastify'

export const getErrorMessage = (error: any): string => {
  if (error) {
    return error.response.data.message || error.message
  }

  return 'Something went wrong'
}

export const toastErr = (error: any) => {
  toast(getErrorMessage(error), {
    type: 'error',
  })
}
