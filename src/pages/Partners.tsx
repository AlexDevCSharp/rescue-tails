// src/pages/Partners.tsx
const corporatePartners = [
  { name: "Company A", description: "Description of Company A’s contribution", logo: "https://placehold.co/80x80?text=A" },
  { name: "Company B", description: "Description of Company B’s contribution", logo: "https://placehold.co/80x80?text=B" },
  { name: "Company C", description: "Description of Company C’s contribution", logo: "https://placehold.co/80x80?text=C" },
  { name: "Company D", description: "Description of Company D’s contribution", logo: "https://placehold.co/80x80?text=D" },
  { name: "Company E", description: "Description of Company E’s contribution", logo: "https://placehold.co/80x80?text=E" },
  { name: "Company F", description: "Description of Company F’s contribution", logo: "https://placehold.co/80x80?text=F" },
];

const nonProfits = [
  { name: "Organization 1", description: "Description of Organization 1", logo: "https://placehold.co/80x80?text=1" },
  { name: "Organization 2", description: "Description of Organization 2", logo: "https://placehold.co/80x80?text=2" },
  { name: "Organization 3", description: "Description of Organization 3", logo: "https://placehold.co/80x80?text=3" },
  { name: "Organization 4", description: "Description of Organization 4", logo: "https://placehold.co/80x80?text=4" },
  { name: "Organization 5", description: "Description of Organization 5", logo: "https://placehold.co/80x80?text=5" },
  { name: "Organization 6", description: "Description of Organization 6", logo: "https://placehold.co/80x80?text=6" },
];

const Partners = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Our Partners</h1>
          <p className="text-gray-600">
            We are proud to collaborate with a diverse network of organizations and individuals who share our commitment to animal welfare.
            Our partners play a crucial role in supporting our mission and expanding our reach. Together, we strive to create a better future for animals in need.
          </p>
        </div>

        {/* Corporate */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Corporate Partners</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {corporatePartners.map((p, i) => (
              <div key={i} className="p-4 border rounded-xl shadow-sm text-center">
                <img src={p.logo} alt={p.name} className="mx-auto mb-3 h-16 object-contain" />
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Non-profits */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Non-Profit Organizations</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {nonProfits.map((p, i) => (
              <div key={i} className="p-4 border rounded-xl shadow-sm text-center">
                <img src={p.logo} alt={p.name} className="mx-auto mb-3 h-16 object-contain" />
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Individuals */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Individual Supporters</h2>
          <p className="text-sm text-gray-600">
            We are grateful for the generous support of individuals who contribute their time, resources, and expertise to our cause.
            Their dedication makes a significant impact on the lives of animals we serve.
          </p>
        </div>

        {/* CTA */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Become a Partner</h2>
          <p className="text-sm text-gray-600 mb-4">
            If you are interested in partnering with Rescue Tails Ukraine, we would love to hear from you.
            Please contact us to discuss potential collaboration opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
