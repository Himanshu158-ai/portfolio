import React, { useEffect, useState } from 'react'

const Time = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      const formatted = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      })

      setTime(formatted)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-[20vh] flex flex-col items-end justify-end  font-ppwatch p-10 relative z-10'>
      <h2 className='text-[#393632] text-md md:text-lg  uppercase font-ppwatch '>
        Local Time
      </h2>

      <p className='mt-2 text-[#6B645C] text-md md:text-lg tracking-wider font-ppwatch'>
        {time}, IST
      </p>
    </div>
  )
}

export default Time