import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `LEGOBOTIC  -  ${title}`;
    }, [title])
}

export default useTitle;