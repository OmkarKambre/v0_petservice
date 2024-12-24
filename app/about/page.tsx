import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Award, Users, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About PawPerfect</h1>
        <p className="text-purple-200">
          We're passionate about providing the highest quality pet care services. Our team of certified professionals
          is dedicated to ensuring your pets receive the love and attention they deserve.
        </p>
      </div>

      <div className="grid gap-12">
        {/* Values Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We treat every pet as if they were our own"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to the highest standards of pet care"
              },
              {
                icon: Users,
                title: "Community",
                description: "Building lasting relationships with pet owners"
              },
              {
                icon: Shield,
                title: "Safety",
                description: "Your pet's wellbeing is our top priority"
              }
            ].map((value, index) => (
              <Card key={index} className="bg-purple-900/20 border-purple-800">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-purple-200">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Thompson",
                role: "Lead Trainer",
                certifications: ["CPDT-KA", "AKC CGC Evaluator"],
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "Sarah Martinez",
                role: "Head of Pet Care",
                certifications: ["Pet First Aid", "Animal Behavior"],
                image: "/placeholder.svg?height=400&width=400"
              },
              {
                name: "James Wilson",
                role: "Grooming Specialist",
                certifications: ["Master Groomer", "Pet Safety"],
                image: "/placeholder.svg?height=400&width=400"
              }
            ].map((member, index) => (
              <Card key={index} className="bg-purple-900/20 border-purple-800">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.certifications.map((cert, i) => (
                      <Badge key={i} variant="secondary" className="bg-purple-800">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

