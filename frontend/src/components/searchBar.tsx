"use client";

import { Tooltip } from "@heroui/tooltip";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";

type SearchBarProps = {
  setQuery: (query: string) => void;
}

export default function SearchBar({ setQuery }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState<string>("");

    const handleSearchInput = () => {
        if (!searchInput) return;
        setQuery(searchInput);
        setSearchInput("");
    }

    return (
        <div className="flex bg-white/5 border border-white/20 rounded-lg">
          <input value={searchInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)} 
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearchInput();
            }}
            type="text" placeholder="How can I help you today?" 
            className="min-w-[500px] max-w-full rounded-lg outline-none p-5 pr-0" />
          <div className="flex items-center justify-center p-3">
            <Tooltip content="Ask Yapper #1" color="default" placement="right" 
            offset={25} delay={100} closeDelay={100}>
              <IoIosSend size={20} 
              onClick={handleSearchInput} 
                className="text-white cursor-pointer outline-none" />
            </Tooltip>
          </div>
        </div>
    );
}