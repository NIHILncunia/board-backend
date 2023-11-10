import {
  Controller, Delete, Get, Patch, Post
} from '@nestjs/common';
import { Boards } from '@prisma/client';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly boardsService: BoardsService
  ) {}

  @Get('/')
  async getBoards() {
    return this.boardsService.getBoards();
  }

  @Get('/:id')
  async getBoardById(id: number) {
    return this.boardsService.getBoardById(id);
  }

  @Post('/')
  async createBoard(createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Patch('/:id')
  async updateBoard(id: number, updateBoardDto: Partial<Boards>) {
    return this.boardsService.updateBoard(id, updateBoardDto);
  }

  @Delete('/:id')
  async deleteBoard(id: number) {
    return this.boardsService.deleteBoard(id);
  }
}
