import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardTitle() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="text-lg font-bold cursor-pointer hover:underline">
          Fery Andika
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 md:ml-20 ml-8">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/avatar.jpeg" />
            <AvatarFallback>FA</AvatarFallback>
          </Avatar>
          <div className="space-y-1 cursor-default">
            <h4 className="text-sm font-semibold">Fery Andika</h4>
            <p className="text-sm">
              Frontend Web Developer | Wordpress Developer | Tech Enthusiast
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
