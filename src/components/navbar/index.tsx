import React from "react";
import { cn } from "@/lib";
import Title from "./title";
import Avatar from "@/components/site/avatar";
import Icon from "@/components/icon";
import { useOpenStore } from "@/hooks/useOpen";

export default function Navbar() {
  const updateMobileMenuOpen = useOpenStore(
    (state) => state.updateMobileMenuOpen
  );
  const updatePremiumOpen = useOpenStore((state) => state.updatePremiumOpen);

  const onOpenMobileMenu = () => updateMobileMenuOpen(true);

  return (
    <div
      className={cn(
        "h-14 backdrop-blur absolute z-50 left-0 w-full shadow-[0_4px_4px_-4px_rgba(0,0,0,.2)]",
        "bg-white/80 dark:bg-zinc-700/80"
      )}
    >
      <div
        className="absolute md:hidden h-full left-0 w-11 flex justify-center items-center"
        onClick={onOpenMobileMenu}
      >
        <Icon icon="indent_increase_line" size={24} />
      </div>
      <Title />
      <div className="absolute top-0 right-3 h-full flex items-center gap-3">
        <div>
          <Icon
            icon="gift_fill"
            size={30}
            className="text-orange-400 cursor-pointer"
            onClick={() => updatePremiumOpen(true)}
          />
        </div>
        <Avatar />
      </div>
    </div>
  );
}
