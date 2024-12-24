'use client'

import { useState } from 'react'
import { PawPrint } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { subscribeToNewsletter } from "@/app/actions"
import { useToast } from "@/components/ui/use-toast"

export function SiteFooter() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubscribe(formData: FormData) {
    setLoading(true)
    try {
      const result = await subscribeToNewsletter(formData)
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
    <footer className="border-t border-purple-800 bg-black">
      <div className="container py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <PawPrint className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">PawPerfect</span>
            </div>
            <p className="text-sm text-purple-200">
              Professional pet care services for your beloved companions
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>
                <a href="/services" className="hover:text-purple-400">Services</a>
              </li>
              <li>
                <a href="/about" className="hover:text-purple-400">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400">Contact</a>
              </li>
              <li>
                <a href="/book" className="hover:text-purple-400">Book Now</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>Email: info@pawperfect.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Pet Street</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <form action={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-purple-900/20 border-purple-800"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-purple-800 pt-8 text-center text-sm text-purple-200">
          © 2024 PawPerfect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

