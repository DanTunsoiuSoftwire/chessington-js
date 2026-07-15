import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addRowsPossibleMoves(currentSquare: Square, moves: Square[]) {
        for (let currentColumn = currentSquare.col - 1; currentColumn > -1; currentColumn--) {
            let newPossibleSquare: Square = new Square(currentSquare.row, currentColumn);

            moves.push(newPossibleSquare);
        }

        for (let currentColumn = currentSquare.col + 1; currentColumn < 8; currentColumn++) {
            let newPossibleSquare: Square = new Square(currentSquare.row, currentColumn);

            moves.push(newPossibleSquare);
        }
    }

    private addColumnsPossibleMoves(currentSquare: Square, moves: Square[]) {
        for (let currentRow = currentSquare.row - 1; currentRow > -1; currentRow--) {
            let newPossibleSquare: Square = new Square(currentRow, currentSquare.col);

            moves.push(newPossibleSquare);
        }

        for (let currentRow = currentSquare.row + 1; currentRow < 8; currentRow++) {
            let newPossibleSquare: Square = new Square(currentRow, currentSquare.col);

            moves.push(newPossibleSquare);
        }
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves: Array<Square> = new Array<Square>();
        let currentSquare: Square = board.findPiece(this);

        this.addRowsPossibleMoves(currentSquare, moves);
        this.addColumnsPossibleMoves(currentSquare, moves);

        return moves;
    }
}
