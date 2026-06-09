export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
}

export const portfolioItems: PortfolioItem[] = [];
