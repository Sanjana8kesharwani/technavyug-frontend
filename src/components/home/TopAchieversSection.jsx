const achievers = [
  {
    name: "Sai Ranganathan",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Nikunj Panchal",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Stalin Jacob J",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Akila S",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Hari Jayanth",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Siva Sankaran R",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

const TopAchieversSection = () => {
  return (
    <div className="mt-24 px-6 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-black">
          Meet Our Top Achievers
        </h2>
        <p className="text-gray-400 mt-2">
          The minds behind our success stories
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {achievers.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 shadow-md"
              />
            </div>

            {/* Name */}
            <h3 className="mt-4 font-semibold text-lg text-gray-800">
              {" "}
              {user.name}{" "}
            </h3>

            {/* Role */}
            <p className="text-gray-500 text-sm mt-1">{user.role}</p>

            {/* Button */}
            <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">
              View Profile →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAchieversSection;
