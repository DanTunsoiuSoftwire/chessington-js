import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addMovesAroundPiece(moves: Array<Square>, currentSquare : Square) {
        for (let rowDelta = -1; rowDelta < 2; rowDelta++) {
            for (let colDelta = -1; colDelta < 2; colDelta++) {
                if (colDelta + rowDelta === 0 && colDelta === rowDelta) {
                    continue;
                }
                moves.push(new Square(currentSquare.row + rowDelta, currentSquare.col + colDelta));
            }
        }
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves : Array<Square> = [];
        let currentSquare : Square = board.findPiece(this);
        this.board = board;

        this.addMovesAroundPiece(moves, currentSquare);

        return moves;
    }
}
