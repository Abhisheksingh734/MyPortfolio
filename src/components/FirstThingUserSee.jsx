import cv from "../assets/CV_AbhishekSingh.pdf";
export default function FirstThingUserSee() {
  return (
    <>
      <div className="relative flex items-center justify-center w-full mt-60 ">
        <div className="flex items-center justify-center w-full flex-col space-y-2 ">
          <p className="uppercase text-3xl transition translateTextNoColor">
            Abhishek Singh
          </p>
          <p className="uppercase text-xl lg:text-6xl transition translateText">
            Full Stack Developer
          </p>
          <div className="flex items-center justify-center gap-6">
            <button className="border-2 uppercase text-[#fed7aa] text-2xl mt-3 w-60 border-[#fed7aa] p-2 rounded-2xl transition btnAnimantion ">
              <a href={cv} download>
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
