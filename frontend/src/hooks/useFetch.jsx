import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([]);
    const img = 'https://images.unsplash.com/photo-1588551650401-234f93734337?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    useEffect(() => {
        // Example food data
        const preWorkoutFoods = [
            {   
                id: 1,
                category: "Pre-Workout",
                calories: 400,
                protein: 30,
                carbs: 50,
                fat: 10,
                ingredients: [
                    "Greek yogurt with berries",
                    "Whole grain toast with almond butter",
                    "Sliced apple"
                ],
                image: img,
                price: 8
            },
            {
                id: 2,
                category: "Pre-Workout",
                calories: 350,
                protein: 25,
                carbs: 40,
                fat: 8,
                ingredients: [
                    "Banana smoothie with protein powder",
                    "Oatmeal with sliced strawberries",
                    "Hard-boiled eggs"
                ],
                image: img,
                price: 7
            },
            // Add more pre-workout food items as needed
        ];

        const afterWorkoutFoods = [
            {
                id: 3,
                category: "After-Workout",
                calories: 600,
                protein: 40,
                carbs: 70,
                fat: 15,
                ingredients: [
                    "Grilled chicken breast with quinoa",
                    "Steamed broccoli and carrots",
                    "Sweet potato wedges"
                ],
                image: img,
                price: 12
            },
            {
                id: 4,
                category: "After-Workout",
                calories: 500,
                protein: 35,
                carbs: 60,
                fat: 12,
                ingredients: [
                    "Salmon with brown rice",
                    "Mixed green salad with avocado",
                    "Cottage cheese"
                ],
                image: img,
                price: 10
            },
            // Add more after-workout food items as needed
        ];

        setFoods([...preWorkoutFoods, ...afterWorkoutFoods, ...preWorkoutFoods, ...afterWorkoutFoods]);
    }, []);

    
    // useEffect(() => {

    //     fetch('http://127.0.0.1:8000/api/meals')
    //         .then(res => res.json())
    //         .then(data => {
    //             setFoods(data);
    //             console.log(data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    
    // }, []);
        
    return [foods, setFoods];
};

export default useFetch;


