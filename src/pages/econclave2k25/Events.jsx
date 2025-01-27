import React from 'react'
import { GlareCard } from '../../components/GlareCard'

const Events = () => {
  return (
    <div className='flex flex-row justify-between my-4 mx-10'>
      <GlareCard>
  <h2>The Intraday Showdown</h2>
  <p>📈 <strong>Virtual Stock Trading Competition</strong></p>
  <p><strong>Date:</strong> 11th February</p>
  <p><strong>Market Time:</strong> 9:15 AM – 3:30 PM</p>
  <p><strong>Perks:</strong> Refreshments included 🍴</p>
  <p><strong>Registration Fee:</strong> ₹150/-</p>
  <p>Think you have what it takes to thrive in the market? Test your trading skills in this exciting virtual competition and show everyone you’re the real stock market maestro!</p>
</GlareCard>

<GlareCard>
  <h2>Internship Fair</h2>
  <p>🌟 <strong>Bridging the Gap Between Talent and Opportunity</strong></p>
  <p>Tired of limited connections within college? Here's your chance!</p>
  <p><strong>For Companies:</strong> Discover talented interns across all fields.</p>
  <p><strong>For Students:</strong> Land your dream internship right here.</p>
  <p>Open doors to endless possibilities and give your career a head start!</p>
</GlareCard>

<GlareCard>
  <h2>Startup Expo</h2>
  <p>🚀 <strong>Showcase Your Startup, Pitch to Investors</strong></p>
  <p>Promote your venture at the college level.</p>
  <p>Build awareness across Pune.</p>
  <p>Solve real-world problems by pitching in front of investors.</p>
  <p>Let your entrepreneurial spirit shine and connect with like-minded individuals to take your startup to the next level!</p>
</GlareCard>

<GlareCard>
  <h2>Keynote & Speaker Session</h2>
  <p>💬 <strong>Meet Business Leaders & Influencers</strong></p>
  <p>Engaging chats at the <strong>Cultural Centre (CC)</strong>.</p>
  <p>Personal Q&A opportunities with inspiring professionals.</p>
  <p>Don’t miss this chance to gain valuable insights and motivation directly from the experts themselves!</p>
</GlareCard>


    </div>
  )
}

export default Events
