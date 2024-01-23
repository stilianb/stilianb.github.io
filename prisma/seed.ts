import { db } from "../src/server/db";

async function main() {
  const id = 1;
  const name = "CliqueBait";
  const url = "#";
  await db.projects.upsert({
    where: {
      id,
      name,
      url,
    },
    create: {
      id,
      name,
      url,
    },
    update: {
      id,
      name,
      url,
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
