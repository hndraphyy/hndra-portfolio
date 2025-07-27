"use client";

export default function AboutSection() {
  return (
    <section className="bg-background text-text-primary py-24 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-6">
          Tentang Saya
        </h2>
        <p className="text-white sm:text-lg text-text-muted leading-relaxed">
          Saya adalah Frontend Developer yang fokus pada pengalaman pengguna, desain UI yang rapi, dan kinerja tinggi. 
          Saat ini saya membangun aplikasi web modern dengan teknologi seperti <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Next.js</span>, dan <span className="text-white font-medium">Tailwind CSS</span>.  
          Saya percaya bahwa desain yang baik adalah kombinasi antara keindahan visual dan kejelasan fungsional.
        </p>
      </div>
    </section>
  );
}
