import { useSelector } from "react-redux"
import { getCurrentPageSelector } from "../../redux/slices/app/selectors"
import { BUTTON_TYPE, HEADLINE_TYPE, IMAGE_TYPE, PARAGRAPH_TYPE } from "../../constants"

const ELEMENTS = {
  [HEADLINE_TYPE]: ({ data }) => <h1 className="font-roboto text-xl text-custom-dark font-bold">{data}</h1>,
  [PARAGRAPH_TYPE]: ({ data }) => <p className="font-roboto text-sm text-custom-blue-grey">{data}</p>,
  [BUTTON_TYPE]: ({ data }) => <button className="bg-custom-blue w-max mx-auto font-roboto text-sm font-medium hover:bg-blue-700 text-custom-white py-2.5 px-7 rounded">{data}</button>,
  [IMAGE_TYPE]: ({ data }) => <img className="border rounded" src={data} alt='' />
}

export function Preview() {
  const page = useSelector(getCurrentPageSelector)

  return (
    <div className="flex flex-col gap-y-4 text-center w-2/4 overflow-y-auto p-6 pb-20">
      {page.map(element => {
        const Component = ELEMENTS[element.type]
        return <Component key={element.id} data={element.data} />
      })}
    </div>
  )
}