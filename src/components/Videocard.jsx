// import React from 'react'

// const Videocard = ({ info }) => {
//   // console.log(info);
//   // const { snippet } = info
//   // const { title, thumbnails } = snippet
//   // const { title, channelTitle, thumbnails } = snippet
//   // const { high } = thumbnails
//   // const { viewCount } = statistics
//   // const views = (viewCount / 1000000).toFixed(2)
//   // console.log(statistics);
//   return (

//     <div className=' w-[350px] h-[300px] mt-2 border'>
//       <img src={info.snippet?.thumbnails?.high.url} alt="" />
//       {/* <img src={high?.url} alt={title} className='rounded-xl hover:rounded-none duration-700' />
//       <div className='flex gap-2 mt-3'>
//         <img src={high?.url} alt={channelTitle} className='h-8 w-8 bg-red-950 rounded-full' />
//         <div className='flex flex-col'>
//           <h6 className='text-[11.5px] font-semibold w-[300px]'>{title}</h6>
//           <h6 className="text-xs">{channelTitle}</h6>
//           <h6 className="text-xs">{views > 1 ? views + "M views" : views * 100 + "K views"}</h6>
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default Videocard

import React from 'react'

const Videocard = (info) => {
  // const{snippet}=info
  return (
    <div>
      <h6>
        {info.snippet?.title}
        </h6>
    </div>
  )
}

export default Videocard