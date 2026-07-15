import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addFirstDiagonalPossibleMoves(moves: Array<Square>, currentSquare: Square) {
        for (let currentRow = currentSquare.row + 1, currentCol = currentSquare.col + 1;
             currentRow < 8 && currentCol < 8; currentRow++, currentCol++) {
            let newPossibleSquare: Square = new Square(currentRow, currentCol);

            moves.push(newPossibleSquare);
        }


        for (let currentRow = currentSquare.row - 1, currentCol = currentSquare.col - 1;
             currentRow > -1 && currentCol > -1; currentRow--, currentCol--) {
            let newPossibleSquare: Square = new Square(currentRow, currentCol);

            moves.push(newPossibleSquare);
        }
    }

    private addSecondDiagonalPossibleMoves(moves: Array<Square>, currentSquare: Square) {
        for (let currentRow = currentSquare.row + 1, currentCol = currentSquare.col - 1;
             currentRow < 8 && currentCol > -1; currentRow++, currentCol--) {
            let newPossibleSquare: Square = new Square(currentRow, currentCol);

            moves.push(newPossibleSquare);
        }

        for (let currentRow = currentSquare.row - 1, currentCol = currentSquare.col + 1;
             currentRow > -1 && currentCol < 8; currentRow--, currentCol++) {
            let newPossibleSquare: Square = new Square(currentRow, currentCol);

            moves.push(newPossibleSquare);
        }
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves: Array<Square> = new Array<Square>();
        let currentSquare: Square = board.findPiece(this);

        this.addFirstDiagonalPossibleMoves(moves, currentSquare);
        this.addSecondDiagonalPossibleMoves(moves, currentSquare);

        return moves;
    }
}
