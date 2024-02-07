import { z } from 'zod'

export const portofolioSchema = z.object({
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

export const formSchema = z.object({
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

export type FormSchema = z.infer<typeof formSchema>;
export type Portofolio = z.infer<typeof formSchema>['portofolio'][number];