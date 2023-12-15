import { useCurrent } from "@/hooks/useCurrent"
import BasicForm from "./BasicForm/BasicForm"
import FinishForm from "./FinishForm/FinishForm"
import PaymentForm from "./PaymentForm/PaymentForm"

export default function RegisterForm() {
  const step = useCurrent((state) => state.step)

  if (step == 1) {
    return (
      <div>
        <BasicForm />
      </div>
    )
  }
  if (step == 2) {
    return (
      <div>
        <PaymentForm />
      </div>
    )
  } else {
    return (
      <div>
        <FinishForm />
      </div>
    )
  }
}
