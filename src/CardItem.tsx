import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import {TCardItem} from "./App"

type Props = {
    item: TCardItem
    isOpacityEnabled?: boolean
    isDragging?: boolean
    onHover: (_:string) => void
} & HTMLAttributes<HTMLDivElement>

const Item = forwardRef<HTMLDivElement, Props>(
    ({ item, isOpacityEnabled, isDragging,onHover,  style, ...props }, ref) => {
        const styles: CSSProperties = {
            opacity: isOpacityEnabled ? "0.4" : "1",
            cursor: isDragging ? "grabbing" : "grab",
            lineHeight: "0.5",
            transform: isDragging ? "scale(1.05)" : "scale(1)",
            ...style
        }

        return (
            <div ref={ref} style={styles} {...props}>
                <img
                    src={item.image}
                    alt={`${item.id}`}
                    style={{
                        borderRadius: "8px",
                        boxShadow: isDragging
                            ? "none"
                            : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
                        maxWidth: "100%",
                        objectFit: "cover"
                    }}
                    onMouseEnter={() => onHover(item.image)}
                />
            </div>
        )
    }
)

export default Item
