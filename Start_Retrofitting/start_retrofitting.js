function showResultsScreen(recommendations) {
    // Hide the input screen
    document.getElementById("retrofit-input-screen").style.display = "none";
    
    // Show the results screen
    document.getElementById("results-screen").style.display = "block";
  
    const recommendationsList = document.getElementById("recommendations-list");
    recommendationsList.innerHTML = ""; // Clear previous recommendations
  
    recommendations.forEach((rec) => {
      const li = document.createElement("li");
      li.textContent = rec;
      recommendationsList.appendChild(li);
    });
  }
  

// Retrofit Input Screen
function showRetrofitInput() {
    document.getElementById("retrofit-input-screen").style.display = "block";
    document.getElementById("results-screen").style.display = "none";
  }
  
  // Results Screen
  function showResultsScreen(recommendations) {
    document.getElementById("retrofit-input-screen").style.display = "none";
    document.getElementById("results-screen").style.display = "block";
  
    const recommendationsList = document.getElementById("recommendations-list");
    recommendationsList.innerHTML = ""; // Clear previous recommendations
    recommendations.forEach((rec) => {
      const li = document.createElement("li");
      li.textContent = rec;
      recommendationsList.appendChild(li);
    });
  }
  
  // Submit Retrofit Input
  function submitRetrofit() {
    const vehicleType = document.getElementById("vehicleType").value;
    const bodyType = document.getElementById("bodyType").value;
    const engineType = document.getElementById("engineType").value;
    const fuelEfficiency = parseFloat(document.getElementById("fuelEfficiency").value);
    const brakingSystem = document.getElementById("brakingSystem").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const thickness = parseFloat(document.getElementById("thickness").value);
    const tyreLife = parseFloat(document.getElementById("tyreLife").value);
    const vehicleLife = parseFloat(document.getElementById("vehicleLife").value);
    const bodyCondition = document.getElementById("bodyCondition").value;
    const electricalSystem = document.getElementById("electricalSystem").value;
    const rustLevel = document.getElementById("rustLevel").value;
  
    const recommendations = assessRetrofit(
      vehicleType,
      bodyType,
      engineType,
      fuelEfficiency,
      brakingSystem,
      weight,
      thickness,
      tyreLife,
      vehicleLife,
      bodyCondition,
      electricalSystem,
      rustLevel
    );
  
    showResultsScreen(recommendations);
  }
  
  // Assess Retrofit Recommendations
  function assessRetrofit(
    vehicleType,
    bodyType,
    engineType,
    fuelEfficiency,
    brakingSystem,
    weight,
    thickness,
    tyreLife,
    vehicleLife,
    bodyCondition,
    electricalSystem,
    rustLevel
  ) {
    const recommendations = [];
  
    // General checks
    if (weight > 200) {
      recommendations.push(
        "Consider upgrading to a stronger suspension for better compatibility with retrofitting."
      );
    }
  
    if (thickness < 2) {
      recommendations.push(
        "Reinforce the body material for better stability and retrofitting compatibility."
      );
    }
  
    if (fuelEfficiency < 30) {
      recommendations.push(
        "Consider upgrading to a more fuel-efficient engine to improve retrofitting compatibility."
      );
    }
  
    // Engine type checks
    if (engineType === "electric") {
      recommendations.push(
        "Consider adding a high-performance electric battery."
      );
    } else {
      recommendations.push("The vehicle is compatible with retrofitting.");
    }
  
    // Braking system
    if (brakingSystem === "drum") {
      recommendations.push(
        "Upgrade to a disc braking system for better performance and retrofitting compatibility."
      );
    }
  
    // Body type specific checks
    if (bodyType === "sport") {
      recommendations.push(
        "Install performance tires for better grip and retrofitting compatibility."
      );
    }
  
    if (vehicleType === "motorcycle") {
      recommendations.push(
        "Consider retrofitting with a high-performance engine."
      );
    }
  
    if (bodyType === "touring") {
      recommendations.push(
        "Consider installing advanced suspension for better comfort and retrofitting compatibility."
      );
    }
  
    if (fuelEfficiency < 25 && vehicleType === "scooter") {
      recommendations.push(
        "Upgrade to a more fuel-efficient engine to save fuel and improve retrofitting compatibility."
      );
    }
  
    // Tyre Life
    if (tyreLife < 20) {
      recommendations.push(
        "Consider replacing tyres due to low remaining life for better safety during retrofitting."
      );
    }
  
    // Vehicle Life
    if (vehicleLife > 15) {
      recommendations.push(
        "Vehicle has been used extensively. Check for signs of wear and consider major upgrades for retrofitting compatibility."
      );
    }
  
    // Body Condition
    switch (bodyCondition) {
      case "bad":
        recommendations.push(
          "The body condition is bad. Consider repainting or reinforcing the body structure."
        );
        break;
      case "worse":
        recommendations.push(
          "The body condition is worse. Major bodywork repair is recommended."
        );
        break;
      case "average":
        recommendations.push(
          "The body condition is average. Regular maintenance and minor repairs may be required."
        );
        break;
      case "good":
        recommendations.push(
          "The body condition is good. No major issues detected."
        );
        break;
      default:
        break;
    }
  
    // Electrical system check
    if (electricalSystem === "nonFunctional") {
      recommendations.push(
        "The electrical system is non-functional. Repair or replacement is necessary for retrofitting."
      );
    } else if (electricalSystem === "minorIssues") {
      recommendations.push(
        "The electrical system has minor issues. Ensure repairs are made for reliable retrofitting."
      );
    }
  
    // Rust level check
    if (rustLevel === "severe") {
      recommendations.push(
        "Severe rust detected. Bodywork repair is essential before retrofitting."
      );
    } else if (rustLevel === "moderate") {
      recommendations.push(
        "Moderate rust detected. Consider treating the rust for improved safety and longevity."
      );
    }
  
    return recommendations;
  }
  
  // Initialize Home Screen on load
  window.onload = showRetrofitInput;

    function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
  
    // Toggle the sidebar
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    } else {
      sidebar.classList.add("open");
    }
  }
  