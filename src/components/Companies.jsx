const brands = ['AutoBuffy', 'Westar', 'Premium Shocks', 'RC Auto']

export default function Companies() {
  return (
    <section id="companies" className="container-bleed py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-tcg-blue">Brands Under the Group</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {brands.map((b) => (
          <div key={b} className="card flex items-center justify-center h-24 sm:h-28 text-lg font-semibold">
            {b}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs sm:text-sm text-tcg-gray">More to come…</p>
    </section>
  )
}
