"use client";
//This is the socket indicator on the top RHS
import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge 
        variant="outline" 
        className="bg-yellow-600 text-white border-none"
      >
        Fallback: Polling every 1s
      </Badge>
    )
  }

  return (
    <Badge 
      variant="outline" 
      className="bg-emerald-600 text-white border-none"
    >
      Live: Real-time updates
    </Badge>
  )
}