// components/Testimonials.tsx

const testimonials = [
    {
      name: 'Ananya R.',
      model: 'Advanced Model',
      feedback: 'This program gave me hands-on experience with real robots. The instructors were super helpful!',
    },
    {
      name: 'Kiran J.',
      model: 'Master Model',
      feedback: 'Building my own ROS project and getting a guaranteed internship was a game-changer for me.',
    },
    {
      name: 'Riya M.',
      model: 'Basic Model',
      feedback: 'A perfect starting point. The motion basics and career guidance gave me so much clarity!',
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-left">
              <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
              <p className="text-sm font-semibold text-gray-900">{t.name}</p>
              <p className="text-xs text-gray-500">{t.model}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  