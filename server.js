import { TextServiceClient } from "@google-ai/generativelanguage"
import express from 'express';
// .v1beta2;
import  { GoogleAuth } from "google-auth-library";
const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyCPGn0HvHr-1aChuBz4W7LKWY60CThZ1C8";



const app = express();
app.use(express.json());

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const useAi = async(prompt)=>{
    try{
        const result = await client
            .generateText({
                model: MODEL_NAME,
                prompt: {
                    text: prompt,
                },
        })
        return result;
    }catch(error){
        return error
    }
}


app.post('/', async(req, res)=>{
    const { ingredient, User } = req.body;
    if(!ingredient || !User) return res.send().json({Message: "Ingredient And User Was Not Found!"})
    // return console.log(User)
    const { type, 
            goals, 
            allergy, 
            productivity, 
            age, 
            gender, 
            weight, 
            FatPercentage, 
            height,
            MusclePercentage,
        } = User;

    const prompt_1 = `i'm a ${gender ?? 'male'} ${age ?? '24'} yo, ${height ?? 1.5} m tall, ${weight ?? 60} kg weight, ${FatPercentage ?? 13}% fat persentage, ${MusclePercentage ?? 30}% mascule mass, i do ${type.type ?? 'Gymnastics'} and my goal is ${goals.goal ?? "Muscle Growth"}, give me 2 meals afterWorkout and preWorkout that could help me rache my goals,${allergy ? `keep in mind that i have ${allergy.allergy} allergy` : ""}, be more specific about ingredient, and measure by gram, liter, tablespoon, cup or unit use this ingredient: ${ingredient}. and return json format like this :{'ingredient': 'banana', quantity: 1', 'measure': 'unit'}, {'ingredient': 'rice', 'quantity': 100', 'measure':'Gram'}`;
    
    // "{'ingredient': 'banana', quantity: 1', 'unit': 'unit'}, {'ingredient': 'rice', 'quantity': 100', 'unit':'g'}"
    // const prompt_1 = "Discuss this idea in a academic way as construction. the common charactrtistics of teaching methods that are based on learners needs"
    try{
        const result = await useAi(prompt_1)
        console.log(prompt_1)
        // console.log(result[0].candidates[0].output);
        // const prompt_2 = `convert this into json foramt with name of ingredient and the quantity like this { "name": " protein powder","quantity": 25g }, ${result[0].candidates[0].output}`
        // const finalMeal = await useAi(prompt_2);
        // console.log(result[0].candidates[0].output)
        return res.send(result[0].candidates[0].output);
    }catch(error){
        return res.send({
            Message: "We are not able to generate your meals Please try again...",
            error: error
        })
    }    
})


const PORT = '8008'
app.listen(PORT, ()=> console.log(`we live...at ${PORT}`))