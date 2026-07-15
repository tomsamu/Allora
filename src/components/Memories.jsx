export default function Memories() {
  return (
    <section className="bg-[#F7F3EB] py-12 grid justify-center">
      <div className="mx-12 grid justify-center gap-12 md:grid-cols-[4fr_3fr] max-w-225 pb-12 border-b-2 border-gray-200">
        <div className="flex flex-col">
          <h2 className="text-6xl font-sans uppercase">
            Making <span className="font-serif">Memories</span>
          </h2>
          <p className="my-6 text-lg">
            We believe in seeking out the moments that stay with us. The people,
            the places, the stories worth telling.
          </p>
          <a href="#" className="underline uppercase text-lg inline-block mt-4">
            About Allora
          </a>
        </div>
        <img
          className="w-full h-80 object-cover md:-order-1"
          src="/4_crowd_photo.png"
          alt=""
        />
      </div>
    </section>
  );
}


