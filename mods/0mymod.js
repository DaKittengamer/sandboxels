elements.decamethyldizincocene = {
    color: ["#000000"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 10,
    tempHigh: 110,
    stateHigh: "smoke",
    temp: 55,
}
elements.4amino2methyl1naphthol = {
    color: ["#ffffff"],
    bahavior: behaviors.POWDER,
    catogory: "powders",
    state: "powder",
    density: 10,
    tempHigh: 280,
    stateHigh: "smoke",
    temp: 140,
}
elements.lithium = {
    color: ["#dadbdd"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    density: 10,
    tempHigh: 180,
    stateHigh: "liquidlithium",
    temp: 90,
}
elements.liquidlithium = {
    color: ["#dadbdd"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquid",
    density: 10,
    tempLow: 181,
    stateLow: "lithium",
    tempHigh: 1344,
    stateHigh: "lithiumgas",
    temp: 700,
}
elements.lithiumgas = {
    color: ["#000000"],
    behavior: behaviors.GAS,
    catogory: "gases",
    state: "gas",
    density: 10,
    tempLow: 1343,
    stateLow: "liquidlithium",
    temp: 1500,
}
