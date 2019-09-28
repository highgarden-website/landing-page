import cn from "classnames"

// Conditionally wrap a React element with another
const wrap = (needed, children, tag) => {
  if (!needed) return children

  return React.createElement(tag, {}, children)
}

// Wrap the text in modifier elements like bold and italics
const wrapModifiers = (
  component,
  { mark, underline, strike, bold, italic }
) => {
  let result = component

  result = wrap(mark, result, "mark")
  result = wrap(underline, result, "u")
  result = wrap(strike, result, "s")
  result = wrap(bold, result, "b")
  result = wrap(italic, result, "i")

  return result
}

const presets = {
  h1: `
    font-size: calc(32px + (62  - 32) * (100vw - 320px) / (1920 - 320));
    line-height: 100%;
    letter-spacing: -0.02em;
    `,
  h2: `
    font-size: calc(28px + (50 - 28 ) * (100vw - 320px) / (1920 - 320));
    line-height: 150%;
    margin-bottom: 0.5em;
    letter-spacing: -0.02em;
    `,
  h3: `
    font-size: calc(24px + (40 - 24) * (100vw - 320px) / (1920 - 320));
    line-height: 125%;
    letter-spacing: -0.02em;
  `,
  h4: `
    font-size: calc(18px + (22 - 18) * (100vw - 320px) / (1920 - 320));
    font-weight: normal;
    letter-spacing: -.020625rem;
  `,
  h5: `
    font-size: calc(15px + (25  - 15) * (100vw - 320px) / (1920 - 320));
    margin: 0;
    margin-bottom: 0.5em;
    letter-spacing: -0.05em;
    line-height: 1.5em;
    `,
  p: `
    font-size: 16px;
    line-height: 1.5em;
  `,
  small: `
    font-size: calc(14px + (15 - 14) * (100vw - 320px) / (1920 - 320));
    line-height: 1.5em;
  `,
  description: `
    text-transform: uppercase;
    font-size: 12px;
  `,
  span: ``
}

const getComponent = defaultElement => {
  const C = ({
    type,
    noMargin,
    large,
    xlarge,
    xsmall,
    weight,
    code,
    uppercase,
    capitalize,
    Component = defaultElement,
    children,
    className,
    ...props
  }) => {
    return (
      <Component
        className={cn(className, { "geist-text-no-margin": noMargin })}
        {...props}
      >
        {children}
        <style jsx>
          {`
            ${Component} {
              font-family: "Gilroy", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
              ${presets[defaultElement]}
              ${xlarge ? "line-height: 1.01em;" : ""};
              ${noMargin ? "margin: 0;" : ""}
              ${weight ? `font-weight: ${weight};` : ""}
              ${uppercase ? "text-transform: uppercase;" : ""}
              ${capitalize ? "text-transform: capitalize;" : ""};
              ${large ? "font-size: 1.25rem;" : ""};
              ${xlarge ? "font-size: 4.5rem;" : ""};
              ${xsmall ? "font-size: 0.875rem;" : ""};
            }

            @media (max-width: 1050px) {
              ${Component} {
                ${xlarge ? "font-size: 2rem;" : ""};
                ${xlarge ? "line-height: 1.31em;" : ""};
              }
            }
          `}
        </style>
      </Component>
    )
  }

  return C
}

export const H1 = getComponent("h1")
export const H2 = getComponent("h2")
export const H3 = getComponent("h3")
export const H4 = getComponent("h4")
export const H5 = getComponent("h5")
export const P = getComponent("p")
export const Small = getComponent("small")
export const Description = getComponent("description")
export const Span = getComponent("span")

const components = [H1, H2, H3, H4, H5, P, Small, Description, Span]

const Text = ({
  // HTML element
  Component,
  // styling
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  small,
  description,
  span,
  // wrapper
  mark,
  underline,
  strike,
  bold,
  italic,
  // react
  children,
  ...props
}) => {
  const Styler =
    components[
      [h1, h2, h3, h4, h5, p, small, description, span].indexOf(true)
    ] || P

  return (
    <Styler Component={Component} {...props}>
      {wrapModifiers(children, { mark, underline, strike, bold, italic })}
    </Styler>
  )
}

export default Text
