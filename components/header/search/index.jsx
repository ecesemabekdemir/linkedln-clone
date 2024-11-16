import SearchIcon from "@/svgs/search";

export default function Search() {
  return (
    <div className="search-container">
      <span class="search-icon">
        <SearchIcon />
        <input type="search" placeholder="Arama yap" />
      </span>
    </div>
  );
}
