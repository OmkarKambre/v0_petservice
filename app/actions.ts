'use server'

import { revalidatePath } from 'next/cache'

export async function bookService(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  
  const name = formData.get('name')
  const email = formData.get('email')
  const service = formData.get('service')
  const date = formData.get('date')
  const notes = formData.get('notes')
  
  // Here you would typically save to a database
  console.log('Booking received:', { name, email, service, date, notes })
  
  revalidatePath('/book')
  
  return {
    message: 'Booking request received! We will contact you shortly.',
  }
}

export async function subscribeToNewsletter(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get('email')
  
  // Here you would typically save to a database or send to an email service
  console.log('Newsletter subscription:', email)
  
  return {
    message: 'Thank you for subscribing to our newsletter!',
  }
}

export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  // Here you would typically save to a database or send an email
  console.log('Contact form submission:', { name, email, message })

  return {
    message: 'Thank you for your message. We will get back to you soon!',
  }
}

