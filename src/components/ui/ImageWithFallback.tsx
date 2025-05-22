"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  width?: number;
  height?: number;
  onError?: () => void;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fill = false,
  className = "",
  sizes,
  priority = false,
  placeholder,
  blurDataURL,
  width,
  height,
  onError
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Generate a placeholder based on the alt text
  const generatePlaceholder = () => {
    const initials = alt
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
    
    return (
      <div className={`${fill ? 'absolute inset-0' : `w-${width} h-${height}`} bg-gradient-to-br from-[#F6F6F3] to-[#E5E5E5] flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="w-12 h-12 bg-[#BF82FF] rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">
            {initials || '?'}
          </div>
          <p className="text-xs text-[#6B6B6B] max-w-[100px] line-clamp-2">{alt}</p>
        </div>
      </div>
    );
  };

  if (hasError) {
    return generatePlaceholder();
  }

  return (
    <>
      {isLoading && (
        <div className={`${fill ? 'absolute inset-0' : `w-${width} h-${height}`} bg-gradient-to-br from-[#F6F6F3] to-[#E5E5E5] animate-pulse ${className}`}>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[#BF82FF] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        sizes={sizes}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
};

export default ImageWithFallback; 