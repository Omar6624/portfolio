import { career } from "@/data/constant";

export default function About() {
  return (
    <>
      <div className="container mx-auto sm:px-15 py-10">
        <div className="grid grid-cols-2  gap-x-4 gap-y-2">
          <div className="col-span-1 space-y-2">
            <div className="text-2xl pb-5 heading-font">
              {" "}
              <span className="text-teal-400 text-lg">01.</span> About Me
            </div>
            <div className="border border-gray-200 p-2 heading-font">
              I'm a Junior Software Engineer with a strong foundation in both
              frontend and backend development, and a genuine passion for
              learning and building meaningful software. I enjoy breaking down
              problems, writing clean, maintainable code, and collaborating with
              others to bring ideas to life. While I'm early in my career, I've
              already gained hands-on experience through projects and
              internships that challenged me to think critically, communicate
              clearly, and adapt quickly. I’m comfortable working with modern
              web technologies and always eager to deepen my understanding of
              software design, and best practices.
            </div>
          </div>
          <div className="col-span-1 space-y-2">
            <div className="text-2xl pb-5 heading-font">
              {" "}
              <span className="text-teal-400 text-lg">02.</span> Experience &
              Education
            </div>
            {career.map((item) => (
              <div className="border border-gray-200 p-2">
                <p className="text-lg">{item.title}</p>
                <p className="text-gray-300">{item.subtitle}</p>
                <p className="text-gray-500 heading-font">
                  {item.dateStart} - {item.dateEnd} | {item.duration}
                </p>
                <div className="text-teal-400 heading-font ">
                  {item.skills.map((skill) => (
                    <span>{skill},&nbsp;</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
