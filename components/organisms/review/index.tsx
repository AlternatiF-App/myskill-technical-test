import Title from '@/components/ui/title'
import ReviewCard from '@/components/molecules/card/card-review'

const Review = () => {
  const reviewData = [
    {imgSource: '/icons/instagram.svg', source:'Instagram', review: 'Many people are interested in my skills after seeing my portfolio from Portfolio Maker.', photo: '/images/photo.png', name: 'Andi K'},
    {imgSource: '/icons/whatsapp.svg', source:'Whatsapp', review: 'Many people are interested in my skills after seeing my portfolio from Portfolio Maker', photo: '/images/photo.png', name: 'Cindy W'},
    {imgSource: '/icons/instagram.svg', source:'Instagram', review: 'Many people are interested in my skills after seeing my portfolio from Portfolio Maker', photo: '/images/photo.png', name: 'Budi H'},
  ]
  return (
    <section id='testimonial-section' className='py-20 space-y-16 container mx-auto'>
      <Title
        className='text-center items-center'
        title='What they say about us'
        subtitle='Stories of customer happiness and satisfaction are a reflection of the quality of our service. Their words are proof that your satisfaction is our main mission in building trust with customers.'
      />
      <div className='hidden lg:grid grid-rows-2 divide-y divide-solid'>
        <div className='grid lg:grid-cols-3 divide-x-0 lg:divide-x divide-y lg:divide-y-0 divide-solid'>
          {reviewData.map((item, index) => (<ReviewCard key={index} imgSource={item.imgSource} source={item.source} review={item.review} photo={item.photo} name={item.name}/>))}
        </div>
        <div className='grid lg:grid-cols-3 divide-x-0 lg:divide-x divide-y lg:divide-y-0 divide-solid'>
          {reviewData.map((item, index) => (<ReviewCard key={index} imgSource={item.imgSource} source={item.source} review={item.review} photo={item.photo} name={item.name}/>))}
        </div>
      </div>
      <div className='flex flex-nowrap overflow-auto lg:hidden space-x-2 no-scrollbar'>
        {reviewData.map((item, index) => (
            <ReviewCard key={index} imgSource={item.imgSource} source={item.source} review={item.review} photo={item.photo} name={item.name}/>
        ))}
      </div>
      
    </section>
  )
}

export default Review