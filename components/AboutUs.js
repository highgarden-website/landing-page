import Button from "./Button"
import Text from "./Text"
import Avatar from "./Avatar"
import Section from "./Section"
import Panel from "./Panel"

export default function AboutUs() {
  return (
    <div className="outerWrapper">
      <svg
        width="1135"
        height="797"
        viewBox="0 0 1135 797"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="decoration-line"
      >
        <path
          d="M-5 -8H1130V582.995C1130 610.395 1109.83 633.617 1082.7 637.453L-5 791.243V-8Z"
          stroke="#57627B"
          strokeWidth="10"
        />
      </svg>

      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="decoration-dots-large"
      >
        <path
          d="M6.66667 13.3333C10.3486 13.3333 13.3333 10.3486 13.3333 6.66667C13.3333 2.98478 10.3486 0 6.66667 0C2.98478 0 0 2.98478 0 6.66667C0 10.3486 2.98478 13.3333 6.66667 13.3333Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 13.3333C37.0152 13.3333 40 10.3486 40 6.66667C40 2.98478 37.0152 0 33.3333 0C29.6514 0 26.6667 2.98478 26.6667 6.66667C26.6667 10.3486 29.6514 13.3333 33.3333 13.3333Z"
          fill="#8991A3"
        />
        <path
          d="M66.6667 6.66667C66.6667 10.3486 63.6819 13.3333 60 13.3333C56.3181 13.3333 53.3333 10.3486 53.3333 6.66667C53.3333 2.98478 56.3181 0 60 0C63.6819 0 66.6667 2.98478 66.6667 6.66667Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 13.3333C90.3486 13.3333 93.3333 10.3486 93.3333 6.66667C93.3333 2.98478 90.3486 0 86.6667 0C82.9848 0 80 2.98478 80 6.66667C80 10.3486 82.9848 13.3333 86.6667 13.3333Z"
          fill="#8991A3"
        />
        <path
          d="M120 6.66667C120 10.3486 117.015 13.3333 113.333 13.3333C109.651 13.3333 106.667 10.3486 106.667 6.66667C106.667 2.98478 109.651 0 113.333 0C117.015 0 120 2.98478 120 6.66667Z"
          fill="#8991A3"
        />
        <path
          d="M140 13.3333C143.682 13.3333 146.667 10.3486 146.667 6.66667C146.667 2.98478 143.682 0 140 0C136.318 0 133.333 2.98478 133.333 6.66667C133.333 10.3486 136.318 13.3333 140 13.3333Z"
          fill="#8991A3"
        />
        <path
          d="M173.333 6.66667C173.333 10.3486 170.349 13.3333 166.667 13.3333C162.985 13.3333 160 10.3486 160 6.66667C160 2.98478 162.985 0 166.667 0C170.349 0 173.333 2.98478 173.333 6.66667Z"
          fill="#8991A3"
        />
        <path
          d="M193.333 13.3333C197.015 13.3333 200 10.3486 200 6.66667C200 2.98478 197.015 0 193.333 0C189.651 0 186.667 2.98478 186.667 6.66667C186.667 10.3486 189.651 13.3333 193.333 13.3333Z"
          fill="#8991A3"
        />
        <path
          d="M13.3333 33.3333C13.3333 37.0152 10.3486 40 6.66667 40C2.98478 40 0 37.0152 0 33.3333C0 29.6514 2.98478 26.6667 6.66667 26.6667C10.3486 26.6667 13.3333 29.6514 13.3333 33.3333Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 40C37.0152 40 40 37.0152 40 33.3333C40 29.6514 37.0152 26.6667 33.3333 26.6667C29.6514 26.6667 26.6667 29.6514 26.6667 33.3333C26.6667 37.0152 29.6514 40 33.3333 40Z"
          fill="#8991A3"
        />
        <path
          d="M66.6667 33.3333C66.6667 37.0152 63.6819 40 60 40C56.3181 40 53.3333 37.0152 53.3333 33.3333C53.3333 29.6514 56.3181 26.6667 60 26.6667C63.6819 26.6667 66.6667 29.6514 66.6667 33.3333Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 40C90.3486 40 93.3333 37.0152 93.3333 33.3333C93.3333 29.6514 90.3486 26.6667 86.6667 26.6667C82.9848 26.6667 80 29.6514 80 33.3333C80 37.0152 82.9848 40 86.6667 40Z"
          fill="#8991A3"
        />
        <path
          d="M120 33.3333C120 37.0152 117.015 40 113.333 40C109.651 40 106.667 37.0152 106.667 33.3333C106.667 29.6514 109.651 26.6667 113.333 26.6667C117.015 26.6667 120 29.6514 120 33.3333Z"
          fill="#8991A3"
        />
        <path
          d="M140 40C143.682 40 146.667 37.0152 146.667 33.3333C146.667 29.6514 143.682 26.6667 140 26.6667C136.318 26.6667 133.333 29.6514 133.333 33.3333C133.333 37.0152 136.318 40 140 40Z"
          fill="#8991A3"
        />
        <path
          d="M173.333 33.3333C173.333 37.0152 170.349 40 166.667 40C162.985 40 160 37.0152 160 33.3333C160 29.6514 162.985 26.6667 166.667 26.6667C170.349 26.6667 173.333 29.6514 173.333 33.3333Z"
          fill="#8991A3"
        />
        <path
          d="M193.333 40C197.015 40 200 37.0152 200 33.3333C200 29.6514 197.015 26.6667 193.333 26.6667C189.651 26.6667 186.667 29.6514 186.667 33.3333C186.667 37.0152 189.651 40 193.333 40Z"
          fill="#8991A3"
        />
        <path
          d="M6.66667 66.6667C10.3486 66.6667 13.3333 63.6819 13.3333 60C13.3333 56.3181 10.3486 53.3333 6.66667 53.3333C2.98478 53.3333 0 56.3181 0 60C0 63.6819 2.98478 66.6667 6.66667 66.6667Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 66.6667C37.0152 66.6667 40 63.6819 40 60C40 56.3181 37.0152 53.3333 33.3333 53.3333C29.6514 53.3333 26.6667 56.3181 26.6667 60C26.6667 63.6819 29.6514 66.6667 33.3333 66.6667Z"
          fill="#8991A3"
        />
        <path
          d="M66.6667 60C66.6667 63.6819 63.6819 66.6667 60 66.6667C56.3181 66.6667 53.3333 63.6819 53.3333 60C53.3333 56.3181 56.3181 53.3333 60 53.3333C63.6819 53.3333 66.6667 56.3181 66.6667 60Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 66.6667C90.3486 66.6667 93.3333 63.6819 93.3333 60C93.3333 56.3181 90.3486 53.3333 86.6667 53.3333C82.9848 53.3333 80 56.3181 80 60C80 63.6819 82.9848 66.6667 86.6667 66.6667Z"
          fill="#8991A3"
        />
        <path
          d="M120 60C120 63.6819 117.015 66.6667 113.333 66.6667C109.651 66.6667 106.667 63.6819 106.667 60C106.667 56.3181 109.651 53.3333 113.333 53.3333C117.015 53.3333 120 56.3181 120 60Z"
          fill="#8991A3"
        />
        <path
          d="M140 66.6667C143.682 66.6667 146.667 63.6819 146.667 60C146.667 56.3181 143.682 53.3333 140 53.3333C136.318 53.3333 133.333 56.3181 133.333 60C133.333 63.6819 136.318 66.6667 140 66.6667Z"
          fill="#8991A3"
        />
        <path
          d="M173.333 60C173.333 63.6819 170.349 66.6667 166.667 66.6667C162.985 66.6667 160 63.6819 160 60C160 56.3181 162.985 53.3333 166.667 53.3333C170.349 53.3333 173.333 56.3181 173.333 60Z"
          fill="#8991A3"
        />
        <path
          d="M193.333 66.6667C197.015 66.6667 200 63.6819 200 60C200 56.3181 197.015 53.3333 193.333 53.3333C189.651 53.3333 186.667 56.3181 186.667 60C186.667 63.6819 189.651 66.6667 193.333 66.6667Z"
          fill="#8991A3"
        />
        <path
          d="M13.3333 86.6667C13.3333 90.3486 10.3486 93.3333 6.66667 93.3333C2.98478 93.3333 0 90.3486 0 86.6667C0 82.9848 2.98478 80 6.66667 80C10.3486 80 13.3333 82.9848 13.3333 86.6667Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 93.3333C37.0152 93.3333 40 90.3486 40 86.6667C40 82.9848 37.0152 80 33.3333 80C29.6514 80 26.6667 82.9848 26.6667 86.6667C26.6667 90.3486 29.6514 93.3333 33.3333 93.3333Z"
          fill="#8991A3"
        />
        <path
          d="M66.6667 86.6667C66.6667 90.3486 63.6819 93.3333 60 93.3333C56.3181 93.3333 53.3333 90.3486 53.3333 86.6667C53.3333 82.9848 56.3181 80 60 80C63.6819 80 66.6667 82.9848 66.6667 86.6667Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 93.3333C90.3486 93.3333 93.3333 90.3486 93.3333 86.6667C93.3333 82.9848 90.3486 80 86.6667 80C82.9848 80 80 82.9848 80 86.6667C80 90.3486 82.9848 93.3333 86.6667 93.3333Z"
          fill="#8991A3"
        />
        <path
          d="M120 86.6667C120 90.3486 117.015 93.3333 113.333 93.3333C109.651 93.3333 106.667 90.3486 106.667 86.6667C106.667 82.9848 109.651 80 113.333 80C117.015 80 120 82.9848 120 86.6667Z"
          fill="#8991A3"
        />
        <path
          d="M140 93.3333C143.682 93.3333 146.667 90.3486 146.667 86.6667C146.667 82.9848 143.682 80 140 80C136.318 80 133.333 82.9848 133.333 86.6667C133.333 90.3486 136.318 93.3333 140 93.3333Z"
          fill="#8991A3"
        />
        <path
          d="M173.333 86.6667C173.333 90.3486 170.349 93.3333 166.667 93.3333C162.985 93.3333 160 90.3486 160 86.6667C160 82.9848 162.985 80 166.667 80C170.349 80 173.333 82.9848 173.333 86.6667Z"
          fill="#8991A3"
        />
        <path
          d="M193.333 93.3333C197.015 93.3333 200 90.3486 200 86.6667C200 82.9848 197.015 80 193.333 80C189.651 80 186.667 82.9848 186.667 86.6667C186.667 90.3486 189.651 93.3333 193.333 93.3333Z"
          fill="#8991A3"
        />
        <path
          d="M6.66667 120C10.3486 120 13.3333 117.015 13.3333 113.333C13.3333 109.651 10.3486 106.667 6.66667 106.667C2.98478 106.667 0 109.651 0 113.333C0 117.015 2.98478 120 6.66667 120Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 120C37.0152 120 40 117.015 40 113.333C40 109.651 37.0152 106.667 33.3333 106.667C29.6514 106.667 26.6667 109.651 26.6667 113.333C26.6667 117.015 29.6514 120 33.3333 120Z"
          fill="#8991A3"
        />
        <path
          d="M66.6667 113.333C66.6667 117.015 63.6819 120 60 120C56.3181 120 53.3333 117.015 53.3333 113.333C53.3333 109.651 56.3181 106.667 60 106.667C63.6819 106.667 66.6667 109.651 66.6667 113.333Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 120C90.3486 120 93.3333 117.015 93.3333 113.333C93.3333 109.651 90.3486 106.667 86.6667 106.667C82.9848 106.667 80 109.651 80 113.333C80 117.015 82.9848 120 86.6667 120Z"
          fill="#8991A3"
        />
        <path
          d="M120 113.333C120 117.015 117.015 120 113.333 120C109.651 120 106.667 117.015 106.667 113.333C106.667 109.651 109.651 106.667 113.333 106.667C117.015 106.667 120 109.651 120 113.333Z"
          fill="#8991A3"
        />
        <path
          d="M140 120C143.682 120 146.667 117.015 146.667 113.333C146.667 109.651 143.682 106.667 140 106.667C136.318 106.667 133.333 109.651 133.333 113.333C133.333 117.015 136.318 120 140 120Z"
          fill="#8991A3"
        />
        <path
          d="M173.333 113.333C173.333 117.015 170.349 120 166.667 120C162.985 120 160 117.015 160 113.333C160 109.651 162.985 106.667 166.667 106.667C170.349 106.667 173.333 109.651 173.333 113.333Z"
          fill="#8991A3"
        />
        <path
          d="M193.333 120C197.015 120 200 117.015 200 113.333C200 109.651 197.015 106.667 193.333 106.667C189.651 106.667 186.667 109.651 186.667 113.333C186.667 117.015 189.651 120 193.333 120Z"
          fill="#8991A3"
        />
        <path
          d="M13.3333 140C13.3333 143.682 10.3486 146.667 6.66667 146.667C2.98478 146.667 0 143.682 0 140C0 136.318 2.98478 133.333 6.66667 133.333C10.3486 133.333 13.3333 136.318 13.3333 140Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 146.667C37.0152 146.667 40 143.682 40 140C40 136.318 37.0152 133.333 33.3333 133.333C29.6514 133.333 26.6667 136.318 26.6667 140C26.6667 143.682 29.6514 146.667 33.3333 146.667Z"
          fill="#8991A3"
        />
        <path
          d="M66.6667 140C66.6667 143.682 63.6819 146.667 60 146.667C56.3181 146.667 53.3333 143.682 53.3333 140C53.3333 136.318 56.3181 133.333 60 133.333C63.6819 133.333 66.6667 136.318 66.6667 140Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 146.667C90.3486 146.667 93.3333 143.682 93.3333 140C93.3333 136.318 90.3486 133.333 86.6667 133.333C82.9848 133.333 80 136.318 80 140C80 143.682 82.9848 146.667 86.6667 146.667Z"
          fill="#8991A3"
        />
        <path
          d="M120 140C120 143.682 117.015 146.667 113.333 146.667C109.651 146.667 106.667 143.682 106.667 140C106.667 136.318 109.651 133.333 113.333 133.333C117.015 133.333 120 136.318 120 140Z"
          fill="#8991A3"
        />
        <path
          d="M140 146.667C143.682 146.667 146.667 143.682 146.667 140C146.667 136.318 143.682 133.333 140 133.333C136.318 133.333 133.333 136.318 133.333 140C133.333 143.682 136.318 146.667 140 146.667Z"
          fill="#8991A3"
        />
        <path
          d="M173.333 140C173.333 143.682 170.349 146.667 166.667 146.667C162.985 146.667 160 143.682 160 140C160 136.318 162.985 133.333 166.667 133.333C170.349 133.333 173.333 136.318 173.333 140Z"
          fill="#8991A3"
        />
        <path
          d="M193.333 146.667C197.015 146.667 200 143.682 200 140C200 136.318 197.015 133.333 193.333 133.333C189.651 133.333 186.667 136.318 186.667 140C186.667 143.682 189.651 146.667 193.333 146.667Z"
          fill="#8991A3"
        />
        <path
          d="M6.66667 173.333C10.3486 173.333 13.3333 170.349 13.3333 166.667C13.3333 162.985 10.3486 160 6.66667 160C2.98478 160 0 162.985 0 166.667C0 170.349 2.98478 173.333 6.66667 173.333Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 173.333C37.0152 173.333 40 170.349 40 166.667C40 162.985 37.0152 160 33.3333 160C29.6514 160 26.6667 162.985 26.6667 166.667C26.6667 170.349 29.6514 173.333 33.3333 173.333Z"
          fill="#8991A3"
        />
        <path
          d="M66.6667 166.667C66.6667 170.349 63.6819 173.333 60 173.333C56.3181 173.333 53.3333 170.349 53.3333 166.667C53.3333 162.985 56.3181 160 60 160C63.6819 160 66.6667 162.985 66.6667 166.667Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 173.333C90.3486 173.333 93.3333 170.349 93.3333 166.667C93.3333 162.985 90.3486 160 86.6667 160C82.9848 160 80 162.985 80 166.667C80 170.349 82.9848 173.333 86.6667 173.333Z"
          fill="#8991A3"
        />
        <path
          d="M120 166.667C120 170.349 117.015 173.333 113.333 173.333C109.651 173.333 106.667 170.349 106.667 166.667C106.667 162.985 109.651 160 113.333 160C117.015 160 120 162.985 120 166.667Z"
          fill="#8991A3"
        />
        <path
          d="M140 173.333C143.682 173.333 146.667 170.349 146.667 166.667C146.667 162.985 143.682 160 140 160C136.318 160 133.333 162.985 133.333 166.667C133.333 170.349 136.318 173.333 140 173.333Z"
          fill="#8991A3"
        />
        <path
          d="M173.333 166.667C173.333 170.349 170.349 173.333 166.667 173.333C162.985 173.333 160 170.349 160 166.667C160 162.985 162.985 160 166.667 160C170.349 160 173.333 162.985 173.333 166.667Z"
          fill="#8991A3"
        />
        <path
          d="M193.333 173.333C197.015 173.333 200 170.349 200 166.667C200 162.985 197.015 160 193.333 160C189.651 160 186.667 162.985 186.667 166.667C186.667 170.349 189.651 173.333 193.333 173.333Z"
          fill="#8991A3"
        />
        <path
          d="M13.3333 193.333C13.3333 197.015 10.3486 200 6.66667 200C2.98478 200 0 197.015 0 193.333C0 189.651 2.98478 186.667 6.66667 186.667C10.3486 186.667 13.3333 189.651 13.3333 193.333Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 200C37.0152 200 40 197.015 40 193.333C40 189.651 37.0152 186.667 33.3333 186.667C29.6514 186.667 26.6667 189.651 26.6667 193.333C26.6667 197.015 29.6514 200 33.3333 200Z"
          fill="#8991A3"
        />
        <path
          d="M66.6667 193.333C66.6667 197.015 63.6819 200 60 200C56.3181 200 53.3333 197.015 53.3333 193.333C53.3333 189.651 56.3181 186.667 60 186.667C63.6819 186.667 66.6667 189.651 66.6667 193.333Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 200C90.3486 200 93.3333 197.015 93.3333 193.333C93.3333 189.651 90.3486 186.667 86.6667 186.667C82.9848 186.667 80 189.651 80 193.333C80 197.015 82.9848 200 86.6667 200Z"
          fill="#8991A3"
        />
        <path
          d="M120 193.333C120 197.015 117.015 200 113.333 200C109.651 200 106.667 197.015 106.667 193.333C106.667 189.651 109.651 186.667 113.333 186.667C117.015 186.667 120 189.651 120 193.333Z"
          fill="#8991A3"
        />
        <path
          d="M140 200C143.682 200 146.667 197.015 146.667 193.333C146.667 189.651 143.682 186.667 140 186.667C136.318 186.667 133.333 189.651 133.333 193.333C133.333 197.015 136.318 200 140 200Z"
          fill="#8991A3"
        />
        <path
          d="M173.333 193.333C173.333 197.015 170.349 200 166.667 200C162.985 200 160 197.015 160 193.333C160 189.651 162.985 186.667 166.667 186.667C170.349 186.667 173.333 189.651 173.333 193.333Z"
          fill="#8991A3"
        />
        <path
          d="M193.333 200C197.015 200 200 197.015 200 193.333C200 189.651 197.015 186.667 193.333 186.667C189.651 186.667 186.667 189.651 186.667 193.333C186.667 197.015 189.651 200 193.333 200Z"
          fill="#8991A3"
        />
      </svg>

      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        className="decoration-dots-small"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33333 6.66667C5.17428 6.66667 6.66667 5.17428 6.66667 3.33333C6.66667 1.49239 5.17428 0 3.33333 0C1.49239 0 0 1.49239 0 3.33333C0 5.17428 1.49239 6.66667 3.33333 6.66667Z"
          fill="#8991A3"
        />
        <path
          d="M16.6667 6.66667C18.5076 6.66667 20 5.17428 20 3.33333C20 1.49239 18.5076 0 16.6667 0C14.8257 0 13.3333 1.49239 13.3333 3.33333C13.3333 5.17428 14.8257 6.66667 16.6667 6.66667Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 3.33333C33.3333 5.17428 31.8409 6.66667 30 6.66667C28.1591 6.66667 26.6667 5.17428 26.6667 3.33333C26.6667 1.49239 28.1591 0 30 0C31.8409 0 33.3333 1.49239 33.3333 3.33333Z"
          fill="#8991A3"
        />
        <path
          d="M43.3333 6.66667C45.1743 6.66667 46.6667 5.17428 46.6667 3.33333C46.6667 1.49239 45.1743 0 43.3333 0C41.4924 0 40 1.49239 40 3.33333C40 5.17428 41.4924 6.66667 43.3333 6.66667Z"
          fill="#8991A3"
        />
        <path
          d="M60 3.33333C60 5.17428 58.5076 6.66667 56.6667 6.66667C54.8257 6.66667 53.3333 5.17428 53.3333 3.33333C53.3333 1.49239 54.8257 0 56.6667 0C58.5076 0 60 1.49239 60 3.33333Z"
          fill="#8991A3"
        />
        <path
          d="M70 6.66667C71.8409 6.66667 73.3333 5.17428 73.3333 3.33333C73.3333 1.49239 71.8409 0 70 0C68.1591 0 66.6667 1.49239 66.6667 3.33333C66.6667 5.17428 68.1591 6.66667 70 6.66667Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 3.33333C86.6667 5.17428 85.1743 6.66667 83.3333 6.66667C81.4924 6.66667 80 5.17428 80 3.33333C80 1.49239 81.4924 0 83.3333 0C85.1743 0 86.6667 1.49239 86.6667 3.33333Z"
          fill="#8991A3"
        />
        <path
          d="M96.6667 6.66667C98.5076 6.66667 100 5.17428 100 3.33333C100 1.49239 98.5076 0 96.6667 0C94.8257 0 93.3333 1.49239 93.3333 3.33333C93.3333 5.17428 94.8257 6.66667 96.6667 6.66667Z"
          fill="#8991A3"
        />
        <path
          d="M6.66667 16.6667C6.66667 18.5076 5.17428 20 3.33333 20C1.49239 20 0 18.5076 0 16.6667C0 14.8257 1.49239 13.3333 3.33333 13.3333C5.17428 13.3333 6.66667 14.8257 6.66667 16.6667Z"
          fill="#8991A3"
        />
        <path
          d="M16.6667 20C18.5076 20 20 18.5076 20 16.6667C20 14.8257 18.5076 13.3333 16.6667 13.3333C14.8257 13.3333 13.3333 14.8257 13.3333 16.6667C13.3333 18.5076 14.8257 20 16.6667 20Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 16.6667C33.3333 18.5076 31.8409 20 30 20C28.1591 20 26.6667 18.5076 26.6667 16.6667C26.6667 14.8257 28.1591 13.3333 30 13.3333C31.8409 13.3333 33.3333 14.8257 33.3333 16.6667Z"
          fill="#8991A3"
        />
        <path
          d="M43.3333 20C45.1743 20 46.6667 18.5076 46.6667 16.6667C46.6667 14.8257 45.1743 13.3333 43.3333 13.3333C41.4924 13.3333 40 14.8257 40 16.6667C40 18.5076 41.4924 20 43.3333 20Z"
          fill="#8991A3"
        />
        <path
          d="M60 16.6667C60 18.5076 58.5076 20 56.6667 20C54.8257 20 53.3333 18.5076 53.3333 16.6667C53.3333 14.8257 54.8257 13.3333 56.6667 13.3333C58.5076 13.3333 60 14.8257 60 16.6667Z"
          fill="#8991A3"
        />
        <path
          d="M70 20C71.8409 20 73.3333 18.5076 73.3333 16.6667C73.3333 14.8257 71.8409 13.3333 70 13.3333C68.1591 13.3333 66.6667 14.8257 66.6667 16.6667C66.6667 18.5076 68.1591 20 70 20Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 16.6667C86.6667 18.5076 85.1743 20 83.3333 20C81.4924 20 80 18.5076 80 16.6667C80 14.8257 81.4924 13.3333 83.3333 13.3333C85.1743 13.3333 86.6667 14.8257 86.6667 16.6667Z"
          fill="#8991A3"
        />
        <path
          d="M96.6667 20C98.5076 20 100 18.5076 100 16.6667C100 14.8257 98.5076 13.3333 96.6667 13.3333C94.8257 13.3333 93.3333 14.8257 93.3333 16.6667C93.3333 18.5076 94.8257 20 96.6667 20Z"
          fill="#8991A3"
        />
        <path
          d="M3.33333 33.3333C5.17428 33.3333 6.66667 31.8409 6.66667 30C6.66667 28.1591 5.17428 26.6667 3.33333 26.6667C1.49239 26.6667 0 28.1591 0 30C0 31.8409 1.49239 33.3333 3.33333 33.3333Z"
          fill="#8991A3"
        />
        <path
          d="M16.6667 33.3333C18.5076 33.3333 20 31.8409 20 30C20 28.1591 18.5076 26.6667 16.6667 26.6667C14.8257 26.6667 13.3333 28.1591 13.3333 30C13.3333 31.8409 14.8257 33.3333 16.6667 33.3333Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 30C33.3333 31.8409 31.8409 33.3333 30 33.3333C28.1591 33.3333 26.6667 31.8409 26.6667 30C26.6667 28.1591 28.1591 26.6667 30 26.6667C31.8409 26.6667 33.3333 28.1591 33.3333 30Z"
          fill="#8991A3"
        />
        <path
          d="M43.3333 33.3333C45.1743 33.3333 46.6667 31.8409 46.6667 30C46.6667 28.1591 45.1743 26.6667 43.3333 26.6667C41.4924 26.6667 40 28.1591 40 30C40 31.8409 41.4924 33.3333 43.3333 33.3333Z"
          fill="#8991A3"
        />
        <path
          d="M60 30C60 31.8409 58.5076 33.3333 56.6667 33.3333C54.8257 33.3333 53.3333 31.8409 53.3333 30C53.3333 28.1591 54.8257 26.6667 56.6667 26.6667C58.5076 26.6667 60 28.1591 60 30Z"
          fill="#8991A3"
        />
        <path
          d="M70 33.3333C71.8409 33.3333 73.3333 31.8409 73.3333 30C73.3333 28.1591 71.8409 26.6667 70 26.6667C68.1591 26.6667 66.6667 28.1591 66.6667 30C66.6667 31.8409 68.1591 33.3333 70 33.3333Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 30C86.6667 31.8409 85.1743 33.3333 83.3333 33.3333C81.4924 33.3333 80 31.8409 80 30C80 28.1591 81.4924 26.6667 83.3333 26.6667C85.1743 26.6667 86.6667 28.1591 86.6667 30Z"
          fill="#8991A3"
        />
        <path
          d="M96.6667 33.3333C98.5076 33.3333 100 31.8409 100 30C100 28.1591 98.5076 26.6667 96.6667 26.6667C94.8257 26.6667 93.3333 28.1591 93.3333 30C93.3333 31.8409 94.8257 33.3333 96.6667 33.3333Z"
          fill="#8991A3"
        />
        <path
          d="M6.66667 43.3333C6.66667 45.1743 5.17428 46.6667 3.33333 46.6667C1.49239 46.6667 0 45.1743 0 43.3333C0 41.4924 1.49239 40 3.33333 40C5.17428 40 6.66667 41.4924 6.66667 43.3333Z"
          fill="#8991A3"
        />
        <path
          d="M16.6667 46.6667C18.5076 46.6667 20 45.1743 20 43.3333C20 41.4924 18.5076 40 16.6667 40C14.8257 40 13.3333 41.4924 13.3333 43.3333C13.3333 45.1743 14.8257 46.6667 16.6667 46.6667Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 43.3333C33.3333 45.1743 31.8409 46.6667 30 46.6667C28.1591 46.6667 26.6667 45.1743 26.6667 43.3333C26.6667 41.4924 28.1591 40 30 40C31.8409 40 33.3333 41.4924 33.3333 43.3333Z"
          fill="#8991A3"
        />
        <path
          d="M43.3333 46.6667C45.1743 46.6667 46.6667 45.1743 46.6667 43.3333C46.6667 41.4924 45.1743 40 43.3333 40C41.4924 40 40 41.4924 40 43.3333C40 45.1743 41.4924 46.6667 43.3333 46.6667Z"
          fill="#8991A3"
        />
        <path
          d="M60 43.3333C60 45.1743 58.5076 46.6667 56.6667 46.6667C54.8257 46.6667 53.3333 45.1743 53.3333 43.3333C53.3333 41.4924 54.8257 40 56.6667 40C58.5076 40 60 41.4924 60 43.3333Z"
          fill="#8991A3"
        />
        <path
          d="M70 46.6667C71.8409 46.6667 73.3333 45.1743 73.3333 43.3333C73.3333 41.4924 71.8409 40 70 40C68.1591 40 66.6667 41.4924 66.6667 43.3333C66.6667 45.1743 68.1591 46.6667 70 46.6667Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 43.3333C86.6667 45.1743 85.1743 46.6667 83.3333 46.6667C81.4924 46.6667 80 45.1743 80 43.3333C80 41.4924 81.4924 40 83.3333 40C85.1743 40 86.6667 41.4924 86.6667 43.3333Z"
          fill="#8991A3"
        />
        <path
          d="M96.6667 46.6667C98.5076 46.6667 100 45.1743 100 43.3333C100 41.4924 98.5076 40 96.6667 40C94.8257 40 93.3333 41.4924 93.3333 43.3333C93.3333 45.1743 94.8257 46.6667 96.6667 46.6667Z"
          fill="#8991A3"
        />
        <path
          d="M3.33333 60C5.17428 60 6.66667 58.5076 6.66667 56.6667C6.66667 54.8257 5.17428 53.3333 3.33333 53.3333C1.49239 53.3333 0 54.8257 0 56.6667C0 58.5076 1.49239 60 3.33333 60Z"
          fill="#8991A3"
        />
        <path
          d="M16.6667 60C18.5076 60 20 58.5076 20 56.6667C20 54.8257 18.5076 53.3333 16.6667 53.3333C14.8257 53.3333 13.3333 54.8257 13.3333 56.6667C13.3333 58.5076 14.8257 60 16.6667 60Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 56.6667C33.3333 58.5076 31.8409 60 30 60C28.1591 60 26.6667 58.5076 26.6667 56.6667C26.6667 54.8257 28.1591 53.3333 30 53.3333C31.8409 53.3333 33.3333 54.8257 33.3333 56.6667Z"
          fill="#8991A3"
        />
        <path
          d="M43.3333 60C45.1743 60 46.6667 58.5076 46.6667 56.6667C46.6667 54.8257 45.1743 53.3333 43.3333 53.3333C41.4924 53.3333 40 54.8257 40 56.6667C40 58.5076 41.4924 60 43.3333 60Z"
          fill="#8991A3"
        />
        <path
          d="M60 56.6667C60 58.5076 58.5076 60 56.6667 60C54.8257 60 53.3333 58.5076 53.3333 56.6667C53.3333 54.8257 54.8257 53.3333 56.6667 53.3333C58.5076 53.3333 60 54.8257 60 56.6667Z"
          fill="#8991A3"
        />
        <path
          d="M70 60C71.8409 60 73.3333 58.5076 73.3333 56.6667C73.3333 54.8257 71.8409 53.3333 70 53.3333C68.1591 53.3333 66.6667 54.8257 66.6667 56.6667C66.6667 58.5076 68.1591 60 70 60Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 56.6667C86.6667 58.5076 85.1743 60 83.3333 60C81.4924 60 80 58.5076 80 56.6667C80 54.8257 81.4924 53.3333 83.3333 53.3333C85.1743 53.3333 86.6667 54.8257 86.6667 56.6667Z"
          fill="#8991A3"
        />
        <path
          d="M96.6667 60C98.5076 60 100 58.5076 100 56.6667C100 54.8257 98.5076 53.3333 96.6667 53.3333C94.8257 53.3333 93.3333 54.8257 93.3333 56.6667C93.3333 58.5076 94.8257 60 96.6667 60Z"
          fill="#8991A3"
        />
        <path
          d="M6.66667 70C6.66667 71.8409 5.17428 73.3333 3.33333 73.3333C1.49239 73.3333 0 71.8409 0 70C0 68.1591 1.49239 66.6667 3.33333 66.6667C5.17428 66.6667 6.66667 68.1591 6.66667 70Z"
          fill="#8991A3"
        />
        <path
          d="M16.6667 73.3333C18.5076 73.3333 20 71.8409 20 70C20 68.1591 18.5076 66.6667 16.6667 66.6667C14.8257 66.6667 13.3333 68.1591 13.3333 70C13.3333 71.8409 14.8257 73.3333 16.6667 73.3333Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 70C33.3333 71.8409 31.8409 73.3333 30 73.3333C28.1591 73.3333 26.6667 71.8409 26.6667 70C26.6667 68.1591 28.1591 66.6667 30 66.6667C31.8409 66.6667 33.3333 68.1591 33.3333 70Z"
          fill="#8991A3"
        />
        <path
          d="M43.3333 73.3333C45.1743 73.3333 46.6667 71.8409 46.6667 70C46.6667 68.1591 45.1743 66.6667 43.3333 66.6667C41.4924 66.6667 40 68.1591 40 70C40 71.8409 41.4924 73.3333 43.3333 73.3333Z"
          fill="#8991A3"
        />
        <path
          d="M60 70C60 71.8409 58.5076 73.3333 56.6667 73.3333C54.8257 73.3333 53.3333 71.8409 53.3333 70C53.3333 68.1591 54.8257 66.6667 56.6667 66.6667C58.5076 66.6667 60 68.1591 60 70Z"
          fill="#8991A3"
        />
        <path
          d="M70 73.3333C71.8409 73.3333 73.3333 71.8409 73.3333 70C73.3333 68.1591 71.8409 66.6667 70 66.6667C68.1591 66.6667 66.6667 68.1591 66.6667 70C66.6667 71.8409 68.1591 73.3333 70 73.3333Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 70C86.6667 71.8409 85.1743 73.3333 83.3333 73.3333C81.4924 73.3333 80 71.8409 80 70C80 68.1591 81.4924 66.6667 83.3333 66.6667C85.1743 66.6667 86.6667 68.1591 86.6667 70Z"
          fill="#8991A3"
        />
        <path
          d="M96.6667 73.3333C98.5076 73.3333 100 71.8409 100 70C100 68.1591 98.5076 66.6667 96.6667 66.6667C94.8257 66.6667 93.3333 68.1591 93.3333 70C93.3333 71.8409 94.8257 73.3333 96.6667 73.3333Z"
          fill="#8991A3"
        />
        <path
          d="M3.33333 86.6667C5.17428 86.6667 6.66667 85.1743 6.66667 83.3333C6.66667 81.4924 5.17428 80 3.33333 80C1.49239 80 0 81.4924 0 83.3333C0 85.1743 1.49239 86.6667 3.33333 86.6667Z"
          fill="#8991A3"
        />
        <path
          d="M16.6667 86.6667C18.5076 86.6667 20 85.1743 20 83.3333C20 81.4924 18.5076 80 16.6667 80C14.8257 80 13.3333 81.4924 13.3333 83.3333C13.3333 85.1743 14.8257 86.6667 16.6667 86.6667Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 83.3333C33.3333 85.1743 31.8409 86.6667 30 86.6667C28.1591 86.6667 26.6667 85.1743 26.6667 83.3333C26.6667 81.4924 28.1591 80 30 80C31.8409 80 33.3333 81.4924 33.3333 83.3333Z"
          fill="#8991A3"
        />
        <path
          d="M43.3333 86.6667C45.1743 86.6667 46.6667 85.1743 46.6667 83.3333C46.6667 81.4924 45.1743 80 43.3333 80C41.4924 80 40 81.4924 40 83.3333C40 85.1743 41.4924 86.6667 43.3333 86.6667Z"
          fill="#8991A3"
        />
        <path
          d="M60 83.3333C60 85.1743 58.5076 86.6667 56.6667 86.6667C54.8257 86.6667 53.3333 85.1743 53.3333 83.3333C53.3333 81.4924 54.8257 80 56.6667 80C58.5076 80 60 81.4924 60 83.3333Z"
          fill="#8991A3"
        />
        <path
          d="M70 86.6667C71.8409 86.6667 73.3333 85.1743 73.3333 83.3333C73.3333 81.4924 71.8409 80 70 80C68.1591 80 66.6667 81.4924 66.6667 83.3333C66.6667 85.1743 68.1591 86.6667 70 86.6667Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 83.3333C86.6667 85.1743 85.1743 86.6667 83.3333 86.6667C81.4924 86.6667 80 85.1743 80 83.3333C80 81.4924 81.4924 80 83.3333 80C85.1743 80 86.6667 81.4924 86.6667 83.3333Z"
          fill="#8991A3"
        />
        <path
          d="M96.6667 86.6667C98.5076 86.6667 100 85.1743 100 83.3333C100 81.4924 98.5076 80 96.6667 80C94.8257 80 93.3333 81.4924 93.3333 83.3333C93.3333 85.1743 94.8257 86.6667 96.6667 86.6667Z"
          fill="#8991A3"
        />
        <path
          d="M6.66667 96.6667C6.66667 98.5076 5.17428 100 3.33333 100C1.49239 100 0 98.5076 0 96.6667C0 94.8257 1.49239 93.3333 3.33333 93.3333C5.17428 93.3333 6.66667 94.8257 6.66667 96.6667Z"
          fill="#8991A3"
        />
        <path
          d="M16.6667 100C18.5076 100 20 98.5076 20 96.6667C20 94.8257 18.5076 93.3333 16.6667 93.3333C14.8257 93.3333 13.3333 94.8257 13.3333 96.6667C13.3333 98.5076 14.8257 100 16.6667 100Z"
          fill="#8991A3"
        />
        <path
          d="M33.3333 96.6667C33.3333 98.5076 31.8409 100 30 100C28.1591 100 26.6667 98.5076 26.6667 96.6667C26.6667 94.8257 28.1591 93.3333 30 93.3333C31.8409 93.3333 33.3333 94.8257 33.3333 96.6667Z"
          fill="#8991A3"
        />
        <path
          d="M43.3333 100C45.1743 100 46.6667 98.5076 46.6667 96.6667C46.6667 94.8257 45.1743 93.3333 43.3333 93.3333C41.4924 93.3333 40 94.8257 40 96.6667C40 98.5076 41.4924 100 43.3333 100Z"
          fill="#8991A3"
        />
        <path
          d="M60 96.6667C60 98.5076 58.5076 100 56.6667 100C54.8257 100 53.3333 98.5076 53.3333 96.6667C53.3333 94.8257 54.8257 93.3333 56.6667 93.3333C58.5076 93.3333 60 94.8257 60 96.6667Z"
          fill="#8991A3"
        />
        <path
          d="M70 100C71.8409 100 73.3333 98.5076 73.3333 96.6667C73.3333 94.8257 71.8409 93.3333 70 93.3333C68.1591 93.3333 66.6667 94.8257 66.6667 96.6667C66.6667 98.5076 68.1591 100 70 100Z"
          fill="#8991A3"
        />
        <path
          d="M86.6667 96.6667C86.6667 98.5076 85.1743 100 83.3333 100C81.4924 100 80 98.5076 80 96.6667C80 94.8257 81.4924 93.3333 83.3333 93.3333C85.1743 93.3333 86.6667 94.8257 86.6667 96.6667Z"
          fill="#8991A3"
        />
        <path
          d="M96.6667 100C98.5076 100 100 98.5076 100 96.6667C100 94.8257 98.5076 93.3333 96.6667 93.3333C94.8257 93.3333 93.3333 94.8257 93.3333 96.6667C93.3333 98.5076 94.8257 100 96.6667 100Z"
          fill="#8991A3"
        />
      </svg>

      <svg
        width="116"
        height="134"
        viewBox="0 0 116 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="decoration-arrows"
      >
        <path
          d="M102.353 59.2021V38.4292"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M98.0884 41.8913L102.353 38.4292L106.618 41.8913"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58 59.2021V38.4292"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.7354 41.8913L58.0001 38.4292L62.2648 41.8913"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58 23.1957V2.42285"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.7354 5.88499L58.0001 2.42285L62.2648 5.88499"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.647 59.2021V38.4292"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38232 41.8913L13.647 38.4292L17.9117 41.8913"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M102.353 95.2084V74.4353"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M98.0884 77.8975L102.353 74.4353L106.618 77.8975"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58 95.2084V74.4353"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.7354 77.8975L58.0001 74.4353L62.2648 77.8975"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.647 95.2082V74.4353"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38232 77.8974L13.647 74.4353L17.9117 77.8974"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.647 131.215V110.442"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38232 113.904L13.647 110.442L17.9117 113.904"
          stroke="#8991A3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <Section id="quienes-somos" columns="2">
        <aside className="left">
          <div className="line"></div>
          <Text h2>Quienes Somos</Text>
          <Text p style={{ maxWidth: "40ch", marginBottom: "40px" }}>
            Somos una administradora dedicada a gestionar patrimonios de
            terceros, en el mediano y largo plazo, buscando minimizar riesgos y
            maximizar beneficios, protegiendo a nuestros clientes y realizando
            un trabajo profesional.
          </Text>
          <Button>Contactanos</Button>
        </aside>

        <aside className="right">
          <Avatar
            name="Matias Ezequiel Materia"
            position="Cofounder"
            link="https://linkedin"
          ></Avatar>
          <Avatar
            name="Fernando Javier Toledano"
            position="Cofounder"
            link="https://linkedin"
          ></Avatar>
        </aside>
      </Section>
      <style jsx>{`
        .outerWrapper {
          position: relative;
        }

        .decoration-arrows,
        .decoration-dots-large,
        .decoration-dots-small,
        .decoration-line {
          position: absolute;
        }

        .decoration-dots-large {
          top: 33%;
          right: 25%;
        }

        .decoration-dots-small {
          top: 70%;
          right: 28%;
        }

        .decoration-arrows {
          top: 85%;
          right: 10%;
        }

        .decoration-line {
          left: 0;
        }

        .line {
          position: absolute;
          width: 100px;
          height: 5px;
          left: 0;
          top: 0;
          background: #ffffff;
        }

        aside {
          height: 650px;
        }

        .left {
          position: relative;
        }

        .right {
          display: flex;
        }

        .right :global(figure:first-child) {
          transform: translate(-10%, -10%);
        }

        .right :global(figure:not(:first-child)) {
          transform: translate(-10%, 23%);
        }
      `}</style>
    </div>
  )
}
