import {
  Body,
  Controller, Delete, Get, Param, Patch, Post, Query
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
  async getBoards(): Promise<Boards[]> {
    return this.boardsService.getBoards();
  }

  @Get('/page')
  async getBoardsByPage(
    @Query('pageNumber') pageNumber: number
  ): Promise<Boards[]> {
    return this.boardsService.getBoardsByPage(pageNumber);
  }

  @Get('/:id')
  async getBoardById(@Param('id') id: number): Promise<Boards> {
    return this.boardsService.getBoardById(id);
  }

  @Post('/')
  async createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Boards> {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Patch('/:id')
  async updateBoard(
    @Param('id') id: number,
    @Body() updateBoardDto: Partial<Boards>
  ): Promise<Boards> {
    return this.boardsService.updateBoard(id, updateBoardDto);
  }

  @Delete('/:id')
  async deleteBoard(@Param('id') id: number): Promise<Boards> {
    return this.boardsService.deleteBoard(id);
  }
}
