'use client'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, Controller, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'
import { FiPaperclip } from 'react-icons/fi'
import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FaRegImage, FaRegUserCircle } from 'react-icons/fa'
import { CiCirclePlus } from 'react-icons/ci'
import { MdOutlineDeleteForever } from 'react-icons/md'
import axios from 'axios'
import { resizeFile } from '@/lib/base64'
import { useRouter } from 'next/navigation'
import CardPortofolio from '@/components/molecules/card/card-portofolio'

const portofolioSchema = z.object({
  position: z.string().min(2, {
    message: 'Position must at least 2 character'
  }),
  company: z.string().min(2, {
    message: 'Company must at least 2 character'
  }),
  start: z.string().pipe(z.coerce.date()).optional(),
  end: z.string().pipe(z.coerce.date()).optional(),
  description: z.string().min(2, {
    message: 'Description must at least 2 character'
  }),
})

const formSchema = z.object({
  background: z.string({
    required_error: 'Please insert your background image'
  }),
  profile: z.string({
    required_error: 'Please insert your profile image'
  }),
  name: z.string({
    required_error: 'Please insert your name'
  }).min(2, {
    message: 'Name must at lease 2 character'
  }),
  position: z.string({
    required_error: 'Please insert your position'
  }).min(2, {
    message: 'Position must at lease 2 character'
  }),
  description: z.string({
    required_error: 'Please insert your description'
  }).min(2, {
    message: 'Description must at lease 2 character'
  }).max(300, {
    message: 'Description max 300 character'
  }),
  portofolio: z.array(portofolioSchema)
})

type FormSchema = z.infer<typeof formSchema>;
type Portofolio = z.infer<typeof formSchema>['portofolio'][number];

const portofolioInitial: Portofolio[] = [
  { position: '', company: '', start: undefined, end: undefined, description: '' },
];

