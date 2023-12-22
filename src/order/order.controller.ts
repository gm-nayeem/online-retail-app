import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateOrderDto } from './order.dto';

@Controller('orders')
export class OrderController {
  @Post('createOrder')
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    try {
      this.validateData(createOrderDto);

      return { success: true, message: 'Order created successfully' };
    } catch (error) {
      throw new HttpException(
        error.message || 'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private validateData(data: CreateOrderDto) {
    if (!data.userId || !data.productId || !data.quantities) {
      throw new HttpException('Invalid order data', HttpStatus.BAD_REQUEST);
    }
  }
}
