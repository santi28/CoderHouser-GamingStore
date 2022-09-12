function Item({ img, alt, title, price, children }) {
  return (
    <div
      className="flex flex-col gap-3 overflow-hidden rounded-xl bg-slate-200">
      <img 
        className="object-cover w-full h-48 rounded-xl"
        src={img}
        alt={alt}/>
      <div className="flex items-center justify-between px-3">
        <h3 className="text-lg italic font-bold">{title}</h3>
        <span className="p-2 px-3 shadow text-slate-100 rounded-xl bg-slate-700">{price}</span>
      </div>
      <p className="px-3 pb-4">{children}</p>
    </div>
  )
}

export default Item