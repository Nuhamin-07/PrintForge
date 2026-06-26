import type { ReactNode } from "react";

// Data Types
export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type Category = {
  name: string;
  slug: string;
};

export type CategoriesData = {
  categories: Category[];
};

// Page Types

export type CategoryPageProps = {
  params: Promise<{
    categoryName: string;
  }>;
};

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type ModelDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export type GetModelsParams = {
  category?: string;
};

// Components Types
export type ModelCardProps = {
  model: Model;
};

export type ModelsGridProps = {
  title: string;
  models: Model[];
};

export type ModelsPageProps = {
  searchParams: {
    query?: string;
  };
};

export type PillProps = {
  children: ReactNode;
  className?: string;
  role?: string;
};

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive?: boolean;
};
