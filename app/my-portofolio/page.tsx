'use client'
import moment from 'moment'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DataProps } from '@/interface/interface'

function MyPortofolio() {
  const [data, setData] = useState<DataProps>()
  const [isLoading, setIsLoading] = useState(true)

  const getMyPortofolio = async () => {
    await axios.get('https://65c2eacef7e6ea59682bc798.mockapi.io/api/portofolio/1')
      .then((results) => {
        setData(results.data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getMyPortofolio()
  }, [])

  if (isLoading) {
    return (
      <div className='pt-72 animate-pulse pb-40 font-bold text-2xl text-center container mx-auto max-w-[850px] flex flex-col items-center'>
        Loading...
      </div>
    )
  }

  return (
    <>
      {
        (data && !isLoading)
          ? <div className='pt-48 pb-40 container mx-auto max-w-[850px]'>
              <div className='w-full h-[300px] bg-gray-100 rounded-t-2xl flex items-center justify-center'>
                <Image
                  src={data?.background}
                  alt='background'
                  height={0}
                  width={0}
                  className='h-full w-full rounded-t-2xl object-cover'
                />
              </div>
              <div className='flex justify-center -mt-14'>
                <div className='w-[100px] h-[100px] bg-gray-100 rounded-full shadow-card flex items-center justify-center'>
                  <Image
                    src={data?.profile}
                    alt='profile'
                    height={0}
                    width={0}
                    className='h-full w-full rounded-full object-cover'
                  />
                </div>
              </div>
              <div className='px-4 lg:px-8 py-6'>
                <div className='flex flex-col items-center text-center'>
                  <h1 className='font-bold text-xl'>
                    { data?.name }
                  </h1>
                  <h2 className='font-light'>
                    { data?.position }
                  </h2>
                  <span className='block font-light text-sm'>
                    { data?.description }
                  </span>
                </div>
                <div className='mt-8'>
                  <h1 className='font-bold'>
                    Portofolio
                  </h1>
                  <div className='mt-4 space-y-8'>
                    {
                      data?.portofolio.map((item: any, index: number) => (
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
          : <div className='pt-72 pb-40 container mx-auto max-w-[850px] flex flex-col items-center space-y-8'>
              <h1 className='font-bold text-2xl text-center'>
                Please create your portofolio first
              </h1>
              <Button>
                <Link href='/create'>
                  Create Your Portofolio
                </Link>
              </Button>
            </div>
      }
    </>
  )
}

export default MyPortofolio
