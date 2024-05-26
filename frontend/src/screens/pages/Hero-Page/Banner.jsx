import parallax from '../../../images/parallax.avif';

const Banner = () => {
  return (
    <div
      className="flex items-center justify-center h-80 bg-fixed bg-parallax bg-cover"
      style={{ backgroundImage: `url(${parallax})` }}
    >
      <h1 className="md:text-5xl text-xl font-Outfit text-white uppercase">Empower Your Journey</h1>
    </div>
  );
};

export default Banner;
