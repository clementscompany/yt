/// Criando a configuração do tema do aplicativo
export const theme = (mode = "light") => {
  if (mode === "dark") {
    return {
      colors: {
        text: "#0b2e4a",
        text2: "#0b2e4a99",
        border: "#d0dbe550",
        background: "#ffffff",
        card: "#ffffff",
        primary: "#1e88e5",
      }
    }
  }

  return {
    colors: {
      text: "#e3f2fd",
      text2: "#e3f2fd80",
      border: "#1e88e530",
      background: "#0b1c2d",
      card: "#12283d",
      primary: "#1e88e5",
    }
  }
};
