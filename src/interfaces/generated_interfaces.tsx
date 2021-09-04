// File contains interfaces generated from schemas/calculator.schema.json
// Currently these are produced and updated manually.
// This will be superceded with the use of a generation script (python via Jinja).
// See: SettleUpCalc/code_generation/interface_generator.py

export interface CalculatorType { 
    id: number,
    questions: QuestionType[]
}

export interface QuestionType {
    questionNumber: number,
    questionType: string,
    questionText: string,
    questionSecondaryText?: string,
    questionScoreValue?: number | number[]
    questionSuccessor?: number
    questionAnswer?: number | string
    questionChoices?: QuestionChoiceType[]
}

export interface QuestionChoiceType {
    choiceId: number,
    value: string
}