import { Injectable } from '@nestjs/common';
import { Boards } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly prisma: PrismaService
  ) { }

  async getBoards(): Promise<Boards[]> {
    return this.prisma.boards.findMany();
  }

  async getBoardById(id: number): Promise<Boards> {
    return this.prisma.boards.findUnique({
      where: {
        id,
      },
    });
  }

  getBoardsByPage(pageNumber: number): Promise<Boards[]> {
    const take = 5;
    return this.prisma.boards.findMany({
      skip: (pageNumber - 1) * take,
      take,
      orderBy: {
        created: 'desc',
      },
    });
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Boards> {
    return this.prisma.boards.create({
      data: createBoardDto,
    });
  }

  async updateBoard(id: number, updateBoardDto: Partial<Boards>): Promise<Boards> {
    return this.prisma.boards.update({
      where: {
        id,
      },
      data: updateBoardDto,
    });
  }

  async deleteBoard(id: number): Promise<Boards> {
    return this.prisma.boards.delete({
      where: {
        id,
      },
    });
  }
}
