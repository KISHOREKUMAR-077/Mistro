import {
  FaBolt,
  FaTools,
  FaHammer,
  FaBroom,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      name: "Electrician",
      icon: <FaBolt />,
    },
    {
      name: "Plumber",
      icon: <FaTools />,
    },
    {
      name: "Carpenter",
      icon: <FaHammer />,
    },
    {
      name: "Cleaning",
      icon: <FaBroom />,
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            {service.icon}
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;