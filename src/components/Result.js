

function Result({ cardItems, itemNumber }) {
    // Calculate total
    const totalProtein = cardItems.reduce((acc, item, index) => {
        return acc + (parseFloat(item.protien) * itemNumber[index]);
    }, 0);

    const totalCalories = cardItems.reduce((acc, item, index) => {
        return acc + (parseFloat(item.calories) * itemNumber[index]);
    }, 0);

    const totalFats = cardItems.reduce((acc, item, index) => {
        return acc + (parseFloat(item.fat) * itemNumber[index]);
    }, 0);

    const totalCarbs = cardItems.reduce((acc, item, index) => {
        return acc + (parseFloat(item.carbs) * itemNumber[index]);
    }, 0);

    return (
        <div>
            <p>Total protein: {totalProtein} (g)</p>
            <p>Total Calories: {totalCalories} (g)</p>
            <p>Total Fats: {totalFats} (g)</p>
            <p>Total Carbs: {totalCarbs} (g)</p>
            {/* <p>Total result: {totalResult}</p> */}
        </div>
    );
}

export default Result;
