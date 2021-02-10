// Every react custom hooks must start wt the key word 'use'
// This will be reusable in other components and easy to manage in one file

// **************useEffect cleanup***********

/** Error in console: index.js:1 Warning: Can't perform a React state update on an unmounted component.
 * This is a no-op, but it indicates a memory leak in your application. To fix,
 * cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
 *
 * We will use cleanup to handle this error to stop d fetch when the component has unmounted.
 * */
import { useState, useEffect } from 'react'
const useFetch = (url) => {
  // Array destructuring
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('use effect runs on first render and re-render')
    // Use AbortController to stop fetch when a comp unmount
    const abortCtrl = new AbortController()
    fetch(url, { signal: abortCtrl.signal }) //associate the AbortController wt fetch
      .then((res) => {
        if (!res.ok) {
          throw Error('Unable to fetch the data for this resource!')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        //   After loading the data setIsLoading to false
        setIsLoading(false)
        setError(null)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsLoading(false)
          // console.log(err.message);
          setError(err.message)
        }
      })
    return () => abortCtrl.abort()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
