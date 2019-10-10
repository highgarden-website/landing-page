import Input from "./Input"
import Button from "./Button"

export default function SegmentedInput() {
  return (
    <div className="wrapper">
      <Input label="Email"></Input>
      <Button small>Subscribirse</Button>
      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          margin-bottom: 20px;
        }
        .wrapper :global(input) {
          height: 55px;
          width: 100%;
        }
        .wrapper :global(button) {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}
