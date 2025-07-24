"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactButton() {
  const handleClick = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  };

  return (
    <Button
      className="bg-[#e05d4f] hover:bg-[#c04a3e] text-white rounded-md px-6 py-6 h-auto"
      onClick={handleClick}
    >
      Contact Me
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
