import Image from "next/image"

const DocsInfo = () => {
  return (
    <div className="bg-dkblue">
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl text-center mb-10">Live Docs Application</h2>

        {/* Latest Project */}
        <article className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div className="text text-right order-1 md:order-2">
            <h4 className="text-lg mb-3">Document Sharing</h4>

            <p className="bg-black p-4 rounded-xl text-white text-base">
              Live Docs is a dynamic platform that allows users to seamlessly
              share and collaborate on documents in real-time. It enables users
              to create, edit, and manage documents effortlessly while providing
              a smooth and interactive experience for collaboration.
            </p>
          </div>
          <div className="order-2 md:order-1">
            <Image
              src="/assets/images/docsimages.png"
              alt="Live Docs Application"
              width={400}
              height={240}
              className="w-auto h-auto rounded-lg border border-aqua transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </article>

        {/* Part 2 of Live Docs */}
        <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text text-left order-2 md:order-1">
            <h4 className="text-lg mb-3">Notifications & Chatbot</h4>

            <p className="bg-black p-4 rounded-xl text-white text-base">
              Along with document sharing, Live Docs includes a built-in chatbot
              to assist users in resolving issues and answering queries while
              they work. Additionally, the platform provides notifications to
              keep users updated on document changes made by collaborators.
            </p>
            <h4 className="text-lg mt-4">Technologies used include:</h4>
            <ul className="list-none p-0 m-0">
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/assets/images/funstudy.png"
              alt="Live Docs Notifications & Chatbot"
              width={400}
              height={240}
              className="w-auto h-auto rounded-lg border border-aqua transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </article>
      </section>
    </div>
  )
}

export default DocsInfo
