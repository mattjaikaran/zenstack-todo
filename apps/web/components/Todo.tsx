import { trpc } from '../utils/trpc';

export function Todo({ listId }: { listId: string }) {
  const todoQuery = trpc.getTodos.useQuery({ listId });
  const createTodo = trpc.createTodo.useMutation();

  if (todoQuery.isLoading) return <div>Loading...</div>;

  return (
    <div>
      {todoQuery.data?.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const content = (e.target as HTMLFormElement).content.value;
          createTodo.mutate({ content, listId });
        }}
      >
        <input name="content" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}