// import data from "../../data/index.json";
// import {
//   FaCode,
//   FaLaptopCode,
//   FaTools,
//   FaDatabase,
//   FaGitAlt,
//   FaCloudUploadAlt
// } from "react-icons/fa";

// export default function MySkills() {
//   return (
//     <section className="skills--section" id="myskills" data-aos="fade-up">
//       <div className="portfolio--container">
//         <p className="skills--section--heading">Technical Skills</p>
//         <p className="skills--section--subtext">
//           Here are some of the tools and technologies I use to build digital experiences.
//         </p>
//       </div>

//       <div className="skills--section--row">
//         {/* Programming Languages */}
//         <div className="skills--section--category">
//           <h3 className="skills--section--category-title no-dot">
//             <FaCode className="skills--icon" /> Programming Languages
//           </h3>
//           <div className="skills--section--container">
//             {data?.skills?.ProgrammingLanguages?.map((item, index) => (
//               <div key={index} className="skills--section--card">
//                 <span className="skills--section--title">{item.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Web Technologies */}
//         <div className="skills--section--category">
//           <h3 className="skills--section--category-title no-dot">
//             <FaLaptopCode className="skills--icon" /> Web Technologies
//           </h3>
//           <div className="skills--section--container">
//             {data?.skills?.["Web Technologies"]?.map((item, index) => (
//               <div key={index} className="skills--section--card">
//                 <span className="skills--section--title">{item.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Frameworks & Libraries */}
//         <div className="skills--section--category">
//           <h3 className="skills--section--category-title no-dot">
//             <FaTools className="skills--icon" /> Frameworks & Libraries
//           </h3>
//           <div className="skills--section--container">
//             {data?.skills?.["Frameworks & Libraries"]?.map((item, index) => (
//               <div key={index} className="skills--section--card">
//                 <span className="skills--section--title">{item.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Databases */}
//         <div className="skills--section--category">
//           <h3 className="skills--section--category-title no-dot">
//             <FaDatabase className="skills--icon" /> Databases
//           </h3>
//           <div className="skills--section--container">
//             {data?.skills?.Databases?.map((item, index) => (
//               <div key={index} className="skills--section--card">
//                 <span className="skills--section--title">{item.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Version Control */}
//         <div className="skills--section--category">
//           <h3 className="skills--section--category-title no-dot">
//             <FaGitAlt className="skills--icon" /> Version Control
//           </h3>
//           <div className="skills--section--container">
//             {data?.skills?.VersionControl?.map((item, index) => (
//               <div key={index} className="skills--section--card">
//                 <span className="skills--section--title">{item.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Deployment Tools */}
//         <div className="skills--section--category">
//           <h3 className="skills--section--category-title no-dot">
//             <FaCloudUploadAlt className="skills--icon" /> Deployment Tools
//           </h3>
//           <div className="skills--section--container">
//             {data?.skills?.Deployment?.map((item, index) => (
//               <div key={index} className="skills--section--card">
//                 <span className="skills--section--title">{item.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* IDEs */}
//         <div className="skills--section--category category-ides">
//           <h3 className="skills--section--category-title no-dot">
//             <FaLaptopCode className="skills--icon" /> IDEs
//           </h3>
//           <div className="skills--section--container">
//             {data?.skills?.IDEs?.map((item, index) => (
//               <div key={index} className="skills--section--card">
//                 <span className="skills--section--title">{item.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import data from "../../data/index.json";
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaDatabase,
  FaGitAlt,
  FaCloudUploadAlt
} from "react-icons/fa";

export default function MySkills() {
  return (
    <section className="skills--section" id="myskills" data-aos="fade-up">
      <div className="portfolio--container">
        <p className="skills--section--heading">Technical Skills</p>
        <p className="skills--section--subtext">
          Here are some of the tools and technologies I use to build digital experiences.
        </p>
      </div>

      <div className="skills--section--row">
        {/* Programming Languages */}
        <div className="skills--section--category">
          <h3 className="skills--section--category-title no-dot">
            <FaCode className="skills--icon" /> Programming Languages
          </h3>
          <div className="skills--section--container">
            {data?.skills?.ProgrammingLanguages?.map((item, index) => (
              <div key={index} className="skills--section--card">
                <span className="skills--section--title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Web Technologies */}
        <div className="skills--section--category">
          <h3 className="skills--section--category-title no-dot">
            <FaLaptopCode className="skills--icon" /> Web Technologies
          </h3>
          <div className="skills--section--container">
            {data?.skills?.["Web Technologies"]?.map((item, index) => (
              <div key={index} className="skills--section--card">
                <span className="skills--section--title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="skills--section--category">
          <h3 className="skills--section--category-title no-dot">
            <FaTools className="skills--icon" /> Frameworks & Libraries
          </h3>
          <div className="skills--section--container">
            {data?.skills?.["Frameworks & Libraries"]?.map((item, index) => (
              <div key={index} className="skills--section--card">
                <span className="skills--section--title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="skills--section--category">
          <h3 className="skills--section--category-title no-dot">
            <FaDatabase className="skills--icon" /> Databases
          </h3>
          <div className="skills--section--container">
            {data?.skills?.Databases?.map((item, index) => (
              <div key={index} className="skills--section--card">
                <span className="skills--section--title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Version Control */}
        <div className="skills--section--category">
          <h3 className="skills--section--category-title no-dot">
            <FaGitAlt className="skills--icon" /> Version Control
          </h3>
          <div className="skills--section--container">
            {data?.skills?.VersionControl?.map((item, index) => (
              <div key={index} className="skills--section--card">
                <span className="skills--section--title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Tools */}
        <div className="skills--section--category">
          <h3 className="skills--section--category-title no-dot">
            <FaCloudUploadAlt className="skills--icon" /> Deployment Tools
          </h3>
          <div className="skills--section--container">
            {data?.skills?.Deployment?.map((item, index) => (
              <div key={index} className="skills--section--card">
                <span className="skills--section--title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IDEs */}
        <div className="skills--section--category category-ides">
          <h3 className="skills--section--category-title no-dot">
            <FaLaptopCode className="skills--icon" /> IDEs
          </h3>
          <div className="skills--section--container">
            {data?.skills?.IDEs?.map((item, index) => (
              <div key={index} className="skills--section--card">
                <span className="skills--section--title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
