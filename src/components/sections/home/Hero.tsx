"use client";

export default function HeroSection() {
  return (
    <section className="h-[100vh] bg-background relative z-40">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="text-center px-6 sm:px-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
            Hendra Aditya Pratama
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-400">
            Frontend Developer
          </p>
        </div>
      </div>
    </section>
  );
}
