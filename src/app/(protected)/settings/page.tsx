import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      <div>{JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}
