import featureData from "../featureData.js";

function Features() {
  return (
    <>
      <section className="bg-[#F7F3EB] grid justify-center">
        {featureData.map((feature) => (
            <div
              key={feature.id}
              className="grid gap-12 md:grid-cols-[3fr_2fr] mx-12 pb-6 mt-12 max-w-225 border-b-2 border-gray-200"
            >
              <div>
                <h2 className="text-3xl uppercase font-sans mb-3">
                  {feature.title}
                </h2>
                <p className="text-lg font-sans text-normal leading-6.5">
                  {feature.body}
                </p>
                <a
                  href={feature.link}
                  className="underline uppercase text-lg inline-block mt-4"
                >
                  Explore topic
                </a>
              </div>
              <img
                src={feature.image}
                alt=""
                className="w-full h-64 mx-auto object-cover rounded-3xl"
              />
            </div>
          ))}
      </section>
    </>
  );
}

export default Features;
