import { z } from 'zod'

export const bodySchema = z.object({
  code: z.string(),
})

export const userSchema = z.object({
  id: z.number(),
  login: z.string(),
  name: z.string(),
  avatar_url: z.string().url(),
})
