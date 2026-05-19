// import { useState } from "react";
// import DashboardLayout from "../../layouts/DashboardLayout";
// import Card from "../../components/Card";
// import { users } from "../../data/dummyData";

// const Achievements = () => {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const filteredUsers = users.filter((user) => {
//     const matchesSearch = user.name
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesFilter = filter === "All" || user.domain === filter;

//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <DashboardLayout>
//       <div className="px-4 md:px-10">

//         <h1 className="text-3xl font-bold mb-6 text-white text-center">
//           Top Achievers
//         </h1>

//         {/* Search */}
//         <div className="flex justify-center mb-6">
//           <input
//             type="text"
//             placeholder="Search by name..."
//             className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white w-80 outline-none"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         {/* Filters */}
//         <div className="flex justify-center gap-4 mb-8 flex-wrap">
//           {["All", "Frontend", "AI", "Full Stack"].map((item) => (
//             <button
//               key={item}
//               onClick={() => setFilter(item)}
//               className={`px-4 py-2 rounded-xl transition ${
//                 filter === item
//                   ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredUsers.map((user) => (
//             <Card
//               key={user.id}
//               id={user.id}
//               name={user.name}
//               role={user.role}
//               image={user.image}
//             />
//           ))}
//         </div>

//       </div>
//     </DashboardLayout>
//   );
// };

// export default Achievements;
