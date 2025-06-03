import { ROUTES } from "@/shared/model/routes";
import { Link, href } from "react-router-dom";

const BoardPage = () => {
  return (
    <div className="board-page">
      <h1>Board List </h1>
      <Link to={href(ROUTES.BOARD, { boardId: "2" })}>link</Link>
    </div>
  );
};

export const Component = BoardPage;
