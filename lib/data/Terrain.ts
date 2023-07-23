interface Terrain {
    tileset: string;
    customTileset: boolean;
    tilePalette: string[];
    cliffTilePalette: string[];
    map: Map;
    // "Masks"
    groundHeight: number[][],
    waterHeight: number[][],
    boundaryFlag: boolean[][],
    flags: number[],
    groundTexture: number[][],
    groundVariation: number[][],
    cliffVariation: number[][],
    cliffTexture: number[][],
    layerHeight: number[][]
}

interface Map {
    width: number;
    height: number;
    offset: Offset;
}

interface Offset {
    x: number;
    y: number;
}

export {Terrain, Map, Offset}