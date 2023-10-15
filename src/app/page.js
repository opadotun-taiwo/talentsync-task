import Image from "next/image";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full h-[600px] pt-[40px] px-[128px]">
        <Navbar />
        <div className="flex justify-center items-center my-[100px]">
          <div className="gap-10">
            <h1 className="text-[64px] text-[#1D2939] font-[600px]">
              Uniting the world,one video call at a time
            </h1>
            <p className="my-[20px] text-[#667085] font-normal leading-[32px]">
              Experience the future of communication with ClearLink <br /> where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
            <div className="flex items-center my-10">
              <button className="rounded-[100px] bg-[#175CD3] ml-2 border-[#98A2B3] text-white py-[14px] px-[24px]">
                Start your free trial
              </button>
              <button className="rounded-[100px] bg-white ml-2 border-[#98A2B3] text-[#175CD3] py-[14px] px-[24px]">
                <div className="flex justify-center items-center gap-4">
                  <Image src="/discover.png" width={30} height={30} />
                  Discover AI assistance
                </div>
              </button>
            </div>
            <Image src="/reviews.png" width={327} height={52} className="m-4" />
          </div>
          <div>
            <Image src="/hero.png" width={784} height={688} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-[100px] py-[96px] my-[96px]">
        <p className="h-[30px] text-[#475467] text-[20px] text-center py-[60px]">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <Image
          src="/brands.png"
          width={1000}
          height={43}
          className="cursor-pointer"
        />
      </div>

      <div className="py-[96px] px-[160px]">
        <div className="mb-[80px]">
          <p className="text-[#175CD3] text-[18px]">The clear link Advantage</p>
          <h1 className="my-[20px] text-[#1D2939] text-[48px] font-semibold">
            Why choose clear link?
          </h1>
          <p className="text-[24px] text-[#667085]">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>

        <div className="absolute top-[1270px] right-[261px]">
          <Image src="/Hand-drawn.png" width={238.234} height={157.324} />
        </div>

        <div className="flex justify-between items-center">
          <div className="grid grid-rows-2 grid-flow-col gap-x-[60px] gap-y-[40px] p-4">
            <div>
              <Image src="/zap.png" width={32} height={32} />
              <h2 className="text-[#101828] my-2 font-semibold text-[24px]">
                Crystal-clear HD video
              </h2>
              <p className="text-[#475467] text-[18px]">
                No more pixelation or blurriness just stunning, lifelike clarity
                that brings your team closer in meetings.
              </p>
            </div>
            <div>
              <Image src="/zap3.png" width={32} height={32} />
              <h2 className="text-[#101828] my-2 font-semibold text-[24px]">
                Crystal-clear HD video
              </h2>
              <p className="text-[#475467] text-[18px]">
                No more pixelation or blurriness just stunning, lifelike clarity
                that brings your team closer in meetings.
              </p>
            </div>
            <div>
              <Image src="/zap1.png" width={32} height={32} />
              <h2 className="text-[#101828] my-2 font-semibold text-[24px]">
                Crystal-clear HD video
              </h2>
              <p className="text-[#475467] text-[18px]">
                No more pixelation or blurriness just stunning, lifelike clarity
                that brings your team closer in meetings.
              </p>
            </div>
            <div>
              <Image src="/zap4.png" width={32} height={32} />
              <h2 className="text-[#101828] my-2 font-semibold text-[24px]">
                Crystal-clear HD video
              </h2>
              <p className="text-[#475467] text-[18px]">
                No more pixelation or blurriness just stunning, lifelike clarity
                that brings your team closer in meetings.
              </p>
            </div>
          </div>
          <div>
            {" "}
            <Image
              src="/Rectangle1.png"
              width={844}
              height={627}
              className="shrink-0"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-10 py-[96px] px-[160px] bg-[#F9FAFB]">
        <div className="flex flex-col flex-1">
          <Image
            src="/Shopify1.png"
            width={112}
            height={32}
            className="mb-[48px]"
          />
          <div className="flex items-center mb-[48]">
            <Image src="/Star1.png" width={20} height={20} />
            <Image src="/Star1.png" width={20} height={20} />
            <Image src="/Star1.png" width={20} height={20} />
            <Image src="/Star1.png" width={20} height={20} />
            <Image src="/Star1.png" width={20} height={20} />
          </div>
          <p className="text-[#101828] font-medium text-[44px] mb-[48px]">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </p>

          <div className="flex items-center gap-5">
            <Image src="/Avatar.png" width={56} height={56} />
            <div>
              <h2 className="text-[#101828] font-semibold text-[20px]">
                Sarah Thompson
              </h2>
              <p className="text-[#475467] text-[18px]">
                Project Manager, Shopify
              </p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Image src="/leftarrow.png" width={56} height={56} />
              <Image src="/rightarrow.png" width={56} height={56} />
            </div>
          </div>
        </div>
        <div className="flex-1 shrink-0">
          <Image src="/Contents.png" width={640} height={490} />
        </div>
      </div>
    </>
  );
}
