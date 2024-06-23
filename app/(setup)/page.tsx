import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const Setup = async () => {
  const profile = await initialProfile();
  console.log(profile);
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) return redirect(`/server/${server.id}`);
  return <div>Hello </div>;
};

export default Setup;
