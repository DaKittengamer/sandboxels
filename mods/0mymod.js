elements.decamethyldizincocene = {
    color: ["#010101"],
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
        "hydrogen": {elem1: "explosion",elem2:null},
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
        "hydrogen": {elem1: "explosion",elem2:null},
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
        "hydrogen": {elem1: "explosion",elem2:null},
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
    conduct: 0.04,
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
elements.copperiisulfate = {
    color: ["#0165fc"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    density: 10,
    temp: 20,
    tempHigh: 110,
    stateHigh: "smoke",
    reactions: {
        "algae": {elem1: "slime",elem2:null},
    },
}
elements.holmium = {
    color: ["#dadbdd"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    density: 10,
    temp: 20,
    tempHigh: 1461,
    stateHigh: "liquidholmium",
}
elements.liquidholmium = {
    color: ["#dadbdd"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquid",
    temp: 2000,
    tempLow: 1462,
    stateLow: "holmium",
    tempHigh: 2600,
    stateHigh: "holmiumgas",
    density: 10,
}
elements.holmiumgas = {
    color: ["#fff200"],
    behavior: behaviors.GAS,
    catogory: "gases",
    state: "gas",
    temp: 3000,
    tempLow: 2601,
    stateLow: "liquidholmium",
    density: 10,
}
elements.californium = {
    color: ["#dadbdd"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    temp: 20,
    tempHigh: 900,
    stateHigh: "liquidcalifornium",
    density: 10,
}
elements.liquidcalifornium = {
    color: ["#88e788", "#008000", "#06402b"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquid",
    temp: 1200,
    tempLow: 901,
    stateLow: "californium",
    reactions: {
        "oxygen": {elem1:"dicaliforniumtrioxide",elem2:null},
    },
    density: 10,
}
elements.dicaliforniumtrioxide = {
    color: ["#9acd32"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    temp: 1400,
    density: 10,
}
elements.germanium = {
    color: ["#d3d3d3"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    temp: 20,
    tempHigh: 938,
    stateHigh: "liquidgermanium",
    density: 10,
}
elements.liquidgeranium = {
    color: ["#dadbdd", "#c0c0c0"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquid",
    temp: 1500,
    tempLow: 939,
    stateLow: "germanium",
    tempHigh: 2833,
    stateHigh: "germaniumgas",
    density: 10,
}
elements.germaniumgas = {
    color: ["#000000"],
    behavior: behaviors.GAS,
    catogory: "gases",
    state: "gas",
    temp: 3000,
    tempLow: 2834,
    stateLow: "liquidgermanium",
    density: 10,
}
elements.neodymium = {
    color: ["#c0c0c0"],
    behavior: behaviors.WALL,
    catogory: "solids",
    state: "solid",
    temp: 20,
    tempHigh: 1022,
    stateHigh: "liquidneodymium",
    density: 10,
}
elements.liquidneodymium = {
    color: ["#ef0078", "#d3d3ff"],
    behavior: behaviors.LIQUID,
    catogory: "liquids",
    state: "liquids",
    temp: 2500,
    tempLow: 1023,
    stateLow: "neodymium",
    tempHigh: 3074,
    stateHigh: "neodymiumgas",
    density: 10,
}
elements.neodymiumgas = {
    color: ["#000000"],
    behavior: behaviors.GAS,
    catogory: "gases",
    state: "gas",
    temp: 3250,
    density: 10,
    tempLow: 3075,
    stateLow: "liquidneodymium",
}
