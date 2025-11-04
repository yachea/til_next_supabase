'use client';
import TodoEditor from '@/components/todo/TodoEditor';
import TodoItem from '@/components/todo/TodoItem';
import { useFetchTodos } from '@/hooks/todos/queries/useFetchTodos';

export default function TodoListPage() {
  const { data: todos, isLoading, error } = useFetchTodos();

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러입니다. : {error.message}</div>;
  if (!todos) return <div>데이터가 없습니다.</div>;

  return (
    <div className='flex flex-col gap-5 p-5'>
      <h1 className='text-2xl font-bold'>Todo List</h1>
      <TodoEditor />
      <div className='flex flex-col gap-2'>
        {todos.map(item => (
          <TodoItem key={item.id} id={item.id} content={item.title} />
        ))}
        <TodoItem id={1} content='Todo 1' />
        <TodoItem id={2} content='Todo 2' />
        <TodoItem id={3} content='Todo 3' />
      </div>
    </div>
  );
}
