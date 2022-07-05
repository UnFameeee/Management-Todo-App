import { Draggable } from "react-beautiful-dnd"

export default function Task(props) {
    const { id, index, title } = props;

    return (
       <Draggable draggableId={id} index={index} type="TASK">
            {provided => (
                <li 
                    onClick={() => {
                        props.setIsViewClicked(!props.isViewClicked);
                        props.setTaskId(id);
                    }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {title}
                </li>
            )}
        </Draggable>
    )
}
