import { Injectable, NotFoundException } from '@nestjs/common';

export interface Account {
  id: number;
  name: string;
  balance: number;
}

@Injectable()
export class AccountsService {
  private readonly accounts: Account[] = [
    { id: 1, name: 'Nubank', balance: 1500 },
    { id: 2, name: 'Inter', balance: 2500 },
  ];

  findAll(): Account[] {
    return this.accounts;
  }

  findById(id: number): Account {
    const account = this.accounts.find((account) => account.id === id);

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    return account;
  }
}
