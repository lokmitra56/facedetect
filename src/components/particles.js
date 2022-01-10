
// WE CAN CHOOSE PROPERTIES WE WANT FROM THIS WEBSITE
// https://particles.js.org/samples/index.html#connect

const Option =
        {
            background: {
              color: {
                value: "black",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  duration: 2,
                  opacity: 1,
                  size: 10,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00ffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.7,
                width: 0.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 8,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 500,
                },
                value: 40,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "star",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
        }  

export default Option;