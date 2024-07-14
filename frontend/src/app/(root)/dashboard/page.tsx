import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="text-xl font-bold">Ping Notification System</div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <BellIcon className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              3
            </div>
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="text-black">AC</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-[300px_1fr] overflow-hidden">
        <div className="bg-card text-card-foreground border-r">
          <div className="px-6 py-4 border-b">
            <div className="text-lg font-medium">Connected Users</div>
          </div>
          <div className="p-4 space-y-2 overflow-y-auto">
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Alice Cooper</div>
                <div className="text-muted-foreground text-sm">Online</div>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <SendIcon className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-muted-foreground text-sm">Online</div>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <SendIcon className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Sarah Miller</div>
                <div className="text-muted-foreground text-sm">Offline</div>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <SendIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-card text-card-foreground border-b px-6 py-4">
            <div className="text-lg font-medium">Chat</div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-4 max-w-[80%]">
                <div className="font-medium">Alice Cooper</div>
                <div>Hey everyone, can you all check in?</div>
                <div className="text-xs text-muted-foreground mt-2">2 minutes ago</div>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="bg-primary rounded-lg p-4 max-w-[80%] text-primary-foreground">
                <div className="font-medium">You</div>
                <div>Sure, I'm here!</div>
                <div className="text-xs text-primary-foreground mt-2">1 minute ago</div>
              </div>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-4 max-w-[80%]">
                <div className="font-medium">John Doe</div>
                <div>Pinging everyone!</div>
                <div className="text-xs text-muted-foreground mt-2">30 seconds ago</div>
              </div>
            </div>
          </div>
          <div className="bg-card text-card-foreground border-t px-6 py-4">
            <form className="flex items-center gap-4">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  
    </>
  );
}
//@ts-ignore
function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
//@ts-ignore
function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
//@ts-ignore
function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


