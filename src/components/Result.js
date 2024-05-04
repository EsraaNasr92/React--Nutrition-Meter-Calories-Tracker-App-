function Result({cardItems}){

    const totalProtien = cardItems.reduce((acc, cardItems) => acc + parseFloat(cardItems.protien), 0);
    const totalCalories = cardItems.reduce((acc, cardItems) => acc + parseFloat(cardItems.calories), 0);
    const totalCarbs = cardItems.reduce((acc, cardItems) => acc +parseFloat(cardItems.carbs), 0)
    const totalFats = cardItems.reduce((acc, cardItems) => acc +parseFloat(cardItems.fat), 0);
    
    return(
        <div>
            <p>Total protien: {totalProtien}</p>
            <p>Total calories: {totalCalories}</p>
            <p>Total carbs: {totalCarbs}</p>
            <p>Total fats: {totalFats}</p>  
        </div>
    );
}

export default Result;