import cn from "classnames"

export default function Panel({
  children,
  center,
  noBg,
  noShadow,
  highlight,
  small,
  responsive
}) {
  return (
    <div
      className={cn("panel", {
        highlight: highlight,
        "no-background": noBg,
        "no-shadow": noShadow,
        responsive: responsive
      })}
    >
      {children}
      <style jsx>{`
        .panel {
          background-color: var(--gray-3);
          border-radius: 10px;
          padding: ${small ? "10px" : "20px"};
          box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.2);
          ${center ? "text-align: center;" : ""}
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

        @media (max-width: 1050px) {
          .panel.responsive {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  )
}
