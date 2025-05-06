(function () {
    function getAidParam() {
      try {
        const params = new URLSearchParams(window.location.search);
        return params.get('aid');
      } catch (e) {
        return null;
      }
    }
  
    const aid = getAidParam();
  
    if (!aid) return;
  
    const script = document.createElement("script");
    script.src = "https://trackreward.com/assets/js/proscript.js";
    script.onload = function () {
      if (window.Mastutrack && typeof Mastutrack._init === "function") {
        Mastutrack._init({ aid: aid, state: "visit" });
      }
    };
  
    document.head.appendChild(script);
  })();  