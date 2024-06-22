import {expect, test} from 'vitest'
import {seedExtracter, seedForger} from './SeedService.ts'
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
    const cards =
        [
            {
                id: 10,
                image: statutCard,
                y: 130
            },
            {
                id: 9,
                image: relationsSocialesCard,
                y: -20
            },

            {
                id: 8,
                image: pouvoirCard,
                y: 70
            },
            {
                id: 7,
                image: ordreCard,
                y: 60
            },
            {
                id: 6,
                image: maitriseCard,
                y: 50
            },
            {
                id: 5,
                image: liberteCard,
                y: 40
            },
            {
                id: 4,
                image: honneurCard,
                y: 30
            },
            {
                id: 3,
                image: curiositeCard,
                y: -20
            },
            {
                id: 2,
                image: butCard,
                y: 10
            },
            {
                id: 1,
                image: acceptationCard,
                y: 0
            },
        ]
    const forgedSeed = seedForger(cards)
    expect(forgedSeed).toStrictEqual("10!130|9!-20|8!70|7!60|6!50|5!40|4!30|3!-20|2!10|1!0")
})

test('should extract cards', () => {
    const extractedCards = seedExtracter("10!90|9!-0.5|8!70|7!60|6!50|5!40|4!30|3!-20|2!10|1!0")
    expect(extractedCards).toStrictEqual([
        {
            id: 10,
            image: statutCard,
            y: 90
        },
        {
            id: 9,
            image: relationsSocialesCard,
            y: -0.5
        },

        {
            id: 8,
            image: pouvoirCard,
            y: 70
        },
        {
            id: 7,
            image: ordreCard,
            y: 60
        },
        {
            id: 6,
            image: maitriseCard,
            y: 50
        },
        {
            id: 5,
            image: liberteCard,
            y: 40
        },
        {
            id: 4,
            image: honneurCard,
            y: 30
        },
        {
            id: 3,
            image: curiositeCard,
            y: -20
        },
        {
            id: 2,
            image: butCard,
            y: 10
        },
        {
            id: 1,
            image: acceptationCard,
            y: 0
        },
    ])
})