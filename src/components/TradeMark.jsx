// ©TM© superscript component — centralises all size variants.
// All sizes render as inline-block with vertical-align: 1em for consistent positioning.
//
// size   "xl"      0.3em of the headline at expanded/desktop / 12px tablet / 10px mobile — hero headline only
//        "lg"      16px desktop / 13px expanded / 12px tablet / 10px mobile — offering, product & hero h3
//        "md"      11px desktop+tablet / 10px mobile                 — inline in text, nav/footer brand
//        "sm"      7px all viewports                                  — eyebrow-level

const SIZES = {
  xl: 'font-semibold text-[10px] tablet:text-[12px] expanded:text-[0.3em] desktop:text-[0.3em]',
  lg: 'font-semibold text-[10px] tablet:text-[12px] expanded:text-[13px] desktop:text-[16px]',
  md: 'font-normal text-[8px] expanded:text-[9px] desktop:text-[9px]',
  sm: 'font-normal text-[7px]',
}

// markClassName — extra classes for the ©TM© itself (e.g. a color)
export default function TradeMark({ size = 'lg', word, gap = false, tracking = '', markClassName = '' }) {
  const mark = <span className={`inline-block leading-none align-[1em] ${SIZES[size]}${tracking ? ` ${tracking}` : ''}${markClassName ? ` ${markClassName}` : ''}`}>©TM©</span>

  if (word) {
    return <span className="whitespace-nowrap">{word}{gap ? <span className="ml-[2px]">{mark}</span> : mark}</span>
  }
  return mark
}
