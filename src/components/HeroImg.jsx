function HeroImg({heroImg}) {
  return (
    <>
      <section id="hero-img" className="h-128 w-full">
        <img
          src={heroImg}
          alt="Italian man"
          className="w-full h-full object-cover"
        />
      </section>
    </>
  );
}

export default HeroImg;
