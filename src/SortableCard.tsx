import {useSortable} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
import {HTMLAttributes} from "react"
import {Card} from "./App"
import DisplayableCard from "./DisplayableCard.tsx";

type Props = {
    item: Card
    onHover: (_:string) => void
} & HTMLAttributes<HTMLDivElement>

const SortableCard = ({item, onHover, ...props}: Props) => {
    const {attributes, isDragging, listeners, setNodeRef, transform, transition} = useSortable({
        id: item.id,
    })

    const styles = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
    }

    return (
        <DisplayableCard
            item={item}
            ref={setNodeRef}
            style={styles}
            isOpacityEnabled={isDragging}
            {...props}
            {...attributes}
            {...listeners}
            onHover={onHover}
        />
    )
}

export default SortableCard
