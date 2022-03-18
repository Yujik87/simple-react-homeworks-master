import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    //const stylePriority =

    return (
        <div className={s.container}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={s[props.affair.priority]}>{props.affair.priority}</div>

            <button className={s.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
