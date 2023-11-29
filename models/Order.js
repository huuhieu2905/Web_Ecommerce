import { Models } from "mongoose";
import { models } from "mongoose";

const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
    line_items: Object,
    name:String,
    email:String,
    city:String,
    postalCode:String,
    streetAddress:String,
    country:String,
    paid:Boolean,
},{
    timestamps: true,
});

export const Order = models?.Order||model('Order', OrderSchema);