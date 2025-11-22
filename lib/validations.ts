import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const propertySchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  type: z.enum(["FOR_SALE", "FOR_RENT"]),
  status: z.enum(["ACTIVE", "INACTIVE", "SOLD", "RENTED"]),
  price: z.string().min(1, "Price is required"),
  location: z.string().min(5, "Address is required"),
  beds: z.coerce.number().min(0),
  baths: z.coerce.number().min(0),
  sqft: z.coerce.number().min(0),
  content: z.string().min(20, "Description must be longer"),
  amenities: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Select at least one amenity",
  }),
  tag: z.string().optional(),
  image: z
    .any()
    .refine((files) => files?.length >= 1, "Image is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});
