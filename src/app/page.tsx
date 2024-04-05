// page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">
      {/* Navigation at the top */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-10">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-lg font-semibold text-gray-800 dark:text-white">Raf's Portfolio</a>
          <div className="flex items-center">
            <a href="#about" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#projects" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
            <a href="#blog" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
            <a href="#ventures" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Ventures</a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto my-12 px-6">
  {/* Hero Section - Introduction about yourself */}
  <header className="text-center py-10">
    <h1 className="text-4xl font-bold dark:text-white">Hello, I'm Raf</h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">A Developer's Portfolio</p>
  </header>

  {/* Portfolio Projects Section */}
  <section id="projects" className="my-20">
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {/* Project 1 */}
      <div className="group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
        <Image
          src="vercel.svg" // Replace with your project image
          alt="Project 1"
          width={400}
          height={225}
          className="w-full"
          layout="responsive"
          priority
        />
        <div className="p-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Project 1 <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">A brief description of Project 1, what challenges you faced, and how you solved them.</p>
        </div>
      </div>
      {/* Repeat blocks for other projects */}
    </div>
  </section>

  {/* Contact Section */}
  {/* ... */}
</div>

      {/* Sections */}
      <section id="about" className="my-40">
        {/* About Me content */}
      </section>
      <section id="projects" className="my-40">
        {/* Projects content */}
      </section>
      <section id="blog" className="my-40">
        {/* Blog content */}
      </section>
      <section id="ventures" className="my-40">
        {/* Ventures content */}
      </section>

      {/* Footer with Vercel promotion */}
      <div className="fixed bottom-0 left-0 right-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white to-transparent dark:from-black dark:to-transparent lg:relative lg:h-auto lg:bg-none">
        <a
          className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </main>
  );
}
