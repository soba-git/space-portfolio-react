import { Code, Brain, Cloud } from "lucide-react";


export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Passionate Software Engineer</h3>

            <p className="text-muted-foreground">
              I'm Wade, a dedicated software engineer with a passion for crafting efficient and user-friendly applications.
            </p>

            <p className="text-muted-foreground">
              I specialize in building web applications using modern technologies like React, TypeScript, and Node.js.
              My goal is to create seamless user experiences while maintaining clean and efficient code.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center">
              <a href="#contact" className="space-button">
                Contact Me
              </a>

              <a
                href="/cv/Wade Simpson_CV.pdf"
                download="Wade_Simpson_CV.pdf"
                className="space-button-light"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 md:mt-0">
            <div className="grid grid-cols-1 gap-6 mt-8 md:mt-0">
              {/* Full-Stack Development */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Code className="text-primary h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                    <p className="text-muted-foreground">Building end-to-end applications from backend systems to sleek user interfaces.</p>
                  </div>
                </div>
              </div>

              {/* AI/ML Solutions */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Brain className="text-primary h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">AI & ML Solutions</h4>
                    <p className="text-muted-foreground">Developing intelligent, data-driven applications that learn, adapt, and evolve.</p>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Cloud className="text-primary h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                    <p className="text-muted-foreground">Deploying, scaling, and automating applications in modern cloud environments.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};