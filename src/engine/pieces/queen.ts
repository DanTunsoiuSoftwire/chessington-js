import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) : Array<Square> {
        let moves: Array<Square> = new Array<Square>();
        let currentSquare: Square = board.findPiece(this);

        this.addRowsPossibleMoves(currentSquare, moves);
        this.addColumnsPossibleMoves(currentSquare, moves);
        this.addFirstDiagonalPossibleMoves(moves, currentSquare);
        this.addSecondDiagonalPossibleMoves(moves, currentSquare);

        return moves;
    }
}
