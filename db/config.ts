import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config
const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

export default defineDb({
  tables: { User },
});
