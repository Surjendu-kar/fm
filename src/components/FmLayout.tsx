import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { X } from "lucide-react";

type CardProps = {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
};

const Card = ({ title, description, imgSrc }: CardProps) => {
  return (
    <motion.div
      className="flex items-center justify-between bg-white p-2 rounded-md hover:bg-gray-50"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center gap-4">
        <img src={imgSrc} alt="" className="h-13 w-13 rounded-md" />
        <div className="flex flex-col">
          <h2 className="text-md font-semibold">{title}</h2>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>

      <div>
        <button className="bg-green-500 text-white px-4 py-1 rounded-md">
          play
        </button>
      </div>
    </motion.div>
  );
};

const musicList = [
  {
    id: 1,
    title: "song 1",
    description: "description 1",
    imgSrc: "https://picsum.photos/seed/1/200/300",
  },
  {
    id: 2,
    title: "song 2",
    description: "description 2",
    imgSrc: "https://picsum.photos/seed/2/200/300",
  },
  {
    id: 3,
    title: "song 3",
    description: "description 3",
    imgSrc: "https://picsum.photos/seed/3/200/300",
  },
  {
    id: 4,
    title: "song 4",
    description: "description 4",
    imgSrc: "https://picsum.photos/seed/4/200/300",
  },
  {
    id: 5,
    title: "song 5",
    description: "description 5",
    imgSrc: "https://picsum.photos/seed/5/200/300",
  },
];

const parentVariants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
    x: "-100vw",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      mass: 0.3,
      filter: {
        duration: 0.3,
      },
      scale: {
        duration: 0.2,
      },
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      type: "spring" as const,
      stiffness: 100,
      mass: 0.3,
      filter: {
        duration: 0.3,
      },
      scale: {
        duration: 0.8,
      },
    },
  },
};

function FmLayout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentCard, setCurrentCard] = useState<CardProps | null>(null);
  const [showMusicList, setShowMusicList] = useState(true);
  const [showNavBG, setShowNavBG] = useState<null | number>(null);

  const navList = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Contact",
    },
    {
      id: 4,
      title: "Services",
    },
  ];

  return (
    <div className="py-40 space-y-20">
      {/* //use layout to show navbar */}
      <div className="flex max-w-xl px-2 py-1 mx-auto bg-white rounded-full">
        {navList.map((nav) => {
          return (
            <motion.div
              key={nav.id}
              layoutId={`nav-${nav.id}`}
              className="py-3 relative text-center w-full text-neutral-500 group cursor-pointer"
              onMouseEnter={() => setShowNavBG(nav.id)}
              onMouseLeave={() => setShowNavBG(null)}
            >
              {showNavBG === nav.id && (
                <motion.div
                  layoutId={"hover"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full bg-black rounded-full"
                />
              )}
              <span className="text-lg relative group-hover:text-white transition-colors duration-300">
                {nav.title}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* use layout to show music list */}
      <div className="relative flex flex-col max-w-4xl mx-auto ">
        {/* music list */}
        <AnimatePresence>
          {showMusicList && (
            <motion.ul
              ref={ref}
              className="flex flex-col gap-6"
              variants={parentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="hidden"
            >
              {musicList.map((card) => {
                return (
                  <motion.li
                    key={card.id}
                    variants={childVariants}
                    layoutId={`card-${card.id}`}
                    onClick={() => setCurrentCard(card)}
                    className="cursor-pointer"
                  >
                    <Card
                      id={card.id}
                      title={card.title}
                      description={card.description}
                      imgSrc={card.imgSrc}
                    />
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="mt-10 flex justify-center items-center [perspective:1000px] [transform-style:preserve-3d]">
          {/* button */}
          <motion.button
            onClick={() => setShowMusicList((prev) => !prev)}
            whileHover={{
              rotateX: 10,
              rotateY: 20,
              boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
              y: -5,
            }}
            whileTap={{
              y: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="cursor-pointer group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_4px_0px_rgba(255,255,255,0.1)_inset]"
          >
            <span className="group-hover:text-cyan-500 transition-colors duration-300">
              {showMusicList ? "Hide Music List" : "Show Music List"}
            </span>
            <span className="absolute h-px w-3/4 mx-auto inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm absolute h-[4px] w-full mx-auto inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
          </motion.button>
        </div>

        {/* overlay */}
        {currentCard && (
          <div
            className="fixed w-full h-full inset-0 bg-black/50 backdrop-blur-sm z-10"
            onClick={() => setCurrentCard(null)}
          />
        )}

        {/* current card */}
        <AnimatePresence>
          {currentCard && (
            <motion.div
              layoutId={`card-${currentCard.id}`}
              className="p-4 flex flex-col shadow-lg fixed z-20 inset-x-0 top-25 m-auto h-[500px] w-96 rounded-2xl bg-white border border-neutral-100"
            >
              {/* Close button */}
              <div className="flex justify-end mb-2">
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold hover:bg-gray-100 rounded-full p-1 transition-all duration-300 cursor-pointer"
                  onClick={() => setCurrentCard(null)}
                >
                  <X />
                </motion.button>
              </div>

              {/* Image */}
              <img
                src={currentCard.imgSrc}
                alt={currentCard.title}
                className="h-48 w-full object-cover rounded-xl mb-4"
              />

              {/* Content area with flex-1 to take remaining space */}
              <div className="flex flex-col gap-3 flex-1 min-h-0">
                {/* Title and play button */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">
                      {currentCard.title}
                    </h2>
                    <p className="text-xs text-gray-500">
                      {currentCard.description}
                    </p>
                  </div>
                  <button className="bg-green-500 text-white px-4 text-sm py-1 rounded-md hover:bg-green-600 transition-all duration-300 cursor-pointer">
                    play
                  </button>
                </div>

                {/* Scrollable lorem text with constrained height */}
                <div className="flex-1 min-h-0 [mask-image:linear-gradient(to_top,transparent,black_20%)]">
                  <p className="text-sm text-gray-500 h-full overflow-y-auto pr-1 pb-5 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:transition-colors [&::-webkit-scrollbar-thumb]:duration-200 [scrollbar-width:thin] [scrollbar-color:transparent_transparent] hover:[scrollbar-color:rgb(156_163_175)_transparent]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse non est ut sem efficitur ultrices. Nulla dictum
                    pellentesque tellus et vulputate. Cras scelerisque consequat
                    mauris eu bibendum. Sed sollicitudin sapien ac justo porta,
                    eu sodales nulla dignissim. Curabitur accumsan nisl sit amet
                    sem eleifend, in posuere diam sodales. Phasellus tempus,
                    nunc vitae commodo gravida, leo arcu commodo velit, ac
                    ultricies quam enim vitae odio. Vestibulum ante ipsum primis
                    in faucibus orci luctus ipsum sagittis pulvinar.
                    Pellentesque sapien nisi, tempus ullamcorper diam ornare,
                    porttitor auctor sapien. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse non est ut sem
                    efficitur ultrices. Nulla dictum pellentesque tellus et
                    vulputate. Cras scelerisque consequat mauris eu bibendum.
                    Sed sollicitudin sapien ac justo porta, eu sodales nulla
                    dignissim. Curabitur accumsan nisl sit amet sem eleifend, in
                    posuere diam sodales. Phasellus tempus, nunc vitae commodo
                    gravida, leo arcu commodo velit, ac ultricies quam enim
                    vitae odio. Vestibulum ante ipsum primis in faucibus orci
                    luctus ipsum sagittis pulvinar. Pellentesque sapien nisi,
                    tempus ullamcorper diam ornare, porttitor auctor sapien.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FmLayout;
