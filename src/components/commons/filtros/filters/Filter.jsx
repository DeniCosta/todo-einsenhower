import FilterStyled from "./filter.styles";

const Filter = ({ filter, setFilter }) => {
  return (
    <FilterStyled>
      <label>
        <input
          type="radio"
          value="All"
          checked={filter === "All"}
          onChange={(e) => setFilter(e.target.value)}
        />
        Todas
      </label>
      <label>
        <input
          type="radio"
          value="Completed"
          checked={filter === "Completed"}
          onChange={(e) => setFilter(e.target.value)}
        />
        Feitas
      </label>
      <label>
        <input
          type="radio"
          value="Incompleted"
          checked={filter === "Incompleted"}
          onChange={(e) => setFilter(e.target.value)}
        />
        A Fazer
      </label>
    </FilterStyled>
  );
};

export default Filter;
