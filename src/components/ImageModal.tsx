import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ImageModalProps {
  images: string[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function ImageModal({ images, initialIndex, isOpen, onClose, onNavigate }: ImageModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
      if (event.key === 'ArrowLeft') {
        onNavigate((initialIndex - 1 + images.length) % images.length)
      }
      if (event.key === 'ArrowRight') {
        onNavigate((initialIndex + 1) % images.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [images.length, initialIndex, isOpen, onClose, onNavigate])

  if (!isOpen || images.length === 0) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-5xl max-h-full w-full flex items-center justify-center" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 z-10 rounded-full bg-black/60 text-white p-2 hover:bg-black/80"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((initialIndex - 1 + images.length) % images.length)}
            className="absolute left-2 md:left-6 rounded-full bg-black/60 text-white p-2 hover:bg-black/80"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <img src={images[initialIndex]} alt={`preview-${initialIndex + 1}`} className="max-h-[85vh] w-auto rounded-md" />

        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((initialIndex + 1) % images.length)}
            className="absolute right-2 md:right-6 rounded-full bg-black/60 text-white p-2 hover:bg-black/80"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}
