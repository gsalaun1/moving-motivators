import {DndContext, DragEndEvent} from "@dnd-kit/core";
import {restrictToParentElement, restrictToVerticalAxis} from "@dnd-kit/modifiers";
import {Card} from "./App.tsx";
import DraggableCard from "./DraggableCard.tsx";
import './Step2.css'

type Step2Props = {
    cards: Card[]
    onHover: (_: string) => void
    applyDelta: (cardId: number, delta: number) => void
}

const Step2 = ({cards, onHover, applyDelta}: Step2Props) => {

    const container = {
        display: "grid",
        gridTemplateColumns: `repeat(10, 1fr)`,
        gridGap: 16,
        maxWidth: "100%",
        margin: "16px auto 16px",
        height: "400px",
        width: "100%",
    }

    const handleCardDragEnd = (event: DragEndEvent) => {
        const {active, delta} = event
        const activeCard = cards.find((item) => item.id === active.id)
        if (!activeCard) {
            return
        }
        applyDelta(activeCard.id, delta.y)
    }

    return (

        <div style={container}>
            <div className={"floatingLine"}></div>
            {cards.map((card) => (
                <DndContext
                    onDragEnd={handleCardDragEnd}
                    modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                    key={card.id}>
                    <div>
                        <DraggableCard
                            key={card.id}
                            card={card}
                            onHover={onHover}
                            id={card.id}
                            y={card.y}/>
                    </div>
                </DndContext>
            ))}
        </div>
    );

}

export default Step2;