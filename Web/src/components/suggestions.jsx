import Avatar from "../assets/Avatar.png";

const suggestionsData = [
  {
    id: 1,
    title: "What makes a good wine?",
    author: "João",
    location: "Porto",
    avatar: Avatar,
  },
  {
    id: 2,
    title: "Best wine in the world",
    author: "Joana",
    location: "Porto",
    avatar: Avatar,
  },
  {
    id: 3,
    title: "How long can I keep champagne?",
    author: "Joana",
    location: "Coimbra",
    avatar: Avatar,
  },
  {
    id: 4,
    title: "How to serve wine best?",
    author: "Joana",
    location: "Braga",
    avatar: Avatar,
  },
  {
    id: 5,
    title: "How did port wine came about?",
    author: "Joana",
    location: "Aveiro",
    avatar: Avatar,
  },
  {
    id: 6,
    title: "Something nice",
    author: "Joana",
    location: "Faro",
    avatar: Avatar,
  },
];

export default function Suggestions() {
  return (
    <div className="flex justify-center flex-col gap-12 p-16">
      {/* Header */}
      <div className="text-left space-y-2">
        <h2 className="text-2xl font-semibold">Suggestions</h2>
        <p className="text-[#757575]">Get an immediate answer</p>
      </div>

      {/* Cards */}
      <div className="flex justify-between items-center min-w-full flex-wrap gap-12">
        {suggestionsData.map((suggestion) => (
          <div
            key={suggestion.id}
            className="flex-[30%] space-y-6 p-6 rounded-xl border border-[#D9D9D9]"
          >
            <h4 className="text-2xl font-semibold">
              &quot;{suggestion.title}&quot;
            </h4>
            <div className="flex items-center gap-4">
              {suggestion.avatar && (
                <img
                  src={suggestion.avatar}
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
              )}
              <div>
                <p className="text-[#757575]">{suggestion.author}</p>
                <p className="text-[#B3B3B3]">{suggestion.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
