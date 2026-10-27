import React from "react";
import Newsletter from "../components/Newsletter";
import topRatedImg from "../assets/b6b587d57facfc1bdfa4bcc48e5e729da0e2c4de_2000x2000.webp";
import communityImg from "../assets/Gemini_Generated_Image_ehdm9sehdm9sehdm.png";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 py-16 px-6 bg-blue-100">
      <Helmet>
        <title>About - GameHub</title>
      </Helmet>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-primary">About GameHub</h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-primary">GameHub</span>{" "}
          — your ultimate destination for discovering, exploring, and tracking
          the most popular PC games around the world. We’re passionate gamers
          who believe that gaming is more than just entertainment — it’s a
          community, a lifestyle, and a creative universe.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16 items-center">
          <img
            src={topRatedImg}
            alt="Gaming setup"
            className="rounded-2xl shadow-xl h-99"
          />
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-3 text-primary">
              Explore Top Rated Games
            </h2>
            <p className="text-gray-600 leading-relaxed">
              GameHub curates a collection of the most loved and top-rated games
              based on player reviews and global popularity. Whether you enjoy
              open-world adventures, fast-paced shooters, or creative sandbox
              titles, we’ve got something for every gamer. Browse through
              ratings, reviews, and visuals to find your next favorite game.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16 items-center">
          <div className="text-left order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-3 text-primary">
              Join Our Gaming Community
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At GameHub, we aim to bring gamers together. Our platform isn’t
              just about discovering games — it’s about connecting with others
              who share your passion. From recommendations to discussions, we’re
              building a community where everyone feels welcome.
            </p>
          </div>
          <img
            src={communityImg}
            alt="Community"
            className="rounded-2xl shadow-xl order-1 md:order-2 h-99"
          />
        </div>

        <div className="mt-20 bg-base-300 p-10 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our mission is to make gaming more accessible, enjoyable, and
            community-driven. We want to empower players to share their
            experiences, explore new titles, and celebrate the culture of gaming
            together. From classic masterpieces to modern hits, GameHub is your
            one-stop platform for all things gaming.
          </p>
        </div>

        <div className="mt-20">
          <Newsletter></Newsletter>
        </div>
      </div>
    </div>
  );
};

export default About;
