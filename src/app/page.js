import Image from "next/image";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full h-[868px] py-[40px] px-[128px]">
        <Navbar />
        <div className="flex justify-center items-center">
          <div className="gap-10">
            <h1 className="mb-8 w-[780px] h-[114px] text-[64px] text-[#1D2939] ">
              Uniting the world,one video call at a time
            </h1>
            <p className="mx-[20px] text-[#667085]">
              Experience the future of communication with ClearLink where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
            <button className="rounded-[100px] bg-[#175CD3] ml-2 border-[#98A2B3] text-white py-[14px] px-[24px]">
              Start your free trial
            </button>
            <button className="rounded-[100px] bg-white ml-2 border-[#98A2B3] text-[#175CD3] py-[14px] px-[24px]">
              Discover AI assistance
            </button>
            <Image src="/reviews.png" width={327} height={52} className="m-4" />
          </div>
          <div>
            <Image src="/hero.png" width={584} height={488} />
          </div>
        </div>
      </div>
    </>
  );
}
