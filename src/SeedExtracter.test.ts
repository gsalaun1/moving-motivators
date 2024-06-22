import {expect, test} from 'vitest'
import {seedExtracter} from './SeedExtracter.ts'
import acceptationCard from "./assets/acceptation.png";
import butCard from "./assets/but.png";
import curiositeCard from "./assets/curiosite.png";
import honneurCard from "./assets/honneur.png";
import liberteCard from "./assets/liberte.png";
import maitriseCard from "./assets/maitrise.png";
import ordreCard from "./assets/ordre.png";
import pouvoirCard from "./assets/pouvoir.png";
import relationsSocialesCard from "./assets/relations-sociales.png";
import statutCard from "./assets/statut.png";

test('should extract cards', () => {
    const extractedCards = seedExtracter("9876543210")
    expect(extractedCards).toStrictEqual([
        {
            id: 9,
            image: statutCard,
            y: 130
        },
        {
            id: 8,
            image: relationsSocialesCard,
            y: 130
        },

        {
            id: 7,
            image: pouvoirCard,
            y: 130
        },
        {
            id: 6,
            image: ordreCard,
            y: 130
        },
        {
            id: 5,
            image: maitriseCard,
            y: 130
        },
        {
            id: 4,
            image: liberteCard,
            y: 130
        },
        {
            id: 3,
            image: honneurCard,
            y: 130
        },
        {
            id: 2,
            image: curiositeCard,
            y: 130
        },
        {
            id: 1,
            image: butCard,
            y: 130
        },
        {
            id: 0,
            image: acceptationCard,
            y: 130
        },
    ])
})