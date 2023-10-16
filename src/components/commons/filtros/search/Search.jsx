import { MdSearch } from "react-icons/md";
import SearchStyled from "./search.styles";

const Search = ({ search, setSearch }) => {
  return (
    <SearchStyled>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar tarefas"
      />
      <div className="searchIcon" ><MdSearch/></div>
    </SearchStyled>
  );
};

export default Search;
