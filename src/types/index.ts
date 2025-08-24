import type { ComponentType } from "react";
import { z } from "zod";

// export type { ISendOtp, IVerifyOtp, ILogin } from "./auth.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "ADMIN" | "SENDER" | "RECEIVER";
export type Divisions =
  | "DHAKA"
  | "CHITTAGONG"
  | "KHULNA"
  | "RAJSHAHI"
  | "BARISHAL"
  | "SYLHET"
  | "RANGPUR"
  | "MYMENSINGH";

export const parcelFormSchema = z.object({
  name: z.string().min(1, "Parcel name is required"),
  senderInfo: z.object({
    division: z.string().min(1, "Sender division is required"),
    city: z.string().min(1, "Sender city is required"),
    zip: z.string().min(3, "Sender zip is required"),
    street: z.string().min(1, "Sender street is required"),
  }),

  deliveryLocation: z.object({
    division: z.enum([
      "DHAKA",
      "CHITTAGONG",
      "KHULNA",
      "RAJSHAHI",
      "BARISHAL",
      "SYLHET",
      "RANGPUR",
      "MYMENSINGH",
    ]),
    city: z.string().min(1, "Delivery city is required"),
    zip: z.string().min(3, "Delivery zip is required"),
    street: z.string().min(1, "Delivery street is required"),
  }),

  sameDivision: z.boolean(),

  sender: z.string().optional(),
  receiver: z.email("Receiver email is required"),

  weight: z
    .number({ error: "Weight must be a number" })
    .positive("Weight must be greater than 0"),

  estimatedDeliveryDate: z.date().min(1, "Estimated delivery date is required"),
  pickUpDate: z.date().min(1, "Pick up date is required"),
  deliveryDate: z.date().nullable(),

  cost: z
    .number({ error: "Cost must be a number" })
    .nonnegative("Cost cannot be negative"),
});

export type ParcelFormSchema = z.infer<typeof parcelFormSchema>;
