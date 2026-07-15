import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import LineMovable from "./lineMovable";

export default class Bishop extends LineMovable {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves: Array<Square> = new Array<Square>();
        let currentSquare: Square = board.findPiece(this);

        this.addPossibleMovesFirstDiagonal(currentSquare, moves);
        this.addPossibleMovesSecondDiagonal(currentSquare, moves);

        return moves;
    }
}
