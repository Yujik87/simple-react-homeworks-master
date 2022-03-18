import React from 'react'
import Message from "./Message";
import AlternativeAffairs from "../h2/AlternativeAffairs";
import AlternativeMessage from "./AlternativeMessage";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deserunt dicta eius eum ex id incidunt itaque modi molestias quibusdam quisquam quos repellat repellendus saepe, similique!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <h3>Homework 1</h3>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />



            <hr/>

            <AlternativeMessage
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
