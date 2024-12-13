import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <div className="text-start space-y-4">
              <h1 className="text-4xl font-bold text-gray-400">About Me</h1>
              <p className="text-base text-gray-500">A passionate full stack developer from philippines</p>
              <p>I&#39;m a Full Stack Developer with a passion for turning concepts into cutting-edge apps. My focus at the Department of Agriculture in Region 3 is on process optimization and the development of user-friendly apps. I hold a Bachelor&#39;s degree in Information Technology.</p>
              <p>In addition to my skill in development, I&#39;m always learning new things. In an effort to be on the cutting edge of web programming, I&#39;m currently exploring the worlds of Node js and React js. managing an Ubuntu server with cyberpanel and LiteSpeed are something I&#39;m learning about concurrently.This dual focus not only sharpens my coding skills but also empowers me to optimize server performance forseamless application delivery.</p>
              <p>Join me on this exciting expedition where I blend creativity with technology, turning challenges into opportunities in the dynamic world of software development and server administration.</p>
              <p> I’m currently learning Node, Reactjs and Ubuntu server with lite speed.</p>
            </div>
          </div>
        </main>
      
      </div>
    </>
  );
}
