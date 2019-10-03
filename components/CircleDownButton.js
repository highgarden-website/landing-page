export default function CircleDownButton() {
  return (
    <a href="#section2">
      <button>
        <svg
          width="11"
          height="27"
          viewBox="0 0 11 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 1.78438V25.2219"
            stroke="#464E62"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.40625 21.3156L5.5 25.2219L1.59375 21.3156"
            stroke="#464E62"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <style jsx>{`
        a {
          opacity: 1;
        }
        button {
          height: 65px;
          width: 65px;
          border-radius: 50%;
          outline: none;
          cursor: pointer;
          transition: box-shadow 300ms ease;
          background-color: #fff;
        }
        button:hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }
      `}</style>
    </a>
  )
}
