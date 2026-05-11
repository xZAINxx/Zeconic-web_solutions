"use client";

import Script from "next/script";

const inlineLoader = (botId: string) => `
(function(){
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) { window.chatbase.q = []; }
      window.chatbase.q.push(args);
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q;
        return (...args) => target(prop, ...args);
      },
    });
  }
  var onLoad = function() {
    var script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = ${JSON.stringify(botId)};
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);
  };
  if (document.readyState === "complete") { onLoad(); }
  else { window.addEventListener("load", onLoad); }
})();
`;

export function Chatbase() {
  const botId = process.env.NEXT_PUBLIC_CHATBASE_BOT_ID;
  if (!botId) return null;

  return (
    <Script
      id="chatbase-loader"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{ __html: inlineLoader(botId) }}
    />
  );
}
