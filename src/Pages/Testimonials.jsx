import Dean from "../images/Dean.webp";
import Christopher from "../images/Christopher.jpg";
import Susan from "../images/Susan.png";
import Donnie from "../images/Donnie.webp";
import Carmen from "../images/Carmen.png";
import Marilyn from "../images/Marilyn.webp";

function Testimonials() {
  const testimonials = [
    {
      photo: Dean,
      name: "Dean G. Lavalle",
      description:
        "Wisdom is a highly skilled and dedicated web developer. He consistently delivers high-quality work and is a pleasure to collaborate with.",
    },
    {
      photo: Christopher,
      name: "Christopher R. Henry",
      description:
        "I had the opportunity to work with Wisdom on a project, and I was impressed by his technical expertise and problem-solving skills. He is a valuable asset to any team.",
    },
    {
      photo: Susan,
      name: "Susan C. Huffman",
      description:
        "Wisdom's attention to detail and commitment to excellence make him an outstanding developer. I would highly recommend him for any web development project.",
    },
    {
      photo: Donnie,
      name: "Donnie R. Rowley",
      description:
        "Wisdom is a reliable and efficient developer who consistently meets deadlines and delivers quality results.",
    },
    {
      photo: Carmen,
      name: "Carmen M. Hines",
      description:
        "Working with Wisdom was a great experience. His communication skills and technical knowledge made our collaboration seamless.",
    },
    {
      photo: Marilyn,
      name: "Marilyn E. Scott",
      description:
        "Wisdom is a talented developer with a strong passion for his work. His dedication and creativity make him a pleasure to work with.",
    },
  ];

  return (
    <section id="Testimonials" className="py-16 bg-base-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-base-content">
          What My Clients Say
        </h2>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((test, index) => (
          <div
            key={index}
            className="p-5 rounded-xl shadow-md border border-base-300 bg-base-100 hover:shadow-lg transition text-center"
          >
            <img
              src={test.photo}
              alt={test.name}
              className="w-20 h-27 mx-auto mb-4 object-cover"
            />

            <h3 className="text-lg font-bold text-blue-500">{test.name}</h3>

            <p className="text-base-content/70 mt-2">{test.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
