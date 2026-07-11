import { getDBConnection } from "@/lib/db";

export async function getModels({
  query,
  sort,
  categorySlug,
  page,
  modelsPerPage,
}: {
  query?: string;
  sort?: string;
  categorySlug?: string;
  page: number;
  modelsPerPage: number;
}) {
  const db = await getDBConnection();

  let sql = "SELECT * FROM models";
  const placeholders = [];

  if (query || categorySlug) {
    const where = [];
    if (query) {
      where.push("(name LIKE ? OR description LIKE ?)");
      placeholders.push(`%${query}%`, `%${query}%`);
    }
    if (categorySlug) {
      where.push("category=?");
      placeholders.push(categorySlug);
    }

    sql += " WHERE " + where.join(" AND ");
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

  if (page && modelsPerPage) {
    const offset = (page - 1) * modelsPerPage;
    sql += " LIMIT ? OFFSET ?";
    placeholders.push(modelsPerPage, offset);
  }

  try {
    return await db.all(sql, placeholders);
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

export async function getModelCount({
  query,
  categorySlug,
}: {
  query?: string;
  categorySlug?: string;
}) {
  const db = await getDBConnection();

  let sql = "SELECT COUNT(*) as count from models";
  const placeholders = [];

  if (query || categorySlug) {
    const where = [];
    if (query) {
      where.push("(name LIKE ? OR description LIKE ?)");
      placeholders.push(`%${query}%`, `%${query}%`);
    }
    if (categorySlug) {
      where.push("category=?");
      placeholders.push(categorySlug);
    }

    sql += " WHERE " + where.join(" AND ");
  }
  try {
    const result = await db.get(sql, placeholders);
    return result.count;
  } finally {
    await db.close();
  }
}
