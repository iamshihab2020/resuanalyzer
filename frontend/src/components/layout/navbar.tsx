"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Aceternity UI</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="default"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
