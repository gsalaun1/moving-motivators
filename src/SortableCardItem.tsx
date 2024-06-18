import {useSortable} from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
import {HTMLAttributes} from "react"
import {TCardItem} from "./App"
import CardItem from "./CardItem.tsx";

type Props = {
    item: TCardItem
    onHover: (_:string) => void
} & HTMLAttributes<HTMLDivElement>

const SortableCardItem = ({item, onHover, ...props}: Props) => {
    const {attributes, isDragging, listeners, setNodeRef, transform, transition} = useSortable({
        id: item.id,
    })

    const styles = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
    }

    return (
        <CardItem
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

export default SortableCardItem
