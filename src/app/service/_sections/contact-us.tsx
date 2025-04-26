import React from "react";
import { Input } from "@/components/ui/input";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-primary rounded-3xl ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Our Service Team</h2>
        <p className="max-w-2xl mx-auto">
          Have questions or need assistance? Our customer service team is here
          to help
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-background bg-opacity-10 p-6 rounded-xl text-center">
          <Phone className="h-10 w-10 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Call Us</h3>
          <p>+92-123-456-7890</p>
          <p>Available 24/7</p>
        </div>
        <div className="bg-background bg-opacity-10 p-6 rounded-xl text-center">
          <MessageSquare className="h-10 w-10 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Chat With Us</h3>
          <p>Live chat available on our app</p>
          <p>Response time: Under 2 minutes</p>
        </div>
        <div className="bg-background bg-opacity-10 p-6 rounded-xl text-center">
          <MapPin className="h-10 w-10 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Visit Us</h3>
          <p>Food Dash Headquarters</p>
          <p>15, Karachi, Pakistan</p>
        </div>
      </div>

      <div className="bg-background p-8 rounded-xl max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-primary text-center">
          Send Us a Message
        </h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <Input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <Input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Subject</label>
            <Input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <Textarea
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            ></Textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-full font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
