"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function fetchPokemon(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = yield res.json();
        return {
            name: data.name,
            sprite: data.sprites.front_default,
            types: data.types.map((t) => ({ type: t.type.name })),
        };
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let id = 1; id <= 20; id++) {
            const pokemon = yield fetchPokemon(id);
            yield prisma.pokemon.create({
                data: {
                    name: pokemon.name,
                    sprite: pokemon.sprite,
                    types: {
                        create: pokemon.types,
                    },
                },
            });
            console.log(`✅ Inserted ${pokemon.name}`);
        }
    });
}
main()
    .then(() => {
    console.log("🎉 All Pokémon inserted");
    prisma.$disconnect();
})
    .catch((e) => {
    console.error(e);
    prisma.$disconnect();
});
