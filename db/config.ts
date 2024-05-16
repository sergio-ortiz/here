import { defineDb, defineTable, column, NOW } from 'astro:db';

// https://astro.build/db/config
const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

const CheckIn = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => User.columns.id }),
    location: column.text(),
    time: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: { User, CheckIn },
});
