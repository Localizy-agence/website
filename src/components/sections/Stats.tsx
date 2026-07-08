const stats = [
  { value: "20", unit: "+", label: "entreprises accompagnées" },
  { value: "5", unit: "/5", label: "satisfaction Google" },
  { value: "100", unit: "%", label: "des projets livrés à temps" },
  { value: "3", unit: " sem", label: "pour la livraison moyenne" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`px-3 ${i < 3 ? "lg:border-r stat-divider" : ""} ${i === 1 ? "max-lg:border-r-0" : ""}`}
          >
            <div className="stat-value">
              {s.value}
              <span className="stat-unit">{s.unit}</span>
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
