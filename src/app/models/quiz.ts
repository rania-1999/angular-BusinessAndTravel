import { Question } from "./question";

export class Quiz {
    idQuiz:number;
    entreprise_id:number;
    nameQuiz:string;
    numQuestion:number;
    TypeQuiz:string;
    questions:Question[]
}
