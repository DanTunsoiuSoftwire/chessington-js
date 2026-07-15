import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;
    protected moved:boolean;

    public constructor(player: Player) {
        this.player = player;
        this.moved = false;
    }

    protected addFirstDiagonalPossibleMoves(moves: Array<Square>, currentSquare: Square) {
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

    protected addSecondDiagonalPossibleMoves(moves: Array<Square>, currentSquare: Square) {
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

    protected addRowsPossibleMoves(currentSquare: Square, moves: Square[]) {
        for (let currentColumn = currentSquare.col - 1; currentColumn > -1; currentColumn--) {
            let newPossibleSquare: Square = new Square(currentSquare.row, currentColumn);

            moves.push(newPossibleSquare);
        }

        for (let currentColumn = currentSquare.col + 1; currentColumn < 8; currentColumn++) {
            let newPossibleSquare: Square = new Square(currentSquare.row, currentColumn);

            moves.push(newPossibleSquare);
        }
    }

    protected addColumnsPossibleMoves(currentSquare: Square, moves: Square[]) {
        for (let currentRow = currentSquare.row - 1; currentRow > -1; currentRow--) {
            let newPossibleSquare: Square = new Square(currentRow, currentSquare.col);

            moves.push(newPossibleSquare);
        }

        for (let currentRow = currentSquare.row + 1; currentRow < 8; currentRow++) {
            let newPossibleSquare: Square = new Square(currentRow, currentSquare.col);

            moves.push(newPossibleSquare);
        }
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.moved = true;
    }
}
