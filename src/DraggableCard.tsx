import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";
import {Card} from "./App.tsx";

interface DraggableCardProps {
    y: number
    id: number
    card: Card
    onHover: (_: string) => void
}

const DraggableCard = function DraggableCard(props: DraggableCardProps) {
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
            <img src={props.card.image} onMouseEnter={() => props.onHover(props.card.image)} style={imgStyle}/>
        </div>
    )

}

export default DraggableCard;