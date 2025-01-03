              // Snow Effect Script
              console.log("Snow Effect Script Loaded!");

              // Add snow container
              const snowContainer = document.createElement("div");
              snowContainer.id = "snow-container";
              snowContainer.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;";
              document.body.appendChild(snowContainer);

              // Function to create a snowflake
              function createSnowflake() {
                  const snowflake = document.createElement("div");
                  snowflake.className = "snowflake";
                  snowflake.style.cssText = "position:absolute;top:-50px;left:" + Math.random() * window.innerWidth + "px;color:white;font-size:" + (Math.random() * 10 + 10) + "px;opacity:" + Math.random() + ";";
                  snowflake.textContent = "â„";
                  snowflake.animate([{ transform: "translateY(" + window.innerHeight + "px)" }], { duration: Math.random() * 3000 + 2000, iterations: 1 });
                  setTimeout(() => snowflake.remove(), 5000);
                  snowContainer.appendChild(snowflake);
              }

              // Generate snowflakes every 200ms
              setInterval(createSnowflake, 200);
          
