import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "The wild Oasis",
    img: "https://images.pexels.com/photos/2294125/pexels-photo-2294125.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Developed a React-based expense-sharing app enabling users to manage and split bills with friends. Features include adding friends, tracking balances, and seamlessly splitting bills. Implemented with React state management and styledcompone",
    link: "https://the-best-hotel-cabins.netlify.app/login",
  },
  {
    id: 2,
    title: "Pizza Menu",
    img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Built a React-based e-commerce app with features like menu browsing, cart management, and order placement. Implemented seamless navigation using React Router and maintained a consistent UI with AppLayout. Demonstrated proficiency in React, state management, and error handling for a user-friendly experience.",
    link: "https://github.com/shaban14617/pizza-menu",
  },
  {
    id: 3,
    title: "React Quiz",
    img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi cumque dolore nostrum voluptatem voluptas eveniet consectetur earum! Commodi repellendus atque deserunt. Odit, minus necessitatibus culpa fuga modi natus dignissimos?",
    link: "https://github.com/shaban14617/react-quiz",
  },
  {
    id: 4,
    title: "Eat and Split",
    img: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi cumque dolore nostrum voluptatem voluptas eveniet consectetur earum! Commodi repellendus atque deserunt. Odit, minus necessitatibus culpa fuga modi natus dignissimos?",
    link: "https://github.com/shaban14617/eat-n-split",
  },
];
function Single({ item }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>
              {" "}
              <a target="blank" href={item.link}>
                See Demo
              </a>{" "}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
