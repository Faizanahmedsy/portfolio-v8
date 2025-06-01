"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify-icon/react";

// Types
interface IconSize {
  fontSize: string;
}

interface TechItem {
  name: string;
  icon: string;
  category: "language" | "framework" | "library";
  color: string;
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

// Constants
const ICON_SIZES = {
  desktop: {
    language: { fontSize: "75px" },
    framework: { fontSize: "75px" },
    library: { fontSize: "70px" },
  },
  mobile: {
    language: { fontSize: "65px" },
    framework: { fontSize: "55px" },
    library: { fontSize: "50px" },
  },
} as const;

const TECH_STACK: TechItem[] = [
  {
    name: "TypeScript",
    icon: "skill-icons:typescript",
    category: "language",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: "skill-icons:javascript",
    category: "language",
    color: "#F7DF1E",
  },
  {
    name: "Java",
    icon: "skill-icons:java-dark",
    category: "language",
    color: "#ED8B00",
  },
  {
    name: "Go",
    icon: "skill-icons:golang",
    category: "language",
    color: "#00ADD8",
  },
  {
    name: "Next.js",
    icon: "devicon:nextjs",
    category: "framework",
    color: "#000000",
  },
  {
    name: "React",
    icon: "logos:react",
    category: "framework",
    color: "#61DAFB",
  },
  // {
  //   name: "Ionic",
  //   icon: "logos:ionic-icon",
  //   category: "framework",
  //   color: "#3880FF",
  // },
  {
    name: "Payload CMS",
    icon: "simple-icons:payloadcms",
    category: "framework",
    color: "#3880FF",
  },
  {
    name: "Svelte",
    icon: "devicon:svelte",
    category: "framework",
    color: "#FF3E00",
  },
  {
    name: "Ant Design",
    icon: "logos:ant-design",
    category: "library",
    color: "#0170FE",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon:tailwindcss",
    category: "library",
    color: "#06B6D4",
  },
  {
    name: "shadcn/ui",
    icon: "simple-icons:shadcnui",
    category: "library",
    color: "#000000",
  },
  {
    name: "Material-UI",
    icon: "simple-icons:mui",
    category: "library",
    color: "#007FFF",
  },
];

const TechIcon: React.FC<{
  name: string;
  icon: string;
  iconSize: IconSize;
  color: string;
  showLabel?: boolean;
}> = ({ name, icon, iconSize, color, showLabel = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={iconVariants}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        animate={{
          y: isHovered ? -5 : 0,
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
      >
        <Icon icon={icon} style={iconSize} />
        {showLabel && (
          <motion.h6
            className="text-sm font-medium mt-2 opacity-80 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {name}
          </motion.h6>
        )}
      </motion.div>
      <motion.div
        className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-20"
        style={{ backgroundColor: color }}
        animate={{ opacity: isHovered ? 0.2 : 0 }}
      />
    </motion.div>
  );
};

const TechCategory: React.FC<{
  title: string;
  titleColor: string;
  items: TechItem[];
  category: "language" | "framework" | "library";
  isVisible: boolean;
}> = ({ title, titleColor, items, category, isVisible }) => {
  return (
    <Card className="backdrop-blur-sm bg-black/40 border-zinc-800/50 hover:bg-black/60 transition-colors duration-300">
      <CardHeader>
        <CardTitle
          className={`${titleColor} text-2xl font-bold tracking-tight`}
        >
          {title}
        </CardTitle>
      </CardHeader>

      {/* Desktop View */}
      <motion.div
        className="p-8 md:flex justify-center gap-8 hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {items
          .filter((item) => item.category === category)
          .map((item) => (
            <TechIcon
              key={item.name}
              name={item.name}
              icon={item.icon}
              iconSize={ICON_SIZES.desktop[category]}
              color={item.color}
              showLabel={true}
            />
          ))}
      </motion.div>

      {/* Mobile View */}
      <motion.div
        className="p-6 md:hidden flex justify-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {items
          .filter((item) => item.category === category)
          .map((item) => (
            <TechIcon
              key={item.name}
              name={item.name}
              icon={item.icon}
              iconSize={ICON_SIZES.mobile[category]}
              color={item.color}
            />
          ))}
      </motion.div>
    </Card>
  );
};

const TechStack: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center">
      <div className="h-full grid xl:grid-cols-2 lg:grid-cols-2 gap-6 mt-14 md:px-32 px-4">
        <TechCategory
          title="Languages"
          titleColor="text-rose-400"
          items={TECH_STACK}
          category="language"
          isVisible={isInView}
        />
        <TechCategory
          title="Frameworks"
          titleColor="text-emerald-400"
          items={TECH_STACK}
          category="framework"
          isVisible={isInView}
        />
        {/* <TechCategory
          title="Libraries"
          titleColor="text-sky-400"
          items={TECH_STACK}
          category="library"
          isVisible={isInView}
        /> */}
      </div>
    </div>
  );
};

export default TechStack;
