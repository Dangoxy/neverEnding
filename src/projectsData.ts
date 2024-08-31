let projectsData = [
  {
    projectNumber: "01",
    title: "Whac-a-mole",
    pathToGif: "../../public/Whac-a-mole/Whac-a-mole.gif",
    pathToImg: "../../public/Whac-a-mole/Whac-a-mole.png",
    toPath: "/01-Whac-a-mole",
  },
  {
    projectNumber: "02",
    title: "Login form",
    pathToGif: "../../public/LoginForm/LoginForm.gif",
    pathToImg: "../../public/LoginForm/LoginForm.png",
    toPath: "/02-Login-form",
  },
  {
    projectNumber: "03",
    title: "Mouse effect",
    pathToGif: "../../public/MouseEffect/MouseEffect.gif",
    pathToImg: "../../public/MouseEffect/MouseEffect.png",
    toPath: "/03-Mouse-effect",
  },
  {
    projectNumber: "04",
    title: "Tic-tac-toe",
    pathToGif: "../../public/Tic-tac-toe/Tic-tac-toe.gif",
    pathToImg: "../../public/Tic-tac-toe/Tic-tac-toe.png",
    toPath: "/04-Tic-tac-toe",
  },
  {
    projectNumber: "05",
    title: "Hamburger menu",
    pathToGif: "../../public/HamburgerMenu/HamburgerMenu.gif",
    pathToImg: "../../public/HamburgerMenu/HamburgerMenu.png",
    toPath: "/05-Hamburger-menu",
  },
  {
    projectNumber: "06",
    title: "Hectagonal tube",
    pathToGif: "../../public/HectagonalTube/HectagonalTube.gif",
    pathToImg: "../../public/HectagonalTube/HectagonalTube.png",
    toPath: "/06-Hectagonal-tube",
  },
  {
    projectNumber: "07",
    title: "Dropdown menu",
    pathToGif: "../../public/DropdownMenu/DropdownMenu.gif",
    pathToImg: "../../public/DropdownMenu/DropdownMenu.png",
    toPath: "/07-Dropdown-menu",
  },
  {
    projectNumber: "08",
    title: "Animating clock",
    pathToGif: "../../public/AnimatingClock/AnimatingClock.gif",
    pathToImg: "../../public/AnimatingClock/AnimatingClock.png",
    toPath: "/08-Animating-clock",
  },
  {
    projectNumber: "09",
    title: "Heads or Tails",
    pathToGif: "../../public/HeadsOrTails/HeadsOrTails.gif",
    pathToImg: "../../public/HeadsOrTails/HeadsOrTails.png",
    toPath: "/09-Heads-or-Tails",
  },
  {
    projectNumber: "10",
    title: "Folding banners",
    pathToGif: "../../public/FoldingBanners/FoldingBanners.gif",
    pathToImg: "../../public/FoldingBanners/FoldingBanners.png",
    toPath: "/10-Folding-banners",
  },

  {
    projectNumber: "11",
    title: "Collapsing text",
    pathToGif: "../../public/CollapsingText/CollapsingText.gif",
    pathToImg: "../../public/CollapsingText/CollapsingText.png",
    toPath: "/11-Collapsing-text",
  },
];

let lorem = [
  `Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis aptent
          varius, elit vitae cubilia fringilla maecenas. Penatibus aptent
          venenatis montes faucibus tempus. Vitae eget nam rhoncus facilisi
          congue phasellus molestie. Blandit consectetur dolor mus aenean semper
          at, ut taciti. Amet ex torquent luctus pellentesque netus, a et nam
          sollicitudin. Nulla adipiscing condimentum nullam non eros eleifend.
          Tortor pretium varius aenean nisi finibus. Sociosqu commodo ut nisi
          magna lacus sapien a blandit. Rutrum dapibus dis magnis primis neque
          nisi eros viverra viverra. Ultrices morbi viverra at a litora
          vulputate netus conubia in. Elit augue arcu gravida pulvinar a
          ridiculus. Aptent euismod montes venenatis quam orci ligula hendrerit
          est consectetur. Purus odio class rhoncus a fermentum odio elit
          molestie. Sagittis hac ultrices adipiscing, placerat litora mollis.`,
  `Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis aptent
          varius, elit vitae cubilia fringilla maecenas. Penatibus aptent
          venenatis montes faucibus tempus. Vitae eget nam rhoncus facilisi
          congue phasellus molestie. Blandit consectetur dolor mus aenean semper
          at, ut taciti. Amet ex torquent luctus pellentesque netus, a et nam
          sollicitudin. Nulla adipiscing condimentum nullam non eros eleifend.
          Tortor pretium varius aenean nisi finibus. Sociosqu commodo ut nisi
          magna lacus sapien a blandit. Rutrum dapibus dis magnis primis neque
          nisi eros viverra viverra. Ultrices morbi viverra at a litora
          vulputate netus conubia in. Elit augue arcu gravida pulvinar a
          ridiculus. Aptent euismod montes venenatis quam orci ligula hendrerit.
          `,
  `Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis aptent
          varius, elit vitae cubilia fringilla maecenas. Penatibus aptent
          venenatis montes faucibus tempus. Vitae eget nam rhoncus facilisi
          congue phasellus molestie. Blandit consectetur dolor mus aenean semper
          at, ut taciti. Amet ex torquent luctus pellentesque netus, a et nam
          sollicitudin. Nulla adipiscing condimentum nullam non eros eleifend.
          Tortor pretium varius aenean nisi finibus. Sociosqu commodo ut nisi
          magna lacus sapien a blandit. Rutrum dapibus dis magnis primis neque
          nisi eros viverra viverra. Ultrices morbi viverra at a litora.
          `,
  `Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis aptent
          varius, elit vitae cubilia fringilla maecenas. Penatibus aptent
          venenatis montes faucibus tempus. Vitae eget nam rhoncus facilisi
          congue phasellus molestie. Blandit consectetur dolor mus aenean semper
          at, ut taciti. Amet ex torquent luctus pellentesque netus, a et nam
          sollicitudin. Nulla adipiscing condimentum nullam non eros eleifend.
          Tortor pretium varius aenean nisi finibus. Sociosqu commodo ut nisi.
          `,
  `Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis aptent
          varius, elit vitae cubilia fringilla maecenas. Penatibus aptent
          venenatis montes faucibus tempus. Vitae eget nam rhoncus facilisi
          congue phasellus molestie. Blandit consectetur dolor mus aenean semper
          at, ut taciti. Amet ex torquent luctus pellentesque netus, a et nam.
          `,
  `Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis aptent
          varius, elit vitae cubilia fringilla maecenas. Penatibus aptent
          venenatis montes faucibus tempus. Vitae eget nam rhoncus facilisi.
          `,
];

export { projectsData, lorem };
