export const getErrorMessage = (error: any): string => {
  if (error) {
    return error.response.data.message || error.message
  }

  return 'Something went wrong'
}
