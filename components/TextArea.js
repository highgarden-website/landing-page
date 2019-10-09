export default function TextArea() {
  return (
    <div className="wrapper">
      <textarea></textarea>
      <style jsx>{`
        .textarea {
          background: var(--gray-5);
          border-radius: 5px;
          resize: none;
          box-sizing: border-box;
          border-radius: 5px;
          border: none;
          font-family: "Gilroy";

      `}</style>
    </div>
  )
}
