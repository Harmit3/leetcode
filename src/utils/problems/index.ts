import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import {twoSum} from "./two-sum";
import {jumpGame} from "./jump-game";
import { validParentheses } from "./valid-parentheses";
import { Problem } from "../types/problem";


interface ProblemMap{
    [key:string]:Problem
}
export const problems:ProblemMap={
    "two-sum":twoSum,
    "reverse-linked-list":reverseLinkedList,
    "jump-game" :jumpGame,
    "serach-a-2d-matrix":search2DMatrix,
    "valid-parantheses":validParentheses
}