export default function FocusAreas() {
  const areas = [
    {
      title: "Geopolitics & Foreign Policy",
      description: "Understanding Nepal’s place in a shifting global order.",
    },
    {
      title: "Geo-Economics & Economic Diplomacy",
      description: "Shaping strategies for trade, investment, and connectivity.",
    },
    {
      title: "Climate Diplomacy",
      description: "Advancing environmental resilience and international cooperation.",
    },
    {
      title: "Tourism Diplomacy",
      description:
        "Leveraging Nepal’s cultural and spiritual assets for soft power.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Focus Areas</h2>
      <p className="text-gray-600 mb-12 max-w-xl">
        Explore our key areas of policy innovation and impact.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map(({ title, description }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
