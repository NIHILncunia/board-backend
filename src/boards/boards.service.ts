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

  async getBoards() {
    return this.prisma.boards.findMany();
  }

  async getBoardById(id: number) {
    return this.prisma.boards.findUnique({
      where: {
        id,
      },
    });
  }

  async createBoard(createBoardDto: CreateBoardDto) {
    return this.prisma.boards.create({
      data: createBoardDto,
    });
  }

  async updateBoard(id: number, updateBoardDto: Partial<Boards>) {
    return this.prisma.boards.update({
      where: {
        id,
      },
      data: updateBoardDto,
    });
  }

  async deleteBoard(id: number) {
    return this.prisma.boards.delete({
      where: {
        id,
      },
    });
  }
}
