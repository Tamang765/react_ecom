
const BannerTop = () => {
  return (
    <div className="relative h-fit  w-full overflow-hidden">
      <div className="max-w-7xl mx-auto h-full relative">
        <img
          src="/img/gift_card.avif"
          alt="Gift card background"
          className="object-right object-cover fill-current"
        />
        {/* <div className="absolute inset-0 flex items-center justify-end px-4">
          <h3 className="Playfair_font tracking-wide font-bold text-3xl text-gray-500 uppercase">
            It&apos;s never too late with a gift card
          </h3>
        </div> */}
      </div>
    </div>
  );
};

export default BannerTop;

