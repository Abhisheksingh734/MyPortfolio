import Jobs from "./Jobs";
import lpu from "../assets/companyImg/LPU.png";
import kvs from "../assets/companyImg/kvs.png";

import Title from "./Title";

export default function WorkExperience() {
  const jobs = [
    {
      company: "B.Tech CSE",
      position: "Lovely Professional University, Phagwara",
      date: "Aug'22 - Present",
      img: lpu,
    },
    {
      company: "Senior Secondary",
      position: "Kendriya Vidyalaya AFS Memaura, Lucknow",
      date: "Jun'20 - Mar'21",
      img: kvs,
    },
    {
      company: "Secondary",
      position: "Kendriya Vidyalaya AFS Memaura, Lucknow",
      date: "Jun'18 - Mar'19",
      img: kvs,
    },
  ];
  return (
    <section className="mt-40 flex flex-col items-center space-y-12 md:px-24 px-6 lg:relative">
      <Title title="Education" />
      <div
        style={{
          gridTemplateRows: `repeat(${jobs.length}, minmax(0, 1fr))`,
        }}
        className={`grid sm:grid-cols-2 grid-cols-1 w-full sm:px-0  z-10  h-full place-items-center sm:container sm:mx-auto`}
      >
        {jobs.map((job, index) => (
          <Jobs
            key={`${job}-${index}`}
            company={job.company}
            position={job.position}
            date={job.date}
            img={job.img}
            side={index % 2 === 0 ? 0 : 1}
            rowStart={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
