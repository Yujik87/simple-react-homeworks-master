import React from 'react';
import s from "./AlternativeMessage.module.css"

type AltMessType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: AltMessType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>

            <div className={s.angle}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
