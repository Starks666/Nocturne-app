export type OrderStatus = 'PREPARING' | 'DELIVERED' | 'PENDING' | 'IN TRANSIT';

export interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  tags?: string[];
  isBestSeller?: boolean;
  ordersToday?: number;
}

export interface Order {
  id: string;
  guest: string;
  status: OrderStatus;
  amount: number;
  items: string;
  time: string;
}

export interface Booking {
  id: string;
  guests: number;
  date: string;
  time: string;
  location: string;
  fee: number;
}
