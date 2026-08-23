export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  banglaTitle?: string;
  description: string;
  icon: string;
  color: string;
}

export interface TechStackItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "State & Tools";
  description: string;
  badge: string;
}

export interface MockTransaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  type: "expense" | "income" | "split";
  date: string;
  icon: string;
  color: string;
}
