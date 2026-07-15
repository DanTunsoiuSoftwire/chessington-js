import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    private direction: number;

    public constructor(player: Player) {
        super(player);
        if (player == Player.WHITE) {
            this.direction = 1;
        } else {
            this.direction = -1;
        }
    }

    public addFirstMove(moves: Array<Square>) : Array<Square> {
        if (!this.moved) {
            let previousAvailableMove: Square = moves[0];
            moves.push(new Square(previousAvailableMove.row + this.direction, previousAvailableMove.col));
        }

        return moves;
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves : Array<Square> = [];
        let currentSquare : Square = board.findPiece(this);

        moves.push(new Square(currentSquare.row + this.direction, currentSquare.col));
        moves = this.addFirstMove(moves);

        return moves;
    }
}
