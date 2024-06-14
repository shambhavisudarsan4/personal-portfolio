// components/Carousel.tsx
import Image from 'next/image';

const images = [
  { src: '/images/IMG_9466.jpg', alt: 'Image 1' },
];

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
