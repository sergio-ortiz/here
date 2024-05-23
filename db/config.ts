import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config
const CheckIn = defineTable({
  columns: {
    location: column.text(),
    time: column.date(),
  },
});

export default defineDb({
  tables: { CheckIn },
});
