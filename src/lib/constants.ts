import { MockTransaction } from "@/types";

export const MOCK_HERO_TRANSACTIONS: MockTransaction[] = [
  {
    id: "tx-1",
    title: "Grocery Bazar",
    category: "Food & Bazar",
    amount: -1850,
    type: "expense",
    date: "Today, 10:30 AM",
    icon: "ShoppingBag",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "tx-2",
    title: "Sajek Tour Split (Abir Paid)",
    category: "Group Tour",
    amount: 3400,
    type: "split",
    date: "Yesterday",
    icon: "Users",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "tx-3",
    title: "Adda & Coffee",
    category: "Entertainment",
    amount: -320,
    type: "expense",
    date: "21 Aug",
    icon: "Coffee",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    id: "tx-4",
    title: "Freelance Client Payment",
    category: "Income",
    amount: 25000,
    type: "income",
    date: "20 Aug",
    icon: "Wallet",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
];

export const HERO_HIGHLIGHTS = [
  {
    icon: "Zap",
    label: "Super Fast Entry",
    description: "Add an expense in less than 2 taps",
  },
  {
    icon: "Users",
    label: "Mess & Tour Split",
    description: "Zero confusion bill splitting with friends",
  },
  {
    icon: "ShieldCheck",
    label: "100% Privacy Focused",
    description: "Your financial data stays secure & private",
  },
  {
    icon: "PieChart",
    label: "Smart Visual Charts",
    description: "Instantly see where your money goes",
  },
];
