'use client'
import ItemCard from '@/components/molecules/card/card-why-us'
import Title from '@/components/ui/title'

const WhyUs = () => {
  const data = [
    {image: '/icons/guard.svg', title:'Security', desc: 'Security is our priority, we want to maintain peace and comfort when making transactions.'},
    {image: '/icons/cash.svg', title:'Competitive Price', desc: 'Enjoy the best offers from us. Special discounts, attractive bundle packages and limited promotions.'},
    {image: '/icons/support.svg', title:'Friendly', desc: 'We value every interaction and strive to provide the best solution for your needs.'},
    {image: '/icons/guarantee.svg', title:'Warranty', desc: 'We guarantee that your portfolio will be sought after by recruiters.'}
  ]

  return (
    <section id='why-us-section' className='py-20 space-y-16 container mx-auto'>
      <Title className='text-center items-center'
        title='Why did they choose us'
        subtitle='Friendly and professional customer service ensures that every customer feels fully supported.'
      />
      <div className='grid lg:grid-cols-4 gap-6'>
        {data.map((item, index) => (<ItemCard imgSource={item.image} title={item.title} desc={item.desc} key={index}/>))}
      </div>
    </section>
  )
}

export default WhyUs