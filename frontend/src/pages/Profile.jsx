

// // import { useEffect, useState } from 'react';
// // import axios from 'axios'; // ✅ Import axios
// // import { useAuth } from '../contexts/AuthContext';

// // const Profile = () => {
// //   const { token } = useAuth();

// //   const [formData, setFormData] = useState({
// //     username: '',
// //     college: '',
// //     department: '',
// //     year: '',
// //   });

// //   const [message, setMessage] = useState('');

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('http://127.0.0.1:8000/profile', formData, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           'Content-Type': 'application/json',
// //         },
// //       });
// //       setMessage('✅ Profile updated successfully');
// //     } catch (err) {
// //       console.error(err);
// //       setMessage('❌ Failed to update profile');
// //     }
// //   };

// //   return (
// //     <div className="ml-64 p-8 min-h-screen bg-[#F7FAFC]">
// //       <h1 className="text-3xl font-bold mb-6 text-[#384959]">Your Profile</h1>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
// //       >
// //         <label className="block mb-4">
// //           <span className="block text-gray-700 font-semibold mb-1">Username</span>
// //           <input
// //             type="text"
// //             name="username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
// //             required
// //           />
// //         </label>

// //         <label className="block mb-4">
// //           <span className="block text-gray-700 font-semibold mb-1">College</span>
// //           <input
// //             type="text"
// //             name="college"
// //             value={formData.college}
// //             onChange={handleChange}
// //             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
// //             required
// //           />
// //         </label>

// //         <label className="block mb-4">
// //           <span className="block text-gray-700 font-semibold mb-1">Department</span>
// //           <input
// //             type="text"
// //             name="department"
// //             value={formData.department}
// //             onChange={handleChange}
// //             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
// //             required
// //           />
// //         </label>

// //         <label className="block mb-4">
// //           <span className="block text-gray-700 font-semibold mb-1">Year</span>
// //           <input
// //             type="text"
// //             name="year"
// //             value={formData.year}
// //             onChange={handleChange}
// //             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
// //             required
// //           />
// //         </label>

// //         <button
// //           type="submit"
// //           className="bg-[#6A89A7] text-white px-4 py-2 rounded hover:bg-[#4F6F90] transition"
// //         >
// //           Update Profile
// //         </button>

// //         {message && (
// //           <p className="mt-4 text-sm font-medium text-center">
// //             {message}
// //           </p>
// //         )}
// //       </form>
// //     </div>
// //   );
// // };

// // export default Profile;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../contexts/AuthContext';

// const Profile = () => {
//   const { token, username: authUsername } = useAuth(); // Assuming you store the username from login
//   const [profileData, setProfileData] = useState(null);
//   const [formData, setFormData] = useState({
//     username: '',
//     college: '',
//     department: '',
//     year: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [message, setMessage] = useState('');

//   // Fetch profile data on load
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('http://127.0.0.1:8000/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProfileData(res.data);
//         setFormData({
//           username: res.data.username || '',
//           college: res.data.college || '',
//           department: res.data.department || '',
//           year: res.data.year || '',
//         });
//       } catch (err) {
//         console.error('Failed to load profile', err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//     setMessage('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://127.0.0.1:8000/profile', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       setProfileData(formData); // Update view mode
//       setIsEditing(false);
//       setMessage('✅ Profile updated successfully');
//     } catch (err) {
//       console.error(err);
//       setMessage('❌ Failed to update profile');
//     }
//   };

//   if (!profileData) {
//     return <div className="ml-64 p-8">Loading profile...</div>;
//   }

//   return (
//     <div className="ml-64 p-8 min-h-screen bg-[#F7FAFC]">
//       <h1 className="text-3xl font-bold mb-6 text-[#384959]">Your Profile</h1>

//       {!isEditing ? (
//         <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
//           <p className="mb-2"><strong>Username:</strong> {profileData.username}</p>
//           <p className="mb-2"><strong>Email:</strong> {profileData.email || 'Not available'}</p>
//           <p className="mb-2"><strong>College:</strong> {profileData.college}</p>
//           <p className="mb-2"><strong>Department:</strong> {profileData.department}</p>
//           <p className="mb-4"><strong>Year:</strong> {profileData.year}</p>

//           <button
//             onClick={handleEditToggle}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Edit Profile
//           </button>
//         </div>
//       ) : (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
//         >
//           <label className="block mb-4">
//             <span className="block text-gray-700 font-semibold mb-1">Username</span>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
//               required
//             />
//           </label>

//           <label className="block mb-4">
//             <span className="block text-gray-700 font-semibold mb-1">College</span>
//             <input
//               type="text"
//               name="college"
//               value={formData.college}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
//               required
//             />
//           </label>

//           <label className="block mb-4">
//             <span className="block text-gray-700 font-semibold mb-1">Department</span>
//             <input
//               type="text"
//               name="department"
//               value={formData.department}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
//               required
//             />
//           </label>

//           <label className="block mb-4">
//             <span className="block text-gray-700 font-semibold mb-1">Year</span>
//             <input
//               type="text"
//               name="year"
//               value={formData.year}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
//               required
//             />
//           </label>

//           <div className="flex gap-4">
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={handleEditToggle}
//               className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
//             >
//               Cancel
//             </button>
//           </div>

//           {message && (
//             <p className="mt-4 text-sm font-medium text-center">{message}</p>
//           )}
//         </form>
//       )}
//     </div>
//   );
// };

// export default Profile;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { token, username: authUsername } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    college: '',
    department: '',
    year: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfileData(res.data);
        setFormData({
          username: res.data.username || '',
          college: res.data.college || '',
          department: res.data.department || '',
          year: res.data.year || '',
        });
      } catch (err) {
        console.error('Failed to load profile', err);
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/profile', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setProfileData(formData);
      setIsEditing(false);
      setMessage('✅ Profile updated successfully');
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to update profile');
    }
  };

  if (!profileData) {
    return <div className="ml-64 p-8">Loading profile...</div>;
  }

