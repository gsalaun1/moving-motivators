import {forwardRef, useState} from "react"
import './App.css'
import {arrayMove, rectSortingStrategy, SortableContext} from "@dnd-kit/sortable"
import {closestCenter, DndContext, DragEndEvent, DragOverlay, DragStartEvent} from "@dnd-kit/core"
import SortableCard from "./SortableCard.tsx";
import DisplayableCard from "./DisplayableCard.tsx";
import {Card} from "./App.tsx";

type Props = {
    cards: Card[]
    onHover: (_: string) => void
    updateCards: (cards: Card[]) => void
}

const Step1 = forwardRef<HTMLDivElement, Props>(
    ({cards, onHover, updateCards}) => {
        const [activeCardItem, setActiveCardItem] = useState<Card>()

        const handleCardDragStart = (event: DragStartEvent) => {
            const {active} = event
            setActiveCardItem(cards.find((item) => item.id === active.id))
        }

        const handleCardDragEnd = (event: DragEndEvent) => {
            const {active, over} = event
            if (!over) return

            const activeCard = cards.find((item) => item.id === active.id)
            const overCard = cards.find((item) => item.id === over.id)

            if (!activeCard || !overCard) {
                return
            }

            const activeIndex = cards.findIndex((item) => item.id === active.id)
            const overIndex = cards.findIndex((item) => item.id === over.id)

            if (activeIndex !== overIndex) {
                updateCards(arrayMove<Card>(cards, activeIndex, overIndex))
            }
            setActiveCardItem(undefined)
        }

        const handleCardDragCancel = () => {
            setActiveCardItem(undefined)
        }

        return (
            <DndContext
                collisionDetection={closestCenter}
                onDragStart={handleCardDragStart}
                onDragEnd={handleCardDragEnd}
                onDragCancel={handleCardDragCancel}
            >
                <SortableContext items={cards} strategy={rectSortingStrategy}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(10, 1fr)`,
                            gridGap: 16,
                            maxWidth: "100%",
                            margin: "16px auto 48px"
                        }}
                    >
                        {cards.map((movingMotivatorsCard) => (
                            <SortableCard key={movingMotivatorsCard.id} item={movingMotivatorsCard}
                                              onHover={onHover}/>
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay adjustScale style={{transformOrigin: "0 0 "}}>
                    {activeCardItem ?
                        <DisplayableCard item={activeCardItem} isDragging onHover={onHover}/> : null}
                </DragOverlay>
            </DndContext>
        )
    }
)

export default Step1
