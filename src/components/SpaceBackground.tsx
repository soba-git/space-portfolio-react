import { useEffect, useState } from "react";

// Define a type for a star
type Star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
};

// Define a type for a meteor (extends Star, adds delay)
type Meteor = Star & {
    delay: number;
};

export const SpaceBackground = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    const generateStars = () => {
        const starNum = Math.floor(window.innerWidth * window.innerHeight / 8000);
        const newStars: Star[] = [];
        for (let i = 0; i < starNum; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 4 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 1,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const meteorNum = 6;
        const newMeteors: Meteor[] = [];
        for (let i = 0; i < meteorNum; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 15,
                opacity: 1,
                animationDuration: Math.random() * 3 + 3,
                delay: Math.random() * 10,
            });
        }
        setMeteors(newMeteors);
    };

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        left: star.x + "%",
                        top: star.y + "%",
                        width: star.size + "px",
                        height: star.size + "px",
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor opacity-0"
                    style={{
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        width: (meteor.size * 50) + "px",
                        height: (meteor.size * 1.25) + "px",
                        opacity: meteor.opacity,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.animationDuration}s`
                    }}
                />
            ))}
        </div>
    );
};