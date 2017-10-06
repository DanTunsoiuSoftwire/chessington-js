import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    private readonly direction: number;
    protected moved:boolean;

    public constructor(player: Player) {
        super(player);
        this.moved = false;
        if (player == Player.WHITE) {
            this.direction = 1;
        } else {
            this.direction = -1;
        }
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves : Array<Square> = [];
        let currentSquare : Square = board.findPiece(this);

        let squareToAdd: Square = new Square(currentSquare.row + this.direction, currentSquare.col);
        if (this.checkPieceOnSpot(squareToAdd, board)) {
            return moves;
        }
        moves.push(squareToAdd);

        if (!this.moved) {
            squareToAdd = new Square(currentSquare.row + 2 * this.direction, currentSquare.col)
            if (this.checkPieceOnSpot(squareToAdd, board)) {
                return moves;
            }
            moves.push(squareToAdd);
        }

        return moves;
    }

    public moveTo(board: Board, newSquare: Square) {
        super.moveTo(board, newSquare);
        this.moved = true;
    }
}
