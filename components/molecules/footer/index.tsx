import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      id='footer'
      className='mt-32 container lg:max-w-[1116px] lg:mx-auto'
    >
      <div className='flex flex-col'>
        <span className='flex leading-4 text-xl font-bold'>
          <span className='block text-primary'>Porto</span>folio
        </span>
        <span className='block leading-4 font-light'>
          Maker
        </span>
      </div>
      <div className='mt-6 lg:mt-9 grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0'>
        <div>
          <h4 className='text-base font-bold leading-6 text-neutral-black letter tracking-wide'>
            Information
          </h4>
          <ul className='mt-4 space-y-2 lg:space-y-4 text-neutral-grey cursor-pointer'>
            <li>
              <h4 className='text-base font-normal leading-6 letter tracking-wide'>
                Home
              </h4>
            </li>
            <li>
              <h4 className='text-base font-normal leading-6 letter tracking-wide'>
                Produk
              </h4>
            </li>
            <li>
              <h4 className='text-base font-normal leading-6 letter tracking-wide'>
                FAQ
              </h4>
            </li>
            <li>
              <h4 className='text-base font-normal leading-6 letter tracking-wide'>
                Kebijakan Privasi
              </h4>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-base font-bold leading-6 text-neutral-black letter tracking-wide'>
            Services
          </h4>
          <ul className='mt-4 space-y-2 lg:space-y-4 text-neutral-grey cursor-pointer'>
            <li>
              <h4 className='text-base font-normal leading-6 letter tracking-wide'>
                Lokasi Toko
              </h4>
            </li>
            <li>
              <h4 className='text-base font-normal leading-6 letter tracking-wide'>
                Kebijakan Garansi
              </h4>
            </li>
            <li>
              <h4 className='text-base font-normal leading-6 letter tracking-wide'>
                Pembatalan Transaksi
              </h4>
            </li>
            <li>
              <h4 className='text-base font-normal leading-6 letter tracking-wide'>
                Hubungi Kami
              </h4>
            </li>
          </ul>
        </div>
        <div>
          <div className='mt-2'>
            <h4 className='text-base font-bold mt-6 leading-6 text-neutral-black letter tracking-wide'>
              Follow Us
            </h4>
            <div className='flex items-center space-x-2 mt-[6px]'>
              <Image
                src='/icons/instagram-black.svg'
                alt='instagram'
                title='instagram'
                height={24}
                width={24}
              />
              <Image
                src='icons/fb-black.svg'
                alt='facebook'
                title='facebook'
                height={24}
                width={24}
              />
              <Image
                src='/icons/twitter-black.svg'
                alt='twitter'
                title='twitter'
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10 lg:mt-16 mb-6'>
        <h4 className='font-normal text-base leading-6 tracking-wide text-center text-neutral-black'>
          Copyright {new Date().getFullYear()} Portofolio Maker. All rights reserved. Design by
          <span className='text-primary'>
            <Link href='https://fanani.codenode.id/' target='_blank'>
              {' '}
              Ahmad Fanani
            </Link>
          </span>
          .
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
