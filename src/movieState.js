import athlete2 from "./img/athlete2.png";
import theracer2 from "./img/the-racer2.jpg";
import apolloImmo from "./img/apolloImmo.png";
import apollo1 from "./img/apollo1.png";
import apollo2 from "./img/apollo2.png";
import apollo3 from "./img/apollo3.png";
import apollo4 from "./img/apollo4.png";
import apollo5 from "./img/apollo.jpg";
import rawg from "./img/raw.jpg";
import rawg2 from "./img/rawg2.png";
import ignite from "./img/ignite.svg";
import ignite1 from "./img/ignite1.png";
import ignite2 from "./img/ignite2.png";
import ignite3 from "./img/ignite3.png";
import ignite4 from "./img/ignite4.png";
import inframe2 from "./img/inframe2.jpg";
import inframe3 from "./img/inframe3.jpg";
import inframe4 from "./img/inframe4.jpg";
import inframe5 from "./img/inframe5.jpg";
import inframe6 from "./img/inframe6.jpg";

export const MovieState = () => {
  return [
    {
      title: "Apollo Immo Symfony ",
      mainImg: apollo5,
      secondaryImg: athlete2,
      url: "/work/apollo-immo",
      links: [
        {
          type: "prod",
          link: "https://apollo-immo.fr/",
        },
      ],
      awards: [
        {
          title: "Rental management platform",
          description:
            "You are an owner and you have an apartment to rent ? Or are you a tenant looking for a new home? Are the steps complicated? Let us help you! ",
        },
        {
          title: "Renting has never been so fast ❤️",
          description:
            "Multi-platform diffusion of ads, verification of files, virtual visits, creation of contracts, dematerialized inventory of fixtures, electronic signature and much more. No agency fees, simple and secure!",
        },
        {
          title: "This project was made with... 💻",
          description:
            "Symfony - ApiPlatform - React - Material-Ui - Axios -  Yup - Cloudinary - SignaturIt - AllYouCanPost",
        },
      ],
      images: [
        { url: apolloImmo, label: "" },
        { url: apollo1, label: "" },
        { url: apollo2, label: "" },
        { url: apollo3, label: "" },
        { url: apollo4, label: "" },
      ],
    },
    {
      title: "Inframe",
      mainImg: inframe2,
      url: "/work/inframe",
      links: [
        {
          type: "prod",
          link: "https://inframe.blog/",
        },
      ],
      secondaryImg: theracer2,
      awards: [
        {
          title: "IN FRAME Truly A masterpiece",
          description:
            "IN FRAME collects stories about ordinary people with extraordinary hearts. Inspired by the places Vassy ( the author ) has visited and the people she has met there",
        },
        {
          title: "Silent heroes are everywhere! 📕",
          description:
            "A candid collection of stories about ordinary people with extraordinary hearts. Wrapped in words, their stories are direct and honest, without a filter. Every second person is a good one, they say. If you don’t see one- be one.",
        },
        {
          title: "This project was made with... 💻",
          description:
            "Wordpress , Elementor, Figma, Canva, Font Awesome, Grid",
        },
      ],
      images: [
        { url: inframe3, label: "" },
        { url: inframe4, label: "" },
        { url: inframe5, label: "" },
        { url: inframe6, label: "" },
      ],
    },
    {
      title: "Ignite",
      mainImg: rawg2,
      url: "/work/ignite",
      links: [
        {
          type: "sourceCode",
          link: "https://github.com/peuks/ignite",
        },
        {
          type: "prod",
          link: "https://apollo-immo.fr/",
        },
      ],
      secondaryImg: ignite,
      awards: [
        {
          title: "Ignite - The Best Video Game Database",
          description:
            "Are you looking for new games of 2021 (and beyond) to get excited about ? You can not be wrong being here !",
          // "You are an owner and you have an apartment to rent ? Or are you a tenant looking for a new home? Are the steps complicated? Let us help you!",
        },
        {
          title: "The fastest way to be informed about video games 🎮",
          description:
            "New, trending and Popular Games, synopsis and Image Gallery",
        },
        {
          title: "This project was made with... 💻",
          description:
            "React - Redux - Raw.io -  Axios - Styled-Components - FramerMotion",
        },
      ],
      images: [
        { url: rawg, label: "" },
        { url: ignite1, label: "" },
        { url: ignite2, label: "" },
        { url: ignite3, label: "" },
        { url: ignite4, label: "" },
      ],
    },
  ];
};
