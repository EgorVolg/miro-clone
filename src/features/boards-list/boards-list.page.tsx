import { rqClient } from "@/shared/api/instance";
import { CONFIG } from "@/shared/model/config";
import { ROUTES } from "@/shared/model/routes";
import { Link, href } from "react-router-dom";

const BoardListPage = () => {
  const boardsQuery = rqClient.useQuery("get", "/boards");
  console.log("boardsQuery", boardsQuery.data);

  return (
    <div className="board-page">
      <h1>Boards {CONFIG.API_BASE_URL}</h1>

      {boardsQuery.data?.map((board) => (
        <Link to={href(ROUTES.BOARD, { boardId: board.id })}>{board.name}</Link>
      ))}
    </div>
  );
};

export const Component = BoardListPage;
