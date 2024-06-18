import {DndContext, DragEndEvent, useDraggable} from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities';
import {restrictToParentElement, restrictToVerticalAxis} from "@dnd-kit/modifiers";
import {TCardItem} from "./App.tsx";

interface DraggableProps {
    y: number
    id: number
    item: TCardItem
    onHover: (_: string) => void
}

function DraggableCardItem(props: DraggableProps) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    });
    const style = {
        transform: CSS.Translate.toString(transform),
        marginTop: props.y + 'px'
    };

    const imgStyle = {
        width: "100%",
        borderRadius: "8px"
    }

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <img src={props.item.image} onMouseEnter={() => props.onHover(props.item.image)} style={imgStyle}/>
        </div>
    )
}

type Step2Props = {
    cards: TCardItem[]
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

    return (

        <div style={container}>
            {cards.map((movingMotivatorsCard) => (
                <DndContext
                    onDragEnd={handleCardDragEnd}
                    modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
                    <div>
                        <DraggableCardItem key={movingMotivatorsCard.id} item={movingMotivatorsCard}
                                           onHover={onHover} id={movingMotivatorsCard.id} y={movingMotivatorsCard.y}/>
                    </div>
                </DndContext>
            ))}
        </div>
    );

}

export default Step2;