elements.decamethyldizincocene = {
    color: ["#000000"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 10,
    tempHigh: 110,
    stateHigh: "smoke",
    temp: 20,
}
elements.fouraminotwomethylonenaphthol = {
    color: ["#ffffff"],
    bahavior: behaviors.POWDER,
    catogory: "powders",
    state: "powder",
    density: 10,
    tempHigh: 280,
    stateHigh: "smoke",
    temp: 20,
}
elements.lithium = {
    color: ["#dadbdd"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    density: 10,
    tempHigh: 180,
    stateHigh: "liquidlithium",
    temp: 20,
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
elements.beryllium = {
    color: ["#71797e"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    density: 10,
    tempHigh: 1287,
    stateHigh: "liquidberyllium",
    temp: 20,
}
elements.liquidberyllium = {
    color: ["#dadbdd"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquid",
    density: 10,
    tempLow: 1288,
    stateLow: "beryllium",
    tempHigh: 2469,
    stateHigh: "berylliumgas",
    temp: 1750,
}
elements.berylliumgas = {
    color: ["#000000"],
    behavior: behaviors.GAS,
    catogory: "gases",
    state: "gas",
    density: 10,
    tempLow: 2470,
    stateLow: "liquidberyllium",
    temp: 3000,
}
elements.boron = {
    color: ["#000000", "#333333", "#3a3a3a"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    density: 10,
    tempHigh: 2076,
    stateHigh: "liquidboron",
    temp: 20,
}
elements.liquidboron = {
    color: ["#ffd865", "#ffdd00"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquid",
    density: 10,
    tempLow: 2075,
    stateLow: "boron",
    tempHigh: 3927,
    stateHigh: "borongas",
    temp: 2750,
}
elements.borongas = {
    color: ["#000000"],
    behavior: behaviors.GAS,
    catogory: "gases",
    state: "gas",
    density: 10,
    tempLow: 2751,
    stateLow: "liquidboron",
    temp: 3000,
}
elements.carbon = {
    color: ["#232323"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    density: 10,
    temp: 20,
}
elements.fluorinegas = {
    color: ["#ffff84", "#dfff00"],
    behavior: behaviors.GAS,
    catogory: "gases",
    state: "gas",
    density: 10,
    temp: 20,
    tempLow: -188,
    stateLow: "liquidfluorine",
    reactions: {
        "hydrogen": {elem1: "explosion"},
    },
}
elements.liquidfluorine = {
    color: ["#ffed29"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquid",
    density: 10,
    temp: -200,
    tempHigh: -187,
    stateHigh: "fluorinegas",
    tempLow: -220,
    stateLow: "solidfluorine",
    reactions: {
        "hydrogen": {elem1: "explosion"},
    },
}
elements.solidfluorine = {
    color: ["#ffed29"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    density: 10,
    temp: -250,
    tempHigh: -180,
    stateHigh: "liquidfluorine",
    reactions: {
        "hyrdrogen": {elem1: "explosion"},
    },
}
elements.silicon = {
    color: ["#6a89a7"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    density: 10,
    temp: 20,
    tempHigh: 1414,
    stateHigh: "liquidsilicon",
}
elements.liquidsilicon = {
    color: ["#fafafa"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquid",
    density: 10,
    temp: 20,
    tempLow: 1415,
    stateLow: "silicon",
    tempHigh: 3265,
    stateHigh: "silicongas",
}
elements.silicongas = {
    color: ["#000000"],
    behavior: behaviors.GAS,
    catogory: "gases",
    state: "gas",
    density: 10,
    temp: 1500,
    tempLow: 1416,
    stateLow: "liquidsilicon",
}
