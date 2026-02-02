import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono().basePath('/api')

const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
})

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!',
  })
})

app.post('/register', zValidator('json', registerSchema), async (c) => {
  const { email, name } = c.req.valid('json')

  // Mock Database Save
  console.log(`[MockDB] Saving registration: ${email} (${name || 'Anonymous'})`)

  // Simulate delay
  await new Promise(r => setTimeout(r, 1000));

  return c.json({
    success: true,
    message: 'Registration successful!',
  })
})

export default app
