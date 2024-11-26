import AddDocumentBtn from "@/components/AddDocumentBtn"
import { DeleteModal } from "@/components/DeleteModal"
import Header from "@/components/Header"
import Notifications from "@/components/Notifications"
import { getDocuments } from "@/lib/actions/room.actions"
import { dateConverter } from "@/lib/utils"
import { SignedIn, UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import Footer from "@/components/Footer" // Import Footer
import DocsInfo from "@/components/docsInfo"

const Home = async () => {
  const clerkUser = await currentUser()
  if (!clerkUser) redirect("/sign-in")

  const roomDocuments = await getDocuments(
    clerkUser.emailAddresses[0].emailAddress
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header className="sticky left-0 top-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white py-4 shadow-md z-50">
        {" "}
        <div className="flex items-center justify-between px-6">
          <h1 className="text-lg md:text-xl font-bold flex items-center gap-2">
            Hello,{" "}
            <span className="text-yellow-300">
              {clerkUser.firstName || "User"}!
            </span>
            <span className="wave-emoji">👋</span>
          </h1>
          <div className="flex items-center gap-4">
            <Notifications />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </Header>

      {/* Content Section */}
      <main className="flex-grow gap-3 my-8">
        {roomDocuments.data.length > 0 ? (
          <div className="document-list-container">
            <div className="document-list-title">
              <h3 className="text-28-semibold">All documents</h3>
              <AddDocumentBtn
                userId={clerkUser.id}
                email={clerkUser.emailAddresses[0].emailAddress}
              />
            </div>
            <ul className="document-ul">
              {roomDocuments.data.map(({ id, metadata, createdAt }: any) => (
                <li key={id} className="document-list-item">
                  <Link
                    href={`/documents/${id}`}
                    className="flex flex-1 items-center gap-4"
                  >
                    <div className="hidden rounded-md bg-dark-500 p-2 sm:block">
                      <Image
                        src="/assets/icons/doc.svg"
                        alt="file"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="line-clamp-1 text-lg">{metadata.title}</p>
                      <p className="text-sm font-light text-blue-100">
                        Created about {dateConverter(createdAt)}
                      </p>
                    </div>
                  </Link>
                  <DeleteModal roomId={id} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="document-list-empty flex  items-center ml-96">
            {/* Text and Button on the Left */}
            <div className="flex flex-col items-start mr-8">
              {" "}
              {/* Adding margin-right to add space */}
              <p className="text-lg font-medium mt-8">
                No documents here yet! 🌟
              </p>
              <AddDocumentBtn
                userId={clerkUser.id}
                email={clerkUser.emailAddresses[0].emailAddress}
              />
            </div>

            {/* SVG Image on the Right with Animation */}
            <div className="animate-bounce mt-8">
              <Image
                src="/assets/icons/header-img.svg" // Replace with your desired SVG
                alt="Empty Doc"
                width={150}
                height={150}
                className="transform scale-110 transition-all duration-600 hover:scale-125"
              />
            </div>
          </div>
        )}
      </main>
      <DocsInfo />
      <Footer />
    </div>
  )
}

export default Home
