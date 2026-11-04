import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface TypeAccount {
  id: string;
  name: string;
  balance: number;
}
export type TypeCreateAccount = Omit<TypeAccount, 'id'>;

@Injectable()
export class AccountsService {
  private readonly accounts: TypeAccount[] = [
    { id: '1', name: 'Nubank', balance: 1500 },
    { id: '2', name: 'Inter', balance: 2500 },
  ];

  findAll(): TypeAccount[] {
    return this.accounts;
  }

  findById(id: string): TypeAccount {
    const account = this.accounts.find((account) => account.id === id);

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    return account;
  }

  createAccount(data: TypeCreateAccount): TypeAccount {
    const account: TypeAccount = {
      id: randomUUID(),
      name: data.name,
      balance: data.balance,
    };

    this.accounts.push(account);
    return account;
  }
}
