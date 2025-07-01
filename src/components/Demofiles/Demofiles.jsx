import React from "react";
import Button from "../Button/Button";
import "./Demofiles.css";

const colors = [
  { name: "--white", value: "var(--white)" },
  { name: "--text-color", value: "var(--text-color)" },
  { name: "--secondary-text-color", value: "var(--secondary-text-color)" },
  { name: "--primary-color", value: "var(--primary-color)" },
  { name: "--primary-color-hover", value: "var(--primary-color-hover)" },
  { name: "--secondary-color", value: "var(--secondary-color)" },
  { name: "--secondary-color-hover", value: "var(--secondary-color-hover)" },
  { name: "--tertiary-color", value: "var(--tertiary-color)" },
  { name: "--tertiary-color-hover", value: "var(--tertiary-color-hover)" },
  { name: "--background-color", value: "var(--background-color)" },
  { name: "--accent-color", value: "var(--accent-color)" },
  { name: "--accent-color-hover", value: "var(--accent-color-hover)" },
];

const DemoFiles = () => {
  return (
    <div>
      <section id="colorSection">
        <div className="color-boxes">
          {colors.map((color) => (
            <div>
              <div
                key={color.name}
                className="color-box"
                style={{ backgroundColor: color.value }}
              >
                <p>{color.name}</p>
                <p style={{ color: "white" }}>{color.name}</p>
              </div>
              <p>
                {getComputedStyle(document.documentElement).getPropertyValue(
                  color.name
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section id="ButtonSection">
        {["primary", "secondary", "tertiary", "ghost"].map((type) => (
          <div className="buttonRow" key={type}>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <div className="buttondiv">
                <Button
                  key={`${type}-${size}`}
                  text={type.charAt(0).toUpperCase() + type.slice(1)}
                  type={type}
                  color="#6c4cff"
                  size={size}
                  onClick={() => alert("twerkt zunne")}
                />
                <p>{size}</p>
              </div>
            ))}
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <div className="buttondiv">
                <Button
                  key={`${type}-${size}`}
                  text="+"
                  type={type}
                  color="#6c4cff"
                  size={size}
                  onClick={() => alert("twerkt zunne")}
                />
                <p>{size}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
      <section id="TypographySection">
        <div className="typography">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Dit is een standaard paragraaf tekst.</p>
          <small>Dit is small tekst.</small>
        </div>
      </section>
    </div>
  );
};

export default DemoFiles;
