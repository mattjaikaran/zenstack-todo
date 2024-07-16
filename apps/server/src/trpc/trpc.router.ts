// apps/server/src/trpc/trpc.router.ts
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../prisma';

const t = initTRPC.create();

export const appRouter = t.router({
  createTodo: t.procedure
    .input(z.object({ content: z.string(), listId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const todo = await prisma.todo.create({
        data: {
          content: input.content,
          listId: input.listId,
        },
      });
      return todo;
    }),
  // Implement other CRUD operations
});

export type AppRouter = typeof appRouter;
