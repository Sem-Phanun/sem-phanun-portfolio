import ApiImage from '../assets/image/api.jpg'
import PhoneShop from '../assets/image/phoneshop.png'
import Todo from '../assets/image/Todo.jpg'
import Profile from '../assets/image/profile.jpg'
import Hero from '../assets/image/myimage.jpg'
export const navbar = [
    {
        id: 1,
        name: "Home",
        route: "/"
    },
    {
        id: 2,
        name: "About Me",
        route: "/about"
    },
    {
        id: 3,
        name: "Skill",
        route: "/skill"
    },
    {
        id: 4,
        name: "Project",
        route: "/project",
    },
    {
        id: 5,
        name: "Contact",
        route: "/contact"
    }
]


export const projectList = [
    {
        id: 1,
        image: ApiImage,
        title: "Ecommerce Api",
        description: "Ecommerce api build by NodeJs",
        link: "https://github.com/Sem-Phanun/ecommerce_api"
    },
    {
        id: 2,
        image: PhoneShop,
        title: "React Electronic Store project",
        description: "React electronic project without responsive",
        link: "https://github.com/Sem-Phanun/react_ecm"
    },
    {
        id: 3,
        image: Todo,
        title: "Simple Todo List",
        description: "Todo application with firebase",
        link: "https://github.com/Sem-Phanun/React_Firebase"
    }
]


export const introduce = [
    {
        greeting: "Hello i'm",
        name: "Phanun",
        role: "Full Stack Developer",
        image: Hero
    }
]



export const aboutMe = [
    {
        profile: Profile,
        title: "About Me",
        description: "Hello I'm Phanun. I'm from kampong speu, senior student at Royal University of Phnom Penh. Major: Computer Science and Engineering. I am excited about leaveraging my skills and knowlege in the dynamic world of Technology."
    }
]
