import Review from '@/components/organisms/review';
import WhyUs from '@/components/organisms/why-us';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Title from '@/components/ui/title'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section id='hero-section' className='pt-24 lg:pt-48 pb-40 bg-gray-100'>
        <div className='container mx-auto flex space-x-10'>
          <div className='basis-full lg:basis-1/2 pt-36'>
            <Title
              section='hero'
              title='Portofolio Maker'
              subtitle='Create and make your own portofolio'
            />
            <div className='mt-10'>
              <Link href='/create'>
                <Button>
                  Start Now
                </Button>
              </Link>
            </div>
            <div className='mt-20 bg-gray-50 rounded-3xl py-2 px-4 lg:py-6 lg:px-10 h-full max-h-28 flex items-center space-x-2 justify-between'>
              <Title
                section='indicator'
                title='10K'
                subtitle='Portofolio Make'
              />
              <Separator orientation='vertical' />
              <Title
                section='indicator'
                title='10K'
                subtitle='Portofolio Make'
              />
              <Separator orientation='vertical' />
              <Title
                section='indicator'
                title='10K'
                subtitle='Portofolio Make'
              />
            </div>
          </div>
          <div className='basis-1/2 lg:flex flex-col hidden'>
            <Image
              src='/images/hero-1.svg'
              alt='hero'
              height={0}
              width={0}
              className='w-full h-full'
            />
          </div>
        </div>
      </section>

      <WhyUs/>
      <Review/>
    </main>
  );
}
