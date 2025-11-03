export default function Section({ title, children }) {
    return (
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {children}
      </section>
    );
  }
  