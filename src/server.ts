import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany();

  res.json(games);
});

app.post("/games", async (req, res) => {
  const { title, genre, category, description } = req.body;

  const game = await prisma.game.create({
    data: {
      title,
      genre,
      category,
      description,
    },
  });

  res.status(201).json(game);
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

app.post("/users", async (req, res) => {
  const { username, email, password, bio } = req.body;

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
      bio,
    },
  });

  res.status(201).json(user);
});

app.post("/library", async (req, res) => {
  const { userId, gameId, status, favorite } = req.body;

  const library = await prisma.library.create({
    data: {
      userId,
      gameId,
      status,
      favorite,
    },
  });

  res.status(201).json(library);
});

app.get("/users/:id/library", async (req, res) => {
  const userId = Number(req.params.id);

  const library = await prisma.library.findMany({
    where: {
      userId,
    },
    include: {
      game: true,
    },
  });

  res.json(library);
});
app.post("/games/:id/reviews", async (req, res) => {
  const gameId = Number(req.params.id);
  const { userId, rating } = req.body;

  const review = await prisma.review.create({
    data: {
      userId,
      gameId,
      rating,
    },
  });

  res.status(201).json(review);
});

app.post("/games/:id/comments", async (req, res) => {
  const gameId = Number(req.params.id);
  const { userId, content } = req.body;

  const comment = await prisma.comment.create({
    data: {
      userId,
      gameId,
      content,
    },
  });

  res.status(201).json(comment);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});