import mongoose, {Document} from "mongoose"

interface UserSchema {
    email: string,
    username: string,
    createdAt: Date,
    updatedAt: Date
}

// Schema
const userSchema = new mongoose.Schema<UserSchema>({
	email: { type: String, trim: true, lowercase: true, required: true },
	username: { type: String, trim: true, lowercase: true },
}, { timestamps: true });

userSchema.index({ 'email': 1 }, { unique: true });

const User = mongoose.model<UserSchema>('User', userSchema);

export {User};