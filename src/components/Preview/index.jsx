import { useSelector } from "react-redux"
import { getCurrentPageSelector } from "../../redux/slices/app/selectors"
import { BUTTON_TYPE, HEADLINE_TYPE, IMAGE_TYPE, PARAGRAPH_TYPE } from "../../constants"

const ELEMENTS = {
  [HEADLINE_TYPE]: ({ data }) => <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{data}</h1>,
  [PARAGRAPH_TYPE]: ({ data }) => <p>{data}</p>,
  [BUTTON_TYPE]: ({ data }) => <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{data}</button>,
  [IMAGE_TYPE]: ({ data }) => <img src={data} alt='' />
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