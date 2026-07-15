import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addMovesAroundPiece(moves: Array<Square>, currentSquare : Square) {
        for (let currentRow = -1; currentRow < 2; currentRow++) {
            for (let currentCol = -1; currentCol < 2; currentCol++) {
                if (currentRow + currentCol === 0 && currentCol === currentRow) {
                    continue;
                }
                moves.push(new Square(currentSquare.row + currentRow, currentSquare.col + currentCol));
            }
        }
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves : Array<Square> = [];
        let currentSquare : Square = board.findPiece(this);

        this.addMovesAroundPiece(moves, currentSquare);

        return moves;
    }
}
