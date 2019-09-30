export default function CircleDownButton() {
  return (
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
      <style jsx>{`
        button {
          height: 65px;
          width: 65px;
          border-radius: 50%;
          outline: none;
        }
      `}</style>
    </button>
  )
}
