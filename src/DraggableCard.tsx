import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";
import {Card} from "./App.tsx";
import DisplayableCard from "./DisplayableCard.tsx";

interface DraggableCardProps {
    y: number
    id: number
    card: Card
    onHover: (_: string) => void
}

const DraggableCard = function DraggableCard(props: DraggableCardProps) {
    const {listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    });
    const style = {
        transform: CSS.Translate.toString(transform),
        marginTop: props.y + 'px'
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners}>
            <DisplayableCard item={props.card} onHover={props.onHover}/>
        </div>
    )
}

export default DraggableCard;