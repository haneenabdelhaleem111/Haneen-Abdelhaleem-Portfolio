import { useState } from "react";
import { Eye, X } from "lucide-react";

export const CertificationCard = ({ cert }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="glass rounded-3xl p-6 border border-[#ad5d4e]/20 hover:border-[#ad5d4e]/40 transition-all hover:-translate-y-1">
        {/* Image with Hover Overlay */}
        <div className="relative group mb-4 rounded-xl overflow-hidden">
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Overlay */}
          <button
            onClick={() => setOpen(true)}
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#ad5d4e] flex items-center justify-center hover:scale-110 transition-transform">
              <Eye className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>

        {/* Name / Title */}
        <h3 className="text-xl font-semibold mb-2 text-white">{cert.name}</h3>

        {/* Organization and Date */}
        <p className="text-[#ad5d4e] text-sm mb-2">
          {cert.organization} | {cert.date}
        </p>

        {/* Info / Description */}
        <p className="text-[#92969a] text-sm mb-4">{cert.info}</p>
      </div>

      {/* Fullscreen Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Certificate Image */}
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-xl border border-white/10"
            />
          </div>
        </div>
      )}
    </>
  );
};
