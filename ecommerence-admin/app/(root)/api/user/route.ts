import { db } from '@/lib/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import * as z from 'zod';

const userSchema = z.object({
  username: z
    .string()
    .min(1, 'Username is required')
    .max(100, 'Username is too long'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    const existingUserEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserEmail) {
      return NextResponse.json(
        {
          user: null,
          message: `User with this email: ${existingUserEmail.email} already exists`,
        },
        { status: 409 }
      );
    }

    const existingUserUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUserUsername) {
      return NextResponse.json(
        {
          user: null,
          message: `User with this username: ${existingUserUsername.username} already exists`,
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      {
        user: rest,
        message: 'User creaed successfully',
      },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
