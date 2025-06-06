import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { NotasModule } from './notas/notas.module';
import { ClientesModule } from './clientes/clientes.module';
import { FidelidadeModule } from './fidelidade/fidelidade.module';

@Module({
  imports: [ProductsModule, FuncionariosModule, NotasModule, ClientesModule, FidelidadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
