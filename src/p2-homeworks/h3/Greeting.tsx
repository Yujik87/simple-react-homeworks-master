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
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : ''

    return (
        <div className={s.container}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onBlur={setNameCallback}
                    onKeyDown={onEnter}
                    className={inputClass}
                />
                <div className={error ? s.info : ''}>
                    {error ? error : `Total users: ${totalUsers}`}
                </div>
            </div>

            <div>
                <button className={s.button} onClick={addUser} disabled={!name}>Add user</button>
            </div>

        </div>
    )
}

export default Greeting
