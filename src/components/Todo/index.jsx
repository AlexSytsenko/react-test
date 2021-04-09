import IconButton from '../IconButton/';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Todo = ({ text, completed, onDelete, onToggleCompleted }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    {/* <button className="TodoList__btn" type="button" onClick={onDelete}>
      Удалить
    </button> */}
    <IconButton aria-label="Удалить todo">
      <DeleteIcon width="32" height="32" fill="white" onClick={onDelete} />
    </IconButton>
  </>
);

export default Todo;

{
  /* <IconButton>
      <DeleteIcon width="32" height="32" fill="white" onClick={onDelete} />
    </IconButton> */
}
