import { userAtom } from "@/lib/store";
import { useAtom } from "jotai";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarImg() {
  const [user] = useAtom(userAtom);

  return (
    <Avatar className="w-[30px] h-[30px] md:h-[40px] md:w-[40px]">
      <AvatarImage
        className="object-cover"
        src={`https://azbgmygmtxilfilpngex.supabase.co/storage/v1/object/public/image_database/${
          user.img
        }?${new Date().getTime()}`}
      />
      <AvatarFallback>{user.name}</AvatarFallback>
    </Avatar>
  );
}
