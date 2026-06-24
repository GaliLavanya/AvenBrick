import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'light',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-2.5', className)}
      aria-label="AvenBrick Infra home"
    >
      {/* Logo Mark (Orange AB Icon) */}
      <img
        src="/logo-mark.png"
        alt="AvenBrick Mark"
        width={36}
        height={36}
        className="h-9 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      {/* Logo Text (AVENBRICK) */}
      <img
        src="/logo-text.png"
        alt="AvenBrick Infra"
        width={182}
        height={22}
        className={cn(
          "h-[22px] w-auto shrink-0 transition-opacity duration-300",
          variant === 'dark' ? "brightness-0 invert opacity-90" : "opacity-100"
        )}
      />
    </Link>
  )
}
