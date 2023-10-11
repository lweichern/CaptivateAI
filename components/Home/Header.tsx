import React from "react";
import PromptInput from "./PromptInput";

function Header() {
  return (
    <section className=" h-screen flex  flex-col" id="promptSection">
      <PromptInput />
    </section>
  );
}

export default Header;
