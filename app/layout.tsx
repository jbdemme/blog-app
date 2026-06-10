import "./globals.css"
import AuthSessionProvider from "./component/SessionProvider";
import NavBar from "./component/NavBar";
import { NotificationProvider } from "./component/NotificationContext";
import { Notification } from "./component/Notification"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground max-w-6xl mx-auto">
        <AuthSessionProvider>
          <NotificationProvider>
            <NavBar />
            <Notification />
            {children}
          </NotificationProvider>
        </AuthSessionProvider>
      </body>
    </html>
  )
}