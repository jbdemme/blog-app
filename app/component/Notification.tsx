"use client"
import { useNotification } from "./NotificationContext"

export const Notification = () => {
    const { message, type } = useNotification()

    if (!message) return null

    if (type === "success") {
        return (
            <div
                className="bg-green-700 rounded-lg p-2 max-w-2xs mx-auto text-center"
                data-testid="notification"
            >
                <span className="text-white font-bold ">{message}</span>
            </div>
        )
    } else if (type === "error") {
        return (
            <div
                className="bg-red-700 rounded-lg p-2 flex items-center gap-4"
                data-testid="error-message"
            >
                <span className="text-white font-bold ">{message}</span>
            </div>
        )
    }
}