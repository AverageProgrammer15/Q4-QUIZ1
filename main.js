function CheckBMI(w_id,h_id, BMI_Dis = NaN, Category_Dis = NaN){
    let Weight = Number(document.getElementById(w_id).value);
    let Height = Number(document.getElementById(h_id).value);
    // Based on multiple sources + ChatGpt
    BMI_Result = Math.round(Weight/Math.pow(Height, 2))

    CategoryResult = NaN
    // Underweight
    if (BMI_Result< 18.5){
        CategoryResult = "Underweight"
    // Normal Weight
    } else if(BMI_Result >=18.5 && BMI_Result <= 24.9){
        CategoryResult = "Normal Weight"
    // Overweight
    } else if(BMI_Result >= 25 && BMI_Result <= 29.9){
        CategoryResult = "Overweight"
    // Obese
    } else{
        CategoryResult = "Obese"
    }

    console.log(CategoryResult, "|", BMI_Result)

    try{
        // Will run if ids are accessible to edit
        document.getElementById(BMI_Dis).innerHTML = BMI_Result
        document.getElementById(Category_Dis).innerHTML = CategoryResult
    } catch{
        // If it can't access the ids, then it will just broadcast through window.alert()
        window.alert("Can't broadcast results! Results: "+ CategoryResult + " | "+ BMI_Result)
    }


}