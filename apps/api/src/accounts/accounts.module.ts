import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Account } from './account.model'
import { AccountsResolver } from './accounts.resolver'
import { AccountsService } from './accounts.service'

@Module({
	imports: [TypeOrmModule.forFeature([Account])],
	providers: [AccountsService, AccountsResolver],
	exports: [AccountsService],
})
export class AccountsModule {}
