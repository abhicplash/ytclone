import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  // const params=useParams()
  const [searchParams] = useSearchParams()
  console.log(searchParams.get("v"));
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  })
  return (
    <div>
      <iframe
        className='rounded-xl mr-80 mt-8'
        width="780"
        height="440"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default WatchPage