import {forwardRef, useState} from "react"
import './App.css'
import {arrayMove, rectSortingStrategy, SortableContext} from "@dnd-kit/sortable"
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core"
import SortableCardItem from "./SortableCardItem.tsx";
import CardItem from "./CardItem.tsx";
import {TCardItem} from "./App.tsx";

type Props = {
    cards: TCardItem[]
    onHover: (_: string) => void
    updateCards: (cards: TCardItem[]) => void
}

const Step1 = forwardRef<HTMLDivElement, Props>(
    ({cards, onHover, updateCards}) => {
        // for drag overlay
        const [activeCardItem, setActiveCardItem] = useState<TCardItem>()

        // for input methods detection
        const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

        // triggered when dragging starts
        const handleCardDragStart = (event: DragStartEvent) => {
            const {active} = event
            setActiveCardItem(cards.find((item) => item.id === active.id))
        }

        // triggered when dragging ends
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
                updateCards(arrayMove<TCardItem>(cards, activeIndex, overIndex))
            }
            setActiveCardItem(undefined)
        }

        const handleCardDragCancel = () => {
            setActiveCardItem(undefined)
        }

        return (
            <DndContext
                sensors={sensors}
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
                            <SortableCardItem key={movingMotivatorsCard.id} item={movingMotivatorsCard}
                                              onHover={onHover}/>
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay adjustScale style={{transformOrigin: "0 0 "}}>
                    {activeCardItem ?
                        <CardItem item={activeCardItem} isDragging onHover={onHover}/> : null}
                </DragOverlay>
            </DndContext>
        )
    }
)

export default Step1
