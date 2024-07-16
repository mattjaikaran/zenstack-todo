import { createTRPCNext } from '@trpc/next';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../server/src/trpc/trpc.router';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    };
  },
});
