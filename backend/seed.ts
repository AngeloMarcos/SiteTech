import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Project } from './src/projects/project.entity';
dotenv.config();
async function runSeed() {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: 'data/anglotech.sqlite',
    entities: [__dirname + '/src/projects/*.entity{.ts,.js}'],
    synchronize: true,
  });
  await dataSource.initialize();
  const repo = dataSource.getRepository(Project);
  await repo.clear();
  const exemplos = [
    { title: 'Site Institucional', description: 'Site para apresentar sua empresa ao mundo.' },
    { title: 'E-commerce Ágil', description: 'Loja online rápida e responsiva.' },
    { title: 'Painel Admin', description: 'Dashboard para gerenciar seus dados.' },
  ];
  for (const dto of exemplos) {
    await repo.save(repo.create(dto));
  }
  await dataSource.destroy();
}
runSeed().catch(err => {
  console.error(err);
  process.exit(1);
});
