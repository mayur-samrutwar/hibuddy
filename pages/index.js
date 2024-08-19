import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-between">
      <div className="mt-10 text-[#FF4D5F] font-bold text-3xl">Hellove</div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex">
          <img src="girl.jpg" className="rounded-xl border-4 transform -rotate-12  w-[125px] h-[125px]" />
          <img src="boy.jpg" className="rounded-xl border-4 transform rotate-12  w-[125px] h-[125px]" />
        </div>
        <p className="text-gray-400 text-sm mt-8">Chat with your AI Partner</p>
      </div>
      <div className="w-full mb-20 px-10">
        <Link href="/select">
        <button className="bg-[#FF4D5F] text-white text-sm font-medium py-3 w-full rounded-xl">
          Start Chatting
        </button></Link>
      </div>
    </div>
  );
}
