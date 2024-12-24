'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from '@/app/actions'
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    try {
      const result = await submitContactForm(formData)
      toast({
        title: "Success!",
        description: result.message,
      })
      // Reset form
      const form = document.querySelector('form') as HTMLFormElement
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-12">
      <Card className="max-w-2xl mx-auto bg-purple-900/20 border-purple-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                className="bg-purple-900/20 border-purple-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-purple-900/20 border-purple-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                className="bg-purple-900/20 border-purple-800"
                rows={5}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

