import moment from 'moment'

function CardPortofolio({
  position,
  company,
  start,
  end,
  description
} : {
  position: string
  company: string
  start: Date | undefined
  end: Date | undefined
  description: string
}) {
  return (
    <article className='p-4 rounded-md shadow-card bg-white'>
      <h1 className='font-bold'>
        { position }
      </h1>
      <span className='block leading-3 font-light text-sm'>
        { company }
      </span>
      <div className='mt-2 text-sm text-gray-400 flex items-center space-x-2'>
        <span className='block'>
          { start?.toString() !== '' && moment(start).format('MMMM YYYY') }
        </span>
        <span>{ end && '-' }</span>
        <span className='block'>
          { end?.toString() !== '' && moment(end).format('MMMM YYYY') }
        </span>
      </div>

      <span className='block mt-2 text-justify text-sm font-light'>
        { description }
      </span>
    </article>
  )
}

export default CardPortofolio
