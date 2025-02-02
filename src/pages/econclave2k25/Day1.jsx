import React from 'react'

const Day1 = () => {
  return (
    <div className="border border-yellow-900/30 shadow-md overflow-hidden" style={{ boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.6)" }}>
      {/* <iframe src="https://konfhub.com/widget/econclave-2025?desc=false&ticketId=32086&secondaryBg=000000&ticketBg=000000&borderCl=000000&bg=000000&fontColor=ffffff&ticketCl=ffffff&btnColor=f8e71c&fontFamily=Prompt&borderRadius=5" id="konfhub-widget" title="Register for Econclave 2025" width="100%" height="500"></iframe> */}
      {/* <iframe src="https://konfhub.com/widget/econclave-2025?desc=false&ticketId=32086&secondaryBg=212121&ticketBg=212121&borderCl=212121&bg=000000&fontColor=ffffff&ticketCl=ffffff&btnColor=fbc02d&fontFamily=Prompt&borderRadius=5" id="konfhub-widget" title="Register for Econclave 2025" width="100%" height="500"></iframe> */}
      <iframe src="https://konfhub.com/widget/econclave-2025?desc=true&secondaryBg=ffb300&ticketBg=ffb300&borderCl=ffb300&bg=000000&fontColor=ffffff&ticketCl=ffffff&btnColor=000000&fontFamily=Inter&borderRadius=15" id="konfhub-widget" title="Register for Econclave 2025" width="100%" height="500" style={{ border: "none", overflow: "hidden" }} scrolling="no"></iframe>
    </div>
  )
}

export default Day1
