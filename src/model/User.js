import bcrypt from "bcrypt"
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name must be provided"],
        maxlength: [50, "Name cannot be more than 50 letters"]
    },
    email: {
        type: String,
        required: [true, "Email must be unique"],
        unique: true,
        trim: true,
        lowercase: true
    },
    number: {
        type: String,
        trim: true,
        required: [true, "Number must be provided"],
    },
    password: {
        type: String,
        trim: true,
        minlength: [6, "Password must be at least 6 characters"],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return; // agar password change nahi hua, save continue karega

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  // next() nahi likhne ki zarurat
});

userSchema.methods.ComparePass = async function(user_pass) {
    return await bcrypt.compare(user_pass, this.password)
}

export default mongoose.models.User || mongoose.model("User", userSchema)
