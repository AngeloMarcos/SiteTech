import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/anglotech.sqlite',
      entities: [__dirname + '/src/projects/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProjectsModule,
  ],
})
export class AppModule {}
