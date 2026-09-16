"use client";

import { contact, contact2 } from "@/utils/constent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";

function Call() {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }

  const callNumber =
    pathName.replace(/\/$/, "") === "/lp-2" ? contact2.phone : contact.phone[0];

  return (
    <div className="fixed bottom-10 lg:left-3 left-4 z-20 cursor-pointer">
      <Link
        href={`tel:${callNumber || "+911234567890"}`}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-700 hover:bg-primary text-white/95 hover:shadow-2xl transition-all"
      >
        <IoCall size={29} color="white" />
        <span className="sr-only">call</span>
      </Link>
    </div>
  );
}

export default Call;
