import { useCurrent } from "@/hooks/useCurrent";
import BasicForm from "./BasicForm/BasicForm";
import PaymentForm from "./PaymentForm/PaymentForm";

export default function RegisterForm() {
  const step = useCurrent((state) => state.step);

  if (step == 1) {
    return (
      <div>
        <BasicForm />
      </div>
    );
  } else {
    return (
      <div>
        <PaymentForm />
      </div>
    );
  }
}
