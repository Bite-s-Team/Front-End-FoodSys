import { create } from "zustand"

type props = {
  step: number
  onNext: () => void
  onPrev: () => void
  onReset: () => void
}

export const useCurrent = create<props>((set) => ({
  step: 1,
  onNext: () => set((state) => ({ step: state.step + 1 })),
  onPrev: () => set((state) => ({ step: state.step - 1 })),
  onReset: () => set((state) => ({ step: (state.step = 1) })),
}))
