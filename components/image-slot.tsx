import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  /** Shown in place of the image until a real asset is dropped in. */
  placeholder: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * A 16:9 media well. Renders the screenshot when one exists, otherwise a quiet
 * placeholder that keeps the layout intact.
 */
export default function ImageSlot({
  src,
  alt,
  placeholder,
  sizes = "100vw",
  priority,
}: Props) {
  if (!src) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span className="px-6 text-center font-mono text-[11.5px] uppercase tracking-[0.06em] text-ink-faint">
          {placeholder}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      // Next's optimiser refuses SVGs by default; they are already tiny.
      unoptimized={src.endsWith(".svg")}
      className="object-cover"
    />
  );
}
