import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addLshapePossibleMoves(moves: Array<Square>, currentSquare : Square) {
        for (let colDelta = 2; colDelta > -3; colDelta--) {
            for (let rowDelta = 2; rowDelta > -3; rowDelta--) {
                if (colDelta === rowDelta || colDelta * rowDelta === 0 || colDelta === -rowDelta) {
                    continue;
                }
                let squareToAdd = new Square(currentSquare.row + rowDelta, currentSquare.col + colDelta);
                if (!this.checkInBoardLimits(squareToAdd)) {
                    continue;
                }
                moves.push(squareToAdd);
            }
        }
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves : Array<Square> = [];
        let currentSquare : Square = board.findPiece(this);
        this.board = board;

        this.addLshapePossibleMoves(moves, currentSquare);

        return moves;
    }
}
