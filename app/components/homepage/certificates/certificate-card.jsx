// @flow strict
import Image from 'next/image';
import Link from 'next/link';
const isValidImage = (src) => {
  if (!src || typeof src !== "string") return false;
  const trimmed = src.trim();
  if (trimmed === "") return false;

  // Allow local images
  if (trimmed.startsWith("/")) return true;

  // Validate external URLs
  try {
    new URL(trimmed);
    return true;
  } catch {
    return false;
  }
};
const getImageSrc = (src) => {
  if (!src || typeof src !== "string" || src.trim() === "") return null;

  const trimmed = src.trim();

  // If it already starts with "/", use as-is
  if (trimmed.startsWith("/")) return trimmed;

  // Otherwise assume it’s in public/images/
  return `/images/${trimmed}`;
};
function CertificateCard({ certificate }) {
  return (
    <div
  className="
    border border-[#1d293a] 
    hover:border-violet-500 
    hover:scale-105
    hover:shadow-lg
    transition-all duration-300
    bg-[#1b203e] 
    rounded-lg 
    group
    cursor-pointer
  "
>
      {/* Image */}
      <div className="h-44 lg:h-52 overflow-hidden rounded-t-lg">
  {getImageSrc(certificate.image) ? (
    <Image
      src={getImageSrc(certificate.image)}
      height={500}
      width={800}
      alt={certificate.title}
      className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
    />
  ) : (
    <div className="flex items-center justify-center h-full bg-gray-100 text-black text-sm">
      No Image
    </div>
  )}
</div>

      {/* Content */}
      <div className="p-3 flex flex-col">
        {/* Title */}
        <h3 className="text-lg sm:text-xl text-white font-semibold group-hover:text-violet-400">
          {certificate.title}
        </h3>

        {/* Issuer */}
        <p className="text-sm text-[#16f2b3] mt-1">
          {certificate.issuer}
        </p>

        {/* Date */}
        <p className="text-xs text-gray-400 mt-1">
          Issued: {certificate.issue_date}
        </p>

        {/* Description */}
        <p className="text-sm text-[#d3d8e8] mt-2 line-clamp-3">
          {certificate.description}
        </p>

        {/* Button */}
        <Link href={certificate.link} target="_blank">
          <button className="
      mt-4 
      bg-gradient-to-r from-pink-500 to-violet-600 
      px-4 py-2 
      rounded-full 
      text-xs text-white 
      cursor-pointer       /* ← makes pointer appear */
      hover:scale-105      /* ← slight grow effect on hover */
      transition-all duration-300  /* ← smooth transition */
    ">
            View Credential
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CertificateCard;