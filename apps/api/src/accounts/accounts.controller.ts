import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import * as accountsService from './accounts.service.js';
import { CreateAccountDto } from './dto/create-account.dto.js';

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly accountsService: accountsService.AccountsService,
  ) {}

  @Get()
  getAccountService() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: string) {
    return this.accountsService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED) // 201
  create(@Body() data: CreateAccountDto) {
    const account = this.accountsService.createAccount(data);
    return { message: 'Account created', data: account };
  }
}
