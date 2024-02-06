import Image from 'next/image'

const ItemCard = ({
  imgSource, title, desc
} : {
  imgSource: string,
  title: string,
  desc: string
}) => {
  return (
    <article className='shadow-custom px-4 py-6 rounded-2xl'>
      <div className='flex gap-2 items-center mb-3'>
        <Image src={imgSource} alt={imgSource} title={imgSource} width={24} height={24}/>
        <h3 className='font-bold leading-7'>{title}</h3>
      </div>
      <p className='text-neutral-grey'>
        {desc}
      </p>
    </article>
  )
}

export default ItemCard