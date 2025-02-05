export const catchAsync = (fn) => {
  return async function (...args) {
    try {
      return await fn.apply(this, args) // Ensure 'this' is passed correctly
    } catch (error) {
      console.error('Error:', error)
    }
  }
}
