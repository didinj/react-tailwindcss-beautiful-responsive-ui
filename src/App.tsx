import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">MyApp</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Build Beautiful UIs Faster with React + Tailwind
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Tailwind CSS helps you create modern, responsive, and customizable
              interfaces without writing a single line of custom CSS.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-12">
              Features That Make Development Easy
            </h3>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">
                  Fast Development
                </h4>
                <p className="text-gray-600">
                  Build UIs quickly with utility-first classes that speed up
                  your workflow.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">
                  Responsive Design
                </h4>
                <p className="text-gray-600">
                  Create mobile-first, responsive layouts without writing media
                  queries.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">
                  Customizable
                </h4>
                <p className="text-gray-600">
                  Tailwind is highly configurable, letting you design unique
                  experiences with ease.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:grid md:grid-cols-2 md:gap-12 items-center">
            {/* Image */}
            <div className="mb-8 md:mb-0">
              <img
                src="https://placehold.co/500x300"
                alt="About MyApp"
                className="rounded-xl shadow-md"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose MyApp?
              </h3>
              <p className="text-gray-600 mb-4">
                MyApp combines the power of React with the simplicity of
                Tailwind CSS to give developers a faster and more enjoyable way
                to build responsive UIs.
              </p>
              <p className="text-gray-600 mb-6">
                With a utility-first approach, you can prototype quickly,
                maintain clean code, and customize the design to match your
                brand with ease.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Next Project?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
              Get started with React and Tailwind today and create modern,
              responsive UIs faster than ever before.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Start Now
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
