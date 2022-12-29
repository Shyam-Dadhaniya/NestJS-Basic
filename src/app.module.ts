import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "172.16.5.195",
      username: "postgres",
      port: 5432,
      password: "adminadmin",
      database: "postgres",
      synchronize: true,
      entities: [__dirname + "/**/*.entity.{js,ts}"],
    }),
  ],
})
export class AppModule {}
