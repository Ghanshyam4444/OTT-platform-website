const {z}=require("zod");
const signupschema=z.object({
    user_name:z
    .string({required_error:"Name is required"})
    .trim()
    .min(2,{message:"minimum 2 letters are required"})
    .max(44,{message:"maximum 44 letters can be used"}),
    user_email: z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"email must be of at least 3 characters"})
    .max(255,{message:"email must not be more then 255 characters"}),
    user_phone_number: z
    .string({required_error:"phone number is required"})
    .trim()
    .min(10,{message:"phone number must be of at least 10 characters"})
    .max(10,{message:"phone number must not be more then 10 characters"}),
    gender: z
    .string({required_error:"gender is required"})
    .trim(),
    userage: z
    .string({required_error:"age is required"}),
    user_password: z
    .string({required_error:"password is required"})
    .trim()
    .min(3,{message:"password must be of at least 3 characters"})
    .max(255,{message:"password must not be more then 255 characters"}),
})
module.exports=signupschema;
