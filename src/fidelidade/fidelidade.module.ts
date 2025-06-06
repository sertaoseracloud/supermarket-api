import { Module } from '@nestjs/common';
import { FidelidadeService } from './fidelidade.service';
import { FidelidadeController } from './fidelidade.controller';

@Module({
  controllers: [FidelidadeController],
  providers: [FidelidadeService],
})
export class FidelidadeModule {}
