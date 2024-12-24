import { BookingForm } from "@/components/booking-form"

export default function BookPage() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Book a Service</h1>
          <p className="text-purple-200">
            Schedule a service for your pet. We'll get back to you within 24 hours to confirm your booking.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  )
}

