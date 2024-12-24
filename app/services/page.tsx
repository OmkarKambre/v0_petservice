import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PawPrint, Heart, Clock, Shield, Bath, ScissorsIcon as Cut, Car, CrossIcon as MedicalCross } from 'lucide-react'

const services = [
  {
    icon: PawPrint,
    title: "Dog Walking",
    description: "Professional dog walking services tailored to your pet's needs",
    price: "$25/hour",
    features: ["Individual or group walks", "Flexible scheduling", "GPS tracking", "Post-walk report"]
  },
  {
    icon: Heart,
    title: "Pet Sitting",
    description: "In-home pet sitting for when you're away",
    price: "$50/day",
    features: ["Feeding and medication", "Daily updates", "Home security", "Plant care included"]
  },
  {
    icon: Clock,
    title: "Day Care",
    description: "Supervised day care for social pets",
    price: "$35/day",
    features: ["Socialization", "Playtime", "Training reinforcement", "Webcam access"]
  },
  {
    icon: Shield,
    title: "Training",
    description: "Professional pet training services",
    price: "From $75/session",
    features: ["Behavior modification", "Puppy training", "Group classes", "Private sessions"]
  },
  {
    icon: Bath,
    title: "Grooming",
    description: "Complete pet grooming services",
    price: "From $45",
    features: ["Bath and brush", "Nail trimming", "Ear cleaning", "Style trimming"]
  },
  {
    icon: Car,
    title: "Pet Transport",
    description: "Safe and comfortable pet transportation",
    price: "$30/trip",
    features: ["Vet appointments", "Airport pickup", "Climate controlled", "Licensed drivers"]
  }
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-purple-200 max-w-2xl mx-auto">
          We offer a comprehensive range of pet care services to keep your furry friends happy and healthy
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="bg-purple-900/20 border-purple-800">
            <CardHeader>
              <service.icon className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="text-purple-200">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-purple-400 mb-4">{service.price}</p>
              <ul className="space-y-2 text-sm text-purple-200">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

