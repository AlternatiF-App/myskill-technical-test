import Image from 'next/image'

const ReviewCard = ({
  imgSource, source, review, photo, name
} : {
  imgSource: string,
  source: string,
  review: string,
  photo: string,
  name: string
}) => {
  return (
    <article className='space-y-6 lg:p-8 p-2 rounded-lg lg:rounded-none min-w-[312px] border lg:border-none'>
      <div className='flex gap-2 items-center'>
        <Image src={imgSource} alt={source} title={source} width={24} height={24}/>
        <h3 className='font-bold leading-7'>{source}</h3>
      </div>
      <p className='text-neutral-grey text-sm tracking-wide max-w-[316px] leading-6'>
        &quot;{review}&quot;
      </p>
      <div className='flex gap-2 items-center'>
        <Image src={photo} alt={name} title={name} width={40} height={40} className='rounded-full'/>
        <h3 className='font-bold leading-7'>{name}</h3>
      </div>
    </article>
  )
}

export default ReviewCard