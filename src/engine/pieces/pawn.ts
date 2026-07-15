import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves : Array<Square> = [];
        let currentSquare : Square = board.findPiece(this);

        if (this.player == Player.WHITE) {
            moves.push(new Square(currentSquare.row + 1, currentSquare.col));
        } else {
            moves.push(new Square(currentSquare.row - 1, currentSquare.col));
        }

        return moves;
    }
}
