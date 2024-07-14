/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wSaRU5mODu8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link"
import {auth} from "@/auth"
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import ClientButton from "@/components/ui/clientButton"

export default async  function Component() {
  const session = await auth()
  let a=0;
  if(session!=null){
    a=1;
  }

 


  return (

    <div className="flex min-h-screen w-full flex-col bg-muted/40 ">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <MessageCircleIcon className="h-6 w-6" />
          <span>PingIT</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
             
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="px-4 py-2 text-sm font-medium" prefetch={false}>
                Users
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="px-4 py-2 text-sm font-medium" prefetch={false}>
                Chat
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="relative ml-auto flex-1 md:grow-0">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
         
        </div>
        <div className="flex items-center gap-2">
         
          <Link href = {a<1?"/sign-in":"sign-out"} className='p-2'>
          {a}
            <ClientButton a={a}/>
        </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
             A
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
        <section className="bg-background rounded-lg shadow-sm p-6 w-full">
          <h2 className="text-2xl font-bold mb-4 text-black">Recent Chats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4  ">
                  <Avatar className="border w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">Online</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="bg-muted rounded-lg px-3 py-2">Hey there! How's it going?</div>
                    <div className="text-xs text-muted-foreground">2:30 PM</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm justify-end">
                    <div className="text-xs text-muted-foreground">2:31 PM</div>
                    <div className="bg-primary rounded-lg px-3 py-2 text-primary-foreground">
                      Great, thanks for asking!
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="border w-10 h-10">
                   
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-medium">Sarah Anderson</div>
                    <div className="text-sm text-muted-foreground">Online</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="bg-muted rounded-lg px-3 py-2">
                      Hi there! Did you get a chance to look at the proposal?
                    </div>
                    <div className="text-xs text-muted-foreground">3:45 PM</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm justify-end">
                    <div className="text-xs text-muted-foreground">3:47 PM</div>
                    <div className="bg-primary rounded-lg px-3 py-2 text-primary-foreground">
                      Yes, I did. I'll get back to you with my feedback shortly.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="bg-background rounded-lg shadow-sm p-6 w-full">
          <h2 className="text-2xl font-bold mb-4">App Functionality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ping's real-time collaboration features allow your team to work together seamlessly, no matter their
                  location. Share documents, brainstorm ideas, and stay in sync with ease.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Powerful Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ping seamlessly integrates with your favorite tools, from project management to communication apps.
                  Streamline your workflows and maximize productivity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Intelligent Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ping's advanced analytics and reporting tools provide valuable insights to help your team make
                  data-driven decisions and optimize their workflows.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Secure and Scalable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ping's robust security protocols and scalable infrastructure ensure that your data and your team are
                  always protected, no matter the size of your organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
//@ts-ignore
function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
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