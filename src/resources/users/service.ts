import { t, NotFoundError } from 'elysia';
import { Static } from '@sinclair/typebox';
import { typeid } from 'typeid-js';
import { prisma } from '~/db';

export const UserInput = t.Object({
  email: t.String(),
  name: t.Optional(t.String()),
});
type UserInputType = Static<typeof UserInput>;

export async function getUser(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return user;
  } catch (error) {
    console.error('Error finding user:', error);
  }
}

export async function createUser(args: UserInputType) {
  return prisma.user.create({
    data: {
      id: typeid('user').toString(),
      ...args,
    },
  });
}
