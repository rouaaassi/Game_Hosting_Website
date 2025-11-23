"use client";

import { Twitter, Facebook, Instagram, Send, Disc } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0c0c0c] border-t border-borderDark px-6 md:px-12 py-12 text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT — Links */}
        <TooltipProvider>
          <div className="flex flex-col gap-2 text-sm">
            {["About Us", "Contact", "Terms of Service", "Privacy Policy"].map((text) => (
              <Tooltip key={text}>
                <TooltipTrigger asChild>
                  <a className="hover:text-neonGreen transition cursor-pointer">{text}</a>
                </TooltipTrigger>
                <TooltipContent>Coming Soon</TooltipContent>
              </Tooltip>
            ))}

            <p className="text-xs text-gray-500 mt-4">
              © {year} GameHub. All rights reserved.
            </p>
          </div>
        </TooltipProvider>

        {/* CENTER — Social Icons */}
        <TooltipProvider>
          <div className="flex md:justify-center items-start md:items-center gap-5">
            {[
              { Icon: Twitter, key: "twitter" },
              { Icon: Facebook, key: "facebook" },
              { Icon: Instagram, key: "instagram" },
              { Icon: Disc, key: "disc" },
            ].map(({ Icon, key }) => (
              <Tooltip key={key}>
                <TooltipTrigger asChild>
                  <div className="text-neonGreen hover:scale-110 transition drop-shadow-[0_0_6px_#00ff37] cursor-pointer">
                    <Icon />
                  </div>
                </TooltipTrigger>
                <TooltipContent>Coming Soon</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* RIGHT — Newsletter */}
        <TooltipProvider>
          <div className="flex flex-col gap-3">
            <p className="text-sm">Newsletter</p>

            <div className="flex items-center gap-2">
              <input
                placeholder="Enter your email..."
                className="bg-bgDark w-full px-4 py-2 rounded-full text-gray-300 border border-borderDark focus:border-neonGreen outline-none transition"
              />

              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="bg-neonGreen text-black px-4 py-2 rounded-full text-sm hover:bg-green-500 transition drop-shadow-[0_0_8px_#00ff37] flex items-center gap-1">
                    Subscribe <Send size={14} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Coming Soon</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </TooltipProvider>

      </div>
    </footer>
  );
}
