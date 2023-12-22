import { FormData1, FormData2 } from "@/types/registerForm"
import { create } from "zustand"

interface Props {
  formData1: FormData1
  formData2: FormData2
  setFormData1: (data: FormData1) => void
  setFormData2: (data: FormData2) => void
  setResetFormData: () => void
}

export const useData = create<Props>((set) => ({
  formData1: {
    address: "",
    name: "",
    email: "",
    birthday: "",
    cpf: "",
    phone: "",
  },
  formData2: {
    date: "",
    name_card: "",
    number_card: "",
    cv: "",
  },
  setFormData1: (data) => set({ formData1: data }),
  setFormData2: (data) => set({ formData2: data }),
  setResetFormData: () =>
    set({
      formData1: {
        address: "",
        name: "",
        email: "",
        birthday: "",
        cpf: "",
        phone: "",
      },
      formData2: {
        date: "",
        name_card: "",
        number_card: "",
        cv: "",
      },
    }),
}))
