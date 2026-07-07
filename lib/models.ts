import { getDBConnection } from "@/lib/db";

export async function getModels({
  query,
  sort,
  categorySlug,
}: {
  query?: string;
  sort?: string;
  categorySlug?: string;
}) {
  const db = await getDBConnection();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  let sql = "SELECT * FROM models";
  const placeholders = [];

  if (query) {
    sql += " WHERE (name LIKE ? OR description LIKE ?)";
    placeholders.push(`%${query}%`, `%${query}%`);
  }

  if (categorySlug) {
    sql += " WHERE category=?";
    placeholders.push(categorySlug);
  }

  if (sort) {
    if (sort === "alpha") {
      sql += " ORDER BY name ASC";
    }
    if (sort === "popular") {
      sql += " ORDER BY likes DESC";
    }
    if (sort === "recent") {
      sql += " ORDER BY dateAdded DESC";
    }
  }

  try {
    return await db.all(sql, placeholders);
  } finally {
    await db.close();
  }
}
export async function getModelById(id: number) {
  const db = await getDBConnection();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    return await db.get("SELECT * FROM models WHERE id = ?", [id]);
  } finally {
    await db.close();
  }
}
