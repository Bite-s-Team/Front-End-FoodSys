import { create } from "zustand"

interface FormData {
  address: string
  name: string
  email: string
  birthday: string
  cpf: string
  phone: string
}

interface Props {
  formData: FormData
  setFormData: (data: FormData) => void
}

export const useData = create<Props>((set) => ({
  formData: {
    address: "",
    name: "",
    email: "",
    birthday: "",
    cpf: "",
    phone: "",
  },
  setFormData: (data) => set({ formData: data }),
}))
