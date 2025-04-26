import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
export function SearchForm() {
  return (
    <div className="relative w-full max-w-md mx-auto mt-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search for food..."
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  )
}
