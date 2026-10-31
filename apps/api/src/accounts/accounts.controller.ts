import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AccountsService } from './accounts.service.js';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  getAccountService() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.accountsService.findById(id);
  }
}
