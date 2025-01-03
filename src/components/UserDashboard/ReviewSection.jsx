import { StarIcon } from 'lucide-react'



const reviews = [
  {
    id: 1,
    author: "John Doe",
    rating: 5,
    date: "2023-05-15",
    content: "Great t-shirt! Comfortable and fits perfectly."
  },
  {
    id: 2,
    author: "Jane Smith",
    rating: 4,
    date: "2023-05-10",
    content: "Nice quality, but the color was slightly different from what I expected."
  },
  {
    id: 3,
    author: "Mike Johnson",
    rating: 5,
    date: "2023-05-05",
    content: "Excellent product. I've already ordered another one!"
  }
];

export default function ReviewSection() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800">Customer Reviews</h3>
      <div className="mt-4 space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold text-gray-800 mr-2">{review.author}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">{review.date}</span>
            </div>
            <p className="text-sm text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
