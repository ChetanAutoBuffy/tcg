export default function Group() {
  return (
    <section id="group" className="container-bleed py-20 text-center bg-black text-white transition-colors duration-500">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Group</h2>
      <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
        The Chadha Group (TCG) operates a private ecosystem of companies built on discipline,
        innovation, and legacy. Every brand within the group shares a common philosophy —
        <span className="text-white font-semibold"> progress through precision.</span>
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
          <h3 className="text-lg font-semibold mb-2">Principles</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Long-term thinking</li>
            <li>• Lean, systemized operations</li>
            <li>• Technology as leverage</li>
            <li>• Family integrity in every deal</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
          <h3 className="text-lg font-semibold mb-2">Vision</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            To merge legacy with innovation — building timeless systems that redefine global
            automotive trade, distribution, and brand trust.
          </p>
        </div>
      </div>
    </section>
  );
}
