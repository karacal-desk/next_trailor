import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            Why Choose ASHAA? The Best Dress Design School
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals with years of experience",
              },
              {
                title: "Hands-on Training",
                description:
                  "Get practical experience with state-of-the-art equipment",
              },
              {
                title: "Industry Connections",
                description:
                  "Network with fashion houses and potential employers",
              },
              {
                title: "Flexible Schedule",
                description:
                  "Choose from day and evening classes to fit your lifestyle",
              },
              {
                title: "Career Support",
                description:
                  "Receive guidance on job placements and entrepreneurship",
              },
              {
                title: "Recognized Certification",
                description:
                  "Earn certificates recognized by the fashion industry",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            Tools and Accessories Provided
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Sewing Machine",
              "Scissors",
              "Measuring Tape",
              "Fabric Chalk",
              "Pins and Needles",
              "Thimble",
              "Iron",
              "Mannequin",
            ].map((tool) => (
              <div
                key={tool}
                className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  {tool}
                </h3>
                <p className="text-gray-600">Essential for your training</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            Our Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Tailoring Course",
                duration: "6 months",
                fee: "₹2000/month",
              },
              {
                name: "Basic Embroidery Course",
                duration: "3 months",
                fee: "₹1500/month",
              },
              {
                name: "Diploma in Tailoring and Dress Designing",
                duration: "1 year",
                fee: "₹25000/year",
              },
              {
                name: "Short-term Fun Courses",
                duration: "3 months",
                fee: "₹1800/month",
              },
              {
                name: "Recycle & Reuse Old Clothes",
                duration: "3 months",
                fee: "₹1700/month",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-primary">{course.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p>
                    <strong>Fee:</strong> {course.fee}
                  </p>
                  <Button className="mt-4 w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">
            Launch Your Fashion Career
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Start your professional journey in the fashion industry after
            completing any of our courses. The possibilities are endless!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Open your own boutique", icon: "🏪" },
              { title: "Become a fashion designer", icon: "👗" },
              { title: "Work with leading brands", icon: "🏢" },
              { title: "Offer alteration services", icon: "🧵" },
              { title: "Teach fashion and design", icon: "👩‍🏫" },
              { title: "Start an online clothing store", icon: "🛍️" },
            ].map((opportunity, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="flex flex-col items-center justify-center h-full p-6">
                  <span className="text-4xl mb-4">{opportunity.icon}</span>
                  <h3 className="font-semibold text-lg text-primary">
                    {opportunity.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
