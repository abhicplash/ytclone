import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { y_tube } from '../utils/constants'
// import Videocard from './Videocard'
import Head from "./Head";
import { Link } from 'react-router-dom';



const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVdos()
  }, [])
  async function getVdos() {
    const data = await fetch(y_tube)
    const json = await data.json();
    setVideos(json?.items)
  }
  // return selected.length === 0 ? (
  //   <ShimmerPitems />
  return videos.length === 0 ? (<Head />) : (

    <div className='flex gap-3 flex-wrap mt-4 '>
      {
        // console.log(videos)
      }
      {
        videos.map((vdo) => (
          <div key={vdo.id} className='w-[32%] h-[40%] mt-2 cursor-pointer '>
            <Link to={"/watch?v=" + vdo.id}>
              <img src={vdo.snippet.thumbnails.medium?.url} alt=""
                className='rounded-xl hover:rounded-none duration-700 ' />
              <div className='flex gap-2 mt-3'>
                <img src={vdo.snippet.thumbnails.medium?.url} alt={vdo.snippet.title}
                  className='h-8 w-8 bg-red-950 rounded-full' />
                <div className='flex flex-col'>
                  <h6 className='text-[10.5px] font-semibold w-[300px]'>{vdo.snippet.title}</h6>
                  <h6 className="text-[9.5px]">{vdo.snippet?.channelTitle}</h6>
                  <h6 className='text-[9.5px]'>
                    {((vdo.statistics.viewCount) / 1000000) > 1 ?
                      ((vdo.statistics.viewCount) / 1000000).toFixed(2) + "M views" :
                      ((vdo.statistics.viewCount) / 100000).toFixed(2) + "K views"}</h6>
                </div>

                {/* <video src=" " autoPlay muted loop></video> */}
              </div>
            </Link>
          </div>

        ))
      }

    </div>
  )
}

export default VideoContainer