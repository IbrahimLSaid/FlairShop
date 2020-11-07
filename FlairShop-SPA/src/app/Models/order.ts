import { Product } from './product';
import { User } from './user';

export interface Order {
    orderId: number;
    userId: number;
    productId: number;
    user: User;
    product: Product;
    toAddress: string;
    orderDate: Date;
    status: string;
}
