const URL = 'http://127.0.0.1:8081/api/v1/login'

export const login = () => {
  return dispatch => {
      window.location = URL
  }
}
