import Image from "next/image";

export default function Experience() {
  return (
    <section className="ml-[10%] mb-[3%] relative text-[#cdd6f4]" id="about">
      <div className="flex flex-row mb-[3%]">
        <h1 className="relative font-medium text-4xl"> experience</h1>
        <div className="pl-4 flex flex-col justify-center w-[50%]">
          <hr className="border-solid border-2 border-[#313244] min-w-max" />
          <h1 className="relative font-medium text-2xl text-[#313244]">
            information about education and work
          </h1>
        </div>
      </div>
      <div className="mb-[3%]">
        <div className="flex flex-row align-items-center">
          <p className="relative font-medium text-lg text-[#7f849c] my-5 pb-4 leading-loose text-justify max-w-2xl mr-[2%]">
            Hi! My name is Jariel Que (online alias: tanyu fukazawa). I am
            currently a student in MAPUA University taking the track Bachelor of
            Science in Computer Science since 2021. As far as programming goes,
            I am a self-taught programmer who started from learning Visual Basic
            back in 2016 and went on and off in the programming scene since
            then. In terms of languages, I&apos;d say that C#, Java and Dart are
            my most comfortable ones while the rest is still underway to being
            comfortable. That aside, I am an average gamer ehem. not
            particularly &quot;good&quot; at anything, I enjoy watching anime
            and jam to JPOP from time to time and I&apos;d love to meet people
            of the same kind or really anyone!
          </p>
          <Image
            src="https://fuwaa.github.io/tanyu.dev/assets/img/20210505_210653.jpg"
            width="350"
            height="300"
            alt="test"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
