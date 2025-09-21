import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Like from "../../../models/Like";

// Handle POST request (record a like)
export async function POST(request) {
  try {
    await connectDB(); // ensure DB connection

    const body = await request.json();
    const { action } = body;

    // Save like in MongoDB
    const newLike = await Like.create({ action });

    // Count total likes in DB
    const totalLikes = await Like.countDocuments();

    console.log(`Like action received: ${action} at ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      message: "Like recorded successfully",
      timestamp: newLike.createdAt,
      totalLikes,
    });
  } catch (error) {
    console.error("Error processing like:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process like" },
      { status: 500 }
    );
  }
}

// Handle GET request (return like count)
export async function GET() {
  try {
    await connectDB();

    const totalLikes = await Like.countDocuments();

    return NextResponse.json({
      success: true,
      totalLikes,
    });
  } catch (error) {
    console.error("Error getting like count:", error);
    return NextResponse.json(
      { success: false, error: "Failed to get like count" },
      { status: 500 }
    );
  }
}
export default async function handler(req, res) {
  await connectDB();

  const users = await User.find({});
  res.status(200).json(users);
}