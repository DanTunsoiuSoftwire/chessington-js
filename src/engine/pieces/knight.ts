import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addLshapePossibleMoves(moves: Array<Square>, currentSquare : Square) {
        for (let currentCol = 2; currentCol > -3; currentCol--) {
            for (let currentRow = 2; currentRow > -3; currentRow--) {
                if (currentCol === currentRow || currentCol * currentRow === 0 || currentCol === -currentRow) {
                    continue;
                }
                moves.push(new Square(currentSquare.row + currentRow, currentSquare.col + currentCol));
            }
        }
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves : Array<Square> = [];
        let currentSquare : Square = board.findPiece(this);

        this.addLshapePossibleMoves(moves, currentSquare);

        return moves;
    }
}
