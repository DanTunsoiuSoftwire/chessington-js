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

    private addPossibleMoveAbove(currentSquare: Square, moves: Array<Square>) {
        let squareToAdd: Square = new Square(currentSquare.row + this.direction, currentSquare.col);
        if (!this.checkInBoardLimits(squareToAdd) || this.checkPieceOnSpot(squareToAdd)) {
            return;
        }
        moves.push(squareToAdd);
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves : Array<Square> = [];
        let currentSquare : Square = board.findPiece(this);
        this.board = board;

        this.addPossibleMoveAbove(currentSquare, moves);

        if (!this.moved && moves.length > 0) {
            this.addPossibleMoveAbove(moves[0], moves);
        }

        return moves;
    }

    public moveTo(board: Board, newSquare: Square) {
        super.moveTo(board, newSquare);
        this.moved = true;
    }
}
