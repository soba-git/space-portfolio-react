import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hello, I am</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Wade</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Simpson</span>
                    </h1> 
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I build secure and engaging applications focused on usability and performance. I specialize in Python, Java, TypeScript/JavaScript, and Go, with experience in web, SAAS, and modern scalable solutions.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-6">
                        <a href="#projects" className="space-button mx-auto gap-2 w-fit flex items-center" >
                            View My Work
                        </a>    
                    </div>
                </div> 
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="mt-2 h-6 w-6 text-primary"/>
            </div>

        </section>
    );
};