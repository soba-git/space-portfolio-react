import { Mail, Map, Linkedin, Github, Phone, Send } from "lucide-react";

export const ContactMe = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities so feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <div className="flex flex-col justify-center h-full">
            <div className="space-y-6 flex flex-col justify-center h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">Email Address</h4>
                    <a
                      href="mailto:wadesimpson2003@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      wadesimpson2003@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">Phone Number</h4>
                    <a
                      href="tel:+27632660530"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +27 63 266 0530
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">GitHub</h4>
                    <a
                      href="https://github.com/soba-git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/wadesimpson
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/wade-simpson-8736b3293/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/wade-simpson
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Map className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">Location</h4>
                    <span className="text-muted-foreground">Stellenbosch, South Africa</span>
                  </div>
                </div>
              </div>
            
              <div className="flex-1" />
            </div>
          </div>


          <div className="flex flex-col justify-center h-full">
            <div className="bg-card rounded-xl shadow-lg p-8 flex flex-col justify-center h-full">
              <h3 className="text-2xl font-semibold mb-6">Send Me A Message</h3>
              <form
                className="space-y-4"
                // TODO: Replace with your Formspree endpoint" 
                method="POST"
              >
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your Message..."
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-colors w-full"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-2 text-left">
                * This form uses <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="underline">Formspree</a> for secure delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};