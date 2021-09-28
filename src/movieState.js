//Import Images
// import athlete from "./img/athlete-small.png";
// import goodtimes from "./img/goodtimes-small.png";
// import LouezsurApollo from "./img/Louez sur Apollo.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";
import apolloImmo from "./img/apolloImmo.png";
import apollo1 from "./img/apollo1.png";
import apollo2 from "./img/apollo2.png";
import apollo3 from "./img/apollo3.png";
import apollo4 from "./img/apollo4.png";
import apollo5 from "./img/apollo.jpg";
import rawg from "./img/raw.jpg";
import rawg2 from "./img/rawg2.png";

export const MovieState = () => {
  return [
    {
      title: "Apollo Immo Symfony ",
      mainImg: apollo5,
      secondaryImg: athlete2,
      url: "/work/apollo-immo",
      awards: [
        {
          title: "Apollo Immo - Rental management platform",
          description:
            "You are an owner and you have an apartment to rent ? Or are you a tenant looking for a new home? Are the steps complicated? Let us help you! ",
        },
        {
          title: "Renting online has never been so fast and simple ❤️",
          description:
            "Multi-platform diffusion of ads, verification of files, virtual visits, creation of contracts, dematerialized inventory of fixtures, electronic signature and much more. No agency fees, simple and secure!",
        },
        {
          title: "This project was made with... 💻",
          description:
            "Symfony - ApiPlatform - React - Cloudinary - SignaturIt - AllYouCanPost",
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
      title: "Ignite",
      mainImg: rawg2,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
      images: [
        { url: rawg, label: "" },
        { url: rawg, label: "" },
        { url: rawg, label: "" },
        { url: rawg, label: "" },
        { url: rawg, label: "" },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
