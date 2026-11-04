import Image from "next/image";
import type { MediaFile } from "./media-types";
import { Scene, type SceneVariant } from "./scene";

/** Показывает загруженное фото или видео, а пока файла нет, показывает иллюстрацию. */
export function MediaSlot({
  media,
  alt,
  sizes,
  fallback,
  priority = false,
  focus = "50% 50%",
  videoLabel,
}: {
  media: MediaFile | null;
  alt: string;
  sizes: string;
  fallback: SceneVariant;
  priority?: boolean;
  focus?: string;
  videoLabel?: string;
}) {
  if (!media) return <Scene variant={fallback} />;

  if (media.kind === "video") {
    return (
      <video
        src={media.src}
        controls
        playsInline
        preload="metadata"
        aria-label={videoLabel}
        className="size-full bg-ink object-cover"
        style={{ objectPosition: focus }}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      style={{ objectPosition: focus }}
    />
  );
}
