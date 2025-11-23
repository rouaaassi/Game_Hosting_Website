export const  Schema = {
  prompt: ({ inquirer }) => {
    return inquirer.prompt([
      { type: "input", name: "id", message: "Game ID:" },
      { type: "input", name: "title", message: "Game Title:" },
      { type: "input", name: "description", message: "Description:" },
      { type: "input", name: "thumbnail", message: "Thumbnail URL:" },
      { type: "input", name: "category", message: "Category:" },
      { type: "input", name: "iframeUrl", message: "Iframe URL:" },
    ]);
  },
};
