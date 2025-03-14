import mongoose from 'mongoose';
import { Product } from './product.models';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    orderId: {
      type: String,
      required: true,
      unique: true,
      default: () =>
        `ORD-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`,
    },
    orderitems: {
      type: [orderItemSchema],
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
