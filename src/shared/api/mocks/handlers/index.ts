import { http, HttpResponse } from "msw";
import type { ApiSchemas } from "../../schema";

const boards: ApiSchemas["Board"][] = [
  {
    id: "Board 1",
    name: "Project Board",
  },
  {
    id: "Board 2",
    name: "Personal Board",
  },
  {
    id: "Board 3",
    name: "Work Board",
  },
];

export const handlers = [
  http.get("/boards", () => {
    return HttpResponse.json(boards);
  }),

  http.post("/boards", async (ctx) => {
    const data = await ctx.request.json();
    const board = {
      id: crypto.randomUUID(),
      name: data.name,
    };
    boards.push(board);
    return HttpResponse.json(board);
  }),

  http.delete("/boards/{boardId}", ({ params }) => {
    const { boardId } = params;
    const index = boards.findIndex((board) => board.id === boardId);
    if (index === -1) {
      return HttpResponse.json({ message: "Board not found" }, { status: 404 });
    }
    boards.splice(index, 1);
    return HttpResponse.json({ message: "Board deleted successfully" });
  }),
];
