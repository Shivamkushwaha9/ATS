import { Question } from "../models/question.model.js";


export const saveGenQuestionsInMongoDB = async (data) => {
    console.log("Hello from question.controller(Bro get life and stop writing bad code please)");
    try {
        const generatedQuestions = new Question({
            questions : data
        });
        return await generatedQuestions.save();
        
    } catch (error) {
        console.log(`Some error occured while generating questions(Ye question.controller.js wale me error aa raha from line 6):${error}`)
    }
}