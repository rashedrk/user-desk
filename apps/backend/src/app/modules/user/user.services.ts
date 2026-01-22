
import { prisma } from "@/app/lib/Prisma";
import type { TUserQueryRequest } from "./user.interface";
import type { Prisma, ROLE } from "@prisma/client";

const getAllUsers = async (query: TUserQueryRequest = {}) => {
    const { search, role, sort } = query;

    const where: Prisma.UserWhereInput = {};

    // Filter by search term
    if (search) {
        where.name = {
            contains: search,
            mode: 'insensitive',
        };
    }

    // Filter by role
    if (role) {
        where.role = role as ROLE;
    }

    return prisma.user.findMany({
        where,
        select: {
            id: true,
            name: true,
            role: true,
            active: true,
        },
        ...(sort && { orderBy: { name: sort } })
    });
}

const getUserById = async (id: string) => {
    return prisma.user.findUnique({
        where: { id },
    });
}

const updateStatus = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id },
    });

    if (!user) {
        throw new Error('User not found');
    }

    return prisma.user.update({
        where: { id },
        data: { active: !user.active },
    });
}

export const UserServices = {
    getAllUsers,
    getUserById,
    updateStatus
};