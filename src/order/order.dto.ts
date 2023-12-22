export class CreateOrderDto {
  userId: string;
  productId: string[];
  quantities: number[];
  paymentInfo: any;
}
