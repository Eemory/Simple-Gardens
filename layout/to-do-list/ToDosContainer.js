import ToDo from './ToDo';

const ToDosContainer = ({ todos, setTodos, }) => {

    return (
        <div className='todos-container'>
          <ul className='todo-list'>
            {todos.map((todo) => (
                <ToDo
                 key={todo.id}
                 text={todo.text}
                 todo={todo}
                 todos={todos}
                 setTodos={setTodos}
                   />
            ))}
          </ul>
        </div>
    );
}

export default ToDosContainer;