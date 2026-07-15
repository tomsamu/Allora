export default function Stories() {
  return (
    <>
      <section className="bg-[#f7f3eb] px-12 grid justify-center">
        <div className="w-full grid md:justify-between md:grid-cols-3 gap-2 max-w-225 md:auto-rows-auto border-b-2 border-gray-200">
          <h2 className="text-3xl font-sans uppercase md:col-span-3">
            Latest stories
          </h2>
          {/* Card 1 */}
          <div className="shadow-md flex flex-col pb-6 rounded-lg overflow-hidden gap-2 md:gap-0 md:h-86 mb-10">
            <img
              className="h-80 md:max-h-40 w-full object-cover mb-2"
              src="/5_tree_by_the_sea.png"
              alt=""
            />
            <h3 className="text-xl uppercase px-2 flex-auto">
              The summer <br></br>we remember
            </h3>
            <p className="text-sm px-2 grow">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              excepturi autem!
            </p>
            <a className="uppercase underline px-2 text-sm" href="">
              Read story{" "}
              <svg
                className="size-4 inline ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
          {/* Card 2 */}
          <div className="shadow-md flex flex-col pb-6 rounded-lg overflow-hidden gap-2 md:gap-0 md:h-86 mb-10">
            <img
              className="h-80 md:max-h-40 w-full object-cover object-[40%_70%] mb-2"
              src="/6_yellow_vintage_car.png"
              alt=""
            />
            <h3 className="text-xl uppercase px-2 flex-auto">
              Coastal roads<br></br> and slow days
            </h3>
            <p className="text-sm px-2 grow">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              excepturi autem!
            </p>
            <a className="uppercase underline px-2 text-sm" href="">
              Read story{" "}
              <svg
                className="size-4 inline ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* Card 3 */}
          <div className="shadow-md flex flex-col pb-6 rounded-lg overflow-hidden gap-2 md:gap-0 md:h-86 mb-10">
            <img
              className="h-80 md:max-h-40 w-full object-cover object-[40%_70%] mb-2"
              src="/7_beach_umbrella_and_chairs.png"
              alt=""
            />
            <h3 className="text-xl uppercase px-2 grow">
              Beyond <br></br> the map
            </h3>
            <p className="text-sm px-2 grow-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              excepturi autem!
            </p>
            <a className="uppercase underline px-2 text-sm" href="">
              Read story{" "}
              <svg
                className="size-4 inline ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
