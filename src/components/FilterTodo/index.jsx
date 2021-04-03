import './FilterTodo.scss';

const FilterTodo = ({ value, onChange }) => (
  <div className="TodoFilter">
    <label className="TodoFilter__label">
      Фильтр по имени
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default FilterTodo;
