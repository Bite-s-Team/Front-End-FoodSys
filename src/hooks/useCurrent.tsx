import { create } from "zustand"

type props = {
  step: number
  onNext: () => void
  onPrev: () => void
}

export const useCurrent = create<props>((set) => ({
  step: 1,
  onNext: () => set((state) => ({ step: state.step + 1 })),
  onPrev: () => set((state) => ({ step: state.step - 1 })),
}))
