import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const user1 = await prisma.user.create({
    data: {
      username: "levi",
      email: "levi@email.com",
      password: "123456",
      bio: "Jogador de videogames",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "gamer123",
      email: "gamer123@email.com",
      password: "123456",
      bio: "Apaixonado por jogos",
    },
  });

  const game1 = await prisma.game.create({
    data: {
      title: "The Last of Us Part II",
      genre: "Ação",
      category: "Aventura",
      description: "Jogo de ação e aventura.",
    },
  });

  const game2 = await prisma.game.create({
    data: {
      title: "Red Dead Redemption 2",
      genre: "Ação",
      category: "Mundo aberto",
      description: "Jogo de ação e aventura em mundo aberto.",
    },
  });

  await prisma.library.create({
    data: {
      userId: user1.id,
      gameId: game1.id,
      status: "jogando",
      favorite: true,
    },
  });

  await prisma.library.create({
    data: {
      userId: user2.id,
      gameId: game2.id,
      status: "zerado",
      favorite: true,
    },
  });

  await prisma.review.create({
    data: {
      userId: user1.id,
      gameId: game1.id,
      rating: 5,
    },
  });

  await prisma.comment.create({
    data: {
      userId: user1.id,
      gameId: game1.id,
      content: "Excelente jogo!",
    },
  });

  console.log("Seed executada com sucesso!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });