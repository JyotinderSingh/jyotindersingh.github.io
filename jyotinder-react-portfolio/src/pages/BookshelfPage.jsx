import React from 'react';

// Consider creating a reusable BookItem component

function BookshelfPage() {
  // Data for books (could be moved to a separate file/API call)
  const books = [
    {
      imgSrc: "/images/antifragile.jpeg",
      title: "Antifragile: Things That Gain from Disorder",
      author: "Nassim Nicholas Taleb",
      description: "A groundbreaking exploration of systems that improve and grow stronger when exposed to volatility and stress."
    },
    {
      imgSrc: "/images/fooled_by_randomness.jpeg",
      title: "Fooled by Randomness",
      author: "Nassim Nicholas Taleb",
      description: "An examination of the underestimated role of chance in life and the markets, challenging how we think about success and failure."
    },
    {
      imgSrc: "/images/letters_from_a_stoic.jpeg",
      title: "Letters From A Stoic",
      author: "Seneca",
      description: "A collection of letters from the Stoic philosopher Seneca, offering timeless wisdom on how to live a fulfilling life."
    },
    {
      imgSrc: "/images/psychology_of_money.jpeg",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      description: "Exploring the complex relationship between money and human behavior through 19 short stories about wealth, greed, and happiness."
    },
    {
      imgSrc: "/images/database_design_and_implementation.jpeg",
      title: "Database Design and Implementation",
      author: "Edward Sciore",
      description: "A comprehensive guide to database system concepts, architecture, and implementation techniques."
    },
    {
      imgSrc: "/images/deep_learning_with_python_2.jpeg",
      title: "Deep Learning with Python",
      author: "François Chollet",
      description: "A hands-on introduction to deep learning using Python and Keras, covering the fundamentals of neural networks and their applications."
    },
    {
      imgSrc: "/images/ddia.png",
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      description: "A deep dive into building scalable, reliable, and maintainable data systems, exploring the principles and practices of modern data architecture."
    },
    {
      imgSrc: "/images/understanding_distributed_systems.jpeg",
      title: "Understanding Distributed Systems",
      author: "Roberto Vitillo",
      description: "A practical guide to the fundamental concepts and patterns behind modern distributed systems."
    },
    {
      imgSrc: "/images/crafting_interpreters.jpeg",
      title: "Crafting Interpreters",
      author: "Robert Nystrom",
      description: "A deep dive into understanding how interpreters and compilers work by building a comprehensive programming language."
    },
    {
      imgSrc: "/images/building_a_career_in_software.jpeg",
      title: "Building a Career in Software",
      author: "Daniel Heller",
      description: "A practical handbook for software engineers navigating their career path, from technical growth to professional development."
    },
  ];

  return (
    <div> {/* No specific className needed from the old <main> tag */}
      <h1>Bookshelf</h1>
      <section aria-labelledby="books-heading"> {/* Removed id, aria-labelledby is sufficient */} 
        <ul className="book-list" aria-label="List of recommended books">
          {books.map((book, index) => (
            <li key={index} className="book-item">
              <img
                loading="lazy"
                src={book.imgSrc}
                alt="" // Alt text should ideally be descriptive (e.g., book.title)
                className="book-cover"
              />
              <div className="book-details">
                <strong>{book.title}</strong> by {book.author}
                <p>{book.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default BookshelfPage; 