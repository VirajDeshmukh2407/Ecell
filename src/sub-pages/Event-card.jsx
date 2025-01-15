import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Link } from "react-router-dom";
export function ThreeDCardDemo({ event }) {

  const { title, description, link, thumnail } = event;

  return (
    <CardContainer className="inter-var">
      <CardBody
        className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white:[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
      >
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-sm max-w-sm mt-2 text-white"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ={100}
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src={thumnail}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-20">
          <Link to={event.link}>
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-[#D97706] transition-colors duration-300"
            >
              See More
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
