import { getDBConnection } from "@/lib/db";

export async function getModels(search?: string, sort?: string) {
  const db = await getDBConnection();

  let sql = "SELECT * FROM models";
  const placeholders = [];

  if (search) {
    sql += " WHERE (name LIKE ? OR description LIKE ?)";
    placeholders.push(`%${search}%`, `%${search}%`);
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

export async function getModelsByCategorySlug(categorySlug: string) {
  const db = await getDBConnection();

  try {
    return await db.all("SELECT * FROM models WHERE category = ?", [
      categorySlug,
    ]);
  } finally {
    await db.close();
  }
}

export async function getModelById(id: number) {
  const db = await getDBConnection();

  try {
    return await db.get("SELECT * FROM models WHERE id = ?", [id]);
  } finally {
    await db.close();
  }
}
