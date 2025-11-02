import { useState } from 'react'
import styles from './FAQ.module.css'

const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Lykluk?',
        a: 'Lykluk is a digital platform designed to empower African creators, entrepreneurs, and the diaspora by providing tools to share, sell, and monetize African culture. It combines short-form video, an integrated marketplace, a secure wallet, and community features.'
      },
      {
        q: 'Who is Lykluk for?',
        a: 'Lykluk is for African creators, entrepreneurs, artisans, cultural enthusiasts, and the diaspora worldwide. Whether you create content, sell products, or simply want to connect with authentic African culture, Lykluk is built for you.'
      },
      {
        q: 'Is Lykluk available worldwide?',
        a: 'Yes! Lykluk is designed to connect African creators with audiences globally, including the diaspora. Our platform is accessible from anywhere in the world.'
      }
    ]
  },
  {
    category: 'Video Tools',
    questions: [
      {
        q: 'How do I create videos on Lykluk?',
        a: 'Once you sign up, you can easily shoot, edit, and share short-form videos directly from the app. Our intuitive tools make it simple to showcase your creativity, culture, and content.'
      },
      {
        q: 'What video formats are supported?',
        a: 'Lykluk supports all standard video formats including MP4, MOV, and AVI. Our platform optimizes videos automatically for the best viewing experience across devices.'
      },
      {
        q: 'Can I edit my videos after posting?',
        a: 'Yes! You can edit captions, descriptions, and tags after posting. However, the video content itself cannot be edited once published—you would need to delete and re-upload if changes are needed.'
      },
      {
        q: 'How long can my videos be?',
        a: 'Currently, videos can be up to 3 minutes long, perfect for engaging short-form content that captures attention and drives engagement.'
      }
    ]
  },
  {
    category: 'Marketplace',
    questions: [
      {
        q: 'How do I sell products on Lykluk?',
        a: 'Simply create a seller account, upload your products with photos and descriptions, set your prices, and start selling! Our platform handles listings, payments, and provides tools to manage your inventory.'
      },
      {
        q: 'Are there fees for selling?',
        a: 'Lykluk charges a small commission on sales to maintain the platform and provide secure payment processing. Details on fee structures will be provided when you sign up as a seller.'
      },
      {
        q: 'Can I sell internationally?',
        a: 'Yes! Lykluk connects you with buyers worldwide. You can set your own shipping options and rates for international orders.'
      },
      {
        q: 'What types of products can I sell?',
        a: 'You can sell authentic African products including fashion, art, crafts, food items, beauty products, and cultural goods. All products must comply with our community guidelines and local regulations.'
      }
    ]
  },
  {
    category: 'Wallet & Payments',
    questions: [
      {
        q: 'How do I get paid on Lykluk?',
        a: 'Your earnings from sales, ads, subscriptions, and digital gifts are deposited into your Lykluk Wallet. You can then withdraw funds to your bank account or mobile money account securely.'
      },
      {
        q: 'How secure is my wallet?',
        a: 'Lykluk Wallet uses bank-level encryption and security protocols to protect your funds. We partner with trusted payment processors and implement multi-factor authentication to ensure your money is safe.'
      },
      {
        q: 'How long does it take to receive payments?',
        a: 'Payments are processed instantly to your Lykluk Wallet. Withdrawals to your bank account typically take 1-3 business days, depending on your bank and location.'
      },
      {
        q: 'What payment methods are accepted?',
        a: 'We accept credit/debit cards, mobile money, bank transfers, and various local payment methods depending on your region. We\'re constantly adding new payment options.'
      }
    ]
  },
  {
    category: 'Community',
    questions: [
      {
        q: 'How do I connect with other creators?',
        a: 'You can follow creators, comment on videos, send direct messages, and collaborate on content. Lykluk fosters meaningful connections through shared cultural interests.'
      },
      {
        q: 'Can I join groups or communities?',
        a: 'Yes! Lykluk features community spaces where you can join groups based on interests like fashion, music, food, art, and more. These spaces help you connect with like-minded creators and fans.'
      },
      {
        q: 'How does Lykluk ensure safety?',
        a: 'We have robust content moderation, community guidelines, and reporting tools to maintain a safe, respectful environment. Our team actively monitors the platform and responds quickly to issues.'
      },
      {
        q: 'Can I block or report users?',
        a: 'Absolutely. You can block users, report inappropriate content, and control who can interact with your profile. Your safety and comfort are our priorities.'
      }
    ]
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const toggleAccordion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show "Back to Top" button when scrolled down
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowBackToTop(window.scrollY > 400)
    })
  }

  return (
    <div className={styles.faqPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroHeadline}>Have Questions? We've Got Answers.</h1>
          <p className={styles.heroSubheadline}>
            Learn more about Lykluk, how it works, and how to get started.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className={styles.categoryBlock}>
              <h2 className={styles.categoryHeading}>{category.category}</h2>
              <div className={styles.accordionList}>
                {category.questions.map((item, qIndex) => {
                  const index = `${catIndex}-${qIndex}`
                  const isOpen = openIndex === index
                  return (
                    <div
                      key={qIndex}
                      className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}
                    >
                      <button
                        className={styles.accordionButton}
                        onClick={() => toggleAccordion(catIndex, qIndex)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.question}>{item.q}</span>
                        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                      </button>
                      <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
                        <p className={styles.answer}>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}
    </div>
  )
}
