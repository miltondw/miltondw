import { AiFillHome } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbMessageCode } from "react-icons/tb";

export const items = [
    {
        link: "#",
        icon: () => <AiFillHome />,
    },
    {
        link: "#about",
        icon: () => <FaUserAstronaut />,
    },
    {
        link: "#experience",
        icon: () => <GiBookshelf />,
    },
    {
        link: "#projects",
        icon: () => <MdOutlineDesignServices />,
    },
    {
        link: "#contact",
        icon: () => <TbMessageCode />,
    },
];
