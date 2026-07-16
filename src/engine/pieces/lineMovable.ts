import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import Directions from "../directions";

export default class LineMovable extends Piece {

    protected addPossibleMovesInLine(moves: Array<Square>, currentSquare: Square, currentDirection: Directions) {
        let rowDelta = currentDirection.row, colDelta = currentDirection.col;

        while (true) {
            let currentPossibleSquare = new Square(currentSquare.row + rowDelta, currentSquare.col + colDelta);

            if (!this.checkInBoardLimits(currentPossibleSquare) || this.checkPieceOnSpot(currentPossibleSquare)) {
                return;
            }

            moves.push(currentPossibleSquare);

            rowDelta += currentDirection.row;
            colDelta += currentDirection.col;
        }
    }

    protected addPossibleMovesFirstDiagonal(currentSquare: Square, moves: Square[]) {
        this.addPossibleMovesInLine(moves, currentSquare, new Directions(1, 1));
        this.addPossibleMovesInLine(moves, currentSquare, new Directions(-1, -1));
    }

    protected addPossibleMovesSecondDiagonal(currentSquare: Square, moves: Square[]) {
        this.addPossibleMovesInLine(moves, currentSquare, new Directions(1, -1));
        this.addPossibleMovesInLine(moves, currentSquare, new Directions(-1, 1));
    }

    protected addPossibleMovesRow(currentSquare: Square, moves: Square[]) {
        this.addPossibleMovesInLine(moves, currentSquare, new Directions(1, 0));
        this.addPossibleMovesInLine(moves, currentSquare, new Directions(-1, 0));
    }

    protected addPossibleMovesColumn(currentSquare: Square, moves: Square[]) {
        this.addPossibleMovesInLine(moves, currentSquare, new Directions(0, 1));
        this.addPossibleMovesInLine(moves, currentSquare, new Directions(0, -1));
    }
}