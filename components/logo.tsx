
import Image from "next/image";

export default function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-center">
      <Image
        src="/logo.png"
        alt="Chunitur"
        width={180}
        height={55}
        priority
        className={`h-auto w-[135px] sm:w-[155px] ${
          inverse ? "brightness-0 invert" : ""
        }`}
      />
    </span>
  );
}
