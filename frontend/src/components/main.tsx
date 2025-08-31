"use client";

import { useEffect, useState } from "react";
import SearchBar from "./searchBar";
import { TypeAnimation } from "react-type-animation";

    type ResponseData = {
        response: string;
    }

export default function Main() {
    const [query, setQuery] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => { 
        if (!query) return;

        setLoading(true);
        (async () => {
            try {
                const res = await fetch("http://127.0.0.1:5000/api/yapper1/text", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ query }),
                });

                if (!res.ok) throw new Error(`Request failed: ${res.status}`);

                const data: ResponseData = await res.json();
                setResponse(data.response);
            } catch (error) {
                console.error("Error handling query:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [query])


    return (
    <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl">Yapper #1</h1>
        <SearchBar setQuery={setQuery} />
        {loading && (
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-600 animate-bounce" />
                <div className="w-4 h-4 rounded-full bg-gray-600 animate-bounce [animation-delay:-.3s]" />
                <div className="w-4 h-4 rounded-full bg-gray-600 animate-bounce [animation-delay:-.5s]" />
            </div>
        )}

        {response && (
            <div className="max-w-[700px] text-center">
                <TypeAnimation
                    sequence={[response]}
                    speed={75}
                    wrapper="p"
                    cursor={false}
                />
            </div> 
        )}
        
    </div>
    );
}