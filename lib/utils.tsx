export function getQueryParams(searchParams: {
  query?: string;
  sort?: string;
  page?: string;
}) {
  const query = searchParams.query?.toLowerCase() || "";

  const rawSort = searchParams.sort?.toLowerCase();
  let sort;
  if (rawSort === undefined) {
    sort = "";
  } else {
    sort = ["alpha", "popular", "recent"].includes(rawSort) ? rawSort : null;
  }

  const rawPage = searchParams.page;
  let page;
  if (rawPage === undefined) {
    page = 1;
  } else {
    const parsedPage = Number(rawPage);
    page = Number.isNaN(parsedPage) ? 0 : parsedPage;
  }

  return { query, sort, page };
}
