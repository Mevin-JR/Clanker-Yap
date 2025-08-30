import SearchBar from "@/components/searchBar";

export default function Home() {

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl">Yapper #1</h1>
        <SearchBar />
      </div>
    </div>
  );
}
