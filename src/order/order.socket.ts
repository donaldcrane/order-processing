import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class OrderGateway {
  @WebSocketServer()
  server: Server;

  notifyOrderStatusUpdate(orderId: string, status: string) {
    this.server.emit('orderStatusUpdate', { orderId, status });
  }
}
