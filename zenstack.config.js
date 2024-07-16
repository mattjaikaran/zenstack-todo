module.exports = {
    schema: './packages/schema/schema.zmodel',
    plugins: [
      {
        name: '@zenstackhq/trpc',
        output: './apps/server/src/generated'
      },
      {
        name: '@zenstackhq/trpc',
        output: './apps/web/src/generated'
      }
    ]
  };