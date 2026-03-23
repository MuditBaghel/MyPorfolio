// @flow strict
import CertificateCard from "./certificate-card";

function Certificates({ certificates = [] }) {
  return (
    <div
      id="certificates"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
        {certificates.length > 0 ? (
          certificates.map((cert, i) => (
            <CertificateCard certificate={cert} key={i} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No certificates found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Certificates;