import { ProfileImage } from './ProfileImage';
import { Button } from './Button';
import { useSession } from 'next-auth/react';

export function NewTweetForm() {
  const session = useSession();
  if (session.status !== 'authenticated') return;

  return (
    <form action="submit" className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image} />
        <textarea
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
          placeholder="What's happening?"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
