import { useSelector } from "react-redux"
import { getCurrentPageSelector } from "../../redux/slices/app/selectors"

export function Constructor() {
  const page = useSelector(getCurrentPageSelector)

  console.log(page);
  return (
    <div>
      Constructor
    </div>
  )
}