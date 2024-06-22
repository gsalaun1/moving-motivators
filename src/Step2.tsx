import {DndContext, DragEndEvent} from "@dnd-kit/core";
import {restrictToParentElement, restrictToVerticalAxis} from "@dnd-kit/modifiers";
import {Card} from "./App.tsx";
import DraggableCard from "./DraggableCard.tsx";

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
        margin: "16px auto 48px",
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

    const floatingLine = {
        position: "absolute",
        marginTop: "200px",
        border:"1px dashed rgb(63 63 68 / 25%)",
        width: "95%",
    }

    return (

        <div style={container}>
            <div style={floatingLine}></div>
            {cards.map((card) => (
                <DndContext
                    onDragEnd={handleCardDragEnd}
                    modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
                    <div>
                        <DraggableCard key={card.id} card={card}
                                       onHover={onHover} id={card.id} y={card.y}/>
                    </div>
                </DndContext>
            ))}
        </div>
    );

}

export default Step2;