// app/auth/register/components/validationSchema.ts
import { z } from 'zod'

// Phone validation regex for Bangladeshi numbers
const bdPhoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/

export const registerSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'নাম কমপক্ষে ২ অক্ষরের হতে হবে' })
        .max(100, { message: 'নাম ১০০ অক্ষরের বেশি হতে পারবে না' }),

    email: z
        .string()
        .email({ message: 'সঠিক ইমেইল দিন' })
        .optional()
        .or(z.literal('')),

    phone: z
        .string()
        .regex(bdPhoneRegex, { message: 'সঠিক বাংলাদেশী মোবাইল নম্বর দিন (01XXXXXXXXX)' })
        .transform((val) => {
            // Normalize phone number: remove +88 or 88 prefix if exists
            return val.replace(/^(?:\+88|88)/, '0')
        }),

    password: z
        .string()
        .min(6, { message: 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে' })
        .regex(/^(?=.*[a-zA-Z])/, { message: 'পাসওয়ার্ডে অন্তত একটি অক্ষর থাকতে হবে' })
        .regex(/^(?=.*\d)/, { message: 'পাসওয়ার্ডে অন্তত একটি সংখ্যা থাকতে হবে' }),

    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'পাসওয়ার্ড মিলছে না',
    path: ['confirmPassword']
})

export type RegisterFormData = z.infer<typeof registerSchema>