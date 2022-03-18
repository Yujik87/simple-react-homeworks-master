import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.someClass}>
            <div className={s.someClassInput}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={setNameCallback}
                />
                <div className={s.errorInput}>
                    {error}
                </div>
                <button onClick={addUser} disabled={!name}>add</button>
            </div>

            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
