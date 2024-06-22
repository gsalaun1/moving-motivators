import {expect, test} from 'vitest'
import {seedExtracter} from './SeedService.ts'
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

test('should forge seeds', () => {
    // TODO GSA
})

test('should extract cards', () => {
    const extractedCards = seedExtracter("9|90!8|-0.5!7|70!6|60!5|50!4|40!3|30!2|-20!1|10!0|0")
    expect(extractedCards).toStrictEqual([
        {
            id: 9,
            image: statutCard,
            y: 90
        },
        {
            id: 8,
            image: relationsSocialesCard,
            y: -0.5
        },

        {
            id: 7,
            image: pouvoirCard,
            y: 70
        },
        {
            id: 6,
            image: ordreCard,
            y: 60
        },
        {
            id: 5,
            image: maitriseCard,
            y: 50
        },
        {
            id: 4,
            image: liberteCard,
            y: 40
        },
        {
            id: 3,
            image: honneurCard,
            y: 30
        },
        {
            id: 2,
            image: curiositeCard,
            y: -20
        },
        {
            id: 1,
            image: butCard,
            y: 10
        },
        {
            id: 0,
            image: acceptationCard,
            y: 0
        },
    ])
})