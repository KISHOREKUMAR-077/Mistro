import CountUp from "react-countup";

function Stats() {
  return (
    <section className="stats">

      <div>
        <h2>
          <CountUp end={5000} duration={3} />+
        </h2>
        <p>Customers</p>
      </div>

      <div>
        <h2>
          <CountUp end={1000} duration={3} />+
        </h2>
        <p>Professionals</p>
      </div>

      <div>
        <h2>
          <CountUp end={50} duration={3} />
        </h2>
        <p>Cities</p>
      </div>

    </section>
  );
}

export default Stats;