function Create() {
  const router = useRouter()
  const [recent, setRecent] = useState<any>()
  const [porto, setPorto] = useState<Portofolio[]>(portofolioInitial)
  const [data, setData] = useState<any>({
    background: undefined,
    profile: undefined,
    name: '',
    position: '',
    description: '',
    portofolio: [
      {
        position: '',
        company: '',
        start: new Date(),
        end: new Date(),
      }
    ]
  })

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema, undefined, {
      raw: true
    }),
    // defaultValues: recent ? recent : {
    //   portofolio: porto
    // }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'portofolio'
  })

  const getMyPortofolio = async () => {
    await axios.get('https://65c2eacef7e6ea59682bc798.mockapi.io/api/portofolio/1')
      .then((results) => {
        setData(results.data)
        setRecent(results.data)
        setPorto(results.data.portofolio)
        reset()
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (recent) {
      setValue('background', recent?.background)
      setValue('profile', recent?.profile)
      setValue('name', recent?.name)
      setValue('position', recent?.position)
      setValue('description', recent?.description)
      setValue('portofolio', recent?.portofolio)
    } else {
      getMyPortofolio()
    }
  }, [recent])

  const onSubmit: SubmitHandler<FormSchema> = async (values: z.infer<typeof formSchema>) => {
    recent
      ? await axios.put('https://65c2eacef7e6ea59682bc798.mockapi.io/api/portofolio/1', values)
        .then(() => {
          setData(values)
          router.push('/my-portofolio')
          reset()
        })
        .catch(() => {
          alert('Please check your image, maximum size is 5Mb')
        })
      : await axios.post('https://65c2eacef7e6ea59682bc798.mockapi.io/api/portofolio', values)
        .then(() => {
          setData(values)
          router.push('/my-portofolio')
          reset()
        })
        .catch(() => {
          alert('Please check your image, maximum size is 5Mb')
        })
  }

  const isSubmittable = !!isDirty && !!isValid;

  const handleChangeBackground = async (e: ChangeEvent, onChange: any) => {
    const target = e.target as HTMLInputElement
    const files = (target.files as FileList)[0]

    if (files) {
      const base64 = await resizeFile(files)
      setData({ ...data ,background: base64 })
      onChange(base64)
    }
  }

  const handleChangeProfile = async (e: ChangeEvent, onChange: any) => {
    const target = e.target as HTMLInputElement
    const files = (target.files as FileList)[0]

    if (files) {
      const base64 = await resizeFile(files);
      setData({ ...data, profile: base64 })
      onChange(base64)
    }
  }

  const onDragOver = (e: any) => {
    e.preventDefault();
  }

  const onBackgroundDrop = async (e: any, onChange: any) => {
    e.stopPropagation();
    e.preventDefault()

    const files = e.dataTransfer.files[0]

    if (files) {
      const base64 = await resizeFile(files);
      setData({ ...data, background: base64 })
      onChange(base64)
    }
  }

  const onProfileDrop = async (e: any, onChange: any) => {
    e.stopPropagation();
    e.preventDefault()

    const files = e.dataTransfer.files[0]

    if (files) {
      const base64 = await resizeFile(files);
      setData({ ...data, profile: base64 })
      onChange(base64)
    }
  }

  const getPorto = (recent?.portofolio && !watch('portofolio')) ? recent?.portofolio : watch('portofolio')
  const filedsPorto = (recent?.portofolio && !fields) ? recent?.portofolio : fields

  return (
    <main className='bg-gray-100'>
      <section className='container mx-auto pt-48 pb-40 grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-y-0 gap-x-8'>
        <div className='md:col-span-3 bg-white p-8 rounded-2xl shadow-card'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-[30px]'>
            <div className='space-y-5'>
              <Controller
                control={control}
                name='background'
                render={({ field: { name, onChange, onBlur } }) => (
                  <div
                    onDragOver={onDragOver}
                    onDrop={(e: any) => onBackgroundDrop(e, onChange)}
                  >
                    <span className='block mb-2'>Background Image</span>
                    <label htmlFor='background' className='relative cursor-pointer'>
                      {
                        (data.background || recent?.background) && <Image
                          data-background={data.background !== undefined || recent?.background !== undefined}
                          src={(recent?.background !== undefined && !data.background) ? recent?.background : data.background}
                          id='image-upload'
                          alt='pict'
                          className='rounded-md h-[234px] w-full object-cover data-[background=false]:hidden data-[background=true]:block' 
                          height={0}
                          width={0}
                        />
                      }
                      <div
                        data-background={data.background !== undefined || recent?.background !== undefined}
                        className='h-[234px] w-full rounded-md bg-gray-100 data-[background=false]:block data-[background=true]:hidden'
                      />
                      <div data-background={data.background !== undefined || recent?.background !== undefined}
                        className='absolute top-1/3 inset-x-0 data-[background=false]:block data-[background=true]:hidden'>
                        <div className='flex flex-col justify-center items-center px-4'>
                          <FiPaperclip className='w-6 h-6'/>
                          <div className='mt-2'>
                            <span className='block text-center text-sm underline text-[#6B6B6B]'>
                              Drag and drop files, or Browse
                            </span>
                            <span className='block text-center text-sm underline text-[#9F9F9F]'>
                              Support formats : png, jpg, jpeg
                            </span>
                            <span className='block text-center text-sm underline text-[#9F9F9F]'>
                              Max size : 5Mb
                            </span>
                          </div>
                        </div>
                      </div>
                    </label>
                    <span className='block text-red-500'>{ errors.background?.message }</span>
                    <Input id='background' variant='auth' type='file'
                      className='hidden'
                      name={name}
                      onBlur={onBlur}
                      accept='image/png, image/jpeg, image/jpg'
                      onChange={(e: ChangeEvent) => handleChangeBackground(e, onChange)}
                      { ...register }
                    />
                  </div>
                )}
              />

              <Separator/>

              <Controller
                control={control}
                name='profile'
                render={({ field: { name, onChange, onBlur } }) => (
                  <div
                    onDragOver={onDragOver}
                    onDrop={(e: any) => onProfileDrop(e, onChange)}
                  >
                    <span className='block mb-2'>Profile Image</span>
                    <label htmlFor='profile' className='relative cursor-pointer'>
                      {
                        (data.profile || recent?.profile) && <Image
                          data-background={data.profile !== undefined || recent?.profile !== undefined}
                          src={(recent?.profile && !data.profile) ? recent?.profile : data.profile}
                          id='image-upload'
                          alt='pict'
                          className='rounded-md h-[234px] w-full object-cover data-[background=false]:hidden data-[background=true]:block' 
                          height={0}
                          width={0}
                        />
                      }
                      <div
                        data-background={data.profile !== undefined || recent?.profile !== undefined}
                        className='h-[234px] w-full rounded-md bg-gray-100 data-[background=false]:block data-[background=true]:hidden'
                      />
                      <div data-background={data.profile !== undefined || recent?.profile !== undefined}
                        className='absolute top-1/3 inset-x-0 data-[background=false]:block data-[background=true]:hidden'>
                        <div className='flex flex-col justify-center items-center px-4'>
                          <FiPaperclip className='w-6 h-6'/>
                          <div className='mt-2'>
                            <span className='block text-center text-sm underline text-[#6B6B6B]'>
                              Drag and drop files, or Browse
                            </span>
                            <span className='block text-center text-sm underline text-[#9F9F9F]'>
                              Support formats : png, jpg, jpeg
                            </span>
                            <span className='block text-center text-sm underline text-[#9F9F9F]'>
                              Max size : 5Mb
                            </span>
                          </div>
                        </div>
                      </div>
                    </label>
                    <span className='block text-red-500'>{ errors.profile?.message }</span>
                    <Input id='profile' variant='auth' type='file'
                      className='hidden'
                      name={name}
                      onBlur={onBlur}
                      accept='image/png, image/jpeg, image/jpg'
                      onChange={(e: ChangeEvent) => handleChangeProfile(e, onChange)}
                      { ...register }
                    />
                  </div>
                )}
              />

              <Separator/>

              <div>
                <span className='block mb-2'>Profile</span>
                <div className='space-y-5'>
                  <Controller
                    control={control}
                    name='name'
                    render={({ field: { name, onChange } }) => (
                      <div>
                        <Input
                          variant='auth'
                          name={name}
                          defaultValue={recent?.name && recent?.name}
                          placeholder='Name'
                          onChange={onChange}
                          className={errors.name?.message && 'border-red-500'}
                        />
                        <span className='block text-red-500'>{ errors.name?.message }</span>
                      </div>
                    )}
                  />
                  <Controller
                    control={control}
                    name='position'
                    render={({ field: { name, onChange } }) => (
                      <div>
                        <Input
                          variant='auth'
                          name={name}
                          placeholder='Position'
                          defaultValue={recent?.position && recent?.position}
                          onChange={onChange}
                          className={errors.position?.message && 'border-red-500'}
                        />
                        <span className='block text-red-500'>{ errors.position?.message }</span>
                      </div>
                    )}
                  />
                  <Controller
                    control={control}
                    name='description'
                    render={({ field: { name, onChange } }) => (
                      <div>
                        <Input
                          variant='auth'
                          name={name}
                          placeholder='Description'
                          defaultValue={recent?.description && recent?.description}
                          onChange={onChange}
                          className={errors.position?.message && 'border-red-500'}
                        />
                        <span className='block text-red-500'>{ errors.description?.message }</span>
                      </div>
                    )}
                  />
                </div>
              </div>

              <Separator/>

              <div>
                <div className='flex justify-between'>
                  <h1 className='font-bold text-lg'>Add Your Portofolio</h1>
                  <Button
                    onClick={() => append({ position: '', company: '', start: undefined, end: undefined, description: '' })}
                    type='button'
                  >
                    <CiCirclePlus className='h-6 w-6 mr-2'/>
                    Add More
                  </Button>
                </div>
                <div className='space-y-8 mt-8'>
                  {
                    filedsPorto?.map((field: any, index: number) => {
                      const errorPosition = errors?.portofolio?.[index]?.position
                      const errorCompany = errors?.portofolio?.[index]?.company
                      const errorStart = errors?.portofolio?.[index]?.start
                      const errorEnd = errors?.portofolio?.[index]?.end
                      const errorDesc = errors?.portofolio?.[index]?.description
                      return (
                        <div key={index}>
                          <div className='flex items-center justify-between'>
                            <span className='block mb-2'>Portofolio { index + 1 }</span>
                            <MdOutlineDeleteForever onClick={() => remove(index)} className='h-6 w-auto text-red-600 cursor-pointer' />
                          </div>
                          <div className='space-y-5'>
                            <div>
                              <Input
                                variant='auth'
                                placeholder='Position'
                                defaultValue={recent?.portofolio && field.position}
                                className={errorPosition?.message && 'border-red-500'}
                                {...register(`portofolio.${index}.position` as const)}
                              />
                              <span className='block text-red-500'>{ errorPosition?.message }</span>
                            </div>
                            <div>
                              <Input
                                variant='auth'
                                placeholder='Company'
                                defaultValue={recent?.portofolio && field.company}
                                className={errorCompany?.message && 'border-red-500'}
                                {...register(`portofolio.${index}.company` as const)}
                              />
                              <span className='block text-red-500'>{ errorCompany?.message }</span>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                              <div>
                                <Input
                                  variant='auth'
                                  type='date'
                                  placeholder='Start Date'
                                  defaultValue={recent?.portofolio && field.start}
                                  className={errorStart?.message && 'border-red-500'}
                                  {...register(`portofolio.${index}.start` as const)}
                                />
                                <span className='block text-red-500'>{ errorStart?.message }</span>
                              </div>
                              <div>
                                <Input
                                  variant='auth'
                                  type='date'
                                  placeholder='End Date'
                                  defaultValue={recent?.portofolio && field.end}
                                  className={errorEnd?.message && 'border-red-500'}
                                  {...register(`portofolio.${index}.end` as const)}
                                />
                                <span className='block text-red-500'>{ errorEnd?.message }</span>
                              </div>
                            </div>
                            <div>
                              <Input
                                variant='auth'
                                placeholder='Description'
                                defaultValue={recent?.portofolio && field.description}
                                className={errorDesc?.message && 'border-red-500'}
                                {...register(`portofolio.${index}.description` as const)}
                              />
                              <span className='block text-red-500'>{ errorDesc?.message }</span>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <Button
              type='submit'
              // variant={!isSubmittable ? 'disabled' : 'default'}
              className='flex gap-3 w-full lg:w-fit'
              // disabled={!isSubmittable}
            >
              Save Changes
            </Button>
          </form>
        </div>
        <div className='md:col-span-2 bg-white rounded-2xl shadow-card'>
          {
            (data.background || recent?.background) 
              ? <Image
                  src={(recent?.background && !data.background) ? recent?.background : data.background}
                  alt='background'
                  height={0}
                  width={0}
                  className='w-full h-[200px] object-cover rounded-t-2xl'
                />
              : <div className='w-full h-[200px] bg-gray-100 rounded-t-2xl flex items-center justify-center'>
                  <FaRegImage className='h-24 w-24 text-gray-400' />
                </div>
          }
          <div className='flex justify-center -mt-14'>
            {
              (data.profile || recent?.profile)
                ? <Image
                    src={(recent?.profile && !data.profile) ? recent?.profile : data.profile}
                    alt='profile'
                    height={0}
                    width={0}
                    className='w-[100px] h-[100px] object-cover rounded-full shadow-card'
                  />
                : <div className='w-[100px] h-[100px] bg-gray-100 rounded-full shadow-card flex items-center justify-center'>
                    <FaRegUserCircle className='w-[100px] h-[100px] text-gray-400' />
                  </div>
            }
          </div>
          <div className='px-8 py-6'>
            <div className='flex flex-col items-center text-center'>
              <h1 className='font-bold text-xl'>
                { (recent?.name && !watch('name')) ? recent?.name : watch('name') ? watch('name') : 'Name' }
              </h1>
              <h2 className='font-light'>
                { (recent?.position && !watch('position')) ? recent?.position : watch('position') ? watch('position') : 'Position' }
              </h2>
              <span className='block font-light text-sm'>
                { (recent?.description && !watch('description')) ? recent?.description : watch('description') ? watch('description') : 'Description' }
              </span>
            </div>
            <div className='mt-8'>
              <h1 className='font-bold'>
                Portofolio
              </h1>
              <div className='mt-4 space-y-8'>
                {
                  getPorto?.map((item: any, index: number) => (
                    <CardPortofolio
                      key={index}
                      position={item.position}
                      company={item.company}
                      start={item.start}
                      end={item.end}
                      description={item.description}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Create
