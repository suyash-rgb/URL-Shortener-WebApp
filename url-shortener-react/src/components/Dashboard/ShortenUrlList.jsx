import React from 'react'
import ShortenItem from './ShortenItem'

const ShortenUrlList = ({ data, refetch, startDate, endDate }) => {
  return (
    <div className='my-6 space-y-4'>
        {data.map((item) => (
            <ShortenItem 
              key={item.id} 
              {...item} 
              refetch={refetch}
              startDate={startDate} 
              endDate={endDate}  
            />
        ))}
    </div>
  )
}

export default ShortenUrlList