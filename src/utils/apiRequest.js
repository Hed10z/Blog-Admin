import { useLoadingStore } from '@/stores/useLoadStore'
import { useErrorStore } from '@/stores/useErrorStore'
import { useSuccessStore } from '@/stores/useSuccesStore'

export async function apiRequest(url, method = 'GET', data = null) {
  if (!url) {
    console.error('apiRequest Error: URL is missing')
    throw new Error('URL is required for apiRequest')
  }

  const useLoading = useLoadingStore()
  const useError = useErrorStore()
  const useSuccess = useSuccessStore()

  // Start Loading
  useLoading.startLoading()
  useSuccess.startSuccess('Fetched Successfully')
  useError.clearError()

  // Define Options
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-key': '4c2dad56-9a65-387e-91ca-277fc97cc4dc', // API Key
    },
  }

  // Add Data to Body if Present
  if (data) {
    options.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      const errorData = await response.json()
      const errorMessage = errorData.errors || 'An error occurred'
      useError.setError(errorMessage)
      throw new Error(errorMessage)
    }

    return await response.json()
  } catch (error) {
    console.error('API Request Error:', error)
    throw error
  }
}
