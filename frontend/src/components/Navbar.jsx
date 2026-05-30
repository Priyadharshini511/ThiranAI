// import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const Navbar = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/"); // Redirect to login
//   };

//   const links = [
//     { name: 'Dashboard', path: '/dashboard' },
//     { name: 'Courses', path: '/courses' },
//     { name: 'Jobs', path: '/jobs' },
//     { name: 'Internships', path: '/internships' },
//     { name: 'Resume', path: '/resume' },
//     { name: 'Consulting', path: '/consulting' },
//     { name: 'Contact', path: '/contact' },
//     { name: 'Notes', path: '/notes' },
//   ];

//   return (
//     <div
//       className="min-h-screen w-64 text-white flex flex-col fixed top-0 left-0 shadow-xl"
//       style={{ backgroundColor: '#6A89A7' }}
//     >
//       <div className="text-2xl font-bold p-6 text-center border-b" style={{ borderColor: '#88BDF2' }}>
//         <span className="text-white">Thiran</span>
//         <span className="text-[#BDDDFC]">AI</span>
//       </div>

//       <div className="flex flex-col flex-grow justify-between">
//         <nav className="mt-6 flex flex-col gap-5.5 px-4">
//           {links.map((link, index) => (
//             <NavLink
//               key={index}
//               to={link.path}
//               className={({ isActive }) =>
//                 `block px-4 py-2 rounded-lg font-medium transition ${
//                   isActive
//                     ? 'bg-white text-[#384959]'
//                     : 'text-white hover:bg-[#BDDDFC] hover:text-[#384959]' }`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}
//           <button
//             onClick={handleLogout}
//             className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Logout
//           </button>
//         </nav>

//         <footer
//           className="p-4 text-sm text-center border-t mt-auto"
//           style={{ borderColor: '#88BDF2', color: '#EEE' }}
//         >
//           © 2025 <span className="text-white font-semibold">ThiranAI</span>
//           <br />
//           All Rights Reserved
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { logout, username } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    const parts = name.split(/[.@_ ]+/).filter(Boolean);
    const initials = parts.slice(0, 2).map(word => word[0]).join('');
    return initials.toUpperCase();
  };

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Courses', path: '/courses' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Internships', path: '/internships' },
    { name: 'Resume', path: '/resume' },
    { name: 'Consulting', path: '/consulting' },
    { name: 'Contact', path: '/contact' },
    { name: 'Notes', path: '/notes' },
  ];

  return (
    <div
      className="min-h-screen w-64 text-white flex flex-col fixed top-0 left-0 shadow-xl"
      style={{ backgroundColor: '#6A89A7' }}
    >
      {/* Profile Section */}
 {/* <div className="text-2xl font-bold p-6 text-center border-b" style={{ borderColor: '#88BDF2' }}>
  <div className="w-24 h-24 mx-auto rounded-full bg-[#BDDDFC] text-[#384959] flex items-center justify-center text-3xl font-extrabold shadow-md">
    {getInitials(username)}
  </div>
  <div className="mt-3 text-lg text-white font-extrabold uppercase tracking-wide">
    {username || 'USER'}
  </div>
</div> */}
<div className="flex flex-col items-center">
  <Link to="/profile">
    <div className="w-24 h-24 rounded-full bg-[#BDDDFC] text-[#384959] flex items-center justify-center text-3xl font-extrabold shadow-md hover:scale-105 transition">
      {getInitials(username)}
    </div>
  </Link>
  <div className="mt-3 text-lg text-white font-extrabold uppercase tracking-wide text-center">
    {username || 'USER'}
  </div>
   <div className="w-3/4 border-b border-white mt-4 mb-2 opacity-50"></div>
</div>





      <div className="flex flex-col flex-grow justify-between">
        <nav className="mt-6 flex flex-col gap-5.5 px-4">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? 'bg-white text-[#384959]'
                    : 'text-white hover:bg-[#BDDDFC] hover:text-[#384959]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </nav>

        <footer
          className="p-4 text-sm text-center border-t mt-auto"
          style={{ borderColor: '#88BDF2', color: '#EEE' }}
        >
          © 2025 <span className="text-white font-semibold">ThiranAI</span>
          <br />
          All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default Navbar;
