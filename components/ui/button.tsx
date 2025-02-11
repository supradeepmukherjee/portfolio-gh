import { ReactNode } from "react"

export const Button = (
  { text, position, icon, handleClick, classes }
    :
    {
      text: string
      position?: 'left' | 'right'
      icon?: ReactNode
      handleClick?: () => void
      classes?: string
    }
) => (
  <button className="relative inline-flex h-12 w-[10rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-40 md:mt-10" onClick={handleClick}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className={"inline-flex h-full w-full cursor-pointer items-center justify-evenly rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-4" + classes}>
      {position === 'left' && icon}
      {text}
      {position === 'right' && icon}
    </span>
  </button>
)