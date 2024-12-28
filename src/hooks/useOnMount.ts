import { useEffect } from 'react'
import type { EffectCallback } from 'react'

export function useOnMount(fn: EffectCallback): void {
  useEffect(
    () => fn(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
}
