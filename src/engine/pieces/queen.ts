import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import LineMovable from "./lineMovable";

export default class Queen extends LineMovable {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves: Array<Square> = new Array<Square>();
        let currentSquare: Square = board.findPiece(this);
        this.board = board;

        this.addPossibleMovesRow(currentSquare, moves);
        this.addPossibleMovesColumn(currentSquare, moves);
        this.addPossibleMovesFirstDiagonal(currentSquare, moves);
        this.addPossibleMovesSecondDiagonal(currentSquare, moves);

        return moves;
    }
}
