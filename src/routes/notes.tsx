import { SlideItems } from "@/components/SlideContents";
import { useBroadcastChannel } from "@/hooks/use-broadcast-channel";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes")({
  component: NotesRoute,
});

function NotesRoute() {
  const { slide } = useBroadcastChannel();

  return (
    <div className="p-6">
      <div className="grid gap-8 grid-cols-2">
        {SlideItems.map(({ Notes }, i) =>
          Notes ? <Notes active={slide === i} key={i} /> : null,
        )}
      </div>
    </div>
  );
}
