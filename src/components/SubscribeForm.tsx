// src/components/SubscribeForm.tsx
const SubscribeForm = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay up to date</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to get updates about new rescues, adoptions, and how you can help.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeForm;
