import { useState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

function ImageWithLoader  ({ src, alt,size }){
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Rasm muvaffaqiyatli yuklanganda
  const handleLoad = () => setIsLoaded(true);

  // Yuklashda xatolik yuz berganda
  const handleError = () => {
    setIsLoaded(true);
    setHasError(true);
  };

  return (
    <div className="relative rounded-full overflow-hidden shadow-inner flex items-center justify-center">
      
      {/* 1. Loading Spinner - Faqat rasm yuklanayotganda ko'rinadi */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <Loader2 className="w-10 h-10 text-[#D97A2B] animate-spin" />
        </div>
      )}

      {/* 2. Xatolik holati */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 text-red-400 p-6 text-center">
          <AlertCircle className="w-12 h-12 mb-3" />
          <p className="text-sm font-semibold text-red-600 italic">Rasm manzilida xatolik mavjud yoki internet aloqasi yo'q</p>
        </div>
      ) : (
        /* 3. Asosiy Rasm */
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`
            ${size} object-cover transition-opacity duration-1000 ease-in-out
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
      )}
    </div>
  );
};
export default ImageWithLoader;