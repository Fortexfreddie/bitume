import { Heart, Bookmark, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const dummyArticle = {
  category: "Technology",
  title: "Tech Giants Unveil New Innovations at Annual Conference",
  author: "Amelia Harper",
  publishedDate: "July 26, 2024",
  imageUrl: "/placeholder-image.jpg",
  body: `
    <p>The annual Tech Innovators Conference wrapped up yesterday, showcasing groundbreaking advancements from leading technology companies. This year's event highlighted innovations in artificial intelligence, sustainable technology, and virtual reality, setting the stage for future industry trends. Keynote speakers from several major players presented their latest products and strategies, emphasizing a commitment to user-centric design and ethical considerations in technology development.</p>
    <p class="my-4">The conference also featured interactive exhibits and workshops, allowing attendees to experience the new technologies firsthand and engage with industry experts. The overall sentiment was optimistic, with a strong focus on collaboration and the potential for technology to address global challenges.</p>
    <p>Several startups also gained a spotlight, presenting disruptive ideas in AI-driven healthcare and green energy solutions. The event underscored the rapid pace of change and the increasing integration of smart technology into everyday life.</p>
  `
};

const relatedArticles = [
  {
    title: "The Future of AI: Trends and Predictions",
    description: "A deep dive into the potential impact of AI on various industries.",
    imageUrl: "/related-1.png"
  },
  {
    title: "Sustainable Tech: Innovations for a Greener Future",
    description: "Exploring new eco-friendly solutions to reduce environmental impact.",
    imageUrl: "/related-2.png"
  }
];

const comments = [
  {
    author: "Ethan Carter",
    date: "July 27, 2024",
    text: "Great summary of the conference! It's exciting to see the progress in AI and sustainable tech."
  },
  {
    author: "Olivia Bennett",
    date: "July 27, 2024",
    text: "I agree! The focus on ethical considerations is also very important."
  }
];

export default function ArticlePage({ params }) {
  const article = dummyArticle;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article>
        {/* Header */}
        <header className="mb-8">
          <p className="text-blue-600 font-semibold text-sm uppercase">
            {article.category}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 my-4">
            {article.title}
          </h1>
          <p className="text-gray-500">
            By {article.author} - Published on {article.publishedDate}
          </p>
        </header>

        <div className="w-full h-96 relative rounded-lg overflow-hidden mb-8">
          <Image
            src={article.imageUrl}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="bg-gray-200"
          />
        </div>

        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {/* Social Bar */}
        <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 my-8">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500">
              <Heart className="w-5 h-5" />
              <span>1.2k</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
              <Bookmark className="w-5 h-5" />
              <span>34</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </article>

      {/* Related Articles */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedArticles.map((related, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-24 h-24 relative rounded-lg overflow-hidden shrink-0">
                <Image
                  src={related.imageUrl}
                  alt={related.title}
                  layout="fill"
                  objectFit="cover"
                  className="bg-gray-200"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{related.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{related.description}</p>
                <Link href="#" className="text-blue-600 font-semibold text-sm">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comments */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <div key={index} className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 shrink-0"></div>
              <div>
                <p className="font-semibold">
                  {comment.author}{" "}
                  <span className="text-gray-400 text-sm font-normal">
                    - {comment.date}
                  </span>
                </p>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            </div>
          ))}
          {/* Comment Form */}
          <div className="flex items-start space-x-4 pt-6">
            <div className="w-10 h-10 rounded-full bg-gray-300 shrink-0"></div>
            <div className="flex-1">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                placeholder="Add a comment..."
              ></textarea>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-700">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}