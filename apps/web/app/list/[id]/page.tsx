// apps/web/app/list/[id]/page.tsx
import { Todo } from '../../../components/Todo';

export default function ListPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Todo List</h1>
      <Todo listId={params.id} />
    </div>
  );
}
