'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { bookService } from '@/app/actions'
import { useToast } from "@/components/ui/use-toast"

export function BookingForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    try {
      const result = await bookService(formData)
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
    <Card className="bg-purple-900/20 border-purple-800">
      <CardContent className="p-6">
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
            <Label htmlFor="service">Service</Label>
            <Select name="service" required>
              <SelectTrigger className="bg-purple-900/20 border-purple-800">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="walking">Dog Walking</SelectItem>
                <SelectItem value="sitting">Pet Sitting</SelectItem>
                <SelectItem value="daycare">Day Care</SelectItem>
                <SelectItem value="training">Training</SelectItem>
                <SelectItem value="grooming">Grooming</SelectItem>
                <SelectItem value="transport">Pet Transport</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              required
              className="bg-purple-900/20 border-purple-800"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              className="bg-purple-900/20 border-purple-800"
              placeholder="Tell us about your pet and any special requirements"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Book Service"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

