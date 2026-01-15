import { useState } from "react";
import produtoKit from "@/assets/produto-kit-lencois.jpg";
import produtoIndividual from "@/assets/produto-lencol-individual.jpg";
import produtoAmbiente from "@/assets/produto-ambiente.jpg";

const images = [
  {
    src: produtoKit,
    alt: "Kit com 6 jogos de lençol de malha empilhados",
    label: "Kit Completo",
  },
  {
    src: produtoIndividual,
    alt: "Jogo de lençol de malha individual embalado",
    label: "Embalagem Individual",
  },
  {
    src: produtoAmbiente,
    alt: "Lençol de malha aplicado em quarto decorado",
    label: "Produto em Uso",
  },
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Main Image */}
      <div className="relative mb-4 rounded-2xl overflow-hidden shadow-xl bg-background border border-border">
        <img
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-foreground">
            {images[selectedImage].label}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative rounded-xl overflow-hidden transition-all ${
              selectedImage === index
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-20 h-20 md:w-24 md:h-24 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
