import { QuestionType } from '../../interfaces/generated_interfaces'


export interface CalculatorState {
      counter: number,
      questions: QuestionType[],
      currentQuestionId: number
}