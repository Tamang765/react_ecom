import { ArrowRight } from "lucide-react";

export default function FeaturedPromo({ title, description, imageUrl, ctaText, ctaLink }) {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg  max-w-7xl">
      <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-white mb-8 max-w-2xl">{description}</p>
        <button className="font-semibold bg-white text-gray-700 p-3 rounded-lg ">
          <a href={ctaLink} className="flex gap-2 items-center">
            {ctaText} <ArrowRight className="ml-2" size={18} />
          </a>
        </button>
      </div>
    </div>
  );
}

export function SplitFeaturedPromo({ title, description, imageUrl, ctaText, ctaLink, imageSide = "left" }) {
  return (
    <div className="bg-background  rounded-lg shadow-lg overflow-hidden">
      <div className={`flex flex-col ${imageSide === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
          <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mb-6">{description}</p>
          <button  size="lg" className="self-start bg-blue-950 py-1 px-2 text-white rounded-lg">
            <a href={ctaLink}>{ctaText}</a>
          </button>
        </div>
      </div>
    </div>
  );
}
