import { Droppable } from "react-beautiful-dnd"
import { useState } from "react";
import Task from "./Task";

export default function Column(props) {
    const { droppableId, list, type } = props;
    console.log("type = ", droppableId, list.map(v => v.id));
    return (
        <Droppable droppableId={droppableId} type={type}>
            {provided => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                <h2 style={{margin:'10px 0', color:'white', fontWeight:'700', pointerEvents:'auto'}}>{droppableId}</h2>

                {list.map((val, index) =>
                    <Task id={val.id.toString()} key={val.id.toString()} index={index} title={val.title} />
                )}

                {provided.placeholder}
                </ul>
            )}
        </Droppable>
    )
}