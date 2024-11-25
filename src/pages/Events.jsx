// import ThreeDCardDemo from "../components/ThreeDCard";
import { Card, CardContent, CardHeader } from "acertainity-ui";

const Events = () => {
    const eventsData = [
      {
        title: "E-Conclave",
        description:
          "A flagship event that brings together entrepreneurs, investors, and leaders to share their experiences and insights.",
      },
      {
        title: "Aarambh",
        description:
          "The beginning of a journey for aspiring entrepreneurs, packed with workshops and mentorship sessions.",
      },
      {
        title: "Startup Sutra",
        description:
          "A comprehensive event focused on pitching, networking, and learning for budding startups.",
      },
    ];

    return(
        <div className="events-container">
        <h1 className="events-heading">What We Do?</h1>
        <h2 className="events-subheading">Events</h2>
  
        <div className="cards-container">
          {eventsData.map((event, index) => (
            <Card key={index} className="event-card">
              <CardHeader title={event.title} />
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
}

export default Events;