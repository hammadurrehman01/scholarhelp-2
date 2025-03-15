import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const [rows] = await db.query("SELECT * FROM admin WHERE email = ?", email);

    const admin = rows[0];

    if (!admin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }

    const isPassMatched = await bcrypt.compare(password, admin.pass);

    if (!isPassMatched) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ email: admin.email }, process.env.JWT_SECRET!);

    return NextResponse.json(
      { message: "Login successful", token },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
