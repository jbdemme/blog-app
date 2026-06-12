"use client"
import React, { createContext, useContext, useState } from "react"

type NotificationType = "success" | "error"

export const NotificationContext = createContext({
    message: "",
    type: "success",
    showNotification: (msg: string, type: NotificationType) => { }
})

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [message, setMessage] = useState("")
    const [type, setType] = useState<NotificationType>("success")

    const showNotification = (msg: string, newType: NotificationType) => {
        setMessage(msg)
        setType(newType)
        setTimeout(() => setMessage(""), 5000)
    }

    return (
        <NotificationContext value={{ message, type, showNotification }}>
            {children}
        </NotificationContext>
    )
}

export const useNotification = () => useContext(NotificationContext)