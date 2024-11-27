import Image from "next/image"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Me</h1>

        <div className="flex justify-center mb-8">
          <Image
            src="/public/assets/images/kriti_photo.jpg" // Update this path to your image
            alt="Your Name"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-500"
          />
        </div>

        <p className="text-lg text-gray-700 mb-4">
          Hi there! Im{"  "}
          <span className="font-semibold text-blue-600">Kriti Mahajan</span>, a
          passionate developer who loves to build web applications using modern
          technologies like Next.js, React, TypeScript, and Tailwind CSS.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          I specialize in creating beautiful, responsive, and user-friendly web
          experiences. My journey began with learning how websites work, and now
          I enjoy crafting innovative solutions that solve real-world problems.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Technologies I Love
        </h2>
        <ul className="grid grid-cols-2 gap-4 text-lg text-gray-700">
          <li className="bg-blue-100 p-2 rounded-lg">Next.js</li>
          <li className="bg-blue-100 p-2 rounded-lg">React</li>
          <li className="bg-blue-100 p-2 rounded-lg">TypeScript</li>
          <li className="bg-blue-100 p-2 rounded-lg">Tailwind CSS</li>
          <li className="bg-blue-100 p-2 rounded-lg">Node.js</li>
          <li className="bg-blue-100 p-2 rounded-lg">GraphQL</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          My Philosophy
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          I believe that technology should serve people, not the other way
          around. My goal is to make apps that are both powerful and easy to
          use. Im constantly learning and adapting to new tools, and I believe
          in writing clean, maintainable code that others can easily understand
          and contribute to.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Lets Connect
        </h2>
        <p className="text-lg text-gray-700">
          Im always open to new opportunities and connections. Feel free to
          reach out if you want to collaborate or just chat about tech!
        </p>
        <div className="mt-6">
          <a
            href="mailto:mahajankriti672@gmail.com" // Update this with your email
            className="text-white bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
