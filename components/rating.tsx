import { StarIcon } from "lucide-react"
import { Badge } from "./ui/badge"

type RatingProp = {
    rate : number
}
export default function Rating ({rate} : RatingProp ) {
    return <Badge className={rate >3 ? "bg-green-700" : "bg-red-700"}>{rate}</Badge>
}