//   return (
//     <div className="ml-64 p-8 min-h-screen bg-[#F7FAFC]">
//       <h1 className="text-3xl font-bold mb-6 text-[#384959]">Your Profile</h1>

//       {!isEditing ? (
//         <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
//           <p className="mb-2"><strong>Username:</strong> {profileData.username}</p>
//           <hr className="my-4 border-t border-gray-300" />
          
//           <p className="mb-2"><strong>College:</strong> {profileData.college}</p>
//           <p className="mb-2"><strong>Department:</strong> {profileData.department}</p>
//           <p className="mb-4"><strong>Year:</strong> {profileData.year}</p>

//           <button
//             onClick={handleEditToggle}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Edit Profile
//           </button>
//         </div>
//       ) : (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
//         >
//           {['username', 'college', 'department', 'year'].map((field) => (
//             <label className="block mb-4" key={field}>
//               <span className="block text-gray-700 font-semibold mb-1">
//                 {field.charAt(0).toUpperCase() + field.slice(1)}
//               </span>
//               <input
//                 type="text"
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
//                 required
//               />
//             </label>
//           ))}

//           <div className="flex gap-4">
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={handleEditToggle}
//               className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
//             >
//               Cancel
//             </button>
//           </div>

//           {message && (
//             <p className="mt-4 text-sm font-medium text-center">{message}</p>
//           )}
//         </form>
//       )}
//     </div>
//   );
// };
return (
  <div className="ml-64 px-4 py-8 bg-gray-100 min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Your Profile</h1>

      <div className="bg-white p-8 rounded-2xl shadow-md">
        {!isEditing ? (
          <>
            <div className="space-y-4 text-lg text-gray-700">
              <div>
                <strong className="text-gray-900">Username:</strong> {profileData.username}
              </div>
              <div>
                <strong className="text-gray-900">College:</strong> {profileData.college}
              </div>
              <div>
                <strong className="text-gray-900">Department:</strong> {profileData.department}
              </div>
              <div>
                <strong className="text-gray-900">Year:</strong> {profileData.year}
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleEditToggle}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition duration-200"
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {['username', 'college', 'department', 'year'].map((field) => (
              <div key={field}>
                <label className="block mb-2 text-sm font-medium text-gray-700 capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            ))}

            <div className="flex justify-between pt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleEditToggle}
                className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-md transition"
              >
                Cancel
              </button>
            </div>

            {message && (
              <div className="text-center text-sm font-medium text-blue-600 pt-2">
                {message}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  </div>
);
};

export default Profile;
