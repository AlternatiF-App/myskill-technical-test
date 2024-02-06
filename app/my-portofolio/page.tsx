import moment from 'moment'
import Image from 'next/image'
import { FaRegImage, FaRegUserCircle } from 'react-icons/fa'

const data = [
  { position: 'Frontend Developer', company: 'PT Gramedia Asri Media', start: new Date(), end: new Date(), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' }
]

function MyPortofolio() {
  return (
    <div className=' pt-48 pb-40 container mx-auto'>
      <div className='w-full h-[300px] bg-gray-100 rounded-t-2xl flex items-center justify-center'>
        <FaRegImage className='h-24 w-24 text-gray-400' />
      </div>
      <div className='flex justify-center -mt-14'>
        <div className='w-[100px] h-[100px] bg-gray-100 rounded-full shadow-card flex items-center justify-center'>
          <FaRegUserCircle className='w-[100px] h-[100px] text-gray-400' />
        </div>
      </div>
      <div className='px-4 lg:px-8 py-6'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='font-bold text-xl'>
            Ahmad Fanani
          </h1>
          <h2 className='font-light'>
            Frontend Developer
          </h2>
          <span className='block font-light text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </span>
        </div>
        <div className='mt-8'>
          <h1 className='font-bold'>
            Portofolio
          </h1>
          <div className='mt-4 space-y-8'>
            {
              data.map((item: any, index: number) => (
                <figure key={index} className='p-4 rounded-md shadow-card bg-white'>
                  <h1 className='font-bold'>
                    { item.position }
                  </h1>
                  <span className='block leading-3 font-light text-sm'>
                    { item.company }
                  </span>
                  <div className='mt-2 text-sm text-gray-400 flex items-center space-x-2'>
                    <span className='block'>
                      { moment(item.start).format('MMMM YYYY') }
                    </span>
                    <span>-</span>
                    <span className='block'>
                      { moment(item.start).format('MMMM YYYY') }
                    </span>
                  </div>

                  <span className='block mt-2 text-justify text-sm font-light'>
                    { item.description }
                  </span>
                </figure>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPortofolio
