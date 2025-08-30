"use client";

import { Tooltip } from "@heroui/tooltip";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";

export default function SearchBar() {
    const [query, setQuery] = useState<string>("");
    const [response, setResponse] = useState<string>("");

    const handleQuery = async (): Promise<void> => {
        if (!query) return;
        try {
            const res = await fetch("http://127.0.0.1:5000/api/yapper1/text", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"query": query})
            })
            const data = await res.json();
            setResponse(data.response)

        } catch (error) {
            console.error("Error handling query:", error);
        }
    }

    return (
        <div className="flex bg-white/5 border border-white/20 rounded-lg">
          <input value={query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} type="text" placeholder="How can I help you today?" 
            className="min-w-[500px] max-w-full rounded-lg outline-none p-5 pr-0" />
          <div className="flex items-center justify-center p-3">
            <Tooltip content="Ask Yapper #1" color="default" placement="right" 
            offset={25} delay={100} closeDelay={100}>
              <IoIosSend size={20} onClick={handleQuery} 
                className="text-white cursor-pointer outline-none" />
            </Tooltip>
          </div>
          <p dangerouslySetInnerHTML={{__html: response}} />
        </div>
    );
}