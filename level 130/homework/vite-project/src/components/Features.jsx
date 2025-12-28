export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-sm text-center">
            <h4 className="text-xl font-semibold mb-2">Clean Design</h4>
            <p className="text-gray-600">
              Minimal and modern UI components.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm text-center">
            <h4 className="text-xl font-semibold mb-2">Responsive</h4>
            <p className="text-gray-600">
              Looks great on all screen sizes.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm text-center">
            <h4 className="text-xl font-semibold mb-2">Tailwind CSS</h4>
            <p className="text-gray-600">
              Utility-first styling approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}