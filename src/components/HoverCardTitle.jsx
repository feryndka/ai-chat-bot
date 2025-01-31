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
      <HoverCardContent className="w-80 ml-8 md:ml-52">
        <div className="flex">
          <Avatar>
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>FA</AvatarFallback>
          </Avatar>
          <div className="space-y-1 cursor-default ml-4 flex items-center justify-center">
            <p className="text-sm">- Fullstack Web Developer -</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
