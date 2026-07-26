import React, { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='88'%20height='88'%20viewBox='0%200%2088%2088'%20fill='none'%3e%3crect%20width='88'%20height='88'%20fill='%23F3F3F5'/%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20d='M55%2035c0%202.761-2.239%205-5%205s-5-2.239-5-5%202.239-5%205-5%205%202.239%205%205zM20%2060l12-12%208%208%2016-16%2012%2012v6H20z'%20fill='%23BDBDBD'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='48'%20height='48'%20fill='white'%20transform='translate(20%2020)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  );
}
