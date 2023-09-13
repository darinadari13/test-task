export function PageElement({ type, IconComponent, name }) {
  return (
    <div className="flex flex-col items-center rounded bg-slate-200 py-6">
      <IconComponent />
      <span>{name}</span>
    </div>
  )
}