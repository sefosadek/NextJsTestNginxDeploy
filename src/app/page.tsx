export default function Home() {
  const cards = [
    {
      title: "Static Export",
      text: "The app builds to plain HTML/CSS/JS inside the out folder.",
    },
    {
      title: "Nginx Friendly",
      text: "Upload the out folder contents and point your Nginx root to it.",
    },
    {
      title: "Quick Testing",
      text: "Run one build command and verify everything locally before upload.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-20 md:px-12">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/40 blur-3xl" />
      <main className="mx-auto max-w-5xl">
        <section className="mb-12 rounded-3xl border border-white/40 bg-white/65 p-8 shadow-xl shadow-sky-200/40 backdrop-blur md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Next.js + Nginx
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Ready-to-upload static site for deployment testing
          </h1>
          <p className="max-w-2xl text-lg text-slate-700">
            This demo app is configured with static export mode, so your build
            output can be served directly by Nginx without Node.js runtime.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white">
              npm run build
            </span>
            <span className="rounded-full border border-sky-600 px-5 py-2 text-sm font-medium text-sky-700">
              upload /out/*
            </span>
            <span className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700">
              point nginx root
            </span>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur"
            >
              <h2 className="mb-2 text-xl font-semibold text-slate-900">
                {card.title}
              </h2>
              <p className="text-slate-700">{card.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Quick deploy checklist
          </h2>
          <ol className="list-inside list-decimal space-y-2 text-slate-700">
            <li>Run npm install then npm run build.</li>
            <li>Take the generated out folder.</li>
            <li>Copy files to your server web root.</li>
            <li>Reload Nginx and open your domain.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
