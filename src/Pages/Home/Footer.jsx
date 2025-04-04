// import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


// export default function Footer() {
//   return (
//     <footer className="footer--container">
//       <div className="footer--content">
//         <p>&copy; {new Date().getFullYear()} Ankit Kumar</p>

//         <div className="footer--icons">
//           <a
//             href="https://github.com/ankit123-jh"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://linkedin.com/in/ankit-kumar-4b93aa290"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//   href="https://mail.google.com/mail/?view=cm&fs=1&to=ankit.kumar.jh519@gmail.com"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Email"
// >
//   <FaEnvelope />
// </a>


          
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--content">
        <p>&copy; {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>

        <div className="footer--icons">
          <a
            href="https://github.com/ankit123-jh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ankit-kumar-4b93aa290"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ankit.kumar.jh519@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
