import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type BreadcrumbItem = {
  label: string
  to?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap" aria-label="breadcrumb">
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex items-center gap-1">
          {item.to ? <Link to={item.to} className="hover:underline">{item.label}</Link> : <span>{item.label}</span>}
          {index < items.length - 1 && <ChevronRight className="h-3 w-3" />}
        </div>
      ))}
    </nav>
  )
}
