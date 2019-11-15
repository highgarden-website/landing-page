import cn from "classnames"

export default function Panel({
  children,
  center,
  noBg,
  noShadow,
  highlight,
  responsive
}) {
  return (
    <div
      className={cn("panel", {
        highlight,
        "no-background": noBg,
        "no-shadow": noShadow,
        responsive
      })}
    >
      {children}
      <style jsx>{`
        .panel {
          background-color: var(--gray-3);
          border-radius: 10px;
          box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.2);
          user-select: none;
          padding: ${center ? "35px 0 20px 0;" : "20px;"};
          ${center ? "text-align: center;" : ""};
        }

        .panel .panel {
          padding: 30px 0;
        }

        .panel.no-background {
          border-radius: none;
          box-shadow: none;
          background-color: transparent;
        }

        .panel.no-shadow {
          box-shadow: none;
        }

        .highlight {
          position: relative;
          background-color: var(--green);
          color: var(--gray-4);
        }

        .highlight:after,
        .highlight:before {
          content: "";
          position: absolute;
          display: block;
          width: 90%;
          height: 20px;
          left: 50%;
          bottom: -10px;
          border-radius: 10px;
          background-color: #43948d;
          transform: translateX(-50%);
          z-index: -1;
        }

        .highlight:before {
          height: 30px;
          width: 80%;
          bottom: -20px;
          background-color: #44787c;
        }

        @media (max-width: 1200px) {
          .panel.responsive {
            display: flex;
            align-items: center;
          }

          .highlight:after,
          .highlight:before {
            left: 50%;
            top: -10px;
            transform: translateX(-50%);
            z-index: -1;
          }

          .highlight:before {
            top: -20px;
          }

          .panel :global(button:last-child) {
            max-width: 80%;
          }
        }
      `}</style>
    </div>
  )
}
