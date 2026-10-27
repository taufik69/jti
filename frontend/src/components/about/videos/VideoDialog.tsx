import type { RefObject } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { JtiVideo } from "@/content/about/videos";

interface VideoDialogProps {
  video: JtiVideo | null;
  onClose: () => void;
  /** The card that opened the player; focus goes back to it on close. */
  returnFocus: RefObject<HTMLElement | null>;
}

/** Modal player. Radix traps focus, closes on Escape; we hand focus back to the opening card. */
export function VideoDialog({ video, onClose, returnFocus }: VideoDialogProps) {
  return (
    <Dialog.Root open={video !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-plum-950/85 backdrop-blur-sm data-[state=open]:animate-[fade-in_200ms_ease-out]" />
        <Dialog.Content
          aria-describedby={undefined}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            returnFocus.current?.focus();
          }}
          className="fixed left-1/2 top-1/2 z-50 w-[min(68rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-[fade-in_200ms_ease-out]"
        >
          <div className="mb-3 flex items-center justify-between gap-4 text-white">
            <Dialog.Title className="text-[1.0625rem] font-medium text-white">{video?.title}</Dialog.Title>
            <Dialog.Close className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" aria-label="Close video">
              <Icon icon={X} />
            </Dialog.Close>
          </div>
          {video && (
            <div className="relative aspect-video overflow-hidden rounded-card bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
