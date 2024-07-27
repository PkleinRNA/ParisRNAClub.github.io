function switchTheme(){var e=document.body;e.classList.contains("dark-theme")?e.classList.remove("dark-theme"):e.classList.add("dark-theme"),switchProfilePhoto()}function switchProfilePhoto(){const e=document.querySelector(".profile-img-light"),t=document.querySelector(".profile-img-dark");document.body.classList.contains("dark-theme")?(e.style.display="none",t.style.display="block"):(e.style.display="block",t.style.display="none")}let toggleThemeSetting=()=>{let e=determineThemeSetting();setThemeSetting("system"==e?"light":"light"==e?"dark":"system")},setThemeSetting=e=>{localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme-setting",e),applyTheme()},applyTheme=()=>{let e=determineComputedTheme();transTheme(),setHighlight(e),setGiscusTheme(e),setSearchTheme(e),"undefined"!=typeof mermaid&&setMermaidTheme(e),"undefined"!=typeof Diff2HtmlUI&&setDiff2htmlTheme(e),"undefined"!=typeof echarts&&setEchartsTheme(e),"undefined"!=typeof vegaEmbed&&setVegaLiteTheme(e),document.documentElement.setAttribute("data-theme",e);let t=document.getElementsByTagName("table");for(let i=0;i<t.length;i++)"dark"==e?t[i].classList.add("table-dark"):t[i].classList.remove("table-dark");let i=document.getElementsByClassName("jupyter-notebook-iframe-container");for(let t=0;t<i.length;t++){let n=i[t].getElementsByTagName("iframe")[0].contentWindow.document.body;"dark"==e?(n.setAttribute("data-jp-theme-light","false"),n.setAttribute("data-jp-theme-name","JupyterLab Dark")):(n.setAttribute("data-jp-theme-light","true"),n.setAttribute("data-jp-theme-name","JupyterLab Light"))}"undefined"!=typeof medium_zoom&&medium_zoom.update({background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})},setHighlight=e=>{"dark"==e?(document.getElementById("highlight_theme_light").media="none",document.getElementById("highlight_theme_dark").media=""):(document.getElementById("highlight_theme_dark").media="none",document.getElementById("highlight_theme_light").media="")},setGiscusTheme=e=>{function t(e){const t=document.querySelector("iframe.giscus-frame");t&&t.contentWindow.postMessage({giscus:e},"https://giscus.app")}t({setConfig:{theme:e}})},addMermaidZoom=(e,t)=>{d3.selectAll(".mermaid svg").each(function(){var e=d3.select(this);e.html("<g>"+e.html()+"</g>");var t=e.select("g"),i=d3.zoom().on("zoom",function(e){t.attr("transform",e.transform)});e.call(i)}),t.disconnect()},setMermaidTheme=e=>{"light"==e&&(e="default"),document.querySelectorAll(".mermaid").forEach(e=>{let t=e.previousSibling.childNodes[0].innerHTML;e.removeAttribute("data-processed"),e.innerHTML=t}),mermaid.initialize({theme:e}),window.mermaid.init(undefined,document.querySelectorAll(".mermaid"));const t=document.querySelector(".mermaid svg");if(null!==t){const e={childList:!0};new MutationObserver(addMermaidZoom).observe(t,e)}},setDiff2htmlTheme=e=>{document.querySelectorAll(".diff2html").forEach(t=>{let i=t.previousSibling.childNodes[0].innerHTML;t.innerHTML="",new Diff2HtmlUI(t,i,{colorScheme:e,drawFileList:!0,highlight:!0,matching:"lines"}).draw()})},setEchartsTheme=e=>{document.querySelectorAll(".echarts").forEach(t=>{let i=t.previousSibling.childNodes[0].innerHTML;if(echarts.dispose(t),"dark"===e)var n=echarts.init(t,"dark-fresh-cut");else n=echarts.init(t);n.setOption(JSON.parse(i))})},setVegaLiteTheme=e=>{document.querySelectorAll(".vega-lite").forEach(t=>{let i=t.previousSibling.childNodes[0].innerHTML;t.innerHTML="","dark"===e?vegaEmbed(t,JSON.parse(i),{theme:"dark"}):vegaEmbed(t,JSON.parse(i))})},setSearchTheme=e=>{const t=document.querySelector("ninja-keys");t&&("dark"===e?t.classList.add("dark"):t.classList.remove("dark"))},transTheme=()=>{document.documentElement.classList.add("transition"),window.setTimeout(()=>{document.documentElement.classList.remove("transition")},500)},determineThemeSetting=()=>{let e=localStorage.getItem("theme");return"dark"!=e&&"light"!=e&&"system"!=e&&(e="system"),e},determineComputedTheme=()=>{let e=determineThemeSetting();if("system"==e){const e=window.matchMedia;return e&&e("(prefers-color-scheme: dark)").matches?"dark":"light"}return e},initTheme=()=>{let e=determineThemeSetting();setThemeSetting(e),document.addEventListener("DOMContentLoaded",function(){document.getElementById("light-toggle").addEventListener("click",function(){toggleThemeSetting()})}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:e})=>{applyTheme()})};document.addEventListener("DOMContentLoaded",function(){function e(e){e?(document.body.classList.add("dark-mode"),d.classList.remove("ti-sun-filled"),d.classList.add("ti-moon-filled"),m.style.display="none",o.style.display="inline"):(document.body.classList.remove("dark-mode"),d.classList.remove("ti-moon-filled"),d.classList.add("ti-sun-filled"),m.style.display="inline",o.style.display="none")}function t(){e(!document.body.classList.contains("dark-mode"))}const i=document.getElementById("light-toggle"),n=document.getElementById("theme-toggle"),d=document.getElementById("light-toggle-icon"),m=document.getElementById("theme-toggle-light"),o=document.getElementById("theme-toggle-dark");i.addEventListener("click",t),n.addEventListener("click",t),e(window.matchMedia("(prefers-color-scheme: dark)").matches)});