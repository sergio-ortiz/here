import { defineDb, defineTable, column, NOW, sql } from 'astro:db';

// https://astro.build/db/config
const CheckIn = defineTable({
  columns: {
    location: column.text(),
    time: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: { CheckIn },
});
