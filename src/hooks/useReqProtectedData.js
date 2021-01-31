import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const useReqProtectedData = (initialData, endpoint) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [endpoint])

  return data
}

export default useReqProtectedData
