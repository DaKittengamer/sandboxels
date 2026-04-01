elements.decamethyldizincocene = {
    color: ["#000000"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 10,
    tempHigh: 110,
    stateHigh: "smoke",
}
elements.4amino2methyl1naphthol = {
    color: ["#ffffff"],
    bahavior: behaviors.POWDER,
    catogory: "powders",
    state: "powders",
    density: 10,
    tempHigh: 280,
    stateHigh: "smoke",
}
elements.lithium = {
    color: ["#dadbdd"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solids",
    density: 10,
    tempHigh: 181,
    stateHigh: "liquidlithium"
}
elements.liquidlithium = {
    color: ["#dadbdd"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquids",
    density: 10,
    tempLow: 180,
    stateLow: "lithium",
    tempHigh: 1344,
    stateHigh: "lithiumgas",
}
elements.lithiumgas = {
    color: ["#000000"],
    behavior: behaviors.GAS,
    catogory: "gases",
    state: "gas",
    density: 10,
    tempLow: 1343,
    stateLow: "liquidlithium",
}
